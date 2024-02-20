export default function janna({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> TAILWIND
          </h4>
          <h5 className="stat--moveSpeed">Bonus Movement Speed: {Math.round((champ.moveSpeed + bonus.moveSpeed)*5/100)}</h5>
    
          <p>
            Passively gains <span className="stat--moveSpeed">5% bonus Movement Speed</span>. Nearby allied champions also gain the same bonus
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> Howling gale
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
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

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Charges up for 0.75 seconds and summons a powerful whirlwind that deals <span className="stat--ap">60 / 100 / 140 / 180 (+50% AP) magic damage</span> and kocks up enemies in its path. <br />

          The whirlwind always reaches its destination in 0.5 seconds. This ability's charges are stored once every 12 seconds, up to a maximum of 2 charges.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ZEPHYR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} 
          </h5>

          <h5 className="stat--moveSpeed">Movement speed bonus:</h5>
          <p className="stat--moveSpeed"> 
          {Math.round((champ.moveSpeed + bonus.moveSpeed)*10/100)} /
          {' '}{Math.round((champ.moveSpeed + bonus.moveSpeed)*15/100)} /
          {' '}{Math.round((champ.moveSpeed + bonus.moveSpeed)*20/100)} /
          {' '}{Math.round((champ.moveSpeed + bonus.moveSpeed)*25/100)}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 50 / 100)+(champ.moveSpeed * 0.05 + bonus.moveSpeed + ((champ.moveSpeed + bonus.moveSpeed) * 10/100))*20/100))} / 
            {' '}{Math.round(((90)+(atk.ap * 50 / 100)+(champ.moveSpeed * 0.05 + bonus.moveSpeed + ((champ.moveSpeed + bonus.moveSpeed) * 15/100))*20/100))} / 
            {' '}{Math.round(((130)+(atk.ap * 50 / 100)+(champ.moveSpeed * 0.05 + bonus.moveSpeed + ((champ.moveSpeed + bonus.moveSpeed) * 20/100))*20/100))} / 
            {' '}{Math.round(((170)+(atk.ap * 50 / 100)+(champ.moveSpeed * 0.05 + bonus.moveSpeed + ((champ.moveSpeed + bonus.moveSpeed) * 25/100))*20/100))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 50 / 100)+(champ.moveSpeed * 0.05 + bonus.moveSpeed + ((champ.moveSpeed + bonus.moveSpeed) * 10/100))*20/100) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 50 / 100)+(champ.moveSpeed * 0.05 + bonus.moveSpeed + ((champ.moveSpeed + bonus.moveSpeed) * 15/100))*20/100)* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 50 / 100)+(champ.moveSpeed * 0.05 + bonus.moveSpeed + ((champ.moveSpeed + bonus.moveSpeed) * 20/100))*20/100)* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 50 / 100)+(champ.moveSpeed * 0.05 + bonus.moveSpeed + ((champ.moveSpeed + bonus.moveSpeed) * 25/100))*20/100)* (1 - mod.defMagRed))}          
          </p>
    
          <p>
           Gains <span className="stat--moveSpeed">10% / 15% / 20% / 25% Movement Speed</span> for 2 seconds. <br />
           The wind spirit automatically searches for the nearest 3 campions within range, granting <span className="stat--moveSpeed">Movement Speed</span> bonuses to allies and dealing <span className="stat--ap">50 / 90 / 130 / 170 (50% AP + <span className="stat--moveSpeed">20% bonus MS</span>) magic damage</span> to enemies.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> EYE OF THE STORM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--hp">Shield strength:</h5>
          <p className="stat--hp">
          {Math.round((65) + (atk.ap * 45 / 100))} /
          {' '}{Math.round((90) + (atk.ap * 45 / 100))} /
          {' '}{Math.round((115) + (atk.ap * 45 / 100))} /
          {' '}{Math.round((140) + (atk.ap * 45 / 100))}
          </p>

          <h5 className="stat--ad">Bonus Attack Damage:</h5>
          <p className="stat--ad">
            {Math.round((10) + (atk.ap * 10 / 100))} /
            {' '}{Math.round((20) + (atk.ap * 10 / 100))} /
            {' '}{Math.round((30) + (atk.ap * 10 / 100))} /
            {' '}{Math.round((40) + (atk.ap * 10 / 100))}
          </p>
    
          <p>
          Blesses herself and the allied champion with the lowers Hp with a shield that absorbs <span className="stat--hp">65 / 90 / 115 / 140 <span className="stat--ap">(+45% AP)</span> damage</span>. <br />
          Shield grants <span className="stat--ad">10 / 20 / 30 / 40 <span className="stat--ap">(+10% AP)</span> Attack Damage</span> while it holds. Lasts for 3 seconds. <br />
          If there is a turret within range, applies a shield to the turret as well.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> MONSOON
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--hp">
            Healing per tick:
          </h5>
          <p className="stat--hp">
            {Math.round((50)+(atk.ap*30/100))} / 
            {' '}{Math.round((100)+(atk.ap*30/100))} /
            {' '}{Math.round((150)+(atk.ap*30/100))}
          </p>
    
          <p>
            Calls forth mighty winds of salvation to knock back surrounding enemies and restore <span className="stat--hp">50 / 100 / 150 <span className="stat--ap">(+30% AP)</span>  Health</span> to nearby allies each second for 3 seconds.
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