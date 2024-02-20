export default function leona({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SUNLIGHT
          </h4>
    
          <p>
          Abilities apply Sunlight for 1.5 seconds. Other allied champions consume Sunlight when damaging enemies, dealing <abbr title="34-160 based on level" className="stat--ap">{Math.round(34 + 9 * (currentLevel - 1))} bonus magic damage</abbr> 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> SHIELD OF DAYBREAK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((50)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 15 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((15)+(atk.ap * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((50)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Empowers the next attack to stun for 1 second and deal bonus <span className="stat--ap">15 / 50 / 85 / 120 (+15% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ECLIPSE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((95)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((165)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((95)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((165)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5>Bonus <span className="stat--armor">Armor</span> and <span className="stat--magres">Magic Resistance</span>:</h5>

          <p>
            <span className="stat--armor">{Math.round((35 + bonus.armor * 20 / 100))}</span>, <span className="stat--magres">{Math.round(35 + bonus.magres * 20 / 100)}</span> /
            {' '}<span className="stat--armor">{Math.round((50 + bonus.armor * 20 / 100))}</span>, <span className="stat--magres">{Math.round(50 + bonus.magres * 20 / 100)}</span> /
            {' '}<span className="stat--armor">{Math.round((65 + bonus.armor * 20 / 100))}</span>, <span className="stat--magres">{Math.round(65 + bonus.magres * 20 / 100)}</span> / 
            {' '}<span className="stat--armor">{Math.round((80 + bonus.armor * 20 / 100))}</span>, <span className="stat--magres">{Math.round(80 + bonus.magres * 20 / 100)}</span>
          </p>
    
          <p>
          For 3 seconds gain <span className="stat--armor">35 / 50 / 65 / 80 (+20% bonus Armor) Armor</span> and <span className="stat--magres">35 / 50 / 65 / 80 (+20% bonus Magic Resistance) Magic Resistance</span>
          </p>

          <p>
          After the effects ends nearby enemies take <span className="stat--ap">60 / 95 / 130 / 165 (+40% AP) magic damage</span>. If an enemy is hit, Leona retains her defensive bonuses for 3 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> ZENITH BLADE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((115)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((225)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((225)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Deals <span className="stat--ap">60 / 115 / 170 / 225 (+40% AP) magic damage</span> to enemies in a line.
          </p>

          <p>
          Leona roots the last champion hit for 0.5 seconds and dashes to them.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> SOLAR FLARE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)} / 
            {' '}{(35*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>
          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((225)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((225)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((300)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Calls down a beam of light, dealing <span className="stat--ap">150 / 225 / 300 (+80% AP) magic damage</span> and slowing by <span className="stat--moveSpeed">80%</span> for 1.5 seconds. Enemies in the center are stunned instead of slowed.
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