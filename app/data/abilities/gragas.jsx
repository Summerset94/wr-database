export default function gragas({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> HAPPY HOUR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}<abbr title="Static, not affected by Ability Haste"> {(8).toFixed(1)}</abbr>
          </h5>         
    
          <p>
           Casting an ability restores <abbr title="7% of Max Health" className="stat--hp">{Math.round(atk.health * 7 / 100)}</abbr> Health.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BARREL ROLL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} / 
            {' '}{80} 
          </h5>
          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((175)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((175)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Rolls a cask to target location that explodes upon re-casting or after 3 seconds. Enemies hit take <span className='stat--ap'>65 / 120 / 175 / 230 (+70% AP) magic damage</span>  and are slowed by <span className="stat--moveSpeed"> 30% / 35% / 40% / 45% for 2 seconds</span>. <br />
          The damage and slow amount increase over the first 1.5 seconds, by up to <b className="stat--critChance">150%</b>. <br />
          The cask reveals the area and deals 50% damage to minions. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> DRUNDKEN RAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} 
          </h5>

          <h5 className="stat--armor">Damage reduction:</h5>
          <p className="stat--armor:">
          {' '}{Math.round((8) + (atk.ap * 4 / 10000))}% /
          {' '}{Math.round((11) + (atk.ap * 4 / 10000))}% /
          {' '}{Math.round((14) + (atk.ap * 4 / 10000))}% /
          {' '}{Math.round((17) + (atk.ap * 4 / 10000))}%
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.ap * 75 / 100) + (def.health * 7 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 75 / 100) + (def.health * 7 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 75 / 100) + (def.health * 7 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 75 / 100) + (def.health * 7 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.ap * 75 / 100) + (def.health * 7 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 75 / 100) + (def.health * 7 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 75 / 100) + (def.health * 7 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 75 / 100) + (def.health * 7 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Reduces damage taken by <span className="stat--armor">8% / 11% / 14% / 17% (<span className="stat--ap">+0.04% AP</span>)</span>  for 2.5 seconds. <br />

        The next attack within 5 seconds after drinking is empowered to splash enemies for bonus <span className="stat--ap">20 / 60 / 100 /140 (+75% AP) <span className="stat--hp">(+7% target's Max Health)</span> magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> BODY SLAM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((275)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((275)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Charges forward, colliding with the first enemy hit to deal <span className="stat--ap">80 / 145 / 210 / 275 (+70% AP) magic damage</span> to nearby enemies. Enemies hit are also bumped backwards, stunning them for <b>1</b> second. <br />
          Body Slam's cooldown is reduced by 3 seconds if it succesfully collides with an enemy.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> EXPLOSIVE CASK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
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

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((400)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((300)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((400)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Hurls a potent cask that explodes when it lands, dealing <span className="stat--ap">200 / 300 / 400 (+70% AP) magic damage</span> and knocking enemies away from the explosion's center. The cask has a fixed travel time.
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