export default function caitlyn({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> HEADSHOT
          </h4>    
          <p>
            After 6 basic attacks (basic attacks from bush counts as 2) the next basic attack deals <abbr title="50% - 100% based on level +125% critical strike chance. Shown pre/post-mitigation number" className="stat--ad">{Math.round(atk.attack* (50 + (currentLevel < 12 ? (5 * currentLevel - 1): (50))+ (atk.critChance*125))/100)} ({Math.round((atk.attack* (50 + (currentLevel < 12 ? (5 * currentLevel - 1): (50))+ (atk.critChance*125))/100)*(1 - mod.defPhysRed))}) bonus physical damage</abbr>. <b>Trapped</b> or <b>Netted</b> enemies trigger a Headshot that has double range.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PILLTOVER PEACEMAKER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 125 / 100)))} / 
            {' '}{Math.round(((110)+(atk.attack * 140 / 100)))} / 
            {' '}{Math.round(((160)+(atk.attack * 155 / 100)))} / 
            {' '}{Math.round(((210)+(atk.attack * 170 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 125 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((110)+(atk.attack * 140 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(atk.attack * 155 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((210)+(atk.attack * 170 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Fires a narrow piercing bullet that deals <span className="stat--ad"> 60 / 110 / 160 / 210 (+ 125% / 140% / 155% / 170% AD) physical damage</span>. Hitting an enemy expands the bullet, but reduces subsequent damage by <b>40%</b>. Always deals full damage to trapped or netted enemies.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> YORDLE SNAP TRAP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(27*mod.atkcdr).toFixed(1)} / 
            {' '}{(22*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} 
          </h5>
          <h5>
            Active traps: 2 / 3 / 4 / 5
          </h5>
    
          <p>
            Sets a trap. Enemy champions caught are immobilized for 1.5 seconds, revealed for a short duration and trigger a free <b>Headshot</b> on them. Traps last for 30 seconds and  2 / 3 / 4 / 5 can be active at once.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> 90 CALIBER NET
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75} / 
            {' '}{75} / 
            {' '}{75} / 
            {' '}{75} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Fires a net, knocking Caitlyn backwards. The net deals <span className="stat--ap">70 / 120 / 170 / 220 (+80% AP) magic damage</span> slows champion hit by 50% for 1.5 seconds and triggers a free <b>Headshot</b> on them.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> ACE IN THE HOLE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
          Minimum damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(atk.attack * 200 / 100)))} / 
            {' '}{Math.round(((375)+(atk.attack * 200 / 100)))} / 
            {' '}{Math.round(((550)+(atk.attack * 200 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(atk.attack * 200 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((375)+(atk.attack * 200 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((550)+(atk.attack * 200 / 100))* (1 - mod.defPhysRed))}        
          </p>
    
          <p>
            Lines up the perfect shot, Revealing an enemy champion for 1.5 seconds before dealing <span className="stat--ad">200 / 375 / 550 (+200% AD) <span className="stat--hp">(+20% of target's missing health)</span> physical damage</span>. Enemy champions can intercept the bullet before it hits their ally.
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