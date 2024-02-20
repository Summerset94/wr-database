export default function urgot({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> ECHOING FLAMES
          </h4>
          
          <h5 className="stat--ad">Current target damage: 
          {' '}{Math.round(((atk.attack * (50 + 10 * Math.floor((currentLevel - 1)/4))/100) + (def.health * (2 + 1 * Math.floor((currentLevel - 1)/4))/100))*(1 - mod.defPhysRed))}
          </h5> 

          <br />
          <p>
            Urgot's attacks and Purge periodically trigger blasts from his leg cannons, dealing <abbr title="50% AD + 10% AD per 4 levels" className="stat--ad">{Math.round(atk.attack * (50 + 10 * Math.floor((currentLevel - 1)/4))/100)}</abbr> plus <abbr title="2% + 1% per 4 levels" className="stat--hp">{Math.round((2 + 1 * Math.floor((currentLevel - 1)/4)))}% of target's Max Health</abbr> as <span className="stat--ad">physical damage</span>. <abbr title="at level 1 / 5 / 9 / 13">15 / 10 / 5 / 3 seconds cooldown per leg</abbr>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> CORROSIVE CHARGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((25)+(atk.attack * 70 / 100)))} / 
            {' '}{Math.round(((85)+(atk.attack * 70 / 100)))} / 
            {' '}{Math.round(((145)+(atk.attack * 70 / 100)))} / 
            {' '}{Math.round(((205)+(atk.attack * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((25)+(atk.attack * 70 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((85)+(atk.attack * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((145)+(atk.attack * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((205)+(atk.attack * 70 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Fires an explosive charge that deals <span className="stat--ad">25 / 85 / 145 / 205 (+70% AD) physical damage</span> and <span className="stat--moveSpeed">slows by 45/50/55/60% for 1.25 seconds</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> PURGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(0.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{20} / 
            {' '}{10} / 
            {' '}{0} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((12)+(atk.attack * 20 / 100)))} / 
            {' '}{Math.round(((12)+(atk.attack * 25 / 100)))} / 
            {' '}{Math.round(((12)+(atk.attack * 30 / 100)))} / 
            {' '}{Math.round(((12)+(atk.attack * 35 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((12)+(atk.attack * 20 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((12)+(atk.attack * 25 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((12)+(atk.attack * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((12)+(atk.attack * 35 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
           Shoots the nearest enemy rapidly for 4 seconds, dealing <span className="stat--ad">12 (+20 / 25 / 30 / 35% AD) physical damage</span> and applying on-hits at 70% effectiveness. During this time <span className="stat--moveSpeed">Urgot's Movement Speed is reduced by 125</span> and he gains <b>40% Slow Resist</b>.
          </p>

          <p>
           Dealing a minimum of 50 damage to minions and monsters, prioritizes the champion hit most recently by Urgot's abilities. At max rank, Purge gains infinite duration. 
          </p>

          <p>
            <b>Re-cast:</b> Ends Purge.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> DISDAIN
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((70)+(bonus.attack * 150 / 100)+(bonus.health * 15 /100)))} / 
            {' '}{Math.round(((100)+(bonus.attack * 150 / 100)+(bonus.health * 15 /100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 150 / 100)+(bonus.health * 15 /100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 150 / 100)+(bonus.health * 15 /100)))}
          </p>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((170)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((210)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((170)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((210)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
           Gain a shield that absorbs <span className="stat--hp">70 / 100 / 130 / 160 (<span className="stat--ad">+150% bonus AD</span>) (+15% bonus Health)</span> for 4 seconds and charges forward, dealing <span className="stat--ad">90 / 130 / 170 / 210 (+100% bonus AD) physical damage</span> and <b>stunning</b> them for 1.5 seconds. Flings the first enemy champion over him and knock non-champions aside.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FEAR BEYOND DEATH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((100)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((225)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((350)+(bonus.attack * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((100)+(bonus.attack * 70 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((225)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((350)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed))}     
          </p>
    
          <br />
          <p>
           Fires a chem-drill that deals <span className="stat--ad">100 / 225 / 350 (+70% bonus AD) physical damage</span> to the fist champion hit and impales them for 4 seconds, <abbr title="1% per 1% health missing capped at 75%" className="stat--moveSpeed">slowing them by 0 - 75% based on their missing health</abbr>. 
          </p>

          <p>
            <b>Re-cast:</b>  If the impaled target falls below <span className="stat--hp">25% Health</span>, Urgot channels for 1.5 seconds while he reels in and executes them. Upon an execution, nearby enemies are feared for 1.5 seconds.
          </p>

          <p>
           Fear Beyond Death is automatically re-cast if the enemy is below the threshold at the end of the duration. 
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