import { useState, useEffect } from "react";

export default function swain({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const [stacks, setStacks] = useState(0);


  useEffect(() => {
    const object = {
      swainP: stacks
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
          <span className="marker--ability">P</span> RAVENOUS FLOCK
          </h4>

          <div>
            <label>
              Set your <span className="stat--armor">Soul Fragments</span> number:
              {' '}<input
                type="number"
                value={newStackValue}
                onChange={handleInputChange}
              />
            </label>            
            <p><button onClick={updateStacks}>Update Stacks</button> Current bonus: <span className="stat--hp">{stacks * 16} Health</span> </p>
          </div>
    
          <p>
            Swain collect Soul Fragments when Vision of Empire and Nevermove hit enemy champion, and also when they die.
          </p>

          <p>
            Soul Fragments heal for <abbr title="3/4/5/6% HP at level 1/5/9/13" className="stat--hp">{Math.round(atk.health * (3 + Math.floor((currentLevel-1 / 4)))/100)} health</abbr>  and provide <span className="stat--hp">16 Maximum Health</span> 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DEATH'S HAND
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
            {' '}{50}
          </h5>

          <h5 className="stat--ap">
            Damage min-max:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 38 / 100)))} - {Math.round(((50)+(atk.ap * 38 / 100)+(((10)+(atk.ap * 5 / 100))*4)))} / 
            {' '}{Math.round(((80)+(atk.ap * 38 / 100)))} - {Math.round(((80)+(atk.ap * 38 / 100))+(((20)+(atk.ap * 5 / 100))*4))} / 
            {' '}{Math.round(((110)+(atk.ap * 38 / 100)))} - {Math.round(((110)+(atk.ap * 38 / 100)+(((30)+(atk.ap * 5 / 100))*4)))} / 
            {' '}{Math.round(((140)+(atk.ap * 38 / 100)))} - {Math.round(((140)+(atk.ap * 38 / 100)+(((40)+(atk.ap * 5 / 100))*4)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 38 / 100)) * (1 - mod.defMagRed))} -  {Math.round(((50)+(atk.ap * 38 / 100)+(((10)+(atk.ap * 5 / 100))* (4))) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 38 / 100))* (1 - mod.defMagRed))} -  {Math.round(((80)+(atk.ap * 38 / 100)+(((20)+(atk.ap * 5 / 100))* (4)))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 38 / 100))* (1 - mod.defMagRed))} - {Math.round(((110)+(atk.ap * 38 / 100)+(((30)+(atk.ap * 5 / 100))* (4)))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 38 / 100))* (1 - mod.defMagRed))} - {Math.round(((140)+(atk.ap * 38 / 100)+(((40)+(atk.ap * 5 / 100))* (4)))* (1 - mod.defMagRed))}         
          </p>
          <br />
    
          <p>
            Swain extends his demonic arm to launch eldritch bots at enemies, dealing <span className="stat--ap">50 / 80 / 110 / 140 (+38% AP) magic damage</span> to enemies within range.
          </p>

          <p>
            Each bolt after the first deals <span className="stat--ap">10 / 20 / 30 / 40 (+5% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> VISION OF EMPIRE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(21*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(19*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 55 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 55 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))}          
          </p>
          
    
          <br />
          <p>
            Swain summons a demonic eye that explodes after a short delay, dealing <span className="stat--ap">80 / 130 / 180 / 230 (+55% AP) magic damage</span>, <span className="stat--moveSpeed">slowing by 30 / 40 / 50 / 60% for 2.5 seconds</span> and revealing targets hit for 4 seconds. If Vision of Empire damages an immobilized champion it will critically strike for <span className="stat--critChance">150% damage</span>
          </p>

          <p>
            Champions hit will give 1 soul fragment(s).
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> NEVERMOVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 25 / 100)))} - {Math.round(((35)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 25 / 100)))} - {Math.round(((50)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((135)+(atk.ap * 25 / 100)))} - {Math.round(((65)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((185)+(atk.ap * 25 / 100)))} - {Math.round(((80)+(atk.ap * 25 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 25 / 100)) * (1 - mod.defMagRed))} - {Math.round(((35)+(atk.ap * 25 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} - {Math.round(((50)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((135)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} - {Math.round(((65)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((185)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} - {Math.round(((80)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))}          
          </p>

          <br />

          <p>
            Swain launches a demonic wave that deals <span className="stat--ap">35 / 85 / 135 / 185 (+25% AP) magic damage</span>  to enemies along the way, then turns back after reaching the furthest distance, dealing <span className="stat--ap">35 / 50 / 65 / 80 (+25% AP) magic damage</span> to the area and rooting enemies within the area for 1.5 seconds.
          </p>

          <p>
            <b>Recast:</b> Swain pulls the rooted champions to himself and collects <b>1 Soul Fragment</b> from targets.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DEMONIC ASCENSION
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>
          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((35)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((55)+(atk.ap * 15 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((35)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((55)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((15)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((25)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((35)+(atk.ap * 15 / 100)))}
          </p>

          <br />

    
          <p>
           Swain frees the demon, dealing <span className="stat--ap">15 / 35 / 55 (+15% AP) magic damage</span> per second to enemies within his range and restoring <span className="stat--hp">15 / 25 / 35 (<span className="stat--ap">+15% AP</span>) health</span> to himself.
          </p>

          <p>
            <b>Recast:</b> Can be cast again  after 2 seconds of Demonic Ascension, dealing damage and slowing enemies.
          </p>

          <p>
            Non-champion units will restore 10% health.
            Demon Ascension is controlled by Demon Energy, which depletes over time, and can be recharged indefinitely by draining enemy Champions,  Champion takedowns fully restore Demon Energy.
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