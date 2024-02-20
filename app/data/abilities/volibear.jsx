export default function volibear({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> THE RELENTLESS STORM
          </h4>
    
          <p>
            Volibear's gains <span className="stat--as">5% + <span className="stat--ap">4% AP</span> ({(champ.asBase * (4 + atk.ap * 4 / 100)/100).toFixed(3)}) Attack Speed</span> for 6 seconds whenever he deals damage with an Ability or Attack, staking up to 5 times (to <span className="stat--as">{(champ.asBase * (4 + atk.ap * 4 / 100)/100*5).toFixed(3)}</span> Attack Speed).
          </p>.

          <p>
           At 5 stacks, Volibear's claws ignite with lightning, causing his Attacks to deal an additional <abbr title="11 + 3.5 per level + 40% AP" className="stat--ap">{Math.round(7.5+ (3.5 * currentLevel) + (atk.ap * 40 / 100))} magic damage</abbr> to the target and 4 closest enemies.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> THUNDERING SMASH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((15)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((40)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((65)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((90)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((15)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((40)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((65)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Volibear gains <span className="stat--moveSpeed">10 / 15 / 20 / 25% Movement Speed</span>, increased to <span className="stat--moveSpeed">20 / 30 / 40 / 50% </span> towards enemy champion for the next 4 seconds. While active, Volibear's next Attack deals <span className="stat--ad">15 / 40 / 65 / 90 (+100% bonus AD) physical damage</span> and Stuns the target for 1 seconds.
          </p>

          <p>
            If Volibear becomes Immobilized before he Stuns a target, Thundering Smash's duration is paused.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> FRENZIED MAUL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((5)+(atk.attack * 100 / 100)+(bonus.health * 5 / 100)))} / 
            {' '}{Math.round(((30)+(atk.attack * 100 / 100)+(bonus.health * 5 / 100)))} / 
            {' '}{Math.round(((55)+(atk.attack * 100 / 100)+(bonus.health * 5 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 100 / 100)+(bonus.health * 5 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((5)+(atk.attack * 100 / 100)+(bonus.health * 5 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((30)+(atk.attack * 100 / 100)+(bonus.health * 5 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((55)+(atk.attack * 100 / 100)+(bonus.health * 5 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 100 / 100)+(bonus.health * 5 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
            Frenzy Damage:
          </h5>

          <p className="stat--critChance">Pre-mitigation: 
            {' '}{Math.round(((8)+(atk.attack * 160 / 100)+(bonus.health * 8 / 100)))} / 
            {' '}{Math.round(((48)+(atk.attack * 160 / 100)+(bonus.health * 8 / 100)))} / 
            {' '}{Math.round(((88)+(atk.attack * 160 / 100)+(bonus.health * 8 / 100)))} / 
            {' '}{Math.round(((128)+(atk.attack * 160 / 100)+(bonus.health * 8 / 100)))}
          </p>

          <p className="stat--critChance">Post-mitigation: 
            {' '}{Math.round(((8)+(atk.attack * 160 / 100)+(bonus.health * 8 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((48)+(atk.attack * 160 / 100)+(bonus.health * 8 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((88)+(atk.attack * 160 / 100)+(bonus.health * 8 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((128)+(atk.attack * 160 / 100)+(bonus.health * 8 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Volibear mauls an enemy, dealing <span className="stat--ad">5 / 30 / 55 / 80 (+100% AD) (<span className="stat--hp">+5% bonus Health</span>) physical damage</span>. If Volibear maul's a champion or Large Monster he goes into a Frenzy for 8 seconds.
          </p>

          <p>
           If this Ability is used when in a Frenzy, its damage is increased to <span className="stat--ad">8 / 48 / 88 / 128 (+160% AD) (<span className="stat--hp">+8% bonus Health</span>) physical damage</span> and Volibear restores <span className="stat--hp">20 / 30 / 40 / 50 (+7 / 8 / 9 / 10% of missing Health)</span>.
          </p>

          <p>
           This Ability applies on-hit effects. <br />
           Deals 80% damage to monsters. 
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SKY SPLITTER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--hp">
            Healing Shield: {Math.round(((atk.health * 14 / 100)+(atk.ap * 75 / 100)))}
          </h5>          

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Base: 
            {' '}{Math.round(((80)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Current target: 
            {' '}{Math.round(((80)+(atk.ap * 50 / 100)+(def.health * 11 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)+(def.health * 12 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100)+(def.health * 13 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)+(def.health * 14 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Volibear summons a thundercloud that fires a lightning bolt, dealing <span className="stat--ap">80 / 110 / 140 / 170 (+50% AP) (<span className="stat--hp">+11 / 12 / 13 / 14% target's Max Health damage</span>)</span> and <span className="stat--moveSpeed"> Slowing by 40%</span> for 2 seconds.
          </p>

          <p>
            If Volibear is inside the blast zone, he gains a <span className="stat--hp">14% Max Health (<span className="stat--ap">+75% AP</span>) Shield</span>  for 3 seconds.
          </p>

          <p>
           Damage against non-champiuons is capped at 150 / 250 / 350 / 450. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> STORMBRINGER
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

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((300)+(bonus.attack * 200 / 100)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((450)+(bonus.attack * 200 / 100)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((600)+(bonus.attack * 200 / 100)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((300)+(bonus.attack * 200 / 100)+(atk.ap * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((450)+(bonus.attack * 200 / 100)+(atk.ap * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((600)+(bonus.attack * 200 / 100)+(atk.ap * 100 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <br />
          <p>
           Volibear transforms and leaps, gaining <span className="stat--hp">175 / 350 / 525 Health</span> and 50 Attack Range for next 12 seconds.
          </p>

          <p>
            Upon landing, Volibear cracks the earth, Disabiling nearby towers for <b>3 / 4 / 5</b> seconds an dealing <span className="stat--ad">300 / 450 / 600 (<span className="stat--ap">+100% AP</span>) (+200% bonus AD) physical damage</span> to them. Nearby enemies are Slowed by 50%, decaying over 1 second. Enemies directly underneath Volibear suffering <span className="stat--ad">300 / 450 / 600 (<span className="stat--ap">+100% AP</span>) (+200% bonus AD) physical damage</span>.
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