import { useState, useEffect } from "react";

export default function darius({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [abilLevel, setAbilLevel] = useState(0);

  useEffect(() => {
    const object = {
      dariusE: abilLevel
    };
    updateAbilitiesBonus(object)
  }, [abilLevel]);  

  const changeNumber = () => {
    setAbilLevel(oldNum => oldNum < 4 ? oldNum + 1 : 0);
  }


  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> HEMMORHAGE
          </h4>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}Stack: {Math.round((((15 + 2 * (currentLevel- 1)))+(bonus.attack * 40 / 100)))} / 
            {' '}Full: {Math.round((((15 + 2 * (currentLevel- 1)))+(bonus.attack * 40 / 100))*5)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}Stack: {Math.round((((15 + 2 * (currentLevel- 1)))+(bonus.attack * 40 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}Full: {Math.round((((15 + 2 * (currentLevel- 1)))+(bonus.attack * 40 / 100))* (1 - mod.defPhysRed)*5)}
          </p>

          <h5 className="stat--ad">Bonus AD at full stacks: {Math.round(22+ (204 / 14 * (currentLevel -1)))}</h5>

    
          <p>
            Attacks and damaging abilities cause enemies to bleed, dealing between <abbr title="15 + 1.5 x level" className="stat--ad">15 - 36 (+30% AD)  physical damage</abbr> over 5 seconds. Can stack up to 5 times. <br />
            Upon reaching full stacks, Darius gains <b>Noxian Might</b> for 5 seconds, gaining <abbr title="22-226 based on level" className="stat--ad">{Math.round(22+ (204 / 14 * (currentLevel -1)))} Attack Damage</abbr> and applying full stacks of Hemorrhage instead of 1. <br />
            Deals 150% damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DECIMATE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{35} / 
            {' '}{35} / 
            {' '}{35} / 
            {' '}{35} 
          </h5>

          <h5 className="stat--ad">
           Inner Circle damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((14)+(atk.attack * 35 / 100)))} / 
            {' '}{Math.round(((28)+(atk.attack * 40 / 100)))} / 
            {' '}{Math.round(((42)+(atk.attack * 45 / 100)))} / 
            {' '}{Math.round(((56)+(atk.attack * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((14)+(atk.attack * 35 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((28)+(atk.attack * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((42)+(atk.attack * 45 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((56)+(atk.attack * 50 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--ad">
            Outer circle damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.attack * 100 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 115 / 100)))} / 
            {' '}{Math.round(((120)+(atk.attack * 130 / 100)))} / 
            {' '}{Math.round(((160)+(atk.attack * 145 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 115 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(atk.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(atk.attack * 145 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Swings his axe after a delay, dealing <span className="stat--ad">14 / 28 / 42 / 56 (+35% / 40% / 45% / 50% AD) physical damage</span>. <br />
          Hitting enemies with the blade of the axe deals <span className="stat--ad">40 / 80 / 120 / 160 (+100% / 115% / 130% / 145% AD)</span>, heals Darius for <span className="stat--hp">15% of his missing Health</span>  for each champion or large monster hit <span className="stat--hp">(max 45%)</span> and applies <b>Hemorrhage</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> CRIPPLING STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 130 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 140 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 150 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 160 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 130 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 140 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 150 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 160 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Empowers his next attack for 8 seconds to deal an additional <span className="stat--ad">30% / 40% / 50% / 60% AD physical damage</span> and slow the target by <span className="stat--moveSpeed">90%</span> for 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> APPREHEND
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
            {' '}{45} / 
            {' '}{45} / 
            {' '}{45} / 
            {' '}{45} 
          </h5>
    
          <p>
            <b>PASSIVE:</b>  Gains <span className="stat--ad">15% / 22% / 29% / 36% Armor Penetration.</span> <br />
            <b>ACTIVE:</b> Pulls in enemies in front of him, slowing them by <span className="stat--moveSpeed">40%</span> for 1.5 seconds.
          </p>

          <p>
            Toggle armor Pen active bonus:
            <button onClick={changeNumber}>Change ability level</button> Current ability level: <b className="stat--armor">{abilLevel}</b> 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> NOXIAN GUILLOTINE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{0}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Minimum: 
            {' '}{Math.round(((100)+(atk.attack * 75 / 100)))} / 
            {' '}{Math.round(((200)+(atk.attack * 75 / 100)))} / 
            {' '}{Math.round(((300)+(atk.attack * 75 / 100)))}
          </p>

          <p className="stat--ad">Maximum: 
            {' '}{Math.round(((100)+(atk.attack * 75 / 100))*2)} / 
            {' '}{Math.round(((200)+(atk.attack * 75 / 100))*2)} / 
            {' '}{Math.round(((300)+(atk.attack * 75 / 100))*2)}   
          </p>

    
          <p>
            Leaps to execute a champion. Deals <span className="stat--critChance">100 / 200 / 300 <span className="stat--ad">(+75% AD)</span> true damage</span> , increased by 20% per Hemorrhage stack, and applies Hemorrhage. <br />
            Killing the target with Noxian Guillotine refreshes its cooldown, mana cost, and grants Noxian Might for 5 seconds and causes nearby minions and monsters to flee for 1.5 seconds.
          </p>

          <p>
            When casting Noxian Guillotine and the target dies, moves out of range, becomes untargetable, or activates Zhonya’s Hourglass or Guardian Angel, the mana cost will be refunded and go on a 5s cooldown.
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