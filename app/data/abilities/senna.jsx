import { useState, useEffect } from "react";

export default function senna({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [stacks, setStacks] = useState(0);


  useEffect(() => {
    const object = {
      sennaP: stacks
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
          <span className="marker--ability">P</span> ABSOLUTION
          </h4>

          <div>
            <label>
              Set your passive <span className="stat--armor">Mist Stacks:</span>
              {' '}<input
                type="number"
                value={newStackValue}
                onChange={handleInputChange}
              />
            </label>            
            <p><button onClick={updateStacks}>Update Stacks</button> Current bonus: <span className="stat--ad">{stacks} stacks</span> </p>
          </div>
    
          <p>
           Senna has 20% Attack Speed Ratio. This means that yoy'll get only 20% of <span className="stat--as">Attack Speed Bonus</span> from items 
          </p>

          <p>
          Senna can absorb <b>Mist</b>  by attacking souls that spawn from dead enemies. She can also siphon <b>Mist</b> from enemy champions she hits twice within 4s, dealing <abbr title="1.2% +1.2% per level" className="stat--ad">{(1.2*currentLevel).toFixed(1)}% of their current health</abbr> as bonus physical damage. (6 second cooldown per target)
          </p>

          <p>
           Each stack of <b>Mist</b> grants <span className="stat--ad">1 Attack Damage</span>. Every 20 stacks of <b>Mist</b> grant <b>15 Attack Range</b> and <span className="stat--critChance">15% Critical Strike Chance</span>. <span className="stat--critChance">35% of excess Critical Strike Chance</span> is converted to <span className="stat--vamp">physical vamp</span>. 
          </p>

          <p>
            Attacks take extra time to fire, dealing <abbr title="20% AD" className="stat--ad">{Math.round(atk.attack * 20 / 100)} bonus physical damage</abbr>, and briefly grant Senna <abbr title="at level 1 / 5 / 9" className="stat--moveSpeed">10% of the target's Movement Speed</abbr> 
          </p>
          
          <p>
           Senna does not gain Attack Damage on level up. Her Critical Strikes deal 25% less damage.            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PIERCING DARKNESS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((40)+(atk.ap * 25 / 100)+(bonus.attack * 40 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 25 / 100)+(bonus.attack * 40 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 25 / 100)+(bonus.attack * 40 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 25 / 100)+(bonus.attack * 40 / 100)))}
          </p>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((50)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((90)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((170)+(bonus.attack * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((50)+(bonus.attack * 50 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((170)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Shoots a bolt of piercing shadow through any object, dealing <span className="stat--ad">50 / 90 / 130 / 170 (+50% bonus AD) physical damage</span> to enemies, slowing by <span className="stat--moveSpeed">15% (<span className="stat--ad">+0.1 bonus AD</span>) (<span className="stat--ap">+0.06% AP</span> )</span> for 0.75/1/1.25/1.5s  and restoring <span className="stat--hp">40 / 70 / 100 / 130 (<span className="stat--ad">+40% bonus AD</span>) (<span className="stat--ad">+25% AP</span>) Health</span>  to ally champions.
          </p>

          <p>
            Attack reduce Piercing Darkness's cooldown by 1 second(s).
          </p>

          <p>
            This ability cast range matches Senna's attack range and its cast time is improved with Attack Speed. It applies on-hit effects to enemy champions.
            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> LAST EMBRACE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((155)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((220)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((285)+(bonus.attack * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 70 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((155)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((220)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((285)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Sends forth a wave of Black Mist, dealing <span className="stat--ad">90 /155 / 220 / 285 (+70% bonus AD) physical damage</span> to the first enemy hit. After a 1 second delay the target and other nearby enemies are Rooted for <b>1.3/1.6/1.9/2.2 seconds</b>.
          </p>


        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> 
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
            {' '}{70}
          </h5>
    
          <p>
            Dissolves into a cloud mist for <b>6 / 6.5 / 7 / 7.5 seconds</b>, becoming a Wrath. Allied champions who enter the mist are Camouflaged and become Wraiths when they leave.
          </p>

          <p>
            Wraiths gain 20% Movement Speed, are Unselectable, and hide their identities as long as no enemy champions are nearby.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DAWNING SHADOW
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

          <h5 className="stat--hp">
            Healing Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((120)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100)))}
          </p>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((250)+(bonus.attack * 100 / 100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((375)+(bonus.attack * 100 / 100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((500)+(bonus.attack * 100 / 100)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((250)+(bonus.attack * 100 / 100)+(atk.ap * 40 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((375)+(bonus.attack * 100 / 100)+(atk.ap * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((500)+(bonus.attack * 100 / 100)+(atk.ap * 40 / 100))* (1 - mod.defPhysRed))}
          </p>

    
          <p>
            Fires a global wave that shields allies from <span className="stat--hp">120 / 160 / 200 (<span className="stat--ap">+40% AP</span>) (+4 per Mist stack) damage</span> for 3 seconds, while dealing <span className="stat--ad">250 / 375 / 500 (+100% bonus AD) (<span className="stat--ap">+40% AP</span>)  physical damage</span> and applies Mist to enemies caught in the center.
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