export default function draven({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> LEAGUE OF DRAVEN
          </h4> 
          
    
          <p>
          Killing a unit or catching a Spinning Axe grants a stack of Adoration. <br />
          Killing champions consume all Adoration stacks and grant 80 bonus gold + 4 per stack of Adoration. <br />
          When Draven dies, half of Adoration stacks are lost. <br />
          <span className="stat--critChance">Not DRAVEN. DRAAAAAAAVEN.</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> SPINNING AXE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{45} / 
            {' '}{45} / 
            {' '}{45} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((45)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((50)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((55)+(bonus.attack * 110 / 100)))} / 
            {' '}{Math.round(((60)+(bonus.attack * 120 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((45)+(bonus.attack * 90 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((55)+(bonus.attack * 110 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(bonus.attack * 120 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Gains a Spinning Axe, causing his next attack within 6 seconds to deal an additional <span className="stat--ad">45 / 50 / 55 / 60 (+90% / 100% / 110% / 120% bonus AD) physical damage</span>.
          </p>
          <p>
            The Spinning Axe bounces of the target, allowing Draven to catch and regain it. 
          </p>

          <p>
            Draven can hold two Spinning Axes at once.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BLOOD RUSH
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
            {' '}{40} / 
            {' '}{35} / 
            {' '}{30} / 
            {' '}{25} 
          </h5>

          <h5 className="stat--as">
            Bonus attack speed:
          </h5>

          <p className="stat--as">
            {(champ.asBase * 20 / 100).toFixed(3)} / 
            {' '}{(champ.asBase * 25 / 100).toFixed(3)} / 
            {' '}{(champ.asBase * 30 / 100).toFixed(3)} / 
            {' '}{(champ.asBase * 35 / 100).toFixed(3)}
          </p>
    
          <p>
          Gains <span className="stat--as">20% / 25% / 30% / 35% Attack Speed</span> for 3 seconds and <span className="stat--moveSpeed">50% / 55% / 60% / 65% Movement Speed</span>  for 1.5 seconds.          
          </p>

          <p>
            Catching a Spinning Axe refreshes Blood Rush's cooldown.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> STAND ASIDE
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
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((75)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((165)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((210)+(bonus.attack * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((75)+(bonus.attack * 50 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((165)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((210)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          Throws his axes, dealing <span className="stat--ad">75 / 120 / 165 / 210 (+50% bonus AD) physical damage</span>  and knocking enemies aside, slowing them by <span className="stat--moveSpeed">25% / 30% / 35% / 40%</span>  for 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> WHIRLING DEATH 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
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
            {' '}{Math.round(((200)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((300)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((400)+(bonus.attack * 130 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(bonus.attack * 130 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((300)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((400)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <p>
          Hurls two massive axes, dealing <span className="stat--ad">200 / 300 / 400 (+130% bonus AD) physical damage</span>. The axe return to Draven when they reach the edge of the map, hit a champion or upon reactivation. <br />

          Deals 8% less damage as it damages targets, minimum 60%. Upon reversal, the reduction is reset do deal full damage.
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