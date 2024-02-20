export default function sett({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> PIT GRIT
          </h4>
    
          <p>
            Sett's Attacks alternate between left and right punches. Right punches follow the left quickly and deal an additional <abbr title="7 x Level +50% bonus AD" className="stat--ad">{Math.round((7*currentLevel) + (bonus.attack * 50 / 100))} physical damage</abbr> 
          </p>

          <p>
            Sett gains <abbr title="at level 1 / 5 / 9 / 13" className="stat--hp"> 0.25 / 0.5 / 1 / 2 Health per second Regeneration</abbr> for each 5% missing Health.
          </p>

          <p>
           Sett will reset back to a left punch if he does not do a right punch within 2 seconds of doing a left punch. The Attack Speed of a right punch is 8 times that of a left punch. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span>  KNUCKLE DOWN
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>
          <p className="stat--ad">Current target: 
            {' '}{Math.round(((5)+(def.health * (1 + atk.attack * 0.01) / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((20)+(def.health * (1 + atk.attack * 0.015) / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(def.health * (1 + atk.attack * 0.02) / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(def.health * (1 + atk.attack * 0.025) / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           Sett itches for a fight, gaining <span className="stat--moveSpeed">30% Movement Speed</span>  towards enemy champions for 1.5 seconds. 
          </p>

          <p>
            Additionally empowers the next two attacks to deal an additional <span className="stat--ad">5 / 20 / 35 / 50 (<span className="stat--hp">+1% <span className="stat--ad">(+0.01 / 0.015 / 0.02 / 0.025 AD)</span> target's Max Health </span>) physical damage</span>.
          </p>

          <p>
            The additional damage is capped at 100 against monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> HAYMAKER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(11.5*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--hp">
           Max shield:
          </h5>

          <p className="stat--hp">
            {Math.round(((def.health * 50 / 100)))}
          </p>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+((def.health * 50 / 100) * (25 + bonus.attack * 25/100)/100)))} / 
            {' '}{Math.round(((105)+((def.health * 50 / 100) * (25 + bonus.attack * 25/100)/100)))} / 
            {' '}{Math.round(((130)+((def.health * 50 / 100) * (25 + bonus.attack * 25/100)/100)))} / 
            {' '}{Math.round(((155)+((def.health * 50 / 100) * (25 + bonus.attack * 25/100)/100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+((def.health * 50 / 100) * (25 + bonus.attack * 25/100)/100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((105)+((def.health * 50 / 100) * (25 + bonus.attack * 25/100)/100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+((def.health * 50 / 100) * (25 + bonus.attack * 25/100)/100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((155)+((def.health * 50 / 100) * (25 + bonus.attack * 25/100)/100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           <b>Passive:</b> Stores 100% of post-mitigated damage taken as Grit, up to <abbr className="stat--hp" title='50% Max Health'>{Math.round(atk.health/2)} damage</abbr>. Grit decays quickly 4 seconds after the damage was taken.
          </p>

          <p>
            <b>Active: </b> Consumes all Grits, gaining shield equal to <span className="stat--hp">100% Grit consumed</span> that decays over 3 seconds. Sett then delivers a massive punch, dealing <span className="stat--ad">80 / 105 / 130 / 155 (<span className="stat--armor">+25% (<span className="stat--ad">+25% bonus AD</span>) </span> Grit consumed) physical damage</span>  in arc before him. Enemies in the center take <span className="stat--vamp">true damage instead</span>
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> FACEBREAKER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(11.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((75)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((100)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((125)+(atk.attack * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.attack * 60 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((75)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((125)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Smashes enemies on either side into each other, dealing <span className="stat--ad">50 / 75 / 100 / 125 (+60% AD) physical damage</span> and <span className="stat--moveSpeed">slowing them by 50% for 0.5 seconds</span>. If Sett grabbed at least one enemy on each side, all enemies are <b>stunned for 1 second</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> THE SHOW STOPPER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Base damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((300)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((400)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((300)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((400)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <p>
            Grab an enemy champion and suppresses them as he carries them forward, then slams them into the ground, dealing <span className="stat--ad">200 / 300 / 400 (+100% bonus AD)(<span className="stat--hp">+40 / 50 / 60% target's bonus health</span>) physical damage</span> to surrounding enemies and <span className="stat--moveSpeed">Slowing them by 99%</span> for 1 second. Enemies take up to 25% less damage the further they are from where Sett lands.
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