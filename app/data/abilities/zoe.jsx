import { useEffect, useState } from "react";

export default function zoe({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  
  const [qDamage, setQdamage] = useState(3)

  useEffect(() => {
    let totalDamage = 3;

    for (let level = 2; level <= currentLevel; level += 1) {
      if (level >= 2 && level <= 4) {
        totalDamage += 2;
      } else if (level >= 5 && level <= 8) {
        totalDamage += 3;
      } else if (level >= 9 && level <= 12) {
        totalDamage += 4;
      } else if (level >= 13 && level <= 15) {
        totalDamage += 5;
      }
    }

    setQdamage(totalDamage);
  }, [currentLevel]);
  

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MORE SPARKLES!
          </h4>
    
          <p>
           After using an Ability, Zoe's next Attack deals an additional  <abbr title="16 + 8 per Level +20% AP" className="stat--ap">{Math.round(8 + (8 * currentLevel) + (atk.ap * 20 / 100))} magic damage</abbr>.
          </p>

          <p>
            More Sparkles! deals damage instantly, and deals 50% damage to structures.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PADDLE STAR!
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ap">
            Minimal Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 60 / 100)+(qDamage)))} / 
            {' '}{Math.round(((75)+(atk.ap * 60 / 100)+(qDamage)))} / 
            {' '}{Math.round(((115)+(atk.ap * 60 / 100)+(qDamage)))} / 
            {' '}{Math.round(((155)+(atk.ap * 60 / 100)+(qDamage)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 60 / 100)+(qDamage)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(atk.ap * 60 / 100)+(qDamage))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(atk.ap * 60 / 100)+(qDamage))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((155)+(atk.ap * 60 / 100)+(qDamage))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ap">
            Maximum Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 60 / 100)+(qDamage)) * 2.5)} / 
            {' '}{Math.round(((75)+(atk.ap * 60 / 100)+(qDamage)) * 2.5)} / 
            {' '}{Math.round(((115)+(atk.ap * 60 / 100)+(qDamage)) * 2.5)} / 
            {' '}{Math.round(((155)+(atk.ap * 60 / 100)+(qDamage)) * 2.5)}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 60 / 100)+(qDamage)) * (1 - mod.defMagRed) * 2.5)} / 
            {' '}{Math.round(((75)+(atk.ap * 60 / 100)+(qDamage))* (1 - mod.defMagRed) * 2.5)} / 
            {' '}{Math.round(((115)+(atk.ap * 60 / 100)+(qDamage))* (1 - mod.defMagRed) * 2.5)} / 
            {' '}{Math.round(((155)+(atk.ap * 60 / 100)+(qDamage))* (1 - mod.defMagRed) * 2.5)}          
          </p>
    
          <br />
          <p>
           Zoe fires a star that deals increasing damage the further it travels to the first enemy hit dealing <span className="stat--ap">35 / 75 / 115 / 155 <abbr title="3 + 2 / 3 / 4 / 5, number grows each 4 levels" className="stat--critChance">(+{qDamage} damage)</abbr> (+60% AP) magic damage</span> and grows to deal <span className="stat--ap">150% bonus damage</span> based on the distance travelled.
          </p>

          <p>
            Zoe can recast this Ability to redirect the missile to a new position near Zoe.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SPELL THIEF
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(0.3)}
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}1 spell shard
          </h5>

          <h5 className="stat--ap">
            Missile damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((25)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((35)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((45)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((55)+(atk.ap * 15 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((25)+(atk.ap * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((35)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((45)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((55)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            <b>Passive:</b> Enemies drop spell shards when casting a Spell or using a Boot Enchantment. Specific minions also drop a spell shards when Zoe, or a nearby ally, kills them. Zoe can pick up this shard to cast that ability once.
          </p>

          <p>
            <b>Passive:</b>  When Zoe casts this Ability or any Spell, she gains <span className="stat--moveSpeed">25 / 30 / 35 / 40% Movement Speed</span> for 2s, and tosses 3 missiles at the target she Attacked most recently. These missiles deal <span className="stat--ap">25 / 35 / 45 / 55 (+15% AP) magic damage</span> each
          </p>

          <p>
            <b>Active:</b> Cast the Ability from a spell shard Zoe has picked up.
          </p>

          <p>
            Spell shards last on the ground for 20 seconds.
            Each missile can apply <b className="stat--ap">More Sparkles!</b> 
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> LEEPY TROUBLE BUBBLE
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
            {' '}{80}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((95)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((205)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((95)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((205)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--vamp">
           Max wake up Damage:
          </h5>

          <p className="stat--vamp">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((95)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((205)+(atk.ap * 50 / 100)))}
          </p>

         
    
          <br />
          <p>
            Zoe dropkick a bubble that deals <span className="stat--ap">40 / 95 / 150 / 205 (+50% AP) magic damage</span>, lingering as a trap if it doesn't hit anything. The <b>bubble's</b> range is increased when flying over terrain
          </p>

          <p>
            After a delay, the victim falls Asleep for 2 seconds. Attacks and Ability hits wake them up, dealing 200% bonus true damage up to <span className="stat--vamp">40 / 95 / 150 / 205 (+50% AP) true damage</span>
          </p>

          <p>
            Before the target falls Asleep, they are Drowsy, becoming increasingly <span className="stat--moveSpeed">slowed up to 15 / 20 / 25 / 30%</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> PORTAL JUMP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>
    
          <br />
          <p>
            Zoe teleports to a nearby position for 1 second. Afterwards, she teleports back. Zoe can use Abilities and attack, but can't move during this time.
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