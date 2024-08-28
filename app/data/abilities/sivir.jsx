import {useMemo} from 'react';
import {pre, post, cd} from '../Abilitycalc'

export default function sivir({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const numMemo = useMemo(() => {
    const physDef = (1 - mod.defPhysRed);
    const magDef = (1 - mod.defMagRed);
    const cdr = mod.atkcdr

    const P = {
      base: 30,
      growth: (1 * currentLevel),      
    };

    const Q = {
      cdbase: 9.5,
      cdgrowth: 0.5,

      base: 10,
      growth: 20,
      mod: (atk.attack*70/100)+(atk.ap * 60/100),
      growthmod: (atk.attack * 5/100)
    };

    const W = {
      cdbase: 12,
      cdgrowth: 0,

      base: 8,
      growth: 2,

      mod: (atk.attack * 17/100),
      growthmod:(atk.attack * 3 / 100),
    };

    const E = {
      cdbase: 22,
      cdgrowth: 2,

      heal: {
        mod: (atk.attack * 65 / 100)+(atk.ap*50/100),
        growthmod: (atk.attack * 5 /100)
      },
    };

    const R = {
      cdbase: 80,
      cdgrowth: 10,

      base: 1,
      growth: 1
    }

    return {
      P: {
        moveSpeed: pre(P, 2),        
      },

      Q: {
        cd: {
          1: cd(Q, 1, cdr),
          2: cd(Q, 2, cdr),
          3: cd(Q, 3, cdr),
          4: cd(Q, 4, cdr)
        },

        pre: {          
          1:Math.round((pre(Q, 1) * (Math.min(1 + (atk.critChance / 2), 2)))) ,
          2:Math.round((pre(Q, 2) * (Math.min(1 + (atk.critChance / 2), 2)))) ,
          3:Math.round((pre(Q, 3) * (Math.min(1 + (atk.critChance / 2), 2)))) ,
          4:Math.round((pre(Q, 4) * (Math.min(1 + (atk.critChance / 2), 2)))) 
        },

        post: {
          1:Math.round((post(Q, 1, physDef) * (Math.min(1 + (atk.critChance / 2), 2)))) ,
          2:Math.round((post(Q, 2, physDef) * (Math.min(1 + (atk.critChance / 2), 2)))) ,
          3:Math.round((post(Q, 3, physDef) * (Math.min(1 + (atk.critChance / 2), 2)))) ,
          4:Math.round((post(Q, 4, physDef) * (Math.min(1 + (atk.critChance / 2), 2)))) ,
        }
      },

      W: {
        cd: {
          1: cd(W, 1, cdr),
          2: cd(W, 2, cdr),
          3: cd(W, 3, cdr),
          4: cd(W, 4, cdr)
        },

        pre: {
          1: W.base + W.mod,
          2: W.base + (W.growth + W.growthmod) + W.mod,
          3: W.base + (W.growth + W.growthmod) * 2 + W.mod,
          4: W.base + (W.growth + W.growthmod) * 3 + W.mod,
        },

        post: {
          1: (W.base + W.mod) * (1 - mod.defPhysRed),
          2: (W.base + (W.growth + W.growthmod) + W.mod) * (1 - mod.defPhysRed),
          3: (W.base + (W.growth + W.growthmod) * 2 + W.mod) * (1 - mod.defPhysRed),
          4: (W.base + (W.growth + W.growthmod) * 3 + W.mod) * (1 - mod.defPhysRed),
        }
      },

      E: {
        cd: {
          1: cd(E, 1, cdr),
          2: cd(E, 2, cdr),
          3: cd(E, 3, cdr),
          4: cd(E, 4, cdr)
        },
        
        heal: {
          1: pre(E.heal, 1),
          2: pre(E.heal, 2),
          3: pre(E.heal, 3),
          4: pre(E.heal, 4),
        }
      },

      R: {
        cd: {
          1: cd(R, 1, cdr),
          2: cd(R, 2, cdr),
          3: cd(R, 3, cdr)
        },
        
        ad: {
          1: pre(R, 1),
          2: pre(R, 2),
          3: pre(R,3)
        }
      }
      


    }
    
  }, [currentLevel, mod, bonus, atk, def])

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> FLEET OF FOOT
          </h4>
    
          <p>
            Gains <abbr className='stat--moveSpeed' title='31 + 1 per level'>{numMemo.P.moveSpeed} Movement Speed</abbr> for 1.5 seconds after dealing damage to an enemy champion with an attack or ability.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BOOMERANG BLADE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{numMemo.Q.cd[1]} / 
            {' '}{numMemo.Q.cd[2]} / 
            {' '}{numMemo.Q.cd[3]} / 
            {' '}{numMemo.Q.cd[4]} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className='stat--ad'>Damage</h5>
          <p className='stat--ad'>Pre-mitigation:
            {' '}{numMemo.Q.pre[1]} / 
            {' '}{numMemo.Q.pre[2]} / 
            {' '}{numMemo.Q.pre[3]} / 
            {' '}{numMemo.Q.pre[4]}
          </p>

          <p className='stat--ad'>Post-mitigation:
            {' '}{numMemo.Q.post[1]} / 
            {' '}{numMemo.Q.post[2]} / 
            {' '}{numMemo.Q.post[3]} / 
            {' '}{numMemo.Q.post[4]}
          </p>
    
          <br />
          
          <p>
            Sivir hurls her crossblade, dealing <span className='stat--ad'>10 (+20 per ability level) (+70% (+5% per ability level) AD) (<span className='stat--ap'>+60% AP</span>) physical damage</span> to all enemies it cuts through.  
          </p>
          <p>
            For every <span className='stat--critChance'>1% Critical Rate</span>, damage is increased by 0.5%.
          </p>
          <p>
            The higher the <span className='stat--as'>Attack Speed</span> the shorter is the cast time.
          </p>
          <p>
            Deals <span className='stat--ad'>80%</span> damage against non-champion enemies.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> RICOCHET
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{numMemo.W.cd[1]} / 
            {' '}{numMemo.W.cd[2]} / 
            {' '}{numMemo.W.cd[3]} /  
            {' '}{numMemo.W.cd[4]} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} 
          </h5>

          <h5 className='stat--as'>Bonus Attack Speed:
          {' '}{(champ.asBase * 25 / 100).toFixed(3)} /
          {' '}{(champ.asBase * 30 / 100).toFixed(3)} /
          {' '}{(champ.asBase * 35 / 100).toFixed(3)} /
          {' '}{(champ.asBase * 40 / 100).toFixed(3)} /
          </h5>

          <h5 className='stat--ad'>Bounce damage</h5>
          <p className='stat--ad'>Initial:
            {' '}{numMemo.W.pre[1]} /
            {' '}{numMemo.W.pre[2]} /
            {' '}{numMemo.W.pre[3]} /
            {' '}{numMemo.W.pre[4]}
          </p>

          <p className='stat--ad'>Current target: 
          {' '}{numMemo.W.post[1]} /
            {' '}{numMemo.W.post[2]} /
            {' '}{numMemo.W.post[3]} /
            {' '}{numMemo.W.post[4]}
          </p>
    
          <br />
          <p>
            Gains <span className='stat--as'>25% / 30% / 35% /40% Attack Speed</span> for 4 seconds. Sivir's attacks bounce to nearby enemies dealing <span className='stat--ad'>8 / 10 / 12 / 14 (+17/20/23/26% AD) physical damage</span>.
          </p>
          <p>
            If the first attack <span className='stat--critChance'>crits</span>, so does all the bounces from this attack.
          </p>

          <p>
            Each enemy can be hit by maximum 2 bounces.
          </p>

          <p>
            Deals <span className='stat--ad'>75%</span> damage to minions.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SPELL SHIELD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{numMemo.E.cd[1]} / 
            {' '}{numMemo.E.cd[2]} / 
            {' '}{numMemo.E.cd[3]} / 
            {' '}{numMemo.E.cd[4]}
          </h5>

          <h5 className='stat--hp'>Healing:</h5>
          <p className='stat--hp'>
            {numMemo.E.heal[1]} /
            {' '}{numMemo.E.heal[2]} /
            {' '}{numMemo.E.heal[3]} /
            {' '}{numMemo.E.heal[4]}
          </p>
                
          <br />
          <p>
            Grants a <span className='stat--magres'>spell shield</span> for 2 seconds. Heals herself for <span className='stat--ad'>65% (+5% per ability level) AD</span> + <span className='stat--ap'>50% AP</span> and gains <span className='stat--armor'>Fleet of Foot</span> when she blocks an ability.
          </p>
          <p>
            If the block fails, refunds half of ability cooldown.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> ON THE HUNT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{numMemo.R.cd[1]} / 
            {' '}{numMemo.R.cd[2]} / 
            {' '}{numMemo.R.cd[3]}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>
    
          <br />
          <p>
            Grants <span className='stat--moveSpeed'>15% Movement Speed</span> to nearby allied champions for <b>10 / 11 / 12</b> seconds. During this time all basic abilities cooldowns are reduced by <b>25% / 25% / 30%</b>.
          </p>
          <p>
            Gains 1 stack of <span className='stat--armor'>Morale</span> for every autoattack or ability landed on enemy champions. Gains 2 stacks of <span className='stat--armor'>Morale</span> on champion takedowns.
          </p>

          <p>
            Each stack of <span className='stat--armor'>Morale</span> grants <span className='stat--ad'>{numMemo.R.ad[1]} / {numMemo.R.ad[2]} / {numMemo.R.ad[3]} Attack Damage</span>.
          </p>

          <p>
            At 8 stacks grants additional bonus of <span className='stat--moveSpeed'>30% bonus Movement Speed</span> to allied champions and refreshes <span className='stat--armor'>On The Hunt's</span> duration.
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