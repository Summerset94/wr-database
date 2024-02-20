export default function hecarim({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> WARPATH
          </h4>

    
          <p>
            Hecarim gains <abbr title="12% bonus MoveSpeed" className="stat--ad">{Math.round(bonus.moveSpeed * 12 / 100)} bonus Attack Damage</abbr>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> RAMPAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(3.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(3*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{28} / 
            {' '}{32} / 
            {' '}{36} / 
            {' '}{40} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((5)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((15)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((25)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((35)+(atk.attack * 110 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((5)+(atk.attack * 110 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((15)+(atk.attack * 110 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((25)+(atk.attack * 110 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(atk.attack * 110 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           <b>TAP:</b> Hecarim charges his halberd for up to <b>0.75 seconds</b>, increasing the area Hecarim will deal damage to.
           <br />
           <b>CAST:</b> Hecarim swings his haleberd, dealing up to <span className="stat--ad">5 / 15 / 25 / 35 (+110% AD) physical damage </span>based on charge time. <br />

           If Hecarim hits an enemy champion or a large monster with a full charge, he <span className="stat--critChance">critically strikes them for 120% damage</span>  and gains a <span className="stat--moveSpeed">40% Movement Speed</span> bonus that decays over 3 seconds. <br />
           This also empowers Hecarim's next Rampage within the next 8 seconds to deal <span className="stat--ad">125% damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SPIRIT OF DREAD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((20)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((25)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((30)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((20)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((25)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((30)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--hp">Base Healing:</h5>
          <p className="stat--hp">
          {Math.round(5 + (atk.health / 100))} /
          {' '}{Math.round(10 + (atk.health / 100))} /
          {' '}{Math.round(15 + (atk.health / 100))} /
          {' '}{Math.round(20 + (atk.health / 100))}
          </p>
    
          <p>
            Gains <span className="stat--armor">6 / 12 / 18 / 24 Armor</span> and <span className="stat--magres">Magic Resist</span>, and heals himself for <span className="stat--hp">5 / 10 / 15 / 20 (+1% HP) Health</span>. <br />
            Deals <span className="stat--ap">15 / 20 / 25 / 30 (+20% AP) magic damage over 4 seconds</span> to nearby enemies. <br />
            Dealing damage to enemies heals him for <span className="stat--ad">(20% of damage dealt + 0.02% bonus AD)</span> % of his Health. Healing from minions and monsters is reduced by 50% and capped at <span className="stat--hp">90 Health</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> DEVASTATING CHARGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((5)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((10)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((15)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((20)+(bonus.attack * 30 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((5)+(bonus.attack * 30 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((10)+(bonus.attack * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((15)+(bonus.attack * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((20)+(bonus.attack * 30 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Gains <span className="stat--moveSpeed">25% ({Math.round(atk.moveSpeed * 25 / 100)}) Movement Speed, wich increases to 65% ({Math.round(atk.moveSpeed * 65 / 100)})</span>  over 4 seconds. <br />

            Hecarim dashes toward the enemy if his next attack is withing 5 seconds, dealing <span className="stat--ad">5 / 10 / 15 / 20 (+30% bonus AD) physical damage</span> and kocking them back. <br />

            He will also pursue the enemy that was knocked back. The remaining duration of this ability is paused during <b>Onslaught of Shadows</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> ONSLAUGHT OF SHADOWS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(100*mod.atkcdr).toFixed(1)} / 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Hecarim summons spectral riders and charges forward, dealing <span className="stat--ap">150 / 250 / 350 (+100% AP) magic damage</span>. <br />
          Hecarim unleashes a shockwave at the end of the charge that Fears for between <b>0.75 to 1.5 seconds</b>, increased by charge distance.
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