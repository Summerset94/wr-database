export default function corki({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> HEXTECH MUNITIONS
          </h4> 

          <h5 className="stat--ad">
            Damage: {' '}{Math.round((((atk.attack * 20 / 100)) * (1 - mod.defPhysRed)) + (((atk.attack * 80 / 100)) * (1 - mod.defMagRed)))} : {Math.round((((atk.attack * 20 / 100)) * (1 - mod.defPhysRed)))} Physical + <span className="stat--ap"> {Math.round((((atk.attack * 80 / 100)) * (1 - mod.defMagRed)))} Magic</span>
          </h5>
          
    
          <p>
            <b>Hextech Shrapnel:</b> Attacks deal <span className="stat--ad">20% AD Physical damage</span> + <span className="stat--ap">80% AP Magic damage</span>. <br />

            <b>The Package:</b> After 4 minutes, The Package is delivered to Corki's base. Corki can pick it up to gain the ability to cast Special delivery, wich grants him <span className="stat--moveSpeed">35% Movement Speed</span> out of combat for 45 seconds. A new Package arrives every 150 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PHOSPOROUS BOMB
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
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

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 50 / 100)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((135)+(atk.ap * 50 / 100)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((195)+(atk.ap * 50 / 100)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((255)+(atk.ap * 50 / 100)+(bonus.attack * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((75)+(atk.ap * 50 / 100)+(bonus.attack * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((135)+(atk.ap * 50 / 100)+(bonus.attack * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((195)+(atk.ap * 50 / 100)+(bonus.attack * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((255)+(atk.ap * 50 / 100)+(bonus.attack * 70 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Fires a bomb at a targeted area dealing <span className="stat--ap">75 / 135 / 195 / 255 (+50% AP) <span className="stat--ad">(+70% bonus AD)</span> magic damage</span> and granting vision over the area.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> VALKYRIE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(19*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ap">
            Package damage:
          </h5>

          <p className="stat--ad">Pre-mitigation : 
            {' '}Tick: {Math.round((((atk.attack * 150 / 100))+(atk.ap * 20 / 100)+(20 + (currentLevel * 7))))} / 
            {' '}Total: {Math.round((((atk.attack * 150 / 100))+(atk.ap * 20 / 100)+(20 + (currentLevel * 7)))*5)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}Tick: {Math.round(((atk.attack * 150 / 100)+(atk.ap * 20 / 100)+(20 + (currentLevel * 7))) * (1 - mod.defMagRed))} / 
            {' '}Total: {Math.round(((((atk.attack * 150 / 100))+(atk.ap * 20 / 100)+(20 + (currentLevel * 7))))* (1 - mod.defMagRed) * 5)}
          </p>
    
          <p>
          Dashes forward, leaving a flaming zone that deals <span className="stat--ap"> 60 / 100 / 140 / 180 (+40% AP) magic damage</span> per second for 3 seconds. <br />
          <b>Package:</b> Enemies are kocked aside and the zone deals <abbr title="20 + 7 per level">27-125</abbr> <span className="stat--ap">+20% AP <span className="stat--ad"> +150% AD </span>magic damage </span> per second for 5 seconds and slows by 90%/
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> GATLING GUN
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((32)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((48)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((64)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((32)+(atk.attack * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((48)+(atk.attack * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((64)+(atk.attack * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 60 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Fires his gatling gun for 4 seconds, dealing <span className="stat--ap">32 / 48 / 64 / 80 <span className="stat--ad">(+60% AD)</span> magic damage</span>  per second and shredding up to <abbr title="Applies BEFORE magic penetration, can drop Armor Magic Resist of target below 0">10 / 15 / 20 / 25 Magic Resist and Armor</abbr> for 2 seconds. Fires toward Corki's current target.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> MISSILE BARRAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 20 / 100)+(atk.attack * 25 / 100)))} / 
            {' '}{Math.round(((115)+(atk.ap * 20 / 100)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 20 / 100)+(atk.attack * 75 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 20 / 100)+(atk.attack * 25 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(atk.ap * 20 / 100)+(atk.attack * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 20 / 100)+(atk.attack * 75 / 100))* (1 - mod.defMagRed))}       
          </p>

          <h5 className="stat--vamp">
           Big One's damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 40 / 100)+(atk.attack * 100 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 40 / 100)+(atk.attack * 150 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100)+(atk.attack * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 40 / 100)+(atk.attack * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((300)+(atk.ap * 40 / 100)+(atk.attack * 150 / 100))* (1 - mod.defMagRed))} 
          </p>
    
          <p>
            Fires a missile, dealing <span className="stat--ap">80 / 115 / 150 (<span className="stat--ad">+25% / 50% / 75% AD</span>  +20% AP) magic damage</span>. 2 seconds cooldown between casts. <br />
            <b>Big One:</b> Every third missile fired deals <span className="stat--ap">160 / 230 / 300 (<span className="stat--ad">+50% / 100% / 150% AD</span> +40% AP) magic damage</span> and has increased range and blast radius.
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