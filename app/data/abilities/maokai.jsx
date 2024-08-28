import { useMemo } from "react";

export default function maokai({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const calculations = useMemo(() => {    

    const passive = {      
    //  2-30 +4-12%
      healing: {
        base: 2 + atk.health * 4/100,
        growth: (28 + atk.health * 8/100)/14 * (currentLevel - 1)
      }
    };

    const q = {
      cooldown: {
        base: 8,
        growth: -1
      },

      cost: {
        base: 60,
        growth: 0
      },

      damage: {
        base: 60 + def.health *2/100,
        growth: 55 + def.health *1/100,
        modifier: atk.ap * 50/100
      }
    };

    const w = {
      cooldown: {
        base: 13,
        growth: -1
      },
      cost: {
        base: 60,
        growth: 0
      },
      damage: {
        base: 60,
        growth: 35,
        modifier: (atk.ap * 50 / 100)
      },
    };

    const e = {
      cooldown: {
        base: 14,
        growth: 0
      },
      cost: {
        base: 55,
        growth: 0
      },
      damage: {
        base: 60,
        growth: 30,
        modifier: atk.ap * 25/100 + bonus.health * 6/100
      },

      slow: {
        base: 30,
        modifier: bonus.health * 1.5 / 100 + atk.ap *1/100
      }
    };

    const r = {
      cooldown: {
        base: 80,
        growth: -5
      },
      cost: {
        base: 100,
        growth: 0
      },
      damage: {
        base: 175,
        growth: 75,
        modifier: (atk.ap * 65 / 100)
      },

      haste: {
        base: atk.moveSpeed * 40 / 100,
        growth: atk.moveSpeed * 10 / 100
      }
    };

    return {
     
      p: {
        healing: passive.healing.base + passive.healing.growth,

        text: {
          healing: <span className="stat--hp">2 - 30 (+4% - 12% max HP, based on level) health</span>
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
          
          damage: <span className="stat--ap">({q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3}) 60 + <span className="stat--hp">2% of target Max HP</span> + (55 +  <span className="stat--hp">1% of  target's max hp</span> per ability level)  (+50% AP) Magic damage</span>,
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
          // for magic damage
          damage: <span className="stat--ap">{w.damage.base} / {w.damage.base + w.damage.growth} / {w.damage.base + w.damage.growth * 2} / {w.damage.base + w.damage.growth * 3} (+50% AP) Magic damage</span>,
          root: <span className="stat--moveSpeed">0.8 / 0.95 / 1.1 / 1.25 (+0.15 seconds per ability level)</span>
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
        
        slow: e.slow.base + e.slow.modifier,

        text: {         
          damage: <span className="stat--ap">{e.damage.base} / {e.damage.base + e.damage.growth} / {e.damage.base + e.damage.growth * 2} / {e.damage.base + e.damage.growth * 3} (+25% AP) Magic damage</span>,
          slow: <span className="stat--moveSpeed">slowing by 30% <span className="stat--hp">(+1.5% per 100 bonus HP)</span> <span className="stat--ap">(+1% per 100 AP)</span> </span>
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

        haste: {
          1: r.haste.base,
          2: r.haste.base + r.haste.growth,
          3: r.haste.base + r.haste.growth * 2
        },
        
        text: {
          damage: <span className="stat--ap">{r.damage.base} / {r.damage.base + r.damage.growth} / {r.damage.base + r.damage.growth * 2} (+65% AP) Magic damage</span>,
          haste: <span className="stat--moveSpeed">40% / 50% / 60% Movement Speed</span>,
        }
      },
           
    }
  }, [atk, def, bonus, currentLevel]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SAP MAGIC
          </h4>

          <h5 className="stat--hp">Healing: {Math.round(calculations.p.healing)}</h5>
    
          <p>
            Every <b>{24 - Math.floor(currentLevel/2)}</b> seconds (24 - 1 seconds per 2 levels, unaffected by ability haste), Maokai's next basic attack restores {calculations.p.text.healing}.
          </p>

          <p>
            Using an ability or being hit by an nenemy champion's ability restores this ability cooldown by <b>3 seconds</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BRAMBLE SMASH
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
          <p className="stat--ap">Pre mitigation:
          {' '}{Math.round(calculations.q.damage.raw["1"])} / 
          {' '}{Math.round(calculations.q.damage.raw["2"])} / 
          {' '}{Math.round(calculations.q.damage.raw["3"])} / 
          {' '}{Math.round(calculations.q.damage.raw["4"])}
          </p>

          <p className="stat--ap">Post mitigation:
          {' '}{Math.round(calculations.q.damage.mitigated["1"])} / 
          {' '}{Math.round(calculations.q.damage.mitigated["2"])} / 
          {' '}{Math.round(calculations.q.damage.mitigated["3"])} / 
          {' '}{Math.round(calculations.q.damage.mitigated["4"])}
          </p>
    
          <br />
          <p>
            Smashes fist into the ground, unleashing a shockwave that deals {calculations.q.text.damage} and slows the target briefly for 0.25 seconds. Nearby enemies are also <span className="stat--moveSpeed">knocked back</span>.
          </p>

          <p>
            deals 120 bonus damage to monsters
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> TWISTED ADVANCE
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
          <p className="stat--ap">Pre mitigation:
          {' '}{Math.round(calculations.w.damage.raw["1"])} / 
          {' '}{Math.round(calculations.w.damage.raw["2"])} / 
          {' '}{Math.round(calculations.w.damage.raw["3"])} / 
          {' '}{Math.round(calculations.w.damage.raw["4"])}
          </p>

          <p className="stat--ap">Post mitigation:
          {' '}{Math.round(calculations.w.damage.mitigated["1"])} / 
          {' '}{Math.round(calculations.w.damage.mitigated["2"])} / 
          {' '}{Math.round(calculations.w.damage.mitigated["3"])} / 
          {' '}{Math.round(calculations.w.damage.mitigated["4"])}
          </p>
    
          <br />
          <p>
            Transforms into a living mass of roots, becoming untargetable and dashing to an enemy champion target.
          </p>

          <p>
            Upon arrival <span className="stat--moveSpeed">roots</span> them for {calculations.w.text.root} and deals {calculations.w.text.damage}.
          </p>

          <p>
            Deals 180% damage to monsters.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SAPLING TOSS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.e.cooldown[1]).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.e.cost[1]}
          </h5>

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ap">Pre mitigation:
          {' '}{Math.round(calculations.e.damage.raw["1"])} / 
          {' '}{Math.round(calculations.e.damage.raw["2"])} / 
          {' '}{Math.round(calculations.e.damage.raw["3"])} / 
          {' '}{Math.round(calculations.e.damage.raw["4"])}
          </p>

          <p className="stat--ap">Post mitigation:
          {' '}{Math.round(calculations.e.damage.mitigated["1"])} / 
          {' '}{Math.round(calculations.e.damage.mitigated["2"])} / 
          {' '}{Math.round(calculations.e.damage.mitigated["3"])} / 
          {' '}{Math.round(calculations.e.damage.mitigated["4"])}
          </p>

          <h5 className="stat--ap">Enhanced damage:</h5>
          <p className="stat--ap">Pre mitigation:
          {' '}{Math.round(calculations.e.damage.raw["1"]*2)} / 
          {' '}{Math.round(calculations.e.damage.raw["2"]*2)} / 
          {' '}{Math.round(calculations.e.damage.raw["3"]*2)} / 
          {' '}{Math.round(calculations.e.damage.raw["4"]*2)}
          </p>

          <p className="stat--ap">Post mitigation:
          {' '}{Math.round(calculations.e.damage.mitigated["1"]*2)} / 
          {' '}{Math.round(calculations.e.damage.mitigated["2"]*2)} / 
          {' '}{Math.round(calculations.e.damage.mitigated["3"]*2)} / 
          {' '}{Math.round(calculations.e.damage.mitigated["4"]*2)}
          </p>

          <h5 className="stat--movespeed">Enhanced slow: {calculations.e.slow}%</h5>

    
          <br />
          <p>
            Fling a sapling that stands on watch where it lands for 20 seconds.
          </p>

          <p>
            Saplings chase nearby enemies and on arrival detonate dealing {calculations.e.text.damage} and <span className="stat--moveSpeed">slow nearby enemies by 30% for 2 seconds</span>.
          </p>

          <p>
            If sapling is has landed in bush, it lives for 35 seconds and cause a larger explosion dealing <span className="stat--ap">200% damage</span> and slowing for {calculations.e.text.slow} for 3 seconds.
          </p>

          <p>
            Saplings deal 130% damage to minions regardless or whether they laded in bush or not.
          </p>

          <p>
            Deal maximum 300 damage to monsters
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> NATURE'S GRASP
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

          <h5 className="stat--ap">Damage:</h5>
          <p className="stat--ap">Pre mitigation:
          {' '}{Math.round(calculations.r.damage.raw["1"])} / 
          {' '}{Math.round(calculations.r.damage.raw["2"])} / 
          {' '}{Math.round(calculations.r.damage.raw["3"])}
          </p>

          <p className="stat--ap">Post mitigation:
          {' '}{Math.round(calculations.r.damage.mitigated["1"])} / 
          {' '}{Math.round(calculations.r.damage.mitigated["2"])} / 
          {' '}{Math.round(calculations.r.damage.mitigated["3"])}
          </p>

          <h5 className="stat--moveSpeed">Movement Speed bonus</h5>

          <p className="stat--moveSpeed">
          {' '}{Math.round(calculations.r.haste["1"])} / 
          {' '}{Math.round(calculations.r.haste["2"])} / 
          {' '}{Math.round(calculations.r.haste["3"])}
          </p>
    
          <br />
          <p>
            Summons a slow-moving colossal wave of brambles dealing {calculations.r.text.damage} and <span className="stat--moveSpeed">rooting</span> enemies hit for <b>0.8 seconds</b>. Root duration increases with distance traveled by brambles.
          </p>

          <p>
            Hitting enemy champion with this ability gives Maokai {calculations.r.text.haste} which decays over 2 seconds. Hitting a new target refreshes this duration.
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