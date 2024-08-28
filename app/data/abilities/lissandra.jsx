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
      damage: {
        base: 90,
        growth: 20 * currentLevel,
        modifier: atk.ap * 40 /100,
      }
    };

    const q = {
      cooldown: {
        base: 7,
        growth: -1
      },
      cost: {
        base: 55,
        growth: 0
      },
      damage: {
        base: 70,
        growth: 40,
        modifier: (atk.ap * 70 / 100)
      },
    };

    const w = {
      cooldown: {
        base: 10,
        growth: -1
      },
      cost: {
        base: 40,
        growth: 0
      },
      damage: {
        base: 55,
        growth: 45,
        modifier: (atk.ap * 55 / 100)
      },
    };

    const e = {
      cooldown: {
        base: 20,
        growth: -3
      },
      cost: {
        base: 85,
        growth: 0
      },
      damage: {
        base: 50,
        growth: 45,
        modifier: (atk.ap * 40 / 100)
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
      damage: {
        base: 150,
        growth: 100,
        modifier: (atk.ap * 75 / 100)
      },
      healing: {
        base: 100,
        growth: 50,
        modifier: (atk.ap * 40 / 100)
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
        raw: passive.damage.base + passive.damage.growth + passive.damage.modifier,
        mitigated: (passive.damage.base + passive.damage.growth + passive.damage.modifier) * (1 - mod.defMagRed)
       },

       text: {
        damage: <span className="stat--ap">110 (+20 per level) (+40% AP) magic damage</span>
       }
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
            1: (q.damage.base + q.damage.modifier) * (1 - mod.defMagRed),
            2: (q.damage.base + q.damage.modifier + q.damage.growth) * (1 - mod.defMagRed),
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 - mod.defMagRed),
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * (1 - mod.defMagRed)
          }
        },

        text: {
          damage: <span className="stat--ap">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+70% AP) Magic damage</span>,
          slow: <span className="stat--moveSpeed"> 20/25/30/35% for 1 second</span>
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
          raw: {
            1: w.damage.base + w.damage.modifier,
            2: w.damage.base + w.damage.modifier + w.damage.growth,
            3: w.damage.base + w.damage.modifier + w.damage.growth * 2,
            4: w.damage.base + w.damage.modifier + w.damage.growth * 3
          },

          mitigated: {
            1: (w.damage.base + w.damage.modifier) * (1 - mod.defMagRed),
            2: (w.damage.base + w.damage.modifier + w.damage.growth) * (1 - mod.defMagRed),
            3: (w.damage.base + w.damage.modifier + w.damage.growth * 2) * (1 - mod.defMagRed),
            4: (w.damage.base + w.damage.modifier + w.damage.growth * 3) * (1 - mod.defMagRed)
          }
        },

        text: {
          damage: <span className="stat--ap">{w.damage.base} / {w.damage.base + w.damage.growth} / {w.damage.base + w.damage.growth * 2} / {w.damage.base + w.damage.growth * 3} (+55% AP) Magic damage</span>,
          root: <span className="stat--moveSpeed">1.25/1.35/1.45/1.55 seconds</span>
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
          1: e.cost.base,
          2: e.cost.base + e.cost.growth,
          3: e.cost.base + e.cost.growth * 2,
          4: e.cost.base + e.cost.growth * 3,
        },

        damage: {
          raw: {
            1: e.damage.base + e.damage.modifier,
            2: e.damage.base + e.damage.modifier + e.damage.growth,
            3: e.damage.base + e.damage.modifier + e.damage.growth * 2,
            4: e.damage.base + e.damage.modifier + e.damage.growth * 3
          },

          mitigated: {
            1: (e.damage.base + e.damage.modifier) * (1 - mod.defMagRed),
            2: (e.damage.base + e.damage.modifier + e.damage.growth) * (1 - mod.defMagRed),
            3: (e.damage.base + e.damage.modifier + e.damage.growth * 2) * (1 - mod.defMagRed),
            4: (e.damage.base + e.damage.modifier + e.damage.growth * 3) * (1 - mod.defMagRed)
          }
        },

        text: {          
          damage: <span className="stat--ap">{e.damage.base} / {e.damage.base + e.damage.growth} / {e.damage.base + e.damage.growth * 2} / {e.damage.base + e.damage.growth * 3} (+40% AP) Magic damage</span>
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
          2: r.cost.base + r.cost.growth,
          3: r.cost.base + r.cost.growth * 2
        },

        damage: {
          raw: {
            1: r.damage.base + r.damage.modifier,
            2: r.damage.base + r.damage.modifier + r.damage.growth,
            3: r.damage.base + r.damage.modifier + r.damage.growth * 2
          },

          mitigated: {
            1: (r.damage.base + r.damage.modifier) * (1 - mod.defMagRed),
            2: (r.damage.base + r.damage.modifier + r.damage.growth) * (1 - mod.defMagRed),
            3: (r.damage.base + r.damage.modifier + r.damage.growth * 2) * (1 - mod.defMagRed)
          }
        },

        healing: {
          1: r.healing.base + r.healing.modifier,
          2: r.healing.base + r.healing.modifier + r.healing.growth,
          3: r.healing.base + r.healing.modifier + r.healing.growth * 2
        },

        text: {
          // for magic damage
          damage: <span className="stat--ap">{r.damage.base} / {r.damage.base + r.damage.growth} / {r.damage.base + r.damage.growth * 2} / {r.damage.base + r.damage.growth * 3} (+75% AP) Magic damage</span>,         
          healing: <span className="stat--hp">{r.healing.base} / {r.healing.base + r.healing.growth} / {r.healing.base + r.healing.growth * 2} / {r.healing.base + r.healing.growth * 3} (+40% AP) Health</span>,
        }
      },
           
    }
  }, [atk, def, bonus, currentLevel]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> ICEBORN SUBJUGATION
          </h4>

          <h5 className="stat--ap">Damage (pre / post-mitigation):</h5>

          <p className="stat--ap">
            {' '}{Math.round(calculations.p.damage.raw)} / 
            {' '}{Math.round(calculations.p.damage.mitigated)}
          </p>

          <p>
            When an enemy champion dies near Lissandra, they become a <b>Frozen Thrall</b> that seeks out living enemies.
          </p>

          <p>
            <b>Frozen Thralls</b> <span className="stat--moveSpeed">slow</span> nearby enemies by <span className="stat--moveSpeed">25%</span> and shatter after 4 seconds dealing {calculations.p.text.damage}
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> ICE SHARD
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
            Throws a spear of ice that shatters when it hits an enemy, dealing {calculations.q.text.damage} and slowing the target by {calculations.q.text.slow}.
          </p>

          <p>
            Enemies behind the target take the same damage and are also slowed. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> RING OF FROST
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
          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(calculations.w.damage.raw[1])} /
            {' '}{Math.round(calculations.w.damage.raw[2])} /
            {' '}{Math.round(calculations.w.damage.raw[3])} /
            {' '}{Math.round(calculations.w.damage.raw[4])}
          </p>
          <p className="stat--ap">post-mitigation: 
            {' '}{Math.round(calculations.w.damage.mitigated[1])} /
            {' '}{Math.round(calculations.w.damage.mitigated[2])} /
            {' '}{Math.round(calculations.w.damage.mitigated[3])} /
            {' '}{Math.round(calculations.w.damage.mitigated[4])}
          </p>
    
          <br />
          <p>
            Creates an ice field areound herself, <span className="stat--moveSpeed">rooting </span> enemies for {calculations.w.text.root} and dealing {calculations.w.text.damage}
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> GLACIAL PATH
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

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(calculations.e.damage.raw[1])} /
            {' '}{Math.round(calculations.e.damage.raw[2])} /
            {' '}{Math.round(calculations.e.damage.raw[3])} /
            {' '}{Math.round(calculations.e.damage.raw[4])}
          </p>
          <p className="stat--ap">post-mitigation: 
            {' '}{Math.round(calculations.e.damage.mitigated[1])} /
            {' '}{Math.round(calculations.e.damage.mitigated[2])} /
            {' '}{Math.round(calculations.e.damage.mitigated[3])} /
            {' '}{Math.round(calculations.e.damage.mitigated[4])}
          </p>
    
          <br />
          <p>
            <b>First cast:</b> Sends forth an ice claw that deals {calculations.e.text.damage} when it hits enemies in it's path. Can be recast while the Ice Claw is moving.
          </p>

          <p>
            <b>Second cast:</b> Lissandra teleports to the ice claw, which then disappears.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FROZEN TOMB
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

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(calculations.r.damage.raw[1])} /
            {' '}{Math.round(calculations.r.damage.raw[2])} /
            {' '}{Math.round(calculations.r.damage.raw[3])}
          </p>
          <p className="stat--ap">post-mitigation: 
            {' '}{Math.round(calculations.r.damage.mitigated[1])} /
            {' '}{Math.round(calculations.r.damage.mitigated[2])} /
            {' '}{Math.round(calculations.r.damage.mitigated[3])}
          </p>

          <h5 className="stat--hp">Healing</h5>

          <p className="stat--hp">
            {' '}{Math.round(calculations.r.healing[1])} - {Math.round(calculations.r.healing[1]*2)}/
            {' '}{Math.round(calculations.r.healing[2])} - {Math.round(calculations.r.healing[2]*2)}/
            {' '}{Math.round(calculations.r.healing[3])} - {Math.round(calculations.r.healing[3]*2)}
          </p>
    
          <br />
          <p>
            Summons dark ice on enemy champion or herself. Dark Ice emanates from the target for 3 seconds dealing {calculations.r.text.damage} and <span className="stat--moveSpeed">slowing enemies it touches for 30%</span>.
          </p>

          <p>
            <b>Cast on enemies:</b> Encases an enemy champion in dark ice <b>stunning</b> them for 1.5 seconds.
          </p>

          <p>
            <b>Self-cast:</b> Encases herself in dark ice, entering <b>stasis</b> for 2.5 seconds and restoring {calculations.r.text.healing}, increased by 0-100% based on <span className="stat--hp">missing health</span>. Maximum healing applies at <span className="stat--hp">30% and lower HP</span>.
          </p>

          <p>
            When auto-aiming, self-casts automatically.
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