export default function brand({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> BLAZE
          </h4> 

          <p>
           Brand abilities set enemies Ablaze dealing <span className="stat--ap">3% ({Math.round(def.health * 3 / 100 * (1 - mod.defMagRed))})</span> of their max health as magic damage over 4 seconds. <br />
           Stacking Ablaze 3 times on champions and large monsters causes them to detonate after 2 seconds dealing <span className="stat--ap">10% (+0.02% AP)</span> of <b>each enemy</b> max Health as <span className="stat--ap">Magic damage</span>. (current target: <span className="stat--ap">{Math.round(def.health*((10 +(atk.ap * 0.02))/ 100)* (1 - mod.defMagRed))}</span> damage ) <br />
           Enemies that detonate cannot be set Ablaze again for 4 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> SEAR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
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
            {' '}{Math.round(((80)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 55 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 55 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Launch a fireball forward that deals <span className="stat--ap">80 / 120 / 160 / 200 (+55%) magic damage</span> to the first enemy i hits. If the target is <b>ablaze</b>, stun them for 1.75 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> PILLAR OF FLAME
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75} / 
            {' '}{85} / 
            {' '}{95} / 
            {' '}{105} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((235)+(atk.ap * 55 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 55 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((125)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((235)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--critChance">
           Ablazed damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 55 / 100))*1.3)} / 
            {' '}{Math.round(((125)+(atk.ap * 55 / 100))*1.3)} / 
            {' '}{Math.round(((180)+(atk.ap * 55 / 100))*1.3)} / 
            {' '}{Math.round(((235)+(atk.ap * 55 / 100))*1.3)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round((((70)+(atk.ap * 55 / 100))*1.3) * (1 - mod.defMagRed))} / 
            {' '}{Math.round((((125)+(atk.ap * 55 / 100))*1.3)* (1 - mod.defMagRed))} / 
            {' '}{Math.round((((180)+(atk.ap * 55 / 100))*1.3)* (1 - mod.defMagRed))} / 
            {' '}{Math.round((((235)+(atk.ap * 55 / 100))*1.3)* (1 - mod.defMagRed))}          
          </p>          
    
          <p>
           Target an area, after a short delay create a pillar of flame at targeted area that deals <span className="stat--ap">70 / 125 / 180/ 235 (+55% AP) magic damage</span> to enemies in the area. Units that ablaze take <b>30%</b> additional damage. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> CONFLAGRATION
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
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Set the target aflame and spread conflagration to all enemies near initial target, dealing <span className="stat--ap">60 / 90 / 120 / 150 (+50%AP) magic damage</span>. When initial target is <b>ablaze</b>, Conflagration's spread radius doubles.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> PYROCLASM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
          Bounce damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((300)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Throw a fireball that bounces up to 5 times between enemies or Brand, each bounce dealing <span className="stat--ap">100 / 200 / 300 (+30% AP) magic damage</span> <br />

            Puroclasm brielfy slows by <span className="stat--moveSpeed">30% / 40% / 50%</span> targets that are <b>ablaze</b>. Bounces attempt to max stacks on champions.
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