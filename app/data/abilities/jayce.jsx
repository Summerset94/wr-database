export default function jayce({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> HEXTECH CAPACIPATOR
          </h4>
    
          <p>
          Transforming between the Mercury Hammer and Mercury Cannon grants <span className="stat--moveSpeed">30 Movement Speed</span> for 1.25 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> TO THE SKIES / <span className="stat--magres">SHOCK BLAST</span>
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(8*mod.atkcdr).toFixed(1)})</span>  / 
            {' '}{(12*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(8*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(10*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(8*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(8*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(8*mod.atkcdr).toFixed(1)})</span> /
            {' '}{(6*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(8*mod.atkcdr).toFixed(1)})</span> 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40} <span className="stat--magres">({55})</span> / 
            {' '}{40} <span className="stat--magres">({60})</span> / 
            {' '}{40} <span className="stat--magres">({65})</span> / 
            {' '}{40} <span className="stat--magres">({70})</span> /
            {' '}{40} <span className="stat--magres">({75})</span> 
          </h5>

          <h5 className="stat--ad">
            Damage melee:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 140 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 140 / 100)))} / 
            {' '}{Math.round(((170)+(bonus.attack * 140 / 100)))} / 
            {' '}{Math.round(((220)+(bonus.attack * 140 / 100)))} /
            {' '}{Math.round(((270)+(bonus.attack * 140 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 140 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((170)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((220)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} /
            {' '}{Math.round(((270)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))}         
          </p>

          <h5 className="stat--magres">
            Damage ranged:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 140 / 100)))} <span className="stat--critChance">({Math.round(((70)+(bonus.attack * 140 / 100)) *1.4)})</span> / 
            {' '}{Math.round(((140)+(bonus.attack * 140 / 100)))} <span className="stat--critChance">({Math.round((((140)+(bonus.attack * 140 / 100))) *1.4)})</span> / 
            {' '}{Math.round(((210)+(bonus.attack * 140 / 100)))} <span className="stat--critChance">({Math.round(((210)+(bonus.attack * 140 / 100)) *1.4)})</span> / 
            {' '}{Math.round(((280)+(bonus.attack * 140 / 100)))} <span className="stat--critChance">({Math.round(((280)+(bonus.attack * 140 / 100)) *1.4)})</span> / 
            {' '}{Math.round(((350)+(bonus.attack * 140 / 100)))} <span className="stat--critChance">({Math.round(((350)+(bonus.attack * 140 / 100)) *1.4)})</span>
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 140 / 100)) * (1 - mod.defPhysRed))} <span className="stat--critChance">({Math.round((((70)+(bonus.attack * 140 / 100)) * (1 - mod.defPhysRed)) *1.4)})</span> / 
            {' '}{Math.round(((140)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} <span className="stat--critChance">({Math.round((((140)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed)) *1.4)})</span> / 
            {' '}{Math.round(((210)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} <span className="stat--critChance">({Math.round((((210)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed)) *1.4)})</span> / 
            {' '}{Math.round(((280)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} <span className="stat--critChance">({Math.round((((280)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed)) *1.4)})</span> / 
            {' '}{Math.round(((350)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} <span className="stat--critChance">({Math.round((((350)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed)) *1.4)})</span>          
          </p>   
          <p>
            <b className="stat--armor">Melee:</b> Leaps to an enemy dealing <span className="stat--ad">60 / 110 / 160 / 210 / 260 (+140% bonus AD) physical damage</span> and slowing nearby enemies by <span className="stat--moveSpeed">35% / 40% / 45% / 50% / 55%</span> for 2 seconds. <br />
            <hr />
            <b className="stat--magres">Ranged:</b> Fires an orb of electricity that detonates on hitting an enemy or reaching the end of its path, dealing <span className="stat--ad">70 / 140 / 210 / 280 / 350 (+140% bonus AD) physical damage</span>. Orbs fired through an Acceleration Gate travel farther and faster, <span className="stat--critChance">increasing their damage by 40%</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> LIGTNING FIELD / <span className="stat--magres">HYPER CHARGE</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(13*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(10*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(11*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(10*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(9*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(10*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(7*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(10*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(5*mod.atkcdr).toFixed(1)})</span>
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40} <span className="stat--magres">({40})</span> / 
            {' '}{40} <span className="stat--magres">({40})</span> / 
            {' '}{40} <span className="stat--magres">({40})</span> / 
            {' '}{40} <span className="stat--magres">({40})</span> / 
            {' '}{40} <span className="stat--magres">({40})</span>
          </h5>

          <h5 className="stat--ap">
            Damage melee:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((260)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((340)+(atk.ap * 100 / 100)))} / 
            {' '}{Math.round(((420)+(atk.ap * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((100)+(atk.ap * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((260)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((340)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))} /
            {' '}{Math.round(((420)+(atk.ap * 100 / 100))* (1 - mod.defMagRed))}         
          </p>

          <h5 className="stat--magres">
            Damage ranged:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((atk.attack * 70 / 100)))} / 
            {' '}{Math.round(((atk.attack * 80 / 100)))} / 
            {' '}{Math.round(((atk.attack * 90 / 100)))} / 
            {' '}{Math.round(((atk.attack * 100 / 100)))} /
            {' '}{Math.round(((atk.attack * 110 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((atk.attack * 70 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 90 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((atk.attack * 100 / 100))* (1 - mod.defPhysRed))} /
            {' '}{Math.round(((atk.attack * 110 / 100))* (1 - mod.defPhysRed))}        
          </p>
    
          <p>
           <b className="stat--armor">MELEE:</b> <br />
           <b>PASSIVE:</b> Attacks with Mercury Hammer restore <span className="stat--mana">8 / 11 / 14 / 17 / 20 Mana</span>. <br />
           <b>ACTIVE:</b> Releases an electrifying aura, dealing <span className="stat--ap">100 / 180 / 260 / 340 / 420 (+100% AP) magic damage</span> over 4 seconds to nearby enemies. <br />
           <hr />
           <b className="stat--ap">RANGED:</b> Gains a burst of energy, increasing <span className="stat--as">Attack Speed to maximum</span>  for 3 attacks withing 4 seconds. These attacks deal <span className="stat--ad">70% / 80% / 90% / 100% / 110% AD physical damage</span>. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> THUNDERING BLOW / <span className="stat--magres">ACCELERATING GATE</span>
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(16*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(14*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(16*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(14*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(16*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(14*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(16*mod.atkcdr).toFixed(1)})</span> / 
            {' '}{(14*mod.atkcdr).toFixed(1)} <span className="stat--magres">({(16*mod.atkcdr).toFixed(1)})</span>
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} <span className="stat--magres">({50})</span> / 
            {' '}{50} <span className="stat--magres">({50})</span> / 
            {' '}{50} <span className="stat--magres">({50})</span> / 
            {' '}{50} <span className="stat--magres">({50})</span> / 
            {' '}{50} <span className="stat--magres">({50})</span>
          </h5>

          <h5 className="stat--ad">
            Damage melee:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((def.health * 10 / 100)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((def.health * 12.5 / 100)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((def.health * 15 / 100)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((def.health * 17.5 / 100)+(bonus.attack * 100 / 100)))} /
            {' '}{Math.round(((def.health * 20 / 100)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((def.health * 10 / 100)+(bonus.attack * 100 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((def.health * 12.5 / 100)+(bonus.attack * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((def.health * 15 / 100)+(bonus.attack * 100 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((def.health * 17.5 / 100)+(bonus.attack * 100 / 100))* (1 - mod.defMagRed))} /
            {' '}{Math.round(((def.health * 20 / 100)+(bonus.attack * 100 / 100))* (1 - mod.defMagRed))}        
          </p>
    
          <p>
            <b className="stat--armor">MELEE:</b> Knocks a target and enemies near them backwards, dealing <span className="stat--ap">10% / 12.5% / 15% / 17.5% / 20% <span className="stat--hp">target's Maximum Health</span> <span className="stat--ad">(+100% bonus AD)</span> magic damage</span>. <br />
            <hr />
            <b className="stat--magres">RANGED:</b> Deploys an Acceleration Gate that grants <span className="stat--moveSpeed">35% / 40% / 45% / 50% / 55% decaying Movement Speed</span> for 3 seconds to ally champions that pass through it. <br />
            <b>Shock Blasts</b> fired through the gate travel farther and faster, increasing their damage by <span className="stat--critChance">40%</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> <span className="stat--armor">MERCURY HAMMER</span> / <span className="stat--magres">MERCURY CANNON</span>
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana"></h5>
         
    
          <p>
            <b>ACTIVE:</b> Swaps between <span className="stat--armor">Mercury Hammer</span> and <span className="stat--magres">Mercury Cannon</span>:
          </p>
          <p>
            <b className="stat--armor">Mercury Hammer:</b> First attack after swap is empowered to deal <span className="stat--ap">{Math.round((20 + 8 * Number(currentLevel))+(bonus.attack * 25 / 100))} (Post-mitigated: {Math.round(((20 + 8 * Number(currentLevel))+(bonus.attack * 25 / 100))*((1 - mod.defMagRed)))}) bonus magic damage</span>.
            <br /> 
             Passive: gain <span className="stat--as">{16 + Number(currentLevel)}% ({(champ.asBase * (16 + Number(currentLevel))/100).toFixed(3)}) Attack Speed</span> and <span className="stat--armor">{Math.round((3 + 2 * Number(currentLevel))+(atk.attack*9/100))} Armor</span> and <span className="stat--magres">Magic Resistance</span>
          </p>
          <p>
          <b className="stat--magres">Mercury Cannon:</b> First attack is empowered to deal additional <span className="stat--ap">{Math.round((13 + Number(currentLevel))+(bonus.attack * 10 / 100))} (Post-mitigated: {Math.round(((13 + Number(currentLevel))+(bonus.attack * 10 / 100))*((1 - mod.defMagRed)))}) bonus magic damage</span> and reduce the target's <span className="stat--armor">Armor</span> and <span className="stat--magres">Magic Resist</span> by <span className="stat--armor">{Math.round(11 + Number(currentLevel))}%:</span> for 5 seconds.

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