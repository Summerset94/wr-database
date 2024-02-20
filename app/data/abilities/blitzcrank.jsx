export default function blitzcrank({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MANA BARRIER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(50*mod.atkcdr).toFixed(1)} / 
          </h5>
            
          <h5 className="stat--armor">
            Shield: {Math.round(atk.mana * 30 / 100)}
          </h5>
           <p>
            When Blitzcrank receives damage that will put him under  <abbr title="35% maximum health" className="stat--hp">{Math.round(atk.health * 35 / 100)} health</abbr>, he gains a shield equal to <span className="stat--mana">30% maximum mana</span> up to 10 seconds
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> ROCKET GRAB
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
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((280)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((280)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Blitzcrank fires his right hand in a line in the target direction, catching the first enemy hit to deal them <span className="stat--ap">100 / 160 / 220 / 280 (+100% AP) magic damage</span> and pull them to Blitzcrank.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> OVERDRIVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>
    
          <p>
            Gain <span className="stat--moveSpeed"> 50% / 55% / 60% / 65% decaying Movement Speed </span> for 2.5 Seconds. <br />
            <b>RECAST:</b> gain <span className="stat--moveSpeed">140% / 150% / 160% / 170% decaying Movement Speed</span> for 1.5 seconds. <br />
            When Overdrive ends, Blitzcrank is slowed by <span className="stat--moveSpeed">33%</span> for 1.5 seconds. This is increased to <span className="stat--moveSpeed">99%</span> for 2 seconds if Overdrive was recast.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> POWER FIST
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{25} / 
            {' '}{25} / 
            {' '}{25} / 
            {' '}{25} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 180 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 200 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 220 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 240 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 180 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 200 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 220 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 240 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Blitzcrank empowers his next attack to critically strike for <span className="stat--ad">180% / 200% / 220% / 240% AD physical damage</span> and knock the target up in the air for 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> STATIC FIELD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(35*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Mark damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 15 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
          Cast damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((325)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((450)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((325)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((450)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            <b>PASSIVE:</b> While Static Field is off cooldown, attacks marks enemies to deal <span className="stat--ap">40 / 80 / 120 (+15% AP) magic damage</span> after 1 second. <br />
            <b>ACTIVE:</b> Deals <span className="stat--ap">200 / 325 / 450 (+80% AP) magic damage</span> to nearby enemies and silences them for 0.5 seconds.
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