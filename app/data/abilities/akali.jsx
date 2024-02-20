import {useMemo} from 'react';
import {pre, post, cd} from '../Abilitycalc'

export default function akali({currentLevel, mod, bonus, atk, def}) {

  const numMemo = useMemo(() => {
    const physDef = (1 - mod.defPhysRed);
    const magDef = (1 - mod.defMagRed);
    const cdr = mod.atkcdr

    const P = {
      base: 20,
      growth: Number(8 * currentLevel),
      mod: (atk.attack * 60 / 100)+(atk.ap * 50 / 100)
    };

    const Q = {
      cdbase: 2,
      cdgrowth: 0,

      base: 35,
      growth: 35,
      mod: (atk.ap * 60 / 100)+(atk.attack*65/100)
    };

    const W = {
      cdbase: 18,
      cdgrowth: 0
    };

    const E = {
      cdbase: 15,
      cdgrowth: 0,

      init: {
        base: 30,
        growth: 30,
        mod: (atk.ap * 30 / 100)+(atk.attack*25/100)
      },

      recast: {
        base: 70,
        growth: 50,
        mod: (atk.ap * 80 / 100)+(atk.attack*50/100)
      }
    };

    const R = {
      cdbase: 85,
      cdgrowth: 20,

      init: {
        base: 80,
        growth: 120,
        mod: (atk.ap * 30 / 100)+(bonus.attack*50/100)
      },

      recast: {
        base: 70,
        growth: 70,
        mod: (atk.ap * 30 / 100)
      }
    }

    return {
      P: {
        pre: pre(P, 2),
        post: post(P, 2, magDef)
      },

      Q: {
        cd: {
          1: cd(Q, 1, cdr),
          2: cd(Q, 2, cdr),
          3: cd(Q, 3, cdr),
          4: cd(Q, 4, cdr)
        },

        pre: {
          1: pre(Q, 1),
          2: pre(Q, 2),
          3: pre(Q, 3),
          4: pre(Q, 4)
        },

        post: {
          1: post(Q, 1, magDef),
          2: post(Q, 2, magDef),
          3: post(Q, 3, magDef),
          4: post(Q, 4, magDef),
        }
      },

      W: {
        cd: {
          1: cd(W, 1, cdr),
          2: cd(W, 2, cdr),
          3: cd(W, 3, cdr),
          4: cd(W, 4, cdr)
        }
      },

      E: {
        cd: {
          1: cd(E, 1, cdr),
          2: cd(E, 2, cdr),
          3: cd(E, 3, cdr),
          4: cd(E, 4, cdr)
        },

        init: {
          pre: {
            1: pre(E.init, 1),
            2: pre(E.init, 2),
            3: pre(E.init, 3),
            4: pre(E.init, 4),
          },
          post: {
            1: post(E.init, 1, magDef),
            2: post(E.init, 2, magDef),
            3: post(E.init, 3, magDef),
            4: post(E.init, 4, magDef),
          }
        },

        recast: {
          pre: {
            1: pre(E.recast, 1),
            2: pre(E.recast, 2),
            3: pre(E.recast, 3),
            4: pre(E.recast, 4),
          },
          post: {
            1: post(E.recast, 1, magDef),
            2: post(E.recast, 2, magDef),
            3: post(E.recast, 3, magDef),
            4: post(E.recast, 4, magDef),
          }
        }
      },

      R: {
        cd: {
          1: cd(R, 1, cdr),
          2: cd(R, 2, cdr),
          3: cd(R, 3, cdr)
        },

        init: {
          pre: {
            1: pre(R.init, 1),
            2: pre(R.init, 2),
            3: pre(R.init, 3)
          },
          post: {
            1: post(R.init, 1, magDef),
            2: post(R.init, 2, magDef),
            3: post(R.init, 3, magDef)
          }
        },

        recast: {
          pre: {
            1: pre(R.recast, 1),
            2: pre(R.recast, 2),
            3: pre(R.recast, 3)
          },
          post: {
            1: post(R.recast, 1, magDef),
            2: post(R.recast, 2, magDef),
            3: post(R.recast, 3, magDef)
          }
        }
      }
      


    }
    
  }, [currentLevel, mod, bonus, atk, def])


  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> ASSASIN'S MARK
          </h4>
         

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{numMemo.P.pre}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{numMemo.P.post}
          </p>

          <p>
          Dealing spell damage to a champion creates a ring of energy around them for 4 seconds. Exiting that ring empowers Akali's next autoattack to have 100 bonus range and deal <abbr title="20 + 8 per level" className='stat--ap'>28-140</abbr> (<span className="stat--ad">+60% AD</span>,  <span className="stat--ap">+50% AP</span>) <span className="stat--ap"> magic damage</span>. Gain <abbr title="level 1-30 % / 5-40% / 11-50% / 15-60% source for levels: I'VE MADE IT THE F UP!" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 30 / 100)} / {Math.round(atk.moveSpeed * 40 / 100)} / {Math.round(atk.moveSpeed * 50 / 100)} / {Math.round(atk.moveSpeed * 60 / 100)} Movement Speed</abbr>  while moving toward the ring, crossing the ring Akali gains <abbr title="level 1-30 % / 5-40% / 11-50% / 15-60% source for levels: I'VE MADE IT THE F UP!" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 30 / 100)} / {Math.round(atk.moveSpeed * 40 / 100)} / {Math.round(atk.moveSpeed * 50 / 100)} / {Math.round(atk.moveSpeed * 60 / 100)} Movement Speed</abbr> while moving toward enemy champions for 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> FIVE POINT STRIKE
          </h4>

          <h5>
          Cooldown: 
            {' '}{numMemo.Q.cd[1]} / 
            {' '}{numMemo.Q.cd[2]} / 
            {' '}{numMemo.Q.cd[3]} / 
            {' '}{numMemo.Q.cd[4]} 
          </h5>
           <h5 className="stat--armor">
          Cost: 
            {' '}{105} / 
            {' '}{90} / 
            {' '}{75} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{numMemo.Q.pre[1]} / 
            {' '}{numMemo.Q.pre[2]} / 
            {' '}{numMemo.Q.pre[3]} / 
            {' '}{numMemo.Q.pre[4]}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{numMemo.Q.post[1]} / 
            {' '}{numMemo.Q.post[2]} / 
            {' '}{numMemo.Q.post[3]} / 
            {' '}{numMemo.Q.post[4]}  
          </p>

          <p>
            Akali throws five kunais in a cone in the target direction, dealing <span className="stat--ap">35 / 70 / 105 / 140</span> (<span className="stat--ad">+65 AD</span>, <span className="stat--ap">+60 AP</span> ) <span className="stat--ap">Magic Damage</span> to enemies hit, as well as slowing them by <abbr title="50%" className="stat--moveSpeed">{(Math.round(def.moveSpeed/2))} Movespeed</abbr> for 0.5 seconds if they were hit at maximum range.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> TWILIGHT SHROUD
          </h4>

          <h5>
          Cooldown: 
          {' '}{numMemo.W.cd[1]} / 
            {' '}{numMemo.W.cd[2]} / 
            {' '}{numMemo.W.cd[3]} / 
            {' '}{numMemo.W.cd[4]} 
          </h5>
          <h5>
          Duration: 
            {' '}{5.5} S / 
            {' '}{6} S / 
            {' '}{6.5} S / 
            {' '}{7} S 
          </h5>
          <h5>
          Bonus Movement Speed: 
            {' '}{Math.round(atk.moveSpeed *30 /100)} / 
            {' '}{Math.round(atk.moveSpeed *35 /100)} / 
            {' '}{Math.round(atk.moveSpeed *40 /100)} / 
            {' '}{Math.round(atk.moveSpeed *45 /100)} 
          </h5>
           

          <p>
            Akali restores <span className="armor">100 energy</span>  and detonates a smoke bomb in the target direction, creating a shroud for a few seconds that expands into a ring over the duration. The shroud will slowly move to encircle a nearby enemy. While the shroud is active, Akali's maximum energy is increased by <span className="stat--armor">100.</span> <br />
            While inside the shroud, Akali gains invisibility and <b className="stat--moveSpeed">30% / 35% / 40% / 45% bonus movement speed</b>. Attacking or casting abilities breaks the stealth, preventing her from regaining it again for 0.8 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SHURIKEN FLIP
          </h4>

          <h5>
          Cooldown: 
            {' '}{numMemo.E.cd[1]} / 
            {' '}{numMemo.E.cd[2]} / 
            {' '}{numMemo.E.cd[3]} / 
            {' '}{numMemo.E.cd[4]} 
          </h5>
           <h5 className="stat--armor">
          Cost: 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} 
          </h5>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ap">Pre-mitigation: <br />
            Initial:
            {' '}{numMemo.E.init.pre[1]} / 
            {' '}{numMemo.E.init.pre[2]} / 
            {' '}{numMemo.E.init.pre[3]} / 
            {' '}{numMemo.E.init.pre[4]} <br />
            Recast:
            {' '}{numMemo.E.recast.pre[1]} / 
            {' '}{numMemo.E.recast.pre[2]} / 
            {' '}{numMemo.E.recast.pre[3]} / 
            {' '}{numMemo.E.recast.pre[4]}
          </p>

          <p className="stat--ap">Post-mitigation: <br />
          Initial:
            {' '}{numMemo.E.init.post[1]} / 
            {' '}{numMemo.E.init.post[2]} / 
            {' '}{numMemo.E.init.post[3]} / 
            {' '}{numMemo.E.init.post[4]} <br />
            Recast:
            {' '}{numMemo.E.recast.post[1]} / 
            {' '}{numMemo.E.recast.post[2]} / 
            {' '}{numMemo.E.recast.post[3]} / 
            {' '}{numMemo.E.recast.post[4]}
          </p>

          <p>
            Akali flips backward and fires a shuriken forward, dealing <span className="stat--ap">30 / 60 / 90 / 120 (<span className="stat--ad">+25% AD</span> +30% AP) magic damage</span>. The first enemy or smoke cloud hit is marked. Re-casting dashes to the marked target, dealing <span className="stat--ap">70 / 120 / 170 / 220 (<span className="stat--ad"> +50% AD</span> +80% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> PERFECT EXECUTION
          </h4>

          <h5>
          Cooldown: 
            {' '}{numMemo.R.cd[1]} / 
            {' '}{numMemo.R.cd[2]} / 
            {' '}{numMemo.R.cd[3]}
          </h5>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ad">Pre-mitigation: <br />
            Initial:
            {' '}{numMemo.R.init.pre[1]} / 
            {' '}{numMemo.R.init.pre[2]} / 
            {' '}{numMemo.R.init.pre[3]}<br />
            Recast (minimum damage):
            {' '}{numMemo.R.recast.pre[1]} / 
            {' '}{numMemo.R.recast.pre[2]} / 
            {' '}{numMemo.R.recast.pre[3]}
          </p>

          <p className="stat--ad">Post-mitigation: <br />
          Initial:
            {' '}{numMemo.R.init.post[1]} / 
            {' '}{numMemo.R.init.post[2]} / 
            {' '}{numMemo.R.init.post[3]}<br />
          Recast (minimum damage):
          {' '}{numMemo.R.recast.post[1]} / 
            {' '}{numMemo.R.recast.post[2]} / 
            {' '}{numMemo.R.recast.post[3]}
          </p>
           

          <p>
            Akali dashes through an enemy champion, dealing <span className="stat--ap">80 / 200 / 320 (<span className="stat--ad">+50% AD</span> +30% AP) magic damage</span>. Can be cast again after 2.5 seconds. <br />
            Recast: Dashes in target direction, dealing <span className="stat--ap">70 / 140 / 210 (+30% AP to +90% AP) magic damage</span> based upon enemies missing Health.
          </p>
        </div>
    }
  ];

  return(
    <>
    {abilities.map((ability, index) => (
      <div className="abilitiesTile">
        <div key={index}>{ability.description}</div>
        </div>
    ))}   
    </>
     
  )
}