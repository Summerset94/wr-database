import { useState, useEffect } from "react";

export default function nasus({currentLevel, mod, bonus, atk, def, champ}) {

  const [stacks, setStacks] = useState(0);

  const [newStackValue, setNewStackValue] = useState('');

  const handleInputChange = (event) => {
    setNewStackValue(event.target.value);
  }

  const updateStacks = () => {
    const newNum = parseInt(newStackValue);
    if (!isNaN(newNum)) {
      setStacks(newNum);
    }
  }


  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SOUL EATER
          </h4>
    
          <p>
          Gains <abbr title="at level 1 / 5 / 9" className="stat--vamp">12 / 18 / 24% Physical Vamp</abbr>
          </p>

          
            <label>
              Set your <abbr title="1 stack = 4 damage"> <b>Siphoning Strike</b> <span className="stat--armor"> Stacks:</span></abbr>
              {' '}<input
                type="number"
                value={newStackValue}
                onChange={handleInputChange}
              />
            </label>            
            <p><button onClick={updateStacks}>Update Stacks</button> Current bonus: <span className="stat--ad">{4 * stacks} damage</span> </p>
          
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> SIPHONING STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{20}
          </h5>

          <h5 className="stat--ad">
            Base damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((30)+(stacks*4)))} / 
            {' '}{Math.round(((55)+(stacks*4)))} / 
            {' '}{Math.round(((80)+(stacks*4)))} / 
            {' '}{Math.round(((105)+(stacks*4)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((30)+(stacks*4)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((55)+(stacks*4))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(stacks*4))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((105)+(stacks*4))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Empowers next attack within 10 seconds to deal an additional <span className="stat--ad">30 / 55 / 80 / 105 physical damage</span>.
          </p>

          <p>
          If Siphoning Strike kills the target, its damage is permanently increased by <span className="stat--ad">4</span>.
          </p>

          <p>
          Killing champions, large minions and large monsters increases Siphoning Strike's damage by <span className="stat--ad">8</span> instead.
          </p>

        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> WITHER
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
            {' '}{80}
          </h5>
    
          <p>
            Slows enemy <span className="stat--moveSpeed">Movement Speed by 35%</span> and Attack Speed by <span className="stat--as">22.5 / 30 / 37.5 / 45%</span> for 5 seconds. The Movement Speed slow increases to <span className="stat--moveSpeed">45 / 60 / 75 / 90% </span> over the duration. 
          </p>
        </div>
    },
  
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SPIRIT FIRE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{110} / 
            {' '}{120} / 
            {' '}{130} / 
            {' '}{140} 
          </h5>

          <h5 className="stat--ap">
            Initial damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((55)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((165)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((55)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((165)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ap">
           Tick Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((11)+(atk.ap * 12 / 100)))} / 
            {' '}{Math.round(((22)+(atk.ap * 12 / 100)))} / 
            {' '}{Math.round(((33)+(atk.ap * 12 / 100)))} / 
            {' '}{Math.round(((44)+(atk.ap * 12 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((11)+(atk.ap * 12 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((22)+(atk.ap * 12 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((33)+(atk.ap * 12 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((44)+(atk.ap * 12 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Creates a flaming zone, dealing <span className="stat--ap">55 / 110 / 165 / 220 (+40% AP) magic damage</span>. The zone persists for 5 seconds, dealing <span className="stat--ap">11 / 22 / 33 / 44 (+12% AP)</span> over time and reducing <span className="stat--armor">Armor by 15 / 20 / 25 / 30%</span>.

          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FURY OF THE SANDS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage (current target):
          </h5>

          <p className="stat--ap">
                {Math.round((def.health * (3 + (atk.ap * 0.01))/100) * (1 - mod.defMagRed))} / 
            {' '}{Math.round((def.health * (4 + (atk.ap * 0.01))/100)* (1 - mod.defMagRed))} / 
            {' '}{Math.round((def.health * (5 + (atk.ap * 0.01))/100)* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Enchances himself to gain <span className="stat--hp">300 / 450 / 600 Health</span>, <b>40 / 50 /60 </b> <span className="stat--armor">Armor</span> and <span className="stat--magres">Magic Resist</span> for 12 seconds.
          </p>

          <p>
          Deals <span className="stat--ap">magic damage</span> to nearby enemies equal to <span className="stat--ap">3 / 4 / 5% (+0.01% AP)</span> of their Health during the duration.
          </p>

          <p>
          Siphoning Strike's (1St spell) cooldown is reduced by 50% during the duration.
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