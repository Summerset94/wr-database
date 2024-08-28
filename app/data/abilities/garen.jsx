import { useMemo } from "react";

export default function garen({currentLevel, mod, bonus, atk, def, champ}) {
  const calculations = useMemo(() => {
    const q = {
      cooldown: {
        base: 9,
        growth: -0.5
      },

      damage: {
        base: 40,
        growth: 40,
        modifier: atk.attack * 40 /100
      }
    };

    const e = {
      cooldown: {
        base: 9,
        growth: 0
      },

      damage: {
        base: 12,
        growth: 4,
        modifier: atk.attack * 35 /100,
        modifierGrowth: atk.attack * 5 /100
      }
    };

    return {
      q: {
        cooldown: {
          1: q.cooldown.base,
          2: q.cooldown.base + q.cooldown.growth,
          3: q.cooldown.base + q.cooldown.growth * 2,
          4: q.cooldown.base + q.cooldown.growth * 3,
        },
        damage: {
          raw: {
            1: q.damage.base + q.damage.modifier,
            2: q.damage.base + q.damage.growth + q.damage.modifier,
            3: q.damage.base + q.damage.growth * 2 + q.damage.modifier,
            4: q.damage.base + q.damage.growth * 3 + q.damage.modifier,
          },

          mitigated: {
            1: (q.damage.base + q.damage.modifier) * (1 - mod.defPhysRed),
            2:  (q.damage.base + q.damage.growth + q.damage.modifier) * (1 - mod.defPhysRed),
            3:  (q.damage.base + q.damage.growth * 2 + q.damage.modifier) * (1 - mod.defPhysRed),
            4:  (q.damage.base + q.damage.growth * 3 + q.damage.modifier) * (1 - mod.defPhysRed),
          }
        },
        text: {
          damage: <span className="stat--ad">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth *2} / {q.damage.base + q.damage.growth *3}  (+{Math.round(q.damage.modifier * 100 / atk.attack)}% AD) physical damage</span>
        }
      },

      e: {
        cooldown: {
          1: e.cooldown.base
        },
        damage: {
          raw: {
            1: e.damage.base + e.damage.modifier,
            2: e.damage.base + e.damage.growth + e.damage.modifier + e.damage.modifierGrowth,
            3: e.damage.base + (e.damage.growth + e.damage.modifierGrowth) * 2 + e.damage.modifier,
            4: e.damage.base + (e.damage.growth + e.damage.modifierGrowth) * 3 + e.damage.modifier,
          },

          mitigated: {
            1: (e.damage.base + e.damage.modifier) * (1 - mod.defPhysRed),
            2:  (e.damage.base + (e.damage.growth + e.damage.modifierGrowth) + e.damage.modifier) * (1 - mod.defPhysRed),
            3:  (e.damage.base + (e.damage.growth + e.damage.modifierGrowth) * 2 + e.damage.modifier) * (1 - mod.defPhysRed),
            4:  (e.damage.base + (e.damage.growth + e.damage.modifierGrowth) * 3 + e.damage.modifier) * (1 - mod.defPhysRed),
          }
        },
        text: {
          damage: <span className="stat--ad">{e.damage.base} / {e.damage.base + e.damage.growth} / {e.damage.base + e.damage.growth *2} / {e.damage.base + e.damage.growth *3}  (+{Math.round(e.damage.modifier * 100 / atk.attack)}% / {Math.round((e.damage.modifier + e.damage.modifierGrowth) * 100 / atk.attack)}% / {Math.round((e.damage.modifier + e.damage.modifierGrowth * 2) * 100 / atk.attack)}% / {Math.round((e.damage.modifier + e.damage.modifierGrowth * 3) * 100 / atk.attack)}% AD) physical damage 8 times</span>
        }
      }
    }
  }, [currentLevel, atk, mod])

  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> PERSEVERANCE
          </h4> 
          
          <p>
            Garen regenerates <span className="stat--hp"> {(1 + 0.3 * currentLevel).toFixed(1)}% (1% + 0.3% per level) of his missing health</span> per second.            
          </p>
          <p>
            Perseverance is disabled for 5 seconds whenever Garen takes damage from enemy champions, turrets, or epic monsters, or is hit by attacks or abilities, refreshing on subsequent damage and hits against him.
          </p>
          <p>
            When casting Demacian Justice and the target dies, moves out of range, becomes untargetable, or activates Zhonya’s Hourglass or Guardian Angel, spell will go on a 5s Cooldown.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DECISIVE STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.q.cooldown[1]).toFixed(1)} /
            {' '}{(calculations.q.cooldown[2]).toFixed(1)} /
            {' '}{(calculations.q.cooldown[3]).toFixed(1)} /
            {' '}{(calculations.q.cooldown[4]).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.q.damage.raw[1])} / 
            {' '}{Math.round(calculations.q.damage.raw[2])} / 
            {' '}{Math.round(calculations.q.damage.raw[3])} / 
            {' '}{Math.round(calculations.q.damage.raw[4])}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(calculations.q.damage.mitigated[1])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[2])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[3])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[4])}          
          </p>
    
          <p>
          Breaks free from all slows, becoming immune to them for 0.5 seconds and gaining <span className="stat--moveSpeed">35% ({Math.round(atk.moveSpeed * 35 / 100)}) Movement Speed</span> for 3 seconds.          
          </p>

          <p>
            The next attack within 2/2.5/3/3.5 seconds is empowered to deal an additional {calculations.q.text.damage} and silence the target for 1.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> COURAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
    
          <p>
          Reduce damage taken for <b>4 seconds</b>. For the 1 second, damage is reduced by <b className="stat--armor">70%</b> and Garen gains 70% Tenacity. <br />
          Damage is reduced by <b className="stat--armor">30%</b> for the remaining duration.
          <br />
          Tenacity reduces the duration of most movement impairing effects.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> JUDGMENT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(calculations.e.cooldown[1]).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Tick damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.e.damage.raw[1])} / 
            {' '}{Math.round(calculations.e.damage.raw[2])} / 
            {' '}{Math.round(calculations.e.damage.raw[3])} / 
            {' '}{Math.round(calculations.e.damage.raw[4])}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(calculations.e.damage.mitigated[1])} / 
            {' '}{Math.round(calculations.e.damage.mitigated[2])} / 
            {' '}{Math.round(calculations.e.damage.mitigated[3])} / 
            {' '}{Math.round(calculations.e.damage.mitigated[4])}          
          </p>

          <h5 className="stat--ad">
           Crit tick damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(calculations.e.damage.raw[1] * (135 / 100))} / 
            {' '}{Math.round(calculations.e.damage.raw[2] * (140 / 100))} / 
            {' '}{Math.round(calculations.e.damage.raw[3] * (145 / 100))} / 
            {' '}{Math.round(calculations.e.damage.raw[4] * (150 / 100))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(calculations.e.damage.mitigated[1] * (135 / 100))} / 
            {' '}{Math.round(calculations.e.damage.mitigated[2] * (140 / 100))} / 
            {' '}{Math.round(calculations.e.damage.mitigated[3] * (145 / 100))} / 
            {' '}{Math.round(calculations.e.damage.mitigated[4] * (1 - mod.defPhysRed) * (150 / 100))}          
          </p>
    
          <p>
          Rapidly spin in a bladestorm for 3 seconds, dealing {calculations.e.text.damage}, Enemies hit by the bladestorm's edge are critically struck for <span className="stat--critChance"> 135% / 140% / 145% / 150% damage</span>. <br />

          <b>Re-cast:</b> Stops spinning. <br />

          Deals 60% damage to minions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DEMACIAN JUSTICE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
    
          <p>
          Calls forth the might of Demacia to execute an enemy champion, dealing <span className="stat--critChance">150 / 250 / 350 (+15% of the target's missing health) (<span className="stat--ad"> +0.12% bonus AD</span>) true damage </span>. <br />
           Nearby enemies take <span className="stat--critChance">75 (+7.5% of their missing health) (<span className="stat--ad">+0.06% AD</span>) true damage </span>. <br />
          Deals a max of 600 damage to epic monsters.
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