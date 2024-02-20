export default function nunu({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CALL OF THE FRELJORD
          </h4>
    
          <p>
          Gains <abbr title="30%" className="stat--as">{(champ.asBase * 30 / 100).toFixed(3)} Attack Speed</abbr> and <abbr title="10%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 10 / 100)} Movement Speed</abbr>  for 4 seconds upon damaging an enemy champion, large monster or structure.
          </p>

          <p>
          A nearby allied champion with the fastest Attack Speed gains half this bonus.
          </p>

          <p>
          Cannot trigger on the same target for 8 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> CONSUME
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((80)+(atk.ap * 70 / 100)+(bonus.health * 9 / 100)))} / 
            {' '}{Math.round(((115)+(atk.ap * 70 / 100)+(bonus.health * 9 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 70 / 100)+(bonus.health * 9 / 100)))} / 
            {' '}{Math.round(((185)+(atk.ap * 70 / 100)+(bonus.health * 9 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((55)+(atk.ap * 65 / 100)+(bonus.health * 5 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 65 / 100)+(bonus.health * 5 / 100)))} / 
            {' '}{Math.round(((165)+(atk.ap * 65 / 100)+(bonus.health * 5 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 65 / 100)+(bonus.health * 5 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((55)+(atk.ap * 65 / 100)+(bonus.health * 5 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 65 / 100)+(bonus.health * 5 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((165)+(atk.ap * 65 / 100)+(bonus.health * 5 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 65 / 100)+(bonus.health * 5 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Takes a bite out of the enemy, dealing <span className="stat--ap">55 / 110 / 165 / 220 (+65% AP) (<span className="stat--hp">+5% bonus Health</span>) magic damage</span> and healing for <span className="stat--hp">80 / 115 / 150 / 185 (<span className="stat--ap">+70% AP</span>) (+9% bonus Health)</span>. The healing is increased by 50% when Nunu and Willump are below 50% Maximum Health.
          </p>

          <p>
          Deals <span className="stat--critChance"> 350 / 500 / 650 / 800 true damage</span> against minions and monsters instead.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BIGGEST SNOWBALL EVER!
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 30 / 100)))} - {Math.round(((175)+(atk.ap * 150 / 100)))} / 
            {' '}{Math.round(((48)+(atk.ap * 30 / 100)))} - {Math.round(((240)+(atk.ap * 150 / 100)))} / 
            {' '}{Math.round(((61)+(atk.ap * 30 / 100)))} - {Math.round(((305)+(atk.ap * 150 / 100)))} / 
            {' '}{Math.round(((74)+(atk.ap * 30 / 100)))} - {Math.round(((370)+(atk.ap * 150 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} - {Math.round(((175)+(atk.ap * 150 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((48)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} - {Math.round(((240)+(atk.ap * 150 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((61)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} - {Math.round(((305)+(atk.ap * 150 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((74)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} - {Math.round(((370)+(atk.ap * 150 / 100))* (1 - mod.defMagRed))}           
          </p>
    
          <p>
          Willam begins rolling a snowball that increases in size and speed over 12 seconds. The snowball explodes upon colliding with enemy champions, large monsters or terrain, dealing <span className="stat--ap">35 / 48 / 61 / 74 (+30% AP) to 175 / 240 / 305 / 370 (+150% AP) magic damage</span> to enemies and knocking them airborne for 0.5 - 1.25 seconds, increasing with the size of the snowball. 
          </p>

          <p>
          <b>Re-cast:</b> Releases the snowball, causing it to explode on the first enemy hit. 
          </p>

          <p>
          Removes slows on cast and is immune to slows during rolling.
          Deals 33.33% damage to minions and small monsters. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SNOWBALL BARRAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Snowball damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((10)+(atk.ap * 5 / 100)))} / 
            {' '}{Math.round(((14)+(atk.ap * 5 / 100)))} / 
            {' '}{Math.round(((18)+(atk.ap * 5 / 100)))} / 
            {' '}{Math.round(((22)+(atk.ap * 5 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((10)+(atk.ap * 5 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((14)+(atk.ap * 5 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((18)+(atk.ap * 5 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((22)+(atk.ap * 5 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--magres">
          <abbr title="to current target">William Damage:</abbr> 
          </h5>

          

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round((def.health * (3 + atk.ap * 0.8)/100) * (1 - mod.defMagRed))} - 
            {Math.round((def.health * (15 + atk.ap * 4)/100)* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Channels up to 2.5 seconds, throwing snowballs that deal <span className="stat--ap">10 / 14 / 18 / 22 (+5% AP) magic damage</span> 
          </p>

          <p>
          When the channel ends, William deals <span className="stat--ap">magic damage</span> equal to <span className="stat--hp">3% (<span className="stat--ap">+0.8% AP</span> )</span> - <span className="stat--hp">15% (<span className="stat--ap">4% AP</span> )</span> of the enemies' max Health and roots them for 0.5 - 1.5 seconds. Damage and root duration scale with number of snowball hits on the target. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> ABSOLUTE ZERO
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--armor">
            Shield:
          </h5>

          <p className="stat--armor">
                {Math.round(((65)+(atk.ap * 180 / 100)+(bonus.health * 30 / 100)))} / 
            {' '}{Math.round(((75)+(atk.ap * 180 / 100)+(bonus.health * 40 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 180 / 100)+(bonus.health * 50 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)))} - {Math.round(((915)+(atk.ap * 275 / 100)))} / 
            {' '}{Math.round(((240)+(atk.ap * 50 / 100)))} - {Math.round(((1245)+(atk.ap * 275 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 50 / 100)))} - {Math.round(((1575)+(atk.ap * 275 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} - {Math.round(((915)+(atk.ap * 275 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} - {Math.round(((1245)+(atk.ap * 275 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((300)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} - {Math.round(((1575)+(atk.ap * 275 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Gains a shield that absorbs <span className="stat--hp">65 / 75 / 85 (<span className="stat--ap">+180% AP</span>) (+30 / 40 / 50% bonus HP) damage</span> and begins channeling for up to 3 seconds.
          </p>

          <p>
          Nearby enemies are slowed by <span className="stat--moveSpeed">50%, increasing to 95%</span>  over the duration. When the channel ends, nearby enemies take <span className="stat--ap">180 / 240 / 300 (+50% AP) </span> to <span className="stat--ap">915 / 1245 / 1575 (+275% AP) magic damage</span>, increased with channel duration.
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