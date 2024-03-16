export default function yuumi({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> BOP 'N' BLOCK
          </h4>
    
          <p>
            Yuumi's attacks against champions grant her <abbr title="50 + 10 per Level +25% AP" className="stat--hp">{Math.round(40 + (10 * currentLevel)+ (atk.ap * 25 / 100))} damage shield</abbr>. This effect has a 18 second cooldown.
          </p>

          <p>
            Shields and haste effects Yuumi placed on herself will be passed on to her <b className="stat--armor">Attached</b>  ally.            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PROWLING PROJECTILE
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
            {' '}{60}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 20 / 100)))} /
            {' '}{Math.round(((220)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} /
            {' '}{Math.round(((220)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--magres">
            Attached base Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 30 / 100)))} /
            {' '}{Math.round(((270)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} /
            {' '}{Math.round(((270)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}         
          </p>
    
          <br />
          <p>
           Steers an errant missile, dealing <span className="stat--ap">60 / 100 / 140 / 180 / 220 (+20% AP) magic damage</span> to the first enemy hit.
          </p>

          <p>
            f Yuumi is Attached, the missile will be enhanced if travels for 0,75s before impacting, dealing <span className="stat--ap">70 / 120 / 170 / 220 / 270  (+30% AP)</span> <span className="stat--hp">plus 2 / 3 / 4 / 5 / 6% current Health</span> magic damage instead and slows champions by 20% for 1 second.            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> YOU AND ME!
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)}
          </h5>
    
          <br />
          <p>
           <b>Passive:</b> Increases <span className="stat--armor">Attached ally's</span> <span className="stat--magres">Adaptive Force</span> by <span className="stat--ad">8 / 14 / 20 / 26 (+2% + 0.15% per level ally's bonus AD)</span> or <span className="stat--ap">16 / 28 / 40 / 52 (+2% + 0.15% per level ally's AP)</span>.
          </p>

          <p>
           Yuumi also gains the same amount of Adaptive Force. 
          </p>

          <p>
            <b>Active:</b> Dashes to an ally champion and Attaches to them. While Yuumi is Attached, she follows her partner's movement and is Untargetable except from towers.
          </p>

          <p>
           Immobilizing effects on Yuumi place You and Me! on a 5 second cooldown 
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> ZOOMIES
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
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} / 
            {' '}{110} 
          </h5>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((10)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((20)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((30)+(atk.ap * 10 / 100)))} / 
            {' '}{Math.round(((40)+(atk.ap * 10 / 100)))}
          </p>
    
          <br />
          <p>
            Yuumi restores <span className="stat--hp">20 / 30 / 40 / 50 (<span className="stat--ap">+10% AP</span>) Health</span> to herself and gains <span className="stat--moveSpeed">15 (<span className="stat--ap">+5% AP</span>) Movement Speed</span> and <abbr className="stat--as" title='bonus Attack Speed is calculated based on Champions basic Attack Speed. So no way to calculate how much you give for now.'>30 / 35 / 40 / 45% Attack Speed</abbr> for 3 seconds.
          </p>
          <p>
            Her next 3 attacks and abilities hits heal for <span className="stat--hp">20 / 30 / 40 / 50 (+10% AP)</span> within 5 seconds.
          </p>

          <p>
            If Yuumi is Attached, this Ability affects her ally instead.            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FINAL CHAPTER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Wave Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 15 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 15 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 15 / 100))* (1 - mod.defMagRed))}  
          </p>
    
          <br />
          <p>
            Channels for 3.5 seconds, launching 7 waves dealing <span className="stat--ap">80 / 100 / 120 (+15% AP) magic damage</span> Waves after the first deal 50% magic damage. Champions hit by 3 waves are rooted for 1.5 seconds.
          </p>

          <p>
            Yuumi cannot move and cast <b>You and Me!</b> and <b>Zoomies</b>  while channeling.
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