import { useMemo, useState } from "react";

export default function aurelionsol({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  // tracker for stardust stacks
  const [stardust, setStardust] = useState(0)

  const updateStardust = (event) => {
    event.preventDefault();
    setStardust(oldStacks => parseInt(event.target.value))
  }

  const calculations = useMemo(() => {
    const q = {
      cooldown: {
        base: 3,
        growth: 0
      },
      cost: {
        base: 10,
        growth: 4
      },
      damage: {
        base: (Math.round(currentLevel/2)) + 11,
        growth: 3,
        modifier: (atk.ap * 12 / 100)
      },
      burst: {
        base: 55,
        growth: 10,
        modifier: (15+(5*Math.floor((currentLevel-1)/4))) +  (atk.ap * 35 / 100) + (def.health * (stardust * 3 / 100)/100)
      }
    };

    const w = {
      cost: {
        base: 80,
        growth: 5
      },
      cooldown: {
        base: 22,
        growth: 2
      }
    };

    const e = {
      cost: {
        base: 80,
        growth: 5
      },
      cooldown: {
        base: 12,
        growth: 0
      },
      damage: {
        base: 4,
        growth: 1.5,
        modifier: (atk.ap * 5 / 100)
      },
      execution: {
        treshold: (def.health * (5 + (stardust * 2.6 / 100))/100)
      }
    };

    const r = {
      cost: {
        base: 100,
        growth: 0
      },
      cooldown: {
        base: 85,
        growth: 5
      },

      damage: {
        star: {
          base: 150,
          growth: 100,
          modifier: (atk.ap * 65 / 100)
        },
        skies: {
          base: 187.5,
            growth: 125,
            modifier: (atk.ap * 65 / 100)
        },
        shockwave: {
          base: 150,
          growth: 100,
          modifier: (atk.ap * 65 / 100)
        }
      },

    };

    return {
      
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

        burst: {
          raw: {
            1: q.burst.base + q.burst.modifier,
            2: q.burst.base + q.burst.modifier + q.burst.growth,
            3: q.burst.base + q.burst.modifier + q.burst.growth * 2,
            4: q.burst.base + q.burst.modifier + q.burst.growth * 3
          },

          mitigated: {
            1: (q.burst.base + q.burst.modifier) * (1 - mod.defMagRed),
            2: (q.burst.base + q.burst.modifier + q.burst.growth) * (1 - mod.defMagRed),
            3: (q.burst.base + q.burst.modifier + q.burst.growth * 2) * (1 - mod.defMagRed),
            4: (q.burst.base + q.burst.modifier + q.burst.growth * 3) * (1 - mod.defMagRed)
          }
        },

        text: {
          
          damage: <span className="stat--ap">0.5 per champion Level +{q.damage.base - (Math.round(currentLevel/2))} / {q.damage.base + q.damage.growth - (Math.round(currentLevel/2))} / {q.damage.base + q.damage.growth * 2- (Math.round(currentLevel/2))} / {q.damage.base + q.damage.growth * 3- (Math.round(currentLevel/2))} (+12% AP) Magic damage</span>,
          burst: <span className="stat--ap">15/20/25/30 (at level 1/5/9/13) +45/55/65/75 (+35% AP) Magic damage <span className="stat--hp">(<span className="stat--armor">+3% of Stardust stacks</span>) of target's Magic Health</span></span>         
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

        text: {          
          moveSpeed: <span className="stat--moveSpeed">{Math.round(atk.moveSpeed + 300)} (300 + 100%) Movement Speed</span>,
          
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

        execution: {
          treshold: e.execution.treshold
        },

        text: {
          damage: <span className="stat--ap">{e.damage.base} / {e.damage.base + e.damage.growth} / {e.damage.base + e.damage.growth * 2} / {e.damage.base + e.damage.growth * 3} (+5% AP) Magic damage</span>,
          
          execution: <span className="stat--hp">5 (<span className="stat--armor">+2.6% Stardust stacks</span> )% of Max Health</span>,
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
          star: {
            raw: {
              1: r.damage.star.base + r.damage.star.modifier,
              2: r.damage.star.base + r.damage.star.modifier + r.damage.star.growth,
              3: r.damage.star.base + r.damage.star.modifier + r.damage.star.growth * 2,
            },
  
            mitigated: {
              1: (r.damage.star.base + r.damage.star.modifier) * (1 - mod.defMagRed),
              2: (r.damage.star.base + r.damage.star.modifier + r.damage.star.growth) * (1 - mod.defMagRed),
              3: (r.damage.star.base + r.damage.star.modifier + r.damage.star.growth * 2) * (1 - mod.defMagRed)
            }
          },

          skies: {
            raw: {
              1: r.damage.skies.base + r.damage.skies.modifier,
              2: r.damage.skies.base + r.damage.skies.modifier + r.damage.skies.growth,
              3: r.damage.skies.base + r.damage.skies.modifier + r.damage.skies.growth * 2,
            },
  
            mitigated: {
              1: (r.damage.skies.base + r.damage.skies.modifier) * (1 - mod.defMagRed),
              2: (r.damage.skies.base + r.damage.skies.modifier + r.damage.skies.growth) * (1 - mod.defMagRed),
              3: (r.damage.skies.base + r.damage.skies.modifier + r.damage.skies.growth * 2) * (1 - mod.defMagRed)
            }
          },
          
          shockwave: {
            raw: {
              1: r.damage.shockwave.base + r.damage.shockwave.modifier,
              2: r.damage.shockwave.base + r.damage.shockwave.modifier + r.damage.shockwave.growth,
              3: r.damage.shockwave.base + r.damage.shockwave.modifier + r.damage.shockwave.growth * 2,
            },
  
            mitigated: {
              1: (r.damage.shockwave.base + r.damage.shockwave.modifier) * (1 - mod.defMagRed),
              2: (r.damage.shockwave.base + r.damage.shockwave.modifier + r.damage.shockwave.growth) * (1 - mod.defMagRed),
              3: (r.damage.shockwave.base + r.damage.shockwave.modifier + r.damage.shockwave.growth * 2) * (1 - mod.defMagRed)
            }
          }
        },

        text: {
          star: <span className="stat--ap">{r.damage.star.base} / {r.damage.star.base + r.damage.star.growth} / {r.damage.star.base + r.damage.star.growth * 2} / {r.damage.star.base + r.damage.star.growth * 3} (+65% AP) Magic damage</span>,

          skies: <span className="stat--ap">{r.damage.skies.base} / {r.damage.skies.base + r.damage.skies.growth} / {r.damage.skies.base + r.damage.skies.growth * 2} / {r.damage.skies.base + r.damage.skies.growth * 3} (+81.25% AP) Magic damage</span>,

          shockwave: <span className="stat--ap">{r.damage.shockwave.base} / {r.damage.shockwave.base + r.damage.shockwave.growth} / {r.damage.shockwave.base + r.damage.shockwave.growth * 2} / {r.damage.shockwave.base + r.damage.shockwave.growth * 3} (+65% AP) Magic damage</span>,
        }
      },
           
    }
  }, [atk, def, bonus, currentLevel, stardust]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> COSMIC CREATOR
          </h4>

          <div>
            <p>Stardust stacks: <b className="stat--armor">{stardust}</b> </p>
            <p>Change Stardust stacks:</p>
            <input type="number"
              min="0"
              value={stardust}
              onChange={(e) => {updateStardust(e)}} />
          </div>
    
          <p>
            Aurelion Sol's damaging abilities turn enemies into <span className="stat--armor">Stardust</span> which in turn empowers his abilities.
          </p>

          <ol>
            <li>
              <b>Breath of Light</b>: This ability's burst deal additional magic damage equal to (<span className="stat--armor">3% of Stardust stacks</span>)% of target's <span className="stat--hp">maximum Health</span>.
            </li>
            <li>
              <b>Astral Flight</b>: Increases the maximum flight distance by (<span className="stat--armor">62.5% of Stardust stacks</span>)%.
            </li>
            <li>
              <b>Singularity</b>: Increases the ability's execution threshold by (<span className="stat--armor">2.6% of Stardust stacks</span>)% and its impact area.
            </li>
            <li>
              <b>Falling Star/The Skies Descend:</b> Increases the ability's impact area.
            </li>
          </ol>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BREATH OF LIGHT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.q.cooldown[1]).toFixed(1)} / 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.q.cost[1]} /             
            {' '}{calculations.q.cost[2]} / 
            {' '}{calculations.q.cost[3]} / 
            {' '}{calculations.q.cost[4]} 
          </h5>

          <h5 className="stat--ap">Damage (per second / burst):</h5>
          <p className="stat--ap">Pre-mitigation:
            {' '}{Math.round((calculations.q.damage.raw[1]) * 5)} + {Math.round(calculations.q.burst.raw[1])} /
            {' '}{Math.round((calculations.q.damage.raw[2]) * 5)} + {Math.round(calculations.q.burst.raw[2])} /
            {' '}{Math.round((calculations.q.damage.raw[3]) * 5)} + {Math.round(calculations.q.burst.raw[3])} /
            {' '}{Math.round((calculations.q.damage.raw[4]) * 5)} + {Math.round(calculations.q.burst.raw[4])}
          </p>

          <p className="stat--ap">Post-mitigation:
          {' '}{Math.round((calculations.q.damage.mitigated[1]) * 5)} + {Math.round(calculations.q.burst.mitigated[1])} /
            {' '}{Math.round((calculations.q.damage.mitigated[2]) * 5)} + {Math.round(calculations.q.burst.mitigated[2])} /
            {' '}{Math.round((calculations.q.damage.mitigated[3]) * 5)} + {Math.round(calculations.q.burst.mitigated[3])} /
            {' '}{Math.round((calculations.q.damage.mitigated[4]) * 5)} + {Math.round(calculations.q.burst.mitigated[4])}
          </p>
    
          <br />
          <p>
            Aurelion Sol breathes starfire for 3.25 seconds, dealing magic damage equal to {calculations.q.text.damage} every 0.2 seconds to the first enemy hit and revealing them. 50% of that damage is dealt to nearby enemies. For every second that the breath hits the same target, Aurelion Sol deals a burst of magic damage equal to {calculations.q.text.burst}. If the target is a champion, Aurelion Sol gains 1 stack of Stardust. Damage dealt based on the target's maximum Health is capped at 100 against monsters.
          </p>

          <ul>
            <li>
            Damage ratio to monsters: 40%;
            </li>
            <li>
            Aurelion Sol can move slowly while casting Breath of Light;
            </li>
            <li>
            At maximum ability level, Breath of Light's duration is extended infinitely;
            </li>
            <li>
            When Breath of Light is channeled for fewer than 0.25 seconds, it will go into a 1-second cooldown.
            </li>
          </ul>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ASTRAL FLIGHT
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
    
          <br />
          <p>
          Aurelion Sol flies in a direction. While flying, Breath of Light has no cooldown and its damage increases by 112.5%/115%/117.5%/120%. His flight speed is reduced by 50% if Breath of Light is cast while flying.
          </p>

          <ul>
            <li>
            Recast: Ends the flight early;
            </li>
            <li>
            If a champion is killed within 3 seconds of taking damage from Aurelion Sol, 90% of this ability's cooldown is refunded.
            </li>
            <li>
            Aurelion Sol's flight speed is {calculations.w.text.moveSpeed}
            </li>
          </ul>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SINGULARITY
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
            {' '}{calculations.e.cost[1]} / 
            
            {' '}{calculations.e.cost[2]} / 
            {' '}{calculations.e.cost[3]} / 
            {' '}{calculations.e.cost[4]} 
          </h5>

          <h5 className="stat--ap">Damage (per second):</h5>
          <p className="stat--ap">Pre-mitigation:
            {' '}{Math.round((calculations.e.damage.raw[1]) * 5)}
            {' '}{Math.round((calculations.e.damage.raw[2]) * 5)} /
            {' '}{Math.round((calculations.e.damage.raw[3]) * 5)} /
            {' '}{Math.round((calculations.e.damage.raw[4]) * 5)}
          </p>

          <p className="stat--ap">Post-mitigation:
          {' '}{Math.round((calculations.e.damage.mitigated[1]) * 5)} /
            {' '}{Math.round((calculations.e.damage.mitigated[2]) * 5)} /
            {' '}{Math.round((calculations.e.damage.mitigated[3]) * 5)} /
            {' '}{Math.round((calculations.e.damage.mitigated[4]) * 5)}
          </p>

          <h5 className="stat--vamp">Execution treshold</h5>
          <p>
            Current target: <span className="stat--hp">{Math.round(calculations.e.execution.treshold)}</span>
          </p>


          
    
          <br />
          <p>
          Aurelion Sol summons a black hole, dealing {calculations.e.text.damage} every 0.2 seconds. The black hole drags enemies toward the center of the black hole for 5 seconds. Enemies in the center die instantly when below {calculations.e.text.execution}.
          </p>

          <p>
          As the black hole absorbs Stardust, for every second an enemy champion is trapped within the black hole's range, Aurelion Sol gains a stack of Stardust. When enemies are killed within the black hole's range, Aurelion Sol gains:
          </p>

          <ul>
            <li>
            5 stacks of Stardust for every champion or epic monster killed;
            </li>
            <li>
            3 stacks of Stardust for every siege minion or large monster killed;
            </li>
            <li>
            2 stacks of Stardust for every minion or small monster killed.
            </li>
          </ul>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FALLING STAR / THE SKIES DESCEND
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
          <ol className="stat--ap">
            <ul>
              <li>
                <b className="stat--armor">Falling Star</b>
              </li>
              <li>Pre-mitigation:
                {' '}{Math.round(calculations.r.damage.star.raw[1])} /
                {' '}{Math.round(calculations.r.damage.star.raw[2])} /
                {' '}{Math.round(calculations.r.damage.star.raw[3])}
              </li>
              <li>
                Post-mitigation:
                {' '}{Math.round(calculations.r.damage.star.mitigated[1])} /
                {' '}{Math.round(calculations.r.damage.star.mitigated[2])} /
                {' '}{Math.round(calculations.r.damage.star.mitigated[3])}
              </li>
            </ul>

            <ul>
              <li>
              <b className="stat--armor">Skies Descend</b>
              </li>
              <li>Pre-mitigation:
                {' '}{Math.round(calculations.r.damage.skies.raw[1])} /
                {' '}{Math.round(calculations.r.damage.skies.raw[2])} /
                {' '}{Math.round(calculations.r.damage.skies.raw[3])}
              </li>
              <li>
                Post-mitigation:
                {' '}{Math.round(calculations.r.damage.skies.mitigated[1])} /
                {' '}{Math.round(calculations.r.damage.skies.mitigated[2])} /
                {' '}{Math.round(calculations.r.damage.skies.mitigated[3])}
              </li>
            </ul>

            <ul>
              <li>
              <b className="stat--armor">Shockwave</b>
              </li>
              <li>Pre-mitigation:
                {' '}{Math.round(calculations.r.damage.shockwave.raw[1])} /
                {' '}{Math.round(calculations.r.damage.shockwave.raw[2])} /
                {' '}{Math.round(calculations.r.damage.shockwave.raw[3])}
              </li>
              <li>
                Post-mitigation:
                {' '}{Math.round(calculations.r.damage.shockwave.mitigated[1])} /
                {' '}{Math.round(calculations.r.damage.shockwave.mitigated[2])} /
                {' '}{Math.round(calculations.r.damage.shockwave.mitigated[3])}
              </li>
            </ul>
          </ol>
    
          <br />
          <p>
          Falling Star: Aurelion Sol plucks a star from the heavens and crashes it into the earth, dealing {calculations.r.text.star} stunning enemies within range for 1 second. For every enemy champion hit, Aurelion Sol gains 8 stacks of Stardust.
          </p>

          <p>
          The Skies Descend: Whenever Aurelion Sol collects 65 stacks of Stardust, the next Falling Star transforms into The Skies Descend. Aurelion Sol rains down cosmic fury on the earth, dealing {calculations.r.text.skies} over a larger area and knocking enemies hit Airborne for 1 second. He also emits a huge shockwave at the same time, dealing {calculations.r.text.shockwave} to enemy champions and epic monsters. All enemies hit are slowed by 50% for 1 second and revealed for 1.5 seconds.
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