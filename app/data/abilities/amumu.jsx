export default function amumu({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CURSED TOUCH
          </h4>         

          <p>
            Amumu's basic attacks Curse his enemies, causing them to take bonus <b>10% True Damage</b> from incoming <span className="stat--ap">Magic Damage</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> BANDAGE TOSS
          </h4>

          <h5>
          Cast cooldown: 
            {' '}{(3).toFixed(1)} / 
            {' '}{(3).toFixed(1)} / 
            {' '}{(3).toFixed(1)} / 
            {' '}{(3).toFixed(1)} 
          </h5>
          <h5>
          Charge cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10.5*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{35} / 
            {' '}{40} / 
            {' '}{45} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((105)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((175)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((1005)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((175)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
            <b>Bandage Toss</b> charges are stored every 12 / 11.5 / 11 / 10.5 seconds up to 2 charges max.

            <b>Active:</b> Launches a bandage that pulls Amumu to target, stuns the target fot 1 second and deals <span className="stat--ap">70 / 105 / 140 / 175 (+70% AP) Magic Damage</span> to target.            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> DESPAIR
          </h4>

          <h5>
          Cooldown: 
            {' '}{(1).toFixed(1)} / 
            {' '}{(1).toFixed(1)} / 
            {' '}{(1).toFixed(1)} / 
            {' '}{(1).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{10} / 
            {' '}{11} / 
            {' '}{12} / 
            {' '}{13} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((15)+(def.health *(1 + atk.ap * 0.6) / 100)))} / 
            {' '}{Math.round(((20)+(def.health *(1.2 + atk.ap * 0.6) / 100)))} / 
            {' '}{Math.round(((25)+(def.health *(1.4 + atk.ap * 0.6) / 100)))} / 
            {' '}{Math.round(((30)+(def.health *(1.6 + atk.ap * 0.6) / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((15)+(def.health * (1 + atk.ap * 0.6)/ 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((20)+(def.health * (1.2 + atk.ap * 0.6) / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((25)+(def.health * (1.4 + atk.ap * 0.6) / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((30)+(def.health * (1.6 + atk.ap * 0.6) / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
            Amumu begins weeping to deal <span className="stat--ap">15 / 20 / 25 / 30 <span className="stat--hp">(+1 / 1.2 / 1.4 / 1.6% <span className="stat--ap">(+0.6% per 100 AP)</span> of the target's maximum health)</span> Magic Damage</span> to nearby enemies every second
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> TANTRUM
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
            {' '}{35} / 
            {' '}{35} / 
            {' '}{35} / 
            {' '}{35} 
          </h5>

          <p className="stat--armor">Physical Damage Reduction: 
            {' '}{Math.round(((4)+(atk.armor * 3 / 100)+(atk.magres * 3 / 100)))} / 
            {' '}{Math.round(((6)+(atk.armor * 3 / 100)+(atk.magres * 3 / 100)))} / 
            {' '}{Math.round(((8)+(atk.armor * 3 / 100)+(atk.magres * 3 / 100)))} / 
            {' '}{Math.round(((10)+(atk.armor * 3 / 100)+(atk.magres * 3 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((170)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((200)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((110)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((170)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((200)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
            <b>Passive:</b> Amumu blocks <span className="stat--ad">4 / 6 / 8 / 10 <span className="stat--armor">(+3% armor)</span> <span className="stat--magres">(+3% magic resistance)</span> Physical damage</span> on any instance of physical damage done to him. <br />
            <b>ACTIVE:</b> Amumu throws a Tantrum dealing <span className="stat--ap">110 / 140 / 170 / 200 (+50% AP) Magic Damage</span> to all enemies in small area around him and slowing them by <b>20%</b> for 0.5 seconds. <br />
            Tantrum's cooldown is reduced by 0.5 seconds each time Amumu is hit by basic attack.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> CURSE OF THE SAD MUMMY
          </h4>

          <h5>
          Cooldown: 
            {' '}{(95*mod.atkcdr).toFixed(1)} / 
            {' '}{(85*mod.atkcdr).toFixed(1)} / 
            {' '}{(75*mod.atkcdr).toFixed(1)}
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
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}
          </p>

          <p>
            Amumu releases his curse, dealing <span className="stat--ap">150 / 250 / 350 (+80% AP) Magic Damage</span> and stunning all enemies in a circular area around him for 1.5 seconds.
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