import { useMemo } from "react";

export default function kalista({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const calculations = useMemo(() => {
    const passive = {      
      
    };

    const q = {
      cooldown: {
        base: 8,
        growth: -1.5
      },
      cost: {
        base: 55,
        growth: 5
      },
      damage: {
        base: 50,
        growth: 60,
        modifier: atk.attack * 105 / 100
      },
    };

    const w = {
      cooldown: {
        base: 45,
        growth: -5
      },
      cost: {
        base: 30,
        growth: 0
      },
      damage: {
        base: def.health * 14 / 100,
        growth: def.health / 100,
        modifier: 0
      },
    };

    const e = {
      cooldown: {
        base: 10,
        growth: -1
      },
      cost: {
        base: 30,
        growth: 0
      },
      damage: {
        initial: {
          base: 15,
          growth: 15,
          modifier: atk.attack * 65 / 100
        },

        secondary: {
          base: 7,
          growth: 3 + (atk.attack * 2 / 100),
          modifier: atk.attack * 26 / 100
        }        
      },
    };

    const r = {
      cooldown: {
        base: 80,
        growth: -10
      },
      cost: {
        base: 100,
        growth: 0
      },
    };

    return {
      
      p: {
        
      },

      q: {
        cooldown: {
          1: q.cooldown.base * (mod.atkcdr),
          2: (q.cooldown.base + q.cooldown.growth) * (mod.atkcdr),
          3: (q.cooldown.base + q.cooldown.growth * 2) * (mod.atkcdr),
          4: (q.cooldown.base + q.cooldown.growth * 3) * (mod.atkcdr)
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
            2: q.damage.base + q.damage.modifier + q.damage.growth,
            3: q.damage.base + q.damage.modifier + q.damage.growth * 2,
            4: q.damage.base + q.damage.modifier + q.damage.growth * 3
          },

          mitigated: {
            1: (q.damage.base + q.damage.modifier) * (1 - mod.defPhysRed),
            2: (q.damage.base + q.damage.modifier + q.damage.growth) * (1 - mod.defPhysRed),
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 - mod.defPhysRed),
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * (1 - mod.defPhysRed)
          }
        },

        text: {
          damage: <span className="stat--ad">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+105% AD) Physical damage</span>
        }
      },

      w: {
        cooldown: {
          1: w.cooldown.base * (mod.atkcdr),
          2: (w.cooldown.base + w.cooldown.growth) * (mod.atkcdr),
          3: (w.cooldown.base + w.cooldown.growth * 2) * (mod.atkcdr),
          4: (w.cooldown.base + w.cooldown.growth * 3) * (mod.atkcdr)
        },

        cost: {
          1: w.cost.base
        },

        damage: {     
          mitigated: {
            1: (w.damage.base + w.damage.modifier) * (1 - mod.defMagRed),
            2: (w.damage.base + w.damage.modifier + w.damage.growth) * (1 - mod.defMagRed),
            3: (w.damage.base + w.damage.modifier + w.damage.growth * 2) * (1 - mod.defMagRed),
            4: (w.damage.base + w.damage.modifier + w.damage.growth * 3) * (1 - mod.defMagRed)
          }
        },
      },

      e: {
        cooldown: {
          1: e.cooldown.base * (mod.atkcdr),
          2: (e.cooldown.base + e.cooldown.growth) * (mod.atkcdr),
          3: (e.cooldown.base + e.cooldown.growth * 2) * (mod.atkcdr),
          4: (e.cooldown.base + e.cooldown.growth * 3) * (mod.atkcdr)
        },

        cost: {
          1: e.cost.base
        },

        damage: {
          initial: {
            raw: {
              1: e.damage.initial.base + e.damage.initial.modifier,
              2: e.damage.initial.base + e.damage.initial.modifier + e.damage.initial.growth,
              3: e.damage.initial.base + e.damage.initial.modifier + e.damage.initial.growth * 2,
              4: e.damage.initial.base + e.damage.initial.modifier + e.damage.initial.growth * 3
            },
  
            mitigated: {
              1: (e.damage.initial.base + e.damage.initial.modifier) * (1 - mod.defPhysRed),
              2: (e.damage.initial.base + e.damage.initial.modifier + e.damage.initial.growth) * (1 - mod.defPhysRed),
              3: (e.damage.initial.base + e.damage.initial.modifier + e.damage.initial.growth * 2) * (1 - mod.defPhysRed),
              4: (e.damage.initial.base + e.damage.initial.modifier + e.damage.initial.growth * 3) * (1 - mod.defPhysRed)
            }
          },

          secondary: {
            raw: {
              1: e.damage.secondary.base + e.damage.secondary.modifier,
              2: e.damage.secondary.base + e.damage.secondary.modifier + e.damage.secondary.growth,
              3: e.damage.secondary.base + e.damage.secondary.modifier + e.damage.secondary.growth * 2,
              4: e.damage.secondary.base + e.damage.secondary.modifier + e.damage.secondary.growth * 3
            },
  
            mitigated: {
              1: (e.damage.secondary.base + e.damage.secondary.modifier) * (1 - mod.defPhysRed),
              2: (e.damage.secondary.base + e.damage.secondary.modifier + e.damage.secondary.growth) * (1 - mod.defPhysRed),
              3: (e.damage.secondary.base + e.damage.secondary.modifier + e.damage.secondary.growth * 2) * (1 - mod.defPhysRed),
              4: (e.damage.secondary.base + e.damage.secondary.modifier + e.damage.secondary.growth * 3) * (1 - mod.defPhysRed)
            }
          }         
        },

        text: {
          damage: {
            initial: <span className="stat--ad">{e.damage.initial.base} / {e.damage.initial.base + e.damage.initial.growth} / {e.damage.initial.base + e.damage.initial.growth * 2} / {e.damage.initial.base + e.damage.initial.growth * 3} (+65% AD) Physical damage</span>,
            secondary: <span className="stat--ad">{Math.round(e.damage.secondary.base)} / {Math.round(e.damage.secondary.base + e.damage.secondary.growth)} / {Math.round(e.damage.secondary.base + e.damage.secondary.growth * 2)} / {Math.round(e.damage.secondary.base + e.damage.secondary.growth * 3)} (included +2% AD per ability level) (+24% AD) Physical damage</span>,
          }
        }
      },

      r: {
        cooldown: {
          1: r.cooldown.base * (mod.atkcdr),
          2: (r.cooldown.base + r.cooldown.growth) * (mod.atkcdr),
          3: (r.cooldown.base + r.cooldown.growth * 2) * (mod.atkcdr)
        },

        cost: {
          1: r.cost.base
        },
      },
           
    }
  }, [atk, def, bonus, currentLevel]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MARTIAL POISE
          </h4>
    
          <p>
            When Kalista winds up her attacks, moving the left joystick will cause her to hop in a selected direction after she throws he spear.
          </p>
          <p>
            When the game starts, Kalista can select an ally to become her <span className="stat--armor">Oathsworn</span>.
          </p>
          <p>
            Kalista <b>can't change</b> her Oathsworn
          </p>
          <p>
            Once Kalista launches her attacks (after wind up animation), they can't be cancelled.
          </p>
          <p>
            Dash speed and distance scale with boots tier.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PIERCE
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
            {' '}{calculations.q.cost[1]} / 
            
            {' '}{calculations.q.cost[2]} / 
            {' '}{calculations.q.cost[3]} / 
            {' '}{calculations.q.cost[4]} 
          </h5>

          <h5 className="stat--ad">Damage:</h5>
          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.q.damage.raw[1])} /
            {' '}{Math.round(calculations.q.damage.raw[2])} /
            {' '}{Math.round(calculations.q.damage.raw[3])} /
            {' '}{Math.round(calculations.q.damage.raw[4])}
          </p>
          <p className="stat--ad">post-mitigation: 
            {' '}{Math.round(calculations.q.damage.mitigated[1])} /
            {' '}{Math.round(calculations.q.damage.mitigated[2])} /
            {' '}{Math.round(calculations.q.damage.mitigated[3])} /
            {' '}{Math.round(calculations.q.damage.mitigated[4])}
          </p>
    
          <br />
          <p>
            Hurls a spear , dealing {calculations.q.text.damage} to the first target hit, if this kills the target, the spear flies onward, carrying the target's <span className="stat--armor">Rend (S3/E)</span> stacks to the next enemy hit.
          </p>
          <p>
            After casting this ability, Kalista can dash using <span className="stat--armor">Martial Poise (passive)</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SENTINEL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.w.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown[4]).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.w.cost[1]}
          </h5>

          <h5 className="stat--ap">Damage:</h5>          
          <p className="stat--ap">Current Target: 
            {' '}{Math.round(calculations.w.damage.mitigated[1])} /
            {' '}{Math.round(calculations.w.damage.mitigated[2])} /
            {' '}{Math.round(calculations.w.damage.mitigated[3])} /
            {' '}{Math.round(calculations.w.damage.mitigated[4])}
          </p>
    
          <br />
          <p>
            <b>Passive:</b> When Kalista's <span className="stat--armor">Oathsworn</span> is near her (they are thethered) and both hit the same target within 4s with basic attacks or <span className="stat--armor">Pierce (S1/Q)</span>, target receives <span className="stat--ap">14% (+1% per ability level)<span className="stat--hp">max Health</span> magic damage</span>. 10s cooldown per target.
          </p>

          <p>
            <b>Active:</b> Sends out a <span className="stat--armor">Soul Sentinel</span> to patrol an area. Upon spotting an enemy champion, the Sentinel follows and <span className="stat--misc">reveals</span> the target for 4s. Sentinels dissapear after patroling 3 laps.
          </p>

          <p>
            <b>Charge:</b> Kalista can store up to 2 charges of ability
          </p>
          <p>
            This ability's passive deals at least <span className="stat--ap">75</span> damage to minions and executes them if their <span className="stat--hp">health is below 125</span>.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> REND
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.e.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[4]).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.e.cost[1]}
          </h5>

          <h5 className="stat--ad">Damage initial:</h5>
          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.e.damage.initial.raw[1])} /
            {' '}{Math.round(calculations.e.damage.initial.raw[2])} /
            {' '}{Math.round(calculations.e.damage.initial.raw[3])} /
            {' '}{Math.round(calculations.e.damage.initial.raw[4])}
          </p>
          <p className="stat--ad">post-mitigation: 
            {' '}{Math.round(calculations.e.damage.initial.mitigated[1])} /
            {' '}{Math.round(calculations.e.damage.initial.mitigated[2])} /
            {' '}{Math.round(calculations.e.damage.initial.mitigated[3])} /
            {' '}{Math.round(calculations.e.damage.initial.mitigated[4])}
          </p>

          <h5 className="stat--ad">Bonus damage per spear:</h5>
          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.e.damage.secondary.raw[1])} /
            {' '}{Math.round(calculations.e.damage.secondary.raw[2])} /
            {' '}{Math.round(calculations.e.damage.secondary.raw[3])} /
            {' '}{Math.round(calculations.e.damage.secondary.raw[4])}
          </p>
          <p className="stat--ad">post-mitigation: 
            {' '}{Math.round(calculations.e.damage.secondary.mitigated[1])} /
            {' '}{Math.round(calculations.e.damage.secondary.mitigated[2])} /
            {' '}{Math.round(calculations.e.damage.secondary.mitigated[3])} /
            {' '}{Math.round(calculations.e.damage.secondary.mitigated[4])}
          </p>
    
          <br />
          <p>
            <b>Passive:</b> on hit, Kalista's spears stays in target for 4 seconds, applying a stack of <span className="stat--armor">Rend</span>, refreshing on subsequent hits.
          </p>
          <p>
            <b>Active:</b> Kalista reaps the spears from nearby enemies dealing {calculations.e.text.damage.initial} and {calculations.e.text.damage.secondary} per spear after the first. <span className="stat--moveSpeed">Slows enemies hit by 15% / 25% / 35% / 45%</span> for 2 seconds.
          </p>

          <p>
            If this ability kills at least one target, cooldown gets reset and Kalista refunds <span className="stat--mana">12 / 18 / 24 / 30 mana</span>.
          </p>

          <p>
            Deals 50% Damage to epic monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FATE'S CALL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.r.cooldown[1]).toFixed(1)} /
            {' '}{(calculations.r.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.r.cooldown[3]).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.r.cost[1]}
          </h5>
    
          <br />
          <p>
            Kalista puts her <span className="stat--armor">Oathsworn</span> into stasis and draws them to herself for up to 4 seconds.
          </p>

          <p>
            The <span className="stat--armor">Oathsworn</span> can launch themselves in a direction, knocking nearby enemies <span className="stat--misc">airborne</span> for 1 / 1.5 / 2 seconds upon hitting the first enemy hit. <span className="stat--armor">Oathsworn</span> then ricochets for a distance based on their max attack range.
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