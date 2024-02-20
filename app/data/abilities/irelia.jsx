export default function irelia({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">p</span> IONIAN FERVOR
          </h4>

          <h5 className="stat--as">Bonus attack speed:</h5>
          <p className="stat--as">Stack: {(champ.asBase * ((2 + currentLevel)/100)).toFixed(3)}; Full stacks:  {(champ.asBase * ((2 + currentLevel)/100) * 4).toFixed(3)}</p>
          <h5 className="stat--ap">Max stacks bonus damage:</h5>
          <p className="stat--ap"><abbr title="pre-/ post-mitigation">{Math.round(((30 + 90/14*(currentLevel-1))+(bonus.attack * 30 / 100)))} / {Math.round(((30 + 90/14*(currentLevel-1))+(bonus.attack * 30 / 100)) * (1 - mod.defMagRed))}</abbr></p>

          <p>
          Hitting enemies with abilities grant <span className="stat--as">3% - 17% bonus Attack Speed</span> for 6 seconds, stacking up to 4 times. <br />
          At max stacks attacks deal an additional <span className="stat--ap">30 - 120 <span className="stat--ad">(+30% bonus AD)</span> magic damage</span> on hit. <br />
          Attacking enemy champions refreshes the duration. <br />
          An ability grants multiple stacks upon hitting multiple champions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BLADESURGE
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
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} / 
            {' '}{20} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((15)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((45)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((75)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round(((105)+(atk.attack * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((15)+(atk.attack * 60 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((45)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((75)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((105)+(atk.attack * 60 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--hp">Healing:</h5>
          <p className="stat--hp">
            {Math.round(atk.attack * 19 / 100)} /
            {' '}{Math.round(atk.attack * 21 / 100)} /
            {' '}{Math.round(atk.attack * 23 / 100)} /
            {' '}{Math.round(atk.attack * 25 / 100)}
          </p>
    
          <p>
          Dashes through an enemy, dealing <span className="stat--ad">15 / 45 / 75 / 105 (+60% AD) physical damage</span> and <span className="stat--hp">healing herself for</span> <span className="stat--ad">19% / 21% / 23% / 25% AD</span>. <br />
          Bladesurge's cooldown is refreshed if the target was <b>Marked</b>  or dies to Bladesurge. <br />
          When aimed, Bladesurge will prioritize targets it will reset on. <br />
          Deals 150% damage to minions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> DEFIANT DANCE
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
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 50 / 100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((35)+(atk.attack * 50 / 100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((50)+(atk.attack * 50 / 100)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((60)+(atk.attack * 50 / 100)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 50 / 100)+(atk.ap * 40 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(atk.attack * 50 / 100)+(atk.ap * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((50)+(atk.attack * 50 / 100)+(atk.ap * 40 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((60)+(atk.attack * 50 / 100)+(atk.ap * 40 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          <b>HOLD:</b> Defends with her blades for up to 1.5 seconds, taking <span className="stat--armor">60% <span className="stat--ap">(+7% AP)</span> reduced damage</span>. <br />
          <b>RELEASE:</b> Whips the blades forward, dealing <span className="stat--ad">20 / 35 / 50 / 65 (+50% AD <span className="stat--ap">+40% AP</span> ) physical damage</span>, increased by up to 100% with charge time. <br />
          Cannot be interrupted.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> FLAWLESS DUET
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
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>
          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((130)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((230)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((80)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((130)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((230)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Sends a blade to target location. May be <b>recast</b> within 3 seconds to send another blade. <br />
          The blades converge upon reaching their destionation, dealing <span className="stat--ap">80 / 130 / 180 / 230 (+80% AP) magic damage</span>, stunning for 1 second, and Marking enemy champions and large monsters hit for 5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> VANGUARD'S EDGE
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
           Base Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((125)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((375)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((125)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((375)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
            Bladewall damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 700 / 100)))} / 
            {' '}{Math.round(((150)+(atk.ap * 700 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 700 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 700 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((150)+(atk.ap * 700 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 700 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Fires a storm of blades that deals <span className="stat--ap">125 / 250 / 375 (+70% AP) magic damage</span> and <b>Marks</b> enemy champions and Large Monsters for 5 seconds. <br />
          The blades explode into a wall for 3 seconds upon hitting an enemy champion, The bladewall deals <span className="stat--ap">100 / 150 / 200 (+70% AP) magic damage</span>  and <span className="stat--moveSpeed">slows by 90%</span> for 1 second.
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