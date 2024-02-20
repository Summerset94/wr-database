export default function kayn({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DARKIN SCYTHE
          </h4>
    
          <p>
            <b>Blue:</b> After being out of combat for 6 seconds, his attacks and abilities deal <abbr title="44%-58% based on level" className="stat--ap">{Math.round(43 + Number(currentLevel))}% bonus magic damage</abbr> for 3 seconds.
          </p>

          <p>
            <b>Red:</b> Heals for <abbr title="20%-34% based on level" className="stat--hp">{Math.round(19 + Number( currentLevel))}%</abbr> of <span className="stat--ad">physical damage</span> dealt to champions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> REAPING SLASH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--magres">
            Damage blue:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.attack * 60 / 100)))} / 
            {' '}{Math.round((100)+(atk.attack * 65 / 100))} / 
            {' '}{Math.round(((130)+(atk.attack * 70 / 100)))} / 
            {' '}{Math.round(((160)+(atk.attack * 75 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.attack * 60 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(atk.attack * 65 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(atk.attack * 70 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((160)+(atk.attack * 75 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--critChance">
            Damage red:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 60 / 100)))} + <span className="stat--hp">{((def.health * (6 + bonus.attack * 0.06)/100)).toFixed(1)}</span> / 
            {' '}{Math.round(((0)+(atk.attack * 65 / 100)))} + <span className="stat--hp">{((def.health * (6 + bonus.attack * 0.06)/100)).toFixed(1)}</span> / 
            {' '}{Math.round(((0)+(atk.attack * 70 / 100)))} + <span className="stat--hp">{((def.health * (6 + bonus.attack * 0.06)/100)).toFixed(1)}</span> / 
            {' '}{Math.round(((0)+(atk.attack * 75 / 100)))} + <span className="stat--hp">{((def.health * (6 + bonus.attack * 0.06)/100)).toFixed(1)}</span> 
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((0)+(atk.attack * 60 / 100)) * (1 - mod.defPhysRed))} + <span className="stat--hp">{((def.health * (6 + bonus.attack * 0.06)/100)* (1 - mod.defPhysRed)).toFixed(1)}</span> / 
            {' '}{Math.round(((0)+(atk.attack * 65 / 100))* (1 - mod.defPhysRed))} + <span className="stat--hp">{((def.health * (6 + bonus.attack * 0.06)/100)* (1 - mod.defPhysRed)).toFixed(1)}</span> / 
            {' '}{Math.round(((0)+(atk.attack * 70 / 100))* (1 - mod.defPhysRed))} + <span className="stat--hp">{((def.health * (6 + bonus.attack * 0.06)/100)* (1 - mod.defPhysRed)).toFixed(1)}</span> / 
            {' '}{Math.round(((0)+(atk.attack * 75 / 100))* (1 - mod.defPhysRed))} + <span className="stat--hp">{((def.health * (6 + bonus.attack * 0.06)/100)* (1 - mod.defPhysRed)).toFixed(1)}</span>          
          </p>
    
          <p>
            <b>Blue:</b> Dashes and slashes for <span className="stat--ad">70 / 100 / 130 / 160 (+60 / 65 / 70 / 75% bonus AD) physical damage</span>, then spins his scythe to deal same damage.
          </p>

          <p>
            <b>Red:</b> Deals <span className="stat--ad">60% / 65% / 70% / 75% AD</span> plus <span className="stat--hp">6% of target's maximum health (<span className="stat--ad">+0.06% AD</span> )</span> as <span className="stat--ad">Physical damage</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> BLADE'S REACH
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
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((150)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((210)+(bonus.attack * 130 / 100)))} / 
            {' '}{Math.round(((270)+(bonus.attack * 130 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((90)+(bonus.attack * 130 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((150)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((210)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((270)+(bonus.attack * 130 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Swipes the scythe upward, dealing <span className="stat--ad">90 / 150 / 210 / 270 (+130% bonus AD) physical damage</span> and slowing enemies hit by <span className="stat--moveSpeed">90%</span> decaying over 1.5 seconds.
          </p>

          <p>
            <b>Blue:</b> Kayn can move while using this ability, range increased;
          </p>

          <p>
            <b>Red:</b> Knocks up enemies hit for 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SHADOW STEP
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--hp">
           Healing:
          </h5>

          <p className="stat--hp">{Math.round(((100)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((120)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((140)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((160)+(bonus.attack * 50 / 100)))}
          </p>
    
          <p>
           Gain <abbr title="35%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 35 / 100)} Movement speed</abbr> and ability to move through terrain for <b>5 / 5.5 / 6 / 6.5 seconds</b>.
          </p>

          <p>
            Restore <span className="stat--hp">100 / 120 / 140 / 160 (<span className="stat--ad">+50% bonud AD</span>) health</span> upon entering the terrain for the first time.
          </p>

          <p>
          Being immobilized or spending more than 1.2 consecutive seconds outside of terrain or in combat with enemy champions ends this ability early.
          </p>

          <p>
            <b>Blue:</b> Gain <abbr title="75%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 75 / 100)} Movement speed</abbr> instead and become immune to slows. Cooldown reduced to <abbr title="7 by default">{(7*mod.atkcdr).toFixed(1)} seconds</abbr>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> UMBRAL TRESPASS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(bonus.attack * 175 / 100)))} / 
            {' '}{Math.round(((300)+(bonus.attack * 175 / 100)))} / 
            {' '}{Math.round(((400)+(bonus.attack * 175 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(bonus.attack * 175 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((300)+(bonus.attack * 175 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((400)+(bonus.attack * 175 / 100))* (1 - mod.defPhysRed))}
          </p>

          <h5 className="stat--critChance">
            Damage Red:
          </h5>

          <p className="stat--ad">Pre- / post-mitigation: 
            {' '}{Math.round(((def.health * (15 + bonus.attack * 0.13) / 100)))} / 
            {' '}{Math.round(((def.health * (15 + bonus.attack * 0.13) / 100)) * (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--hp">
            Healing Red:
          </h5>

          <p className="stat--hp">
          {Math.round((def.health * (10 + bonus.attack * 0.1) / 100))}
          </p>
    
          <p>
          Infests an enemy champion for 2.5 seconds, becoming untargetable. When the infestation ends, the target receives <span className="stat--ad">200 / 300 / 400 (+175% bonus AD) physical damage</span>.
          </p>
          <p>
            <b>Re-cast:</b> Ends infestation early.
          </p>

          <p>
            <b>Blue:</b> Increase this ability's range, the distance Kayn exits, and refreshes <b>The Darkin Scythe's</b>  cooldown on exit.
          </p>

          <p>
            <b>Red:</b> deals <span className="stat--ad"><span className="stat--hp">15%</span> (+0.13% bonus Ad) target's Max Health physical damage</span> and heals Kayn for <span className="stat--hp">10% (<span className="stat--ad">+0.1% bonus AD</span> ) target's Max Health</span>.
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