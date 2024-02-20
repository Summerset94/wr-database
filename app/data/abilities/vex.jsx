export default function vex({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DOOM 'N GLOOM
          </h4>

          <h5>
          Cooldown: {((22 - 3 * Math.floor((currentLevel-1)/4))*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">Damage pre / post-mitigation:
          {' '}{Math.round(((16 + 8 * currentLevel)+(atk.ap * 20 / 100)))} / {Math.round(((16 + 8 * currentLevel)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))}</h5>


    
          <p>
          Every <abbr title="22 - 3 seconds per 4 levels">{22 - 3 * Math.floor((currentLevel-1)/4)} seconds</abbr> Vex becomes afflicted with Doom, causing her next basic Ability to interrupt dashes and Fear enemies for <abbr title="0.75 + 0.25 at level 5 / 9 / 13">{(0.75 + 0.25 * Math.floor((currentLevel-1)/4)).toFixed(2)} seconds</abbr>.
          </p>

          <p>
           Whenever a nearby enemy dashes or blinks, Vex marks them with Gloom for 6 seconds. Vex's next Attack against a Gloomed enemy deals an additional <abbr title="24 + 8 per level" className="stat--ap">{16 + 8 * currentLevel} (+20% AP) magic damage </abbr> and reduces this Ability's Cooldown by 25%.
          </p>

          <p>
            Non-champion targets take <abbr title="40% + 10% for each 4 levels">{(40 + 10 * Math.floor((currentLevel-1)/4)).toFixed(2)} damage</abbr> and refund 10% of this Ability's Cooldown.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> MISTRAL BOLT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
            {' '}{55}
            {' '}{60}
            {' '}{65}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Vex launches a wave of mist that deals <span className="stat--ap">50 / 110 / 170 / 230 (+60% AP) magic damage</span>. After a delay, the wave becomes smaller and faster.
          </p>

          <p>
            Consumes Gloom on enemies hit.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> PERSONAL SPACE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75}
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((50)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((175)+(atk.ap * 70 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((175)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((65)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((175)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Vex gains <span className="stat--hp">50 / 85 / 120 / 155 (<span className="stat--ap">+70% AP</span>) Shield</span> for 2.5 seconds and emits a shockwave that deals <span className="stat--ap">65 / 120 / 175 / 230 (+30% AP) magic damage</span>.
          </p>

          <p>
           Consumes Gloom on enemies hit. 
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> LOOMING DARKNESS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} / 
            {' '}{110} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 55 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Vex commands Shadow to fly to a location. Upon arriving, it deals <span className="stat--ap">50 / 80 / 110 / 140 (+40 / 45 / 50 / 55% AP) magic damage</span> and <span className="stat--moveSpeed">Slows by 30 / 35 / 40 / 45% </span> for 2 seconds.
          </p>

          <p>
            Applies Gloom to enemies hit.
          </p>

          <p>
            Enemies Feared by this Ability move away from the center rather than from Vex. The size of the affected area increases the further Vex casts this from herself.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((175)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((125)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((175)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
            Second damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <br />
          <p>
            Shadow excitedly surges forward, dealing <span className="stat--ap">75 / 125 / 175 (+20%) magic damage</span>  and marking the first enemy champion hit for 4 seconds.
          </p>

          <p>
            <b>Recast:</b> Dash to the marked champion, dealing <span className="stat--ap">150 / 250 / 350 (+50% AP) magic damage</span>  on arrival.
          </p>

          <p>
           If the marked champion dies within <b>6 seconds</b> of taking damage from this Ability, its cooldown is temporarily reset. 
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