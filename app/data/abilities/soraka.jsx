export default function soraka({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SALVATION
          </h4>
    
          <p>
            Soraka gains <abbr title="100%" className="stat--moveSpeed">{Math.round(atk.moveSpeed)} Movement Speed</abbr> when moving toward allied champions below <span className="stat--hp">35% Health.</span> 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> STARCALL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
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
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--hp">
            Self Healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((60)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 45 / 100)))}
          </p>


          <br />              
          <p>
            Calls a star, dealing <span className="stat--ap">60 / 110 / 160 / 210 (+40% AP) magic damage</span> and <span className="stat--moveSpeed">slowing by 30%  for 2 seconds</span>. If an enemy champion is hit, reduces the cooldown of Astral Infusion by 2 seconds.
          </p>

          <p>
            Soraka also gains Rejuvenation, <span className="stat--hp">healing for 60 / 90 / 120 / 150 (+45% AP)</span> over 2.5 seconds. 
          </p>

          <p>
            After healing an ally champion 3 times, Starcall is empowered to deal <span className="stat--critChance">140% damage</span> in a larger area.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ASTRAL INFUSION
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(3*mod.atkcdr).toFixed(1)} / 
            {' '}{(2*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>
          <h5 className="stat--hp">
            Healing / max overheal:
          </h5>

          <p className="stat--hp">
                {Math.round(((50)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((155)+(atk.ap * 55 / 100)))}
          </p>

          <br />    
          <p>
            Heals an allied champion for <span className="stat--hp">50 / 85 / 120 / 155 (+55% AP) health</span>. 
          </p>

          <p>
           Excess healing is converted into a shield with a maximum shield value of <span className="stat--armor">50 / 85 / 120 / 155 (<span className="stat--ap">+55% AP</span>)</span>
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> EQUINOX
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <br />
    
          <p>
            Create a zone that deals <span className="stat--ap">70 / 120 / 170 / 220 (+40% AP) magic damage</span> and silences enemies.
          </p>

          <p>
           The zone expires after 1.5 seconds, dealing <span className="stat--ap">70 / 120 / 170 / 220 (+40% AP) magic damage</span> and rooting for 1.25 / 1.5 / 1.75 / 2 second(s).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> WISH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(75*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((150)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((225)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 45 / 100)))}
          </p>

          <br />
    
          <p>
            Heals all allied champions for <span className="stat--hp">150 / 225 / 300 (<span className="stat--ap">+45% AP</span>) health</span>,  increased by 50% if the ally is below 35% Health.
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