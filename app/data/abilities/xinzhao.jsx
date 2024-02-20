export default function xinzhao({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DETERMINATION
          </h4>
    
          <p>
            Every third attack deals an additional <abbr title="22% + 2% per Level AD" className="stat--ad">{Math.round(atk.attack*(20 + 2 * currentLevel)/100)} physical damage</abbr> and heals for <abbr title="7 - 60 based on level + 10% AD + 40% AP" className="stat--hp">{Math.round(7 + (53/14 * currentLevel-1) + (atk.attack * 10 / 100)+(atk.ap * 40 / 100))} Health</abbr>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> THREE TALON STRIKE
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
            {' '}{30}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(bonus.attack * 40 / 100)))} / 
            {' '}{Math.round(((28)+(bonus.attack * 40 / 100)))} / 
            {' '}{Math.round(((36)+(bonus.attack * 40 / 100)))} / 
            {' '}{Math.round(((44)+(bonus.attack * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(bonus.attack * 40 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((28)+(bonus.attack * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((36)+(bonus.attack * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((44)+(bonus.attack * 40 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Empowers the next three attacks to deal an additional <span className="stat--ad">20 / 28 / 36 / 44 (+40% bonus AD) physical damage</span> and reduce the cooldown of other abilities by 1 second.
          </p>

          <p>
            The third attack knocks the target up for 0.75 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> WIND BECOMES LIGHTNING
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45}
          </h5>

          <h5 className="stat--ad">
            Slash:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((60)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((70)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.attack * 50 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(atk.attack * 50 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((70)+(atk.attack * 50 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 50 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--ad">
            Thrust:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((85)+(atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((130)+(atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((175)+(atk.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((85)+(atk.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(atk.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((175)+(atk.attack * 80 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Slashes his spear, dealing <span className="stat--ad">50 / 60 / 70 / 80 (+50% AD) physical damage</span> and slowing by 50% for 1.5 seconds. Xin Zhao then thrusts his spear, dealing  <span className="stat--ad">40 / 85 / 130 / 175 (+80% AD) physical damage</span> and slowing by 50% for 1.5 seconds.
          </p>

          <p>
           The furthest enemy champion hit is Challenged for 3 seconds, increasing Audacious Charge's cast range at them. 
          </p>

          <p>
            Attack Speed reduces cast time.
            Deals 50% damage to minions.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> AUDACIOUS CHARGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((155)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((155)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Dashes to an enemy, dealing <span className="stat--">50 / 85 / 120 / 155 (+80% AP) magic damage</span> to all nearby enemies and slowing them by 30% for 0.5 second. Xin Zhao gains <abbr title="40 / 47.5 / 55 / 62.5%" className="stat--as">{(champ.asBase * 40 / 100).toFixed(3)} / {(champ.asBase * 47.5 / 100).toFixed(3)} / {(champ.asBase * 55 / 100).toFixed(3)} / {(champ.asBase * 65.5 / 100).toFixed(3)} Attack Speed</abbr> for 5 seconds.
          </p>

          <p>
            This ability's cast range is increased against a Challenged target.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> 
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
            {' '}{Math.round(((75)+(bonus.attack * 100 / 100)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((150)+(bonus.attack * 100 / 100)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((225)+(bonus.attack * 100 / 100)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ad">Current target: 
            {' '}{Math.round(((75)+(bonus.attack * 100 / 100)+(atk.ap * 80 / 100)+(def.health * 15 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((150)+(bonus.attack * 100 / 100)+(atk.ap * 80 / 100)+(def.health * 15 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((225)+(bonus.attack * 100 / 100)+(atk.ap * 80 / 100)+(def.health * 15 / 100))* (1 - mod.defPhysRed))}    
          </p>
    
          <br />
          <p>
            <b>Passive:</b> The last champion hit by an attack or Audacious Charge is now Challenged.
          </p>

          <p>
            <b>Active:</b> Sweeps his spear, dealing <span className="stat--ad">75 / 150 / 225 (+100% bonus ad) (<span className="stat--ap">+80% AP</span>) physical damage</span> plus <span className="stat--hp">15% of enemies Max Health</span> and knocking them back except the Challenged one. For the next 5 seconds, Xin Zhao blocks damage from enemies outside the indicated zone around him.
          </p>

          <p>
            Deals 600 max damage against monsters.
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