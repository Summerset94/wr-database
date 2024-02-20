import { useState, useEffect } from "react";

export default function twistedfate({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {

  const [abilLevel, setAbilLevel] = useState(0);

  useEffect(() => {
    const object = {
      twistedFateE: abilLevel
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
          <span className="marker--ability">P</span> LOADED DICE
          </h4>
    
          <p>
            Gain <span className="stat--armor">2 to 12 bonus gold</span>  upon killing a unit.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> WILD CARDS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((240)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Throws three cards, dealing <span className="stat--ap">60 / 120 / 180 / 240 (+70% AP) magic damage</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> PICK A CARD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40} / 
            {' '}{60} / 
            {' '}{80} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation:
            <span className="stat--vamp">{' '}{Math.round(((30)+(atk.ap * 65 / 100)+(atk.attack * 100 / 100)))}</span> - 
            {' '}<span className="stat--mana">{Math.round(((40)+(atk.ap * 80 / 100)+(atk.attack * 100 / 100)))}</span> - 
            {' '}<span className="stat--armor">{Math.round(((15)+(atk.ap * 50 / 100)+(atk.attack * 100 / 100)))}</span> /

            <span className="stat--vamp">{' '}{Math.round(((50)+(atk.ap * 65 / 100)+(atk.attack * 100 / 100)))}</span> - 
            {' '}<span className="stat--mana">{Math.round(((65)+(atk.ap * 80 / 100)+(atk.attack * 100 / 100)))}</span> - 
            {' '}<span className="stat--armor">{Math.round(((25)+(atk.ap * 50 / 100)+(atk.attack * 100 / 100)))}</span> /

             <span className="stat--vamp">{' '}{Math.round(((70)+(atk.ap * 65 / 100)+(atk.attack * 100 / 100)))}</span> - 
             {' '}<span className="stat--mana">{Math.round(((90)+(atk.ap * 80 / 100)+(atk.attack * 100 / 100)))}</span> - 
             {' '}<span className="stat--armor">{Math.round(((35)+(atk.ap * 50 / 100)+(atk.attack * 100 / 100)))}</span> /

             <span className="stat--vamp">{' '}{Math.round(((90)+(atk.ap * 65 / 100)+(atk.attack * 100 / 100)))}</span> - 
             {' '}<span className="stat--mana">{Math.round(((115)+(atk.ap * 80 / 100)+(atk.attack * 100 / 100)))}</span> - 
             {' '}<span className="stat--armor">{Math.round(((45)+(atk.ap * 50 / 100)+(atk.attack * 100 / 100)))}</span>             
          </p>

          <p className="stat--ap">Post-mitigation: 
            <span className="stat--vamp">{' '}{Math.round(((30)+(atk.ap * 65 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> - 
            {' '}<span className="stat--mana">{Math.round(((40)+(atk.ap * 80 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> -
            {' '}<span className="stat--armor">{Math.round(((15)+(atk.ap * 50 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> / 

            <span className="stat--vamp">{' '}{Math.round(((50)+(atk.ap * 65 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> - 
            {' '}<span className="stat--mana">{Math.round(((65)+(atk.ap * 80 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> -
            {' '}<span className="stat--armor">{Math.round(((25)+(atk.ap * 50 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> /

            <span className="stat--vamp">{' '}{Math.round(((70)+(atk.ap * 65 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> - 
            {' '} <span className="stat--mana">{Math.round(((90)+(atk.ap * 80 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> -
            {' '}<span className="stat--armor">{Math.round(((35)+(atk.ap * 50 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> /

            <span className="stat--vamp">{' '}{Math.round(((90)+(atk.ap * 65 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> - 
            {' '}<span className="stat--mana">{Math.round(((115)+(atk.ap * 80 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span> -
            {' '}<span className="stat--armor">{Math.round(((45)+(atk.ap * 50 / 100)+(atk.attack * 100 / 100)) * (1 - mod.defMagRed))}</span>
          </p>
    
          <br />
          <p>
           <b>First Cast:</b> Start shuffling Twisted Fate's deck.
          </p>

          <p>
            <b>Second Cast:</b> Pick a card to empower his next attack.
          </p>

          <p>
            <b className="stat--vamp">Red Cards:</b> deal <span className="stat--ap">30 / 50 / 70 / 90 (+65% AP) (<span className="stat--ad">+100% AD</span>) magic damage</span> in an area and <span className="stat--moveSpeed">slow by 35/40/45/50%</span> for 3 seconds.
          </p>

          <p>
            <b className="stat--mana">Blue Cards:</b> deal <span className="stat--ap">40 / 65 / 90 / 115 (+80% AP) (<span className="stat--ad">+100% AD</span>) magic damage</span> and and restore <span className="stat--mana">60/90/120/150 Mana</span>.
          </p>

          <p>
            <b className="stat--armor">Gold Cards:</b> deal <span className="stat--ap">15 / 25 / 35 / 45 (+50% AP) (<span className="stat--ad">+100% AD</span>) magic damage</span> and stun for 1.25 / 1.5 / 1.75 / 2 second(s).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> STACKED DECK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 45 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 45 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 45 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 45 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
            Toggle attack speed passive bonus:
            <button onClick={changeNumber}>Change ability level</button> Current ability level: <b className="stat--as">{abilLevel}</b> 
          </p>
    
          <br />
          <p>
           <b>Passive:</b> gain <span className="stat--as">15 / 20 /  25 / 30% Attack Speed.</span>. Every 4th attack deals <span className="stat--ap">60 / 90 / 120 / 150 (+45% AP) bonus magic damage</span> 
          </p>

          <p>
            <b>Active:</b> gain <span className="stat--as">40% ({(champ.asBase * 40 / 100).toFixed(3)}) / 45% ({(champ.asBase * 45 / 100).toFixed(3)}) / 50% ({(champ.asBase * 50 / 100).toFixed(3)}) / 55% ({(champ.asBase * 55 / 100).toFixed(3)}) Attack Speed</span> for 3 seconds. During this time, attacking enemy champions rolls <b>Loaded Dice</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DESTINY
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(110*mod.atkcdr).toFixed(1)} / 
            {' '}{(95*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>
    
          <br />
          <p>
            <b>First Cast:</b> Reveals all enemy champions for 6 / 7 / 8 seconds.
          </p>

          <p>
            <b>Second Cast:</b> Channel for 1.5 seconds to teleport to target location.
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