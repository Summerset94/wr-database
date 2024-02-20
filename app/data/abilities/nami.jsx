export default function nami({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SURGING TIDES
          </h4>
    
          <p>
          Allied champions touched by Nami's abilities gain <abbr title="65 + 20% AP" className="stat--moveSpeed">{Math.round(65 + (atk.ap * 20 / 100))} Movement Speed</abbr> for 1.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> AQUA PRISON
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

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((215)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((285)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((215)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((285)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Fires a bubble, dealing <span className="stat--ap">75 / 145 / 215 / 285 (+50% AP) magic damage</span> and knocking up for 1.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> EBB AND FLOW
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{85} / 
            {' '}{100} / 
            {' '}{115} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((175)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((175)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
            {Math.round(((55)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((115)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 30 / 100)))}
          </p>
    
          <p>
          Launches a stream that bounces 3 times between allied and enemy champions, healing allies for <span className="stat--hp">55 / 85 / 114 / 145 (<span className="stat--ap">+30% AP</span>) health </span> and dealing <span className="stat--ap">65 / 120 / 175 / 230 (+50% AP)</span> to enemies.
          </p>

          <p>
          Can hit each target once. Healing and damage values are modified by <abbr title='IF 7.5% of your AP is More than  15, damage would grow. Otherwise it will get reduced with each jump'>-15% <span className="stat--ap">+7.5% AP</span></abbr> each bounce. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> TIDECALLER'S BLESSING
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Bonus on-hit damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((25)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((45)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((65)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((25)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((45)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((65)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Enchances an allied champion's next 3 attacks for 6 seconds to deal an additional <span className="stat--ap">25 / 45 / 65 / /85 (+20% AP)</span> and slow by <span className="stat--moveSpeed">15 / 20 / 25 / 30 (<span className="stat--ap">+0.05% AP</span>)</span> for 1 second
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> TIDAL WAVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Sends a wave, dealing <span className="stat--ap">150 / 250 / 350 (+60% AP) magic damage</span>, knocking up for 0.5 seconds and slowing by <span className="stat--moveSpeed"> 50 / 60 / 70%</span>.
          </p>

          <p>
          Slow lasts for 2-4 seconds, increasing with how far the wave travels.
          Allies touched gain double the effect from Surging Tides.
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