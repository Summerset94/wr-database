export default function wukong({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CRUSHING BLOWS
          </h4>
    
          <p>
            <b>Stone skin</b>: Wukong gains stacks of <b>Stone Skin</b> when he attacks enemy champions with base attacks and abilities. Each stack grants him <span className="stat--ad"> {Number(10 + Math.floor(0.5 * (currentLevel - 1)))} (10-18 based on level) Armor</span> and <span className="stat--hp">{(atk.health * 1.5/100).toFixed(1)} (1.5% max health)</span> regeneration every 5 seconds, up to 3 stacks.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> GOLDEN STAFF
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 35 / 100)))} / 
            {' '}{Math.round(((90)+(atk.attack * 40 / 100)))} / 
            {' '}{Math.round(((120)+(atk.attack * 45 / 100)))} / 
            {' '}{Math.round(((150)+(atk.attack * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 35 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(atk.attack * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(atk.attack * 45 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((150)+(atk.attack * 50 / 100))* (1 - mod.defPhysRed))}          
          </p>          
    
          <br />
          <p>
            Gains 150 range for his next attack after casting an ability for 5 seconds.
          </p>

          <p>
            Empowers his next attack to deal an additional <span className="stat--ad">60/90/120/150 (+35 / 40 / 45 / 50% AD) physical damage</span>.
          </p>

          <p>
            Wukong and his clone's attacks reduce Golden Staff's cooldown by 0.5 seconds.            
          </p>

          <p>
            <b>Passive:</b> Golden Staff adds an empowering effect (Q/S1 damage) on Wukong’s base attacks every 12s. Takedowns will reduce Golden Staff’s passive Cooldown by 2s. The Cooldown of the passive will be reduced by 2s per level, and killing enemy champions will refresh the Cooldown.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> WARRIOR TRICKSTER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{75} 
          </h5>
    
          <br />
          <p>
            Becomes invisible for 1 seconds, leaving behind a clone for 3 / 3.5 / 4 / 4.5 seconds that attacks nearby enemies for <span className="stat--ad">20 / 30 / 40 / 50% damage.</span>
          </p>

          <p>
          Now the clone can move with the joystick control and can mimic Nimbus Strike to dash.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> NIMBUS STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((200)+(bonus.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((200)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Dashes to a target dealing <span className="stat--ad">80 / 120 / 160 / 200 (+80% bonus AD) physical damage</span>. 
          </p>

          <p>
            Gains <abbr title="25/35/45/55%" className="stat--as">{(champ.asBase * 25 / 100).toFixed(3)} / {(champ.asBase * 35 / 100).toFixed(3)} / {(champ.asBase * 45 / 100).toFixed(3)} / {(champ.asBase * 55 / 100).toFixed(3)} Attack Speed</abbr>  for 4 seconds after dashing.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CYCLONE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Base: 
            {' '}{Math.round(atk.attack * 220 / 100)}
          </p>

          <p className="stat--ad">Current target: 
            {' '}{Math.round(((def.health * 10 / 100)+(atk.attack * 220 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((def.health * 14 / 100)+(atk.attack * 220 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((def.health * 18 / 100)+(atk.attack * 220 / 100))* (1 - mod.defPhysRed))}   
          </p>
    
          <br />
          <p>
            Extends his staff and spins to gain <span className="stat--moveSpeed">20% Movement Speed</span>, dealing  damage equal to <span className="stat--ad">(220% AD) (<span className="stat--hp">+10 / 14 / 18% of target's Max Health</span>) as physical damage</span> over 2 seconds. Enemies that are hit for the first time are knocked up.
          </p>

          <p>
            Can be recast once within 8 seconds. Clone mimics the cast and also knocks up target's and deal reduced damage.
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