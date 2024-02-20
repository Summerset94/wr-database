export default function seraphine({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> STAGE PRESENCE
          </h4>
    
          <p>
            <b>Echo:</b> Every third basic ability cast will echo, casting it again.
          </p>

          <p>
            <b>Harmony:</b> Casting an ability grants a Note to nearby allies for 5 seconds. For each Note. Seraphine's next attack gains 0.3 Attack Range and deals an additional <abbr title="4 + 1.5 per level" className="stat--ap">{Math.round(4 + 1.5*(currentLevel - 1))} (<span className="stat--ap">+4% AP</span>) magic damage</abbr>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> HIGH NOTE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((75)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((105)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Deals <span className="stat--ap">60 / 75 / 90 / 105 (+40% AP) magic damage</span> in target area, increased by <span className="stat--critChance">0 - 50%</span> based on enemies' missing Health.
          </p>

          <p>
            Reaches maximum damage when the target is below <span className="stat--hp"> 25% Health</span>.            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SURROUND SOUND
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(23*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40} / 
            {' '}{60} / 
            {' '}{80} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 40 / 100)))}
          </p>
    
          <p>
            Shields all nearby ally champions for <span className="stat--hp">60 / 80 / 100 / 120 (<span className="stat--ap">+40% AP</span>) damage</span> for 2.5 seconds and grant them <span className="stat--moveSpeed">20% Movement Speed</span> for 2.5 seconds.
          </p>

          <p>
            If Seraphine is already shielded, nearby allies are healed for <span className="stat--hp">6.5% (<span className="stat--ap">+0.01% AP</span>)</span>  of their missing Health, increased by 50% for each ally.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> BEAT DROP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((95)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((165)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((95)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((165)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Deals <span className="stat--ap">60 / 95 / 130 / 165 (+50% AP) magic damage</span> to enemies and <span className="stat--moveSpeed">slows them by 99% for 1 seconds</span>.
          </p>

          <p>
            If the enemy is already slowed, they are rooted instead. If they are rooted, they are sunned.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> ENCORE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(105*mod.atkcdr).toFixed(1)} / 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(75*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((160)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((260)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((360)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((160)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((260)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((360)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Deals <span className="stat--ap">160 / 260 / 360 (+70% AP) magic damage</span> to enemies and charms and slows them by 40% for 1/1.25/1.5 seconds.
          </p>

          <p>
            Spell extends when it touches an ally or enemy champion.
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