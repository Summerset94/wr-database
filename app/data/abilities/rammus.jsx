export default function rammus({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> ROLLING ARMORDILLO
          </h4>
    
          <p>
            While out of combat gain <abbr title="32 + 2 per level" className="stat--moveSpeed">{30 + currentLevel * 2} Movement Speed</abbr> increased to <abbr title="37 + 2 per level" className="stat--moveSpeed">{35 + currentLevel*2}</abbr> during <b>Powerball</b>
          </p>
          
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> POWERBALL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Enables Rolling Armordillo and accelerates up to <span className="stat--moveSpeed"> +110 / 120 / 130 / 140% bonus Movement Speed</span> over 6 seconds. Colliding with an enemy deals <span className="stat--ap">80 / 110 / 140 / 170 (+100% AP) magic damage</span> in an area, knocking back and <span className="stat--moveSpeed">slowing enemies by 40 / 50 / 60 / 70%</span> for 1 second.
          </p>

          <p>
            Activating cancels <b>Defensive Ball Curl</b> and puts it on cooldown.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> DEFENSIVE BALL CURL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>

          <h5 className="stat--ap">
            Damage (<span className="stat--critChance">active</span>):
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((10)+(atk.armor * 8 / 100)))}
            {' '}(<span className="stat--critChance">{Math.round(((10)+(atk.armor * 8 / 100))*1.5)}</span>)  / 
            {' '}{Math.round(((12)+(atk.armor * 8 / 100)))}
            {' '}(<span className="stat--critChance">{Math.round(((12)+(atk.armor * 8 / 100))*1.5)}</span>) / 
            {' '}{Math.round(((14)+(atk.armor * 8 / 100)))}
            {' '}(<span className="stat--critChance">{Math.round(((14)+(atk.armor * 8 / 100))*1.5)}</span>) / 
            {' '}{Math.round(((16)+(atk.armor * 8 / 100)))}
            {' '}(<span className="stat--critChance">{Math.round(((16)+(atk.armor * 8 / 100))*1.5)}</span>)
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((10)+(atk.armor * 8 / 100)) * (1 - mod.defMagRed))}
            {' '}(<span className="stat--critChance">{Math.round(((10)+(atk.armor * 8 / 100)) * (1 - mod.defMagRed)*1.5)}</span>) / 
            {' '}{Math.round(((12)+(atk.armor * 8 / 100))* (1 - mod.defMagRed))}
            {' '}(<span className="stat--critChance">{Math.round(((12)+(atk.armor * 8 / 100))* (1 - mod.defMagRed)*1.5)}</span>) / 
            {' '}{Math.round(((14)+(atk.armor * 8 / 100))* (1 - mod.defMagRed))}
            {' '}(<span className="stat--critChance">{Math.round(((14)+(atk.armor * 8 / 100))* (1 - mod.defMagRed)*1.5)}</span>) / 
            {' '}{Math.round(((16)+(atk.armor * 8 / 100))* (1 - mod.defMagRed))}
            {' '}(<span className="stat--critChance">{Math.round(((16)+(atk.armor * 8 / 100))* (1 - mod.defMagRed)*1.5)}</span>)          
          </p>

          <h5>
           Bonus Resistance:
          </h5>

          <p className="stat--armor">Armor: 
            {' '}{Math.round(((30)+(atk.armor * 55 / 100)))} / 
            {' '}{Math.round(((30)+(atk.armor * 60 / 100)))} / 
            {' '}{Math.round(((30)+(atk.armor * 65 / 100)))} / 
            {' '}{Math.round(((30)+(atk.armor * 70 / 100)))}
          </p>         

          <p className="stat--magres">Magic Resistance:
            {' '}{Math.round(((10)+(atk.magres * 35 / 100)))} / 
            {' '}{Math.round(((10)+(atk.magres * 40 / 100)))} / 
            {' '}{Math.round(((10)+(atk.magres * 45 / 100)))} / 
            {' '}{Math.round(((10)+(atk.magres * 50 / 100)))}
          </p>
    
          <p>
            <b>Spiked Shell:</b>  Attacks deal <span className="stat--ap">10 / 12 / 14 / 16 (<span className="stat--armor">+8% Armor</span>) bonus magic damage</span> 
          </p>

          <p>
            <b>Active:</b> Brace for up to 6 seconds, <span className="stat--moveSpeed">slowing Rammus by 30%</span> while gaining <span className="stat--armor">30 (+ 55 / 60 / 65 / 70% Armor)</span> and <span className="stat--magres">10 (+35 / 40 / 45 / 50% Magic Resistance)</span>. While curled Spiked Shell deals <span className="stat--critChance">50%</span> more damage and also applies to enemies that attack Rammus.
          </p>

          <p>
            Deals 175% damage to monsters. <br />
            Activating cancels <b>Powerball</b> and puts it on cooldown.            
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> FRENZYING TAUNT
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
            {' '}{50}
          </h5>
    
          <p>
          Taunts an enemy champion or monster for <b>1.25/1.5/1.75/2 seconds</b>  and gain <abbr title="35 / 45 / 55 / 65%" className="stat--as">{(champ.asBase * 35 / 100).toFixed(3)} / {(champ.asBase * 45 / 100).toFixed(3)} / {(champ.asBase * 55 / 100).toFixed(3)} / {(champ.asBase * 65 / 100).toFixed(3)} Attack Speed</abbr> for 5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> SOARING SLAM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Impact damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((225)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((225)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
            Aftershock damage/second:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((45)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((45)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} 
          </p>
    
          <p>
            Hop into the air and slam down, dealing <span className="stat--ap">75 / 150 / 225 (+50% AP) magic damage</span> and creating aftershocks for 4 seconds.
          </p>

          <p>
           Aftershocks deal <span className="stat--ap">30 / 45 / 60 (+20% AP) magic damage</span> every second and <span className="stat--moveSpeed">slow enemies incrementally by 10 / 12 / 14%</span>, stacking up to <span className="stat--moveSpeed">50 / 60 / 70%</span>.
          </p>

          <p>
            If used during <b>Powerball</b>, <b>Powerball's</b> effect are applied at the center of the landing zone.
          </p>

          <p>
           <b>Soaring Slam's</b> range increases with Movement Speed. Aftershocks damage structures.
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