import { useMemo } from "react";

export default function milio({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
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
      damage: {
        base: 15 + Math.round(2.5*currentLevel),
        growth: 0,
        modifier: (atk.ap * 20 / 100)
      },
    };

    const q = {
      cooldown: {
        base: 10,
        growth: 0
      },
      cost: {
        base: 50,
        growth: 0
      },
      damage: {
        base: 80,
        growth: 80,
        modifier: (atk.ap * 80 / 100)
      },
    };

    const w = {
      cooldown: {
        base: 20,
        growth: -2
      },
      cost: {
        base: 90,
        growth: 0
      },     
      healing: {
        base: 80,
        growth: 20,
        modifier: (atk.ap * 15 / 100)
      },
    };

    const e = {
      cooldown: {
        base: 16,
        growth: -1
      },
      cost: {
        base: 50,
        growth: 0
      },
      shield: {
        base: 60,
        growth: 40,
        modifier: (atk.ap * 30 / 100)
      }
    };

    const r = {
      cooldown: {
        base: 90,
        growth: -10
      },
      cost: {
        base: 100,
        growth: 0
      },
      healing: {
        base: 150,
        growth: 100,
        modifier: (atk.ap *50 / 100)
      },
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
        damage: {
          raw: {
            1: passive.damage.base + passive.damage.modifier
          },

          mitigated: {
            1: (passive.damage.base + passive.damage.modifier) * (1 - mod.defMagRed)
          }
        },
        text: {          
          damage: <span className="stat--ap">15 (+2.5 per level) (+20% AP) Magic damage</span>,
          
        }

      },

      q: {       
          cooldown: {
            1: q.cooldown.base * (mod.atkcdr)
          },
  
          cost: {
            1: q.cost.base
          },
  
          damage: {
            raw: {
              1: q.damage.base + q.damage.modifier,
              2: q.damage.base + q.damage.modifier + q.damage.growth,
              3: q.damage.base + q.damage.modifier + q.damage.growth * 2,
              4: q.damage.base + q.damage.modifier + q.damage.growth * 3
            },
  
            mitigated: {
              1: (q.damage.base + q.damage.modifier) * (1 - mod.defMagRed),
              2: (q.damage.base + q.damage.modifier + q.damage.growth) * (1 - mod.defMagRed),
              3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 - mod.defMagRed),
              4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * (1 - mod.defMagRed)
            }
          },

          text: {           
            damage: <span className="stat--ap">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+X% AP) Magic damage</span>,
            slow: <span className="stat--moveSpeed">40/45/50/55% (+5% AP)</span>
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
        healing: {
          1: w.healing.base + w.healing.modifier,
          2: w.healing.base + w.healing.modifier + w.healing.growth,
          3: w.healing.base + w.healing.modifier + w.healing.growth * 2,
          4: w.healing.base + w.healing.modifier + w.healing.growth * 3
        },
        text: {          
          healing: <span className="stat--hp">{w.healing.base} / {w.healing.base + w.healing.growth} / {w.healing.base + w.healing.growth * 2} / {w.healing.base + w.healing.growth * 3} (+15% AP) Health</span>,
          range: <b>9.5/13/16.5/20% Attack Range</b>
          
        }
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

        shield: {
          1: e.shield.base + e.shield.modifier,
          2: e.shield.base + e.shield.modifier + e.shield.growth,
          3: e.shield.base + e.shield.modifier + e.shield.growth * 2,
          4: e.shield.base + e.shield.modifier + e.shield.growth * 3
        },

        text: {
          shield: <span className="stat--armor">{e.shield.base} / {e.shield.base + e.shield.growth} / {e.shield.base + e.shield.growth * 2} / {e.shield.base + e.shield.growth * 3} (+30% AP) Health</span>,
          moveSpeed: <span className="stat--moveSpeed">12/15/18/21% bonus Movement Speed</span>
        }
      },

      r: {
        cooldown: {
          1: r.cooldown.base * (mod.atkcdr),
          2: (r.cooldown.base + r.cooldown.growth) * (mod.atkcdr),
          3: (r.cooldown.base + r.cooldown.growth * 2) * (mod.atkcdr)
        },

        cost: {
          1: r.cost.base,
        },

        healing: {
          1: r.healing.base + r.healing.modifier,
          2: r.healing.base + r.healing.modifier + r.healing.growth,
          3: r.healing.base + r.healing.modifier + r.healing.growth * 2
        },

        text: {          
          healing: <span className="stat--hp">{r.healing.base} / {r.healing.base + r.healing.growth} / {r.healing.base + r.healing.growth * 2} (+50% AP) Health</span>
        }
      },
           
    }
  }, [atk, def, bonus, currentLevel]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> FIRED UP!
          </h4>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(calculations.p.damage.raw[1])}
          </p>
          <p className="stat--ap">post-mitigation: 
            {' '}{Math.round(calculations.p.damage.mitigated[1])}
          </p>
    
          <p>
            When Milio's abilities touch allied champions their next basic attack deals additional <span className="stat--ap">magic damage</span> equal to <span className="stat--ad">15% of their Attack Damage</span> plus {calculations.p.text.damage} over 1.5 seconds
          </p>

          <p>
            Burn damage does not stack and rather refresh with repeated hits.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> ULTRA MEGA FIRE KICK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.q.cooldown[1]).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.q.cost[1]}
          </h5>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(calculations.q.damage.raw[1])} /
            {' '}{Math.round(calculations.q.damage.raw[2])} /
            {' '}{Math.round(calculations.q.damage.raw[3])} /
            {' '}{Math.round(calculations.q.damage.raw[4])}
          </p>
          <p className="stat--ap">post-mitigation: 
            {' '}{Math.round(calculations.q.damage.mitigated[1])} /
            {' '}{Math.round(calculations.q.damage.mitigated[2])} /
            {' '}{Math.round(calculations.q.damage.mitigated[3])} /
            {' '}{Math.round(calculations.q.damage.mitigated[4])}
          </p>
    
          <br />
          <p>
            Kicks a firebal, <b>knocking back</b> first enemy hit. The fireball then bounces past the target and explodes dealing dealing {calculations.q.text.damage} to nearby enemiess and slowing them by {calculations.q.text.slow}
          </p>

          <p>
            The fireball knocks minions and monsters farther back. Explosions caused by minionsand monsyers alos eetonate in a larger area
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> COZY CAMPFIRE
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

          <h5 className="stat--hp">Healing:</h5>
          <p className="stat--hp">
            {' '}{Math.round(calculations.w.healing[1])} /
            {' '}{Math.round(calculations.w.healing[2])} /
            {' '}{Math.round(calculations.w.healing[3])} /
            {' '}{Math.round(calculations.w.healing[4])}
          </p>         
    
          <br />
          <p>
            Ignites a buffing <b>oothing Fire</b> for himself or an allied champion for 6 seconds. While active, Milio casts <b>Fired Up! (P)</b> every 3 seconds.
          </p>

          <p>
            <b>Self-cast:</b> grants {calculations.w.text.range} and restores {calculations.w.text.healing} over time to nearby allied champions.
          </p>

          <p>
            <b>Cast on allied champions:</b> Forms a tether between himself and the target granting {calculations.w.text.range} and restoring {calculations.w.text.healing} over time to both champions. When <b>Warm Hugs (3)</b> or <b>Breath of Life (ULT)</b> is cast, Milio shares all ability effects with the target.
          </p>

          <p>
            <b>Recast:</b> Selects a new ally (inherits the remaining duration of initial cast).
          </p>

          <p>
            The tether between Milio and the allied champion has no range limit.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> WARM HUGS
          </h4>
    
          <h5>
          Cooldown (charge time): 
            {' '}{(calculations.e.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[4]).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.e.cost[1]}
          </h5>

          <h5 className="stat--armor">Shield:</h5>
          <p className="stat--armor">
            {' '}{Math.round(calculations.e.shield[1])} /
            {' '}{Math.round(calculations.e.shield[2])} /
            {' '}{Math.round(calculations.e.shield[3])} /
            {' '}{Math.round(calculations.e.shield[4])}
          </p>    
    
          <br />
          <p>
            Wraps himself or an allied champion in protective flames absorbing {calculations.e.text.shield} and granting {calculations.e.text.moveSpeed} for 2.5 seconds.
          </p>

          <p>
            The shield and movement speed are stackable
          </p>

          <p>
            Stores up to 2 charges of ability
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> BREATH OF LIFE
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

          
          <h5 className="stat--hp">Healing:</h5>
          <p className="stat--hp">
            {' '}{Math.round(calculations.r.healing[1])} /
            {' '}{Math.round(calculations.r.healing[2])} /
            {' '}{Math.round(calculations.r.healing[3])}
          </p>        
    
          <br />
          <p>
            Unleashes a wave of <b>Soothing Fire</b> around himself, removing <span className="stat--moveSpeed">disables and immobilizing effects</span> (does not remove knockback, knockup and airborne) from allied champions nearby and healing them for {calculations.r.text.healing}, and granting them <span className="stat--moveSpeed">65% Tenacity</span> for 3 seconds.
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