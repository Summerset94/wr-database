export default function evelynn({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DEMON SHADE
          </h4>

          <h5 className='stat--hp'>Healing amount per 1s / Threshhold:
          {' '}{Math.round(15+(2*currentLevel)+(atk.ap * 75 / 1000))} / 
          {' '}{Math.round(250+(70*currentLevel))}
          </h5>
    
          <p>
          Enters Demon Shade after not attacking or casting for 4 seconds. Taking damage from enemy champions or turrets puts Demon Shade on a 1.5 seconds cooldown. <br />

          In Demon Shade, Evelynn regenerates <abbr title="15 + 2 x Level" className="stat--hp">17-45</abbr> (+7.5% AP) Health every second when she is below <abbr title="250 + 70 x Level" className="stat--hp">320-1300 Health</abbr>. <br />

          After lever 5, Demons Shade grants her Camouflage.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> HATE SPIKE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((45)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((55)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((45)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((55)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Unleashes two lines of spikes, dealing <span className="stat--ap">40 / 45 / 50 / 55 (+40% AP) magic damage</span>, each to all enemies struck. Can re-cast within 4 seconds. <br />

          Deals <b>35% / 40% / 45% / 50%</b> damage to minions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ALLURE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} / 
            {' '}{100} 
          </h5>
    
          <p>
          Curses target champion or monster for 5 seconds. Evelynn's next attack or ability will expunge the Curse adn slow them by <span className="stat--moveSpeed">65%</span>  for <b>1 / 1.25 / 1.5 / 1.75 seconds</b>. <br />

          If the Curse lasts at least <b>2.5</b> seconds, expungint it charms the target for <b>1 / 1.25 / 1.5 / 1.75 seconds</b>, If the target is a champion, shreds their Magic Resist by <abbr className="stat--magres" title='Applies before Magic penetration'>20% / 24% / 28% / 32% for 4 seconds</abbr>. <br />
          If the target is a monster, deal additional <span className="stat--ap">300 / 350 / 400 / 450 (+60% AP) magic damage</span>. <br />

          Casting Allure does not remove Evelynn from Demon Shade.            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> WHIPLASH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
           Base damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((55)+(def.health * (3 + atk.ap * 0.015) / 100)))} / 
            {' '}{Math.round(((75)+(def.health * (3 + atk.ap * 0.015) / 100)))} / 
            {' '}{Math.round(((95)+(def.health * (3 + atk.ap * 0.015) / 100)))} / 
            {' '}{Math.round(((115)+(def.health * (3 + atk.ap * 0.015) / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((55)+(def.health * (3 + atk.ap * 0.015) / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(def.health * (3 + atk.ap * 0.015) / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((95)+(def.health * (3 + atk.ap * 0.015) / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(def.health * (3 + atk.ap * 0.015) / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ap">
           Empowered damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((75)+(def.health * (5 + atk.ap * 0.02) / 100)))} / 
            {' '}{Math.round(((110)+(def.health * (5 + atk.ap * 0.02) / 100)))} / 
            {' '}{Math.round(((145)+(def.health * (5 + atk.ap * 0.02) / 100)))} / 
            {' '}{Math.round(((180)+(def.health * (5 + atk.ap * 0.02) / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((75)+(def.health * (5 + atk.ap * 0.02) / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(def.health * (5 + atk.ap * 0.02) / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(def.health * (5 + atk.ap * 0.02) / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(def.health * (5 + atk.ap * 0.02) / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Whips a target with Lashers, applying on-hit effects and dealing <span className="stat--ap">55 / 75 / 95 / 115 (+ 3% (+0.015% AP) of their max Health) magic damage</span> . Then gain 30% Movement Speed for 2 seconds.

          Entering Demon Shade enhances the next cast to pull Evelynn to her target, dealing <span className="stat--ap">75/110/145/180 plus 5% (+ 0.02% AP) of their max Health magic damage</span> to all enemies in the way.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> LAST CARESS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(105*mod.atkcdr).toFixed(1)} / 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((120)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((240)+(atk.ap * 75 / 100)))} / 
            {' '}{Math.round(((360)+(atk.ap * 75 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((120)+(atk.ap * 75 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((360)+(atk.ap * 75 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
            Empowered damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((120)+(atk.ap * 75 / 100))*(230/100))} / 
            {' '}{Math.round(((240)+(atk.ap * 75 / 100))*(230/100))} / 
            {' '}{Math.round(((360)+(atk.ap * 75 / 100))*(230/100))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((120)+(atk.ap * 75 / 100)) * (1 - mod.defMagRed)*(230/100))} / 
            {' '}{Math.round(((240)+(atk.ap * 75 / 100))* (1 - mod.defMagRed)*(230/100))} / 
            {' '}{Math.round(((360)+(atk.ap * 75 / 100))* (1 - mod.defMagRed)*(230/100))}
          </p>
    
          <p>
          Evelynn briefly goes untargetable and decimates the area in front of her before warping backwards a long distance. Deals <span className="stat--ap">120 / 240 / 360 (+75% AP) magic damage</span>, increased to <b>230%</b> to enemy champions below <span className="stat--hp">35% Health</span>.
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