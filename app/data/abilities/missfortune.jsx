export default function missfortune({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> LOVE TAP
          </h4>
    
          {/* <p>
            First attack against an enemy deal <abbr title="49 - 150% AD based on level" className="stat--ad">{Math.round(atk.attack * (49 + 101/14 * (Number(currentLevel)-1)) /100)} ({Math.round((atk.attack * (49 + 101/14 * (Number(currentLevel)-1)) /100)* (1 - mod.defPhysRed))} post-mitigation) bonus physical damage</abbr>
          </p> */}

          <p>
          Applies Love Tap when attacking enemy champions or epic monsters. At 3 stacks, increases Miss Fortune's damage to the target by {(7.6 + 0.4*currentLevel).toFixed(1)}% (8% + 0.4% per level)
          </p>         
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DOUBLE UP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(3*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 115 / 100)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((95)+(atk.attack * 120 / 100)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((130)+(atk.attack * 125 / 100)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((165)+(atk.attack * 130 / 100)+(atk.ap * 35 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 115 / 100)+(atk.ap * 35 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((95)+(atk.attack * 120 / 100)+(atk.ap * 35 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(atk.attack * 125 / 100)+(atk.ap * 35 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((165)+(atk.attack * 130 / 100)+(atk.ap * 35 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
            Ricochet damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 115 / 100)+(atk.ap * 35 / 100))*1.3)} / 
            {' '}{Math.round(((95)+(atk.attack * 120 / 100)+(atk.ap * 35 / 100))*1.4)} / 
            {' '}{Math.round(((130)+(atk.attack * 125 / 100)+(atk.ap * 35 / 100))*1.5)} / 
            {' '}{Math.round(((165)+(atk.attack * 130 / 100)+(atk.ap * 35 / 100))*1.6)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round((((60)+(atk.attack * 115 / 100)+(atk.ap * 35 / 100))*1.3) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round((((95)+(atk.attack * 120 / 100)+(atk.ap * 35 / 100))*1.4)* (1 - mod.defPhysRed))} / 
            {' '}{Math.round((((130)+(atk.attack * 125 / 100)+(atk.ap * 35 / 100))*1.5)* (1 - mod.defPhysRed))} / 
            {' '}{Math.round((((165)+(atk.attack * 130 / 100)+(atk.ap * 35 / 100))*1.6)* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Fires a shot that ricochets behind the first enemy hit, dealing <span className="stat--ad">60 / 95 / 130 / 165 (+115% / 120% / 125% / 130% AD) (<span className="stat--ap">+35% AP</span>) physical damage</span>. 
          </p>

          <p>
          The second hit will Critically Strike for <span className="stat--critChance">130/140/150/160%</span>  damage and apply <b>Love Tap</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> STRUT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30}
          </h5>
    
          <p>
            <b>PASSIVE: </b>After 4 seconds of not taking damage, gain <span className="stat--moveSpeed">30/35/40/45 Movement Speed</span>. After another 3 seconds, this bonus increases to <span className="stat--moveSpeed">80/90/100/110</span>.
          </p>

          <p>
            <b>ACTIVE:</b> Fully activates Strut's Movement Speed and grants <abbr title="45 / 60 / 75 / 90%" className="stat--as">{(champ.asBase * 45 / 100).toFixed(3)} / {(champ.asBase * 60 / 100).toFixed(3)} / {(champ.asBase * 75 / 100).toFixed(3)} / {(champ.asBase * 90 / 100).toFixed(3)} Attack Speed</abbr>   for 4 seconds. attacked targets with full stacks of <b>Love Tap</b> reduces the cooldown of Strut by 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span>  MAKE IT RAIN
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(11.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
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

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((20)+(atk.ap * 11 / 100)))} / 
            {' '}{Math.round(((25)+(atk.ap * 12 / 100)))} / 
            {' '}{Math.round(((30)+(atk.ap * 13 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 10 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((20)+(atk.ap * 11 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((25)+(atk.ap * 12 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((30)+(atk.ap * 13 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Rains down bullets on an area for 2 seconds, dealing <span className="stat--ap">15 / 20 / 25 / 30 (+10 / 11 / 12 / 13% AP) magic damage</span> every quarter second and slowing enemies.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> BULLET TIME
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

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '} Wave: {Math.round(((atk.ap * 30 / 100)+(atk.attack * 75 / 100)))}; 
            {' '} Full barrage: {Math.round(((atk.ap * 30 / 100)+(atk.attack * 75 / 100))*12)} / 
            {' '}{Math.round(((atk.ap * 30 / 100)+(atk.attack * 75 / 100))*14)} / 
            {' '}{Math.round(((atk.ap * 30 / 100)+(atk.attack * 75 / 100))*16)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '} Wave: {Math.round(((atk.ap * 30 / 100)+(atk.attack * 75 / 100)) * (1 - mod.defPhysRed))}; 
            {' '} Full barrage: {Math.round(((atk.ap * 30 / 100)+(atk.attack * 75 / 100)) * 12 * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.ap * 30 / 100)+(atk.attack * 75 / 100))  * 14 * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.ap * 30 / 100)+(atk.attack * 75 / 100)) * 16 * (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Channels a 3 second barrage of bullets, with <b>12/14/16 waves</b> that each deal <span className="stat--ad">75% AD (<span className="stat--ap">+30% AP</span>) physical damage</span>. Each wave can crit for <span className="stat--critChance">120%</span> damage
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