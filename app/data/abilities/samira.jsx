export default function samira({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DAREDEVIL IMPULSE
          </h4>
    
          <p>
           Samira builds a combo by dealing damage with attacks or abilities against enemy champions unique from the previous one. Each one increases her Style from <span className="stat--vamp">"E"</span> to <span className="stat--vamp">"S"</span> grade 6 (total). Samira  gains <span className="stat--moveSpeed">3.5% (15% at max grade) Movement Speed</span> per grade.
          </p>

          <h5 className="stat--ap">
            Current target damage:
          </h5>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round((((5+Number(currentLevel)))) * (1 - mod.defMagRed))} - 
            {' '}{Math.round((((10+Number(currentLevel)*2)))* (1 - mod.defMagRed))}
          </p>
          <p>
          Samira's attacks and abilities in milee range deal an additional <abbr title="6 + 1 per level (+3.5% + 0.5% per level AD)" className="stat--ap">{Math.round(5 + Number(currentLevel) + (atk.attack * (3 + 0.5*Number(currentLevel))/100))}</abbr> to <abbr title="12 + 2 per level (+7% + 1% per level AD)" className="stat--ap">{Math.round(10+Number(currentLevel)*2 + (atk.attack * (6 + Number(currentLevel))/100))} magic damage </abbr> 
           based on the target's missing health.
           </p>

           <p>
            Samira's attack against enemies affected by Immobilizing effects will dash her to her attack range. If the enemy is Knocked Up, she also keeps them Knocked Up for at least 0.5 seconds.
           </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> FLAIR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(3.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(2*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 95 / 100)))} / 
            {' '}{Math.round(((25)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((30)+(atk.attack * 125 / 100)))} / 
            {' '}{Math.round(((35)+(atk.attack * 140 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 95 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((25)+(atk.attack * 110 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((30)+(atk.attack * 125 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(atk.attack * 140 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           Samira fires a shot, dealing <span className="stat--ad">20 / 25 / 30 / 35 (+95 / 110 / 125 / 140% AD) physical damage</span> to the fist enemy hit.
          </p>

          <p>
            If this ability is cast towards an enemy in melee range, Samira will instead slash with her blade in a cone instead, dealing the same damage to all enemies within.            
          </p>

          <p>
            Either hit can critically strike for <span className="stat--critChance">25% bonus damage</span>.
          </p>

          <p>
            If cast during <b>Wild Rush</b> Samira will strike all enemies in fer path upon completion.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BLADE WHIRL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(26*mod.atkcdr).toFixed(1)} / 
            {' '}{(23.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(21*mod.atkcdr).toFixed(1)} / 
            {' '}{(18.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((40)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((60)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((80)+(bonus.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((40)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Samira slashes around her for 0.75 seconds, damaging enemies twice for <span className="stat--ad"> 20 / 40 / 60 / 80 (+80% bonus AD) physical damage</span> each and destroying any enemy missiles that enter the area.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> WILD RUSH 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((45)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((60)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((75)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((90)+(bonus.attack * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((45)+(bonus.attack * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(bonus.attack * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(bonus.attack * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(bonus.attack * 20 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Samira dashes through an enemy (including structures), slashing enemies she passes through dealing <span className="stat--ap">45 / 60 / 75 / 90 (+20% bonus AD) magic damage</span> and gaining <abbr title="25 / 30 / 35 / 40%" className="stat--as">{(champ.asBase * 25 / 100).toFixed(3)} / {(champ.asBase * 30 / 100).toFixed(3)} / {(champ.asBase * 35 / 100).toFixed(3)} / {(champ.asBase * 40 / 100).toFixed(3)} Attack Speed</abbr> for 3 seconds.
          </p>

          <p>
           If Samira scores a <span className="stat--vamp">takedown</span>, <b>Wild Rush's</b> cooldown is reset. 
          </p>

          <p>
            Tapping this ability mid-dash will cast <b>Flair</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> INFERNO TRIGGER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}<abbr title="Static, unaffected by Haste">{(8).toFixed(1)}</abbr> 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{30} / 
            {' '}{0}
          </h5>

          <h5 className="stat--ad">
            Shot damage (<span className="stat--critChance">crit</span>):
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((5)+(atk.attack * 55 / 100)))} (<span className="stat--critChance">{Math.round(((5)+(atk.attack * 55 / 100))*atk.critMultiplier)}</span>) / 
            {' '}{Math.round(((15)+(atk.attack * 55 / 100)))} (<span className="stat--critChance">{Math.round(((15)+(atk.attack * 55 / 100))*atk.critMultiplier)}</span>) / 
            {' '}{Math.round(((25)+(atk.attack * 55 / 100)))} (<span className="stat--critChance">{Math.round(((25)+(atk.attack * 55 / 100))*atk.critMultiplier)}</span>)
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((5)+(atk.attack * 55 / 100)) * (1 - mod.defPhysRed))} (<span className="stat--critChance">{Math.round(((5)+(atk.attack * 55 / 100))* atk.critMultiplier * (1 - mod.defPhysRed))}</span> ) / 
            {' '}{Math.round(((15)+(atk.attack * 55 / 100))* (1 - mod.defPhysRed))} (<span className="stat--critChance">{Math.round(((15)+(atk.attack * 55 / 100))* atk.critMultiplier * (1 - mod.defPhysRed))}</span> ) / 
            {' '}{Math.round(((25)+(atk.attack * 55 / 100))* (1 - mod.defPhysRed))} (<span className="stat--critChance">{Math.round(((25)+(atk.attack * 55 / 100))* atk.critMultiplier * (1 - mod.defPhysRed))}</span> )
          </p>
    
          <p>
           Samira can only use this ability if her current Style rating is <span className="stat--vamp">"S"</span>. 
          </p>

          <p>
          Samira unleashes a torrent of shots from her weapons, <span className="stat--moveSpeed">reducing her Movement Speed by 40%</span> while wildly shooting up 5 enemies around 10 times over 2.23 seconds, each shot dealing <span className="stat--ad">5 / 15 / 25 (+55% AD) physical damage</span>. Each shot can critically strike.
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