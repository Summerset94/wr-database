import { useMemo } from "react";

export default function mordekaiser({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const calculations = useMemo(() => {

    const passive = {      
      damageAA: {
        base: atk.attack * 40/100
      },

      damageCloak: {
        base: 5,
        growth: 7/14 * (currentLevel - 1),
        basePercent: def.health * 1 /100,
        growthPercent: (def.health * 4 / 100)/14 * (currentLevel - 1)
      }
    };

    const q = {
      cooldown: {
        base: 7,
        growth: -1
      },     
      damage: {
        base: 70 + 4 + (86/14 * (currentLevel - 1)),
        growth: 25,
        modifier: (atk.ap * 60 / 100),
        bonus: {
          base: 45/100,
          growth: 5/100
        }
      },
    };

    const w = {
      cooldown: {
        base: 11,
        growth: -1
      },

      shield : {
        min: atk.health * 5 / 100,
        max: atk.health * 30 / 100
      }
    };

    const e = {
      cooldown: {
        base: 16,
        growth: -2
      },

      damage: {
        base: 70,
        growth: 20,
        modifier: (atk.ap * 55 / 100)
      },
    };

    const r = {
      cooldown: {
        base: 90,
        growth: -10
      },

      stolenStat: 8/100
    };

    return {
      p: {
        damageAA: {
          raw: passive.damageAA.base,

          mitigated: passive.damageAA.base * (1 - mod.defMagRed)
        },

        damageCloak: {
          raw: (passive.damageCloak.base + passive.damageCloak.basePercent + passive.damageCloak.growth + passive.damageCloak.growthPercent),
          mitigated: (passive.damageCloak.base + passive.damageCloak.basePercent + passive.damageCloak.growth + passive.damageCloak.growthPercent) * (1 - mod.defMagRed)
        }
      },

      q: {
        cooldown: {
          1: q.cooldown.base * (mod.atkcdr),
          2: (q.cooldown.base + q.cooldown.growth) * (mod.atkcdr),
          3: (q.cooldown.base + q.cooldown.growth * 2) * (mod.atkcdr),
          4: (q.cooldown.base + q.cooldown.growth * 3) * (mod.atkcdr)
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

        damageEnhanced: {
          raw: {
            1: (q.damage.base + q.damage.modifier) * (1 + q.damage.bonus.base),
            2: (q.damage.base + q.damage.modifier + q.damage.growth) * (1 + q.damage.bonus.base + q.damage.bonus.growth),
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 + q.damage.bonus.base + q.damage.bonus.growth *2),
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * (1 + q.damage.bonus.base + q.damage.bonus.growth * 3)
          },

          mitigated: {
            1: ((q.damage.base + q.damage.modifier) * (1 - mod.defMagRed)) * (1 + q.damage.bonus.base),
            2: ((q.damage.base + q.damage.modifier + q.damage.growth) * (1 - mod.defMagRed)) * (1 + q.damage.bonus.base + q.damage.bonus.growth),
            3: ((q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 - mod.defMagRed)) * (1 + q.damage.bonus.base + q.damage.bonus.growth * 2),
            4: ((q.damage.base + q.damage.modifier + q.damage.growth * 3) * (1 - mod.defMagRed)) * ( 1 + q.damage.bonus.base + q.damage.bonus.growth * 3)
          }
        },

        text: {          
          damage: <span className="stat--ap">{Math.round(q.damage.base)} / {Math.round(q.damage.base + q.damage.growth)} / {Math.round(q.damage.base + q.damage.growth * 2)} / {Math.round(q.damage.base + q.damage.growth * 3)} (base damage grows with level) (+60% AP) Magic damage</span>
        }
      },

      w: {
        cooldown: {
          1: w.cooldown.base * (mod.atkcdr),
          2: (w.cooldown.base + w.cooldown.growth) * (mod.atkcdr),
          3: (w.cooldown.base + w.cooldown.growth * 2) * (mod.atkcdr),
          4: (w.cooldown.base + w.cooldown.growth * 3) * (mod.atkcdr)
        },

        shield: {
          min: w.shield.min,
          max: w.shield.max
        }
      },

      e: {
        cooldown: {
          1: e.cooldown.base * (mod.atkcdr),
          2: (e.cooldown.base + e.cooldown.growth) * (mod.atkcdr),
          3: (e.cooldown.base + e.cooldown.growth * 2) * (mod.atkcdr),
          4: (e.cooldown.base + e.cooldown.growth * 3) * (mod.atkcdr)
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
          damage: <span className="stat--ap">{e.damage.base} / {e.damage.base + e.damage.growth} / {e.damage.base + e.damage.growth * 2} / {e.damage.base + e.damage.growth * 3} (+55% AP) Magic damage</span>
        }
      },

      r: {
        cooldown: {
          1: r.cooldown.base * (mod.atkcdr),
          2: (r.cooldown.base + r.cooldown.growth) * (mod.atkcdr),
          3: (r.cooldown.base + r.cooldown.growth * 2) * (mod.atkcdr),
          4: (r.cooldown.base + r.cooldown.growth * 3) * (mod.atkcdr)
        },

        text: {
          stolenStats: 
            <ul>
              <li className="stat--ap">{Math.round(def.ap * r.stolenStat)} AP</li>
              <li className="stat--ad">{Math.round(def.attack * r.stolenStat)} AD</li>
              <li className="stat--as">{(def.as * r.stolenStat).toFixed(3)} Attack Speed</li>
              <li className="stat--armor">{Math.round(def.armor * r.stolenStat)} Armor</li>
              <li className="stat--magres">{Math.round(def.magres * r.stolenStat)} Magic Resistance</li>
              <li className="stat--hp">{Math.round(def.health * r.stolenStat)} Health</li>
            </ul>
        }
      },
           
    }
  }, [atk, def, bonus, currentLevel]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DARKNESS RISE
          </h4>
          <h5 className="stat--ap">bonus AA damage (pre / post-mitigation)</h5>
          <p className="stat--ap">
            {' '}{Math.round(calculations.p.damageAA.raw)} /
            {' '}{Math.round(calculations.p.damageAA.mitigated)}
          </p>

          <h5 className="stat--ap">Negative energy field damage (pre / post-mitigation)</h5>
          <p className="stat--ap">
            {' '}{Math.round(calculations.p.damageCloak.raw)} /
            {' '}{Math.round(calculations.p.damageCloak.mitigated)}
          </p>
    
          <p>
            Gains <span className="stat--magres">1% (+ 2% each 4 levels) Magic Penetration</span>. Attacks deal <span className="stat--ap">40% magic damage</span>.
          </p>

          <p>
            When Mordekaiser gets a takedown, or his basic ability / attack hit enemy champion / large monster, he receives a stack of <b>Darkness Rise</b> for 5 seconds. At 3 stacks he cloacks himself in a negative energy field.
          </p>

          <p>
            The negative energy field deals damage equal to <span className="stat--ap">5 - 12 (based on level) <span className="stat--hp">(+1% - 5% (based on level) of tarhet's max HP)</span> magic damage</span> and grants Mordekaiser <span className="stat--moveSpeed">3% - 9% (based on level) Movement Speed</span> for 5 seconds.
          </p>

          <p>
            Takedowns and basic ability or attack hits against enemy champions or large monsters refresh the negative energy field's duration.
          </p>

          <p>
            Darkness Rises deals 24-100 (based on level) maximum damage to monsters per second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> OBLITERATE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.q.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[4]).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">Damage</h5>
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

          <h5 className="stat--ap">Enhanced damage</h5>
          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(calculations.q.damageEnhanced.raw[1])} /
            {' '}{Math.round(calculations.q.damageEnhanced.raw[2])} /
            {' '}{Math.round(calculations.q.damageEnhanced.raw[3])} /
            {' '}{Math.round(calculations.q.damageEnhanced.raw[4])}
          </p>
          <p className="stat--ap">post-mitigation: 
            {' '}{Math.round(calculations.q.damageEnhanced.mitigated[1])} /
            {' '}{Math.round(calculations.q.damageEnhanced.mitigated[2])} /
            {' '}{Math.round(calculations.q.damageEnhanced.mitigated[3])} /
            {' '}{Math.round(calculations.q.damageEnhanced.mitigated[4])}
          </p>
    
          <br />
          <p>
            Smashes the ground with <b>Nightfall</b> to deal {calculations.q.text.damage}.
          </p>

          <p>
            Damage increases by <b>45/50/55/60%</b> when the ability hits one enemy.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> INDESTRUCTIBLE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.w.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown[4]).toFixed(1)} 
          </h5>

          <h5 className="stat--armor">Shield:</h5>
          <p className="stat--armor">
          Minumum: {Math.round(calculations.w.shield.min)}, maximum: {Math.round(calculations.w.shield.max)}
          </p>  
    
          <br />
          <p>
            <b>Passive:</b> stores <b>35%</b> of the damage he deals and <b>7%</b> of the damage received (<b>25%</b> dealt/received against non-champions)
          </p>

          <p>
            <b>Active:</b> Converts stored damage into a <b className="stat--hp">shield</b> that lasts for 4 seconds. Recasting <b>Indestructible</b> restores <span className="stat--hp">35% of the remaining shield as Health</span>.
          </p>

          <p>
            Minimum shield: <span className="stat--hp">5% of Maximum HP</span>
          </p>
          <p>
            Maximum shield: <span className="stat--hp">30% of Maximum HP</span>
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> DEATH'S GRASP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.e.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[4]).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">Damage</h5>
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
            Puts the enemy towards him, dealing {calculations.e.text.damage} and <span className="stat--movespeed">slowing them by 30%</span> for 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> REALM OF DEATH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.r.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.r.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.r.cooldown[3]).toFixed(1)}
          </h5>

          <h5>Stolen stats (current target):</h5>

          {calculations.r.text.stolenStats}
                
          <br />
          <p>
            Banishes an enemy champion with him for 7 seconds.
          </p>

          <p>During this period:</p>

          <ul>
            <li>Steals 8% of the target's core stats;</li>
            <li>if Mordekaiser takes down the target while in Realm of death, he keeps the stats until the target respawns;</li>
            <li>If he doesn't, stolen stats are returned once the ability ends</li>
          </ul>
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