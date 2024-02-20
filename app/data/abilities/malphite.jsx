import {useState, useEffect} from 'react';

export default function malphite({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [abilLevel, setAbilLevel] = useState(0);

  useEffect(() => {
    const object = {
      malphiteW: abilLevel
    };
    updateAbilitiesBonus(object)
  }, [abilLevel]);  

  const changeNumber = () => {
    setAbilLevel(oldNum => oldNum < 4 ? oldNum + 1 : 0);
  }

  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> GRANITE SHIELD
          </h4>
    
          <p>
            Get <abbr title="11% Max Health" className="stat--hp">{Math.round(atk.health * 11 / 100)} damage shield</abbr> after not taking damage for <abbr title="At level 1 / 5 / 11">8 / 7 / 6 seconds</abbr>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span>  SEISMIC SHARD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Launches a shard that deals <span className="stat--ap">70 / 130 / 190 / 250 (+50% AP) magic damage</span>, slows the target by <span className="stat--moveSpeed">15 / 20 / 25 / 30%</span> and hasting Malphite by <span className="stat--moveSpeed">15 / 20 / 25 / 30% </span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> THUNDERCLAP
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
            {' '}{25}
          </h5>
          <h5 className="stat--ad">
            First attack:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 40 / 100)+(atk.armor* 30 / 100)))} / 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)+(atk.armor* 30 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)+(atk.armor* 30 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 40 / 100)+(atk.armor* 30 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((30)+(atk.ap * 40 / 100)+(atk.armor* 30 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)+(atk.armor * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)+(atk.armor * 30 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 40 / 100)+(atk.armor * 30 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--ad">
            Attack bonus:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((10)+(atk.ap * 20 / 100)+(atk.armor* 15 / 100)))} / 
            {' '}{Math.round(((20)+(atk.ap * 20 / 100)+(atk.armor * 15 / 100)))} / 
            {' '}{Math.round(((30)+(atk.ap * 20 / 100)+(atk.armor * 15 / 100)))} / 
            {' '}{Math.round(((40)+(atk.ap * 20 / 100)+(atk.armor * 15 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((10)+(atk.ap * 20 / 100)+(atk.armor * 15 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((20)+(atk.ap * 20 / 100)+(atk.armor * 15 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((30)+(atk.ap * 20 / 100)+(atk.armor * 15 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((40)+(atk.ap * 20 / 100)+(atk.armor * 15 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <p>
            Toggle armor  bonus:
            <button onClick={changeNumber}>Change ability level</button> Current ability level: <b className="stat--armor">{abilLevel}</b> 
          </p>
    
          <p>
            <b>PASSIVE:</b> Gain <span className='stat--armor'>20 / 25 / 30 / 35% bonus Armor</span> 
          </p>

          <p>
            <b>ACTIVE:</b> For the next 6 seconds, attacks deal <span className="stat--ad">10 / 20 / 30 / 40 (<span className="stat--ap">+20% AP</span>) (<span className="stat--armor">+15% Armor</span>) physical damage</span> in a cone. The first attack is empowered to deal <span className="stat--ad">30 / 50 / 70 / 90 (<span className="stat--ap">+40% AP</span>) (<span className="stat--armor">+30% Armor</span>) bonus physical damage</span> to the target.
          </p>         
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> GROUND SLAM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)}
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
            {' '}{Math.round(((50)+(atk.ap * 50 / 100)+(atk.armor * 35 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100)+(atk.armor * 35 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)+(atk.armor * 35 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 50 / 100)+(atk.armor * 35 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((50)+(atk.ap * 50 / 100)+(atk.armor * 35 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100)+(atk.armor * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 50 / 100)+(atk.armor * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 50 / 100)+(atk.armor * 35 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Slams the ground, dealing <span className="stat--ap">50 / 100 / 150 / 200 (<span className="stat--ap">+50% AP</span>) (<span className="stat--armor">+35% Armor</span>) magical damage</span> to nearby enemies and reducing their attack speed by <span className="stat--as">30 / 35 / 40 / 45%</span>  for 3s.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> UNSTOPPABLE FORCE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
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
            {' '}{Math.round(((200)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((400)+(atk.ap * 90 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((200)+(atk.ap * 90 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((300)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((400)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Charges to the target area, dealing <span className="stat--ap">200 / 300 / 400 (+90% AP) magic damage</span> and knocking up nearby enemies for 1.5 seconds.
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