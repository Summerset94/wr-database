export default function varus({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> LIVING VENGEANCE 
          </h4>
    
          <p>
            Gains <span className="stat--as">60% ({(champ.asBase * 60 / 100).toFixed(3)}) Attack Speed</span> for <abbr title="at level 1 / 5 / 7 / 13">5 / 6 / 7 / 8 seconds</abbr> on a champion kill or assist, <span className="stat--as">30% ({(champ.asBase * 30 / 100).toFixed(3)})</span> on non-champion kills.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PIERCING ARROW
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
            {' '}{75}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 115 / 100)))} -
            {' '}{Math.round(((30)+(atk.attack * 172.5 / 100)))} / 
            {' '}{Math.round(((70)+(atk.attack * 115 / 100)))} -
            {' '}{Math.round(((105)+(atk.attack * 172.5 / 100)))} / 
            {' '}{Math.round(((120)+(atk.attack * 115 / 100)))} -
            {' '}{Math.round(((180)+(atk.attack * 172.5 / 100)))} / 
            {' '}{Math.round(((170)+(atk.attack * 115 / 100)))} -
            {' '}{Math.round(((255)+(atk.attack * 172.5 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 115 / 100)) * (1 - mod.defPhysRed))} -
            {' '}{Math.round(((30)+(atk.attack * 172.5 / 100)) * (1 - mod.defPhysRed))} /  
            {' '}{Math.round(((70)+(atk.attack * 115 / 100))* (1 - mod.defPhysRed))} - 
            {' '}{Math.round(((105)+(atk.attack * 172.5 / 100)) * (1 - mod.defPhysRed))} /  
            {' '}{Math.round(((120)+(atk.attack * 115 / 100))* (1 - mod.defPhysRed))} - 
            {' '}{Math.round(((180)+(atk.attack * 172.5 / 100)) * (1 - mod.defPhysRed))} /  
            {' '}{Math.round(((170)+(atk.attack * 115 / 100))* (1 - mod.defPhysRed))}  - 
            {' '}{Math.round(((255)+(atk.attack * 172.5 / 100)) * (1 - mod.defPhysRed))}   
          </p>
    
          <br />
          <p>
            <b>Hold:</b> Draws the bow, gradually increasing the range and damage for the next shot. <span className="stat--moveSpeed">Movement Speed is slowed by 20%</span>  while preparing to shoot.
          </p>

          <p>
            <b>Release:</b> Fires the arrow, dealing <span className="stat--ad">20 / 70 / 120 / 170 (+115% AD) to 30 / 105 / 180 / 255 (+172.5% AD) physical damage</span> based on draw time, reduced by 15% per enemy hit (minimum 33%).
          </p>

          <p>
            Piercing Arrow's cooldown is reduced by 4 seconds if the arrow detonates <b className="stat--armor">Blight</b> stacks on at least one enemy champion.
          </p>

          <p>
            Piercing Arrow fails if not released after 4 seconds, but will refund 50% of its Mana cost.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BLIGHTED QUIVER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(22*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ap">
            Passive AA bonus:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((12)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((16)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((20)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((24)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((12)+(atk.ap * 20 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((16)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((20)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((24)+(atk.ap * 20 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--armor">
            Blight stack damage (current target):
          </h5>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round((def.health * (5 + (atk.ap * 0.01 / 100))/100) * (1 - mod.defMagRed))} / 
            {' '}{Math.round((def.health * (5.5 + (atk.ap * 0.01 / 100))/100)* (1 - mod.defMagRed))} / 
            {' '}{Math.round((def.health * (6 + (atk.ap * 0.01 / 100))/100)* (1 - mod.defMagRed))} / 
            {' '}{Math.round((def.health * (6.5 + (atk.ap * 0.01 / 100))/100)* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            <b>Passive:</b>  Attacks deal <span className="stat--ap">12 / 16 / 20 / 24 (+20% AP) bonus magic damage</span> and apply <b className="stat--armor">Blight</b> for 6 seconds (stacks 3 times). Varus's other abilities detonate Blight, dealing <span className="stat--ap">magic damage</span> equal to <span className="stat--hp">5 / 5.5 / 6 / 6.5% (<span className="stat--ap">+0.01% AP</span>) of tharget's Max Health</span> per stack.
          </p>

          <p>
            <b>Active:</b> Doubles the bonus on hit damage from Blighted Quiver's passive for 6 seconds. The next Piercing Arrow deals <abbr title='8 + 0.5% per level to 16 + 1% per level' className="stat--ap">magic damage equal to {Math.round(8 + (0.5.currentLevel - 1))}% - {Math.round(16 + currentLevel - 1)}%</abbr> of the target's <span className="stat--hp">Missing health</span>, increase by 0% - 100% (based on <b>Piercing Arrow's</b>  channel time).
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> HAIL OF ARROWS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{80}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((75)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((115)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 90 / 100)))} / 
            {' '}{Math.round(((205)+(bonus.attack * 90 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((75)+(bonus.attack * 90 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((115)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((205)+(bonus.attack * 90 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Fires a hail of arrows that deals <span className="stat--ad">70 / 115 / 160 / 205 (+90% bonus AD) physical damage</span> and desecrates the ground for 4 seconds. Desecrated ground <span className="stat--moveSpeed">slows enemies by 25%</span> and applies <span className="stat--vamp">40% Grievous Wounds</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CHAIN OF CORRUPTION
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 85 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 85 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 85 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 85 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 85 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 85 / 100))* (1 - mod.defMagRed))}     
          </p>

    
          <br />
          <p>
            Flings out a tendril of corruption that deals <span className="stat--ap">150 / 250 / 350 (+85% AP) magic damage</span> and roots the first enemy champion hit for 2 seconds.
          </p>

          <p>
          The corruption then spreads toward nearby enemy champions, also immobilizing them on contact. Immobilized units gain <b className="stat--armor">3 Blight stacks</b> over the next 3 seconds.
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