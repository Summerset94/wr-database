export default function masteryi({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DOUBLE STRIKE
          </h4>
          <p>
          Every 4th consecutive attack strikes twice for a total of <abbr title="150% AD" className="stat--ad">{Math.round(atk.attack * 150 / 100)} ({Math.round((atk.attack * 150 / 100)*(1 - mod.defPhysRed))} post-mitigation) physical damage</abbr>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> ALPHA STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} 
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
            {' '}{Math.round(((30)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((70)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((110)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((150)+(atk.attack * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((30)+(atk.attack * 60 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((70)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((110)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((150)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
           Crit Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((30)+(atk.attack * 60 / 100))*1.6)} / 
            {' '}{Math.round(((70)+(atk.attack * 60 / 100))*1.6)} / 
            {' '}{Math.round(((110)+(atk.attack * 60 / 100))*1.6)} / 
            {' '}{Math.round(((150)+(atk.attack * 60 / 100))*1.6)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round((((30)+(atk.attack * 60 / 100)) * (1 - mod.defPhysRed))*1.6)} / 
            {' '}{Math.round((((70)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))*1.6)} / 
            {' '}{Math.round((((110)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))*1.6)} / 
            {' '}{Math.round((((150)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))*1.6)}          
          </p>
    
          <p>
          Becomes untargetable and strikes up to 4 enemies for <span className="stat--ad">30 / 70 / 110 / 150 (+60% AD) physical damage</span>.  If there are no other targets Master Yi will strike a previous target for <span className="stat--critChance">25% damage</span>.
          </p>
          <p>
          Attacks reduce the cooldown of Alpha Strike by 1 second.
          </p>
          <p>
          Deals 95/125/155/185 bonus damage to monsters. 
          </p>
          <p>
          Can critically strike, dealing <span className="stat--critChance">60% bonus damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> MEDITATE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(25*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">{Math.round(((40)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 25 / 100)))}
          </p>
    
          <p>
          Channels for up to 4 seconds, gaining <b>55/60/65/70% damage reduction</b> and healing for <span className="stat--hp">40 / 60 / 80 / 100 (<span className="stat--ap">+25% AP</span> ) health</span> each second. 
          </p>

          <p>
          Heal is increased the lower Master Yi's Health is, up to 100%.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> WUJU STYLE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--critChance">
            On-hit true damage:
          </h5>

          <p className="stat--critChance">
            {Math.round(((35)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((45)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((55)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((65)+(bonus.attack * 30 / 100)))}
          </p>


    
          <p>
           <b>PASSIVE:</b> gains <abbr title="8% AD" className="stat--ad">{Math.round((atk.attack)*8/100)} physical damage</abbr> while Wuju style is off cooldown
          </p>
          <p>
            <b>ACTIVE:</b> Attacks deal <span className="stat--critChance">35 / 45 / 55 / 65 (<span className="stat--ad">+30% bonus AD</span>) bonus true damage</span> for 5 seconds.
          </p>

          <p>
          Active true damage vs structures:  33%
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> HIGHLANDER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>
    
          <p>
            <b>PASSIVE:</b> Takedowns reduce Master Yi's basic ability cooldowns by 70%.
          </p>

          <p>
            <b>ACTIVE:</b> Becomes immune to slows, gains <abbr className="stat--moveSpeed" title='35 / 45 / 55%'>{Math.round(atk.moveSpeed * 35 / 100)} / {Math.round(atk.moveSpeed * 45 / 100)} / {Math.round(atk.moveSpeed * 55 / 100)} Movement Speed</abbr> and <abbr title="30 / 50 / 70%" className="stat--as">{(champ.asBase * 30 / 100).toFixed(3)} / {(champ.asBase * 50 / 100).toFixed(3)} / {(champ.asBase * 70 / 100).toFixed(3)} Attack Speed</abbr>  for 7 seconds. Takedowns extend the duration by 7 seconds.
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