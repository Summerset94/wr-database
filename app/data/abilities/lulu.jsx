export default function lulu({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> PIX, FAERIE COMPANION
          </h4>         
    
          <p>
          Pix fires a barrage of 3 bolts that deal a total of <abbr title="15 + 7.5 per level + 15% AP" className="stat--ap">{Math.round((7.5)+(7.5 * currentLevel)+(atk.ap * 15 / 100))} magic damage</abbr> at whatever Lulu attacks. These bolts can be blocked by other units.
          </p>

          <p>
          Pix can attach to other champions by casting some of Lulu's abilities, revealing them if they are an enemy or aiding their attacks instead of Lulu's if they are an ally.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> GLITTERLANCE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((155)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((155)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Lulu and Pix each fire a piercing bolt that deals <span className="stat--ap">50 / 85 / 120 / 155 (+30% AP) magic damage</span> the first enemy hit and <span className="stat--ap">70%</span> damage to additional enemies. Enemies hit are slowed by <span className="stat--moveSpeed">80%</span>, decaying over the next 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> WHIMSY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65}
          </h5>
    
          <p>
          Pix creates a faerie ring, attaching to the first champion that enters for 5 seconds and casting an additional effect on them.
          </p>

          <p>
            <b className="stat--hp">On Allies:</b> Grants <span className="stat--moveSpeed">20% (<span className="stat--ap">+5% AP</span>) Movement Speed</span> and <span className="stat--as">25/30/35/40% Attack Speed</span> for 3.5/4/4.5/5 seconds
          </p>

          <p>
          On Enemies: Polymorphs the enemy for <b>1/1.25/1.5/1.75</b> seconds, disabling them from attacking or casting abilities and reducing their base Movement Speed to <span className="stat--moveSpeed">60</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> HELP, PIX!
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp"> 
            {Math.round(((60)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 60 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Attaches Pix to target enemy or ally champion for 5 seconds.
          </p>

          <p>
            <b>On Allies:</b> Grants a shield that absorbs <span className="stat--hp">60 / 100 / 140 / 180 (<span className="stat--ap">+60% AP</span>) damage</span> for 2.5 seconds.
          </p>

          <p>
          <b>On Enemies:</b> Deals <span className="stat--ap">80 / 120 / 160 / 200 (+40% AP) magic damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> WILD GROWTH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--hp">
            Bonus health:
          </h5>

          <p className="stat--hp">{Math.round(((250)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((400)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((550)+(atk.ap * 50 / 100)))}
          </p>
    
          <p>
          Enlarges an ally champion, knocking nearby enemies into the air for <b>0.75 seconds</b>. For the next 7 seconds, the ally champion grants <span className="stat--hp">250 / 400 / 550 (<span className="stat--ap">+50% AP</span>) bonus Health</span> and slow nearby enemies by 30%.
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