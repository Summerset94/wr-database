export default function lux({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">p</span> ILLUMINATION
          </h4>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">
          {Math.round((((25) + (7 * currentLevel))+(atk.ap * 25 / 100)))} / {Math.round((((25) + (7 * currentLevel))+(atk.ap * 25 / 100)) * (1 - mod.defMagRed))}
          </p>
    
          <p>
          Damaging abilities afflict enemies with Illumination for 5 seconds. Lux's next attack or damaging ability against that target empowers Illumination, dealing <abbr title="32 + 7 per level + 25% AP" className="stat--ap">{Math.round((25) + (7 * currentLevel)+(atk.ap * 25 /100))} magic damage</abbr>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> LIGHT BINDING
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)}
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
            {' '}{Math.round(((70)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Cast out a ball of light that deals <span className="stat--ap">70 / 130 / 190 / 250 (+70% AP) magic damage</span> and roots first 2 enemy champions it hits for 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> PRISMATIC BARRIER
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
            {' '}{60}
          </h5>

          <h5 className="stat--hp">
            Shield strength:
          </h5>

          <p className="stat--hp">Way out: 
            {' '}{Math.round(((30)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((55)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 15 / 100)))}
          </p>

          <p className="stat--hp">Way back: 
            {' '}{Math.round(((48)+(atk.ap * 24 / 100)))} / 
            {' '}{Math.round(((88)+(atk.ap * 24 / 100)))} / 
            {' '}{Math.round(((128)+(atk.ap * 24 / 100)))} / 
            {' '}{Math.round(((168)+(atk.ap * 24 / 100)))}
          </p>          
    
          <p>
          Throws Lux's wand in a direction, shielding allied champions it passes through, after reaching its range limit it returns to Lux, shielding allied champions again
          </p>

          <p>
            <b>First shield:</b> <span className="stat--hp">30 / 55 / 80 / 105 (<span className="stat--ap">+15% AP</span>)</span>
          </p>

          <p>
            <b>Second Shield:</b> <span className="stat--hp">48 / 88 / 128 / 168(<span className="stat--ap">+24% AP</span>)</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> LUCENT SINGULARITY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((195)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((260)+(atk.ap * 55 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 55 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((195)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((260)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Creates a zone of light that slows nearby enemies by <span className="stat--moveSpeed">30 / 35 / 40 / 45%</span>. If there any enemy champions within the zone or after 5 seconds it detonates, dealing <span className="stat--ap">65 / 130 / 195 / 260 (+55% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FINALES FUNKELN
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)} / 
            {' '}{(40*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>
    
          <p>
          Fires a beam of light dealing <span className="stat--ap">300 / 400 / 500 (+75% AP) magic damage</span> to all enemies in a line.
          </p>

          <p>
          <b>FINALES FUNKELN</b> ignites and refreshes Illumination.
          </p>
          <hr />
          <p>
            I know the name was changed long ago. I don't care.
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