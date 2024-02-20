export default function xayah({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CLEAN CUTS
          </h4>
    
          <p>
            After using an ability, Xayah's next 3 attacks will hit all enemies along their path and drop <b className="stat--armor">Feathers</b>  she can recall. Xayah can store up to <b className="stat--armor">5 Feathers</b>  at a time.
          </p>

          <p>
            <b>Lover's Leap:</b>  Xayah and Rakan can join each other's recall. Both will reach the Summoning Platform at the time of which the initiator's recall ends.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DOUBLE DAGGERS
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((50)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((75)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((100)+(bonus.attack * 50 / 100)))} / 
            {' '}{Math.round(((125)+(bonus.attack * 50 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((50)+(bonus.attack * 50 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((75)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((100)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((125)+(bonus.attack * 50 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
           Throws two daggers dealing <span className="stat--ad">50 / 75 / 100 / 125 (+50% bonus AD) physical damage</span>  each and leaving <b className="stat--armor">two Feathers</b>. Targets hit after the first take <span className="stat--ad">50% damage</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> DEADLY PLUMAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(19*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50}
          </h5>
    
          <br />
          <p>
            Create a storm of blades for 4s that grants <abbr title="35 / 40 / 45 / 50%" className="stat--as">{(champ.asBase * 35 / 100).toFixed(3)} / {(champ.asBase * 40 / 100).toFixed(3)} / {(champ.asBase * 45 / 100).toFixed(3)} / {(champ.asBase * 50 / 100).toFixed(3)} Attack Speed</abbr> and causes attacks to deal 20% more damage.
          </p>

          <p>
            If Deadly Plumage strikes an enemy champion, gain <span className="stat--moveSpeed">25 / 30 / 35 / 40% Movement Speed</span> for 1.5 seconds.
          </p>

          <p>
            If Rakan is nearby he will also gain the effects of this skill.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> BLADECALLER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((70)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((80)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((90)+(bonus.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((70)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((80)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((90)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Calls back all <b className="stat--armor">Feathers</b>, dealing <abbr title='each subsequent feather after first deal ~10% less damage' className="stat--ad">60 / 70 / 80 / 90 (+90% bonus AD) physical damage</abbr> to enemies they pass through. Hitting an enemy with <b className="stat--armor">3 Feathers</b> root them for 1.25s.
          </p>

          <p>
            Minions take 50% damage from Bladecaller.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> FEATHERSTORM
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(80*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((125)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((250)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((375)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((125)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((250)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((375)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <br />
          <p>
            Leaps into the air, becoming untargetable and throwing out a fan of daggers which deal <span className="stat--ad">125 / 250 / 375 (+100% bonus AD) physical damage</span> and leave behind a line of <b className="stat--armor">5 Feathers</b> in an arc.
          </p>

          <p>
            Can move while in the air.
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