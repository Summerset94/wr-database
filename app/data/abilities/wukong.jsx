export default function wukong({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CRUSHING BLOWS
          </h4>
    
          <p>
            Wukong and his clones's attacks and abilities apply Crushing Blows to champions and epic monsters for 5 seconds (max 5). For each stack, Wukong and his clones deal <span className="stat--ad">4% increased damage</span> to the target.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> GOLDEN STAFF
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.attack * 35 / 100)))} / 
            {' '}{Math.round(((60)+(atk.attack * 40 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 45 / 100)))} / 
            {' '}{Math.round(((100)+(atk.attack * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.attack * 35 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(atk.attack * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 45 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(atk.attack * 50 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((50)+(atk.attack * 40 / 100)+(bonus.health * 16 / 100)))} / 
            {' '}{Math.round(((70)+(atk.attack * 40 / 100)+(bonus.health * 16 / 100)))} / 
            {' '}{Math.round(((90)+(atk.attack * 40 / 100)+(bonus.health * 16 / 100)))} / 
            {' '}{Math.round(((10)+(atk.attack * 40 / 100)+(bonus.health * 16 / 100)))}
          </p>
    
          <br />
          <p>
            Gains 150 range for his next attack after casting an ability for 5 seconds.
          </p>

          <p>
            Empowers his next attack to deal an additional <span className="stat--ad">40 / 60 / 80 / 100 (+35 / 40 / 45 / 50% AD) physical damage</span> and heal Wukong for <span className="stat--hp">50 / 70 / 90 / 110 (<span className="stat--ad">+40% AD</span>) (+16% bonus Health)</span>.
          </p>

          <p>
            Wukong and his clone's attacks reduce Golden Staff's cooldown by 0.5 seconds.
            <br />
            Heal is reduced by 50% against non-champions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> WARRIOR TRICKSTER
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
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{75} 
          </h5>
    
          <br />
          <p>
            Becomes invisible for 1 seconds, leaving behind a clone for 3 / 3.5 / 4 / 4.5 seconds that attacks nearby enemies for <span className="stat--ad">20 / 30 / 40 / 50% damage.</span>
          </p>

          <p>
            The clone will mimic Wukong's <b>Golden Staff</b> and <b>Cyclone</b>.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> NIMBUS STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((95)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((165)+(bonus.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((95)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((165)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Dashes to a target while sending clones to 2 additional targets, dealing <span className="stat--ad">60 / 95 / 130 / 165 (+80% bonus AD) physical damage</span>. The clones strike the original target if there are no additional targets for <span className="stat--ad">15% damage</span>.
          </p>

          <p>
            Gains <abbr title="25/35/45/55%" className="stat--as">{(champ.asBase * 25 / 100).toFixed(3)} / {(champ.asBase * 35 / 100).toFixed(3)} / {(champ.asBase * 45 / 100).toFixed(3)} / {(champ.asBase * 55 / 100).toFixed(3)} Attack Speed</abbr>  for 4 seconds after dashing.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CYCLONE
          </h4>
    
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

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Base: 
            {' '}{Math.round(atk.attack * 220 / 100)}
          </p>

          <p className="stat--ad">Current target: 
            {' '}{Math.round(((def.health * 8 / 100)+(atk.attack * 220 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((def.health * 12 / 100)+(atk.attack * 220 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((def.health * 16 / 100)+(atk.attack * 220 / 100))* (1 - mod.defPhysRed))}   
          </p>
    
          <br />
          <p>
            Extends his staff and spins to gain <span className="stat--moveSpeed">20% Movement Speed</span>, dealing  damage equal to <span className="stat--ad">(220% AD) (<span className="stat--hp">+8 / 12 / 16% of target's Max Health</span>) as physical damage</span> over 2 seconds. Enemies that are hit for the first time are knocked up.
          </p>

          <p>
            Can be recast once within 8 seconds. Clone mimics the cast and also knocks up target's and deal reduced damage.
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