export default function ashe({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> FROST SHOT
          </h4> 

          <h5 className="stat--ad">
           Frost shot AA Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((atk.attack + atk.attack *(0.1 + atk.critChance))))}
            
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((atk.attack + atk.attack *(0.1 + atk.critChance))) * (1 - mod.defPhysRed))}
          </p> 
          
    
          <p>
          Ashe's attacks slow targets hit by <span className="stat--moveSpeed">15% / 17.5% / 20% / 22.5% / 25%</span>  for 2 seconds, causing her to deal increased <span className="stat--ad">10% (+100% Crit) bonus damage</span>  to these targets. Ashe's critical strikes deal no bonus damage but apply a <abbr title="40%-60% based on level" className="stat--moveSpeed">{Math.round(40+(20/14*(currentLevel - 1)))}% slow</abbr> to the target.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> RANGER'S FOCUS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--as">Attack Speed Bonus</h5>
          <p className="stat--as">
            {' '}{(champ.asBase * 30 / 100).toFixed(3)} /
            {' '}{(champ.asBase * 40 / 100).toFixed(3)} /
            {' '}{(champ.asBase * 50 / 100).toFixed(3)} /
            {' '}{(champ.asBase * 60 / 100).toFixed(3)}
          </p>

          <h5 className="stat--ad">
            Flurry damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((atk.attack * 120 / 100)))} / 
            {' '}{Math.round(((atk.attack * 125 / 100)))} / 
            {' '}{Math.round(((atk.attack * 130 / 100)))} / 
            {' '}{Math.round(((atk.attack * 135 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((atk.attack * 120 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 125 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 135 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <p>
            <b>PASSIVE:</b> While Ranger's Focus is not active, Ashe stores 2 stacks of Focus and her basic attacks grant an additional one for 4 seconds, up to 6 at a time. Stacks decay one at a time after expiring. <br />

            <b>ACTIVE:</b> Ashe empower her bow for 6 seconds, gaining <span className="stat--as">30% / 40% / 50% / 60% Attack Speed</span> and barrage target with flurry of arrows. Each flurry consumes 1 stack and deals <span className="stat--ad">120% / 125% / 130% / 135% physical damage</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> VOLLEY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(13.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 115 / 100)))} / 
            {' '}{Math.round(((40)+(atk.attack * 115 / 100)))} / 
            {' '}{Math.round(((60)+(atk.attack * 115 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 115 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 115 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((40)+(atk.attack * 115 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(atk.attack * 115 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 115 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Ashe fires <b>5 / 7 / 9 / 11</b> arrows in a cone, dealing <span className="stat--ad">20 / 40/ 60 / 80 (+115% AD) physical damage</span>. Also applies a critical slow from Frost Shot.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> HAWKSHOT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(45*mod.atkcdr).toFixed(1)} / 
            {' '}{(40*mod.atkcdr).toFixed(1)} / 
            {' '}{(35*mod.atkcdr).toFixed(1)} / 
            {' '}{(30*mod.atkcdr).toFixed(1)} 
          </h5>
    
          <p>
          Ashe fires a hawk spirit that grants vision of enemies along its path. <br />
          <b>RECAST: </b>  Explodes the hawk, granting vision of the area around it for 5 seconds. Units caught in the initial explosion are revealed for 5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> ENCHANTED CRYSTAL ARROW 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((500)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((500)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}      
          </p>
    
          <p>
            Fires a crystal arrow that deals <span className="stat--ap"> 200 / 350 / 500 (+40% AP) magic damage</span> in a small area on impact with enemy champion, stunning initial target for <b>1.5 to 3.5</b> seconds based on arrow's flight distance. Ashe can steer arrow while it flies.
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