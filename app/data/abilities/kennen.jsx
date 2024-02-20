export default function kennen({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MARK OF THE STORM
          </h4>
    
          <p>
          Hitting enemies with abilities places a <b>Mark of the storm</b> on them for 6 seconds. At 3 stacks, the enemy is tunned for 1.25 seconds and Kennen gains <span className="stat--as">25 Energy</span>.
          Stunning an enemy multiple times within 6 seconds reduces the stun duration to 0.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> THUNDERING STORM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{60} / 
            {' '}{55} / 
            {' '}{50} / 
            {' '}{45} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((205)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((270)+(atk.ap * 75 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 75 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((205)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((270)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))}          
          </p>

          
          <p>
            Throws a shuriken, dealing <span className="stat--ap">75 / 140 / 205 / 270 (+75% AP) magic damage</span> to the first enemy hit.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ELECTRICAL SURGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{40} / 
            {' '}{40} / 
            {' '}{40} / 
            {' '}{40} 
          </h5>

          <h5 className="stat--ap">
            Damage active:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--magres">
            Damage passive:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 30 / 100)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((45)+(atk.ap * 30 / 100)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((55)+(atk.ap * 30 / 100)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((65)+(atk.ap * 30 / 100)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 30 / 100)+(bonus.attack * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((45)+(atk.ap * 30 / 100)+(bonus.attack * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((55)+(atk.ap * 30 / 100)+(bonus.attack * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((65)+(atk.ap * 30 / 100)+(bonus.attack * 100 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            <b>PASSIVE:</b> Passive: Every 5th attack deals <span className="stat--ap">35 / 45 / 55 / 65
            (<span className="stat--ad">+70% / 80% / 90% / 100% bonus AD</span> +30% AP) magic damage</span> and applies a Mark of the storm.
          </p>

          <p>
            <b>ACTIVE:</b> Active: Shocks nearby enemies afflitcted by Mark of the Storm, dealing <span className="stat--ap">60 / 90 / 120 / 150 (+80% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> LIGTNING RUSH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{100} / 
            {' '}{95} / 
            {' '}{90} / 
            {' '}{85}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((235)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((125)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((235)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Transform into an electric ball for 2 seconds, becoming unable to attack but gaining <span className="stat--moveSpeed">110% bonus Movement Speed</span>, and dealing <span className="stat--ap">70 / 125 / 180 / 235 (+70% AP) magic damage</span>  to enemies he passes through. The bonus Movement Speed is doubled during the first 0.5 seconds.
          </p>

          <p>
          Kennen gains <abbr title="50% /60% / 70% / 80%" className="stat--as">{(champ.asBase * 50 / 100).toFixed(3)} / {(champ.asBase * 60 / 100).toFixed(3)} / {(champ.asBase * 70 / 100).toFixed(3)} / {(champ.asBase * 80 / 100).toFixed(3)} Attack Speed</abbr>  for 3 seconds upon exiting Lightning Rush.
          </p>

          <p>Gains <span className="stat--armor">40 Energy</span> when Lightning Rush first damages an enemy. Deals 50% damage to minions.</p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> SLICING MAELSTROM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{80} / 
            {' '}{80} / 
            {' '}{80}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 15 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Summons a storm that grants Kennen <b>20 / 40 / 60</b> <span className="stat--armor">Armor</span>  and <span className="stat--magres">Magic Resist</span>  and deals <span className="stat--ap">30 / 60 / 90 (+15% AP) magic damage</span>  every 0.5 seconds for 3 seconds.
          </p>

          <p>
          Each subsequent bolt against the same target deals 10% increased damage.
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