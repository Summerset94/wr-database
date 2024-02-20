export default function yone({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> WAY OF THE HUNTER
          </h4>

          <h5 className="stat--ad">Current target AA pair damage:</h5>

          <p>
            <span className="stat--ad">{Math.round(atk.attack * (1 - mod.defPhysRed))}</span> - <span className="stat--ad">{Math.round(atk.attack * (1 - mod.defPhysRed)/2)}</span> + <span className="stat--ap">{Math.round(atk.attack * (1 - mod.defMagRed)/2)}</span>
          </p>
    
          <p>
            <b>Steel and Spirit:</b> Every other attack deals <span className="stat--ad">50% of the attack's damage</span> as <span className="stat--ap">magic damage</span> instead.
          </p>

          <p>
            <b>Intent:</b> Yone's  <span className="stat--critChance">Critical Strike Chance</span> is doubled, but his Critical Strikes deal 10% (165% instead of 175%) less damage.
          </p>

          <p>
            Yone converts <span className="stat--critChance">Critical Rate</span> above 100% into Attack Damage at a rate <abbr title="0.8 actually since you get double the chance from items">0.4 Attack Damage per 1% Critical Rate</abbr>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> MORTAL STEEL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(4*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((25)+(atk.attack * 100 / 100)))} / 
            {' '}{Math.round(((50)+(atk.attack * 100 / 100)))} / 
            {' '}{Math.round(((75)+(atk.attack * 100 / 100)))} / 
            {' '}{Math.round(((100)+(atk.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((25)+(atk.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((75)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
            Crit:
          </h5>

          <p className="stat--critChance">Pre-mitigation: 
          {' '}{Math.round(((25)+(atk.attack * 100 / 100))*atk.critMultiplier)} / 
            {' '}{Math.round(((50)+(atk.attack * 100 / 100))*atk.critMultiplier)} / 
            {' '}{Math.round(((75)+(atk.attack * 100 / 100))*atk.critMultiplier)} / 
            {' '}{Math.round(((100)+(atk.attack * 100 / 100))*atk.critMultiplier)}
          </p>

          <p className="stat--critChance">Post-mitigation: 
          {' '}{Math.round(((25)+(atk.attack * 100 / 100)) * (1 - mod.defPhysRed)*atk.critMultiplier)} / 
            {' '}{Math.round(((50)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed)*atk.critMultiplier)} / 
            {' '}{Math.round(((75)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed)*atk.critMultiplier)} / 
            {' '}{Math.round(((100)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed)*atk.critMultiplier)}         
          </p>
    
          <br />
          <p>
           Thursts forward, dealing <span className="stat--">25 / 50 / 75 / 100 (+100% AD) physical damage</span>.
          </p>

          <p>
            Mortal Steel is treated as an attack: it can <span className="stat--critChance">Critically Strike</span>  for bonus damage and applies on-hit effects to all units hit. Cooldown and cast time are reduced by <span className="stat--as">Attack Speed</span>.
          </p>

          <p>
            Grants a stack of Gathering Storm if the thrust damages an enemy. At 2 stacks, Mortal Steel dashes Yone forward and launches a whirlwind that knocks enemies Airborne.
          </p>

          <p>
            Deals 80% damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SPIRIT CLEAVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--hp">
            Healing Shield:
          </h5>

          <p className="stat--hp">
            Base: {Math.round(((50)+(bonus.attack * 85 / 100)))} / 
            {' '}1 Champion hit: {Math.round(((50)+(bonus.attack * 85 / 100))*2)} / 
            {' '}2+ Champions hit: {Math.round(((50)+(bonus.attack * 85 / 100))*2.4)}
          </p>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Current target: 
            {' '}{Math.round((((25)+(def.health * 12 / 100)) * (1 - mod.defPhysRed))/2 + (((25)+(def.health * 12 / 100)) * (1 - mod.defMagRed))/2)} / 
            {' '}{Math.round((((35)+(def.health * 13 / 100))* (1 - mod.defPhysRed))/2 + (((35)+(def.health * 13 / 100))* (1 - mod.defMagRed))/2)} / 
            {' '}{Math.round((((45)+(def.health * 14 / 100))* (1 - mod.defPhysRed))/2 + (((45)+(def.health * 14 / 100))* (1 - mod.defMagRed))/2)} / 
            {' '}{Math.round((((55)+(def.health * 15 / 100))* (1 - mod.defPhysRed))/2 + (((55)+(def.health * 15 / 100))* (1 - mod.defMagRed))/2)}          
          </p>
    
          <br />
          <p>
            Cleaves in a cone, dealing <span className="stat--armor">25 / 35 / 45 / 55</span> plus <span className="stat--hp">12 / 13 / 14 / 15% of the target's maximum Health</span> as equal parts <span className="stat--ad">physical</span> and <span className="stat--ap"> magic damage</span>.
          </p>

          <p>
            Gains a shield that <span className="stat--">absorbs 50 (<span className="stat--ad">+85% bonus AD</span>) damage</span> for 1.5 seconds if Spirit Cleave hits an enemy, increased by 100% on hitting a champion and 40% on subsequent champion hits.
          </p>

          <p>
            Deals 60-200 (based on level) minimum damage against minions. <br />
            Deals 30-280 (based on level) minimum damage against monsters.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SOUL UNBOUND
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
    
          <br />
          <p>
           Dashes forward, entering Spirit Form and leaving his body behind for 5 seconds. 
          </p>

          <p>
            During Spirit Form, Yone gains <span className="stat--moveSpeed">10% Movement Speed</span>  that increases over the duration and marks champions damaged with his attacks or abilities.            
          </p>

          <p>
           When Soul Unbound ends, Yone returns to his body and marked enemies take <span className="stat--vamp">24 / 28 / 32 / 36%</span> of the damage Yone dealt to them <span className="stat--vamp">as true damage</span>. 
          </p>

          <p>
            <b>Re-cast:</b> End Soul Unbound early.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FATE SEALED
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((350)+(atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((500)+(atk.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round((((200)+(atk.attack * 80 / 100)) * (1 - mod.defPhysRed))/2 + (((200)+(atk.attack * 80 / 100)) * (1 - mod.defMagRed))/2)} / 
            {' '}{Math.round((((350)+(atk.attack * 80 / 100))* (1 - mod.defPhysRed))/2 + (((350)+(atk.attack * 80 / 100))* (1 - mod.defMagRed))/2)} / 
            {' '}{Math.round((((500)+(atk.attack * 80 / 100))* (1 - mod.defPhysRed))/ 2 + (((500)+(atk.attack * 80 / 100))* (1 - mod.defMagRed))/ 2)}
          </p>
    
          <br />
          <p>
           Strikes all enemies along a path for <span className="stat--">200 / 350 / 500 (+80% AD) physical</span> and <span className="stat--ap">magical damage</span>, teleporting behind the last champion hit and knocking them towards Yone.
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