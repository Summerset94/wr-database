export default function sona({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const passiveCD = Number((2 + 18/14* currentLevel)/100);
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> POWER CHORD
          </h4>
    
          <p>
            After casting three basic abilities, her next attack is enhanced to deal an additional <abbr title="20 + 10 per Level + 15% AP" className="stat--ap">{Math.round(10 + 10*currentLevel + (atk.ap * 15 / 100))} magic damage</abbr>, stunning the target for 0.5s. Casting basic abilities creates a non-stacking buff aura for 3s.
          </p>

          <p>
            Basic abilities cooldown are reduced by <b>2-20%</b>
          </p>          
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> HYMN OF VALOR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*((mod.atkcdr - passiveCD))).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--magres">
            Aura bonus damage:
          </h5>

          <p className="stat--ap">
                {Math.round(((8)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((13)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((18)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((23)+(atk.ap * 20 / 100)))}
          </p>
    
          <br />
          <p>
            Deals <span className="stat--ap">50 / 90 / 130 / 170 (+40% AP) magic damage</span> to two nearest enemies.
          </p>
          
          <p>
            <b>Aura:</b> Enhances allied champions' next attack to deal an additional <span className="stat--ap">8 / 13 / 18 / 23 (+20% AP) magic damage</span> 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ARIA OF PERSEVERANCE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*((mod.atkcdr - passiveCD))).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{85} / 
            {' '}{90} / 
            {' '}{95} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((25)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((40)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((55)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 20 / 100)))}
          </p>

          <h5 className="stat--armor">
            Aura Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((25)+(atk.ap * 18 / 100)))} / 
            {' '}{Math.round(((50)+(atk.ap * 18 / 100)))} / 
            {' '}{Math.round(((75)+(atk.ap * 18 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 18 / 100)))}
          </p>
    
          <br />
          <p>
          Heals herself and another allied champion for <span className="stat--hp">25 / 40 / 55 / 70 (<span className="stat--ap">+20% AP</span>) health</span>.
          </p>
          
          <p>
            <b>Aura:</b> Grants allied champions a shield that absorbs <span className="stat--hp">25 / 50 / 75 / 100 (<span className="stat--ap">+18% AP</span>) damage</span> for 3 seconds.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SONG OF CELERITY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*(mod.atkcdr - passiveCD)).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{80}
          </h5>

          <br />
          <p>
          Gains <span className="stat--moveSpeed">10 / 11 / 12 / 13% (<span className="stat--ap">+3% AP</span>) Movement Speed</span> for 5 seconds.
          </p>

          
          <p>
            <b>Aura:</b> Grants allied champions <span className="stat--moveSpeed">10 / 11 / 12 / 13% (<span className="stat--ap">+3% AP</span>) Movement Speed</span> 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CRESCENDO
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 15 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))}
          </p>
         
          <p>
            The aura will be reinforced for 20s after casting the ability, providing a higher buff effect than usual.
          </p>

          <p>
            <b>ACTIVE: </b> Plays a chord that emits a soundwave every 0.75s as it travels to the target location. The soundwave deals <span className="stat--ap">35 / 60 / 85 (+15% AP) magic damage</span> and stuns enemies hit for the first time for 1s. Enemies caught inside the chord are also slowed for <span className="stat--moveSpeed">25% / 30% / 35%</span>.
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