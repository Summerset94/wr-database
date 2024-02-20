export default function ekko({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> Z-DRIVE RESONANCE
          </h4>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((22+8*currentLevel)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((22+8*currentLevel)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))}
          </p>    
          <p>
          Every third attack or damaging ability agains the same target deals an additional <abbr className="stat--ap" title='30-142 based on level'> {22+8*currentLevel} (+70% AP) magic damage</abbr>. If the target was a champion, Ekko gains <abbr className="stat--moveSpeed" title='at level 1 / 5 / 9 / 13'>40% / 50% / 60% / 70%  Movement Speed</abbr>  for 2.5 seconds. <br />
          cannot effect the same target fo 5 seconds after the effect procs.

          Deals 140% damage to monsters. Cannot affect the same target for 5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> TIMEWINDER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ap">
            Damage initial:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ap">
            Damage secondary:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((155)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((155)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Throw a temporal device, dealing <span className="stat--ap">70 / 90 / 110 / 130 (+30% AP) magic damage</span>. On hitting a champion or the distance limit, it expands into a field that slows by <span className="stat--moveSpeed">30% / 40% / 50% / 60%</span>. The device then returns to Ekko, dealing <span className="stat--ap">50 / 85 / 120 / 155 (+60% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> PARALLEL CONVERGENCE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--hp">
            Shield strength:
          </h5>

          <p className="stat--hp"> 
            {' '}{Math.round(((70)+(atk.ap * 150 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 150 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 150 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 150 / 100)))}
          </p>
    
          <p>
          <b>PASSIVE</b> Attacks agains tagets under <span className="stat--hp">30% maximum health</span> deal an additional <abbr className="stat--ap" title='3% + 0.02% AP'>{(3 + (atk.ap * 0.02)).toFixed(1)}% missing Health magic damage</abbr>. <br />
          <b>ACTIVE:</b> Lanches a chronosphere that lasts 1.5 seconds, slowing by 40%. If Ekko eneters the sphere it detonates, stunning for 2.5 seconds and granting Ekko a shield that aborsbs <span className="stat--hp">70 / 100 / 130 / 160 (<span className="stat--ap">+150% AP</span>) damage</span> for 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> PHASE DIVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Dashes in a taget direction. Ekko's next attack within 3 seconds gains <b>250 range</b> and causes Ekko to blink to his target and deal an additional <span className="stat--ap"> 60 / 90 / 120 / 150 (+40% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CHRONOBREAK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(40*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--hp">
            Base healing:
          </h5>

          <p className="stat--hp"> 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 50 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 150 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 150 / 100)))} / 
            {' '}{Math.round(((500)+(atk.ap * 150 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 150 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 150 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((500)+(atk.ap * 150 / 100))* (1 - mod.defMagRed))}     
          </p>

          <p>
            Becomes untargetable and returns to his position 3.5 seconds ago and heals for <span className="stat--hp">100 / 150 / 200 (+50% AP)</span> increased by 3% per 1% of health lost within 3.5 seconds.

            Upon arrival, Ekko deals <span className="stat--ap">200 / 350 / 500 (+150% AP) magic damage</span> to nearby enemies.
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