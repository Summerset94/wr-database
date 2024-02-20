export default function ahri({currentLevel, mod, bonus, atk, def}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> ESSENCE THEFT
          </h4>

          <h5 className="stat--hp">
           Healing :
          </h5>

          <p className="stat--hp">From Stacks: 
            {' '}{Math.round(((40 + 20 * Math.floor((currentLevel - 1)/4))+(atk.ap * 20 / 100)))}
          </p>

          
          <p className="stat--hp">On Takedown: 
          {' '}{Math.round(((80)+(atk.ap * 35 / 100)))} /
          {' '}{Math.round(((120)+(atk.ap * 35 / 100)))} /
          {' '}{Math.round(((160)+(atk.ap * 35 / 100)))} / 
          {' '}{Math.round(((200)+(atk.ap * 35 / 100)))}      
          </p>

          <p>
            Whenever Ahri hits a target with a spell, she gains a stack of Essence Theft. When she has enough stacks, her next spell that hits an enemy also heals her for <abbr className="stat--hp" title='40 + 20 at level 5 , 9, 13'> 40-100 (based on level)</abbr> <span className="stat--ap">(+20% AP)</span>. Whenever Ahri scores a champion takedown within 3 seconds of damaging them, she consumes their essence to heal herself for <span className="stat--hp">80 / 120 / 160 / 200</span>    <span className="stat--ap">(+35% AP)</span>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> ORB OF DECEPTION
          </h4>

          <h5>
          Cooldown: 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>
          <h5 className="stat--mana">
          Cost: 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 35 / 100)))} + {Math.round(((35)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 35 / 100)))} + {Math.round(((70)+(atk.ap * 35 / 100)))}  / 
            {' '}{Math.round(((105)+(atk.ap * 35 / 100)))} + {Math.round(((105)+(atk.ap * 35 / 100)))}  / 
            {' '}{Math.round(((140)+(atk.ap * 35 / 100)))} + {Math.round(((140)+(atk.ap * 35 / 100)))} 
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 35 / 100)) * (1 - mod.defMagRed))} + {Math.round(((35)+(atk.ap * 35 / 100)))}  / 
            {' '}{Math.round(((70)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} + {Math.round(((70)+(atk.ap * 35 / 100)))}  / 
            {' '}{Math.round(((105)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} + {Math.round(((105)+(atk.ap * 35 / 100)))}  / 
            {' '}{Math.round(((140)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} + {Math.round(((140)+(atk.ap * 35 / 100)))}           
          </p>

          <p>
            Ahri sends out and pulls back her orb, dealing <span className="stat--ap">35 / 70 / 105 / 140 (+35% AP) magic damage</span> on the way out and <span className="stat--ap">35 / 70 / 105 / 140 (+35% AP)</span> <b>true damage</b> on the way back.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> FOX-FIRE
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
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} / 
            {' '}{50} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((75)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((110)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((145)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((75)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((110)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((145)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p>
          <b>ACTIVE:</b> Ahri gains <abbr title="40%" className="stat--moveSpeed">{Math.round(atk.moveSpeed * 45 / 100)} bonus movement speed</abbr> that decays over 1.5 seconds and summons three flames which orbit her for up to 5 seconds. <br />
          Each flame chases a nearby enemy, dealing magic damage, reduced to 30% for enemies taking flames beyond the first. <br />
          Flames prioritize targeting enemies hit by <span className="stat--ap">Charm</span>, then the last enemy Ahri attacked, and then the nearest enemy.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> CHARM
          </h4>

          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} 
          </h5>
           <h5 className="stat--mana">
          Cost: 
            {' '}{85} / 
            {' '}{85} / 
            {' '}{85} / 
            {' '}{85} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 50 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((140)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 50 / 100))* (1 - mod.defMagRed))}          
          </p>

          <p className="stat--magres">
          Charm Duration: 
            {' '}{1.4}S / 
            {' '}{1.6}S / 
            {' '}{1.8}S / 
            {' '}{2}S 
          </p>

          <p>
            Ahri blows a kiss in a line in the target direction that deals <span className="stat--ap">60 / 100 / 140 / 180 (+ 50% AP) Magic Damage</span> to the first enemy hit and Charm them for a duration, instantly stopping movement abilities and causing target to walk harmlessly towards her.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> SPIRIT RUSH 
          </h4>

          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(65*mod.atkcdr).toFixed(1)} / 
            {' '}{(55*mod.atkcdr).toFixed(1)}
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

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((90)+(atk.ap * 35 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 35 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 35 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((90)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 35 / 100))* (1 - mod.defMagRed))}
          </p>

          <p>
            Ahri dashes in the target direction and afterwards fires bolts at up to 3 nearby enemies, each  <span className="stat--ap"> 60 / 90 / 120 (+35% AP) magic damage</span> and prioritizing champions. Spirit Rush can then be recast twice more within 10 seconds. <br />
            If Ahri devours a champion's essence with Essence Theft, Ahri will extend Spirit Rush's recast duration up to 10 seconds, and she gains an extra charge of Spirit Rush. <br />
            Stores up to 3 charges.
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