import { useMemo } from "react";

export default function fizz({currentLevel, mod, bonus, atk, def, champ}) {

  const calculations = useMemo(() => {
    const q = {
      cooldown: {
        base: 8,
        growth: 1
      },
      cost: {
        base: 50,
        growth: 0
      },
      damage: {
        base: 20,
        growth: 20,
        modifier: (atk.ap * 50 / 100),
        modifierPhys: (atk.attack * 100/100)
      }
    }

    return {
      q: {
        cooldown: {
          1: q.cooldown.base * (mod.atkcdr),
          2: (q.cooldown.base - q.cooldown.growth) * (mod.atkcdr),
          3: (q.cooldown.base - q.cooldown.growth * 2) * (mod.atkcdr),
          4: (q.cooldown.base - q.cooldown.growth * 3) * (mod.atkcdr)
        },

        cost: {
          1: q.cost.base,
          2: q.cost.base + q.cost.growth,
          3: q.cost.base + q.cost.growth * 2,
          4: q.cost.base + q.cost.growth * 3,
        },

        damage: {
          raw: {
            1: q.damage.base + q.damage.modifier,
            2: q.damage.base + q.damage.modifier + q.damage.growth + q.damage.modifierPhys,
            3: q.damage.base + q.damage.modifier + q.damage.growth * 2+ q.damage.modifierPhys,
            4: q.damage.base + q.damage.modifier + q.damage.growth * 3+ q.damage.modifierPhys
          },

          mitigated: {
            1: (q.damage.base + q.damage.modifier) * (1 - mod.defMagRed) + (q.damage.modifierPhys) * (1 - mod.defPhysRed),
            2: (q.damage.base + q.damage.modifier + q.damage.growth) * (1 - mod.defMagRed) + (q.damage.modifierPhys) * (1 - mod.defPhysRed),
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 - mod.defMagRed) + (q.damage.modifierPhys) * (1 - mod.defPhysRed),
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * (1 - mod.defMagRed) + (q.damage.modifierPhys) * (1 - mod.defPhysRed)
          }
        },

        

        text: {          
          damage: <span className="stat--ap">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+50% AP) Magic damage <span className="stat--ad">+100% AD Physical damage</span></span>,         
        }
      }
    }
  }, [currentLevel, mod, bonus, atk])

  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SEASTONE TRIDENT
          </h4>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ad">Pre / post-mitigation:
          {' '}{Math.round(20 + (2 * currentLevel) + (atk.ap * 40 / 100))} /
          {' '}{Math.round((20 + (2 * currentLevel) + (atk.ap * 40 / 100))* (1 - mod.defMagRed))}
           </p>
    
          <p>
          Attacks deal an additional <abbr title="20 + 2 * Level" className="stat--ap">22-50 (+40% AP) magic damage</abbr> over 3 seconds. <br />
          Deals 90% damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> URCHIN STRIKE
          </h4>
    
          <h5>
          Cooldown: 
          {' '}{(calculations.q.cooldown[1]).toFixed(1)} /          
            {' '}{(calculations.q.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[4]).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.q.cost[1]}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.q.damage.raw[1])} / 
            {' '}{Math.round(calculations.q.damage.raw[2])} / 
            {' '}{Math.round(calculations.q.damage.raw[3])} / 
            {' '}{Math.round(calculations.q.damage.raw[4])}
          </p>

          <p className="stat--ad">Post-mitigation: 
          {' '}{Math.round(calculations.q.damage.mitigated[1])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[2])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[3])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[4])}      
          </p>
    
          <p>
           Dashes through target enemy, dealing {calculations.q.text.damage} and applying on-hit effects. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> RENDING WAVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{40} / 
            {' '}{50} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((75)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 45 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((125)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ap">
            Bonus on-hit damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((10)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((15)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((20)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((25)+(atk.ap * 35 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((10)+(atk.ap * 35 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((15)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((20)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((25)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Empowers the next attack to gush water around the target, dealing <span className="stat--ap">50 / 75 / 100 / 125 (+50% AP) magic damage</span> and applying <span className="stat--ap">Seastone Trident</span> to enemies hit. Additional attacks within 5 seconds deal <span className="stat--ap">10 / 15 / 20 / 25 (+35% AP) bonus magic damage</span>. <br />
          
          Killing a unit with the first attack reduces Rending Wave's cooldown to 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> PLAYFUL / TRICKSTER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{85} / 
            {' '}{90} / 
            {' '}{95} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((290)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((290)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Vaults to target location, becoming untargetable while balanced on the trident. After 1.2 seconds, Fizz hops down with a large splash that deals <span className="stat--ap">80 / 150 / 220 / 290 (+80% AP) magic damage</span>  and slows enemies hit by <span className="stat--moveSpeed">40% / 45% / 50% / 55% for 2 seconds</span>. <br />
          <b>Re-cast:</b> Hop down early towards a direction, but deal damage in a smaller splash that does not slow enemies.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CHUM THE WATERS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
           Mimimum damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}  
          </p>

          <h5 className="stat--ap">
           Maximum damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((300)+(atk.ap * 120 / 100)))} / 
            {' '}{Math.round(((400)+(atk.ap * 120 / 100)))} / 
            {' '}{Math.round(((500)+(atk.ap * 120 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((300)+(atk.ap * 120 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((400)+(atk.ap * 120 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((500)+(atk.ap * 120 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Launches a fish in taget direction that attaches to the first champion hit and reveals them. After 2 seconds, the fish attracts a shark that knocks up its target and knocks away enemies around them. The farther the fish travels, the larger the shark it will attract, dealing <span className="stat---ap"> 150 / 250 / 350 (+60% AP) to 300 / 400 / 500 (+120% AP) magic damage</span> and slowing enemies hit by <span className="stat--moveSpeed"> 40% to 80%</span> based on the size of the shark. <br />
          If the fish does not attach to a champion, it will flop on the ground and still attract a shark at its location.
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