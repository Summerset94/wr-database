import { useState, useEffect } from "react";

export default function veigar({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [stacks, setStacks] = useState(0);


  useEffect(() => {
    const object = {
      veigarP: stacks
    };
    updateAbilitiesBonus(object)
  }, [stacks]); 

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
          <span className="marker--ability">P</span> PHENOMENAL EVIL POWER
          </h4>

          <div>
            <label>
              Set your <span className="stat--armor">Stacks</span> number:
              {' '}<input
                type="number"
                value={newStackValue}
                onChange={handleInputChange}
              />
            </label>            
            <p><button onClick={updateStacks}>Update Stacks</button> Current bonus <span className="stat--ap">Ability Power</span>: {stacks} </p>
          </div>
    
          <p>
            Hitting an Enemy Champion with a spell grants Veigar 1 stack of Phenomenal Evil.
            Killing minions or monsters with a spell grants Veigar 1 stack of Phenomenal Evil.
            Champion takedowns grant Veigar 5 stacks of Phenomenal Evil.            
          </p>

          <p>
            Each stack of Phenomenal Evil grants <span className="stat--ap">1 Ability Power</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BALEFUL STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((185)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((245)+(atk.ap * 65 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((125)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((185)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((245)+(atk.ap * 65 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Veigar unleashes a bolt of dark energy, dealing <span className="stat--ap">65 / 125 / 185 / 245 (+50 / 55 / 60 / 65% AP) magic damage</span> to the first two enemies hit.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> DARK MATTER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((280)+(atk.ap * 90 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 90 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((280)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Veigar summons dark matter from the sky, dealing <span className="stat--ap">100 / 160 / 220 / 280 (+90% AP) magic damage</span> 
          </p>

          <p>
           Every 50 stacks of Phenomenal Evil reduce this ability's cooldown by 10%. 
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> EVENT HORIZON
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
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} / 
            {' '}{90} 
          </h5>
    
          <br />
          <p>
           Veigar creates a cage that stuns enemies that pass through for <b>1.75 / 2 / 2.25 / 2.5 seconds</b>. The cage lasts for 3 seconds. 
          </p>

          <p>
            Veigar's auto casts will prioritize targets stunned by Event Horizon.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> PRIMORDIAL BURST
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

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((185)+(atk.ap * 75 / 100)))} -
            {' '}{Math.round(((185)+(atk.ap * 75 / 100))*2)} / 
            {' '}{Math.round(((250)+(atk.ap * 75 / 100)))} - 
            {' '}{Math.round(((250)+(atk.ap * 75 / 100))*2)} /
            {' '}{Math.round(((315)+(atk.ap * 75 / 100)))} -
            {' '}{Math.round(((315)+(atk.ap * 75 / 100))*2)}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((185)+(atk.ap * 75 / 100)) * (1 - mod.defMagRed))} -
            {' '}{Math.round(((185)+(atk.ap * 75 / 100)) * (1 - mod.defMagRed)*2)} / 
            {' '}{Math.round(((250)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))} - 
            {' '}{Math.round(((250)+(atk.ap * 75 / 100))* (1 - mod.defMagRed)*2)} /
            {' '}{Math.round(((315)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))} -
            {' '}{Math.round(((315)+(atk.ap * 75 / 100))* (1 - mod.defMagRed)*2)}     
          </p>
    
          <br />
          <p>
           Veigar blasts an Enemy Champion with primal magic to deal <span className="stat--ap">185 / 250 / 315 (+75% AP) magic damage</span> to them, increased by 0% - 100% based on the target's missing health.
          </p>

          <p>
            Deals max damage to enemies below <span className="stat--hp">35% health</span>.
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