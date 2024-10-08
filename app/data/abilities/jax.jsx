import { useState, useEffect } from "react";

export default function jax({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [ultLevel, setUltLevel] = useState(0);

  useEffect(() => {
    const object = {
      jaxR: ultLevel
    };
    updateAbilitiesBonus(object)
  }, [ultLevel]);  

  const changeNumber = () => {
    setUltLevel(oldNum => oldNum < 3 ? oldNum + 1 : 0);    
  }

  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> RELENTLESS ASSAULT
          </h4>  
          
          <h5 className="stat--as">Attack speed bonus:</h5>
          <p className="stat--as">
            One stack: {(champ.asBase * (5 +(currentLevel -1))  / 100).toFixed(3)};
            {' '}Full stacks: {((champ.asBase * (5 +(currentLevel -1))  / 100)*5).toFixed(3)}</p>

    
          <p>
            Attacks against champions and minions grant <abbr className="stat--as" title="5 + 1 per level">5%-19% Attack Speed</abbr> for 3 seconds. (Max 5 stacks).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> LEAP STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65} / 
            {' '}{65} / 
            {' '}{65} / 
            {' '}{65} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((125)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((235)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((125)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((235)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Leaps to a target unit, dealing <span className="stat--ad">70 / 125 / 180 / 235 (+100% bonus AD) physical damage</span>  if it is an enemy.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> EMPOWER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(3*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((55)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((55)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Empowers the next attack or Leap Strike to deal an additional <span className="stat--ap">55 / 100 / 145 / 190 (+60% AP) magic damage</span>.
          </p>

          <p>
            Damage to monsters: 125%
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> COUNTER STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
           Base Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(def.health * 3/100 | 0) + (atk.ap*70/100)))} / 
            {' '}{Math.round(((75)+(def.health * 3/100 | 0) + (atk.ap*70/100)))} / 
            {' '}{Math.round(((115)+(def.health * 3/100 | 0) + (atk.ap*70/100)))} / 
            {' '}{Math.round(((155)+(def.health * 3/100 | 0) + (atk.ap*70/100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(def.health * 3/100 | 0) + (atk.ap*70/100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(def.health * 3/100 | 0) + (atk.ap*70/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(def.health * 3/100 | 0) + (atk.ap*70/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((155)+(def.health * 3/100 | 0) + (atk.ap*70/100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Enters a defensive stance, dodging all incoming attacks and taking <span className="stat--armor">25% reduced damage</span> from champions for 2 seconds.
          </p>

          <p>
           After this duration, nearby enemies are stunned for 1 second and take <span className="stat--ap">35 / 75 / 115 / 155  <span className="stat--hp">(+ 3% target’s max Health)</span> (+70% AP) magic damage</span>. 
          </p>
           <p>
            Each attack dodged increases this damage by 20% (up to 100%).
           </p>
           <p>
            <b>RE-CAST:</b> Ends the defensive stance early to damage and stun nearby enemies immediately.
           </p>
          
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> GRANDMASTER'S MIGHT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
           Passive damage bonus:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
            Activation Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--armor">Defence bonus (base + bonus per champion hit):</h5>
          <p><span className="stat--armor">Armor:
            {' '}{Math.round((30)+(bonus.attack * 40 / 100))} + {Math.round(10 + (bonus.attack * 10 / 100))} /
            {' '}{Math.round((50)+(bonus.attack * 40 / 100))} + {Math.round(20 + (bonus.attack * 10 / 100))} /
            {' '}{Math.round((70)+(bonus.attack * 40 / 100))} + {Math.round(25 + (bonus.attack * 10 / 100))}
            </span> <br />
            <span className="stat--magres"> Magic Resistance:
            {' '}{Math.round(((30)+(bonus.attack * 40 / 100))*0.6)} + {Math.round((10 + (bonus.attack * 10 / 100))*0.6)} /
            {' '}{Math.round(((50)+(bonus.attack * 40 / 100))*0.6)} + {Math.round((20 + (bonus.attack * 10 / 100))*0.6)} /
            {' '}{Math.round(((70)+(bonus.attack * 40 / 100))*0.6)} + {Math.round((25 + (bonus.attack * 10 / 100))*0.6)}
            </span> 
          </p>
    
          <p>
          <b>PASSIVE:</b> Every thid consecutive attack within 3 seconds deals an additional <span className="stat--ap">60 / 110 / 160 (+70% AP) magic damage</span>.
          </p>

          <p>
          <b>ACTIVE:</b> Swings his stave, dealing <span className="stat--ap">150 / 250 / 350 (+100% AP) magic damage</span> to nearby enemies. When hitting only one enemy champion, gains <span className="stat--armor">30 / 50 / 70 <span className="stat--ad">(+ 40% bonus AD)</span> Armor</span>  and <span className="stat--magres">Magic Resist equal to 60% of that Armor</span>. If he hits more than one champion, he gains bonus <span className="stat--armor">15 / 20 / 25 <span className="stat--ad">(+ 10% bonus AD)</span> Armor</span>  and <span className="stat--magres">Magic Resist equal to 60% of that Armor</span> for 8s per additional champion hit. During this time, his size increases by 10%, and he deals additional magic damage with every second attack.
          </p>

          <p>
            Toggle ultimate's active bonus:
            <button onClick={changeNumber}>Change ult level</button> Current ult level: <b className="stat--armor">{ultLevel}</b> 
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