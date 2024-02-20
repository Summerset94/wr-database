export default function zed({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CONTEMPT FOR THE WEAK
          </h4>

          <h5 className="stat--ap">
           Current target damage: {Math.round((def.health * (7 + (4/14*(currentLevel - 1)))/100) * (1 - mod.defMagRed))}
          </h5>
    
          <p>
            Zed's attacks against enemies below <span className="stat--hp">50% Health</span> deal <span className="stat--">bonus magic damage</span> equal to <abbr title="7-11% based on level">{Math.round(7 + (4/14*(currentLevel - 1)))}%</abbr> of their maximum Health. (10 second cooldown per unique enemy).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> RAZOR SHURIKEN
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{70} / 
            {' '}{65} / 
            {' '}{60} / 
            {' '}{55} 
          </h5>

          <h5 className="stat--ad">
            Primary damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((170)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((220)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((120)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((170)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((220)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>
          
          <h5 className="stat--ad">
            Secondary damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((42)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((72)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((102)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((132)+(bonus.attack * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((42)+(bonus.attack * 60 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((72)+(bonus.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((102)+(bonus.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((132)+(bonus.attack * 60 / 100))* (1 - mod.defPhysRed))}          
          </p>

    
          <br />
          <p>
           Zed and his shadows throw their shurikens, each dealing <span className="stat--ad">70 / 120 / 170 / 220 (+100 bonus AD)</span> to the first enemy they hit and <span className="stat--ad">42 / 72 / 102 / 132 (+60% bonus AD)</span> to other enemies in their path.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> LIVING SHADOW
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{35} / 
            {' '}{30} / 
            {' '}{25} / 
            {' '}{20} 
          </h5>
    
          <br />
          <p>
            <b>Passive:</b> Zed gains <span className="stat--armor">35 / 40 / 45 / 50 Energy</span> whenever and ability strikes the same enemy twice. Energy can only be gained once per cast ability.
          </p>

          <p>
            <b>Active:</b> Zed's shadow dashes forward, remaining in place for 4.5 seconds.
          </p>

          <p>
            Reactivating Living Shadow will cause Zed to swap positions with his shadow.
            
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SHADOW SLASH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4*mod.atkcdr).toFixed(1)} / 
            {' '}{(3.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ad">
            Primary Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((100)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 70 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 70 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--ad">
            Subsequent Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 70 / 100))*0.6)} / 
            {' '}{Math.round(((100)+(bonus.attack * 70 / 100))*0.6)} / 
            {' '}{Math.round(((130)+(bonus.attack * 70 / 100))*0.6)} / 
            {' '}{Math.round(((160)+(bonus.attack * 70 / 100))*0.6)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(bonus.attack * 70 / 100)) * (1 - mod.defPhysRed)*0.6)} / 
            {' '}{Math.round(((100)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed)*0.6)} / 
            {' '}{Math.round(((130)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed)*0.6)} / 
            {' '}{Math.round(((160)+(bonus.attack * 70 / 100))* (1 - mod.defPhysRed)*0.6)}          
          </p>
    
          <br />
          <p>
            Zed and his shadows slash, each dealing <span className="stat--ad">70 / 100 / 130 / 160 (+70% bonus AD) physical damage</span> to nearby enemies and <span className="stat--moveSpeed">slowing them by 25 / 30 / 35 / 40% for 1.5 seconds</span>. Slashes beyond the first striking the same enemy deal <span className="stat--ad">60% damage</span> and increase the <span className="stat--moveSpeed">slow by 50%</span>.
          </p>

          <p>
            Each enemy champion hit by Zed's slash reduces <b>Living Shadow's</b> cooldown by 2 seconds.
          </p>

          <p>
            Deals 60% damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DEATH MARK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)}
          </h5>
    
          <br />
          <p>
            Zed becomes untargetable and dashes to target enemy champion, making them. After 3.5 seconds, the mark triggers, dealing physical damage equal to <span className="stat--ad">100% AD</span> plus <span className="stat--ad">25 / 40 / 55% </span> of all damage dealt to the target by Zed while the mark was active.
          </p>

          <p>
           The dash leaves a shadow behind for 6 seconds. 
          </p>

          <p>
            Zed can reactivate <b>Death Mark</b> to switch positions with this shadow.
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