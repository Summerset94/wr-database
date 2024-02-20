export default function teemo({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> TOXIC SHOT
          </h4>
    
          <p>
            8-50 Attacks deal <abbr title="8-50 based on level + 20% AP" className="stat--ap">{Math.round(5 + 3*currentLevel + (atk.ap * 20 / 100)) } magic damage</abbr>  on impact and an additional <abbr title="8-50 based on level + 9% AP" className="stat--ap">{Math.round(5 + 3*currentLevel + (atk.ap * 9 / 100)) } magic damage</abbr> each second for 4 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BLINDING DART
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}          
          </p>


          <br />
              
          <p>
            Deals <span className="stat--ap">70 / 120 / 170 / 220 (+60% AP) magic damage</span> and blinds the target for 1.25 / 1.5 / 1.75 / 2 seconds.
          </p>

          <p>
            Attacks from blinded enemies will miss their target, dealing no damage and failing to apply on-hit effects.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> MOVE QUICK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>
    
    <br />
          <p>
          <b>Passive:</b> Grants <span className="stat--moveSpeed">15 / 20 / 25 / 30% Movement Speed</span>  if an enemy champion or structure has not damaged Teemo within the last 5 seconds.
          </p>

          <p>
            <b>Active:</b> Rolls a short distance forward and gains <span className="stat--moveSpeed">30 / 40 / 50 / 60% Movement Speed</span> for 3 seconds. 
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> GUERILLA WARFARE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(25*mod.atkcdr).toFixed(1)} / 
            {' '}{(23*mod.atkcdr).toFixed(1)} / 
            {' '}{(21*mod.atkcdr).toFixed(1)} / 
            {' '}{(19*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <br />
    
          <p>
            After a delay, become Camouflaged. Moving outside of brush for more than <b>3 / 3.5 / 4 /4.5</b>  seconds ends this effect.
          </p>

          <p>
            After exiting Camouflage, gain <abbr title="30 / 40 / 50 / 60%" className="stat--as">{(champ.asBase * 30 / 100).toFixed(3)} / {(champ.asBase * 40 / 100).toFixed(3)} / {(champ.asBase * 50 / 100).toFixed(3)} / {(champ.asBase * 60 / 100).toFixed(3)} / Attack Speed</abbr> for 3 / 4 / 5 / 6 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(30*mod.atkcdr).toFixed(1)} / 
            {' '}{(25*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((125)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((175)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((225)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((125)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((175)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((225)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <br />
          <p>
            Place a mushroom trap that detonates when an enemy steps on it, dealing <span className="stat--ap">125 / 175 / 225 (+30% AP) magic damage</span> over 3 seconds and <span className="stat--moveSpeed">slowing by 30 / 40 / 50% for 3 seconds</span>.            
          </p>

          <p>
            Traps last for 2 minutes.
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