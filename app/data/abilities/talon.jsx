
import { useMemo } from "react";

export default function talon({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const calculations = useMemo(() => {
    const passive = {      
      damage: {
        base: 80,
        growth: 200 / 14 * Number(currentLevel - 1),
        modifier: bonus.attack * 2.1
      }
    };

    const q = {
      cooldown: {
        base: 6,
        growth: -0.5
      },

      cost: {
        base: 40,
        growth: 0
      },

      damage: {
        base: 75,
        growth: 25,
        modifier: bonus.attack * 100 / 100,
        critModifier: (atk.critMultiplier - 0.25)        
      },

      healing: {
        base: 35,
        growth: 35 / 14 * Number(currentLevel - 1)
      }
    };

    const w = {
      cooldown: {
        base: 9,
        growth: -0.5
      },

      cost: {
        base: 50,
        growth: 5
      },

      damage: {
        cast: {
          base: 35,
          growth: 10,
          modifier: (bonus.attack * 45 / 100)
        },

        recast: {
          base: 60,
          growth: 40,
          modifier: (bonus.attack * 90 / 100)
        }
      },
      
      slow: {
        base: 40,
        growth: 5
      }
    };

    const e = {
      cooldown: {
        base: 135,
        growth: -25
      }
    };

    const r = {
      cooldown: {
        base: 60,
        growth: -10
      },

      cost: {
        base: 100,
        growth: 0
      },

      moveSpeed: {
        base: 40,
        growth: 15
      },

      damage: {
        base: 80,
        growth: 40,
        modifier: bonus.attack * 90 / 100
      }
    };

    return {

      p: {
        damage: {
          raw: {
            1: passive.damage.base + passive.damage.growth + passive.damage.modifier,            
          },

          mitigated: {
            1: (passive.damage.base + passive.damage.growth + passive.damage.modifier) * (1 - mod.defPhysRed),            
          }
        },

        text: {
          damage: <span className="stat--ad">{passive.damage.base} (+{passive.damage.growth} per level) (+200% BONUS Attack Damage) Physical damage</span>,
        }
      },

      q: {
        damage: {
          long: {
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
          close: {
            raw: {
              1: (q.damage.base * q.damage.critModifier + q.damage.modifier * q.damage.critModifier) ,
              2: (q.damage.base + q.damage.modifier + q.damage.growth) * q.damage.critModifier,
              3: (q.damage.base + q.damage.modifier + q.damage.growth * 2 ) * q.damage.critModifier,
              4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * q.damage.critModifier
            },
  
            mitigated: {
              1: (q.damage.base + q.damage.modifier) * (q.damage.critModifier) * (1 - mod.defPhysRed),
              2: (q.damage.base + q.damage.modifier + q.damage.growth) * (q.damage.critModifier) * (1 - mod.defPhysRed),
              3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (q.damage.critModifier) * (1 - mod.defPhysRed),
              4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * (q.damage.critModifier) * (1 - mod.defPhysRed)
            }
          }
        },

        cost: {
          1: q.cost.base
        },

        cooldown: {
          1: q.cooldown.base * (mod.atkcdr),
          2: (q.cooldown.base + q.cooldown.growth) * (mod.atkcdr),
          3: (q.cooldown.base + q.cooldown.growth * 2) * (mod.atkcdr),
          4: (q.cooldown.base + q.cooldown.growth * 3) * (mod.atkcdr)
        },

        healing: q.healing.base + q.healing.growth,

        text: {
          damage: <span className="stat--ad">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+100% BONUS Attack Damage) Physical damage</span>,

          healing: <span className="stat--hp">{Math.round(q.healing.base + q.healing.growth)} Health</span>
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
          1: w.cost.base,
          2: w.cost.base + w.cost.growth,
          3: w.cost.base + w.cost.growth * 2,
          4: w.cost.base + w.cost.growth * 3,
        },

        damage: {
          cast: {
            raw: {
              1: w.damage.cast.base + w.damage.cast.modifier,
              2: w.damage.cast.base + w.damage.cast.modifier + w.damage.cast.growth,
              3: w.damage.cast.base + w.damage.cast.modifier + w.damage.cast.growth * 2,
              4: w.damage.cast.base + w.damage.cast.modifier + w.damage.cast.growth * 3
            },
  
            mitigated: {
              1: (w.damage.cast.base + w.damage.cast.modifier) * (1 - mod.defPhysRed),
              2: (w.damage.cast.base + w.damage.cast.modifier + w.damage.cast.growth) * (1 - mod.defPhysRed),
              3: (w.damage.cast.base + w.damage.cast.modifier + w.damage.cast.growth * 2) * (1 - mod.defPhysRed),
              4: (w.damage.cast.base + w.damage.cast.modifier + w.damage.cast.growth * 3) * (1 - mod.defPhysRed)
            }
          },

          recast: {
            raw: {
              1: w.damage.recast.base + w.damage.recast.modifier,
              2: w.damage.recast.base + w.damage.recast.modifier + w.damage.recast.growth,
              3: w.damage.recast.base + w.damage.recast.modifier + w.damage.recast.growth * 2,
              4: w.damage.recast.base + w.damage.recast.modifier + w.damage.recast.growth * 3
            },
  
            mitigated: {
              1: (w.damage.recast.base + w.damage.recast.modifier) * (1 - mod.defPhysRed),
              2: (w.damage.recast.base + w.damage.recast.modifier + w.damage.recast.growth) * (1 - mod.defPhysRed),
              3: (w.damage.recast.base + w.damage.recast.modifier + w.damage.recast.growth * 2) * (1 - mod.defPhysRed),
              4: (w.damage.recast.base + w.damage.recast.modifier + w.damage.recast.growth * 3) * (1 - mod.defPhysRed)
            }
          }
        },

        text: {
          damage: {
            cast: <span className="stat--ad">{w.damage.cast.base} / {w.damage.cast.base + w.damage.cast.growth} / {w.damage.cast.base + w.damage.cast.growth * 2} / {w.damage.cast.base + w.damage.cast.growth * 3} (+45% bonus AD) Physical damage</span>,
            recast: <span className="stat--ad">{w.damage.recast.base} / {w.damage.recast.base + w.damage.recast.growth} / {w.damage.recast.base + w.damage.recast.growth * 2} / {w.damage.recast.base + w.damage.recast.growth * 3} (+90% bonus AD) Physical damage</span>,
          },
          slow: <span className="stat--moveSpeed">Slowing them for {w.slow.base}% / {w.slow.base + w.slow.growth}% / {w.slow.base + w.slow.growth * 2}% / {w.slow.base + w.slow.growth * 3}%  for 1 second</span>
        }
      },

      e: {
        cooldown: {
          1: e.cooldown.base * (mod.atkcdr),
          2: (e.cooldown.base + e.cooldown.growth) * (mod.atkcdr),
          3: (e.cooldown.base + e.cooldown.growth * 2) * (mod.atkcdr),
          4: (e.cooldown.base + e.cooldown.growth * 3) * (mod.atkcdr)
        },

        text:{
          cooldown: <span className="stat--armor">{e.cooldown.base} / {e.cooldown.base + e.cooldown.growth} / {e.cooldown.base + e.cooldown.growth * 2} / {e.cooldown.base + e.cooldown.growth * 3} Seconds</span>,
        }
      },

      r: {
        cooldown: {
          1: r.cooldown.base * (mod.atkcdr),
          2: (r.cooldown.base + r.cooldown.growth) * (mod.atkcdr),
          3: (r.cooldown.base + r.cooldown.growth * 2) * (mod.atkcdr)
        },

        cost: {
          1: q.cost.base,
        },

        damage: {
          raw: {
            1: q.damage.base + q.damage.modifier,
            2: q.damage.base + q.damage.modifier + q.damage.growth,
            3: q.damage.base + q.damage.modifier + q.damage.growth * 2
          },

          mitigated: {
            1: (q.damage.base + q.damage.modifier) * (1 - mod.defPhysRed),
            2: (q.damage.base + q.damage.modifier + q.damage.growth) * (1 - mod.defPhysRed),
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 - mod.defPhysRed)
          }
        },

        text: {
          damage: <span className="stat--ad">{r.damage.base} / {r.damage.base + r.damage.growth} / {r.damage.base + r.damage.growth * 2} (+80% Bonus AD) Physical</span>,
          haste: <span className="stat--moveSpeed"> {r.moveSpeed.base}% / {r.moveSpeed.base + r.moveSpeed.growth}% / {r.moveSpeed.base + r.moveSpeed.growth * 2}% bonus Movement Speed for 2.5 seconds</span>
        }
      },
           
    }
  }, [atk, def, bonus, currentLevel]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> BLADE'S END
          </h4>

          <h5 className="stat--ad">DAMAGE:</h5>

          <p className="stat--ad">pre / post-mitigation:
            {' '}{Math.round(calculations.p.damage.raw[1])} / {Math.round(calculations.p.damage.mitigated[1])}
          </p>
    
          <p>
            Talon's abilities apply a stack of <span className="stat--armor">Wound</span> to enemy Champions and Large Monsters hit for 6 Seconds, stacking up to 3 times. Damaging the same target again resets the <span className="stat--armor">Wound</span>'s duration.
          </p>

          <p>
            When Talon attacks a target with 3 stacks of <span className="stat--armor">Wound</span>, all stacks are consumed and targets starts to <span className="stat--vamp">bleed</span> for {calculations.p.damage.text} over 2 seconds.
          </p>

          <p>
            Monsters receive 90% damage.
          </p>

          <p>
           During <span className="stat--vamp">bleeding</span> the target can't get new <span className="stat--armor">Wound</span> stacks. 
          </p>

          <p>
            If an enemy champion dies during <span className="stat--vamp">bleeding</span>, Talon gets bonus <span className="stat--moveSpeed">Movement Speed</span> that decays over 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> NOXIAN DIPLOMACY
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

          <h5 className="stat--hp">Healing: </h5>
          <p className="stat--hp">{Math.round(calculations.q.healing)}</p>

          <h5 className="stat--ad">Damage: </h5>

          <p className="stat--ad">
            Pre-mitigation:
            {' '}{Math.round(calculations.q.damage.long.raw[1])} /
            {' '}{Math.round(calculations.q.damage.long.raw[2])} /
            {' '}{Math.round(calculations.q.damage.long.raw[3])} /
            {' '}{Math.round(calculations.q.damage.long.raw[4])}
          </p>

          <p className="stat--ad">
            Post-mitigation:
            {' '}{Math.round(calculations.q.damage.long.mitigated[1])} /
            {' '}{Math.round(calculations.q.damage.long.mitigated[2])} /
            {' '}{Math.round(calculations.q.damage.long.mitigated[3])} /
            {' '}{Math.round(calculations.q.damage.long.mitigated[4])}
          </p>

          <h5 className="stat--critChance">Close cast damage: </h5>

          <p className="stat--critChance">
            Pre-mitigation:
            {' '}{Math.round(calculations.q.damage.close.raw[1])} /
            {' '}{Math.round(calculations.q.damage.close.raw[2])} /
            {' '}{Math.round(calculations.q.damage.close.raw[3])} /
            {' '}{Math.round(calculations.q.damage.close.raw[4])}
          </p>

          <p className="stat--critChance">
            Post-mitigation:
            {' '}{Math.round(calculations.q.damage.close.mitigated[1])} /
            {' '}{Math.round(calculations.q.damage.close.mitigated[2])} /
            {' '}{Math.round(calculations.q.damage.close.mitigated[3])} /
            {' '}{Math.round(calculations.q.damage.close.mitigated[4])}
          </p>
    
          <br />
          <p>
            <b>Long Range:</b> Dashes forward dealing {calculations.q.text.damage}.
          </p>

          <p>
            <b>Close Range:</b> Stabs the target, dealing <span className="stat--critChance">Critical Strike</span> (+50% damage base, +80% if <span className="armor">Infinity Edge</span> is equipped).
          </p>

          <p>
            If this ability kills target, Talon restores {calculations.q.text.healing} and the ability Cooldown is reduced by 50%.
          </p>

          <p>
            The higher the <span className="stat--armor">Armor pen</span> is, the faster the dash and cast speed of this ability will be.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> RAKE
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
            {' '}{calculations.w.cost[1]} /             
            {' '}{calculations.w.cost[2]} / 
            {' '}{calculations.w.cost[3]} / 
            {' '}{calculations.w.cost[4]} 
          </h5>

          <h5 className="stat--ad">Damage initial:</h5>
          <p className="stat--ad">
            Pre-mitigation:
              {' '}{Math.round(calculations.w.damage.cast.raw[1])} /
              {' '}{Math.round(calculations.w.damage.cast.raw[2])} /
              {' '}{Math.round(calculations.w.damage.cast.raw[3])} /
              {' '}{Math.round(calculations.w.damage.cast.raw[4])}
          </p>

          <p className="stat--ad">
            Post-mitigation:
              {' '}{Math.round(calculations.w.damage.cast.mitigated[1])} /
              {' '}{Math.round(calculations.w.damage.cast.mitigated[2])} /
              {' '}{Math.round(calculations.w.damage.cast.mitigated[3])} /
              {' '}{Math.round(calculations.w.damage.cast.mitigated[4])}
          </p>

          <h5 className="stat--ad">Damage on way back:</h5>
          <p className="stat--ad">
            Pre-mitigation:
              {' '}{Math.round(calculations.w.damage.recast.raw[1])} /
              {' '}{Math.round(calculations.w.damage.recast.raw[2])} /
              {' '}{Math.round(calculations.w.damage.recast.raw[3])} /
              {' '}{Math.round(calculations.w.damage.recast.raw[4])}
          </p>

          <p className="stat--ad">
            Post-mitigation:
              {' '}{Math.round(calculations.w.damage.recast.mitigated[1])} /
              {' '}{Math.round(calculations.w.damage.recast.mitigated[2])} /
              {' '}{Math.round(calculations.w.damage.recast.mitigated[3])} /
              {' '}{Math.round(calculations.w.damage.recast.mitigated[4])}
          </p>
    
          <br />
          <p>
            Tosses daggers in a cone at the target area, dealing {calculations.w.text.damage.cast} to the enemies hit.
          </p>

          <p>
            Upon reaching maximum range, the daggers linger for 0.75 seconds before returning, dealing {calculations.w.text.damage.recast} to the enemies hit along the way and {calculations.w.text.slow}
          </p>

          <p>
            Damage to monsters: 70%
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> ASSASIN'S PATH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.e.cooldown[1]).toFixed(1)} /            
            {' '}{(calculations.e.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[4]).toFixed(1)} 
          </h5>           
    
          <br />
          <p>
            Vaults over the terrain or structure closest to him.
          </p>

          <p>
            Talon cannot Vault over the same terrain for {calculations.e.text.cooldown} (Cooldown decreases with Ability Haste).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> Shadow Assault
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

          <h5 className="stat--ad">Damage:</h5>
          <p className="stat--ad">
            Pre-mitigation:
            {' '}{Math.round(calculations.r.damage.raw[1])} /
            {' '}{Math.round(calculations.r.damage.raw[2])} /
            {' '}{Math.round(calculations.r.damage.raw[3])}
          </p>

          <p className="stat--ad">
            Post-mitigation:
            {' '}{Math.round(calculations.r.damage.mitigated[1])} /
            {' '}{Math.round(calculations.r.damage.mitigated[2])} /
            {' '}{Math.round(calculations.r.damage.mitigated[3])}
          </p>
    
          <br />
          <p>
            <b>First cast:</b> Flings a ring of blades around himself dealing {calculations.r.text.damage} to nearby enemies and gaining <span className="stat--armor">invisibility</span> and {calculations.r.text.haste}. You can recast abiliti <b>after 1 second</b> or it will be recast automatically after 2.5 seconds or exiting stealth.
          </p>

          <p>
            <b>Recast:</b> Exits <span className="stat--armor">invisibility</span> and recals the blades dealing {calculations.r.text.damage} to enemies hit along the way.
          </p>

          <p>
            Using <b>Attacks</b> or <span className="stat--armor">Noxian Diplomacy</span> to exit <span className="stat--armor">invisibility</span> causes the blades to converge towards the targeted enemy instead.
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