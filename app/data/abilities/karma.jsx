export default function karma({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MANTRA
          </h4>
        
          <p>
            Every ability cast grants Karma a stack of Mantra. At 3 stacks, she enters a Mantra State, enchancing her next basic ability. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> INNER FLAME
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--magres">
            Mantra damage + explosion:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)))} + {Math.round(((40)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)))} + {Math.round(((80)+(atk.ap * 50 / 100)))}  / 
            {' '}{Math.round(((230)+(atk.ap * 50 / 100)))} + {Math.round(((120)+(atk.ap * 50 / 100)))}  / 
            {' '}{Math.round(((310)+(atk.ap * 50 / 100)))} + {Math.round(((160)+(atk.ap * 50 / 100)))} 
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} + {Math.round(((40)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} + {Math.round(((80)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} + {Math.round(((120)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((310)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} + {Math.round(((160)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Fires a blast of energy, dealing <span className="stat--ap">70 / 110 / 150 / 190 (+40% AP) magic damage</span> to the first target hit and surrounding enemies, and slowing them by <span className="stat--moveSpeed">35%</span> for 1.5 seconds.
          </p>

          <p>
            <b>Mantra:</b> Increases the destructive power of the blast, dealing <span className="stat--ap">70 / 150 / 230 / 310 (+50% AP) magic damage</span>
             to the first target hit and surrounding enemies. The blast leaves a field for 1.5 seconds, slowing targets by 50%, after wich it explodes and deals <span className="stat--ap">40 / 80 / 120 / 160 (+50% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> FOCUSED RESOLVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Initial + tether damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 40 / 100)))} + {Math.round(((40)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} + {Math.round(((70)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 40 / 100)))} + {Math.round(((100)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)))} + {Math.round(((130)+(atk.ap * 45 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} + {Math.round(((40)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} + {Math.round(((70)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} + {Math.round(((100)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}  + {Math.round(((130)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--magres">
            Mantra tether damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 45 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((70)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Tethers up to two nearby enemy champions, dealing <span className="stat--ap">35 / 60 / 85 / 110 (+40% AP) magic damage</span> and revealing them for 1.75 seconds. If targets fail to break the tether, they take <span className="stat--ap">40 / 70 / 100 / 130 (+45% AP) magic damage</span>  and are rooted for <b>1 / 1.25 / 1.5 / 1.75 seconds</b>.
          </p>

          <p>
            <b>Mantra:</b> A new tether will be fromed between tethered targets. If there is only one tethered target, the new tether will spread toward an additional nearby enemy champion. If targets fail to break all the tethers, they take <span className="stat--ap">40 / 70 / 100 /130 (+45% AP) magic damage</span> and are rooted for an improved <b>1.5 / 1.75 / 2 / 2.25 seconds</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> INSPIRE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--hp">
            Shield strength:
          </h5>

          <p className="stat--hp">Normal: 
            {' '}{Math.round(((70)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 65 / 100)))}
          </p>

          <p className="stat--hp">Mantra: 
            {' '}{Math.round(((140)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((260)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((320)+(atk.ap * 65 / 100)))}          
          </p>
    
          <p>
          Grants an allied champion <span className="stat--hp">70 / 100 / 130 / 160 <span className="stat--ap">(+ 65% AP)</span> shield</span> for 3 seconds and <span className="stat--moveSpeed">30% movement speed</span> for 1.5 seconds.
          </p>

          <p>
          <b>Mantra:</b> Karma focuses her power, granting a  <span className="stat--hp">140 / 200 / 260 / 320 <span className="stat--ap">(+ 65% AP)</span> shield</span> that decays over 4 seconds and <span className="stat--moveSpeed">60% movement speed</span> that decays to 20% over the same duration.
          </p>
          <p>
            An additional ring is generated around the shielded target, and the first ally champion who enters the ring will be granted the same shield and movement speed.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> TRANSCENDENT EMBRACE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((170)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((280)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((390)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((170)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((280)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((390)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Immediately enters <b>Mantra</b> state.
          </p>

          <p>
          Forms a ring of spirit energy at the taget location. After 1 second, it detonates, dealing <span className="stat--ap">170 / 280 / 390 (+80% AP) magic damage</span>  to all enemies inside the circle and slowing them by 35% for 1 second.
          </p>

          <p>
          If enemies are hit by the outer ring, they will be knocked back toward the center.
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