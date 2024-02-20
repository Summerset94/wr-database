import { useState, useEffect } from "react";

export default function singed({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [ultLevel, setUltLevel] = useState(0);

  useEffect(() => {
    const object = {
      singedR: ultLevel
    };
    updateAbilitiesBonus(object)
  }, [ultLevel]);  

  const changeNumber = () => {
    setUltLevel(oldNum => oldNum < 3 ? oldNum + 1 : 0);    
  }

  
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> NOXIOUS SLIPSTREAM
          </h4>
    
          <p>
            Draft off of nearby champions, gaining <span className="stat--moveSpeed">20% bonus Movement Speed</span> for 2 seconds.
          </p>

          <p>
            Each champion has a 10 second cooldown.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> POISON TRAIL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{12} per Second
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((30)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((40)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((50)+(atk.ap * 35 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.ap * 35 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((30)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((40)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((50)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
           <b>Toggle:</b> Lay a poisonous trail that deals <span className="stat--ap">20 / 30 / 40 / 50 (+35% AP) magic damage</span>  per second
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> MEGA ADHESIVE
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
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} 
          </h5>
    
          <p>
            Tosses an adhesive that sticks to the ground for 3 seconds. Enemies in the area are <span className="stat--moveSpeed">slowed by 35 / 40 / 45 / 50%</span> and grounded, preventing the use of movement abilities.
          </p>

          <p>
            Flinging an enemy into the zone briefly roots them.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> FLING
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{80}
          </h5>

          <h5 className="stat--ap">
            Damage (current target):
          </h5>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((65)+(def.health * 5 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(def.health * 6 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((95)+(def.health * 7 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(def.health * 8 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
           Flings an enemy over Singed's shoulder, dealing <span className="stat--ap">65 / 80 / 95 / 110 (<span className="stat--hp">+5 / 6 / 7 / 8% of target's Max Health</span>) magic damage</span>
          </p>

          <p>
           If the enemy lands in Mega Adhesive, they are rooted for 1.25 / 1.5 / 1.75 / 2 second(s). 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> INSANITY POTION
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>
    
          <p>
            Drink a potent brew of chemicals, granting 30/55/80 <span className="stat--ap">Ability Power</span>, <span className="stat--armor">Armor</span>, <span className="stat--magres">Magic Resist</span>, <span className="stat--moveSpeed">Movement Speed</span>, 6/13/20 <span className="stat--hp">Health Regen</span> and <span className="stat--mana">Mana Regen</span>
          </p>
         
          <p>
            Toggle ultimate's active bonus:
            <button onClick={changeNumber}>Change ult level</button> Current ult level: <b className="stat--armor">{ultLevel}</b> 
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