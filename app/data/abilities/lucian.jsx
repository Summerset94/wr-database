import { useMemo } from "react";

export default function lucian({currentLevel, mod, bonus, atk, def, champ}) {
  const numbers = useMemo(() => {
    const passive = {
      modifier: 50
    };

    switch (currentLevel) {
      case currentLevel < 6:
        passive.modifier = 50;
        break;
      case currentLevel >= 6 && currentLevel  < 11:
        passive.modifier = 55;
        break;
      case currentLevel >= 11:
        passive.modifier = 60;
        break;
      default:
        passive.modifier = 50;
    }

    return {
      passive: {
        raw: (atk.attack * passive.modifier/100),
        mitigated: (atk.attack * passive.modifier/100) * (1 - mod.defPhysRed),
        rawCrit: (atk.attack * passive.modifier/100) * atk.critMultiplier,
        mitigatedCrit: (atk.attack * passive.modifier/100) * (1 - mod.defPhysRed) * atk.critMultiplier
      }
    }
  }, [atk, def, currentLevel])
  
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> LIGHTSLINGER
          </h4>

          <h5 className="stat--ad">Second Shot damage:</h5>
          <p className="stat--ad">Normal (pre / post mitigated): {Math.round(numbers.passive.raw)} / {Math.round(numbers.passive.mitigated)}</p>
          <p className="stat--critChance">Crit (pre / post mitigated): {Math.round(numbers.passive.rawCrit)} / {Math.round(numbers.passive.mitigatedCrit)}</p>
    
          <p>
          After using an Ability, Lucian's next attack within 3.5 seconds will fire two shots.
          </p>
          <p>
          The second shot deals <abbr title="at level 1 / 6 /11" className="stat--ad">50% / 55% / 60% physical damage</abbr>, increased to <span className="stat--ad">100%</span>  against minions. The second shot is a separate Attack that deals on-hit effects and can <span className="stat--critChance">critical strike</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span>  PIERCING LIGHT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((100)+(bonus.attack * 65 / 100)))} / 
            {' '}{Math.round(((145)+(bonus.attack * 85 / 100)))} / 
            {' '}{Math.round(((190)+(bonus.attack * 105 / 100)))} / 
            {' '}{Math.round(((235)+(bonus.attack * 125 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((100)+(bonus.attack * 65 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((145)+(bonus.attack * 85 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((190)+(bonus.attack * 105 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((235)+(bonus.attack * 125 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Shoots a bolt of piercing light through an enemy unit, damaging enemies in a line for <span className="stat--ad">100 / 145 / 190 / 235 (+65 / 85 / 105 / 125% bonus AD) physical damage</span>.
          </p>

          <p>
            Cast time decreases as Bucian's attack speed increases (up to <span className="stat--as">140% bonus attack speed</span>).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ARDENT BLAZE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((165)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 90 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 90 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((165)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Fires a shot that explodes at the end of its range or on the first enemy hit, dealing <span className="stat--ap">75 / 120 / 165 / 210 (+90% AP) magic damage</span>, briefly revealing enemies and marking them for 6 seconds.
          </p>

          <p>
          When Lucian or an ally damage a market enemy, Lucian gains <span className="stat--moveSpeed"> 65 / 70 / 75 /80  Movement Speed</span> for 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> RELENTLESS PURSUIT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(23*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{30} / 
            {' '}{15} / 
            {' '}{0} 
          </h5>
    
          <p>
          Quickly dashes a short distance. 
          </p>

          <p>
          Cooldown is reduced by 1 second whenever Lucian hits an enemy with Lightslinger (2 seconds for champions).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> THE CULLING
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Shot damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((40)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((60)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((40)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100))* (1 - mod.defPhysRed))}
          </p>

          <h5 className="stat--critChance">
            Total damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100))*22)} / 
            {' '}{Math.round(((40)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100))*26)} / 
            {' '}{Math.round(((60)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100))*30)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100)) * (1 - mod.defPhysRed))*22} / 
            {' '}{Math.round(((40)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100))* (1 - mod.defPhysRed))*26} / 
            {' '}{Math.round(((60)+(atk.attack * 25 / 100)+(atk.ap * 10 / 100))* (1 - mod.defPhysRed))*30}
          </p>
    
          <p>
          Fires rapidly in a direction for 3 seconds. Each shot deals <span className="stat--ad">20 / 40 / 60 (+25% AD) (<span className="stat--ap">+10% AP</span>) physical damage</span> to the first enemy hit.
          </p>

          <p>
            <b>Total Number Of Shots:</b> 22 / 26 / 30
          </p>

          <p>
          Lucian may use Relentless Pursuit during the Culling. <br />
          Recast to cancel early. <br />
          Minions take 200% damage from The Culling.
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