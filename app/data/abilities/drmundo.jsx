export default function drmundo({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> GOES WHERE HE PLEASES
          </h4>
    
          <p>
          Resists the first immobilizing effect, losing <span className="stat--hp">3% current Health</span> instead and dropping a Chemical Canister nearby. <br />
          
           Retrieving the Canister reduces cooldown by <b>10</b> seconds and heals Dr. Mundo for <abbr title="4% of Max Health" className="stat--hp">{Math.round(atk.health * 4 / 100)} health</abbr>  <abbr title="at level 1 / 5 / 9 / 13">(40 / 30 / 20 / 10 second CD)</abbr>. Regenerates <abbr title="1%-2% based on level of Max Health" className="stat--hp">{Math.round(atk.health * (1 + 1/14*(currentLevel-1)) /100)} health </abbr>every 5 seconds. <br />
            Enemy champions destroy the Canister if they reach it first.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> INFECTED BONESAW
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--hp">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">Damage target at 100% hp</h5>
          <p className="stat--ap">
            {' '}{Math.max(Math.round((def.health * 20/100)* (1 - mod.defMagRed)), 90)} /
            {' '}{Math.max(Math.round((def.health * 23/100)* (1 - mod.defMagRed)), 160)} /
            {' '}{Math.max(Math.round((def.health * 26/100)* (1 - mod.defMagRed)), 230)} /
            {' '}{Math.max(Math.round((def.health * 29/100)* (1 - mod.defMagRed)), 300)}
          </p>
    
          <p>
            Throw bonesaw, dealing magic damage equal to <span className="stat--ap">20% / 23% / 26% / 29% of the target's current Health ( min: 90 / 160 / 230 / 300)</span>  and slowing them by <span className="stat--moveSpeed">40%</span>  for 2 seconds. <br />
            If bonesaw hits an enemy restore half of it's health cost. restore 100% upon hitting Champions or Monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> HEART ZAPPER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--hp">
          Cost: 
            {' '}{5}% Current Health
          </h5>

          <h5 className="stat--ap">
            Damage per tick:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.ap * 0 / 100)))} / 
            {' '}{Math.round(((40)+(atk.ap * 0 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 0 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 0 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.ap * 0 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((40)+(atk.ap * 0 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 0 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 0 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ap">
            Detonation damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(bonus.health * 7 / 100)))} / 
            {' '}{Math.round(((40)+(bonus.health * 7 / 100)))} / 
            {' '}{Math.round(((60)+(bonus.health * 7 / 100)))} / 
            {' '}{Math.round(((80)+(bonus.health * 7 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(bonus.health * 7 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((40)+(bonus.health * 7 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(bonus.health * 7 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(bonus.health * 7 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Charges a defibrillator for 4 seconds, dealing <span className="stat--ap">20 / 40 / 60 / 80 magic damage</span> per second to nearby enemies.
            <b>RECAST:</b> Detonates the defibrillator, dealing <span className="stat--ap">20 / 40 / 60 / 80 <span className="stat--hp">(+7% bonus HP) </span>magic damage</span> to nearby enemies. If the detonation damaged an enemy, Dr. Mundo heals for <span className="stat--hp">15%</span> of the damage taken <u>during Heart Zapper's duration</u>.  If it damaged a champion or monster he heals <span className="stat--hp">30% / 35% / 40% / 45%</span> instead.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> BLUNT FORCE TRAUMA
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--hp">
          Cost: 
            {' '}{10} / 
            {' '}{20} / 
            {' '}{30} / 
            {' '}{40} 
          </h5>

          <h5 className="stat--ad">
            Min damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((5)+(bonus.health * 7 / 100)))} / 
            {' '}{Math.round(((20)+(bonus.health * 7 / 100)))} / 
            {' '}{Math.round(((35)+(bonus.health * 7 / 100)))} / 
            {' '}{Math.round(((50)+(bonus.health * 7 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((5)+(bonus.health * 7 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((20)+(bonus.health * 7 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(bonus.health * 7 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(bonus.health * 7 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--ad">
           Max damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((5)+(bonus.health * 7 / 100))*(160/100))} / 
            {' '}{Math.round(((20)+(bonus.health * 7 / 100))*(160/100))} / 
            {' '}{Math.round(((35)+(bonus.health * 7 / 100))*(160/100))} / 
            {' '}{Math.round(((50)+(bonus.health * 7 / 100))*(160/100))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((5)+(bonus.health * 7 / 100)*(160/100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((20)+(bonus.health * 7 / 100)*(160/100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(bonus.health * 7 / 100)*(160/100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(bonus.health * 7 / 100)*(160/100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Passive: Dr. Mundo gains <span className="stat--ad">15 / 20 / 25 / 30, plus up to 30 / 45 / 50 / 60 Attack Damage</span> based on his missing health.

          Active: Empowers his next attack to deal an addition <span className="stat--ad">5 / 20 / 35 / 50 <span className="stat--hp">(+7% bonus HP)</span> physical damage</span>, increased by up to <abbr title="max bonus at 40% missing health">60%</abbr> based on Dr. Mundo's missing heath.

          Dr. Mundo swats the target away if it was killed or was a small monster, dealing the same damage to enemies.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> MAXIMUM DOSAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--hp">
            Healing:
          </h5>
            <p className="stat--hp">
              {Math.round(atk.health * 15 / 100)} /
              {' '}{Math.round(atk.health * 35 / 100)} /
              {' '}{Math.round(atk.health * 55 / 100)}
            </p>

            <h5 className="stat--ad">
              Bonus AD:
              {' '}{Math.round(bonus.health * 4 / 100)} /
              {' '}{Math.round(bonus.health * 5.5 / 100)} / 
              {' '}{Math.round(bonus.health * 7 / 100)}
            </h5>
    
          <p>
            Dr. Mundo's base Health is increased by <span className="stat--hp">25% / 30% / 35% of his missing Health</span>. He also gains <span className="stat--ad">Attack Damage equal to 4% / 5.5% / 7% bonus HP</span>, <span className="stat--moveSpeed">15% / 25% / 35% Movement Speed for 10 seconds</span> and heals <span className="stat--hp">15% / 35% / 55%</span> of his maximum Health over the duration.
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