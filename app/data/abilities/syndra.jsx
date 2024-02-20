import { useState, useMemo, useEffect } from "react";


export default function syndra({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [stacks, setStacks] = useState({
    passive: false,
    w: false,
    spheres: 3
  });

  const toggleTranscendence = (e) => {
    e.preventDefault();
    setStacks(oldState => ({...oldState, passive: !oldState.passive }))
  }

  const toggleWBonus = () => {
    
    setStacks(oldState => ({...oldState, w: !oldState.w }))
  }

  const toggleSpheres = () => {
    
    const newStacks = stacks.spheres < 7 ? stacks.spheres + 1 : 3;
    setStacks(oldState => ({...oldState, spheres: newStacks }))
  }
  
  const calculations = useMemo(() => {
    const passive = {      
      manaRegen: {
        base: 13,
        growth: 3 * (Number(currentLevel) - 1),
      }
    };

    const q = {
      cooldown: {
        base: 7,
        growth: 0.5
      },
      cost: {
        base: 50,
        growth: 5
      },
      damage: {
        base: 70,
        growth: 45,
        modifier: (atk.ap * 65 / 100)
      }
    };

    const w = {
      cooldown: {
        base: 10,
        growth: 1
      },
      cost: {
        base: 70,
        growth: 10
      },

      damage: {
        base: 60,
        growth: 45,
        modifier: (atk.ap * 55 / 100),
        TranscBonus: (12 + (atk.ap * 2 / 100))
      },
    };

    const e = {
      cooldown: {
        base: 17,
        growth: 0
      },
      cost: {
        base: 50,
        growth: 0
      },

      damage: {
        base: 70,
        growth: 40,
        modifier: (atk.ap * 35 / 100),
      },
    };

    const r = {
      cooldown: {
        base: 80,
        growth: 10
      },
      cost: {
        base: 100,
        growth: 0
      },

      damage: {
        base: 60,
        growth: 45,
        modifier: (atk.ap * 15 / 100),
      },
    };

    return {
      p: {
        mana: passive.manaRegen.base + passive.manaRegen.growth,
        transcendence: stacks.passive >= 120 ? true : false
      },

      q: {
        cooldown: {
          "1": q.cooldown.base * (mod.atkcdr),
          "2": (q.cooldown.base -q.cooldown.growth) * (mod.atkcdr),
          "3": (q.cooldown.base - q.cooldown.growth * 2) * (mod.atkcdr),
          "4": (q.cooldown.base - q.cooldown.growth * 3) * (mod.atkcdr)
        },

        cost: {
          "1": q.cost.base,
          "2": q.cost.base + q.cost.growth,
          "3": q.cost.base + q.cost.growth * 2,
          "4": q.cost.base + q.cost.growth * 3,
        },

        damage: {
          raw: {
            "1": q.damage.base + q.damage.modifier,
            "2": q.damage.base + q.damage.modifier + q.damage.growth,
            "3": q.damage.base + q.damage.modifier + q.damage.growth * 2,
            "4": q.damage.base + q.damage.modifier + q.damage.growth * 3
          },

          mitigated: {
            "1": (q.damage.base + q.damage.modifier) * (1 - mod.defMagRed),
            "2": (q.damage.base + q.damage.modifier + q.damage.growth) * (1 - mod.defMagRed),
            "3": (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 - mod.defMagRed),
            "4": (q.damage.base + q.damage.modifier + q.damage.growth * 3) * (1 - mod.defMagRed)
          }
        },

        text: {
          damage: <span className="stat--ap">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+{65}% AP) Magic damage</span>
        }
      },

      w: {
        cooldown: {
          "1": w.cooldown.base * (mod.atkcdr),
          "2": (w.cooldown.base - w.cooldown.growth) * (mod.atkcdr),
          "3": (w.cooldown.base - w.cooldown.growth * 2) * (mod.atkcdr),
          "4": (w.cooldown.base - w.cooldown.growth * 3) * (mod.atkcdr)
        },

        cost: {
          "1": w.cost.base,
          "2": w.cost.base + w.cost.growth,
          "3": w.cost.base + w.cost.growth * 2,
          "4": w.cost.base + w.cost.growth * 3,
        },

        damage: {
          raw: {
            "1": (w.damage.base + w.damage.modifier) + Number(stacks.w ? (w.damage.base + w.damage.modifier) * w.damage.TranscBonus/100 : 0),
            "2": (w.damage.base + w.damage.modifier + w.damage.growth) + Number(stacks.w ? (w.damage.base + w.damage.modifier + w.damage.growth) * w.damage.TranscBonus/100 : 0),
            "3": (w.damage.base + w.damage.modifier + w.damage.growth) * 2 + Number(stacks.w ? (w.damage.base + w.damage.modifier + w.damage.growth * 2) * w.damage.TranscBonus/100 : 0),
            "4": (w.damage.base + w.damage.modifier + w.damage.growth) * 3 + Number(stacks.w ? (w.damage.base + w.damage.modifier + w.damage.growth * 3) * w.damage.TranscBonus/100 : 0)
          },

          mitigated: {
            "1": (w.damage.base + w.damage.modifier) * (1 - mod.defMagRed) + (stacks.w ? (w.damage.base + w.damage.modifier) * w.damage.TranscBonus/100 : 0),
            "2": (w.damage.base + w.damage.modifier + w.damage.growth) * (1 - mod.defMagRed) + (stacks.w ? (w.damage.base + w.damage.modifier + w.damage.growth) * w.damage.TranscBonus/100 : 0),
            "3": (w.damage.base + w.damage.modifier + w.damage.growth * 2) * (1 - mod.defMagRed) + (stacks.w ? (w.damage.base + w.damage.modifier + w.damage.growth * 2) * w.damage.TranscBonus/100 : 0),
            "4": (w.damage.base + w.damage.modifier + w.damage.growth * 3) * (1 - mod.defMagRed) + (stacks.w ? (w.damage.base + w.damage.modifier + w.damage.growth * 3) * w.damage.TranscBonus/100 : 0)
          }
        },

        text: {
          damage: <span className="stat--ap">{w.damage.base} / {w.damage.base + w.damage.growth} / {w.damage.base + w.damage.growth * 2} / {w.damage.base + w.damage.growth * 3} (+35% AP) Magic damage</span>,          
        }
      }, 

      e: {
        cooldown: {
          "1": e.cooldown.base * (mod.atkcdr)
        },

        cost: {
          "1": e.cost.base,          
        },

        damage: {
          raw: {
            "1": e.damage.base + e.damage.modifier,
            "2": e.damage.base + e.damage.modifier + e.damage.growth,
            "3": e.damage.base + e.damage.modifier + e.damage.growth * 2,
            "4": e.damage.base + e.damage.modifier + e.damage.growth * 3
          },

          mitigated: {
            "1": (e.damage.base + e.damage.modifier) * (1 - mod.defMagRed),
            "2": (e.damage.base + e.damage.modifier + e.damage.growth) * (1 - mod.defMagRed),
            "3": (e.damage.base + e.damage.modifier + e.damage.growth * 2) * (1 - mod.defMagRed),
            "4": (e.damage.base + e.damage.modifier + e.damage.growth * 3) * (1 - mod.defMagRed)
          }
        },

        text: {
          damage: <span className="stat--ap">{e.damage.base} / {e.damage.base + e.damage.growth} / {e.damage.base + e.damage.growth * 2} / {e.damage.base + e.damage.growth * 3} (+35% AP) Magic damage</span>
        }
      },

      r: {
        cooldown: {
          "1": r.cooldown.base * (mod.atkcdr),
          "2": (r.cooldown.base - r.cooldown.growth) * (mod.atkcdr),
          "3": (r.cooldown.base - r.cooldown.growth * 2) * (mod.atkcdr)
        },

        cost: {
          "1": r.cost.base,          
        },

        damage: {
          raw: {
            "1": (r.damage.base + r.damage.modifier) * stacks.spheres,
            "2": (r.damage.base + r.damage.modifier + r.damage.growth) * stacks.spheres,
            "3": (r.damage.base + r.damage.modifier + r.damage.growth * 2) * stacks.spheres
          },

          mitigated: {
            "1":  ((r.damage.base + r.damage.modifier) * (1 - mod.defMagRed)) * stacks.spheres,
            "2":  ((r.damage.base + r.damage.modifier + r.damage.growth) * (1 - mod.defMagRed)) * stacks.spheres,
            "3":  ((r.damage.base + r.damage.modifier + r.damage.growth * 2) * (1 - mod.defMagRed)) * stacks.spheres
          },
        },

        text: {
          damage: <span className="stat--ap">{r.damage.base} / {r.damage.base + r.damage.growth} / {r.damage.base + r.damage.growth * 2} (+15% AP) Magic damage</span>,
          execute: <span className="stat--hp">{Math.round(def.health * 10 / 100)} Health</span>
        }
      },
           
    }
  }, [atk, def, currentLevel, stacks]);

  useEffect(() => {

    if (stacks.passive) {
      updateAbilitiesBonus({syndraP: true})
    } else {
      updateAbilitiesBonus({syndraP: false})
    }
    

  }, [stacks])

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> TRANSCENDENT
          </h4>

          <div>
            <p><span className="stat--ap">Transcendenct full stacks:</span> {stacks.passive ? <span className="stat--hp">Active</span> : <span className="stat--vamp">Disabled</span>}</p>

            <button type="button" onClick={(event) => {toggleTranscendence(event)}}>toggle Transcendent bonus</button>
          </div>
    
          <p>
            Every instance of ability damage dealt to an enemy champion grants 1 <span className="stat--armor"> Splinter of Wrath</span> and restores <span className="stat--mana">{Math.round(calculations.p.mana)} mana</span> (13 + 3 per level).
          </p>

          <p>
            Syndra gains 2 <span className="stat--armor"> Splinters of Wrath</span> every time she levels up. Up to 120 <span className="stat--armor"> Splinters</span> can be collected.
          </p>

          <p>
          <span className="stat--armor"> Transcendent:</span> Empowers a basic ability after collecting 40, 60 and 80 <span className="stat--armor"> Splinters of Wrath</span>.
          </p>

          <p>
            Empowers <span className="stat--armor">Unleashed Power</span> after collecting 100<span className="stat--armor"> Splinter of Wrath</span>.
          </p>

          <p>
          <span className="stat--armor"> Transcendence</span> gains <span className="stat--ap">15% AP</span> after collecting 120<span className="stat--armor"> Splinters of Wrath</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DARK SPHERE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.q.cooldown["1"]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown["2"]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown["3"]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown["4"]).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.q.cost["1"]} / 
            {' '}{calculations.q.cost["2"]} / 
            {' '}{calculations.q.cost["3"]} / 
            {' '}{calculations.q.cost["4"]} 
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
          Conjures a <span className="stat--armor">Dark Sphere</span> dealing {calculations.q.text.damage} to enemies.
          </p>

          <p>
            The Sphere remains for 6 seconds and can be manipulated by Syndra's other abilities.
          </p>

          <p>
            <span className="stat--armor">Transcendent:</span> Stores a charge of <span className="stat--armor">Dark Sphere</span> every 7 seconds up to a maximum of 2.
          </p>

          <p>
            This ability can be cast while moving.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> FORCE OF WILL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.w.cooldown["1"]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown["2"]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown["3"]).toFixed(1)} / 
            {' '}{(calculations.w.cooldown["4"]).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.w.cost["1"]} / 
            {' '}{calculations.w.cost["2"]} / 
            {' '}{calculations.w.cost["3"]} / 
            {' '}{calculations.w.cost["4"]} 
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
          <div>
            <p><span className="stat--armor">Transcendenct bonus:</span> {stacks.w ? <span className="stat--hp">Active</span> : <span className="stat--vamp">Disabled</span>}</p>

            <button type="button" onClick={toggleWBonus}>toggle Transcendent bonus</button>
          </div>

          <p>
            Grabs the nearest <span className="stat--armor">Dark Sphere</span> and hurls it at a target location, dealing {calculations.w.text.damage} to enemies within the area and slowing them for <span className="stat--moveSpeed">20%</span> for 1.5 seconds.
          </p>

          <p>
            If there isn't any <span className="stat--armor">Dark Spheres</span> nearby, Syndra generates one and hurls it at the target location. Damage from the Sphere is reduced to 80%.
          </p>

          <p>
          <span className="stat--armor">Transcendent</span>: this ability deals an additional {calculations.w.text.transcBonus}.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SCATTER THE WEAK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.e.cooldown["1"]).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.e.cost["1"]}
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
    
          <br />
          <p>
            Projects a wave of force in a cone, <b>knocking back</b> enemies and <span className="stat--armor">Dark Spheres</span> and dealing {calculations.e.text.damage}.
          </p>

          <p>
          <span className="stat--armor">Dark Spheres</span> that are knocked back <b>stun</b> and knock back enemies hit along the way for 1.25 seconds dealing {calculations.e.text.damage}.
          </p>

          <p>
          <span className="stat--armor">Transcendent</span>: Increases the angle of the wave of force's cone by 50% and its radius to 720. Enemies can only take damage and be knocked back from this ability once per cast.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> UNLEASHED POWER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.r.cooldown["1"]).toFixed(1)} / 
            {' '}{(calculations.r.cooldown["2"]).toFixed(1)} / 
            {' '}{(calculations.r.cooldown["3"]).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.r.cost["1"]}
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
    
          <br />

          <div>
            <p><span className="stat--armor">Current number of Active Spheres:</span> {stacks.spheres}</p>

            <button type="button" onClick={toggleSpheres}>change Spheres quantity</button>
          </div>

          <p>
          <span className="stat--armor">Transcendent:</span> <u>current target</u> execute treshold: {calculations.r.text.execute}
          </p>

          <p>
            Manipulates the 3 <span className="stat--armor">Dark Spheres</span> orbiting around Syndra plus up to 4 nearby, launching them at an enemy champion. Each <span className="stat--armor">Sphere</span> deals {calculations.r.text.damage}.
          </p>
          
          <p>
          <span className="stat--armor">Transcendent</span> Increases <b>cast range</b> by 100. This abilities executes enemies below <span className="stat--hp">10% health</span>. 
          </p>

          <p>
            If this ability kills an enemy champion, the Dark Spheres will detonate where they were killed and deal {calculations.r.text.damage} to nearby enemy champions.
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