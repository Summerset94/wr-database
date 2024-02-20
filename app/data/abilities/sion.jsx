import { useState, useEffect } from "react";

export default function sion({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const [stacks, setStacks] = useState(0);


  useEffect(() => {
    const object = {
      sionW: stacks
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
          <span className="marker--ability">P</span> GLORY IN DEATH
          </h4>       
    
          <div>
            <label>
              <abbr title="not 'stacks' -  Health. 1 to 1 convertation">Set your passive <span className="stat--hp">bonus Health:</span></abbr> 
              {' '}<input
                type="number"
                value={newStackValue}
                onChange={handleInputChange}
              />
            </label>            
            <p><button onClick={updateStacks}>Update Stacks</button> Current bonus: <span className="stat--hp">{stacks} Health</span> </p>
          </div>

          <p>
            Sion permanently gains <span className="stat--hp">5 bonus health</span> whenever he kills a unit, increased to <span className="stat--hp">20</span> against large units, and champion takedowns.
          </p>

          <p>
            Upon talking fatal damage, Sion will reanimate himself Fearing those around him for 1 second, while <span className="stat--moveSpeed">slowing their Movement Speed by 90%</span>. After reanimating, Sion can move and Attack, but his health rapidly decays while he is reanimated. Sion reanimates with <span className="stat--hp">100% health</span>, attacks at <span className="stat--as">1.75 attacks per second</span> , gains <span className="stat--vamp">100% Physical Vamp</span> lifesteal, his attacks deal an additional <span className="stat--ap">8% target's Max Health magic damage</span>, copped at 75 bonus damage against monsters and deal 50% damage to structures.
          </p>

          <p>
          All of Sion's abilities are replaced with Death Surge, which grants him <span className="stat--moveSpeed">67% Movement Speed</span> decaying over 2.38 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DECIMATING SMASH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.attack * 45 / 100)))} - {Math.round(((80)+(atk.attack * 135 / 100)))} / 
            {' '}{Math.round(((65)+(atk.attack * 55 / 100)))} - {Math.round(((165)+(atk.attack * 165 / 100)))} / 
            {' '}{Math.round(((90)+(atk.attack * 65 / 100)))} - {Math.round(((250)+(atk.attack * 195 / 100)))} / 
            {' '}{Math.round(((115)+(atk.attack * 75 / 100)))} - {Math.round(((335)+(atk.attack * 225 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.attack * 45 / 100)) * (1 - mod.defPhysRed))} - {Math.round(((80)+(atk.attack * 135 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((65)+(atk.attack * 55 / 100))* (1 - mod.defPhysRed))} - {Math.round(((165)+(atk.attack * 165 / 100))* (1 - mod.defPhysRed))}/ 
            {' '}{Math.round(((90)+(atk.attack * 65 / 100))* (1 - mod.defPhysRed))} - {Math.round(((250)+(atk.attack * 195 / 100))* (1 - mod.defPhysRed))}  / 
            {' '}{Math.round(((115)+(atk.attack * 75 / 100))* (1 - mod.defPhysRed))} - {Math.round(((335)+(atk.attack * 225 / 100))* (1 - mod.defPhysRed))}          
          </p>
              
          <p>
            Sion charges a heavy blow for up to 1.75 seconds.
          </p>

          <p>
            <b>Recast:</b> Sion slams his axe down, briefly Slowing enemies hit by 50% for 0.25 seconds and dealing between <span className="stat--ad">40 / 65 / 90 / 115 (+45 / 55 / 65 / 75% AD)</span> and <span className="stat--ad">80 / 165 / 250 / 335 (+135 / 165 / 195 / 225% AD) physical damage</span> based  on charge time. If Sion charged for at least 0.75 second, enemies are Knocked Up and Stunned for between 1~2s based on charge time.
          </p>

          <p>
            Minions take 60% damage, while Monsters take 120% damage.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SOUL FURNACE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65}
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((75)+(atk.ap * 40 / 100)+(atk.health * 10 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)+(atk.health * 11 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 40 / 100)+(atk.health * 12 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)+(atk.health * 13 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Base: 
            {' '}{Math.round(((40)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((75)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Current target: 
            {' '}{Math.round(((40)+(atk.ap * 40 / 100)+(def.health * 10 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(atk.ap * 40 / 100)+(def.health * 11 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)+(def.health * 12 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 40 / 100)+(def.health * 13 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Sion gains a shield that absorbs <span className="stat--hp">75 / 100 / 125 / 150 (<span className="stat--ap">+40% AP</span>) (+10 / 11 / 12 / 13% Max Health)</span> damage for 6 seconds.
          </p>

          <p>
            After 2 seconds if the shield still holds, Sion can Recast to detonate the shield to deal <span className="stat--ap">40 / 75 / 110 / 145 (+40% AP) (<span className="stat--hp">+10 / 11 / 12 / 13% target's max Health</span> ) magic damage</span> to all nearby enemies.
          </p>

          <p>
            Bonus damage is capped at 400 against monsters. The shield will automatically detonate after 6 seconds.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> ROAR OF THE SLAYER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
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
            {' '}{Math.round(((75)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((165)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 55 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 55 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((165)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Sion fires a shockwave, dealing <span className="stat--ap">75 / 120 / 165 / 210 (+55% AP) magic Damage</span> Slowing them <span className="stat--moveSpeed">by 50 / 55 / 60 / 65% for 2.5 seconds</span> and removing <span className="stat--armor">20% Armor</span> for 4 seconds.
          </p>

          <p>
            None-champions hit are Knocked Back. Enemies hit by a Knocked Back target take the same damage and effects.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> UNSTOPPABLE ONSLAUGHT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
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
            {' '}{Math.round(((150)+(bonus.attack * 40 / 100)))} - {Math.round(((400)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((300)+(bonus.attack * 40 / 100)))} - {Math.round(((800)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((450)+(bonus.attack * 40 / 100)))} - {Math.round(((1200)+(bonus.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((150)+(bonus.attack * 40 / 100)) * (1 - mod.defPhysRed))} - {Math.round(((400)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((300)+(bonus.attack * 40 / 100))* (1 - mod.defPhysRed))} - {Math.round(((800)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}/ 
            {' '}{Math.round(((450)+(bonus.attack * 40 / 100))* (1 - mod.defPhysRed))} - {Math.round(((1200)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}       
          </p>

          <p>
            Sion charges Unstoppably in a direction, turning with player input. Sion stops when colliding with an enemy champion, structure, terrain, or when recasting this ability.            
          </p>

          <p>
            When this happens, Sion will slam the ground with earth shattering force, dealing between <span className="stat--ad">150 / 300 / 450 (+40% bonus AD)</span> and <span className="stat--ad">400 / 800 / 1200 (+80% bonus AD) physical damage</span> while Stunning and Knocking Up enemies for 0.5~1.5s <abbr title="capped after 3 seconds">based on charge time.</abbr>
          </p>

          <p>
          Deals 50% damage to structures. 
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