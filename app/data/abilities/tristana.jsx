export default function tristana({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DRAW A BEAD
          </h4>
    
          <p>
            Increases the range of attacks, Explosive Charge, and Buster Shot by 10 per level.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> RAPID FIRE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} 
          </h5>
    
          <br />
          <p>
            Gain <span className="stat--as">50% ({(champ.asBase * 50 / 100).toFixed(3)}) / 75% ({(champ.asBase * 75 / 100).toFixed(3)}) / 100% ({(champ.asBase * 100 / 100).toFixed(3)}) / 125% ({(champ.asBase * 125 / 100).toFixed(3)}) bonus Attack Speed</span>  for 7 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> ROCKET JUMP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(22*mod.atkcdr).toFixed(1)} / 
            {' '}{(19*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((85)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((155)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((225)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((295)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((85)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((155)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((225)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((295)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Leap to a target location, dealing <span className="stat--ap">85 / 155 / 225 / 295 (+50% AP) magic damage</span> and <span className="stat--moveSpeed">slowing</span> nearby enemies <span className="stat--moveSpeed">by 60% for 1.5 / 2 / 2.5 / 3s.</span>
          </p>

          <p>
           Takedowns and fully stacked <b>Explosive Charge</b>  detonations on champions reset Rocket Jump's cooldown. 
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> EXPLOSIVE CHARGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Passive explosion damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((55)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((85)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((115)+(atk.ap * 25 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 25 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((55)+(atk.ap * 25 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((85)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((115)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 25 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 55 / 100)+(atk.ap * 50 / 100)))} -
            {' '}{Math.round(((70)+(bonus.attack * 55 / 100)+(atk.ap * 50 / 100))*2.2)} / 
            {' '}{Math.round(((90)+(bonus.attack * 90 / 100)+(atk.ap * 70 / 100)))} -
            {' '}{Math.round(((90)+(bonus.attack * 90 / 100)+(atk.ap * 70 / 100))*2.2)} /  
            {' '}{Math.round(((110)+(bonus.attack * 125 / 100)+(atk.ap * 90 / 100)))} -
            {' '}{Math.round(((110)+(bonus.attack * 125 / 100)+(atk.ap * 90 / 100))*2.2)} /
            {' '}{Math.round(((130)+(bonus.attack * 160 / 100)+(atk.ap * 110 / 100)))} -
            {' '}{Math.round(((130)+(bonus.attack * 160 / 100)+(atk.ap * 110 / 100))*2.2)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 55 / 100)+(atk.ap * 50 / 100)) * (1 - mod.defPhysRed))} -
            {' '}{Math.round(((70)+(bonus.attack * 55 / 100)+(atk.ap * 50 / 100)) * (1 - mod.defPhysRed)*2.2)} /
            {' '}{Math.round(((90)+(bonus.attack * 90 / 100)+(atk.ap * 70 / 100))* (1 - mod.defPhysRed))} -
            {' '}{Math.round(((90)+(bonus.attack * 90 / 100)+(atk.ap * 70 / 100))* (1 - mod.defPhysRed)*2.2)} / 
            {' '}{Math.round(((110)+(bonus.attack * 125 / 100)+(atk.ap * 90 / 100))* (1 - mod.defPhysRed))} -
            {' '}{Math.round(((110)+(bonus.attack * 125 / 100)+(atk.ap * 90 / 100))* (1 - mod.defPhysRed)*2.2)} /  
            {' '}{Math.round(((130)+(bonus.attack * 160 / 100)+(atk.ap * 110 / 100))* (1 - mod.defPhysRed))} -
            {' '}{Math.round(((130)+(bonus.attack * 160 / 100)+(atk.ap * 110 / 100))* (1 - mod.defPhysRed)*2.2)}        
          </p>
    
          <br />
          <p>
            <b>Passive:</b>  Enemies explode when killed by Tristana's attacks, dealing <span className="stat--ap">55 / 85 / 115 / 145 (+25% AP) magic damage</span> to nearby enemies.
          </p>

          <p>
            <b>Active:</b> Places a bomb on an enemy or turret, dealing <span className="stat--ad">70 / 90 / 110 / 130 (+55 / 90 / 125 / 160% bonus AD) (<span className="stat--ap">+50 / 70 / 90 / 110% AP</span>) physical damage</span> to nearby enemies. Tristana's attacks and abilities charge the bomb's damage by 30% stacking 4 times.
          </p>

          <p>
            Bombs explode immediately at full stacks. Explosion radius is double for bombs placed on turrets.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> BUSTER SHOT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
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
            {' '}{Math.round(((350)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((450)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((550)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((350)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((450)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((550)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}    
          </p>
    
          <br />
          <p>
           Fires a massive cannonball at an enemy, dealing <span className="stat--ap">350 / 450 / 550 (+100% AP) magic damage</span> and knocking them back. 
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