export default function pantheon({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MORTAL WILL
          </h4>
    
          <p>
            After 5 seconds or abilities Pantheon's next basic ability is enhanced.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> COMET SPEAR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>

          <h5 className="stat--ad">
            Normal Damage (<span className="stat--critChance">crit</span> ):
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 120 / 100)))}
            {' '}(<span className="stat--critChance">{Math.round(((110)+(bonus.attack * 165 / 100)))}</span>) / 
            {' '}{Math.round(((110)+(bonus.attack * 120 / 100)))}
            {' '}(<span className="stat--critChance">{Math.round(((200)+(bonus.attack * 165 / 100)))}</span>) / 
            {' '}{Math.round(((150)+(bonus.attack * 120 / 100)))}
            {' '}(<span className="stat--critChance">{Math.round(((290)+(bonus.attack * 165 / 100)))}</span>) / 
            {' '}{Math.round(((190)+(bonus.attack * 120 / 100)))}
            {' '}(<span className="stat--critChance">{Math.round(((380)+(bonus.attack * 165 / 100)))}</span>)
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 120 / 100)) * (1 - mod.defPhysRed))}
            {' '}(<span className="stat--critChance">{Math.round(((110)+(bonus.attack * 165 / 100)) * (1 - mod.defPhysRed))}</span>) / 
            {' '}{Math.round(((110)+(bonus.attack * 120 / 100))* (1 - mod.defPhysRed))}
            {' '}(<span className="stat--critChance">{Math.round(((200)+(bonus.attack * 165 / 100)) * (1 - mod.defPhysRed))}</span>) / 
            {' '}{Math.round(((150)+(bonus.attack * 120 / 100))* (1 - mod.defPhysRed))}
            {' '}(<span className="stat--critChance">{Math.round(((290)+(bonus.attack * 165 / 100)) * (1 - mod.defPhysRed))}</span>) / 
            {' '}{Math.round(((190)+(bonus.attack * 120 / 100))* (1 - mod.defPhysRed))} 
            {' '}(<span className="stat--critChance">{Math.round(((380)+(bonus.attack * 165 / 100)) * (1 - mod.defPhysRed))}</span>)         
          </p>

          <h5 className="stat--ad">
            Mortal Will (<span className="stat--critChance">crit</span> ):
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 120 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))))}
            {' '}(<span className="stat--critChance">{Math.round(((110)+(bonus.attack * 165 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))))}</span>) / 
            {' '}{Math.round(((110)+(bonus.attack * 120 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))))}
            {' '}(<span className="stat--critChance">{Math.round(((200)+(bonus.attack * 165 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))))}</span>) / 
            {' '}{Math.round(((150)+(bonus.attack * 120 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))))}
            {' '}(<span className="stat--critChance">{Math.round(((290)+(bonus.attack * 165 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))))}</span>) / 
            {' '}{Math.round(((190)+(bonus.attack * 120 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))))}
            {' '}(<span className="stat--critChance">{Math.round(((380)+(bonus.attack * 165 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))))}</span>)
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 120 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))) * (1 - mod.defPhysRed))}
            {' '}(<span className="stat--critChance">{Math.round(((110)+(bonus.attack * 165 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))) * (1 - mod.defPhysRed))}</span>) / 
            {' '}{Math.round(((110)+(bonus.attack * 120 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100)))* (1 - mod.defPhysRed))}
            {' '}(<span className="stat--critChance">{Math.round(((200)+(bonus.attack * 165 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))) * (1 - mod.defPhysRed))}</span>) / 
            {' '}{Math.round(((150)+(bonus.attack * 120 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100)))* (1 - mod.defPhysRed))}
            {' '}(<span className="stat--critChance">{Math.round(((290)+(bonus.attack * 165 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))) * (1 - mod.defPhysRed))}</span>) / 
            {' '}{Math.round(((190)+(bonus.attack * 120 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100)))* (1 - mod.defPhysRed))} 
            {' '}(<span className="stat--critChance">{Math.round(((380)+(bonus.attack * 165 / 100)+(15 + (15*currentLevel) + (bonus.attack *120 / 100))) * (1 - mod.defPhysRed))}</span>)         
          </p>          
    
          <p>
            <b>Tap-cast:</b> Stabs forward, dealing <span className="stat--ad">70 / 110 / 150 / 190 (+130 bonus AD) physical damage</span>. Refunds 60% of Comet Spear's cooldown.
          </p>

          <p>
            <b>Charge-cast:</b> Hurl the spear, dealing the same damage to the first enemy hit and 50% less to subsequent targets.
          </p>

          <p>
          Enemies below <span className="stat--hp">35% Health</span>  are critically hit for <span className="stat--critChance">110 / 200 / 290 / 380 (+165% bonus AD) physical damage</span> 
          </p>

          <p>
            Damage to minions reduced by 20%.
          </p>

          <p>
            <b>Mortal Will:</b> Deals an additional <abbr className="stat--ad" title='30 + 15 per level'>30-240 (+120% bonus AD) physical damage</abbr> 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SHIELD VAULT
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
            {' '}{55}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((220)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((220)+(atk.ap * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--ad">
            Mortal Will bonus:
          </h5>

          <p className="stat--ad"> 
            {' '}{Math.round(((atk.attack * (135+30/14*(currentLevel-1)) / 100)))} ({Math.round(((atk.attack * (135+30/14*(currentLevel-1)) / 100)) * (1 - mod.defPhysRed))} post-mitigation)
          </p>
          
    
          <p>
            Dash to an enemy, stunning for 1 second and dealing <span className="stat--ap">70 / 120 / 170 / 220 (<span className="stat--ap">+100% AP</span>) physical damage</span> 
          </p>

          <p>
          Mortal Will: Follows up with an attack that strikes 3 times, dealing a total of <abbr title="135 - 165 based on level" className="stat--ad">{(Math.round(135 + 30/14*(currentLevel - 1)))}% AD</abbr>
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> AEGIS ASSAULT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{80}
          </h5>

          <h5 className="stat--ad">
            Damage(<span className="stat--critChance">FLURRY</span> + slam):
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            <b className="stat--critChance">{' '}{Math.round(atk.attack)}</b> +
            {' '}{Math.round(((60)+(bonus.attack * 150 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 150 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 150 / 100)))} / 
            {' '}{Math.round(((240)+(bonus.attack * 150 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation:
          <b className="stat--critChance">{' '}{Math.round(atk.attack* (1 - mod.defPhysRed))} </b> + 
            {' '}{Math.round(((60)+(bonus.attack * 150 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 150 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(bonus.attack * 150 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((240)+(bonus.attack * 150 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Block all non-tower damage from a direction for 1.5 seconds and deal <span className="stat--ad">100% AD physical damage</span> to nearby enemies. At the end slam forward and deal <span className="stat--ad">60 / 120 / 180 / 240 (+150% bonus AD) physical damage</span>.
          </p>

          <p>
            Pantheon is <span className="stat-moveSpeed">slowed by up to 50%</span> when moving away from the blocking direction.
          </p>

          <p>
           Recast to end early. Damage to minions is reduced by 50%.
          </p>

          <p>
            <b>Mortal Will:</b> When Pantheon slams his shield he gains <abbr title="60%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 60 / 100)} Move Speed</abbr>  for 1.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> GRAND STARFALL
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
            Landing damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((300)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((500)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((700)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((300)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((500)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((700)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
           <b>Passive:</b> Gains <abbr title="included in calculations from lvl 5 / 9 / 13" className="stat--ad"> 10 / 20 / 30% Armor Penetration</abbr>.
          </p>

          <p>
            <b>Active:</b> strength to leap high into the air. Throws a spear from above which in a small area deals <b>COMET SPEAR (S1) damage</b> and <span className="stat--moveSpeed">slows by 50% for 2 seconds</span>.
          </p>

          <p>
            Then crashes down at the target area. Deals up to <span className="stat--ap">300 / 500 / 700 (+100% AP) magic damage</span> to enemies in a line.
          </p>

          <p>Grand Starfall instantly readies <b>Mortal Will.</b> Damage is decreased by up to 50% at the edge of the landing area.</p>
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