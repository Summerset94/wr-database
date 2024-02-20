export default function ziggs({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> SHORT FUSE
          </h4>

          <h5 className="stat--ap">Enhanced bouncing bomb damage: {Math.round(((17 + (3 * currentLevel) + (atk.ap * 20))) * (1 - mod.defMagRed))}</h5>

          <p>
          All of Ziggs’ abilities can deal 24% damage to turrets.
          </p>

          <p>
          Enhanced Bouncing Bomb, deal <span className="stat--ap">17 (+ 3 per level) (+20% AP) additional magic damage</span>, 32% to turrets.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BOUNCING BOMB
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((135)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((265)+(atk.ap * 65 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 65 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((135)+(atk.ap * 65 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 65 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((265)+(atk.ap * 65 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Throws a bouncing bomb that deals <span className="stat--ap">70 / 135 / 200 / 265 (+65% AP) magic damage</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SATCHEL CHARGE
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
            {' '}{65}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((115)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((205)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((205)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
           Flings an explosive charge that can be detonated within 4 seconds to deal <span className="stat--ap">70 / 115 / 160 / 205 (+50% AP) magic damage</span> to enemies and knock them away. Ziggs is also knocked away without taking damage.
          </p>

          <p>
           Damages turrets and demolishes them if they are below <span className="stat--hp">15 / 20 / 25 / 30% Health</span>. 
          </p>

          <p>
            Can be detonated while in the air.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((215)+(atk.ap * 35 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 35 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((105)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((215)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Scatters proximity mines that deal <span className="stat--">50 / 105 / 160 / 215 (+35% Ap) magic damage</span> on contact and <span className="stat--moveSpeed">slow by 35 / 40 / 45 / 50%</span> for 2 seconds.
          </p>

          <p>
          Enemies detonating multiple mines take 40% damage from subsequent mines. Mines last 5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> MEGA INFERNO BOMB
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(95*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((270)+(atk.ap * 85 / 100)))} / 
            {' '}{Math.round(((375)+(atk.ap * 85 / 100)))} / 
            {' '}{Math.round(((480)+(atk.ap * 85 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((270)+(atk.ap * 85 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((375)+(atk.ap * 85 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((480)+(atk.ap * 85 / 100))* (1 - mod.defMagRed))}  
          </p>
    
          <br />
          <p>
            Deploys the Mega Inferno Bomb to deal <span className="stat--ap">270 / 375 / 480 (+85% AP) magic damage</span> in a large zone.
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