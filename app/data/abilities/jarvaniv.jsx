export default function jarvaniv({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MARTIAL CADENCE
          </h4>

          <h5>
      Cooldown: 
        {' '}{(5).toFixed(1)}
      </h5>

          <p>
          first basic attack against an enemy deals <span className="stat--ad">8% of their current health bonus physical damage (current target at <span className="stat--hp">100% health</span>: {Math.round((def.health * 8 / 100) * (1 - mod.defPhysRed))} damage)</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DRAGON STRIKE
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
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((140)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((200)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((260)+(bonus.attack * 130 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 130 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((140)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((200)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((260)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Extends Jarvan IV's lance, <span className="stat--ad">dealing 80 / 140 / 200 / 260 (+130% bonus AD) 
            physical damage</span>; <br />
            Also reduces target armor by <span className="stat--armor">10% / 15% / 20% / 25%</span> for 3 seconds. <br />
            If the lance contacts a <b>Demacian Standard</b>  it will pull Jarvan IV to the <b>Demacian Standrd's location</b> , knocking up enemies in his path for 0.75 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> GOLDEN AEGIS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} 
          </h5>

          <h5 className="stat--hp">
            Shield (bonus per enemy):
          </h5>
          <p className="stat--hp">
            {Math.round((80)+(atk.health * 4/100))} ({Math.round(atk.health * 16 / 1000)}) /
            {' '}{Math.round((120)+(atk.health * 4/100))} ({Math.round(atk.health * 19 / 1000)}) /
            {' '}{Math.round((160)+(atk.health * 4/100))} ({Math.round(atk.health * 22 / 1000)}) /
            {' '}{Math.round((200)+(atk.health * 4/100))} ({Math.round(atk.health * 25 / 1000)})
          </p>
    
          <p>
          Unleashes a regal aura that slows surrounding enemies by <span className="stat--moveSpeed">20% / 25% / 30% / 35%</span> for 2 seconds; <br />
          Grants a shiel that absorbs <span className="stat--hp">80 / 120 / 160 / 200 (+ 4% maximum Health ) damage</span>  for 5 seconds. <br />
          Absorbs <span className="stat--hp">(1.6% / 1.9% / 2.2% / 2.5% Maximum Health) more damage</span> for each nearby enemy champion.

          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> DEMACIAN STANDARD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{55} / 
            {' '}{55} / 
            {' '}{55} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((135)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((240)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((135)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--as">Passive Attack Speed:</h5>
          <p className="stat--as">
            {(champ.asBase * 20 / 100).toFixed(3)} /
            {' '}{(champ.asBase * 25 / 100).toFixed(3)} /
            {' '}{(champ.asBase * 30 / 100).toFixed(3)} /
            {' '}{(champ.asBase * 35 / 100).toFixed(3)}
          </p>
    
          <p>
            <b>PASSIVE:</b>  Gains <span className="stat--as">20% / 25% / 30% / 35% Attack Speed</span>. <br />
            <b>ACTIVE:</b> Throws a Demacian Standard that deals <span className="stat--ap">80 / 135 / 190 / 245 (+80% AP) magic damage</span> and remains in place for 8 seconds; <br />
            Active standard grants nearby ally champions <span className="stat--as">20% / 25% / 30% / 35% Attack Speed</span>. <br />
            Casting <b>Dragon Strike</b> on Standard will drag Jarcan to Standadrd knocking up any enemy on it's path.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CATACLYSM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(atk.attack * 170 / 100)))} / 
            {' '}{Math.round(((350)+(atk.attack * 170 / 100)))} / 
            {' '}{Math.round(((500)+(atk.attack * 170 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(atk.attack * 170 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((350)+(atk.attack * 170 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((500)+(atk.attack * 170 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <p>
          Heroically leaps to an enemy champion, dealing <span className="stat--ad">200 / 350 / 500 
          (+170% AD) physical damage</span> in an area; <br />
          Creating an arena of impassable terrain around initial target for 3.5 seconds. <br />
          Damage from enemies is reduced by <span className="stat--armor">12 / 16 / 20% inside Cataclysm</span>, the effect will be removed when leaving Cataclysm or the barrier surrounding the terrain collapses.
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