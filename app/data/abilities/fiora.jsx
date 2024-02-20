export default function fiora({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DUELIST'S DANCE
          </h4>

          <h5 className="stat--vamp">Damage:</h5>
          <p className="stat--ad">{Math.round(def.health * ((3.5 + (bonus.attack * 0.055))/100))}</p>

    
          <p>
            Revelas Vitals on nearby enemy champions. <br />
            Striking a Vital deals <span className="stat--vamp">3.5% <span className="stat--ad">(+0.055% bonus AD)</span>  of the target's max Health as true damage</span>, heals Fiora for <abbr title="45-115 based on level" className="stat--hp">{40 + (5*currentLevel)} health</abbr>, and grants her <abbr title="Based on ULT ability's rank" className="stat--moveSpeed"></abbr> Movement Speed (based on Grand Challenge's rank), decaying over 1.75 seconds. <br />
            New Vitals are revealed after striking one, or after 15 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> LUNGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{20} / 
            {' '}{25} / 
            {' '}{30} / 
            {' '}{35} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((85)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((95)+(bonus.attack * 105 / 100)))} / 
            {' '}{Math.round(((105)+(bonus.attack * 110 / 100)))} / 
            {' '}{Math.round(((115)+(bonus.attack * 115 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((85)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((95)+(bonus.attack * 105 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((105)+(bonus.attack * 11 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((115)+(bonus.attack * 115 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Lunges and stabs a neaby enemy, dealing <span className="stat--ad"> 85 / 95 / 105 / 115 (+100% / 105% / 110% / 115% bonus AD) physical damage </span>in an area. Hitting an enemy refunds <b>50%</b> of the cooldown.
          <br />
          Lunge prioritizes Vitals and enemies it will kill. Applies <span className="stat--ad">on-hit effects</span> to the primary target.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> RIPOSTE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
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
            {' '}{Math.round(((120)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((270)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((120)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((270)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Parries all incoming damage and debuffs for the next 0.75 econds. Then stabs in the target direction, dealing <span className="stat--ap">120 / 170 / 220 / 270 (+100% AP) magic damage</span>  to the first enemy champion, slowing their <span className="stat--moveSpeed">Movement Speed</span> and <span className="stat--as">Attack Speed</span> by <b>50%</b>  for 1.5 seconds.

          Riposte <b>stuns</b>  instead of slows if it parries an immobilizing effect.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> BLADEWORK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 170 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 180 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 190 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 200 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 170 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 180 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 190 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 200 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Empowers the next 2 attacks with <span className="stat--as">60% Attack Speed</span>. The first attack applies a <span className="stat--moveSpeed">30% slow</span>  for 1 second, but cannot critically strike. The second attack will aways critically strike for <span className="stat--critChance">170% / 180% / 190% / 200% physical damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> GRAND CHALLENGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--hp">Healing per tick:</h5>
          <p className="stat--hp"> 
            {Math.round(((80)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((110)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((140)+(bonus.attack * 60 / 100)))}
          </p>

          <h5 className="stat--vamp">4 Vitals proc damage:</h5>
          <p className="stat--ad">{Math.round(def.health * 14 / 100)}</p>


    
          <p>
          Revelas all 4 Vitals on an enemy champion for 8 seconds and grants Duelist's Dance's Movement Speed while near them.
          <br />
          Striking all 4 Vitals in 8 seconds -or if the target dies after at least one  hit- heals Fiora and nearby allies for <span className="stat--hp">80 / 110 / 140 <span className="stat--ad">(+60% bonus AD)</span> each second</span> . The heal persists for 2 to 5 seconds, scaling with the number of Vitals Hit.
          <br />
          Strikig all 4 Vitals deals <span className="stat--vamp">14% max health true damage</span>.
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