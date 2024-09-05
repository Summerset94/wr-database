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
            All Ferocity is lost upon leaving combat for 8 seconds.
          </p>

          <p>
            <b>Bonetooth Necklace:</b> Gains <span className="stat--ad">4 / 8 / 12 / 16 / 20% bonus Attack Damage</span>. Bonus grows for each <b>unique</b> champion takedown.
          </p>

          <p>
          Rengar gains <span className="stat--moveSpeed">30% to 50% bonus movement speed</span> based on champion level for 1.5s by casting empowered abilities.
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
            {' '}<span className="stat--critChance">{Math.round(((35 + currentLevel * 15)+(atk.attack * 40 / 100))*(1+atk.critChance*0.75))}</span>  /
            {' '}{Math.round(((50)+(atk.attack * 5 / 100))*(1+atk.critChance*0.75))} / 
            {' '}{Math.round(((90)+(atk.attack * 10 / 100))*(1+atk.critChance*0.75))} / 
            {' '}{Math.round(((130)+(atk.attack * 15 / 100))*(1+atk.critChance*0.75))} / 
            {' '}{Math.round(((170)+(atk.attack * 20 / 100))*(1+atk.critChance*0.75))}
          </p>

          <p className="stat--ad">Post-mitigation:
          {' '}<span className="stat--critChance">{Math.round(((35 + currentLevel * 15)+(atk.attack * 40 / 100)) * (1 - mod.defPhysRed)*(1+atk.critChance*0.75))}</span> /
            {' '}{Math.round(((50)+(atk.attack * 5 / 100)) * (1 - mod.defPhysRed)*(1+atk.critChance*0.75))} / 
            {' '}{Math.round(((90)+(atk.attack * 10 / 100))* (1 - mod.defPhysRed)*(1+atk.critChance*0.75))} / 
            {' '}{Math.round(((130)+(atk.attack * 15 / 100))* (1 - mod.defPhysRed)*(1+atk.critChance*0.75))} / 
            {' '}{Math.round(((170)+(atk.attack * 20 / 100))* (1 - mod.defPhysRed)*(1+atk.critChance*0.75))}          
          </p>
    
          <p>
           Rengar's next 2 attacks within 3 seconds gain <abbr title="40%" className="stat--as">{(champ.asBase * 40 / 100).toFixed(3)} Attack Speed</abbr>. The first attack is empowered to deal an additional <span className="stat--ad">50/90/130/170 (+5 / 10 /15 / 20% AD) physical damage</span>.
          </p>

          <p>
            <b>Ferocity:</b> Gains <span className="stat--as">{(champ.asBase * (40 + 75/14*(currentLevel - 1))/100).toFixed(3)} (40-115% based on level) Attack Speed</span> for 5 seconds instead. The first attack deals an additional <span  className="stat--ad">{35 + currentLevel * 15} (40 + 15 per level) (+40% AD) physical damage</span> instead.
          </p>

          <p>
            <span className="stat--critChance">Critical Rate</span> enhances damage up to a <b>75%</b> at <span className="stat--critChance">100% Critical Rate</span>
          </p>

          <p>
            Deals 60% damage to turrets
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
            <b>Ferocity: </b> Deals <span className="stat--ap">80 / 100 / 110 / 130 (+80% AP) magic damage</span> instead. Rengar also removes all crowd control effects from himself.            
          </p>

          <p>
          If the target dealing damage to Rengar is a monster, then Rengar restores 100% Health equal to the damage he received in the first 2 seconds.
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
            {' '}<span className="stat--critChance">{Math.round(((57.5 + 17.5*(currentLevel))+(bonus.attack * 80 / 100)))}</span> / 
            {' '}{Math.round(((70)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((190)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((250)+(bonus.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
          {' '}<span className="stat--critChance">{Math.round(((57.5 + 17.5*(currentLevel))+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))}</span> /
            {' '}{Math.round(((70)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((190)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((250)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           Throws a bola that deals <span className="stat--ad">70/130/190/250 (+80% bonus AD) physical damage</span> and <span className="stat--moveSpeed">slows by 30 / 50 / 70 / 90% </span> for 1.75 seconds.
          </p>

          <p>
           Hitting the Bola Strike reveals the vision around the target for 2s.
          </p>

          <p>
            <b>Ferocity:</b> Deals <span className="stat--ad">{Math.round(57.5 + 17.5*(currentLevel))} (57.5 + 17.5) (+80% bonus AD) physical damage</span> and <b>roots</b> instead.
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
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
    
          <p>
          Gains <span className="stat--moveSpeed"> 30 / 40 / 50% ({Math.round(atk.moveSpeed * 40 / 100)} / {Math.round(atk.moveSpeed * 50 / 100)} / {Math.round(atk.moveSpeed * 60 / 100)}) Move Speed</span> and reveals the nearest enemy champion for 12 / 14 / 16 seconds. 
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