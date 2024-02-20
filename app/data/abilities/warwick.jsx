export default function blank({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> ETERNAL HUNGER
          </h4>
    
          <p>
            Attacks deal an additional <abbr className="stat--ap" title='12-46 (~2.43 per level) +15% bonus AD + 10%AP'>{Math.round((12)+(34/14*(currentLevel-1))+(bonus.attack * 15 / 100)+(atk.ap * 10 / 100))} magic damage</abbr> on hit.
          </p>

          <p>
           While below <span className="stat--hp">50% health heal for 100% of the damage dealt</span> by <b>Eternal Hunger</b>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> JAWS OF THE BEAST
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Base: 
            {' '}{Math.round(((atk.attack * 120/100)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Current target: 
            {' '}{Math.round(((atk.attack * 120/100)+(atk.ap * 100 / 100)+(def.health * 7 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((atk.attack * 120/100)+(atk.ap * 100 / 100)+(def.health * 8 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((atk.attack * 120/100)+(atk.ap * 100 / 100)+(def.health * 9 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((atk.attack * 120/100)+(atk.ap * 100 / 100)+(def.health * 10 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--hp">
            Healing (from current target):
          </h5>

          <p className="stat--hp">
          {' '}{Math.round(((bonus.attack * 120)+(atk.ap * 100 / 100)+(def.health * 7 / 100)) * (1 - mod.defMagRed) *37.5/100)} / 
            {' '}{Math.round(((bonus.attack * 120)+(atk.ap * 100 / 100)+(def.health * 8 / 100))* (1 - mod.defMagRed) *50/100)} / 
            {' '}{Math.round(((bonus.attack * 120)+(atk.ap * 100 / 100)+(def.health * 9 / 100))* (1 - mod.defMagRed) *62.5/100)} / 
            {' '}{Math.round(((bonus.attack * 120)+(atk.ap * 100 / 100)+(def.health * 10 / 100))* (1 - mod.defMagRed) *75/100)}          
          </p>
    
          <br />
          <p>
            Lunges forward and bites the target enemy, dealing <span className="stat--ap">(<span className="stat--ad">120% AD</span>) (<span className="stat--ap">+100% AP</span>) (<span className="stat--hp">+7 / 8 / 9 / 10% of target's Max Health</span>) magic damage</span> and <span className="stat--hp">healing for 37.5 / 50 / 62.5 / 75%</span> of damage dealt.
          </p>

          <p>
            <b>Hold:</b> Warwick also clamps on the target, leaping behind them and following their movement.
          </p>

          <p>
            Applies on-hit effects. The bonus damage is capped at 100/125/150/175 against monsters. <br />
            
            Deals 50% bonus damage to minions. Refunds 50% of the cooldown when killing a minions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BLOOD HUNT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70}
          </h5>
    
          <br />
          <p>
            <b>Passive:</b> Marks enemy champions <span className="stat--hp"> below 50% health </span>, gaining <span className="stat--moveSpeed"> 40 / 45 / 50 / 55% Movement Speed</span> towards them and gaining <abbr title="60 / 70 / 80 / 90%" className="stat--as">{(champ.asBase * 60 / 100).toFixed(3)} / {(champ.asBase * 70 / 100).toFixed(3)} / {(champ.asBase * 80 / 100).toFixed(3)} / {(champ.asBase * 90 / 100).toFixed(3)} Attack Speed</abbr> against them. These bonuses are enhanced to 150% of their value against targets below <span className="stat--hp"> 35% health</span>.
          </p>

          <p>
            <b>Active:</b> Briefly senses all enemies and marks the closest champion for 8 seconds. Can not be used while in combat with champions.
          </p>

          <p>
            Warwick can only passively sense enemies who were brought below <span className="stat--hp">50% Health</span> by allies.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> PRIMAL HOWL
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
            {' '}{40}
          </h5>
    
          <br />
          <p>
            Warwick gains <span className="stat--hp">35 / 40 / 45 / 50% damage reduction</span> for 2.5 seconds. After it ends, Warwick howls, fearing nearby enemies and causing them to flee from him for 1 second(s), during which they are <span className="stat--moveSpeed">slowed by 90%.</span> 
          </p>

          <p>
            <b>Recast:</b> End the ability early (ending early does not cancel the damage reduction prematurely).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> INFINITE DURESS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((175)+(bonus.attack * 167 / 100)))} / 
            {' '}{Math.round(((350)+(bonus.attack * 167 / 100)))} / 
            {' '}{Math.round(((525)+(bonus.attack * 167 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((175)+(bonus.attack * 167 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(bonus.attack * 167 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((525)+(bonus.attack * 167 / 100))* (1 - mod.defMagRed))}    
          </p>
    
          <br />
          <p>
            Warwick leaps in a huge distance that scales with his Move Speed, Suppressing the first champion he collides with while he channels for 1.5 seconds. He attacks that champion 3 times over the duration, applying On-Hit effects and dealing <span className="stat--ap">175 / 350 / 525 (<span className="stat--ad">+167% bonus AD</span>) magic damage</span>.  Warwick restores Health equal  to <span className="stat--hp">100% of all damage dealt during the channel</span>.
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