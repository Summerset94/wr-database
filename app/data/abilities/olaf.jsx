export default function olaf({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> BERSERKER RAGE
          </h4>
    
          <p>
          Olaf gains <abbr title="0.9 - 1.4% based on level" className="stat--as">{(champ.asBase * (0.9 + (0.5/14*(currentLevel - 1)))/100).toFixed(3)} Attack Speed</abbr> and <abbr title="0.1-0.4% based on level" className="stat--vamp">{(0.1 + (0.3/14*(currentLevel - 1))).toFixed(2)}% Physical Vamp</abbr> per <span className="stat--hp">1% of missing Health.</span>
          </p>

          <p>
            Capped with: <abbr title="60 - 100% based on level" className="stat--as">{(champ.asBase * (60 + (40/14*(currentLevel-1)))/100).toFixed(3)} Attack Speed</abbr> and <abbr title="10-25% based on level" className="stat--vamp">{(10 + (15/14*(currentLevel - 1))).toFixed(2)}% Physical Vamp</abbr> at <span className="stat--hp">70% of missing Health.</span>
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> UNDERTOW
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{45} / 
            {' '}{50} / 
            {' '}{55} / 
            {' '}{60} 
          </h5>
    
          <p>
          Throws an axe, dealing <span className="stat--ad">50 / 110 / 170 / 230 (+230% AD) physical damage</span>  and <span className="stat--moveSpeed">slowing by 20 / 25 / 30 / 35%</span> for 2 seconds.
          </p>

          <p>
          Enemy champions hit have their <abbr className="stat--armor" title='applied BEFORE armor penetration'>armor reduced by 20%</abbr> for 4 seconds. 
          </p>

          <p>
          Picking up the axe reduces Undertow's cooldown by 4.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> VICIOUS STRIKES
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{30}
          </h5>
    
          <p>
            Olaf gains <abbr title="35 / 50 / 65 / 80%" className="stat--as">{(champ.asBase*35/100).toFixed(3)} / {(champ.asBase*50/100).toFixed(3)} / {(champ.asBase*65/100).toFixed(3)} / {(champ.asBase*80/100).toFixed(3)} Attack Speed</abbr> for 4 seconds and grants himself a shield that absorbs <span className="stat--hp">30 / 60 / 90 / 120 (+ 17% missing Health)</span> for 2.5 seconds with an amount that is capped at <span className="stat--health">70% of missing health</span>.
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> RECKLESS SWING
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(9.8*mod.atkcdr).toFixed(1)} / 
            {' '}{(8.8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7.8*mod.atkcdr).toFixed(1)} / 
            {' '}{(6.8*mod.atkcdr).toFixed(1)} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad"> 
            {' '}{Math.round(((55)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((115)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((175)+(atk.attack * 50 / 100)))} / 
            {' '}{Math.round(((235)+(atk.attack * 50 / 100)))}
          </p>
    
          <p>
          Dash to an enemy and deal <span className="stat--critChance">55 / 115 / 175 / 235 (<span className="stat--ad">+50% AD</span>) true damage</span>. If the enemy does not die, Olaf takes <abbr title="18 / 36 / 54 / 72 + 15% AD" className="stat--critChance">
          {' '}{Math.round(((18)+(atk.attack * 15 / 100)))} / 
            {' '}{Math.round(((36)+(atk.attack * 15 / 100)))} / 
            {' '}{Math.round(((54)+(atk.attack * 15 / 100)))} / 
            {' '}{Math.round(((72)+(atk.attack * 15 / 100)))} true damage</abbr>.
          </p>
          <p>
            Attacks lower the cooldown of Reckless Swing by 1 second.
          </p>

          <p>
            Deal 80% damage to monsters.
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
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)}
          </h5>
    
          <p>
           <b>Passive:</b> Gain <b>10 / 20 / 30</b> <span className="stat--armor">Armor</span> and <span className="stat--magres">Magic Resist</span>.
          </p>

          <p>
            <b>Active:</b> Becomes immune to crowd control and gains <abbr title="5 / 15 / 25 (+20% AD)" className="stat--ad">{Math.round(5 + atk.attack * 20 / 100)} / {Math.round(15 + atk.attack * 20 / 100)} / {Math.round(25 + atk.attack * 20 / 100)} Attack Damage</abbr> for 4 seconds. Also gains <span className="stat--moveSpeed">20 / 45 / 70% Movement Speed</span> when moving toward enemy champions for 1 second upon cast. Ragnarok's duration is increased by 2.5s  for each basic attack or cast of <b>Reckless Swing</b> against an enemy champion.
          </p>

          <p>
            Ragnarok can be cast while under the effects of crowd control.
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