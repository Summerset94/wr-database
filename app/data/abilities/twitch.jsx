export default function twitch({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DEADLY VENOM
          </h4>
    
          <p>
            Attacks infect enemies with venom, dealing <abbr className="stat--vamp" title='1-5 (+1 every 3 levels) + 2.5% AP'>{Math.round(1+(1 * Math.floor((currentLevel-1) / 3))+(atk.ap*2.5/100))} true damage</abbr> over 5 seconds and stacking up to 5 times (<span className="stat--vamp">{Math.round((1+(1 * Math.floor((currentLevel-1) / 3))+(atk.ap*2.5/100))*5)} damage</span>).
          </p>

          <p>
            When an enemy champion has full stacks of DEADLY VENOM, Twitch gains <abbr title="10% + 5% every 3 levels (10-30)" className="stat--as">{(champ.asBase * (10 + (5 * Math.floor((currentLevel-1) / 3)))/100).toFixed(3)} Attack Speed</abbr> for 5 seconds.          
          </p>

          <p>
           Monsters take 130% increased damage from DEADLY VENOM. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> AMBUSH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40}
          </h5>
    
          <br />
          <p>
            Become Camouflaged and hasted by <span className="stat--moveSpeed">10% for 8 / 9 / 10 / 11 seconds</span>, increasing to <span className="stat--moveSpeed">20%</span>  when nearby enemy champions cannot see Twitch.
          </p>

          <p>
            After exiting Camouflage, Twitch's attacks will apply an additional stack of DEADLY VENOM for 3 seconds. AMBUSH resets when a champion dies while infected by DEADLY VENOM.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> VENOM CASK
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{70}
          </h5>
    
          <br />
          <p>
            Hurls a cask that applies stacks of DEADLY VENOM to enemies and <span className="stat--moveSpeed">slows</span> by <span className="stat--moveSpeed"> 30 / 35 / 40 / 45% (<span className="stat--ap">+6% AP</span>)</span> for 3 seconds.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> CONTAMINATE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ad">
            Stack damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(bonus.attack * 33 / 100)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((25)+(bonus.attack * 33 / 100)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((30)+(bonus.attack * 33 / 100)+(atk.ap * 20 / 100)))} / 
            {' '}{Math.round(((35)+(bonus.attack * 33 / 100)+(atk.ap * 20 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((20)+(bonus.attack * 33 / 100)+(atk.ap * 20 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((25)+(bonus.attack * 33 / 100)+(atk.ap * 20 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((30)+(bonus.attack * 33 / 100)+(atk.ap * 20 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((35)+(bonus.attack * 33 / 100)+(atk.ap * 20 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <br />
          <p>
            Deals <span className="stat--ad">30 / 40 / 50 / 60 physical damage</span> to all enemies affected by DEADLY VENOM, each stack deals <span className="stat--ad">20 / 25 / 30 / 35 (+33% bonus AD) (<span className="stat--ap">+20% AP</span>) damage</span> to enemies.
          </p>

          <p>
            Enemies with maximum stacks will spread the damage to nearby targets and  apply maximum stacks of DEADLY VENOM to them.
          </p>

          <p>
            <b>Deals <span className="stat--ad">130 / 165 / 200 / 235 physical damage</span> at max stacks.</b>
          </p>

          <p>
           Deals 130% increased damage to monsters. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> SPRAY AND PRAY
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
    
          <br />
          <p>
            For 6 seconds gain 250 Attack Range and <span className="stat--ad">20 / 35 / 50 bonus attack damage</span> and transform attacks into piercing bolts that hit every enemy in a line.
          </p>

          <p>
            Subsequent targets take 10% less damage, down to a minimum of 60%.
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