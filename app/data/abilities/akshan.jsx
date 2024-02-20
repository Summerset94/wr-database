export default function akshan({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> DIRTY FIGHTING
          </h4>

          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} - lvl 1 / 
            {' '}{(8*mod.atkcdr).toFixed(1)} - lvl 5 / 
            {' '}{(4*mod.atkcdr).toFixed(1)}  - lvl9
          </h5>
          
          <p>
            Every three hits from attacks and abilities deal bonus <abbr title="25-180 based on level" className="stat--ap">{Math.round(25 + (155/14+(currentLevel - 1)))} Magic Damage</abbr> and gain a shield that absorbs <abbr title="40-300 based on level +40 bonus AD" className="stat--hp">{Math.round(40+(260/14*(currentLevel - 1))+ (bonus.attack * 40 / 100))} Damage</abbr> for 2 seconds. <br />
            After launching a basic attack. Akshan will fire a second shot that deals <abbr title="50% AD" className="stat--ad">{Math.round(atk.attack/2)} Physical Damage</abbr>. He can cancel this shot to gain <abbr title="40-120 based an level" className="stat--moveSpeed">{Math.round(40 + (80/14*(currentLevel - 1)))} Movement Speed</abbr> decaying over 1 second.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> AVENGERANG
          </h4>

          <h5>
          Cooldown: 
            {' '}{(8*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
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
          {' '}{Math.round(((5)+(atk.attack * 80 / 100)))} / 
          {' '}{Math.round(((30)+(atk.attack * 80 / 100)))} / 
          {' '}{Math.round(((55)+(atk.attack * 80 / 100)))} / 
          {' '}{Math.round(((80)+(atk.attack * 80 / 100)))}
        </p>

        <p className="stat--ad">Post-mitigation: 
          {' '}{Math.round(((5)+(atk.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
          {' '}{Math.round(((30)+(atk.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
          {' '}{Math.round(((55)+(atk.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
          {' '}{Math.round(((80)+(atk.attack * 80 / 100))* (1 - mod.defPhysRed))}          
        </p>

          <p>
            Akshan throws a boomerang that deals <span className="stat--ad">5 / 3 / 55 / 80 (+80% AD) Physical Damage</span> to enemies it passes through and revealing them, granting sight of the area along its path, as well as extending its range every time it hits an enemy. If the boomerang hits an enemy champion, Akshan gains bonus <abbr title="40%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 40 / 100)} Movement Speed</abbr> decaying over time. Upon reaching maximum range, the boomerang returns to Akshan, applying the same effects to enemies hit along the way. Avengerang's damage is reduced against non-champions.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> GOING ROGUE
          </h4>

          <h5>
          Cooldown: 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(2*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} / 
            {' '}{30} 
          </h5>

          <p>
            Enemies that kill allied champions become Scoundrels for a duration. When Akshan takes down a Scoundrel, he gains bonus gold and revives the allies slain. Active: Become camouflaged for a few seconds and gain bonus <abbr title="80% / 90% / 100% / 110%" className="stat--moveSpeed"> {Math.round(atk.moveSpeed * 80 / 100)} / {Math.round(atk.moveSpeed * 90 / 100)} / {Math.round(atk.moveSpeed * 100 / 100)} / {Math.round(atk.moveSpeed * 110 / 100)} Movement Speed</abbr> towards Scoundrels. Always camouflaged when Akshan is near terrain or in brushes. Gain <span className="stat--mana">2% missing mana regen</span> per second when chasing Scoundrels.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> HEROIC SWING
          </h4>

          <h5>
          Cooldown: 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((30)+(bonus.attack * 15 / 100)))} / 
            {' '}{Math.round(((70)+(bonus.attack * 15 / 100)))} / 
            {' '}{Math.round(((110)+(bonus.attack * 15 / 100)))} / 
            {' '}{Math.round(((150)+(bonus.attack * 15 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((30)+(bonus.attack * 15 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((70)+(bonus.attack * 15 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((110)+(bonus.attack * 15 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((150)+(bonus.attack * 15 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <p>
          Fires a hook to attach and swing around terrain, attacking the nearest enemy dealing <span className="stat--ad">30 / 70 / 110 / 150 (bonus +15% AD) physical damage</span> per shot. <br />
          If Akshan collides with an enemy champion or terrain, he will jump off the rope. <br />
          Champion takedowns refresh Heroic Swing's cooldown. Heroic Swing prioritizes champions recently damaged by Akshan and applies On-hit effects at 25% effectiveness. Each shot can critically strike for <span className="stat--critChance">125%</span> damage.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> COMEUPPANCE
          </h4>

          <h5>
          Cooldown: 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Minimum Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((20)+(atk.attack * 10 / 100)) * 5)} / 
            {' '}{Math.round(((30)+(atk.attack * 10 / 100)) * 6)} / 
            {' '}{Math.round(((40)+(atk.attack * 10 / 100)) * 7)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round((((20)+(atk.attack * 10 / 100))*5) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round((((30)+(atk.attack * 10 / 100))*6)* (1 - mod.defPhysRed))} / 
            {' '}{Math.round((((40)+(atk.attack * 10 / 100))*7)* (1 - mod.defPhysRed))}         
          </p>

          <h5 className="stat--ad">
            Maximum Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(atk.attack * 40 / 100)) * 5)} / 
            {' '}{Math.round(((120)+(atk.attack * 40 / 100)) * 6)} / 
            {' '}{Math.round(((160)+(atk.attack * 40 / 100)) * 7)}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round((((20)+(atk.attack * 40 / 100))*5) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round((((30)+(atk.attack * 40 / 100))*6)* (1 - mod.defPhysRed))} / 
            {' '}{Math.round((((40)+(atk.attack * 40 / 100))*7)* (1 - mod.defPhysRed))}         
          </p>


          <p>
            Locks onto an enemy champion, charging multiple shots over a few seconds, fires up to 5 / 6 / 7 shots, dealing <span className="stat--ad">20 / 30 / 40 (+10% AD) physical damage per shot</span> to the first enemy or structure hit, increased up to <span className="stat--ad">80 / 120 / 160 (+40% AD) physical damage per shot</span> based on target's missing Health.
          </p>

          <p>
          Each shot's damage is further increased by a percentage equal to <span className="stat--critChance">50% of Critical Rate</span>.
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