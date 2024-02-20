export default function vladimir({currentLevel, mod, bonus, atk, def, champ, updateAbilitiesBonus}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> CRIMSON PACT
          </h4>
    
          <p>
           Gains <span className="stat--ap">Ability Power</span> equal to <span className="stat--hp">4.5% of bonus Health</span> and <span className="stat--hp">Bonus Health</span> equal to 
          <span className="stat--ap">120% of Ability Power</span> (Does not stack with itself).
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> TRANSFUSION
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--hp">
            Base healing:
          </h5>

          <p className="stat--hp">
                {Math.round(((15)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((20)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((25)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((30)+(atk.ap * 35 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage (<span className="stat--critChance">Crimson Rush</span>):
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 60 / 100)))} -
            <span className="stat--critChance">{' '}{Math.round(((70)+(atk.ap * 60 / 100))*1.75)}</span> /

            {' '}{Math.round(((100)+(atk.ap * 60 / 100)))} -
            <span className="stat--critChance">{' '}{Math.round(((100)+(atk.ap * 60 / 100))*1.75)}</span> /

            {' '}{Math.round(((130)+(atk.ap * 60 / 100)))} - 
            <span className="stat--critChance">{' '}{Math.round(((130)+(atk.ap * 60 / 100))*1.75)}</span> /

            {' '}{Math.round(((160)+(atk.ap * 60 / 100)))} -
            <span className="stat--critChance">{' '}{Math.round(((160)+(atk.ap * 60 / 100))*1.75)}</span>
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((70)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} - 
            <span className="stat--critChance">{' '}{Math.round(((70)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed)*1.75)}</span> /

            {' '}{Math.round(((100)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} - 
            <span className="stat--critChance">{' '}{Math.round(((100)+(atk.ap * 60 / 100))* (1 - mod.defMagRed)*1.75)}</span> /

            {' '}{Math.round(((130)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} -
            <span className="stat--critChance"> {' '}{Math.round(((130)+(atk.ap * 60 / 100))* (1 - mod.defMagRed)*1.75)}</span> /

            {' '}{Math.round(((160)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} - 
            <span className="stat--critChance">{' '}{Math.round(((160)+(atk.ap * 60 / 100))* (1 - mod.defMagRed)*1.75)}</span>        
          </p>
    
          <br />
          <p>
            Drains life from enemies, dealing <span className="stat--ap">70 / 100 / 130 / 160 (+60% AP) magic damage</span> and restoring <span className="stat--hp">15 / 20 / 25 / 30 (<span className="stat--ap">+35% AP</span>)</span>. When this ability's cooldown ends, generates a stack of <b>Bloodthirst</b>.
          </p>

          <p>
            At 2 stacks, gains <abbr title="10% + 10% every 4 levels" className="stat--moveSpeed">10% / 20% / 30% / 40% bonus Movement Speed</abbr> for 0.5 seconds and enters Crimson Rush for 2.5 seconds, gradually depleting all Bloodthirst stacks over this time.
          </p>

          <p>
            <b>Crimson Rush:</b> While in this state, empowers the next cast of Transfusion to deal <span className="stat--critChance">85% bonus damage</span> and heal himself for <abbr title="30 + 10 per level" className="stat--hp">{Math.round(30 + 10 * currentLevel)} health +5% (<span className="stat--ap">+0.03% AP</span>) of missing Health</abbr>. When cast, consumes all Bloodthirst stacks and ends Crimson Rush. The empowered version of this ability heals for 35% against minions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SANGUINE POOL
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(25*mod.atkcdr).toFixed(1)} / 
            {' '}{(22*mod.atkcdr).toFixed(1)} / 
            {' '}{(19*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--hp">
          Cost: 
            {' '}{Math.round(atk.health * 20 / 100)}
          </h5>

          <h5 className="stat--ap">
            Damage (current target):
          </h5>  
          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((20)+(def.health * 2 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((40)+(def.health * 2 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(def.health * 2 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(def.health * 2 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
            Sinks into a blood pool, becoming untargetable for 2 seconds. Also gains <span className="stat--moveSpeed">27.5% bonus Movement Speed</span>  that gradually decays over 1 seconds. While the blood pool is active, enemies within the blood pool take <span className="stat--ap">20 / 40 / 60 / 80 (<span className="stat--hp">+2% Max Health</span>) magic damage</span> 0.5 seconds and are <span className="stat--moveSpeed">slowed by 40%</span>. Also restores  to <span className="stat--hp">Health equal 15% of the damage dealt</span>.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> TIDES OF BLOOD
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--hp">
          Cost: 
            {' '}{Math.round(atk.health * 8 / 100)}
          </h5>

          <h5 className="stat--ap">
            <abbr title="Charged just deals 2 x Damage">Damage:</abbr> 
          </h5>

          <p className="stat--ap">Base: 
            {' '}{Math.round(((20)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((40)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 35 / 100)))}
          </p>

          <p className="stat--ap">Current target: 
            {' '}{Math.round(((20)+(atk.ap * 35 / 100)+(def.health * 2.5 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((40)+(atk.ap * 35 / 100)+(def.health * 2.5 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 35 / 100)+(def.health * 2.5 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 35 / 100)+(def.health * 2.5 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <br />
          <p>
           Charges up to 1.5 seconds, dealing <span className="stat--ap">20 / 40 / 60 / 80 (+35% AP) (<span className="stat--hp">+2.5% target's Max Health</span>) magic damage</span> to nearby enemies. Charging can additionally increase damage by up to 100%. After charging for 1 seconds, becomes slowed by 20% and also slows any enemies hit by 40/45/50/55%.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> 
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(90*mod.atkcdr).toFixed(1)}
          </h5>

          <h5 className="stat--hp">
            Healing base (bonus per champion):
          </h5>

          <p className="stat--hp">
                {Math.round(((150)+(atk.ap * 70 / 100)))}
            {' '}({Math.round(((150)+(atk.ap * 70 / 100))*40/100)}) /

            {' '}{Math.round(((250)+(atk.ap * 70 / 100)))}
            {' '}({Math.round(((250)+(atk.ap * 70 / 100))*40/100)}) /

            {' '}{Math.round(((350)+(atk.ap * 70 / 100)))}
            {' '}({Math.round(((350)+(atk.ap * 70 / 100))*40/100)})
          </p>

          <h5 className="stat--ap">
            Base damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100)))} / 
            {' '}{Math.round(((350)+(atk.ap * 70 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 70 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((250)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((350)+(atk.ap * 70 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <br />
          <p>
            nfects an area with a toxic plague that infects enemies hit for 4 seconds, after which the plague explodes, dealing <span className="stat--ap">150 / 250 / 350 (+70% AP) magic damage</span> to infected targets. Also deals 10% of the damage taken by the targets during the infection period as <span className="stat--ap">bonus magic damage.</span>
          </p>

          <p>
            After 0.4 seconds, the first infected enemy champion restores <span className="stat--hp">150 / 250 / 350 (<span className="stat--ap">70% AP</span>) Health</span> to Vladimir. Every subsequent champion provides 40% healing.
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