import { useMemo } from "react";

export default function viego({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const calculations = useMemo(() => {

    const passive = {      
      healing: {
        base: Math.max(def.health * (5 + (bonus.attack * 4/100) + (atk.ap * 2/100) + ((bonus.as/champ.asBase) * 5/100))/100, 0) 
      }
    };

    const q = {
      cooldown: {
        base: 3.7,
        growth: -0.4
      },

      passiveDamage: {
        base: atk.attack * 15/100 + atk.ap * 15/100       
      },

      passiveMaxHp: {
        base: def.health * 3/100,
        growth: def.health * 1/100
      },

      damage: {
        base: 25,
        growth: 20,
        modifier: atk.attack * 80/100,
        specialmod: 1 + atk.critChance * 0.5,
      },

      minimalDamage: {
        base: 10,
        growth: 5
      },
    };

    const w = {
      cooldown: {
        base: 7,        
      },

      damage: {
        base: 80,
        growth: 70,
        modifier: (atk.ap * 90 / 100)
      },
    };

    const e = {
      cooldown: {
        base: 12,
        growth: -2
      },

      moveSpeed: {
        base: atk.moveSpeed * 25 / 100,
        growth: atk.moveSpeed * 5/100,
        modifier: atk.moveSpeed * (atk.ap * 4 / 10000)
      },

      attackSpeed: {
        base: champ.asBase * 35/100,
        growth: champ.asBase * 5/100
      }
    };

    const r = {
      cooldown: {
        base: 90,
        growth: -15
      },

      damagePrimary: {
        base: atk.attack * 120/100,        
        modifier: atk.attack * (60/100 * atk.critChance)
      },
    };

    return {      
      p: {
        healing: passive.healing.base,
        text: {
          healing: <p><span className="stat--hp">5%</span> <span className="stat--ad">(+4% bonus Attack Damage)</span> <span className="stat--ap">(+2% AP)</span> <span className="stat--as">(5% per 100% bonus Attack Speed)</span></p>
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
            1: (q.damage.base + q.damage.modifier) * q.damage.specialmod,
            2: (q.damage.base + q.damage.modifier + q.damage.growth) * q.damage.specialmod,
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * q.damage.specialmod,
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * q.damage.specialmod
          },

          mitigated: {
            1: (q.damage.base + q.damage.modifier) * q.damage.specialmod * (1 - mod.defPhysRed),
            2: (q.damage.base + q.damage.modifier + q.damage.growth) * q.damage.specialmod * (1 - mod.defPhysRed),
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2) * q.damage.specialmod * (1 - mod.defPhysRed),
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3) * q.damage.specialmod * (1 - mod.defPhysRed)
          }
        },

        passiveMaxHp: {
          raw: {
            1: q.passiveMaxHp.base,
            2: q.passiveMaxHp.base + q.passiveMaxHp.growth,
            3: q.passiveMaxHp.base + q.passiveMaxHp.growth * 2,
            4: q.passiveMaxHp.base + q.passiveMaxHp.growth * 3
          },

          mitigated: {
            1: (q.passiveMaxHp.base) * (1 - mod.defPhysRed),
            2: (q.passiveMaxHp.base + q.passiveMaxHp.growth) * (1 - mod.defPhysRed),
            3: (q.passiveMaxHp.base + q.passiveMaxHp.growth * 2) * (1 - mod.defPhysRed),
            4: (q.passiveMaxHp.base + q.passiveMaxHp.growth * 3) * (1 - mod.defPhysRed)
          }
        },

        passiveDamage: {
          raw: q.passiveDamage.base,
          mitigated: q.passiveDamage.base * (1 - mod.defPhysRed)
        },
        
        minimalDamage: {
          1: q.minimalDamage.base,
          2: q.minimalDamage.base + q.minimalDamage.growth,
          3: q.minimalDamage.base + q.minimalDamage.growth * 2,
          4: q.minimalDamage.base + q.minimalDamage.growth * 3,
        },

        text: {
          passivePrimary: <span className="stat--hp"> 3% / 4% / 5% / 6% of target's current HP</span>,
          passiveSecondary: <span className="stat--ad">15% AD + <span className="stat--ap">15% AP</span> physical damage</span>,
          damage: <span className="stat--ad">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+80% AD) * <span className="stat--critChance">(1 + 50% of Critical Rate)</span> physical Damage</span>,
          bonus: <b>{q.minimalDamage.base} / {q.minimalDamage.base + q.minimalDamage.growth} / {q.minimalDamage.base + q.minimalDamage.growth * 2} / {q.minimalDamage.base + q.minimalDamage.growth * 3}</b>,          
        }
      },

      w: {
        cooldown: {
          1: w.cooldown.base * (mod.atkcdr)
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
          damage: <span className="stat--ap">{w.damage.base} / {w.damage.base + w.damage.growth} / {w.damage.base + w.damage.growth * 2} / {w.damage.base + w.damage.growth * 3} (+90% AP) Magic damage</span>,
        }
      },

      e: {
        cooldown: {
          1: e.cooldown.base * (mod.atkcdr),
          2: (e.cooldown.base + e.cooldown.growth) * (mod.atkcdr),
          3: (e.cooldown.base + e.cooldown.growth * 2) * (mod.atkcdr),
          4: (e.cooldown.base + e.cooldown.growth * 3) * (mod.atkcdr)
        },

        moveSpeed: {
          1: e.moveSpeed.base + e.moveSpeed.modifier,
          2: e.moveSpeed.base + e.moveSpeed.modifier + e.moveSpeed.growth,
          3: e.moveSpeed.base + e.moveSpeed.modifier + e.moveSpeed.growth * 2,
          4: e.moveSpeed.base + e.moveSpeed.modifier + e.moveSpeed.growth * 3
        },

        attackSpeed: {
          1: e.attackSpeed.base,
          2: e.attackSpeed.base + e.attackSpeed.growth,
          3: e.attackSpeed.base + e.attackSpeed.growth * 2,
          4: e.attackSpeed.base + e.attackSpeed.growth * 3
        },

        text: {
          moveSpeed: <span className="stat--moveSpeed">25% / 30% / 35% / 40% <span className="stat--ap">(+0.04% AP)</span> Movement Speed</span>,
          attackSpeed: <span className="stat--as">35% / 40% / 45% / 50% Attack Speed</span>
        }
      },

      r: {
        cooldown: {
          1: r.cooldown.base * (mod.atkcdr),
          2: (r.cooldown.base + r.cooldown.growth) * (mod.atkcdr),
          3: (r.cooldown.base + r.cooldown.growth * 2) * (mod.atkcdr)
        },

        damagePrimary: {
          raw: {
            1: r.damagePrimary.base + r.damagePrimary.modifier
          },
          mitigated: {
            1: (r.damagePrimary.base + r.damagePrimary.modifier) * (1 - mod.defPhysRed)
          }
        },

        text: {
          damagePrimary: <span className="stat--ad">120% - 180% AD <span className="stat--critChance">(based on Critical Rate)</span> physical damage</span>,
          damageSecondary: <span className="stat--ad"><span className="stat--hp">12% / 16% / 20%</span> (+6% bonus AD) <span className="stat--hp">of target's missing Health</span> as physical damage</span>
        }
      },
           
    }
  }, [atk, def, bonus, currentLevel]);

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SOVEREIGN'S DOMINATION
          </h4>

          <h5 className="stat--hp">Healing (against current target):
            {' '}{Math.round(calculations.p.healing)}
          </h5>


    
          <p>
            The souls of enemy champions that die within 3 seconds of being damaged by Viego become <span className="stat--armor">wraiths</span> that remain in place for 8 seconds. Viego can channel for 1 second to posses them for 10 seconds. During Possesion:
          </p>

          <ul>
            <li>Gains a free cast of Heartbreaker;</li>
            <li>Becomes untargetable;</li>
            <li>Gains <span className="stat--moveSpeed">{calculations.p.text.movespeed} bonus Movement Speed</span> when moving towards enemy champions ;</li>
            <li>Gains access to the possessed champion's basic abilities, attacks and items;</li>
            <li>Heals for {calculations.p.text.healing} of the <span className="stat--hp">target's Max Health</span></li>
          </ul>

          <p>
            Viego cannot use the possesed champion's enchantment item actives
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> Blade of the Ruined King
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.q.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.q.cooldown[4]).toFixed(1)} 
          </h5>

          <h5 className="stat--ad"> 
          Passive Max HP damage (current target 100% HP):
          </h5>
          <p className="stat--ad">
            {' '}{Math.max((calculations.q.minimalDamage[1]), Math.round(calculations.q.passiveMaxHp.mitigated[1]))},
            {' '}{Math.max((calculations.q.minimalDamage[2]), Math.round(calculations.q.passiveMaxHp.mitigated[2]))},
            {' '}{Math.max((calculations.q.minimalDamage[3]), Math.round(calculations.q.passiveMaxHp.mitigated[3]))},
          {' '}{Math.max((calculations.q.minimalDamage[4]), Math.round(calculations.q.passiveMaxHp.mitigated[4]))}
          </p>

          <h5 className="stat--ad">            
            Bonus damage after ability cast:
          </h5>
          <p className="stat--ad">
          Pre-mitigation: {Math.round(calculations.q.passiveDamage.raw)} / Post-mitigation: {Math.round(calculations.q.passiveDamage.mitigated)}
          </p>

          <h5 className="stat--ad">
            Damage:            
          </h5>
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
            <b>Passive:</b> Attacks deal bonus <span className="stat--ad">physical damage equal to {calculations.q.text.passivePrimary}</span>. After damaging an enemy with an ability, Viego's first attack against them within 5 seconds strikes twice dealing {calculations.q.text.passiveSecondary} and <span className="stat--hp">healing himself</span> for 135% of the damage dealt. Passive bonuses are kept during Possession.
          </p>

          <p>
            <b>Active:</b> Stabs forward, dealing {calculations.q.text.damage}.
          </p>

          <p>
            Attacks deal at least {calculations.q.text.bonus}.
          </p>

          <p>
            This ability's cast time reduces with <span className="stat--as">Attack Speed</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SPECTRAL MAW
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.w.cooldown[1]).toFixed(1)}
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
            <b>Charge:</b> Gathers Black Mist and charges up to 3 seconds, <span className="stat--movespeed"> slowing himself by 10% <span className="stat--moveSpeed">({Math.round(atk.moveSpeed * 90 /100)} movespeed while casting)</span></span> during this period.
          </p>

          <p>
            <b>Cast:</b> Dashes forward and hurls the ball of gathered Black Mist dealing {calculations.w.text.damage} to the first enemy hit and <b>stunning</b> them for <b>04-1.25</b> seconds (based on charging time)
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> HARROWED PATH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.e.cooldown[1]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[3]).toFixed(1)} / 
            {' '}{(calculations.e.cooldown[4]).toFixed(1)} 
          </h5>

          <h5 className="stat--moveSpeed">Movement Speed:
            {' '}{Math.round(calculations.e.moveSpeed[1])} / 
            {' '}{Math.round(calculations.e.moveSpeed[2])} / 
            {' '}{Math.round(calculations.e.moveSpeed[3])} / 
            {' '}{Math.round(calculations.e.moveSpeed[4])}
          </h5>

          <h5 className="stat--as">Attack Speed:
            {' '}{(calculations.e.attackSpeed[1]).toFixed(3)} / 
            {' '}{(calculations.e.attackSpeed[2]).toFixed(3)} / 
            {' '}{(calculations.e.attackSpeed[3]).toFixed(3)} / 
            {' '}{(calculations.e.attackSpeed[4]).toFixed(3)}
          </h5>

          <br />
          <p>
            Sends forth a <span className="stat--ad">specter</span> to haunt the first terrain hit with Black Mist for <b>8 seconds</b>.
          </p>
          <p>
            While inside the Black Mist, Viego becomes <span className="stat--ad">camouflaged</span> and gains {calculations.e.text.moveSpeed} and {calculations.e.text.attackSpeed}
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> HEARTBREAKER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.r.cooldown[1]).toFixed(1)} /
            {' '}{(calculations.r.cooldown[2]).toFixed(1)} / 
            {' '}{(calculations.r.cooldown[3]).toFixed(1)}
          </h5>

          <h5 className="stat--ad">Initial damage:</h5>
          <p className="stat--ad">Pre-mitigation: {Math.round(calculations.r.damagePrimary.raw[1])} / Post-mitigation: {Math.round(calculations.r.damagePrimary.mitigated[1])}            
          </p>
          
          <br />
          <p>
            Teleports to a target location nearby dealing {calculations.r.text.damagePrimary} to all champions in the area.
          </p>

          <p>
            Deals bonus damage equal to {calculations.r.text.damageSecondary} tho the enemy champions with lowest <span className="stat--hp"> percentage of Health</span>, <span className="stat--moveSpeed">slowing them by 99%</span> for 0.25 second and knocking back enemies nearby them.
          </p>

          <p>
            <b>Heartbreaker</b> applies <b>on-hit effects</b> to the primary target and <b>ability effects</b> to the others.
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