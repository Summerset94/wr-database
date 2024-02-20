export default function camille({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> ADAPTIVE DEFENSES
          </h4>

          <h5>
          <abbr title="based on level. Changes on 1 / 5 / 9 / 13"></abbr>  Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>

          <h3 className="stat--hp">Shield strength: {Math.round(atk.health * 20 / 100)}</h3> 
          
    
          <p>
          Attacking an enemy champion grants a shield that absorbs <span className="stat--armor">physical</span> / <span className="stat--magres">magic</span> damage  equal to <span className="stat--hp">20% of Max Health</span> for 2 seconds. The shield type is based on the type of damage the attacked target deals.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> PRECISION PROTOCOL
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
            {' '}{25} / 
            {' '}{25} / 
            {' '}{25} / 
            {' '}{25} 
          </h5>

          <h5 className="stat--ad">
          Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 120 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 130 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 140 / 100)))} / 
            {' '}{Math.round(((0)+(atk.attack * 150 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 120 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 140 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((0)+(atk.attack * 150 / 100))* (1 - mod.defPhysRed))}          
          </p>         
    
          <p>
          Empowers the next attack to deal <span className="stat--ad">120% / 130% / 140% / 150% physical damage</span> and grant <span className="stat--moveSpeed">25% Movement Speed</span> for 1.5 seconds. <br />

          1.6 seconds after the first attack, Precision Protocol automatically empowers another basic attack, dealing <abbr className="stat--critChance" title='at level 1 /5 / 9 / 13'>40% / 60% / 80% / 100%</abbr> of its damage as <span className="stat--critChance">true damage</span> instead.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> TACTICAL SWEEP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 110 / 100)+(def.health * 4 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 110 / 100)+(def.health * 6 / 100)))} / 
            {' '}{Math.round(((150)+(bonus.attack * 110 / 100)+(def.health * 8 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 110 / 100)+(def.health * 10 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 110 / 100)+(def.health * 4 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 110 / 100)+(def.health * 6 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((150)+(bonus.attack * 110 / 100)+(def.health * 8 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(bonus.attack * 110 / 100)+(def.health * 10 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--hp">
            Healing:
          </h5>
          <p className="stat--hp">VS current target: 
            {' '}{Math.round((((90)+(bonus.attack * 110 / 100)+(def.health * 4 / 100)) * (1 - mod.defPhysRed))*0.4)} / 
            {' '}{Math.round((((120)+(bonus.attack * 110 / 100)+(def.health * 6 / 100))* (1 - mod.defPhysRed))*0.4)} / 
            {' '}{Math.round((((150)+(bonus.attack * 110 / 100)+(def.health * 8 / 100))* (1 - mod.defPhysRed))*0.4)} / 
            {' '}{Math.round((((180)+(bonus.attack * 110 / 100)+(def.health * 10 / 100))* (1 - mod.defPhysRed))*0.4)}          
          </p>
    
          <p>
            Slices in a direction dealing <span className="stat--ad">90 / 120 / 150 / 180 (+110% bonus AD) <span className="stat--hp">(+4% / 6% / 8% / 10% of target's Max Health)</span> as physical damage</span>, <br />
            Enemies hit by the outer half are slowed by <span className="stat--moveSpeed">80%</span> decaying over 2 seconds, healing Camille for <span className="stat--hp">40%</span> of the damage dealt to Champions. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> HOOKSHOT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(22*mod.atkcdr).toFixed(1)} / 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--as">
            Bonus Atack Speed:
            {' '}{(champ.asBase*0.5).toFixed(3)} /
            {' '}{(champ.asBase*0.6).toFixed(3)} /
            {' '}{(champ.asBase*0.7).toFixed(3)} /
            {' '}{(champ.asBase*0.8).toFixed(3)}
          </h5>          

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 75 / 100)))} / 
            {' '}{Math.round(((110)+(bonus.attack * 75 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 75 / 100)))} / 
            {' '}{Math.round(((210)+(bonus.attack * 75 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 75 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((110)+(bonus.attack * 75 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 75 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((210)+(bonus.attack * 75 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
          <b>First Cast:</b> FIres a hookshot that attaches to terrain, pulling Camille to it. If Camille misses, it is placed on a 3 second cooldown. <br />


          <b>Second Cast:</b> Dashes from the wall, dealing <span className="stat--ad">60 / 110 / 160 / 210 (+75% bonus AD) physical damage</span> on landing. Regardless of landing, Camille's next basic attack against enemy champions within 3 seconds, grants <span className="stat--as">50% / 60% / 70% / 80% Attack Speed</span> for 5 seconds. If the dash hits an enemy champion, they are stunned for 0.75 seconds, and Hookshot's cooldown is reduced by 5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> HEXTECH ULTIMATUM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(90*mod.atkcdr).toFixed(1)} / 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)}
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

          <p className="stat--ad">Current target at 100% HP: 
            {' '}{Math.round(((30)+(def.health * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((30)+(def.health * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((30)+(def.health * 25 / 100))* (1 - mod.defMagRed))}      
          </p>

          <p className="stat--ad">Current target at 50% HP: 
            {' '}{Math.round(((30)+((def.health/2) * 15 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((30)+((def.health/2) * 20 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((30)+((def.health/2) * 25 / 100))* (1 - mod.defMagRed))}      
          </p>
    
          <p>
          Leap to enemy champion, becoming untargetable for 0.75 seconds and dealing <span>30 <span className="stat--hp">(+ 15% / 20% / 25% of target's current Health)</span>  magic damage </span>, knocking away other enemies and creating an inescapable zone for 2 / 2.5 / 3 seconds. Hextech Ultimatum ends when Camille leaves the zone.
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