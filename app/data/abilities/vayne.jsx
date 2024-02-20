export default function vayne({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> NIGHT HUNTER 
          </h4>
    
          <p>
          Gains <span className="stat--moveSpeed">10 / 15 / 20 Movement Speed</span> when moving towards enemy champions. 
          </p>

          <p>
            <b>Final Hour:</b> Gains <span className="stat--moveSpeed">70 Movement Speed</span> instead. 
            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> TUMBLE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(3.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(3*mod.atkcdr).toFixed(1)} / 
            {' '}{(2.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(2*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((atk.attack * 140 / 100)))} / 
            {' '}{Math.round(((atk.attack * 150 / 100)))} / 
            {' '}{Math.round(((atk.attack * 160 / 100)))} / 
            {' '}{Math.round(((atk.attack * 170 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((atk.attack * 140 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 150 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 160 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 170 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Dashes forward and empowers her next attack to deal an additional <span className="stat--ad">40% / 50% / 60% / 70% AD physical damage</span> 
          </p>

          <p>
            <b>Final Hour:</b> Gains 1 second of invisibility on cast.
          </p>

          <p>
            Tumble does not go through walls.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SILVER BOLTS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45}
          </h5>

          <h5 className="stat--ad">
           <abbr title="Numbers here won't fall below minimal threshold">Current target damage:</abbr> 
          </h5>

          <p className="stat--vamp"> 
            {' '}{Math.max(Math.round(((def.health * 3 / 100))), 50)} / 
            {' '}{Math.max(Math.round(((def.health * 6 / 100))), 65)} / 
            {' '}{Math.max(Math.round(((def.health * 9 / 100))), 80)} / 
            {' '}{Math.max(Math.round(((def.health * 12 / 100))), 95)}
          </p>

          
    
          <br />
          <p>
           <b>Passive:</b> Every third consecutive attack or ability on the same target deals additional <span className="stat--hp">3 / 6 / 9 / 12% enemy's Max Health</span> as <span className="stat--vamp">true damage</span>.  
          </p>

          <p>
            <b>Active:</b> grants <abbr title="40 / 45 / 50 / 55%" className="stat--as">{(champ.asBase * 40 / 100).toFixed(3)} / {(champ.asBase * 45 / 100).toFixed(3)} / {(champ.asBase * 50 / 100).toFixed(3)} / {(champ.asBase * 55 / 100).toFixed(3)} Attack Speed</abbr> for the next 3 attacks within 5 seconds and heals for 40% of the damage Silver Bolts dealt.
          </p>

          <p>
           Passive deals least <span className="stat--vamp">50/65/80/95 true damage</span>. 
          </p>

          <p>
            Passive damage is capped at 200 against monsters.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> CONDEMN
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(21*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{90}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((50)+(bonus.attack * 55 / 100)))} / 
            {' '}{Math.round(((80)+(bonus.attack * 55 / 100)))} / 
            {' '}{Math.round(((110)+(bonus.attack * 55 / 100)))} / 
            {' '}{Math.round(((140)+(bonus.attack * 55 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((50)+(bonus.attack * 55 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(bonus.attack * 55 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((110)+(bonus.attack * 55 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((140)+(bonus.attack * 55 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--ad">
            Wall collide damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((105)+(bonus.attack * 75 / 100)))} / 
            {' '}{Math.round(((145)+(bonus.attack * 75 / 100)))} / 
            {' '}{Math.round(((185)+(bonus.attack * 75 / 100)))} / 
            {' '}{Math.round(((225)+(bonus.attack * 75 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((105)+(bonus.attack * 75 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((145)+(bonus.attack * 75 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((185)+(bonus.attack * 75 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((225)+(bonus.attack * 75 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Fires a bolt that deals <span className="stat--ad">50 / 80 / 110 / 140 (+55% bonus AD) physical damage</span> and knocks back. If enemies are knocked into a wall, they take an additional <span className="stat--ad">105 / 145 / 185 / 225 (+75% bonus AD) physical damage</span> and are stunned for 1.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FINAL HOUR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>
    
          <br />
          <p>
           Gains <span className="stat--ad"> 20 / 30 / 40 Attack Damage</span> and strengthens Night Hunter and Tumble for 8 / 10 / 12 seconds.
          </p>

          <p>
           When an enemy champion damaged by Vayne dies within 3 seconds, Final Hour's duration is extended by 4 seconds, up to an additional 8 seconds. 
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