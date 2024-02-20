export default function braum({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CONCUSSIVE BLOWS
          </h4>
    
          <p>
          Braum's basic attacks apply Concussive Blows. Once the first stack is applied, ally basic attacks also stack Concussive Blows. Upon reaching 4 stacks, the target is stunned for 1 second and takes <abbr title="32-200 based on level" className="stat--ap"> {Math.round((20+12*currentLevel))} ({Math.round((20+12*currentLevel)*(1 - mod.defMagRed))}) magic damage</abbr>. For the next 8 seconds they cannot receive new stacks, but take bonus <abbr title="7-40 based on level" className="stat--ap"> {Math.round((7+33/14*(currentLevel - 1)))} ({Math.round((7+33/14*(currentLevel - 1))*(1 - mod.defMagRed))})</abbr> magic damage from Braum's attacks.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> WINTER'S BITE
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
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.health * 3 / 100)))} / 
            {' '}{Math.round(((120)+(atk.health * 3 / 100)))} / 
            {' '}{Math.round(((180)+(atk.health * 3 / 100)))} / 
            {' '}{Math.round(((240)+(atk.health * 3 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.health * 3 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.health * 3 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.health * 3 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(atk.health * 3 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Lauches ice that deals <span className="stat--ap">60 / 120 / 180 / 240 <span className="stat--hp">(+3% HP)</span> magic damage</span>  and slows the enemy hit by <span className="stat--moveSpeed">70%</span> for 2 seconds. Applies a stack of Concussive Blows.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> STAND BEHIND ME
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
            {' '}{55} / 
            {' '}{60} / 
            {' '}{65} / 
            {' '}{70} 
          </h5>

          <h5 className="stat--hp">Bonus stats:</h5>
          <p className="stat--armor">Armor:
          {' '}{Math.round(10 + (atk.armor * 10 / 100))} /
          {' '}{Math.round(15 + (atk.armor * 12 / 100))} /
          {' '}{Math.round(20 + (atk.armor * 14 / 100))} /
          {' '}{Math.round(25 + (atk.armor * 16 / 100))}
          </p>
          <p className="stat--magres">Magic Resistance:
          {' '}{Math.round(10 + (atk.magres * 10 / 100))} /
          {' '}{Math.round(15 + (atk.magres * 12 / 100))} /
          {' '}{Math.round(20 + (atk.magres * 14 / 100))} /
          {' '}{Math.round(25 + (atk.magres * 16 / 100))}
          </p>
    
          <p>
          Leaps to an ally. Braum and the ally gain <span className="stat--armor">10 / 15 / 20 / 25 (+10% / 12% / 14% / 16% Armor) Armor</span> and <span className="stat--magres">10 / 15 / 20 / 25 (+10% / 12% / 14% / 16% MR) Magic Resist</span> for 3 seconds on arrival.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> UNBREAKABLE
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
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} 
          </h5>
    
          <p>
          Braum raises his shield in a target direction, intercepting projectiles for 4 seconds. Braum negates the first instance of damage and takes <span className="stat--armor">28% / 32% / 36% / 40% reduced damage</span> afterwards. Braum gains <span className="stat--moveSpeed">10% Movement Speed</span> while his shield is raised.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> GlACIAL FISSURE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(70*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)}
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

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Slams the ground and opens a fissure, <span className="stat--ap">dealing 150 / 250 / 350 (+60% AP) magic damage</span> and knocking up enemies for 1 second. <br />
          The fissure slows enemies by <span className="stat--moveSpeed">40% / 50% / 60%</span> and lasts for 4 seconds. <br />
          After the first enemy champion hit, subsequent enemies are knock up for 0.25 seconds.
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