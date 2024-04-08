import { useMemo, useState } from "react";

export default function kindred({currentLevel, mod, bonus, atk, def, champ}) {
  const [marks, setMarks] = useState(0);

  const calculations = useMemo(() => {

    const passive = {      
      range: Math.min(250, (Math.floor(marks / 3) >= 1 ? 50 : 0) + Math.floor(marks/3) * 25)  
    };

    const q = {
      cooldown: {
        base: 9,
        growth: 0
      },
      cost: {
        base: 35,
        growth: 0
      },
      damage: {
        base: 50,
        growth: 25,
        modifier: (bonus.attack * 70 / 100)
      },
      attackSpeed: {
        base: 35,
        bonus: marks * 5
      }
    };

    const w = {
      cooldown: {
        base: 17,
        growth: -1
      },
      cost: {
        base: 40,
        growth: 0
      },
      damage: {
        base: 25,
        growth: 5,
        modifier: (bonus.attack * 20 /100) + (atk.ap * 20 / 100) + (def.health * (1.5 + Number(marks))/100)
      },
    };

    const e = {
      cooldown: {
        base: 13,
        growth: -1
      },
      cost: {
        base: 50,
        growth: 0
      },
      damage: {
        base: 80,
        growth: 25,
        modifier: (bonus.attack * 70/100) + (def.health * (8 + (marks * 0.5)) / 100)
      },
      damageEmp: {
        base: 80,
        growth: 25,
        modifier: (bonus.attack * 70/100) + (def.health * (1 - (0.25 + atk.critChance * 0.4)) * (12 + marks * 0.75) / 100)
      },
    };

    const r = {
      cooldown: {
        base: 105,
        growth: 15
      },
      cost: {
        base: 100,
        growth: 0
      },      
      healing: {
        base: 100,
        growth: 25,
        modifier: 0
      },
      restoration: {
        base: 200,
        growth: 75
      }
    };

    return {

      p: {
        range:Math.round(passive.range)
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
            1: (q.damage.base + q.damage.modifier) * (1 - mod.defPhysRed),
            2: (q.damage.base + q.damage.modifier + q.damage.growth) * (1 - mod.defPhysRed),
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * (1 - mod.defPhysRed),
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * (1 - mod.defPhysRed)
          }
        },
        
        text: {
          damage: <span className="stat--ad">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+70% bonus AD) Physical damage</span>,
          attackSpeed: <span><span className="stat--as">{q.attackSpeed.base + q.attackSpeed.bonus}% ({(champ.asBase * (q.attackSpeed.base + q.attackSpeed.bonus) / 100).toFixed(3)}) Attack Speed</span> (35% + 5% per Mark)</span>
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
          damage: <span className="stat--ap">{w.damage.base} / {w.damage.base + w.damage.growth} / {w.damage.base + w.damage.growth * 2} / {w.damage.base + w.damage.growth * 3} (<span className="stat--ad">+20% bonus AD</span> ) (+20% AP) (<span className="stat--hp">1.5% + <span className="stat--armor">1% per Mark</span> of target's current health</span>) Magic damage</span>,
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

        damage: {
          raw: {
            1: e.damage.base + e.damage.modifier,
            2: e.damage.base + e.damage.modifier + e.damage.growth,
            3: e.damage.base + e.damage.modifier + e.damage.growth * 2,
            4: e.damage.base + e.damage.modifier + e.damage.growth * 3
          },

          mitigated: {
            1: (e.damage.base + e.damage.modifier) * (1 - mod.defPhysRed),
            2: (e.damage.base + e.damage.modifier + e.damage.growth) * (1 - mod.defPhysRed),
            3: (e.damage.base + e.damage.modifier + e.damage.growth * 2) * (1 - mod.defPhysRed),
            4: (e.damage.base + e.damage.modifier + e.damage.growth * 3) * (1 - mod.defPhysRed)
          }
        },

        damageEmpowered: {
          raw: {
            1: e.damageEmp.base + e.damageEmp.modifier,
            2: e.damageEmp.base + e.damageEmp.modifier + e.damageEmp.growth,
            3: e.damageEmp.base + e.damageEmp.modifier + e.damageEmp.growth * 2,
            4: e.damageEmp.base + e.damageEmp.modifier + e.damageEmp.growth * 3
          },

          mitigated: {
            1: (e.damageEmp.base + e.damageEmp.modifier) * (1 - mod.defPhysRed),
            2: (e.damageEmp.base + e.damageEmp.modifier + e.damageEmp.growth) * (1 - mod.defPhysRed),
            3: (e.damageEmp.base + e.damageEmp.modifier + e.damageEmp.growth * 2) * (1 - mod.defPhysRed),
            4: (e.damageEmp.base + e.damageEmp.modifier + e.damageEmp.growth * 3) * (1 - mod.defPhysRed)
          }
        },

        text: {
          damage: {
            base: <span className="stat--ad">{e.damage.base} / {e.damage.base + e.damage.growth} / {e.damage.base + e.damage.growth * 2} / {e.damage.base + e.damage.growth * 3} (+70% bonus AD) (<span className="stat--hp">+8% <span className="stat--armor">+0.5% per Mark</span> of target's missing Health</span> ) Physical damage</span>,
            empowered: <span className="stat--ad">{e.damage.base} / {e.damage.base + e.damage.growth} / {e.damage.base + e.damage.growth * 2} / {e.damage.base + e.damage.growth * 3} (+70% bonus AD) (<span className="stat--hp">+12% <span className="stat--armor">+0.75% per Mark</span> of target's missing Health</span> ) Physical damage</span>
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

        healing: {
          1: r.healing.base + r.healing.modifier + r.restoration.base,
          2: r.healing.base + r.healing.modifier + r.healing.growth + r.restoration.base + r.restoration.growth,
          3: r.healing.base + r.healing.modifier + r.healing.growth * 2  + r.restoration.base + r.restoration.growth * 2
        },

        text: {
          healing: <span className="stat--hp">{r.healing.base} / {r.healing.base + r.healing.growth} / {r.healing.base + r.healing.growth * 2} Health</span>,
          restoration: <span className="stat--hp">{r.restoration.base} / {r.restoration.base + r.restoration.growth} / {r.restoration.base + r.restoration.growth * 2} Health</span>,
        }
      },
           
    }
  }, [atk, def, bonus, currentLevel, marks]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MARK OF THE KINDRED
          </h4>

          <div>
            <p>Marks count: <span className="stat--armor">{marks}</span></p>

            <p>Bonus Range: <span className="stat--misc">{calculations.p.range}</span></p>

            <button onClick={() => {setMarks(oldMarks => oldMarks +=1)}}>Add mark</button>
            <button onClick={() => {setMarks(oldMarks => 0)}}>Reset Marks</button>
          </div>
    
          <p>
            Marks target with <span className="stat--armor">Mark of the Kindred</span> for hunting. Deals additional <span className="stat--vamp">30% damage</span> to small monsters, Red and Blue buff camps.
          </p>

          <p>
            Scoring a takedown against a hunted target grants Kindred a <span className="stat--armor">Mark stack</span> that empowers Kindred.
          </p>

          <ul>
            <li>
              The first <span className="stat--armor">3 stacks</span> gained grant <span className="stat--misc">75 Attack Range</span>. *Every <b>3</b> subsequent stacks grant additional <span className="stat--misc">25 Attack Range</span>.
              <br />
              <sub>*Not checked: Max 250 bonus Range at 24 stacks unless WR removed range cap unlike LoL</sub>.
            </li>

            <li>
              <span className="stat--armor">Q/S1: Dance of Arrows</span>. <span className="stat--as">Attack Speed bonus</span> of ability increases by <span className="stat--as">5%</span> per mark.
            </li>

            <li>
              <span className="stat--armor">W/S2: Worlf's Frenzy</span>. <span className="stat--hp"></span> bonus <span className="stat--sp">magical damage</span> increases by <span className="stat--hp">1% of Target's <b>current</b> health</span> per mark.
            </li>

            <li>
              <span className="stat--armor">E/S3: Mounting Dread</span>. Wolf's bonus <span className="stat--ad">physical damage</span> increases by <span className="stat--hp">0.5% of Target's <b>missing</b> health</span> per mark
            </li>
          </ul>

          <p>
            There are different ways to <span>mark</span> a target:
          </p>

          <ul>
            <li>
              Auto-refresh: Every <b>30 seconds</b> the <span className="stat--armor">mark</span> on a monster expires and new one automatically applied. Marks on monsters are highlighted on minimap for both teams.
            </li>
            <li>
              Active: use the <span className="stat--armor">Mark</span> icon to start hunting selected enemy champion.
            </li>
          </ul>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> Dance of Arrows
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.q.cooldown[1]).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{calculations.q.cost[1]}
          </h5>

          <h5 className="stat--ad">Damage:</h5>
          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.q.damage.raw[1])} /
            {' '}{Math.round(calculations.q.damage.raw[2])} /
            {' '}{Math.round(calculations.q.damage.raw[3])} /
            {' '}{Math.round(calculations.q.damage.raw[4])} /
          </p>
          <p className="stat--ad">post-mitigation: 
            {' '}{Math.round(calculations.q.damage.mitigated[1])} /
            {' '}{Math.round(calculations.q.damage.mitigated[2])} /
            {' '}{Math.round(calculations.q.damage.mitigated[3])} /
            {' '}{Math.round(calculations.q.damage.mitigated[4])} /
          </p>
    
          <br />
          <p>
            Rolls in a target direction (can jump through walls) and fires an arrow at up to 3 enemies dealing {calculations.q.text.damage} and gaining {calculations.q.text.attackSpeed} for 4 Seconds.
          </p>

          <p>
            While inside <span className="stat--armor">W/S2: Wolf's Frenzy</span> area, this ability cooldown is reduced to <b>4 seconds</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> WOLF'S FRENZY
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
            <b>Passive:</b> Gain <span className="stat--armor">Hunter's Vigor</span> stacks while moving or attacking. After gaining 100 stacks, Lamb's next attack restores up to <span className="stat--hp">{Math.round(22 + Number(currentLevel)*3)} Health</span> (25 + 3 per Level) based on Kindred's missing health (<span className="stat--hp">% of healing</span> to <span className="stat--vamp">% of <b className="stat--vamp">missing</b> health</span>:
             {' '}<span className="stat--hp">25</span>/<span className="stat--vamp">25</span>, 
             {' '}<span className="stat--hp">50</span>/<span className="stat--vamp">40</span>, 
             {' '}<span className="stat--hp">75</span>/<span className="stat--vamp">55</span>, 
             {' '}<span className="stat--hp">100</span>/<span className="stat--vamp">70</span>)
          </p>

          <p>
            <b>Active:</b> Claims an area as territory and directs <b>Wolf</b> to maul the last <b>Lamb's</b> target. Wolf deals {calculations.w.text.damage}
          </p>

          <p>
            <b>Wolf</b> deals 100% damage to marked monsters (and smaller monsters in their respective camp), slowing them by <span className="stat--moveSpeed">50%</span> for 2 seconds.
          </p>

          <p>
            Deals up to <span className="stat--ad">300 damage</span> to monsters
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> MOUNTING DREAD
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

          <h5 className="stat--ad">Target <span className="stat--hp">at full health</span> Damage:</h5>
          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.e.damage.raw[1])} /
            {' '}{Math.round(calculations.e.damage.raw[2])} /
            {' '}{Math.round(calculations.e.damage.raw[3])} /
            {' '}{Math.round(calculations.e.damage.raw[4])}
          </p>
          <p className="stat--ad">post-mitigation: 
          {' '}{Math.round(calculations.e.damage.mitigated[1])} /
            {' '}{Math.round(calculations.e.damage.mitigated[2])} /
            {' '}{Math.round(calculations.e.damage.mitigated[3])} /
            {' '}{Math.round(calculations.e.damage.mitigated[4])}
          </p>

          <h5 className="stat--ad">Target <span className="stat--vamp">below {Math.round(25 + atk.critChance * 40)}% Health</span> minimum Damage:</h5>
          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.e.damageEmpowered.raw[1])} /
            {' '}{Math.round(calculations.e.damageEmpowered.raw[2])} /
            {' '}{Math.round(calculations.e.damageEmpowered.raw[3])} /
            {' '}{Math.round(calculations.e.damageEmpowered.raw[4])}
          </p>
          <p className="stat--ad">post-mitigation: 
          {' '}{Math.round(calculations.e.damageEmpowered.mitigated[1])} /
            {' '}{Math.round(calculations.e.damageEmpowered.mitigated[2])} /
            {' '}{Math.round(calculations.e.damageEmpowered.mitigated[3])} /
            {' '}{Math.round(calculations.e.damageEmpowered.mitigated[4])}
          </p>
    
          <br />
          <p>
            <span className="stat--armor">Choose a target</span> <span className="stat--moveSpeed"> and slow it by {Math.min(Math.round(50 + atk.ap * 0.05), 99)}%</span> (50% + <span className="stat--ap">5% AP</span>) for 1 second.
          </p>

          <p>
           <b>Lamb's</b> third attack within 4 seconds of attacking a <span className="stat--armor">chosen target</span> directs <b>Wolf</b> to pounce on it. dealing {calculations.e.text.damage.base}.
          </p>

          <p>
            <b>Wolf's</b> attack deals {calculations.e.text.damage.empowered} to enemies below <span className="stat--hp">{Math.round(25 + atk.critChance * 40)}% Health</span> (25% + <span className="stat--critChance">Crit Chance  * 0.4</span>).
          </p>

          <p>
            Deals up to <span className="stat--ad">300 damage</span> against monsters
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> LAMB'S RESPITE
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

          <h5 className="stat--hp">Lamb's treshold:</h5>
          <p className="stat--hp">{Math.round(atk.health * 10/100)} Health</p>

          <h5 className="stat--hp">Healing</h5>
          <p className="stat--hp">
            {' '}{calculations.r.healing[1]} /
            {' '}{calculations.r.healing[2]} /
            {' '}{calculations.r.healing[3]}
          </p>
    
          <br />
          <p>
            <b>Lamb</b> blesse the ground under herself for 3 seconds, creating a zone where all units within cannot be killed.
          </p>

          <p>
            When unit inside a zone fall to <span className="stat--hp">10% maximum health</span> they become invulnerable to damage as long as they stay inside the zone and cannot be healed.
          </p>

          <p>
            When the blessing ends restores {calculations.r.text.restoration} (unaffected by <span className="stat--vamp">Grievous Wounds</span>) to units within the zone and heals them for {calculations.r.text.healing}.
          </p>

          <p>
            This ability does not take effect against structures.
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