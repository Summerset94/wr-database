export default function kassadin({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> VOID STONE 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)}
          </h5>
    
          <p>
          Gains a shield that absorbs <span className="stat--magres">{Math.round(50 + (10 * (currentLevel - 1)) + atk.ap * 30 / 100)} magic damage (50-190 based on level <span className="stat--ap">+ 30% AP</span>)</span>   for 1.5s when casting a spell near a visible enemy champion.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> NULL SPHERE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((275)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((275)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Fires an orb that deals <span className="stat--ap">80 / 145 / 210 / 275 (+80% AP) magic damage</span>  and silences the first enemy hit for 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> NETHER BLADE
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
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} 
          </h5>
          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Enhances his next attack withing 4 seconds to gain 250 range, deal an additonal <span className="stat--ap">50 / 80 / 110 / 140 (+50% AP) magic damage</span>  and restore <span className="stat--mana">5% (15% vs. champions) of missing mana</span>.
          </p>

          <p>
          If the atack killed the target Nether Blade's remaining cooldown is reduced by 50%.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> FORCE PULSE
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
            {' '}{70} / 
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} 
          </h5>

          <h5 className="stat--ap">
            Damage <span className="stat--critChance">(enhanced)</span>:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)))} <span className="stat--critChance">({Math.round(((60)+(atk.ap * 50 / 100))*1.4)})</span> / 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100)))} <span className="stat--critChance">({Math.round(((100)+(atk.ap * 50 / 100))*1.4)})</span> / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100)))} <span className="stat--critChance">({Math.round(((140)+(atk.ap * 50 / 100))*1.4)})</span> / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)))} <span className="stat--critChance">({Math.round(((180)+(atk.ap * 50 / 100))*1.4)})</span>
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} <span className="stat--critChance">({Math.round(((60)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed)*1.4)})</span> / 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} <span className="stat--critChance">({Math.round(((100)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed)*1.4)})</span> / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} <span className="stat--critChance">({Math.round(((140)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed)*1.4)})</span> / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} <span className="stat--critChance">({Math.round(((180)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed)*1.4)})</span>          
          </p>
    
          <p>
          Deals <span className="stat--ap">60 / 100 / 140 / 180 (+50% AP) magic damage</span> to enemies and slows them by <span className="stat--moveSpeed">30%</span>  for 1 second. 
          </p>

          <p>
          Force Pulse is enhanced after 6 other abilities are cast nearby, dealing <span className="stat--critChance">40% increased damage</span>  and slowing for <span className="stat--moveSpeed">90%</span> instead.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">4</span> RIFTWALK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(3*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70}
          </h5>

          <h5 className="stat--ap">
            Damage <span className="stat--critChance">(stack bonus damage / max damage)</span>:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)))} <span className="stat--critChance">({Math.round(((80)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000))*0.5)} / {Math.round(((80)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000))*2.5)})</span> / 
            {' '}{Math.round(((100)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)))} <span className="stat--critChance">({Math.round(((100)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000))*0.5)} / {Math.round(((100)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000))*2.5)})</span> / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)))} <span className="stat--critChance">({Math.round(((120)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000))*0.5)} / {Math.round(((120)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000))*2.5)})</span>
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)) * (1 - mod.defMagRed))} <span className="stat--critChance">({Math.round(((80)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)) * (1 - mod.defMagRed)*0.5)} / {Math.round(((80)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)) * (1 - mod.defMagRed)*2.5)})</span> / 
            {' '}{Math.round(((100)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000))* (1 - mod.defMagRed))} <span className="stat--critChance">({Math.round(((100)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)) * (1 - mod.defMagRed)*0.5)} / {Math.round(((100)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)) * (1 - mod.defMagRed)*2.5)})</span> / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000))* (1 - mod.defMagRed))} <span className="stat--critChance">({Math.round(((120)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)) * (1 - mod.defMagRed)*0.5)} / {Math.round(((120)+(atk.ap * 30 / 100)+(atk.mana * 15 / 1000)) * (1 - mod.defMagRed)*2.5)})</span>
          </p>
    
          <p>
            Blinks to target location and deals <span className="stat--ap">80 / 100 / 120 (+30% AP <span className="stat--mana">+1.5% Mana</span>) magic damage</span> to nearby enemies.
          </p>

          <p>
          The next Riftwalk cast within 12 seconds deals <span className="stat--critChance">50% increased damage</span> and costs <span className="stat--mana">200% additional mana</span> (Stacks 3 times).
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