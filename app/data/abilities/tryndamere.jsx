export default function tryndamere({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> BATTLE FURY
          </h4>
    
          <p>
            Gain <abbr title="0.32-0.5% based on level" className="stat--critChance">{(0.32+ (0.18/14*(currentLevel -1 ))).toFixed(2)} Critical Rate</abbr> for each point of Fury
          </p>

          <p>
            Attacking a champion grants <abbr title="at ULT level 0/1/2/3" className="stat--as">55 ({(champ.asBase * 55 / 100).toFixed(3)}) / 60 ({(champ.asBase * 60 / 100).toFixed(3)}) / 65 ({(champ.asBase * 60 / 100).toFixed(3)}) / 70% ({(champ.asBase * 70 / 100).toFixed(3)}) Attack Speed</abbr> for 5 seconds. (6 second cooldown)
          </p>

          <p>
            Gains 5 Fury with every attack, 10 from critical strikes and 15 from kills.
            Loses 5 Fury per second after Tryndamere has been out of combat for 8 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BLOODLUST
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--hp">
            Healing Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((55)+(atk.ap * 30 / 100)))} -
            {' '}{Math.round(((55)+(atk.ap * 30 / 100)+(1 + (atk.ap * 1.2 / 100))*100))} / 
            {' '}{Math.round(((65)+(atk.ap * 30 / 100)))} -
            {' '}{Math.round(((65)+(atk.ap * 30 / 100)+(1 + (atk.ap * 1.2 / 100))*100))} / 
            {' '}{Math.round(((75)+(atk.ap * 30 / 100)))} -
            {' '}{Math.round(((75)+(atk.ap * 30 / 100)+(1 + (atk.ap * 1.2 / 100))*100))} / 
            {' '}{Math.round(((85)+(atk.ap * 30 / 100)))} -
            {' '}{Math.round(((85)+(atk.ap * 30 / 100)+(1 + (atk.ap * 1.2 / 100))*100))}
          </p>
    
          <br />
          <p>
            <b>Passive:</b> Gains <span className="stat--ad">5 / 10 / 15 / 20 Attack Damage</span>  plus an additional <span className="stat--ad"> 0.25 / 0.30 / 0.35 / 0.4 Attack Damage</span> per 1% of missing Health.
          </p>

          <p>
            <b>Active:</b> Consumes all Fury to heal for <span className="stat--hp">55 / 65 / 75 / 85 (<span className="stat--ap">+30% AP</span>)</span> plus  <span className="stat--hp">1 / 1.6 / 2.2 / 2.8 (<span className="stat--ap">+1.2%  AP</span>)</span> per point of Fury consumed.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> MOCKING SHOUT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)}
          </h5>
    
          <br />
          <p>
           Reduces nearby enemy champions' <span className="stat--as">Attack Speed by 25/30/35/40%</span>  for 3 seconds. If target is moving away from Tryndamere, <span className="stat--moveSpeed">slow them by 25% / 30% / 35% / 40%</span>. 
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SPINNING SLASH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 135 / 100)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 135 / 100)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 135 / 100)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((200)+(bonus.attack * 135 / 100)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 135 / 100)+(atk.ap * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 135 / 100)+(atk.ap * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 135 / 100)+(atk.ap * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((200)+(bonus.attack * 135 / 100)+(atk.ap * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
           Dashes, dealing <span className="stat--ad">80 / 120 / 160 / 200 (+135% bonus AD) (<span className="stat--ap">+100% AP</span>) physical damage </span> 
          </p>

          <p>
           <span className="stat--critCHance">Critical Strikes</span>  against minions reduce the cooldown of Spinning Slash by 1 second, doubled against champions.
           Gains 2 Fury for each enemy hit. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> UNDYING RAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)}
          </h5>
    
          <br />
          <p>
            <b>Passive:</b> Increases Battle Fury's bonus Attack Speed
          </p>

          <p>
            <b>Active:</b> Becomes unkillable for 5 seconds and gains 50 / 75 / 100 Fury.
          </p>

          <p>
            Can be cast while crowd controlled.
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