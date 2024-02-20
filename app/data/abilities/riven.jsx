export default function riven({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> RUNIC BLADE
          </h4>
    
          <p>
            Abilities charge Riven's blade up to 3 times.
          </p>

          <p>
           Attacks expend charges to deal <abbr title="30% + 2% AD per level" className="stat--ad">{Math.round(atk.attack * (28 + 2*currentLevel)/100)} bonus physical damage</abbr> 
          </p>

          <p>
          Bonus damage to structures / monsters is reduced to 50%. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BROKEN WINGS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 55 / 100)))} / 
            {' '}{Math.round(((45)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((70)+(atk.attack * 65 / 100)))} / 
            {' '}{Math.round(((90)+(atk.attack * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 55 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((45)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((70)+(atk.attack * 65 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(atk.attack * 70 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Slash in a direction up to 3 times. Each slash deals <span className="stat--ad">20 / 45 / 70 / 95 (+55 / 60 / 65 / 70% AD) physical damage</span> to nearby enemies.
          </p>

          <p>
           The third slash crosses terrain and knocks up nearby enemies for 0.5 seconds. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> KI BURST
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((55)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((95)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((135)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((175)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((55)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((95)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((135)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((175)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           Stun nearby enemies for 0.75 seconds, dealing <span className="stat--ad">55 / 95 / 135 / 175 (+100% bonus AD) physical damage</span>  
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> VALOR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((75)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((110)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((145)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 90 / 100)))}
          </p>
    
          <p>
            Dash in a direction and gain a shield absorbing <span className="stat--hp">75 / 110 / 145 / 180 (<span className="stat--ad">+90% bonus AD</span>) damage</span> for 2 seconds.
          </p>

          <p>
            Valor cannot cross terrain.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> BLADE OF THE EXILE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((100)+(bonus.attack * 120 / 100 * 60 / 100)))} - {Math.round(((300)+(bonus.attack * 120 / 100 * 180 / 100)))} / 
            {' '}{Math.round(((150)+(bonus.attack * 120 / 100 * 60 / 100)))} - {Math.round(((450)+(bonus.attack * 120 / 100 * 180 / 100)))} / 
            {' '}{Math.round(((200)+(bonus.attack * 120 / 100 * 60 / 100)))} - {Math.round(((600)+(bonus.attack * 120 / 100 * 180 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((100)+(bonus.attack * 120 / 100 * 60 / 100)) * (1 - mod.defPhysRed))} - {Math.round(((300)+(bonus.attack * 120 / 100 * 180 / 100)) * (1 - mod.defPhysRed))}  / 
            {' '}{Math.round(((150)+(bonus.attack * 120 / 100 * 60 / 100))* (1 - mod.defPhysRed))} - {Math.round(((450)+(bonus.attack * 120 / 100 * 180 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((200)+(bonus.attack * 120 / 100 * 60 / 100))* (1 - mod.defPhysRed))} - {Math.round(((600)+(bonus.attack * 120 / 100 * 180 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <p>
            Expand Riven's blade for 12 seconds, granting <span className="stat--ad">20% bonus Attack Damage ({Math.round(atk.attack * 20 / 100)})</span>, increasing the range of her attacks and damaging abilities, and granting a single cast of <b>Wind Slash</b>.
          </p>

          <p>
          <b>Wind Slash:</b>  Launches a shockwave, dealing <span className="stat--ad">100 / 150 / 200 (+60% bonus AD)</span> to <span className="stat--ad">300 / 450 / 600 (+180% bonus AD) physical damage</span> based upon enemies' missing health.
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