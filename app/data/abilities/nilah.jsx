export default function milah({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> JOY UNENDING
          </h4>
    
          <p>
          After an attack crits, Nilah heals herself for <span className="stat--ad">20% of the damage dealt</span>. Excess healing is converted into an equivalent amount of <span className="stat--hp">shield</span>  that lasts 6 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> FORMLESS BLADE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(4*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((10)+(atk.attack * 90 / 100))*(1 + atk.critChance))} / 
            {' '}{Math.round(((15)+(atk.attack * 100 / 100))*(1 + atk.critChance))} / 
            {' '}{Math.round(((20)+(atk.attack * 110 / 100))*(1 + atk.critChance))} / 
            {' '}{Math.round(((25)+(atk.attack * 120 / 100))*(1 + atk.critChance))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round((((10)+(atk.attack * 90 / 100)) * (1 - mod.defPhysRed))*(1 + atk.critChance))} / 
            {' '}{Math.round((((15)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed))*(1 + atk.critChance))} / 
            {' '}{Math.round((((20)+(atk.attack * 110 / 100))* (1 - mod.defPhysRed))*(1 + atk.critChance))} / 
            {' '}{Math.round((((25)+(atk.attack * 120 / 100))* (1 - mod.defPhysRed))*(1 + atk.critChance))}          
          </p>
    
          <p>
            <b>PASSIVE:</b> Gains <span className="stat--critChance">35%</span> of current <span className="stat--critChance">Critical Strike Chance</span> as <span className="stat--armor">Armor Penetration</span> (Included in calculations).
          </p>

          <p>
            <b>ACTIVE:</b> Nilah cracks her whip-blade in a straight line, dealing <span className="stat--ad">10 / 15 / 20 / 25 (+90 / 100 / 110 / 120% AD) physical damage</span> to enemies hit. Every <span className="stat--critChance">1% Critical Rate increases damage by 1%</span>.
          </p>

          <p>
          After Formless Blade hits an enemy, Nilah gains <abbr title="10 - 60% based on level" className="stat--as">{((champ.asBase)* (10 + 50/14 * (currentLevel - 1))/100).toFixed(3)} Attack Speed</abbr> and 125 bonus Attack Range. Her attacks also deal <span className="stat--ad">100% physical damage</span> to enemies in a cone for 4 seconds reduced by 80% against non-champion.
          </p>

          <p>
          When Formless Blade is cast during Slipstream, Nilah leaves behind a wave that is sent towards her at the end of the dash, dealing the same damage to enemies hit.
          </p>

          <p>
          Deals 25% damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> JUBILANT VEIL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(21*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(19*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45}
          </h5>
    
          <p>
          Nilah envelops herself in mist for 1.75 seconds, during witch she gains <abbr title="15/20/25/30%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 15 / 100)} / {Math.round(atk.moveSpeed * 20 / 100)} / {Math.round(atk.moveSpeed * 25 / 100)} / {Math.round(atk.moveSpeed * 30 / 100)} Movement Speed</abbr>, reduces <span className="stat--magres"> incoming magic damage taken by 25%</span> and becomes <span className="stat--armor"> immune to non-tower attacks</span>.
          </p>

          <p>
          If there are allied champions nearby, the nearest allied champion gains the same effects, and the duration of the effects Nilah gained is extended by 1 second. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SLIPSTREAM
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
            {' '}{40}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.attack * 20 / 100)))} / 
            {' '}{Math.round(((100)+(atk.attack * 20 / 100)))} / 
            {' '}{Math.round(((130)+(atk.attack * 20 / 100)))} / 
            {' '}{Math.round(((160)+(atk.attack * 20 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.attack * 20 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(atk.attack * 20 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(atk.attack * 20 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(atk.attack * 20 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Nilah dashes forward for a fixed distance, dealing <span className="stat--ad">70 / 100 / 130 / 160 (+20% AD) physical damage</span> to any enemies that she passes through.
          </p>

          <p>
          Empowered attacks reduce the cooldown of this ability by 1 second. Cooldown is further reduced by 1 second after hitting a champion. Hitting any unit will also refresh this ability's cooldown.
          </p>

          <p>
          Cooldown cannot be refreshed again within 10 seconds.
          If no unit was hit, immediately enters cooldown. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> APOTHEOSIS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{80}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 140 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 140 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 140 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 140 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))}
          </p>

          <h5 className="stat--ad">
            Blade whip damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((125)+(bonus.attack * 120 / 100)))} / 
            {' '}{Math.round(((225)+(bonus.attack * 120 / 100)))} / 
            {' '}{Math.round(((325)+(bonus.attack * 120 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((125)+(bonus.attack * 120 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((225)+(bonus.attack * 120 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((325)+(bonus.attack * 120 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <p>
          Nilah whirls her whip-blade, dealing <span className="stat--ad">60 / 120 / 180 (+140% bonus AD) physical damage</span> continuously over 1 second and reducing the enemy's <span className="stat--moveSpeed">Movement Speed by 10%</span>  for 3 seconds.
          </p> 

          <p>
          When keeping her whip-blade, Nilah also deals <span className="stat--ad">125 / 225 / 325 (+120% bonus AD) physical damage</span> and pulls nearby enemies toward her. Nilah also heals herself and nearby allied champions by <abbr title="20% + 30% critchance" className="stat--hp">{20 + (atk.critChance * 30)}%</abbr> of the damage dealt to enemy champions.
          </p>

          <p>
          Excess healing is converted into a shield that lasts 6 seconds.
          Non-champion units are healed by 10% instead.
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