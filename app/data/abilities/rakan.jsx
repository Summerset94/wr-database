export default function rakan({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> FEY FEATHERS
          </h4>
    
          <p>
            Every <abbr title="40s - 1.8s per level">{(40 - (1.8 * (currentLevel - 1))).toFixed(1)} seconds</abbr> gain a <abbr title="31 + 16 per level + 80% AP" className="stat--hp">{Math.round(15 + (16 * currentLevel) + (atk.ap * 80 /100))} health shield</abbr>.
          </p>

          <p>
            Attacks and abilities on enemy champions reduce this cooldown by 1s.
          </p>

          <p>
            <b>Lover's Leap: </b>Xayah and Rakan can join each other's recall. Both will reach the Summoning Platform at the time of which the initiator's recall ends.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> GLEAMING QUILL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--hp">
            Healing:
          </h5>

          <p className="stat--hp">
                {Math.round((15+(currentLevel*7)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round((15+(currentLevel*7)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round((15+(currentLevel*7)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round((15+(currentLevel*7)+(atk.ap * 70 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((260)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((260)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Flings a magical feather that deals <span className="stat--ap">80 / 140 / 200 / 260 (+60% AP) magic damage</span> to the first enemy hit.            
          </p>

          <p>
            If the feather hits a champion or epic monster, Rakan restores <span className="stat--hp">15 (+7 per Level) (<span className="stat--ap">+70% AP</span>) health</span> to himself and nearby allies after 3s or when he touches an ally.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> GRAND ENTRANCE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((135)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 55 / 100)))} / 
            {' '}{Math.round(((265)+(atk.ap * 55 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 55 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((135)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((265)+(atk.ap * 55 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
           Dashes to a location. Upon arrival Rakan leaps into the air, dealing <span className="stat--ap">70 / 135 / 200 / 265 (+55% AP) magic damage</span> and knocking up enemies for 1s.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> BATTLE DANCE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((35)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 65 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 65 / 100)))}
          </p>
    
          <p>
            Flies to an allied champion, granting them a shield that absorbs <span className="stat--hp">35 / 70 / 105 / 140 (<span className="stat--ap">+65% AP</span>) damage</span> for 3s. 
          </p>

          <p>
            When cast on Xayah, the shield amount is increased by 125% and the cooldown is reduced.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> THE QUICKNESS
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

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((300)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
            Gains <abbr title="60%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 60 / 100)} Movement Speed for 4 seconds</abbr>. Touching enemies deals <span className="stat--ap">100 / 200 / 300 (+50% AP) magic damage</span> and charms them for 1/1.25/1.5s. This may only occur once per unit. The first champion charmed grants Rakan <span className="stat--moveSpeed">75% decaying Movement Speed</span>.
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