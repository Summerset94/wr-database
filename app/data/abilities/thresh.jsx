import { useState, useEffect } from "react";

export default function blank({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [stacks, setStacks] = useState(0);


  useEffect(() => {
    const object = {
      threshP: stacks
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
          <span className="marker--ability">P</span> 
          </h4>

          <div>
            <label>
              Set your <span className="stat--armor">Souls</span> number:
              {' '}<input
                type="number"
                value={newStackValue}
                onChange={handleInputChange}
              />
            </label>            
            <p><button onClick={updateStacks}>Update Stacks</button> Current bonus <span className="stat--armor">Armor</span> / <span className="stat--ap">Ability Power</span>: {stacks * 2} </p>
          </div>
    
          <p>
            Thresh can harvest the Souls of enemies that die near him, each soul permanently granting him <span className="stat--armor">2 Armor</span> and <span className="stat--ap">2 Ability Power</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DEATH SENTENCE
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
            {' '}{70}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Throws out a scythe, stunning the first unit hit and pulling them in for 1.5 seconds. The scythe does <span className="stat--ap">80 / 130 / 180 / 230 (+50% AP) magic damage</span> and grants True Sight for the duration.
          </p>

          <p>
            <b>Recast:</b> Dashes to the bound enemy.
          </p>

          <p>
            Cooldown is reduced by 3 seconds if it hits an enemy.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> DARK PASSAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(22*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--hp">
           Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((65)+(stacks * 2)))} / 
            {' '}{Math.round(((115)+(stacks * 2)))} / 
            {' '}{Math.round(((165)+(stacks * 2)))} / 
            {' '}{Math.round(((215)+(stacks * 2)))}
          </p>
    
          <br />
          <p>
           Throws a Lantern to a target location, allowing an ally to tap the Minion Button to dash to Thresh. 
          </p>

          <p>
            The Lantern also grants a shield to Thresh and the first ally comes near it, absorbing up to <span className="stat--hp">65 / 115 / 165 / 215 (<span className="stat--armor">+2 per Soul</span>) damage</span> for 4 seconds.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> FLAY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--ad">
            Passive Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation:
          {' '}{stacks * 2} -  {Math.round(((stacks * 2)+(atk.attack * 80 / 100)))} / {Math.round(((stacks * 2)+(atk.attack * 100 / 100)))} / {Math.round(((stacks * 2)+(atk.attack * 120 / 100)))} / {Math.round(((stacks * 2)+(atk.attack * 140 / 100)))}           
          </p>

          <p className="stat--ap">Post-mitigation:
            {' '}{Math.round((stacks * 2)* (1 - mod.defMagRed))} -  {Math.round(((stacks * 2)+(atk.attack * 80 / 100))* (1 - mod.defMagRed))} / {Math.round(((stacks * 2)+(atk.attack * 100 / 100))* (1 - mod.defMagRed))} / {Math.round(((stacks * 2)+(atk.attack * 120 / 100))* (1 - mod.defMagRed))} / {Math.round(((stacks * 2)+(atk.attack * 140 / 100))* (1 - mod.defMagRed))}      
          </p>

           <h5 className="stat--ap">
            Damage:     
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((185)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((105)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((185)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>       
    
          <br />
          <p>
           <b>Passive:</b> Basic attacks deal additional <span className="stat--ap">2 x Souls to 2 x Souls (<span className="stat--ad">+80 / 100 / 120 / 140% AD</span>) magic damage</span> based on how long since he last attacked (6 seconds for max charge).
          </p>

          <p>
            <b>Active:</b> Thresh whips his chains, pulling or pushing enemies in the direction of the swing. Enemies hit are also <span className="stat--moveSpeed">slowed by 20 / 25 / 30 / 35% for 1 second</span> and take <span className="stat--ap">65 / 105 / 145 / 185 (+40% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> THE BOX
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(75*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((250)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((400)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((550)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((250)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((400)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((550)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <br />
          <p>
            Creates a prison of spectral walls, <span className="stat--moveSpeed"> slowing champions by 99% for 2 seconds</span> and dealing <span className="stat--ap">250 / 400 / 550 (+100% AP) magic damage</span>.  Wall breaks after one collision, and after one is broken, the rest deal half damage and slow for half duration.
          </p>

          <p>
            An enemy cannot be affected by multiple walls simultaneously.
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