export default function galio({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities =  [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> COLOSSAL SMASH
          </h4>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ad">Pre/post-mitigation:
          {' '}{Math.round((15+ (12.5 * (currentLevel - 1)))+(atk.attack * 100 / 100) + (atk.ap * 50 / 100) + (atk.magres * 60 / 100))} / 
          {' '}{Math.round(((15+ (12.5 * (currentLevel - 1)))+(atk.attack * 100 / 100) + (atk.ap * 50 / 100) + (atk.magres * 60 / 100)) * (1 - mod.defMagRed))}
          </p>

          <p>
            Enhances his next attack to deal <abbr title="15-190 based on level">{Math.round((15 + (12.5 * (currentLevel - 1))))}</abbr> <span className="stat--ap">(<span className="stat--ad">+100% AD</span> +50% AP <span className="stat--magres">+60% MR</span>) magic damage</span> to nearby enemies.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> WINDS OF WAR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75} / 
            {' '}{75} / 
            {' '}{75} / 
            {' '}{75} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((115)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((205)+(atk.ap * 75 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 75 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((205)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))}</p> 

            <h5 className="stat--ap">
            Tornado damage (current target):
          </h5>
          <p className="stat--ad">Post-mitigation: 
          {' '}{Math.round(((def.health) * ((8 + atk.ap * 2)/100))* (1 - mod.defMagRed))}    
          </p>         
          
    
          <p>
          Fires two windblasts that deal <span className="stat--ap">70 / 115 / 160 / 205 (+75% AP) magic damage</span> and converge into a tornado.

          The tornado deals <span className="stat--ap">8% (+2% AP) magic damage</span>  of target's <span className="stat--hp">maximum Health</span>  over 1.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SHIELD OF DURAND
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 55 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 55 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--hp">Shield</h5>
          <p className="stat--hp">
            {Math.round(atk.health * 8 / 100)} /
            {' '}{Math.round(atk.health * 12 / 100)} / 
            {' '}{Math.round(atk.health * 16 / 100)} / 
            {' '}{Math.round(atk.health * 20 / 100)}
          </p>

          <h5 className="stat--armor">Damage reduction:</h5>
          <p className="stat--armor">Physical:
          {' '}{Math.round(12.5 + (atk.ap * 25 / 1000) + (atk.magres * 4 / 100))}% /
          {' '}{Math.round(15 + (atk.ap * 25 / 1000) + (atk.magres * 4 / 100))}% /
          {' '}{Math.round(17.5 + (atk.ap * 25 / 1000) + (atk.magres * 4 / 100))}% /
          {' '}{Math.round(20 + (atk.ap * 25 / 1000) + (atk.magres * 4 / 100))}%
          </p>
          <p className="stat--magres">Magical:
          {' '}{Math.round(25 + (atk.ap * 5 / 100) + (atk.magres * 8 / 100))}% /
          {' '}{Math.round(30 + (atk.ap * 5 / 100) + (atk.magres * 8 / 100))}% /
          {' '}{Math.round(35 + (atk.ap * 5 / 100) + (atk.magres * 8 / 100))}% /
          {' '}{Math.round(40 + (atk.ap * 5 / 100) + (atk.magres * 8 / 100))}%
          </p>         

          <p>
            <b>PASSIVE:</b> Every 12 seconds, upon taking magic damage, Galio gains a shield that absorbs <span className="stat--hp">8% / 12% / 16% / 20% Max health</span> <span className="stat--magres">magic damage</span> for 3.5 seconds. <br />

            <b>HOLD:</b>  Enters a defensive stance, slowing himself by <span className="stat--moveSpeed">15%</span> for up to 2 seconds, Takes <span className="stat--magres">25% / 30% / 35% / 40% (<span className="stat--ap">+5% AP</span>  +8% MR) reduced magic damage</span> and <span className="stat--armor">12.5% / 15%  / 17.5% / 20% (<span className="stat--ap">+2.5% AP</span> <span className="stat--magres">+4% MR</span>) reduced physical damage</span>. <br />
            <b>RELEASE:</b> Deals <span className="stat--ap">40 / 80 / 120 / 160 (+55% AP) magic damage</span> to nearby enemies and <b>taunts them for 0.5-1.5 seconds</b>, increased with hold time.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> JUSTICE PUNCH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((90)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((240)+(atk.ap * 90 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((90)+(atk.ap * 90 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Dashes forward until he hits an enemy champion or terrain, dealing <span className="stat--ap">90 / 140 / 190 / 240 (+90% AP) magic damage</span> to enemies and knocking them up for <b>0.75 seconds</b>. <br />

          Deals <b>50%</b> damage to minions and monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> HERO'S ENTRANCE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(100*mod.atkcdr).toFixed(1)} / 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Grants <b>Shield of Durand's</b> passive shield for 5 seconds to all allied champions near the target and designates the position as his landing spot.

          After 2.5 seconds Galio arrives at the location, dealing <span className="stat--ap">150 / 250 / 350 (+70% AP) magic damage</span> to nearby enemies and knocking them up for 0.75 seconds.
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