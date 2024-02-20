export default function ezreal({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> RISING SPELL FORCE
          </h4>

          <h5 className="stat--as">Bonus attack speed</h5>
          <p className="stat--as">1 Stack/Maxed: 
          {' '}{(champ.asBase * 13 / 100).toFixed(3)} / 
          {' '}{(champ.asBase * 13 * 4 / 100).toFixed(3)}
          </p>
    
          <p>
          Gains <span className="stat--as">13% Attack Speed</span>  for 8 seconds when hitting abilities, stacking up to 4 times.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> MYSTIC SHOT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(3.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(3*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.attack * 120 / 100)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((70)+(atk.attack * 120 / 100)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((105)+(atk.attack * 120 / 100)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((140)+(atk.attack * 120 / 100)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.attack * 120 / 100)+(atk.ap * 30 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((70)+(atk.attack * 120 / 100)+(atk.ap * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((105)+(atk.attack * 120 / 100)+(atk.ap * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((140)+(atk.attack * 120 / 100)+(atk.ap * 30 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Fires a bolt, dealing <span className="stat--ad">35 / 70 / 105 / 140 (+120% AD <span className="stat--ap">+30% AP</span> ) physical damage</span>. Hitting a target reduces Ezreal's other ability cooldowns by 1.5 seconds. Applies on-hit effects.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ESSENCE FLUX
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
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
            {' '}{Math.round(((85)+(atk.ap * 75 / 100)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((155)+(atk.ap * 80 / 100)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 85 / 100)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((305)+(atk.ap * 90 / 100)+(bonus.attack * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((85)+(atk.ap * 75 / 100)+(bonus.attack * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((155)+(atk.ap * 80 / 100)+(bonus.attack * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 85 / 100)+(bonus.attack * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((305)+(atk.ap * 90 / 100)+(bonus.attack * 60 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Fires an orb that sticks to a champion, epic monster or structure for 4 seconds. <br />
          Hitting the target with an attack or ability detonates the orb, dealing <span className="stat--ap">80 / 155 / 230 / 305 (<span className="stat--ad">+60% bonus AD</span>  +75% / 80% / 85% / 90% AP) magic damage</span>  and refunding <span className="stat--mana">60 / 70 / 80 / 90 Mana</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> ARCANE SHIFT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(28*mod.atkcdr).toFixed(1)} / 
            {' '}{(24*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{90} / 
            {' '}{90} / 
            {' '}{90} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 75 / 100)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 75 / 100)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 75 / 100)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((275)+(atk.ap * 75 / 100)+(bonus.attack * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 75 / 100)+(bonus.attack * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 75 / 100)+(bonus.attack * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 75 / 100)+(bonus.attack * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((275)+(atk.ap * 75 / 100)+(bonus.attack * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Blinks to taget location and fires a bolt, dealing <span className="stat--ap">80 / 145 / 210 / 275 (<span className="stat--ad">+50% bonus AD</span> +75% AP) magic damage</span>. Prioritizes enemies hit by Essence Flux, then the nearest enemy.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> TRUESHOT BARRAGE
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
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((350)+(atk.ap * 90 / 100)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((500)+(atk.ap * 90 / 100)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((650)+(atk.ap * 90 / 100)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((350)+(atk.ap * 90 / 100)) * (1 - mod.defMagRed)+(bonus.attack * 100 / 100))} / 
            {' '}{Math.round(((500)+(atk.ap * 90 / 100))* (1 - mod.defMagRed)+(bonus.attack * 100 / 100))} / 
            {' '}{Math.round(((650)+(atk.ap * 90 / 100))* (1 - mod.defMagRed)+(bonus.attack * 100 / 100))}
          </p>
    
          <p>
          Fires an energy wave, dealing <span className="stat--ap">350 / 500 / 650 (<span className="stat--ad">+100% bonus AD</span> +90% AP) magic damage</span>. <br />

          Deals 50% reduced damage to minions and non-epic monsters.
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