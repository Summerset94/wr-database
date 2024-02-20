export default function khazix({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> UNSEEN THREAT
          </h4>
    
          <p>
            Kha'zix enhances his next autoattack against enemy champions to deal bonus <abbr title='10 + 8 per level + 50% bonus AD; pre-/post-mitigation damage' className="stat--ap">{Math.round((10)+(8*currentLevel)+(bonus.attack * 50 /100))} ({Math.round(((10)+(8*currentLevel)+(bonus.attack * 50 /100))* (1 - mod.defMagRed))}) Magic Damage</abbr> and slow them by <span className="stat--moveSpeed">25%</span> for 2 seconds.
          </p>

          <p>
            Unseen Threat is refreshed when the enemy team loses sight of Kha'Zix. Isolation radius 300 units, internal cooldown 5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> TASTE THEIR FEAR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(3.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((55)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((90)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((125)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 130 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((55)+(bonus.attack * 130 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((125)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Slashes with his claws, dealing <span className="stat--ad ">55 / 90 / 125 / 160 (+130% bonus AD) physical damage</span>. If the target is <b>isolated</b>, damage is increased by <span className="stat--critChance">100%</span>.
          </p>

          <p>
          <b>Evolve:</b> Attacks and Taste Their Fear gain 50 range and 30% of Taste Their Fear's cooldown is refunded against isolated target.
          </p>          
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> VOID SPIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((200)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((200)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--hp">Healing:</h5>
          <p className="stat--hp">
            {Math.round((40)+(atk.ap* 50 /100))} /
            {' '}{Math.round((75)+(atk.ap* 50 /100))} /
            {' '}{Math.round((110)+(atk.ap* 50 /100))} /
            {' '}{Math.round((145)+(atk.ap* 50 /100))}
          </p>

              
          <p>
            Fires spikes that deal <span className="stat--ad">80 / 120 / 160 / 200 (+100% bonus AD) physical damage</span>.
          </p>

          <p>
            HEals himself for <span className="stat--hp">40 / 75 / 110 / 145 (<span className="stat--ap">+50% AP</span>) health</span> if he is within explosion
          </p>

          <p>
            <b>EVOLVE:</b> Fires two additional spikes and slows enemies by <span className="stat--moveSpeed">60%</span> for 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> LEAP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((65)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((110)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((155)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((200)+(bonus.attack * 20 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((65)+(bonus.attack * 20 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((110)+(bonus.attack * 20 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((155)+(bonus.attack * 20 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((200)+(bonus.attack * 20 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Leaps to target area, dealing <span className="stat--ad">65 / 110 / 155 / 200 + (20% bonus AD) physical damage</span>.
          </p>

          <p>
            <b>Evolve:</b> Gain 250 range on Leap. Leap's cooldown is reset on champion takedowns.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> VOID ASSAULT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>
    
          <p>
            <b>Passive:</b> Each rank in Void Assault allows Kha'Zix to evolve one of his abilities.
          </p>

          <p>
            <b>Active:</b> Becomes Invisible and gain <abbr title="40%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 40 / 100)} Movement Speed</abbr>  for 1.25 seconds. Void Assault can be cast again within 10 seconds.
          </p>

          <p>
            <b>Evolve:</b> Invisibility duration is increased to 2 seconds and can be cast up to three times.
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