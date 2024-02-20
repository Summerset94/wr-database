export default function morgana({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SOUL SIPHON
          </h4>
    
          <p>
          Morgana heals for 20% of the damage dealt with abilities against champions, large minions and large monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DARK BINDING
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)}
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
            {' '}{Math.round(((80)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((240)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((320)+(atk.ap * 90 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 90 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((320)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Fires a bolt of dark energy, rooting the first enemy hit for 2 seconds and dealing <span className="stat--ap">80 / 160 / 240 / 320 (+90% AP) magic damage</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> TORMENTED SHADOW

          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{90} / 
            {' '}{110} / 
            {' '}{130} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((7)+(atk.ap * 7 / 100)))} / 
            {' '}{Math.round(((12)+(atk.ap * 7 / 100)))} / 
            {' '}{Math.round(((17)+(atk.ap * 7 / 100)))} / 
            {' '}{Math.round(((22)+(atk.ap * 7 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((7)+(atk.ap * 7 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((12)+(atk.ap * 7 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((17)+(atk.ap * 7 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((22)+(atk.ap * 7 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Curse an area for 5 seconds, dealing <span className="stat--ap">7 / 12 / 17 / 22 (+7% AP) magic damage</span> every 0.5 seconds to enemies within, increased by up to 170% based on their missing health.
          </p>

          <p>
          Tormented Soil deals 225% damage against monsters.
          Tormented Shadow's current cooldown is reduced by 5% of its maximum whenever Soul Siphon triggers. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> BLACK SHIELD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--magres">
            Shield strength:
          </h5>

          <p className="stat--hp">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((310)+(atk.ap * 50 / 100)))}
          </p>
    
          <p>
          Places a barrier around an allied champion for 4 seconds, absorbing <span className="stat--magres">70 / 150 / 230 / 310 (<span className="stat--ap">+50% AP</span>) magic damage</span> and blocking disables while the shield holds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> SOUL SHACKLES
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round((def.health * (14 + atk.ap * 0.015)/100))} / 
            {' '}{Math.round((def.health * (16 + atk.ap * 0.015)/100))} / 
            {' '}{Math.round((def.health * (18 + atk.ap * 0.015)/100))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((def.health * (14 + atk.ap * 0.015)/100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((def.health * (16 + atk.ap * 0.015)/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((def.health * (18 + atk.ap * 0.015)/100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Chain nearby enemy champions, dealing <span className="stat--ap">magic damage</span> equal to <span className="stat--ap"> 14 / 16 / 18% (+0.015% AP)</span> of their maximum health.
          </p>
          <p>
          The chains persist for 3 seconds, revealing and slowing by <span className="stat--moveSpeed">15% Movement Speed</span>.
          </p>

          <p>
          When the duration ends, chained targets are stunned for 1.5 seconds and dealt <span className="stat--ap">magic damage</span> equal to <span className="stat--ap"> 14 / 16 / 18% (+0.015% AP)</span> of their maximum health.
          </p>

          <p>
          Morgana gains <span className="stat--moveSpeed">15% Movement Speed</span> as long as the chains last.
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