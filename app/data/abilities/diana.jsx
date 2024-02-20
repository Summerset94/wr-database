export default function diana({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> MOONSILVER BLADE
          </h4>

          <h5 className="stat--ap"><abbr title="pre-post mitigation">Damage: {Math.round(((15 + 15 * currentLevel)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((15 + 15 * currentLevel)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}</abbr> 
          </h5> 

          <h5 className="stat--as">Attack Speed: {(0.667 * (25 + 5 * currentLevel)/100).toFixed(3)}</h5>
    
          <p>
          Using an ability causes Diana's next 3 attacks to gain <abbr title="30-100% based on level" className="stat--as">{25 + 5 * currentLevel}% Attack speed</abbr> for 4 seconds. <br />

          Every thid attack deals <abbr title="30-240 based on level" className="stat--ap">{(15 + 15 * currentLevel)} (+50% AP) magic damage</abbr> in an area. <br />

          Deals 50% damage to structures, and 110% damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> CRESCENT STRIKE
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
            {' '}{55} / 
            {' '}{65} / 
            {' '}{75} / 
            {' '}{85} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((195)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((105)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((195)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Unleashes an arcing bolt of energy that deals <span className="stat--ap"> 60 / 105 / 150 / 195 (+70% AP) magic damage </span>and applies <b>Moonlight</b> for 3 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> PALE CASCADE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(11.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Damage per sphere:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((25)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((40)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((55)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((25)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((40)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((55)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((70)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--hp">Shield:</h5>

          <p className="stat--hp">
            {Math.round(40)+(atk.ap * 40 / 100)} /
            {' '}{Math.round(60)+(atk.ap * 40 / 100)} /
            {' '}{Math.round(80)+(atk.ap * 40 / 100)} /
            {' '}{Math.round(100)+(atk.ap * 40 / 100)}
          </p>
    
          <p>
          Creates 3 spheres that orbit Diana for 5 seconds. Upon contact with enemies the spheres detonate, dealing <span className="stat--ap">25 / 40 / 55 / 70 (+20% AP) magic damage</span>.

          Also grants a shield that absorbs <span className="stat--hp"> 40 / 60 / 80 / 100 (+40% AP) damage</span>. If the third sphere detonates, the shield is increased by <span className="stat--hp"> 40 / 60 / 80 / 100 (+40% AP)</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> LUNAR RUSH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} 
          </h5>
    
          <p>
          Dashes to a point near an enemy, dealing <span className="stat--ap">40 / 75 / 110 / 145 (+25% AP) magic damage </span>and removing Moonlight in an area. <br />
          
          Lunar Rush's Cooldown is reduced to 0.5 seconds if it removes <b>Moonlight</b> from an enemy.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> MOONFALL
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

          <h5 className="stat--ap">
           Minimum damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
           Maximum damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((300)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((400)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((500)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((300)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((400)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((500)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          <b>HOLD:</b> Summons the moon, slowing enemies by <span className="stat--moveSpeed">20%</span> and applying <b>Moonlight</b> in a growing area.

          <b>RELEASE:</b> Slams the moon down, spiraling enemies toward Diana and dealing <span className="stat--ap">150 / 200 / 250 (+40% AP) to 300 / 400 / 500 (+80% AP) magic damage</span> (scaling with charge time).
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