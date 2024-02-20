export default function blank({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> GET EXCITED!
          </h4> 
          
          <p>
          Scoring a takedown on a champion or structure that Jinx has damaged within the last 3 seconds grants her <span className="stat--moveSpeed">140% decaying Movement Speed</span>  and <span className="stat--as">12% ({(atk.as * 12 / 100).toFixed(3)}) Total Attack Speed</span> for 6 seconds.

        While Excited, Jinx can exceed the Attack Speed cap.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> SWITCHEROO
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(1)} / 
            {' '}{(1)} / 
            {' '}{(1)} / 
            {' '}{(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} 
          </h5>
    
          <p>
            <b>ACTIVE:</b> Swaps weapons
          </p>

          <p>
            <b>Fishbones, the Rocket Launcher:</b> Attacks cost Mana but gain <b>80 / 95 / 105 / 125 range</b>
            and explode to deal <span className="stat--critChance">107% damage</span> to the target and enemies around it.
          </p>

          <p>
            <b>Pow-Pow, the Minigun:</b>  Attacks grants bonus <span className="stat--as">Attack Speed</span>  for 2.5 seconds. This effect stacks up to 3 times for a total bonus of <span className="stat--as">35% ({(champ.asBase * 35 / 100).toFixed(3)}) / 60% ({(champ.asBase * 60 / 100).toFixed(3)}) / 85% ({(champ.asBase * 85 / 100).toFixed(3)}) / 110% ({(champ.asBase * 110 / 100).toFixed(3)})</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ZAP!
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((10)+(atk.attack * 160 / 100)))} / 
            {' '}{Math.round(((80)+(atk.attack * 160 / 100)))} / 
            {' '}{Math.round(((150)+(atk.attack * 160 / 100)))} / 
            {' '}{Math.round(((220)+(atk.attack * 160 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((10)+(atk.attack * 160 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(atk.attack * 160 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((150)+(atk.attack * 160 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((220)+(atk.attack * 160 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Fires a shock blast that deals <span className="stat--ad">10 / 80 / 150 / 220 (+160% AD) physical damage</span> to the first enemy hit.
          </p>

          <p>
            On hit grants vision of the target and slows it by <span className="stat--moveSpeed">30% / 40% / 50% / 60%</span> for 2 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> FLAME CHOMPERS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((280)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((280)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Tosses out three compes that arm after a brief delay. Chompers explode on contact with enemy champions, interrupting their dashes and rooting them for <b>1.45 / 1.55 / 1.65 / 1.75 seconds</b>. 
          </p>

          <p>
          Enemies hit by the explosion take <span className="stat--ap">70 / 140 / 210 / 280 (+100% AP) magic damage</span>.
          </p>

          <p>
            Chompers last for 5 seconds and will explode automatically if no champion triggers them.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(50*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)} / 
            {' '}{(40*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
           Minimal damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((25)+(bonus.attack * 15 / 100)))} / 
            {' '}{Math.round(((35)+(bonus.attack * 15 / 100)))} / 
            {' '}{Math.round(((45)+(bonus.attack * 15 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((25)+(bonus.attack * 15 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(bonus.attack * 15 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((45)+(bonus.attack * 15 / 100))* (1 - mod.defPhysRed))}
          </p>

          <h5 className="stat--ad">
           <abbr title="target at 100% health">Max damage:</abbr>
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((250)+(bonus.attack * 150 / 100)))} / 
            {' '}{Math.round(((350)+(bonus.attack * 150 / 100)))} / 
            {' '}{Math.round(((450)+(bonus.attack * 150 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((250)+(bonus.attack * 150 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((350)+(bonus.attack * 150 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((450)+(bonus.attack * 150 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <p>
            Fires a mega-rocket that gains damage and speed over the first second it travels. 
          </p>

          <p>
          The rocket explodes on the first enemy champion hit, dealing <span className="stat--ad">25 / 35 / 45 to 250 / 350 / 450 (+15% to 150% bonus AD) physical damage</span> <span className="stat--hp">+25% / 30% / 35% of their missing health</span>. Nearby enemies take 80% damage.
          </p>

          <p>
          Deals a max of 500 damage to epic monsters.
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