export default function pyke({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> GIFT OF THE DROWNED ONES
          </h4>
    
          <p>
          Stores <abbr title="10% + 0.35% of FLAT armor penetration" className="stat--vamp">{(10 + atk.flatArmPen * 0.35 / 100).toFixed(1)}%</abbr> of damage taken from champions, increased to <abbr title="50% + 0.65% of FLAT armor penetration" className="stat--vamp">{(50 + atk.flatArmPen * 0.65 / 100).toFixed(1)}%</abbr> if there are two or more visible enemy champions nearby. Damage stored cannot exceed <abbr title="MINIMUM between 65% Health and 146 + 800% bonus AD" className="stat--hp">{Math.round(Math.min((atk.health*65/100),(160 + bonus.attack * 800 / 100)))} health</abbr>
          </p>

          <p>
           When Pyke is not visible to enemies, he heals for the amount of damage stored. 
          </p>

          <p>
           Pyke cannot increase his max Health and converts <span className="stat--hp">14 bonus Health</span>  to <span className="stat--ad">1 Attack Damage</span>. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BONE SKEWER
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(8*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((130)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((195)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((260)+(bonus.attack * 60 / 100)))} / 
            {' '}{Math.round(((325)+(bonus.attack * 60 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((130)+(bonus.attack * 60 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((195)+(bonus.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((260)+(bonus.attack * 60 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((325)+(bonus.attack * 60 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            <b>Charge:</b> <span className="stat--moveSpeed">Slows himself by 20%</span> for up to 3s, increasing cast range over the first 0.8s. 
          </p>

          <p>
            <b>Release:</b> Hurls his spear, dealing <span className="stat--ad">130 / 195 / 260 / 325 (+60% bonus AD) physical damage</span>, <span className="stat--moveSpeed">slowing the target by 90% for 1s</span> and pulling it in. Releasing the ability immediately will cause Pyke to thrust his spear instead, dealing the same damage.
          </p>

          <p>
            Deals 50% damage to minions.
            Deals 50% damage to monsters.
            If BONE SKEWER is overcharged it refunds a portion of it's cooldown and 50% of its mana cost.
          </p>

        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> GHOSTWATER DIVE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(10.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
    
          <p>
            Becomes <b>camouflaged</b> for 5 seconds and gains <abbr className="stat--moveSpeed" title='40% + 200% flat armor pen'>{Math.round(atk.moveSpeed * (40 + 2*atk.flatArmPen)/100)} Movement Speed</abbr> that decays over the duration.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> PHANTOM UNDERTOW
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((120)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((175)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((230)+(bonus.attack * 100 / 100)))} / 
            {' '}{Math.round(((285)+(bonus.attack * 100 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((120)+(bonus.attack * 100 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((175)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((230)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((285)+(bonus.attack * 100 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
           Dashes forward, leaving behind a phantom. After 1 second, the phantom returns to Pyke, dealing <span className="stat--ad">120 / 175 / 230 / 285 (+100% bonus AD) physical damage </span> to enemy champions and stunning for <b>1.5 (+1.5% flat armor pen)</b>  seconds.
          </p>

          <p>
            Deals 50% damage to minions
            Deals 50% damage to monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DEATH FROM BELOW
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

          <h5 className="stat--critChance">
            Execute Threshold:
          </h5>

          <p className="stat--critChance"> 
            {' '}{Math.round(((250)+(atk.flatArmPen * 250 / 100)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((250)+(atk.flatArmPen * 400 / 100)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((250)+(atk.flatArmPen * 550 / 100)+(bonus.attack * 80 / 100)))}
          </p>
    
          <p>
            Marks target area with an X, executing enemy champions below <span className="stat--critChance">250 (+80% bonus AD) (+250 / 400 / 550% flat Armor penetration) health</span>. Non-champions and champions above the threshold take 50% of this amount as <span className="stat--ad">physical damage</span>.
          </p>

          <p>
          If an emeny champion is struck, Pyke blinks to the location. If he was executed Pyke can recast <b>DEATH FROM BELOW</b> within 15s. 
          </p>

          <p>
          Each execution grants Pyke 100% bounty gold. If there's an assisting ally, grant them 100% gold, and  grant Pyke 160% gold (up to 600). Enemies killed by an ally inside the X grant Pyke 160% gold (up to 600).
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