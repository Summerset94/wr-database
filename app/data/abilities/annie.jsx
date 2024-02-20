export default function annie({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> PYROMANIA 
          </h4>     

          <p>
          After casting 4 spells, Annie's next offensive spell will stun the target for <abbr title="At level 1 / 6 / 11">1 / 1.25 / 1.5 seconds.</abbr>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DISINTEGRATE
          </h4>

          <h5>
          Cooldown: 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((215)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((125)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((215)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
          Annie hurls a fireball, dealing <span className="stat--ap">80 / 125 / 170 / 215
          (+80% AP) magic damage</span> in a small area. <br />
          If this spell kills a target, refunds mana cost and half of this spell cooldown.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> INCINERATE 
          </h4>

          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
            Annie unleashes a cone of fire in the targeted direction dealing <span className="stat--ap">70 / 130 / 190 / 250 (+70% AP) magic damage</span> to all enemies in the area.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> MOLTEEN SHIELD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp"> 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100)))}
          </p>
    
          <p>
            Annie covers herself and <b>Tibbers</b> with shield, absorbing <span className="stat--hp">absorbing 50 / 100 / 150 / 200 <span className="stat--ap">(+40% AP)</span>  damage</span> for 3 seconds. Also both of them gain <abbr title="20% / 25% / 30% / 35%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 20 / 100)} / {Math.round(atk.moveSpeed * 25 / 100)} / {Math.round(atk.moveSpeed * 30 / 100)} / {Math.round(atk.moveSpeed * 35 / 100)} movement speed</abbr>. Speed bonus decays over 3 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> SUMMON TIBBERS
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
            Initial damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((130)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((330)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((130)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((330)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}        
          </p>

          <h5 className="stat--ap">
          Pounce damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((110)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((110)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}       
          </p>
    
          <p>
            <b>INITIAL:</b> summon <b>Tibbers</b> for 20 seconds dealing <span className="stat--ap">130 / 230 / 330 (+60% AP) magic damage</span> to all enemies in the target location. <br />
          </p>

          <p>
            <b>RECAST:</b> <b>Tibbers</b> pounces on a target dealing <span className="stat--ap"> 110 / 150 / 190 (+30% AP) magic damage</span> and knocking target up in the air for 1 second.
          </p>            
          <p>
            After initial cast, after pouncing or when Annie dies, Tibbers gains <span className="stat--moveSpeed">100% bonus movement speed</span> and <span className="stat--as">210% bonus attack speed</span>. 
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