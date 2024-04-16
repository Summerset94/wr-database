export default function blank({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> GARDEN OF THORNS
          </h4>

          <h5 className="stat--ap">
            Damage normal / <span className="stat--armor">target with seed</span>:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((5 * currentLevel)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((5 * currentLevel)+(atk.ap * 10 / 100))*2)}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((5 * currentLevel)+(atk.ap * 10 / 100)) * (1 - mod.defMagRed))}  /
            {' '}{Math.round(((5 * currentLevel)+(atk.ap * 10 / 100)) * 2 * (1 - mod.defMagRed))}
          </p>

          <p className="stat--hp">Thorn Spitter Health: {Math.round(20 + (252/14*(Number(currentLevel)-1)) + (atk.ap * 25/100))}</p>.
    
          <p>
            <b>Deadly Spines</b> and <b>Grasping Roots</b> spawns <b className="stat--armor">Thorn Spitter</b> with every ability cast. 
          </p>

          <p>Thorn Spitter:</p>

          <ul>
            <li>Lifetime: 6 seconds;</li>
            <li>Damage: <span className="stat--ap">5</span> per level (<span className="stat--ap">+10% AP</span>) magic damage;</li>
            <li>Attack Speed (empirically tested): <span className="stat--as">~0.8</span>;</li>
            <li>Health: <span className="stat--hp"> 20-260</span> (based on level) (<span className="stat--ap">+35% AP</span>)</li>
          </ul>          

          <p>
            Hitting a <b>Champion / Large monster / Epic Monster</b> spawns an additional <b className="stat--armor">Thorn Spitter</b>
          </p>

          <p>
             <b className="stat--armor">Thorn Spitter</b> automatically attacks nearby targets prioritizing enemies marked by <b className="stat--armor">Rampant Growth</b>. 
          </p>

          <p>
            Enemy champions deal 40% ability damage to Thorn Spitters.
          </p>

          <p>
            Deals 50% damage to monsters
          </p>
         
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DEADLY SPINES
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75} / 
            {' '}{75} / 
            {' '}{75} / 
            {' '}{75} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((235)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((125)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((235)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
           Vines spread out and burst into spines dealing <span className="stat--ap">70 / 125 / 180 / 235 (+50%AP) magic damage</span> and sprouting 1 <b className="stat--armor">Thorn Spitter</b>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> RAMPANT GROWTH
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

          <h5 className="stat--ap">
            Damage tick/cast:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((5)+(atk.ap * 3 / 100)))}
            {' '}({Math.round(((5)+(atk.ap * 3 / 100))*12)}) / 
            {' '}{Math.round(((7)+(atk.ap * 3 / 100)))}
            {' '}({Math.round(((7)+(atk.ap * 3 / 100))*12)}) / 
            {' '}{Math.round(((9)+(atk.ap * 3 / 100)))}
            {' '}({Math.round(((9)+(atk.ap * 3 / 100))*12)}) / 
            {' '}{Math.round(((11)+(atk.ap * 3 / 100)))}
            {' '}({Math.round(((11)+(atk.ap * 3 / 100))*12)})
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((5)+(atk.ap * 3 / 100)) * (1 - mod.defMagRed))}
            {' '}({Math.round(((5)+(atk.ap * 3 / 100)) * (1 - mod.defMagRed)*12)}) / 
            {' '}{Math.round(((7)+(atk.ap * 3 / 100))* (1 - mod.defMagRed))} / 
            {' '}({Math.round(((7)+(atk.ap * 3 / 100))* (1 - mod.defMagRed)*12)})
            {' '}{Math.round(((9)+(atk.ap * 3 / 100))* (1 - mod.defMagRed))} / 
            {' '}({Math.round(((9)+(atk.ap * 3 / 100))* (1 - mod.defMagRed)*12)})
            {' '}{Math.round(((11)+(atk.ap * 3 / 100))* (1 - mod.defMagRed))}
            {' '}({Math.round(((11)+(atk.ap * 3 / 100))* (1 - mod.defMagRed)*12)})        
          </p>
    
          <br />
          <p>
            Plants a seed on an enemy (excluding minions) for 6 seconds.
          </p>

          <p>
            Seed deals <span className="stat--ap">5 / 7 / 9 / 11 (+3% AP) magic damage</span> every 0.5 second and increases the damage <b className="stat--aror">Thorn Spitters</b> deal to target by 100%
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> GRASPING ROOTS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)}
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
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Zyra sends out vines that <b className="stat--armor">roots</b> champions hit for <b className="stat--armor">1 / 1.25 / 1.5 / 1.75</b> seconds and deal <span className="stat--ap">60 / 100 / 140 / 180 (+40% AP) magic damage</span>.
          </p>

          <p>
            A <b>Thorn Spitter</b> spawns when ability on first hitting enemy champion or when vines reach maximum travel distance. Hitting large or epic monsters also trigger this effect.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> STRANGLETHORNS
          </h4>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((170)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((330)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((170)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((330)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}        
          </p>
    
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
    
          <br />
          <p>
            Zyra summons vines in large circular area that deal <span className="stat--ap">170 / 250 / 330 (+60% AP) magic damage</span> to the enemies.
          </p>

          <p>
            After 2 secinds, the vines snaps upwards knocking up enemies caught in cast area for 1 second
          </p>

          <p>
            The <b className="stat--armor">Thorn Spitters</b> in a cast aea become enraged: life duration refreshes, gain <span className="stat--hp">50% bonus HP</span> and <span className="stat--as">50% bonus Attack Speed</span>.
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