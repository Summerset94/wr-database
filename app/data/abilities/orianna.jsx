export default function blank({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CLOCKWORK WINDUP
          </h4>
    
          <p>
            Orianna's Ball acts as a focal point for her abilities. It automatically returns to her if she is too far away from it.
          </p>

          <p>
          Attacks deal <abbr title="5 + 3 per level + 15% AP" className="stat--ap">{Math.round((5 + 3*currentLevel)+(atk.ap*15/100))} bonus magic damage</abbr>. Subsequent attacks against the same target within 4 seconds deal an additional <abbr title="2 + 0.6 per level + 3% AP" className="stat--ap">{Math.round((2 + 0.6*currentLevel)+(atk.ap*3/100))} bonus magic damage</abbr>. Stacks up to 2 times.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> COMMAND: ATTACK
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
            {' '}{30} / 
            {' '}{40} / 
            {' '}{50} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 45 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Commands the Ball to fire toward a target location, dealing <span className="stat--ap">60 / 100 / 140 / 180 (+45% AP) magic damage</span> to targets along the way. The damage decreases by 10% for each unit it hits (Minimum 50%).
          </p>

          <p>
            The Ball remains at the target location afterward.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> COMMAND: DISSONANCE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} 
          </h5>
    
          <p>
            Commands the Ball to release an electric pulse, dealing <span className="stat--ap">60 / 100 / 140 / 180 (+45% AP) magic damage</span> to nearby enemies.
          </p>

          <p>
            The pulse leaves behind an energy field for 3 seconds, <span className="stat--moveSpeed">slowing enemies by 20 / 25 / 30 / 35%</span> and 
            <span className="stat--moveSpeed">speeding allies up by 20 / 25 / 30 / 35%</span> for 2 seconds. The effect diminishes over time.
          </p>
        </div>
    },
    
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> COMMAND: PROTECT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--hp">
          Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 40 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            <b>Passive:</b> The Ball grants <b>10 / 15 / 20 /25 </b> <span className="stat--armor">Armor</span> and <span className="stat--magres">Magic Resist</span> to the champion it is attached to.
          </p>

          <p>
            <b>Active:</b> Commands the Ball to attach to an allied champion, granting a shield that absorbs <span className="stat--hp">60 / 110 / 160 / 210 (+40% AP) damage</span> for 4 seconds, dealing <span className="stat--ap">50 / 90 / 130 / 170 (+30% AP) magic damage</span> to enemies it passes through.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> COMMAND: SHOCKWAVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((275)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 75 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 75 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((275)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Commands the Ball to unleash a shockwave, dealing <span className="stat--ap">200 / 275 / 350 (+75% AP) magic damage</span>
          </p> and launching nearby enemies toward the Ball after a brief delay.
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