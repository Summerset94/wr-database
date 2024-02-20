export default function vi({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DENTING BLOWS
          </h4>

          <h5 className="stat--ad">
            Damage agains current target: {Math.round((def.health * (4 + 0.2* currentLevel + (bonus.attack * 0.03)/100))/100 * (1 - mod.defPhysRed))}
          </h5>
    
          <p>
            Every 3rd attack on the same enemy deals <abbr title="4.2% + 0.2% per level + 0.03% bonus AD" className="stat--ad">{Math.round((4 + 0.2* currentLevel + (bonus.attack * 0.03)/100))}% </abbr> of their <span className="stat--hp">max Health</span> as <span className="stat--ad">bonus physical damage</span>, <span className="stat--armor">reduces their Armor by 20%</span> and grants Vi <abbr title="27% + 2% per level" className="stat--as">{(champ.asBase * (25 + currentLevel*2)/100).toFixed(3)} Attack Speed</abbr> for 4 seconds.
          </p>

          <p>
           Deals 300 max damage vs. monsters. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> VAULT BREAKER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((55)+(bonus.attack * 80 / 100)))} - 
            {' '}{Math.round(((55)+(bonus.attack * 80 / 100))*2)} /

            {' '}{Math.round(((90)+(bonus.attack * 80 / 100)))} -
            {' '}{Math.round(((90)+(bonus.attack * 80 / 100))*2)} /

            {' '}{Math.round(((125)+(bonus.attack * 80 / 100)))} -
            {' '}{Math.round(((125)+(bonus.attack * 80 / 100))*2)} / 

            {' '}{Math.round(((160)+(bonus.attack * 80 / 100)))} -
            {' '}{Math.round(((160)+(bonus.attack * 80 / 100))*2)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((55)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} - 
            {' '}{Math.round(((55)+(bonus.attack * 80 / 100)) * 2 * (1 - mod.defPhysRed))} / 

            {' '}{Math.round(((90)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} -
            {' '}{Math.round(((90)+(bonus.attack * 80 / 100)) *2 * (1 - mod.defPhysRed))} /

            {' '}{Math.round(((125)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} - 
            {' '}{Math.round(((125)+(bonus.attack * 80 / 100)) * 2 * (1 - mod.defPhysRed))} / 

            {' '}{Math.round(((160)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} -
            {' '}{Math.round(((160)+(bonus.attack * 80 / 100)) * 2 * (1 - mod.defPhysRed))}
          </p>


    
          <br />
          <p>
            <b>Hold:</b> Charges up a powerful punch, <span className="stat--moveSpeed">slowing Movement Speed by 15%</span> while increasing the punch's damage and dash Cast:distance.
          </p>

          <p>
            <b>Cast:</b> Dashes forward dealing <span className="stat--ad">55 / 90 / 125 / 160 (+80% bonus AD)</span> to <span className="stat--ad">110 / 180 / 250 / 320 (+160% bonus AD)</span> and applying Denting Blows to all enemies hit. Colliding with an enemy champion stops the punch and knocks them back.
          </p>

          <p>
           Deals 75% damage to minions and monsters. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BLAST SHIELD
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
            {' '}{30} / 
            {' '}{20} / 
            {' '}{10} / 
            {' '}{0} 
          </h5>
          <h5 className="stat--hp">
             Shield (stack - full):
          </h5>

          <p className="stat--hp">
            {' '}{Math.round(atk.health * 1.5 / 100)} -
            {' '}{Math.round(60+(atk.health * 1.5 / 100 * 5))} /

            {' '}{Math.round(atk.health * 2 / 100)} -
            {' '}{Math.round(85+(atk.health * 2 / 100 * 5))} /

            {' '}{Math.round(atk.health * 2.5 / 100)} -
            {' '}{Math.round(110+(atk.health * 2.5 / 100 * 5))} /

            {' '}{Math.round(atk.health * 3 / 100)} -
            {' '}{Math.round(135+(atk.health * 3 / 100 * 5))}
          </p>
    
          <br />
          <p>
            <b>Passive:</b> Hitting an enemy with an attack or ability grants a stack of Blast Shield, up to 5 stacks.
          </p>

          <p>
            <b>Active:</b> Generates a shield that absorbs <span className="stat--hp">60 / 85 / 110 / 135 damage</span>for 3 seconds. Each stack consumed adds <span className="stat--hp">1.5 / 2 / 2.5 / 3% Max Health</span> to the shield. At max stacks also grants a burst of <span className="stat--moveSpeed">47% + 5% per ability level Movement Speed.</span> 
          </p>

          <p>
            Blast Shield stacks fall off one at a time and a max of 1 stack is added per attack or ability.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> EXCESSIVE FORCE
          </h4>
    
          <h5>
          Charge cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{20} / 
            {' '}{30} / 
            {' '}{40} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((10)+(atk.attack * 15 / 100)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((35)+(atk.attack * 15 / 100)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((60)+(atk.attack * 15 / 100)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((85)+(atk.attack * 15 / 100)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((10)+(atk.attack * 15 / 100)+(atk.ap * 70 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(atk.attack * 15 / 100)+(atk.ap * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(atk.attack * 15 / 100)+(atk.ap * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((85)+(atk.attack * 15 / 100)+(atk.ap * 70 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Empowers Vi's next attack to deal <span className="stat--ad">10 / 35 / 60 / 85 (+15% AD) (<span className="stat--ap">+70% AP</span>) bonus physical damage</span> to the target and enemies behind it.
          </p>

          <p>
           Vi stores a new charge every 14 / 12 / 10 / 8 seconds and can hold 2 charges at once. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> ASSAULT AND BATTERY 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((150)+(bonus.attack * 140 / 100)))} / 
            {' '}{Math.round(((300)+(bonus.attack * 140 / 100)))} / 
            {' '}{Math.round(((450)+(bonus.attack * 140 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((150)+(bonus.attack * 140 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((300)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((450)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <br />
          <p>
            Chases down an enemy champion, knocking them up for 1.25 seconds and dealing <span className="stat--ad">150 / 300 / 450 (+140% bonus AD) physical damage</span> 
          </p>

          <p>
            Vi Reveals her target and cannot be stopped while chasing it down. Enemies in the way are knocked aside and take <span className="stat--critChance">75% of the damage</span>.
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