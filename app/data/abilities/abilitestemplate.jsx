import { useMemo } from "react";

export default function blank({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const calculations = useMemo(() => {
    // delete this and TEMPLATE in return statement when component is ready
    const TEMPLATE = {
      cooldown: {
        base: 0,
        growth: 0
      },
      cost: {
        base: 0,
        growth: 0
      },
      damage: {
        base: 0,
        growth: 0,
        modifier: (atk.ap | atk.attack * 0 / 100)
      },
      healing: {
        base: 0,
        growth: 0,
        modifier: (atk.ap | atk.attack * 0 / 100)
      },
      shield: {
        base: 0,
        growth: 0,
        modifier: (atk.ap | atk.attack * 0 / 100)
      }
    }

    const passive = {      
      
    };

    const q = {
      
    };

    const w = {
      
    };

    const e = {
      
    };

    const r = {
      
    };

    return {
      TEMPLATE: {
        cooldown: {
          1: TEMPLATE.cooldown.base * (mod.atkcdr),
          2: (TEMPLATE.cooldown.base + TEMPLATE.cooldown.growth) * (mod.atkcdr),
          3: (TEMPLATE.cooldown.base + TEMPLATE.cooldown.growth * 2) * (mod.atkcdr),
          4: (TEMPLATE.cooldown.base + TEMPLATE.cooldown.growth * 3) * (mod.atkcdr)
        },

        cost: {
          1: TEMPLATE.cost.base,
          2: TEMPLATE.cost.base + TEMPLATE.cost.growth,
          3: TEMPLATE.cost.base + TEMPLATE.cost.growth * 2,
          4: TEMPLATE.cost.base + TEMPLATE.cost.growth * 3,
        },

        damage: {
          raw: {
            1: TEMPLATE.damage.base + TEMPLATE.damage.modifier,
            2: TEMPLATE.damage.base + TEMPLATE.damage.modifier + TEMPLATE.damage.growth,
            3: TEMPLATE.damage.base + TEMPLATE.damage.modifier + TEMPLATE.damage.growth * 2,
            4: TEMPLATE.damage.base + TEMPLATE.damage.modifier + TEMPLATE.damage.growth * 3
          },

          mitigated: {
            1: (TEMPLATE.damage.base + TEMPLATE.damage.modifier) * (1 - mod.defMagRed),
            2: (TEMPLATE.damage.base + TEMPLATE.damage.modifier + TEMPLATE.damage.growth) * (1 - mod.defMagRed),
            3: (TEMPLATE.damage.base + TEMPLATE.damage.modifier + TEMPLATE.damage.growth * 2) * (1 - mod.defMagRed),
            4: (TEMPLATE.damage.base + TEMPLATE.damage.modifier + TEMPLATE.damage.growth * 3) * (1 - mod.defMagRed)
          }
        },

        healing: {
          1: TEMPLATE.healing.base + TEMPLATE.healing.modifier,
          2: TEMPLATE.healing.base + TEMPLATE.healing.modifier + TEMPLATE.healing.growth,
          3: TEMPLATE.healing.base + TEMPLATE.healing.modifier + TEMPLATE.healing.growth * 2,
          4: TEMPLATE.healing.base + TEMPLATE.healing.modifier + TEMPLATE.healing.growth * 3
        },

        shield: {
          1: TEMPLATE.shield.base + TEMPLATE.shield.modifier,
          2: TEMPLATE.shield.base + TEMPLATE.shield.modifier + TEMPLATE.shield.growth,
          3: TEMPLATE.shield.base + TEMPLATE.shield.modifier + TEMPLATE.shield.growth * 2,
          4: TEMPLATE.shield.base + TEMPLATE.shield.modifier + TEMPLATE.shield.growth * 3
        },

        text: {
          // for magic damage
          damage: <span className="stat--ap">{TEMPLATE.damage.base} / {TEMPLATE.damage.base + TEMPLATE.damage.growth} / {TEMPLATE.damage.base + TEMPLATE.damage.growth * 2} / {TEMPLATE.damage.base + TEMPLATE.damage.growth * 3} (+X% AP) Magic damage</span>,
          // for physical damage
          damage: <span className="stat--ad">{TEMPLATE.damage.base} / {TEMPLATE.damage.base + TEMPLATE.damage.growth} / {TEMPLATE.damage.base + TEMPLATE.damage.growth * 2} / {TEMPLATE.damage.base + TEMPLATE.damage.growth * 3} (+X% AP) Physical damage</span>,
          healing: <span className="stat--hp">{TEMPLATE.healing.base} / {TEMPLATE.healing.base + TEMPLATE.healing.growth} / {TEMPLATE.healing.base + TEMPLATE.healing.growth * 2} / {TEMPLATE.healing.base + TEMPLATE.healing.growth * 3} (INSERT MODIFIERS) Health</span>,
          shield: <span className="stat--hp">{TEMPLATE.shield.base} / {TEMPLATE.shield.base + TEMPLATE.shield.growth} / {TEMPLATE.shield.base + TEMPLATE.shield.growth * 2} / {TEMPLATE.shield.base + TEMPLATE.shield.growth * 3} (INSERT MODIFIERS) Health</span>,
        }
      },

      p: {
        
      },

      q: {
        
      },

      w: {

      },

      e: {

      },

      r: {

      },
           
    }
  }, [atk, def, bonus, currentLevel]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> 
          </h4>
    
          <p>
            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.q.cooldown[1]).toFixed(1)} / 
{/* Uncomment if cooldown changes           
            {' '}{(calculations.q.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[4]).toFixed(1)}  */}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.q.cost[1]} / 
{/*             
            {' '}{calculations.q.cost[2]} / 
            {' '}{calculations.q.cost[3]} / 
            {' '}{calculations.q.cost[4]}  */}
          </h5>
    
          <br />
          <p>
            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.w.cooldown[1]).toFixed(1)} / 
{/* Uncomment if cooldown changes           
            {' '}{(calculations.w.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown[4]).toFixed(1)}  */}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.w.cost[1]} / 
{/*             
            {' '}{calculations.w.cost[2]} / 
            {' '}{calculations.w.cost[3]} / 
            {' '}{calculations.w.cost[4]}  */}
          </h5>
    
          <br />
          <p>
            
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
            {' '}{(calculations.e.cooldown[1]).toFixed(1)} / 
{/* Uncomment if cooldown changes           
            {' '}{(calculations.e.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[4]).toFixed(1)}  */}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.e.cost[1]} / 
{/*             
            {' '}{calculations.e.cost[2]} / 
            {' '}{calculations.e.cost[3]} / 
            {' '}{calculations.e.cost[4]}  */}
          </h5>
    
          <br />
          <p>
            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.r.cooldown[1]).toFixed(1)} / 
{/* Uncomment if cooldown changes           
            {' '}{(calculations.r.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.r.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.r.cooldown[4]).toFixed(1)}  */}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.r.cost[1]} / 
{/*             
            {' '}{calculations.r.cost[2]} / 
            {' '}{calculations.r.cost[3]} / 
            {' '}{calculations.r.cost[4]}  */}
          </h5>
    
          <br />
          <p>
            
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