export default function katarina({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> VORACITY
          </h4>  

          <h5 className="stat--ap">Damage pre-/post-mitigation</h5>
          <p className="stat--ap">
            {Math.round(((40 + currentLevel * 10)+(atk.ap * (30 + currentLevel * 3) / 100)+(bonus.attack * 100 / 100)))} / {Math.round(((40 + currentLevel * 10)+(atk.ap * (30 + currentLevel * 3) / 100)+(bonus.attack * 100 / 100))* (1 - mod.defMagRed))} </p>
    
          <p>
            Champion takedowns reduce ability cooldowns by 15 seconds.
          </p>

          <p>
          Katarina slashes at nearby enemies whenever she picks up a <b>Dagger</b>, dealing <span className="stat--ap"><abbr title="40 + 10 per level">50-190 (based on level)</abbr> <abbr title="30% + 3% per level">(+33%-75% AP based on level)</abbr> <span className="stat--ad">(+100% bonus AD)</span> magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BOUNCING BLADES
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((115)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((155)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((195)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((155)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((195)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Throws a <b>Dagger</b>, dealing <span className="stat--ap">75 / 115 / 155 / 195 (+30% AP) magic damage</span> to the target and 2 nearby enemies. The Dagger then riccochets to the ground behind the initial strike point.
          </p>

          <p>
          The <b>Dagger's</b> time in the air is the same regardless of how many times it bounces.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> PREPARATION
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} 
          </h5>
    
          <p>
          Katarina tosses a Dagger in the air and gains <abbr title="30% / 40% / 50% / 60%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 30 /100)} / {Math.round(atk.moveSpeed * 40 /100)} / {Math.round(atk.moveSpeed * 50 /100)} / {Math.round(atk.moveSpeed * 60 /100)} bonus movement speed</abbr>. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SHUNPO
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 25 / 100)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((35)+(atk.ap * 25 / 100)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((55)+(atk.ap * 25 / 100)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((75)+(atk.ap * 25 / 100)+(atk.attack * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 25 / 100)+(atk.attack * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((35)+(atk.ap * 25 / 100)+(atk.attack * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((55)+(atk.ap * 25 / 100)+(atk.attack * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(atk.ap * 25 / 100)+(atk.attack * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Blink to a location near a Dagger or unit, dealing <span className="stat--ap">15 / 35 / 55 / 75
          (<span className="stat--ad">+50% AD</span> +25% AP) magic damage</span>  to the nearest enemy.
          </p>

          <p>
          Picking up a <b>Dagger</b> greatly reduces the Cooldown of <b>Shunpo</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DEATH LOTUS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)} / 
            {' '}{(40*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((400)+(atk.ap * 280 / 100)+(bonus.attack * 260 / 100)))} / 
            {' '}{Math.round(((600)+(atk.ap * 280 / 100)+(bonus.attack * 260 / 100)))} / 
            {' '}{Math.round(((800)+(atk.ap * 280 / 100)+(bonus.attack * 260 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((400)+(atk.ap * 280 / 100)+(bonus.attack * 260 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((600)+(atk.ap * 280 / 100)+(bonus.attack * 260 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((800)+(atk.ap * 280 / 100)+(bonus.attack * 260 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Rapidly throws blades at the 3 nearest enemy champions, dealing <span className="stat--ap">400 / 600 / 800 (<span className="stat--ad">+260% bonus AD</span>  +280% AP) magic damage</span> and applying <b>60% Grievous Wounds</b>.
          </p>

          <p>
            Katarina can move and throw blades for up to 2.6 seconds with <span className="stat--moveSpeed">125 Movement Speed</span>
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