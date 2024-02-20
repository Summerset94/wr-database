export default function lillia({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DREAM-LADEN BOUGH
          </h4>
    
          <p>
          Lillia's abilities apply <b>Dream Dust</b>, dealing <span className="stat--ap">{Math.round(def.health * (6 + (atk.ap * 0.012))/100 * (1 - mod.defMagRed))}</span> <u>for current target</u> (<abbr title="6% + 0.012% AP" className="stat--ap">{(6 + (atk.ap * 0.012)).toFixed(2)}% Max Health magic damage</abbr>) over 3 seconds.
          </p>
          <p>
            Lillia restores <abbr title="20 - 76 based on level + 6% ap" className="stat--hp">{Math.round(16 + (4 * currentLevel) + (atk.ap * 6 / 100))} health</abbr> over the duration against <b>monsters</b> and <abbr title="10 - 108 based on level + 15% ap" className="stat--hp">{Math.round(3 + (7 * currentLevel) + (atk.ap * 15 / 100))}  health</abbr> against champions.
          </p>
          <p>
            Cap damage against monsters: <abbr title="60 - 144 based on level" className="stat--ap">{Math.round(54 + 6 * currentLevel)} magic damage</abbr>. Dream Dust heals is 33% effective for each source beyond the first.
            Dream Dust can only heal from one monster at a time.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BLOOMING BLOWS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 35 / 100)))} + <span className="stat--critChance">{Math.round(((35)+(atk.ap * 35 / 100)))}</span> / 
            {' '}{Math.round(((50)+(atk.ap * 35 / 100)))} + <span className="stat--critChance">{Math.round(((55)+(atk.ap * 35 / 100)))}</span> / 
            {' '}{Math.round(((65)+(atk.ap * 35 / 100)))} + <span className="stat--critChance">{Math.round(((75)+(atk.ap * 35 / 100)))}</span> / 
            {' '}{Math.round(((80)+(atk.ap * 35 / 100)))} + <span className="stat--critChance">{Math.round(((95)+(atk.ap * 35 / 100)))}</span>
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 35 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((50)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((65)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            <b>PASSIVE: </b> Lillia's Ability hits grant <span className="stat--moveSpeed">3 / 4 / 5 / 6 (<span className="stat--ap">+2% AP</span>) Movement Speed</span> for 6 seconds, stacking up to 4 times.
          </p>

          <p>
            <b>ACTIVE:</b> Lillia whirls her censer, dealing <span className="stat--ap">35 / 50 / 65 / 80 (+35% AP) magic damage</span>, plus additional <span className="stat--critChance">35 / 55 / 75 / 95 (<span className="stat--ap">+35% AP</span>) true damage</span> at the outer edge.
          </p>

          <p>
            Deals 110% damage to monsters
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> WATCH OUT! EEP!
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65}
          </h5>
          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--critChance">
            Center Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100))*2)} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)*2))} / 
            {' '}{Math.round(((140)+(atk.ap * 40 / 100)*2))} / 
            {' '}{Math.round(((180)+(atk.ap * 40 / 100)*2))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))*2} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))*2} / 
            {' '}{Math.round(((140)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))*2} / 
            {' '}{Math.round(((180)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))*2}          
          </p>

    
          <p>
          Lillia winds up a huge strike, dealing <span className="stat--ap">60 / 100 / 140 / 180 (+40% AP) magic damage</span>. Enemies in the center take <span className="stat--ap">120 / 200 / 280 / 360 (+80% AP) magic damage</span> instead.
          </p>
          <p>
            Deals 50% damage to minions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SWIRLSEED
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((175)+(atk.ap * 45 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((105)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((175)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Lillia lobs a swirlseed overhead, dealing <span className="stat--ap">70 / 105 / 140 / 175 (+45% AP) magic damage</span> where it lands and revealing champions hit Slowing them by <span className="stat--moveSpeed">40%</span>  for 3 seconds. If no enemies are hit, the deed rolls until it hits an enemy or collides with terrain.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> LILTING LULLABY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(100*mod.atkcdr).toFixed(1)} / 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Lillia causes all enemy champion with Dream Dust  to become Drowsy for 1.5 seconds. Afterward, they fall Asleep for <b>2/2.3/2.5</b> sesonds.
          </p>
          <p>
          When awakened by damage, they take an additional <span className="stat--ap">100 / 150 / 200 (+40% AP) magic damage</span>.
          </p>

          <p>
          Drowsy units are slowed over the duration, and fall Asleep afterwards.
          Asleep units can't move or act until damaged by an enemy with non-periodic damage.
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