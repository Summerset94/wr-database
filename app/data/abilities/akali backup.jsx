export default function akali({currentLevel, mod, bonus, atk, def}) {
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
            {' '}{Math.round(((20 + 8 * currentLevel)+(atk.attack * 60 / 100)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((20 + 8 * currentLevel)+(atk.attack * 60 / 100)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))}
          </p>

          <p>
          Dealing spell damage to a champion creates a ring of energy around them for 4 seconds. Exiting that ring empowers Akali's next autoattack to have 100 bonus range and deal <abbr title="20 + 8 * level">28-140</abbr> (<span className="stat--ad">+60% AD</span>,  <span className="stat--ap">+50% AP</span>) <span className="stat--ap"> magic damage</span>. Gain <abbr title="level 1-30 % / 5-40% / 11-50% / 15-60% source for levels: I'VE MADE IT THE F UP!" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 30 / 100)} / {Math.round(atk.moveSpeed * 40 / 100)} / {Math.round(atk.moveSpeed * 50 / 100)} / {Math.round(atk.moveSpeed * 60 / 100)} Movement Speed</abbr>  while moving toward the ring, crossing the ring Akali gains <abbr title="level 1-30 % / 5-40% / 11-50% / 15-60% source for levels: I'VE MADE IT THE F UP!" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 30 / 100)} / {Math.round(atk.moveSpeed * 40 / 100)} / {Math.round(atk.moveSpeed * 50 / 100)} / {Math.round(atk.moveSpeed * 60 / 100)} Movement Speed</abbr> while moving toward enemy champions for 2 seconds.
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
            {' '}{(2*mod.atkcdr).toFixed(1)} / 
            {' '}{(2*mod.atkcdr).toFixed(1)} / 
            {' '}{(2*mod.atkcdr).toFixed(1)} / 
            {' '}{(2*mod.atkcdr).toFixed(1)} 
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
            {' '}{Math.round(((35)+(atk.ap * 60 / 100)+(atk.attack*65/100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 60 / 100)+(atk.attack*65/100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 60 / 100)+(atk.attack*65/100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 60 / 100)+(atk.attack*65/100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 60 / 100)+(atk.attack*65/100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((70)+(atk.ap * 60 / 100)+(atk.attack*65/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((105)+(atk.ap * 60 / 100)+(atk.attack*65/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 60 / 100)+(atk.attack*65/100))* (1 - mod.defMagRed))}          
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
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} 
          </h5>
          <h5>
          Duration: 
            {' '}{5.5}S / 
            {' '}{6}S / 
            {' '}{6.5}S / 
            {' '}{7}S 
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
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--armor">
          Cost: 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} 
          </h5>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ad">Pre-mitigation: <br />
            Initial:
            {' '}{Math.round(((30)+(atk.ap * 30 / 100)+(atk.attack*25/100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 30 / 100)+(atk.attack*25/100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 30 / 100)+(atk.attack*25/100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100)+(atk.attack*25/100)))} <br />
            Recast:
            {' '}{Math.round(((70)+(atk.ap * 80 / 100)+(atk.attack*50/100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 80 / 100)+(atk.attack*50/100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 80 / 100)+(atk.attack*50/100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 80 / 100)+(atk.attack*50/100)))}
          </p>

          <p className="stat--ad">Post-mitigation: <br />
          Initial:
            {' '}{Math.round(((30)+(atk.ap * 30 / 100)+(atk.attack*25/100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 30 / 100)+(atk.attack*25/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 30 / 100)+(atk.attack*25/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100)+(atk.attack*25/100))* (1 - mod.defMagRed))} <br />
          Recast:
          {' '}{Math.round(((70)+(atk.ap * 80 / 100)+(atk.attack*50/100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 80 / 100)+(atk.attack*50/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 80 / 100)+(atk.attack*50/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 80 / 100)+(atk.attack*50/100))* (1 - mod.defMagRed))}
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
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ad">Pre-mitigation: <br />
            Initial:
            {' '}{Math.round(((80)+(atk.ap * 30 / 100)+(bonus.attack*50/100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 30 / 100)+(bonus.attack*50/100)))} / 
            {' '}{Math.round(((320)+(atk.ap * 30 / 100)+(bonus.attack*50/100)))}<br />
            Recast (minimum damage):
            {' '}{Math.round(((70)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: <br />
          Initial:
            {' '}{Math.round(((80)+(atk.ap * 30 / 100)+(bonus.attack*50/100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 30 / 100)+(bonus.attack*50/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((320)+(atk.ap * 30 / 100)+(bonus.attack*50/100))* (1 - mod.defMagRed))}<br />
          Recast (minimum damage):
          {' '}{Math.round(((70)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}
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