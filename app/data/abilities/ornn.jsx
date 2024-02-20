export default function ornn({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> LIVING FORGE
          </h4>
    
          <p>
          Ornn can spend gold to forge items anywhere on the map.
          </p>

          <p>
          Ornn gains an additional <abbr title="at level 1 / 5 / 9 / 13">7 / 12 / 17 / 22%</abbr> bonus <span className="stat--armor">Armor</span>, <span className="stat--magres">Magic Resistance</span> and <span className="stat--hp">Health</span> from all sources.
          </p>

          <p>
          Upon reaching level 7, crafting items with Living Forge grants a nearby ally 5 stacks of Living Forge, allowing them to purchase items anywhere on the map. This buff stacks up to 15 times, this effect can be triggered every 3 levels (7  / 10  / 13).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> VOLCANIC RUPTURE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((15)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((50)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((85)+(atk.attack * 110 / 100)))} / 
            {' '}{Math.round(((120)+(atk.attack * 110 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((15)+(atk.attack * 110 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(atk.attack * 110 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((85)+(atk.attack * 110 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(atk.attack * 110 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Ornn slams the ground, creating a fissure dealing <span className="stat--ad">15 / 50 / 85 / 120 (+110% AD) physical damage</span> and <span className="stat--moveSpeed">slowing by 55% for 2 seconds</span>. A pillar of rock forms at the fissure's end for 4 seconds.
          </p>

          <p>
          The fissure stops shortly after hitting an enemy champion.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BELLOWS BREATH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45}
          </h5>

          <h5 className="stat--ap">
            Current target:
          </h5>

          <p className="stat--ap">Brittle damage: 
            {' '}{Math.round(((def.health * 10 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((def.health * 11 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((def.health * 12 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((def.health * 13 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p className="stat--ap">Brittle damage: 
            {' '}{Math.round((def.health * (5+(15/14*(currentLevel - 1))))/100 * (1 - mod.defMagRed))}
          </p>

    
          <p>
          Ornn stomps forward Unstoppably while breathing fire, dealing <span className="stat--ap">10 / 11 / 12 / 13% Max Health magic damage</span> over 0.75 seconds. Enemies hit by the final bout of flame become <b>Brittle</b> for 3 seconds.
          </p>

          <p>
          Immobilizing effects on Brittle targets have their duration increased by 30% and deal an additional <abbr title="5-20% based on level" className="stat--ap">5 - 20% max Health magic damage</abbr>. Ornn's Attacks against <b>Brittle</b> targets Knock them Back, dealing additional damage.
          </p>

          <p>
          Deals a minimum of <span className="stat--ap">80 / 130 / 180 / 230 magic damage</span>  to minions, and a max of <span className="stat--ap">155 / 190 / 225 / 260 magic damage</span> to jungle monsters, Immobilizing deals a maximum of 250 damage to monsters.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SEARING CHARGE
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
            {' '}{35}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(bonus.armor * 40 / 100)+(bonus.magres * 40 / 100)))} / 
            {' '}{Math.round(((140)+(bonus.armor * 40 / 100)+(bonus.magres * 40 / 100)))} / 
            {' '}{Math.round(((200)+(bonus.armor * 40 / 100)+(bonus.magres * 40 / 100)))} / 
            {' '}{Math.round(((260)+(bonus.armor * 40 / 100)+(bonus.magres * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(bonus.armor * 40 / 100)+(bonus.magres * 40 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((140)+(bonus.armor * 40 / 100)+(bonus.magres * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((200)+(bonus.armor * 40 / 100)+(bonus.magres * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((260)+(bonus.armor * 40 / 100)+(bonus.magres * 40 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Ornn charges, dealing <span className="stat--ad">80 / 140 / 200 / 260 (<span className="stat--armor">40% bonus Armor</span>) (<span className="stat--magres">+40% bonus Magic Resistance</span> ) physical damage</span>. If Ornn rams into terrain, he creates a shockwave that Knocks Up enemies for 1.25 seconds and applies the same damage to those in the area.
          </p>

          <p>
            Ornn's charge destroys magma pillars and terrain created by enemies and reduces the cooldown of this skill by 25%.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CALL OF THE FORGE GOD
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
    
          <p>
            Ornn summons a massive lava elemental, which stampedes towards him, dealing <span className="stat--ap">125 / 175 / 225 (+20% AP) magic damage</span>, and applies <b>Brittle</b> for 3 seconds. The elemental also <span className="stat--moveSpeed">slows by up to 40 / 50 / 60%</span>  for 2 seconds, based on Ornn's level.
          </p>

          <p>
          Ornn can recast this to dash with a headbutt. If he dashes into the elemental, he redirects and empowers it, causing it to Knock Up the first champion hit for 1 second and subsequent champions for 0.5 seconds. The elemental also deals <span className="stat--ap">125 / 175 / 225 (+20% AP) magic damage</span>.
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