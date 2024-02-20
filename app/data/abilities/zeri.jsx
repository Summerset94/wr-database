export default function zeri({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> LIVING BATTERY
          </h4>
    
          <p>
            Zeri Shields herself for 60% of the damage she deals to Shields, and gains <span className="stat--moveSpeed">15% Move Speed</span> for 3 seconds when Shielded.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> ELECTROCUTE!
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(3*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 30 / 100)+(atk.attack * 55 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 35 / 100)+(atk.attack * 70 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 40 / 100)+(atk.attack * 85 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 45 / 100)+(atk.attack * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 30 / 100)+(atk.attack * 55 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 35 / 100)+(atk.attack * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 40 / 100)+(atk.attack * 85 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 45 / 100)+(atk.attack * 100 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            <b>Passive:</b> Zeri fires a burst of 6 rounds in the target direction that deal <abbr className="stat--ad" title='8 + 2 per 3 levels + 100% AD + 2.5%AD per 3 levels'>{Math.round(8 + (2 * Math.floor((currentLevel - 1)/3)) + (atk.attack * (100 + (2.5 * Math.floor((currentLevel - 1)/3))))/100)} physical damage</abbr> to the first enemy hit. Zeris <span className="stat--as">attack speed</span> has a maximum of 1.5 attacks per second. <span className="stat--as">50% of attack speed</span> in excess of the cap is converted into bonus attack damage.
          </p>

          <p>
            <b>Active:</b> Zeri zaps target location, dealing <span className="stat--ap">35 / 60 / 85 / 110 (<span className="stat--ad">+55 / 70 / 85 / 100% AD</span>) (+30 / 35 / 40 / 45% AP) magic damage</span> to enemies and <span className="stat--moveSpeed">slowing them by 14 / 18 / 22 / 26%</span> for 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ULTRASHOCK LASER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--critChance">
            Crit Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)) * atk.critMultiplier)} / 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)) * atk.critMultiplier)} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)) * atk.critMultiplier)} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)) * atk.critMultiplier)}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100)) * (1 - mod.defMagRed) * atk.critMultiplier)} / 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100))* (1 - mod.defMagRed) * atk.critMultiplier)} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100))* (1 - mod.defMagRed) * atk.critMultiplier)} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)+(atk.attack * 80 / 100))* (1 - mod.defMagRed) * atk.critMultiplier)}          
          </p>
    
          <br />
          <p>
            Zeri fires out an electric pulse that deals <span className="stat--ap">30 / 70 / 110 / 150 (<span className="stat--ad">+80% AD</span>) (+40% AP) magic damage</span> to the first unit hit, <span className="stat--moveSpeed">slowing it by 30 / 35 / 40 / 45%</span> for 2 seconds.
          </p>

          <p>
           If the pulse hits a wall, it expands into a long range laser, applying the effects in an area and <span className="stat--critChance">deals Critical Damage</span> to champions and monster.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SPARK SURGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(24*mod.atkcdr).toFixed(1)} / 
            {' '}{(22*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{80}
          </h5>
    
          <br />
          <p>
            Zeri dashes a short distance and loads up lightning rounds for 6 seconds, empowering the next 3 Attacks to pierce,  <span className="stat--ad">dealing 50 / 65 / 80 / 95% damage</span>  to targets after the first. Hitting a champion with an attack reduces this ability cooldown by 1 seconds.
          </p>

          <p>
            If Zeri touches a wall while dashing she will vault over it, greatly extending the dash range.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> LIGHTNING CRASH
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

          <h5 className="stat--ap">
            Discharge damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 80 / 100)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 80 / 100)+(bonus.attack * 70 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)+(bonus.attack * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 80 / 100)+(bonus.attack * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 80 / 100)+(bonus.attack * 70 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">Overcharged bonus on-hit damage:</h5>

          <p className="stat--ap">
            {' '}{Math.round((5) + (atk.ap * 15 / 100))} / 
            {' '}{Math.round((10) + (atk.ap * 15 / 100))} / 
            {' '}{Math.round((15) + (atk.ap * 15 / 100))}
          </p>

          <h5 className="stat--armor">Overcharged chain damage</h5>

          <p className="stat--critChance">
            {' '}{Math.round((5) + (atk.ap * 15 / 100)+(atk.attack * 20 / 100))} / 
            {' '}{Math.round((10) + (atk.ap * 15 / 100)+(atk.attack * 20 / 100))} / 
            {' '}{Math.round((15) + (atk.ap * 15 / 100)+(atk.attack * 20 / 100))}
          </p>
    
          <br />
          <p>
          Zeri discharges a nova of electricity, dealing <span className="stat--ap">150 / 200 / 250 (<span className="stat--ad">+70% bonus AD</span>) (+80% AP) magic damage</span> to all enemies nearby and gaining 8 stacks of <span className="stat--armor">Overcharge</span> for each champion hit for 10 seconds. While <span className="stat--armor">Overcharged</span>, Zeri gains <span className="stat--">0.5% movement speed per stack</span>, <span className="stat--as">25% ({champ.asBase * 25 / 100}) Attack Speed</span> and <span className="stat--ap">5 / 10 / 15 (+15% AP) bonus magic damage</span> on-hit.
          </p>

          <p>
            During this time, her Attack becomes a faster triple shot that chains the bonus <span className="stat--ap">5 / 10 / 15 (+15% AP) magic damage</span> and <span className="stat--">20% AD physical damage</span> to nearby enemies. Hitting an enemy champion with an attack or ability adds 1 stack of <span className="stat--armor">Overcharge</span>. Takedowns increase its duration by 4 seconds.
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