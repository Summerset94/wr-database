export default function jhin({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> WHISPER
          </h4>
    
          <p>
          Jhin's hand cannon, Whisper, carries 4 shots before needing to be reloaded and fires at a fixed rate. (<span className="stat--as"> Attack speed</span> will be converted into <span className="stat--ad">Attack Damage</span>).  <br />
          The final bullet will critically strike and deal additional <span className="stat--ad">10%-25% (based on level) of target's missing health physical damage</span>. 
          </p>
          <p>
            Whenever Jhin critically strikes he gains <span className="stat--moveSpeed">{Math.round(atk.moveSpeed * (10 + ((bonus.as/champ.asBase) * 0.4))/100)} Movement Speed</span> (10% + 0.4% per 1% <span className="stat--as">bonus attack speed</span> ) for 2 seconds.
          </p>
          <p>
            Jhin's <span className="stat--ad">Attack damage</span>  scales with <abbr className="stat--as" title='14-29% based on level'>{Math.round(14 + (15/14*(currentLevel - 1)))}% of bonus Attack Speed</abbr> and <abbr className="stat--critChance" title='23-49% based on level'>{Math.round(23 + (26/14*(currentLevel - 1)))}% of Critical rate</abbr>. Also Jhin receives <abbr title="5-60% based on level" className="stat--ad">{Math.round(5 + 55/14*(currentLevel-1))}% bonus Attack Damage</abbr> from items and level growth. Jhin has his basic <span className="stat--critChance">Critical multiplier</span> reduced to 150% (from 175%).
            </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DANCING GRENADE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ad">
            Initial damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((45)+(atk.attack * 35 / 100)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 45 / 100)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((115)+(atk.attack * 55 / 100)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((150)+(atk.attack * 65 / 100)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((45)+(atk.attack * 35 / 100)+(atk.ap * 60 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 45 / 100)+(atk.ap * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((115)+(atk.attack * 55 / 100)+(atk.ap * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((150)+(atk.attack * 65 / 100)+(atk.ap * 60 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Launches a magical cartridge at an enemy, dealing <span className="stat--ad">45 / 80 / 115 / 150 (+35% / 45% / 55% / 65% AD <span className="stat--ap">+60% AP</span>) physical damage</span>  before bouncing to a nearby target that has not yet been hit. It can hit up to <b>4</b> targets and gains <span className="stat--ad">44% damage</span> each time it kills. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> DEADLY FLOURISH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 40 / 100)))} / 
            {' '}{Math.round(((100)+(atk.attack * 40 / 100)))} / 
            {' '}{Math.round(((140)+(atk.attack * 40 / 100)))} / 
            {' '}{Math.round(((180)+(atk.attack * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.attack * 40 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(atk.attack * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((140)+(atk.attack * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(atk.attack * 40 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Fires a long range shot that stops on the first champion hit, dealing <span className="stat--ad">60 / 100 / 140 / 180 (+40% AD) physical damage</span> to it, and 75% of that damage to minions and monsters hit along the way.
          </p>
          <p>
          If the target champion was struck by Jhin, Jhin's allies, or Lotus Traps within the last 4 seconds, they are rooted for <b>1.25 / 1.5 / 1.75 / 2 seconds</b> and Jhin gaines Movement Speed as though he had crit them.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> CAPTIVE AUDIENCE
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
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.ap * 100 / 100)+(atk.attack * 120 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 100 / 100)+(atk.attack * 120 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 100 / 100)+(atk.attack * 120 / 100)))} / 
            {' '}{Math.round(((260)+(atk.ap * 100 / 100)+(atk.attack * 120 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.ap * 100 / 100)+(atk.attack * 120 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 100 / 100)+(atk.attack * 120 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 100 / 100)+(atk.attack * 120 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((260)+(atk.ap * 100 / 100)+(atk.attack * 120 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Places an invisible Lotus Trap that reveals nearby enemies when walked over. It slows enemies by 30% before dealing <span className="stat--ap">20 / 100 / 180 / 260 (<span className="stat--ad">+120% AD</span> +100% AP) magic damage</span>. 
          </p>
          <p>
          When Jhin kills an enemy champion, a <b>Lotus Trap</b> will spawn and detonate where they were killed.
          </p>
          <p>
          Deals 65% damage to non-champions and champions recelty hit by another trap.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CURTAIN CALL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Base damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.attack * 25 / 100)))} <span className="stat--critChance">({Math.round(((50)+(atk.attack * 25 / 100))*2)})</span> / 
            {' '}{Math.round(((125)+(atk.attack * 25 / 100)))} <span className="stat--critChance">({Math.round(((125)+(atk.attack * 25 / 100))*2)})</span> / 
            {' '}{Math.round(((200)+(atk.attack * 25 / 100)))} <span className="stat--critChance">({Math.round(((200)+(atk.attack * 25 / 100))*2)})</span> 
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.attack * 25 / 100)) * (1 - mod.defPhysRed))} <span className="stat--critChance">({Math.round((((50)+(atk.attack * 25 / 100)) * (1 - mod.defPhysRed))*2)})</span>  / 
            {' '}{Math.round(((125)+(atk.attack * 25 / 100))* (1 - mod.defPhysRed))} <span className="stat--critChance">({Math.round(((125)+(atk.attack * 25 / 100))* (1 - mod.defPhysRed)*2)})</span>  / 
            {' '}{Math.round(((200)+(atk.attack * 25 / 100))* (1 - mod.defPhysRed))} <span className="stat--critChance">({Math.round(((200)+(atk.attack * 25 / 100))* (1 - mod.defPhysRed)*2)})</span> 
          </p>
    
          <p>
            Channels to fire 4 super shots at extreme range in a cone. The shots stop on the first champion hit, slowing it by <span className="stat--moveSpeed">80% for 0.75 seconds</span>;
          </p>
          <p>Each shot deals <span className="stat--ad">50 / 125 / 200 (+25% AD) physical damage</span>, increased by 3% for each 1% health the target is missing.
          </p>
          <p>
            The 4th shot crits for <span className="stat--critChance">200% Damage</span>
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