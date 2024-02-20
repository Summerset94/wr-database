import { useState, useEffect } from "react";

export default function rengar({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [abilLevel, setAbilLevel] = useState(0);

  useEffect(() => {
    const object = {
      rengarP: abilLevel
    };
    updateAbilitiesBonus(object)
  }, [abilLevel]);  

  const changeNumber = (e) => {
    e.preventDefault
    setAbilLevel(oldNum => oldNum < 5 ? oldNum + 1 : 0);
  }

  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> UNSEEN PREDATOR
          </h4>

          <p>
            Toggle <b>Bonetooth Necklace</b> bonus:
            <br />

            <button type='button' onClick={changeNumber}>Change stacks number</button> Current stacks: <b className="stat--armor">{abilLevel}</b> 
          </p>
    
          <p>
          If Rengar is in brush or camouflaged, he will leap to the target within his next attack. If Rengar has no Ferocity he gains 1 Ferocity.
          </p>

          <p>
          Gains 1 Ferocity upon casting a basic ability.
          Reaching 4 Ferocity enhances his next basic ability, allowing it to be cast separately from the base version.
          </p>

          <p>
            All Ferocity is lost upon leaving combat.
          </p>

          <p>
            <b>Bonetooth Necklace:</b> Gains <abbr title="for 1 / 2 / 3 / 4 / 5 unique champions takedowns" className="stat--ad">1 / 4 / 9 / 16 / 25% bonus Attack Damage</abbr> 
          </p>
          
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> SAVAGERY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage (<span className="stat--critChance">Ferocity</span> / normal):
          </h5>

          <p className="stat--ad">Pre-mitigation:
            {' '}<span className="stat--critChance">{Math.round(((25 + currentLevel * 15)+(atk.attack * 40 / 100)))}</span>  /
            {' '}{Math.round(((40)+(atk.attack * 5 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 10 / 100)))} / 
            {' '}{Math.round(((120)+(atk.attack * 15 / 100)))} / 
            {' '}{Math.round(((160)+(atk.attack * 20 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation:
          {' '}<span className="stat--critChance">{Math.round(((25 + currentLevel * 15)+(atk.attack * 40 / 100)) * (1 - mod.defPhysRed))}</span> /
            {' '}{Math.round(((40)+(atk.attack * 5 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 10 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(atk.attack * 15 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(atk.attack * 20 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           Rengar's next 2 attacks within 3 seconds gain <abbr title="40%" className="stat--as">{(champ.asBase * 40 / 100).toFixed(3)} Attack Speed</abbr>. The first attack is empowered to deal an additional <span className="stat--ad">40 / 80 / 120 / 160 (+5 / 10 /15 / 20% AD) physical damage</span>.
          </p>

          <p>
            <b>Ferocity:</b> Gains <abbr title="40-115% based on level" className="stat--as">{(champ.asBase * (40 + 75/14*(currentLevel - 1))/100).toFixed(3)} Attack Speed</abbr> for 5 seconds instead. The first attack deals an additional <abbr title="40 + 15 per level" className="stat--ad">{25 + currentLevel * 15} (+40% AD) physical damage</abbr> instead.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BATTLE ROAR
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--critChance">
            Ferocity damage:
          </h5>

          <p className="stat--critChance">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--critChance">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Rengar roars, dealing <span className="stat--ap">60 / 100 / 140 / 180 (+80% AP) magic damage</span> and <span className="stat--hp"> healing for 60%</span> of damage taken in the last 2 seconds.
          </p>

          <p>
            <b>Ferocity: </b> Deals <span className="stat--ap">80 / 100 / 110 / 130 (+80% AP) magic damage</span> instead. Rengar also gains <abbr title="40%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 40 /100)} Movement Speed</abbr> for 2.5 seconds and removes all crowd control effects from himself.            
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> BOLA STRIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--ad">
            Damage(<span className="stat--critChance">Ferocity</span> / normal):
          </h5>

          <p className="stat--ad">Pre-mitigation:
            {' '}<span className="stat--critChance">{Math.round(((65 + 17.5*(currentLevel - 1))+(bonus.attack * 80 / 100)))}</span> / 
            {' '}{Math.round(((60)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((240)+(bonus.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
          {' '}<span className="stat--critChance">{Math.round(((65 + 17.5*(currentLevel - 1))+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))}</span> /
            {' '}{Math.round(((60)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((240)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           Throws a bola that deals <span className="stat--ad">60 / 120 / 180 / 240 (+80% bonus AD) physical damage</span> and <span className="stat--moveSpeed">slows by 30 / 50 / 70 / 90% </span> for 1.75 seconds.
          </p>

          <p>
            <b>Ferocity:</b> Deals <abbr title="65 + 17.5 per level" className="stat--ad">{Math.round(65 + 17.5*(currentLevel - 1))} (+80% bonus AD) physical damage</abbr> and <b>roots</b> instead.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> THRILL OF THE HUNT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
    
          <p>
          Gains <abbr title="30 / 40 / 50%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 30 / 100)} / {Math.round(atk.moveSpeed * 40 / 100)} / {Math.round(atk.moveSpeed * 50 / 100)} Move Speed</abbr> and reveals the nearest enemy champion for 12 / 14 / 16 seconds. 
          </p>

          <p>
          Rengar becomes <b>camouflaged</b> after 1 second and can leap without being in a bush. Leaping to an enemy champion shreds target's armor by <abbr title='applies before armor penetration. Theoretically can lower armor below 0' className="stat--ad">16 / 24 / 32 for 4 seconds</abbr> . 
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