import {useReducer, useMemo, useEffect} from 'react';

export default function aatrox({currentLevel, mod, bonus, atk, def, updateAbilitiesBonus}) {
  const initialState = {
    q: 1,
    ult: {
      level: 1,
      active: false
    }
  }
  
  const aatroxDispatcher = (state, action) => {
    switch (action.type) {
      case 'qToggleStage':
        return {
          ...state,
          q: state.q < 3 ? state.q + 1 : 1
        };
      case 'ultToggleState':
        return {
          ...state,
          ult: {
            level: state.ult.level,
            active: !state.ult.active
          }
        };
      case 'ultToggleLevel':
        return {
          ...state,
          ult: {
            level: state.ult.level < 3 ? state.ult.level + 1 : 1,
            active: state.ult.active
          }
        };
      default:
        return state;
    }
  };

  const [abilitiesEffects, dispatch] = useReducer(aatroxDispatcher, initialState)
  
  const calculations = useMemo(() => {
    const passive = {
      cooldown: {
        base: 24,
        growth: 0
      },

      damage: {
        base: (def.health * 5 / 100),
        growth: (def.health * 10 / 100)/14 * (Number(currentLevel)-1)
      },
    };

    const q = {
      cooldown: {
        base: 13,
        growth: 2,
      },

      damage: {
        base: 15,
        growth: 30,
        modifier: (atk.attack * 70 / 100),
        modifierGrowth: (atk.attack * 5 / 100),
        specialModifier: (0.75 + 0.25 * abilitiesEffects.q)
      }
    };

    const w = {
      cooldown: {
        base: 15,
        growth: 1
      },

      damage: {
        base: 25,
        growth: 15,
        modifier: (atk.attack * 40 / 100)
      }
    }; 

    const e = {
      cooldown: {
        base: 8,
        growth: 1
      },

      vampirism: {
        base: atk.attack * 19 / 100,
        growth: atk.attack * 2 / 100,
        
      }
    };

    const r = {
      cooldown: {
        base: 75,
        growth: 10
      },      
    }; 

    return {
      passive: {
        cooldown: passive.cooldown.base * mod.atkcdr,
        damage: {
          raw: passive.damage.base + passive.damage.growth,
          mitigated: (passive.damage.base + passive.damage.growth) * (1 - mod.defPhysRed)
        }
      },

      q: {
        cooldown: {
          1: q.cooldown.base * mod.atkcdr,
          2: (q.cooldown.base - q.cooldown.growth) * mod.atkcdr,
          3: (q.cooldown.base - q.cooldown.growth * 2) * mod.atkcdr,
          4: (q.cooldown.base - q.cooldown.growth * 3) * mod.atkcdr,
        },

        damage: {
          raw: {
            1: (q.damage.base + q.damage.modifier) * q.damage.specialModifier,
            2: (q.damage.base + q.damage.modifier + q.damage.growth + q.damage.modifierGrowth) * q.damage.specialModifier,
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2 + q.damage.modifierGrowth * 2) * q.damage.specialModifier,
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3 + q.damage.modifierGrowth * 3) * q.damage.specialModifier,
          },
          mitigated: {
            1: (q.damage.base + q.damage.modifier) * q.damage.specialModifier * (1 - mod.defPhysRed),
            2: (q.damage.base + q.damage.modifier + q.damage.growth + q.damage.modifierGrowth) * q.damage.specialModifier * (1 - mod.defPhysRed),
            3: (q.damage.base + q.damage.modifier + q.damage.growth * 2 + q.damage.modifierGrowth* 2) * q.damage.specialModifier * (1 - mod.defPhysRed),
            4: (q.damage.base + q.damage.modifier + q.damage.growth * 3 + q.damage.modifierGrowth * 3) * q.damage.specialModifier * (1 - mod.defPhysRed),
          }
        },

        text: {
          damage: <span className="stat--ad">{q.damage.base} / {q.damage.base + q.damage.growth} / {q.damage.base + q.damage.growth * 2} / {q.damage.base + q.damage.growth * 3} (+70% / 75% / 80% / 85% AD) physical damage</span>
        }
      },
      
      w: {
        cooldown: {
          1: w.cooldown.base * mod.atkcdr,
          2: (w.cooldown.base - w.cooldown.growth) * mod.atkcdr,
          3: (w.cooldown.base - w.cooldown.growth * 2) * mod.atkcdr,
          4: (w.cooldown.base - w.cooldown.growth * 3) * mod.atkcdr,
        },

        damage: {
          raw: {
            1: (w.damage.base + w.damage.modifier),
            2: (w.damage.base + w.damage.modifier + w.damage.growth),
            3: (w.damage.base + w.damage.modifier + w.damage.growth * 2),
            4: (w.damage.base + w.damage.modifier + w.damage.growth * 3),
          },
          mitigated: {
            1: (w.damage.base + w.damage.modifier) * (1 - mod.defPhysRed),
            2: (w.damage.base + w.damage.modifier + w.damage.growth) * (1 - mod.defPhysRed),
            3: (w.damage.base + w.damage.modifier + w.damage.growth * 2) * (1 - mod.defPhysRed),
            4: (w.damage.base + w.damage.modifier + w.damage.growth * 3) * (1 - mod.defPhysRed),
          }
        },

        text: {
          damage: <span className="stat--ad">{w.damage.base} / {w.damage.base + w.damage.growth} / {w.damage.base + w.damage.growth * 2} / {w.damage.base + w.damage.growth * 3} (+40% AD) physical damage</span>
        }
      },
      
      e: {
        cooldown: {
          1: e.cooldown.base * mod.atkcdr,
          2: (e.cooldown.base - e.cooldown.growth) * mod.atkcdr,
          3: (e.cooldown.base - e.cooldown.growth * 2) * mod.atkcdr,
          4: (e.cooldown.base - e.cooldown.growth * 3) * mod.atkcdr,
        },

        vampirism: {
          raw: {
            1: (e.vampirism.base),
            2: (e.vampirism.base + e.vampirism.growth),
            3: (e.vampirism.base + e.vampirism.growth * 2),
            4: (e.vampirism.base + e.vampirism.growth * 3),
          },
          mitigated: {
            1: (e.vampirism.base) * (1 - mod.defPhysRed),
            2: (e.vampirism.base + e.vampirism.growth) * (1 - mod.defPhysRed),
            3: (e.vampirism.base + e.vampirism.growth * 2) * (1 - mod.defPhysRed),
            4: (e.vampirism.base + e.vampirism.growth * 3) * (1 - mod.defPhysRed),
          }
        },

        text: {
          vampirism: <span className="stat--vamp">19% / 21% / 23% / 25% physical vamp</span>
        }
      },

      r: {
        cooldown: {
          1: r.cooldown.base * mod.atkcdr,
          2: (r.cooldown.base - r.cooldown.growth) * mod.atkcdr,
          3: (r.cooldown.base - r.cooldown.growth * 2) * mod.atkcdr
        },

        vampirism: {
          raw: {
            1: (e.vampirism.base) * 1.5,
            2: (e.vampirism.base + e.vampirism.growth) * 1.5,
            3: (e.vampirism.base + e.vampirism.growth * 2) * 1.5,
            4: (e.vampirism.base + e.vampirism.growth * 3) * 1.5,
          },
          mitigated: {
            1: (e.vampirism.base) * 1.5 * (1 - mod.defPhysRed),
            2: (e.vampirism.base + e.vampirism.growth) * 1.5 * (1 - mod.defPhysRed),
            3: (e.vampirism.base + e.vampirism.growth * 2) * 1.5 * (1 - mod.defPhysRed),
            4: (e.vampirism.base + e.vampirism.growth * 3) * 1.5 * (1 - mod.defPhysRed),
          }
        },
      }
    }
  }, [atk, def, mod, currentLevel, abilitiesEffects]);

  useEffect(() => {
    let payload = {};
    if (abilitiesEffects.ult.active) {
      payload = {
        aatroxUlt: abilitiesEffects.ult.level
      };
    } else {
      payload = {
        aatroxUlt: 0
      };
    }
    updateAbilitiesBonus(payload);
  }, [abilitiesEffects]);
  
  const abilities = [
    {
      description: <div className="abilityDescription">
      <h4><span className="marker--ability">P</span> DEATHBRINGER STANCE</h4>
      <p>
        Enhances his next attack every <abbr title="24 seconds base">{(calculations.passive.cooldown).toFixed(1)} seconds</abbr> to deal bonus <abbr title="5%-15% of terget's maximum Health based on level, pre/post-mitigation stats" className="stat--ad">{Math.round(calculations.passive.damage.raw)} / {Math.round(calculations.passive.damage.mitigated)} physical damage</abbr>  and <span className="stat--hp">heals</span>  himself for the same amount. <br />
        Stance's cooldown is reduced by 3 seconds when Aatrox hits a Champion or large monster with an attack or ability. <br />
        Max <b>50</b> damage against monsters. <br />
      </p>
    </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4><span className="marker--ability">1</span> THE DARKIN BLADE</h4>
          <h5>Cooldown:{' '}
          {' '}{(calculations.q.cooldown[1]).toFixed(1)} /  
          {' '}{(calculations.q.cooldown[2]).toFixed(1)} /  
          {' '}{(calculations.q.cooldown[3]).toFixed(1)} /  
          {' '}{(calculations.q.cooldown[4]).toFixed(1)}
          </h5>

          <h5 className="stat--ad">Damage:</h5>
          <p className="stat--ad">
            Pre-mitigation: 
            {' '}{Math.round(calculations.q.damage.raw[1])} / 
            {' '}{Math.round(calculations.q.damage.raw[2])} / 
            {' '}{Math.round(calculations.q.damage.raw[3])} / 
            {' '}{Math.round(calculations.q.damage.raw[4])}
          </p>
          
          <p className="stat--ad">
            Post-mitigation: 
            {' '}{Math.round(calculations.q.damage.mitigated[1])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[2])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[3])} / 
            {' '}{Math.round(calculations.q.damage.mitigated[4])}
          </p>

          <div>
            <p>Current stage: {abilitiesEffects.q}</p>
            <button onClick={()=> {dispatch({type:'qToggleStage'})}}>Change ability Stage</button>
          </div>

          <p>
            Swings his giant blade, dealing {calculations.q.text.damage}. This ability can be cast 2 more times, with each cast dealing 25% more damage.            
          </p>

          <p>
          Deals 65% damage to minions.
          </p>

          <p>
            Deals 70% damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
            <span className="marker--ability">2</span> INFERNAL CHAINS
          </h4>

          <h5>
            Cooldown: 
              {' '}{(calculations.w.cooldown[1]).toFixed(1)} / 
              {' '}{(calculations.w.cooldown[2]).toFixed(1)} / 
              {' '}{(calculations.w.cooldown[3]).toFixed(1)} / 
              {' '}{(calculations.w.cooldown[4]).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">
            Pre-mitigation: 
            {' '}{Math.round(calculations.w.damage.raw[1])} 
            {' '}/ {Math.round(calculations.w.damage.raw[2])} 
            {' '}/ {Math.round(calculations.w.damage.raw[3])} 
            {' '}/ {Math.round(calculations.w.damage.raw[4])}
          </p>
          
          <p className="stat--ad">
            Post-mitigation: 
            {' '}{Math.round(calculations.w.damage.mitigated[1])} / 
            {' '}{Math.round(calculations.w.damage.mitigated[2])} / 
            {' '}{Math.round(calculations.w.damage.mitigated[3])} / 
            {' '}{Math.round(calculations.w.damage.mitigated[4])}          
          </p>

          <p>
          Sends a chain dealing {calculations.w.text.damage} to the first enemy hit and slowing them by 25% for 1.5 seconds.
          </p>
          <p>
          If a champion or large monster remains within the imapct area after 1.5 seconds, they will be dragged back to the center and take the same damage again.
          </p>
          <p>
            Deals double damage to minions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4><span className="marker--ability">3</span> UMBRAL DASH</h4>
          <h5>Cooldown: 
          {' '}{(calculations.e.cooldown[1]).toFixed(1)} / 
          {' '}{(calculations.e.cooldown[2]).toFixed(1)} / 
          {' '}{(calculations.e.cooldown[3]).toFixed(1)} / 
          {' '}{(calculations.e.cooldown[4]).toFixed(1)} 
          </h5>

          <h5 className="stat--vamp">
            On-hit heal:
          </h5>

          <p className="stat--vamp">Pre-mitigation: 
          {' '}{Math.round(calculations.e.vampirism.raw[1])} /             
          {' '}{Math.round(calculations.e.vampirism.raw[2])} /     
          {' '}{Math.round(calculations.e.vampirism.raw[3])} / 
          {' '}{Math.round(calculations.e.vampirism.raw[4])}
          </p>
          
          <p className="stat--vamp">Post-mitigation: 
          {' '}{Math.round(calculations.e.vampirism.mitigated[1])} /             
          {' '}{Math.round(calculations.e.vampirism.mitigated[2])} /     
          {' '}{Math.round(calculations.e.vampirism.mitigated[3])} / 
          {' '}{Math.round(calculations.e.vampirism.mitigated[4])}  
          </p>

          <p>
            <b>Passive:</b> Aatrox gains {calculations.e.text.vampirism} against enemy champions. <br />
            <b>Active:</b>  Dashes forward. This resets Aatrox's normal attack. Usable whie casting other abilities.            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> WORLD ENDER
          </h4>

          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--vamp">
            On-hit healing whive active:
          </h5>
          
          <p className="stat--vamp">Pre-mitigation: 
          {' '}{Math.round(calculations.r.vampirism.raw[1])} /             
          {' '}{Math.round(calculations.r.vampirism.raw[2])} /     
          {' '}{Math.round(calculations.r.vampirism.raw[3])} / 
          {' '}{Math.round(calculations.r.vampirism.raw[4])}</p>
          
          <p className="stat--vamp">Post-mitigation: 
          {' '}{Math.round(calculations.r.vampirism.mitigated[1])} /             
          {' '}{Math.round(calculations.r.vampirism.mitigated[2])} /     
          {' '}{Math.round(calculations.r.vampirism.mitigated[3])} / 
          {' '}{Math.round(calculations.r.vampirism.mitigated[4])}    
          </p>

          <div>
            <p>Ult effect: {abilitiesEffects.ult.active ? <span className='stat--hp'>Active</span> : <span className='stat--vamp'>Disabled</span>}</p>
            <p>Ult effect level: {abilitiesEffects.ult.level}</p>
            <br />
            <button onClick={() => { dispatch({ type: 'ultToggleState' }) }}>Toggle ult effect</button>
            <button onClick={() => { dispatch({ type: 'ultToggleLevel' }) }}>Toggle ult level</button>
          </div>



          <p>
          Unleashes his demonic form for <b>10</b> seconds, gaining: <span className='stat--ad'>30% / 40% / 50% Attack Damage</span>, <span className="stat--hp">25% / 35% / 45% increased healing</span> and <abbr title="60% / 80% / 100%" className="stat--moveSpeed">
              {Math.round(atk.moveSpeed * 60 / 100)} / 
              {' '}{Math.round(atk.moveSpeed * 80 / 100)} / 
              {' '}{Math.round(atk.moveSpeed)} decaying Movement Speed</abbr>. During this time, Umbral Dash's Physical Vamp is increased to <span className="stat--vamp">50%</span>. <br />
              World Ender's duration is extended by 5 seconds with a takedown, up to 10 extra seconds. <br />
              Nearby minions and monsters are feared for 3 seconds on activation.
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