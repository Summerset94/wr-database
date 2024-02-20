export default function kaisa({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SECOND SKIN
          </h4>
    
          <p>
            <b>Living weapon:</b> Kai'sa's abilities evolve on finishing full item.
          </p>

          <p>
            <b>Caustic Wounds:</b>  Kai'sa's attacks stack Plasma for 4 seconds and deal <span className="stat--ap">{(4.5 + currentLevel/2).toFixed(1)} (+15% AP) bonus magic damage</span>. Plasma detonates at 5 stacks, dealing <span className="stat--ap">15% (+0.025% AP) bonus magic damage</span> of their missing Health.
          </p>

          <p>Nearby allies apply 1 stack to champions they Immobilize.</p>

          <p>Plasma detonations deal a max of 400 damage to monsters.</p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> ICATHIAN RAIN
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
            {' '}{55} / 
            {' '}{55} / 
            {' '}{55} / 
            {' '}{55} 
          </h5>

          <h5 className="stat--ad">
            Damage per missile:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((40)+(bonus.attack * 50 / 100)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((60)+(bonus.attack * 50 / 100)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((80)+(bonus.attack * 50 / 100)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((100)+(bonus.attack * 50 / 100)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((40)+(bonus.attack * 50 / 100)+(atk.ap * 30 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(bonus.attack * 50 / 100)+(atk.ap * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(bonus.attack * 50 / 100)+(atk.ap * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(bonus.attack * 50 / 100)+(atk.ap * 30 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Launches 6 missiles that split evenly among nearby enemies, each dealing <span className="stat--ad">40 / 60 / 80 / 100 (+50% bonus AD <span className="stat--ap">+30% AP</span>) physical damage</span>. Additional hits on champions or monsters deal 25% damage.
          </p>

          <p>
            <b>Living Weapon:</b>  Icathain Rain instead fires 12 missiles.
          </p>

          <p>Minions below 35% health take 150% damage.</p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> VOID SEEKER
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
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 60 / 100)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 60 / 100)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 60 / 100)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 60 / 100)+(atk.attack * 110 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 60 / 100)+(atk.attack * 110 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 60 / 100)+(atk.attack * 110 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 60 / 100)+(atk.attack * 110 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 60 / 100)+(atk.attack * 110 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Fires a blast that reveals the first enemy hit, adds 2 Plasma stacks, and deals <span className="stat--ap">30 / 60 / 90 / 120 (<span className="stat--ad">+110% AD</span> +60% AP) magic damage</span>.
          </p>

          <p>
            <b>Living Weapon:</b> Adds 3 stacks and refunds 70% Cooldown on champion hits.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SUPERCHARGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} 
          </h5>
    
          <p>
            Charges up for 1 second, gaining <abbr title='60% / 65% / 70% / 75% (+100% Attack Speed)' className="stat--moveSpeed">{Math.round((atk.moveSpeed * 60 / 100)+(bonus.as / champ.asBase / 100))} / {Math.round((atk.moveSpeed * 65 / 100)+(bonus.as / champ.asBase / 100))} / {Math.round((atk.moveSpeed * 70 / 100)+(bonus.as / champ.asBase / 100))} / {Math.round((atk.moveSpeed * 75 / 100)+(bonus.as / champ.asBase / 100))} Movement Speed</abbr>.
          </p>

          <p>
            For 4 seconds after charging gain <abbr title="45% / 55% / 65% / 75%" className="stat--as">{(champ.asBase * 45 / 100).toFixed(3)} / {(champ.asBase * 55 / 100).toFixed(3)} / {(champ.asBase * 65 / 100).toFixed(3)} / {(champ.asBase * 75 / 100).toFixed(3)} Attack speed</abbr>.
          </p>

          <p>
            <b>Living Weapon:</b> Grants invisibility during the charge up.
          </p>

          <p>
          Attacks reduce Supercharge's Cooldown by 0.5 seconds.  Charge time and Movement Speed scale with Attack Speed.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> KILLER INSTINCT
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

          <h5 className="stat--hp">
           Shield strength:
          </h5>

          <p className="stat--hp">
            {Math.round(((75)+(atk.attack * 100 / 100)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((100)+(atk.attack * 100 / 100)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((125)+(atk.attack * 100 / 100)+(atk.ap * 70 / 100)))}
          </p>
    
          <p>
          Dash to a location near an enemy champion marked by Plasma, gaining a shield that aborbs <span className="stat--hp">75 / 100 / 125 (<span className="stat--ad">+100% AD</span> <span className="stat--ap">+75% AP</span>) damage</span> for 2 seconds.
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