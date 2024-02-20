export default function shen({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> KI BARRIER
          </h4>
          <h5>
          Cooldown: 
            {' '}{(10*mod.atkcdr).toFixed(1)}
          </h5>
          
          <h5 className="stat--hp">
          Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((51 + 19/14*(currentLevel -1))+(bonus.health * 14 / 100)))}
          </p>
    
          <p>
            Gains a shield that absorbs <span className="stat--hp">51-100 (based on level) (+14% bonus Health)</span> for 2.5 seconds after completing an ability. If the ability affected at least one champion, Ki Barrier's cooldown is reduced by <abbr title="4-7.5 based on level">{(4 + (3.5/14*(currentLevel - 1))).toFixed(1)} seconds</abbr>.
          </p>

          <p>
            Gains <abbr title="at level 1 /  5 / 9" className="stat--armor">10 / 12.5 / 15 energy</abbr> when Shen's abilities damage an enemy.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> TWILIGHT ASSAULT
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{75} / 
            {' '}{70} / 
            {' '}{65} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--ap">
            Damage (current target):
          </h5>

          <p className="stat--ap">Normal: 
          {' '}{Math.round(((12 + 3*currentLevel)+(def.health * (2.5 + (atk.ap  * 1.5 / 100))/100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((12 + 3*currentLevel)+(def.health * (3 + (atk.ap  * 1.5 / 100))/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((12 + 3*currentLevel)+(def.health * (3.5 + (atk.ap  * 1.5 / 100))/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((12 + 3*currentLevel)+(def.health * (4 + (atk.ap  * 1.5 / 100))/100))* (1 - mod.defMagRed))}        
          </p>

          <p className="stat--ap">Enhanced: 
            {' '}{Math.round(((12 + 3*currentLevel)+(def.health * (5 + (atk.ap  * 2 / 100))/100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((12 + 3*currentLevel)+(def.health * (5.5 + (atk.ap  * 2 / 100))/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((12 + 3*currentLevel)+(def.health * (6 + (atk.ap  * 2 / 100))/100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((12 + 3*currentLevel)+(def.health * (6.5 + (atk.ap  * 2 / 100))/100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
            Recalls the <b>Spirit Blade</b> enhancing his next 3 attacks to deal an additional <abbr title='12 + 3 per level' className="stat--ap">{12 + 3*currentLevel}</abbr> <span className="stat--ap"> (<span className="stat--hp">+2.5 / 3 / 3.5 / 4% of tharget's Max Health</span> +1.5% AP) as magic damage</span>
          </p>

          <p>
            <b>Spirit Blade</b> passed through an enemy champion, the damage bonus is increased to <span className="stat--ap">{12 + 3*currentLevel} (<span className="stat--hp">+5 / 5.5 / 6 / 6.5% of tharget's Max Health</span> +2% AP) magic damage</span> Shen gains <span className="stat--as">50% ({(champ.asBase / 2).toFixed(2)}) Attack Speed</span>.
          </p>

          <p>
            Enemy champions the <b>Spirit Blade</b> passes through are <span className="stat--moveSpeed">slowed by 15 / 20 / 25 / 30% for 2 seconds</span>  while moving away from Shen.
          </p>

          <p>
           Deals 150% damage to monsters.
           Deals 225 max damage to monsters. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SPIRIT'S REFUGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{20}
          </h5>
    
          <p>
            Sends the <b>Spirit Blade</b> to an allied champion, creating a zone that blocks enemy attacks for 1.75 seconds.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SHADOW DASH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--armor">
          Cost: 
            {' '}{75}
          </h5>
    
          <p>
            Dashes forward, dealing <span className="stat--ad">60 / 90 / 120 / 150 (<span className="stat--hp">+15% bonus Health</span>) physical damage</span>to enemy champions and monsters, taunting them for 1.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> STAND UNITED
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(130*mod.atkcdr).toFixed(1)} / 
            {' '}{(115*mod.atkcdr).toFixed(1)} / 
            {' '}{(110*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--hp">
            Healing Shield:
          </h5>

          <p className="stat--hp">
                {Math.round(((170)+(atk.ap * 135 / 100)+(bonus.health * 15 / 100)))} - {Math.round(((170)+(atk.ap * 135 / 100)+(bonus.health * 15 / 100))*1.6)} / 
            {' '}{Math.round(((340)+(atk.ap * 135 / 100)+(bonus.health * 15 / 100)))} - {Math.round(((340)+(atk.ap * 135 / 100)+(bonus.health * 15 / 100))*1.6)} / 
            {' '}{Math.round(((510)+(atk.ap * 135 / 100)+(bonus.health * 15 / 100)))} - {Math.round(((510)+(atk.ap * 135 / 100)+(bonus.health * 15 / 100))*1.6)}
          </p>
    
          <p>
           Channels for 3 seconds, shielding an allied champion for <span className="stat--hp">170 / 340 / 510 (<span className="stat--ap">+135% AP</span>) (+15% bonus Health)</span> for 5 seconds, increased by 0%-60% based on target's missing health.
          </p>

          <p>
            Upon completing the channel, Shen teleports to the target ally.
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