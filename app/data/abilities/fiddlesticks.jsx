export default function fiddlesticks({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> A HARMLESS SCARECROW
          </h4>
    
          <p>
          After a champion or epic monster takedown, summons Scarecrow Effigy to where they were killed.
          </p>

          <p>
          Scarecrow Effigy fears nearby enemies after charging up for 2 seconds. Scarecrow Effigy can be removed by attacks while it is still charging up.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> TERRIFY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65}
          </h5>
    
          <p>
            <b>Passive:</b> While out of combat and stationary, or not visible to the enemy team, Fiddlesticks' next damaging ability additionally fears targets hit for <b>1 / 1.1 / 1.2 / 1.3 seconds</b>.
          </p>

          <p>
            <b>Active:</b> Summons crows that attack enemies along the path, dealing magic damage equal to <span className="stat--ap">4% / 5% / 6% / 7% (+0.015 AP)</span> of the targets' <span className="stat--hp">current Health.</span> If the targets were recently feared, damage dealt is doubled. Deals a minimum of <span className="stat--ap">45 / 70 / 95 / 120 damage</span>  to enemy champions and a maximum of 400 damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BOUNTIFUL HARVEST
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--ap">
            Damage per second:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 25 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 25 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Siphons the souls of nearby enemies, dealing <span className="stat--ap"> 50 / 80 / 110 / 140
          (+ 25% AP) magic damage</span> every second for 2 seconds. The last strike deals damage equal to the target's missing Health. Heals itself by draining Health from enemies.
          </p>
          <p>
            Health recoverable by dealing damage:
          </p>
          <p>
            <span className="stat--hp">35% / 40% / 45% / 50%</span>  against enemy champions; <span className="stat--hp">15%</span>  against minions; <span className="stat--hp">45%</span>  against monsters.
          </p>

          <p>
          Deals 160% damage to monsters. Deals 50% damage to minions.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> REAP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Slashes the target location with its scythe, dealing <span className="stat--ap">70 / 120 / 170 / 220 (+50% AP) magic damage</span> to enemies within the area and <span className="stat--moveSpeed">slowing them by 35% / 40% / 45% / 50%</span> for 1.25 seconds. Enemies in the center are silenced.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CROWSTORM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(110*mod.atkcdr).toFixed(1)} / 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage per tick:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((25)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((42.5)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 10 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((25)+(atk.ap * 10 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((42.5)+(atk.ap * 10 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 10 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Channels for 1.5 seconds, then blinks to the target location and summons Crowstorm, dealing <span className="stat--ap">25 / 42.5 / 60 (+10% AP) magic damage</span> every 0.25 seconds to nearby enemies for 5 seconds.
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