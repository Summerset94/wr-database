export default function alistar({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> TRIUMPHANT ROAR 
          </h4>

          <h5>
          Cooldown: 
            {' '}{(40*mod.atkcdr).toFixed(1)}
          </h5>

          <p>
            When Alistar takes damage, he heals himself for <abbr title="27-160 based on level" className="stat--hp">{Math.round( (17.5 )+ (9.5 * currentLevel))}</abbr> and nearby allied champions for <abbr title="54-320 based on level" className="stat--hp">{Math.round((35) + (19 * currentLevel))}</abbr>. Knocking up or stunning champions with Alistar's abilities reduces the cooldown by 10 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PULVERIZE
          </h4>

          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
          Alistar smashes the ground, dealing <span className="stat--ap">60 / 110 / 160 / 210 (+50% AP) Magic Damage</span> to nearby enemies and tossing them into the air for 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> HEADBUTT
          </h4>

          <h5>
          Cooldown: 
            {' '}{(13.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((260)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((260)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
            Alistar rams a target with his head, dealing <span className="stat--ap">50 / 120 / 190 / 260 (+60% AP) Magic Damage</span> and knocking the target back. <br />
            Can be cast on turrets to deal 75% damage.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> TRAMPLE
          </h4>

          <h5>
          Cooldown: 
            {' '}{(11.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
            Alistar tramples the ground beneath him for 5 seconds, dealing up to <span className="stat--ap">100 / 150 / 200 / 250 (+40% AP) Magic Damage</span> to nearby enemies through 10 pulses with a pulse every 0.5 seconds and gaining a Trample stack each time at least one enemy champion is damaged, up to 5 stacks. <br />
            At 5 Trample stacks Alistar's next basic attack within 5 seconds is empowered to deal <abbr title="40-320 based on level" className="stat--ap">{(20) + (20 * currentLevel)} Magic Damage</abbr> to target and stun it for 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> UNBREAKABLE WILL
          </h4>

          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <p>
            Alistar let's out the wild roar, removes all crowd control effects from himself and gains <b>55% / 65% / 75%</b> damage reduction for 7 seconds.
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