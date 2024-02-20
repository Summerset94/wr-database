export default function shyvana({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> FURY OF THE DRAGONBORN
          </h4>
    
          <p>
            Slaying a Large Monster grants 8 stacks of Draconic Bloodline.
          </p>
          <p>
            Champion takedowns or slaying the Rift Herald or Baron Nashor grants 12 stacks of Draconic Bloodline.
          </p>
          <p>
            Slaying a Dragon grants 35 Draconic Bloodline.
          </p>
          <p>
           Every 100 stacks of Draconic Bloodline enhances one of Shyvana's abilities. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> TWIN BITE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(atk.attack)} + {Math.round(atk.attack * 20 / 100)} / 
            {' '}{Math.round(atk.attack)} + {Math.round(atk.attack * 40 / 100)} / 
            {' '}{Math.round(atk.attack)} + {Math.round(atk.attack * 60 / 100)} / 
            {' '}{Math.round(atk.attack)} + {Math.round(atk.attack * 80 / 100)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round((atk.attack)* (1 - mod.defPhysRed))} + {Math.round((atk.attack * 20 / 100)* (1 - mod.defPhysRed))} / 
            {' '}{Math.round((atk.attack)* (1 - mod.defPhysRed))} + {Math.round((atk.attack * 40 / 100)* (1 - mod.defPhysRed))} / 
            {' '}{Math.round((atk.attack)* (1 - mod.defPhysRed))} + {Math.round((atk.attack * 60 / 100)* (1 - mod.defPhysRed))} / 
            {' '}{Math.round((atk.attack)* (1 - mod.defPhysRed))} + {Math.round((atk.attack * 80 / 100)* (1 - mod.defPhysRed))}         
          </p>
    
          <p>
            Empowers Shyvana's next attack to strike twice, dealing <span className="stat--ad">100% AD</span> and <span className="stat--ad">20 / 40 / 60 / 80% AD physical damage</span> respectively. Attacks reduce the Cooldown of Twin Bite by 0.5 seconds.
          </p>

          <p>
            Dragon Form: Strikes in a larger area and applies on-hits to all enemies.
          </p>

          <p>
            Acquiring 100 stacks of Draconic Bloodline grants Weight of the Mountain, causing Twin Bite to <span className="stat--moveSpeed">slow enemies hit by 50%</span> while in Dragon Form.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BURNOUT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((50)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((65)+(bonus.attack * 30 / 100)))} / 
            {' '}{Math.round(((80)+(bonus.attack * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(bonus.attack * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((50)+(bonus.attack * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((65)+(bonus.attack * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(bonus.attack * 30 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Deals <span className="stat--ap">35 / 50 / 65 / 80 (<span className="stat--ad">+30% bonus AD</span>) magic damage</span>  per second to nearby enemies and hastes Shyvana <span className="stat--moveSpeed">by 30 / 35 / 40 / 45%, decaying over 3 seconds</span>. Attacking extends the duration of Burnout by 4 seconds.
          </p>

          <p>
            Dragon Form: Expands the flames, dealing damage in a larger area.
          </p>

          <p>
            Acquiring 200 stacks of Draconic Bloodline, grants Wings of the Cloud, causing Burnout to <span className="stat--moveSpeed">haste Shyvana by an additional 25%</span> while in Dragon Form.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> FLAME BREATH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">
            Damage (<span className="stat--critChance">Dragon / scorch</span>):
          </h5>

          <p className="stat--ap">Pre-mitigation:
            {' '}<span className="stat--critChance">{Math.round(((105+(5*currentLevel))+(atk.ap * 70 / 100)+(atk.attack * 50 / 100)))} ({Math.round(((30+(4*currentLevel))+(atk.ap * 20 / 100)+(atk.attack * 10 / 100)))})</span> / 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)+(atk.attack * 30 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)+(atk.attack * 30 / 100)))} / 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100)+(atk.attack * 30 / 100)))} / 
            {' '}{Math.round(((210)+(atk.ap * 40 / 100)+(atk.attack * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation:
            {' '}<span className="stat--critChance">{Math.round(((105+(5*currentLevel))+(atk.ap * 70 / 100)+(atk.attack * 50 / 100))* (1 - mod.defMagRed))} ({Math.round(((30+(4*currentLevel))+(atk.ap * 20 / 100)+(atk.attack * 10 / 100))* (1 - mod.defMagRed))})</span> / 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)+(atk.attack * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 40 / 100)+(atk.attack * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((160)+(atk.ap * 40 / 100)+(atk.attack * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((210)+(atk.ap * 40 / 100)+(atk.attack * 30 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Launches a fireball that deals <span className="stat--ap">60 / 110 / 160 / 210 (<span className="stat--ad">+30% AD</span>) (+40% AP) magic damage</span> to enemies hit and Scorches them for 5 seconds. Shyvana's attacks on Scorched enemies deal bonus <span className="stat--ap">magic damage equal to 3% of their Max Health</span>.
          </p>

          <p>
           Dragon Form: The fireball explodes on impact, dealing <abbr title="110 + 5 per level (110 - 180) base damage" className="stat--ap">{Math.round((105+(5*currentLevel)))} (<span className="stat--ad">+30% AD</span>) (+40% AP) magic damage</abbr> in an area and leaving a fire for 4 seconds that deals <abbr title="34 + 4 per level (34-90) base damage" className="stat--ap">{Math.round((30+(4*currentLevel)))} (<span className="stat--ad">+10% AD</span>) (+20% AP) magic damage</abbr> and Scorches enemies within it.
          </p>

          <p>
           Acquiring 300 stacks of Draconic Bloodline, grants Breath of the Infernal, converting the damage dealt to Scorched enemies to True Damage while in Dragon Form. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DRAGON'S DESCENT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(1*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--vamp">
          Cost: 
            {' '}{100} Fury
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
           <b>Passive:</b> Generate <span className="stat--vamp">1 / 1.5 /2 Fury</span> per second and <span className="stat--vamp">2 Fury</span> per attack. At <span className="stat--vamp">100 Fury</span> Shyvana can cast Dragon's Descent. Shyvana remains in Dragon form until she has consumed all of the Fury.
          </p>

          <p>
            <b>Active:</b> Transform into a Dragon, gaining <span className="stat--hp"> 230 / 315 / 400 Health</span> and flying to a target location. Enemies along Shyvana's path take <span className="stat--ap">150 / 250 / 350 (+80% AP) magic damage</span> and are knocked towards her landing point.
          </p>

          <p>
            Acquiring 400 stacks of Draconic Bloodline, grants Life of the Ocean, gaining <span className="stat--vamp">15% Omnivamp</span> in Dragon Form.
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