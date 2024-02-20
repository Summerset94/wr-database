export default function leesin({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> FLURRY
          </h4>
    
          <p>
            After casting an ability Lee Sin gains <abbr title="40%" className="stat--as">{(champ.asBase * 40 / 100).toFixed(3)} Attack Speed</abbr>  for his next 2 attacks within 3 seconds. The first attack restores <span className="stat--armor">20 energy</span>  (+10 every 5 levels) and the second restores half of that amount.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> SONIC WAVE / RESONATING STRIKE
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
            {' '}{50}
          </h5>

          <h5 className="stat--ad">
           Sonic Wave damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((55)+(bonus.attack * 105 / 100)))} / 
            {' '}{Math.round(((90)+(bonus.attack * 105 / 100)))} / 
            {' '}{Math.round(((125)+(bonus.attack * 105 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 105 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((55)+(bonus.attack * 105 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(bonus.attack * 105 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((125)+(bonus.attack * 105 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 105 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--magres">
            Resonating Strike min damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 105 / 100)))} / 
            {' '}{Math.round(((100)+(bonus.attack * 105 / 100)))} / 
            {' '}{Math.round(((140)+(bonus.attack * 105 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 105 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 105 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(bonus.attack * 105 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((140)+(bonus.attack * 105 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(bonus.attack * 105 / 100))* (1 - mod.defPhysRed))}          
          </p>


    
          <p>
            <b>SONIC WAVE: </b> Fires an energy wave that deals <span className="stat--ad">55 / 90 / 125 / 160 (+105% bonus AD) physical damage</span> to enemies and reveals them. Hitting an enemy allows <b>Resonating Strike</b> to be cast within 3 seconds.
          </p>
          <hr />
          <p>
            <b>RESONATING STRIKE: </b> Dash to enemy marked by Sonic Wave, dealing <span className="stat--ad">60 / 100 / 140 / 180 (+105% bonus AD)</span> increased up to 100% based on target's missing health.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SAFEGUARD / IRON WILL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--hp">Safeguard shield</h5>
          <p className="stat--hp">
            {Math.round((60)+(atk.ap * 100 /100))} /
            {' '}{Math.round((120)+(atk.ap * 100 /100))} /
            {' '}{Math.round((180)+(atk.ap * 100 /100))} /
            {' '}{Math.round((240)+(atk.ap * 100 /100))}
          </p>

          <h5 className="stat--ap">
           Iron Will damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((26)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((39)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((52)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((65)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((26)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((39)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((52)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((65)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
           <b>SAFEGUARD:</b> Dashes to target location. If an enemy is nearby on arrival, Lee Sin shields himself for <span className="stat--hp">60 / 120 / 180 / 240 (<span className="stat--ap">+100% AP</span>)</span> for 2 seconds. Allows <b>Iron Will</b> to be cast within 3 seconds.
          </p>
          <p>
            <b>Safeguard's</b> cooldown is reduced by 0.5 seconds with each attack.
          </p>
          <hr />
          <p>
            <b>IRON WILL</b>: Empowers next two attacks to deal an additional <span className="stat--hp">26/39/52/65 (<span className="stat--ap">+40% AP</span>) magic damage</span>  and gain <span className="stat--vamp">16% / 24% / 32% / 40% Omnivamp</span>.
          </p>
        </div>
    },    

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> TEMPEST / CRIPPLE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ap">
            Tempest damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 125 / 100)))} / 
            {' '}{Math.round(((140)+(bonus.attack * 125 / 100)))} / 
            {' '}{Math.round(((190)+(bonus.attack * 125 / 100)))} / 
            {' '}{Math.round(((240)+(bonus.attack * 125 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 125 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(bonus.attack * 125 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(bonus.attack * 125 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(bonus.attack * 125 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
           <b>TEMPEST:</b> deal <span className="stat--ap">90 / 140 / 190 / 240 (<span className="stat--ad">+125% bonus AD</span>) magic damage</span> to nearby enemies and reveals them. Hitting an enemy allows <b>Cripple</b> to be cast within 3 seconds.
          </p>
          <hr />

          <p>
            <b>CRIPPLE:</b> Slows enemies hit by Tempest by <span className="stat--moveSpeed">30% / 40% / 50% / 60%</span>  decaying over 4 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DRAGON'S RAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((100)+(bonus.attack * 200 / 100)+(def.health * 10 / 100)))} / 
            {' '}{Math.round(((300)+(bonus.attack * 200 / 100)+(def.health * 13 / 100)))} / 
            {' '}{Math.round(((500)+(bonus.attack * 200 / 100)+(def.health * 16 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((100)+(bonus.attack * 200 / 100)+(def.health * 10 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((300)+(bonus.attack * 200 / 100)+(def.health * 13 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((500)+(bonus.attack * 200 / 100)+(def.health * 16 / 100))* (1 - mod.defPhysRed))}
          </p>        


          <p>
          Launches a powerful roundhouse kick at an enemy champion, dealing <span className="stat--ad">100 / 300 / 500 (+200% bonus AD) (<span className="stat--hp">+10 / 13 / 16% of target's maximum Health</span>) physical damage</span> and knocking them back. Enemies the target collides with along the way are knocked Airborne for 1 second and take physical damage equal to <span className="stat--ad">100 / 300 / 500 (+200% bonus AD) (<span className="stat--hp">+10 / 13 / 16% of target's maximum Health</span>)</span>.
          </p>
          <p>
            Damage dealt to monsters is capped at 800.
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