export default function kayle({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DIVINE ASCENT
          </h4>

          <h5 className="stat--as">Attack speed stack / full:</h5>
          <p className="stat--as">{((champ.asBase * 4 / 100)+(champ.asBase * (atk.ap /100))).toFixed(3)} / {(((champ.asBase * 4 / 100)+(champ.asBase * (atk.ap /100)))*5).toFixed(3)}</p>
    
          <p>
            Kayle ascends as she gains levels.
          </p>

          <p>
          <b>Level 1:</b> Attacks grant <span className="stat--as">4% <span className="stat--ap">(+1% AP)</span> Attack Speed</span> for 5 seconds, stacking up to 5 times. Gains <span className="stat--moveSpeed">8% ({Math.round(atk.moveSpeed * 8 / 100)}) Movement Speed</span> at max stacks.
          </p>

          <p>
            <b>Level 5:</b> Attack range is increased to 525.
          </p>

          <p>
            <b>Level 10:</b> Attacks fire waves of flame at max stacks, dealing the passive damage of <b>Starfire SpellBlade</b>.
          </p>

          <p>
            <b>Level 15:</b>  Attack range is increased to 575. The bonus from reaching max stacks becomes permanent.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> RADIANT BURST
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{85} / 
            {' '}{90} / 
            {' '}{95} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 50 / 100)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 50 / 100)+(bonus.attack * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)+(bonus.attack * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)+(bonus.attack * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 50 / 100)+(bonus.attack * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 50 / 100)+(bonus.attack * 60 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Launches a celestial sword, dealing <span className="stat--ap">60 / 110 / 160 / 210 (<span className="stat--ad">+60% bonus AD</span> +50% AP) magic damage</span>. Enemies hit are slowed by <span className="stat--moveSpeed">26% / 34% / 42% / 50% for 2 seconds</span>  and thier <span className="stat--armor">Armor</span> and <span className="stat--magres">Magic Resist</span> is reduced by <b>15%</b> for 4 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> CELESTIAL BLESSING
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
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

          <p className="stat--hp">{Math.round(((70)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 30 / 100)))}
          </p>

          <h5 className="stat--moveSpeed">Bonus Movement Speed:</h5>
          <p className="stat--moveSpeed">{Math.round(atk.moveSpeed * ((25)/100 +(atk.ap * 8 / 10000)))} /
          {' '}{Math.round(atk.moveSpeed * ((30)/100 +(atk.ap * 8 / 10000)))} /
          {' '}{Math.round(atk.moveSpeed * ((35)/100 +(atk.ap * 8 / 10000)))} /
          {' '}{Math.round(atk.moveSpeed * ((40)/100 +(atk.ap * 8 / 10000)))}            
          </p>
    
          <p>
            Heals herself and an allied champion for <span className="stat--hp">70 / 110 / 150 / 190 (<span className="stat--ap">+30% AP</span>)</span>  and grants them  <span className="stat--moveSpeed">25% / 30% / 35% / 40% (<span className="stat--ap">+0.08% AP</span>) Movement Speed</span>  for 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> STARFIRE SPELLBLADE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">
            On-hit bonus damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((12)+(atk.ap * 15 / 100)+(bonus.attack * 10 / 100)))} / 
            {' '}{Math.round(((15)+(atk.ap * 15 / 100)+(bonus.attack * 10 / 100)))} / 
            {' '}{Math.round(((18)+(atk.ap * 15 / 100)+(bonus.attack * 10 / 100)))} / 
            {' '}{Math.round(((21)+(atk.ap * 15 / 100)+(bonus.attack * 10 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((12)+(atk.ap * 15 / 100)+(bonus.attack * 10 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((15)+(atk.ap * 15 / 100)+(bonus.attack * 10 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((18)+(atk.ap * 15 / 100)+(bonus.attack * 10 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((21)+(atk.ap * 15 / 100)+(bonus.attack * 10 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            <b>PASSIVE:</b> Attacks deal bonus <span className="stat--ap">12 / 15 / 18 / 21 (<span className="stat--ad">+10% bonus AD</span> +15% AP) magic damage</span>.
          </p>

          <p>
            <b>ACTIVE:</b> Empowers her next attack to become ranged and deal <span className="stat--ap">bonus
            8% / 9% / 10% / 11% (+0.02% AP) magic damage of the targets missing health</span>.
          </p>

          <p>
          When Kayle reaches level 10, <b>Starfire Spellbalde</b> affects all nearby enemies. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DIVINE JUDGMENT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(100*mod.atkcdr).toFixed(1)} / 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((275)+(atk.ap * 80 / 100)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((400)+(atk.ap * 80 / 100)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)+(bonus.attack * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((275)+(atk.ap * 80 / 100)+(bonus.attack * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((400)+(atk.ap * 80 / 100)+(bonus.attack * 100 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Grants <b>Invulnerability</b> to an allied champion for 2.5 seconds.
          </p>

          <p>
          Blades rain down around the target, dealing <span className="stat--ap">150 / 275 / 400 (<span className="stat--ad">+100% bonus AD</span> +80% AP) magic damage</span>.
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