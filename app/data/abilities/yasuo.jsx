export default function yasuo({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> WAY OF THE WANDERER
          </h4>
    
          <p>
            <b>Resolve:</b> Moving builds Flow, which is tracked on Yasuo's resource bar. At max Flow, damage from a champion or monster grants a shield that <abbr className="stat--hp" title="100 + 27.5 per Level">absorbs {Math.round(72.5 + 27.5 * currentLevel)} damage</abbr> for 1.5 seconds.
          </p>

          <p>
            <b>Intent:</b> Yasuo's <span className="stat--critChance">Critical Strike Chance</span> is doubled, but his Critical Strikes deal 10% (165% instead of 175%) less damage.
          </p>

          <p>
            Yasuo converts <span className="stat--critChance">Critical Rate</span> above 100% into Attack Damage at a rate <abbr title="0.8 actually since you get double the chance from items">0.4 Attack Damage per 1% Critical Rate</abbr>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> STEEL TEMPEST
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(4*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 100 / 100)))} / 
            {' '}{Math.round(((55)+(atk.attack * 100 / 100)))} / 
            {' '}{Math.round(((90)+(atk.attack * 100 / 100)))} / 
            {' '}{Math.round(((125)+(atk.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((55)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((125)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
            Crit:
          </h5>

          <p className="stat--critChance">Pre-mitigation: 
          {' '}{Math.round(((20)+(atk.attack * 100 / 100))*atk.critMultiplier)} / 
            {' '}{Math.round(((55)+(atk.attack * 100 / 100))*atk.critMultiplier)} / 
            {' '}{Math.round(((90)+(atk.attack * 100 / 100))*atk.critMultiplier)} / 
            {' '}{Math.round(((125)+(atk.attack * 100 / 100))*atk.critMultiplier)}
          </p>

          <p className="stat--critChance">Post-mitigation: 
          {' '}{Math.round(((20)+(atk.attack * 100 / 100)) * (1 - mod.defPhysRed)*atk.critMultiplier)} / 
            {' '}{Math.round(((55)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed)*atk.critMultiplier)} / 
            {' '}{Math.round(((90)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed)*atk.critMultiplier)} / 
            {' '}{Math.round(((125)+(atk.attack * 100 / 100))* (1 - mod.defPhysRed)*atk.critMultiplier)}         
          </p>
    
          <br />
          <p>
            Thrusts forward, dealing <span className="stat--ad">20 / 55 / 90 / 125 (+100% AD) physical damage</span>.
          </p>

          <p>
           Grants a stack of Gathering Storm if the thrust damages an enemy. At 2 stacks, Steel Tempest launches a whirlwind that knocks enemies Airborne. 
          </p>

          <p>
            If tapped during Sweeping Blade's dash, Steel Tempest will strike as a circle.
          </p>

          <p>
            Steel Tempest is treated as an attack: it can <span className="stat--critCHance">Critically Strike for 65%</span> bonus damage and applies on-hit effects on the first unit hit. Cooldown and cast time are reduced by Attack Speed.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> WIND WALL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)}
          </h5>
    
          <br />
          <p>
            Creates a 300 / 400 / 500 / 600 unit wall that blocks all enemy projectiles for 4 seconds.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SWEEPING BLADE
          </h4>
    
          <h5>
          Target cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 60 / 100)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 60 / 100)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 60 / 100)+(bonus.attack * 20 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 60 / 100)+(bonus.attack * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 60 / 100)+(bonus.attack * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 60 / 100)+(bonus.attack * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 60 / 100)+(bonus.attack * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 60 / 100)+(bonus.attack * 20 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
           Dashes through target enemy, dealing <span className="stat--ap">70 / 80 / 90 / 100 (<span className="stat--ad">+20% bonus AD</span>) (+60% AP) magic damage </span>. Each cast increases the next dash's base damage by 25%, up to +50%.
          </p>

            <p>
             Cannot be re-cast on the same enemy for 8/7/6/5 seconds.
             If Steel Tempest is tapped during this dash, it will strike as a circle. 
            </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> LAST BREATH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(50*mod.atkcdr).toFixed(1)} / 
            {' '}{(40*mod.atkcdr).toFixed(1)} / 
            {' '}{(30*mod.atkcdr).toFixed(1)}
          </h5>
    
          <br />
          <p>
            Blinks to an <b>Airborne</b> enemy champion, dealing <span className="stat--ad">250 / 350  /550 (+150% bonus AD) physical damage</span> and holding all Airborne enemies in the area in the air for an additional 1.25s. Grants maximum Flow but resets all stacks of Gathering Storm.
          </p>

          <p>
           For the next 15s, <span className="stat--critChance">Critical Strikes</span> gain <span className="stat--armor">30% Armor Penetration.</span> 
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