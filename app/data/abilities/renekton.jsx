export default function renekton({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> REIGN OF ANGER
          </h4>
    
          <p>
            Casting abilities with <span className="stat--vamp">50 Fury</span>  or more consumes that <span className="stat--vamp">Fury</span> for enhanced effects. Enhanced abilities do not generate any <span className="stat--vamp">Fury</span>
          </p>

          <p>
            Attacks generate <span className="stat--vamp">5 Fury</span>. Fury gains are increased by 50% when under <span className="stat--hp">50% Health</span>. Out of combat, <span className="stat--vamp">4 Fury</span> dissipates every second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> CULL THE MEEK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((230)+(bonus.attack * 90 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 90 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((230)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
            Reign of Anger:
          </h5>

          <p className="stat--critChance">Pre-mitigation: 
            {' '}{Math.round(((120)+(bonus.attack * 135 / 100)))} / 
            {' '}{Math.round(((195)+(bonus.attack * 135 / 100)))} / 
            {' '}{Math.round(((270)+(bonus.attack * 135 / 100)))} / 
            {' '}{Math.round(((345)+(bonus.attack * 135 / 100)))}
          </p>

          <p className="stat--critChance">Post-mitigation: 
            {' '}{Math.round(((120)+(bonus.attack * 135 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((195)+(bonus.attack * 135 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((270)+(bonus.attack * 135 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((345)+(bonus.attack * 135 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Deal <span className="stat--ad">80 / 130 / 180 / 230 (+90% bonus AD) physical damage</span>  to nearby enemies, generating <span className="stat--vamp">5 Fury</span> and <span className="stat--hp">healing 7/9/11/13</span> <abbr className="stat--ad" title='10% bonus AD'></abbr> per enemy unit.
          </p>

          <p>
            <b>Reign of Anger:</b> Damage increases to<span className="stat--ad">120 / 195 / 270 / 345 (+135 bonus AD)</span> and healing is increased by 200% (12 / 18 / 24 / 30 <abbr className="stat--ad" title="24% bonus AD">(+{Math.round(bonus.attack * 10 / 100)})</abbr>)
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> RUTHLESS PREDATOR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 150 / 100)))} / 
            {' '}{Math.round(((50)+(atk.attack * 150 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 150 / 100)))} / 
            {' '}{Math.round(((110)+(atk.attack * 150 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 150 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(atk.attack * 150 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 150 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((110)+(atk.attack * 150 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
            Reign of Anger:
          </h5>

          <p className="stat--critChance">Pre-mitigation: 
            {' '}{Math.round(((30)+(atk.attack * 225 / 100)))} / 
            {' '}{Math.round(((75)+(atk.attack * 225 / 100)))} / 
            {' '}{Math.round(((120)+(atk.attack * 225 / 100)))} / 
            {' '}{Math.round(((165)+(atk.attack * 225 / 100)))}
          </p>

          <p className="stat--critChance">Post-mitigation: 
            {' '}{Math.round(((30)+(atk.attack * 225 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((75)+(atk.attack * 225 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(atk.attack * 225 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((165)+(atk.attack * 225 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Empowers the next attack to strike twice, <b>stunning for 0.75 seconds</b> and dealing <span className="stat--ad">20 / 50 / 80 / 110 (+150 AD) physical damage</span>.
          </p>

          <p>
            <b>Reign of Anger:</b> Strikes three times, <b>stunning for 1.5 seconds</b> and dealing <span className="stat--ad">30 / 75 / 120 / 165 (+225% AD) physical damage</span> 
          </p>

          <p>
            <abbr title="This part of description is missing in game">Under the effect of <b>Reign of Anger</b>, clear all shields on the target.</abbr>
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SLICE AND DICE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((40)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((80)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 90 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((40)+(bonus.attack * 90 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
            Reign of Anger:
          </h5>

          <p className="stat--critChance">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 135 / 100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 135 / 100)))} / 
            {' '}{Math.round(((190)+(bonus.attack * 135 / 100)))} / 
            {' '}{Math.round(((250)+(bonus.attack * 135 / 100)))}
          </p>

          <p className="stat--critChance">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 135 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(bonus.attack * 135 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((190)+(bonus.attack * 135 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((250)+(bonus.attack * 135 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           Dash in a direction, dealing <span className="stat--ad">40 / 80 / 120 / 160 (+90% bonus AD) physical damage </span> and generating <span className="stat--vamp"> 5 Fury</span> for each enemy passed through. Hitting an enemy grants a second dash to cast within 4 seconds.
          </p>

          <p>
            <b>Reign of Anger:</b> The second dash now deals <span className="stat--ad">70 / 130 / 190 / 250 (+135% bonus AD) physical damage</span> and <span className="stat--ad">shreds armor by 25 / 30 / 35 / 40%</span> for 4 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DOMINUS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} /
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ap">
            Damage per second:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Gain <span className="stat--vamp">20 Fury</span> and <span className="stat--hp">300 / 525 / 750 Health</span> for 12 seconds. Every second after casting, gain <span className="stat--vamp">5 Fury</span> and deal <span className="stat--ap">70 / 110 / 150 (+20% AP) magic damage</span> to nearby enemies.
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