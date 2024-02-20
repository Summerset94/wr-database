export default function gwen({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> THOUSAND CUTS
          </h4>
          <h5 className="stat--ap">On-hit: {Math.round((def.health * (1 + (atk.ap * 0.005))/100)*(1 - mod.defMagRed))}</h5>
          <h5 className="stat--hp">Healing cap: {Math.round(12+18/14*(currentLevel - 1)+ (atk.ap * 0.07))}</h5>

    
          <p>
            Basic attacks on-hit, the center of <b>Snip Snip!</b>, and <b>Needlework</b> deal <span className="stat--ap">bonus magic damage equal to 1% (+ 0.5% per 100 AP) of the target's maximum health.</span> <br />

            Thousand Cuts is modified based on the target: <br />

            Heals Gwen for 70% of the post-mitigation damage dealt against champions, capped at<span className="stat--hp"> 12 - 30 (based on level) <span className="stat--ap">(+ 7% AP)</span></span>. <br />

            Deals a maximum of <abbr title="2 (+3% AP)" className="stat--ap">{Math.round(2 + (atk.ap * 3 / 100))} magic damage</abbr> against monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> SNIP SNIP!
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(4.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(3.5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{40} / 
            {' '}{40} / 
            {' '}{40} / 
            {' '}{40} 
          </h5>

          <h5 className="stat--ap">
           Base Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((14)+(atk.ap * 6 / 100)))} / 
            {' '}{Math.round(((18)+(atk.ap * 6 / 100)))} / 
            {' '}{Math.round(((22)+(atk.ap * 6 / 100)))} / 
            {' '}{Math.round(((26)+(atk.ap * 6 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((14)+(atk.ap * 6 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((18)+(atk.ap * 6 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((22)+(atk.ap * 6 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((26)+(atk.ap * 6 / 100))* (1 - mod.defMagRed))}          
          </p>

          <h5 className="stat--ap">
            Final snip:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((80)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((100)+(atk.ap * 30 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 30 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((80)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((100)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 30 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
           <b>PASSIVE:</b>  Gains 1 stack per attack hit (up to 4), lasts 6 seconds. <br />
           <b>ACTIVE:</b> Snips her scissors twice, snipping an extra time for each stack consumed. Each snip deals <span className="stat--ap">14 / 18 / 22 / 26 (+5% AP) magic damage</span>  with the final snip dealing <span className="stat--ap">70 / 90 / 110 / 130 (+30% AP) magic damage</span> instead. <br />
           The center of each strike deals <span className="stat--vamp"> true damage</span> instead and applies <b>Thousand Cuts</b>.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> HALLOWED MIST
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(17*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(15*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} / 
            {' '}{60} 
          </h5>

          <h5 className="stat--armor">
            Bonus Armor and <span className="stat--magres">Magic Resistance</span>:
          </h5>

          <p className="stat--armor">
            {Math.round(((14)+(atk.ap * 5 / 100)))} / 
            {' '}{Math.round(((16)+(atk.ap * 5 / 100)))} / 
            {' '}{Math.round(((18)+(atk.ap * 5 / 100)))} / 
            {' '}{Math.round(((20)+(atk.ap * 5 / 100)))}
          </p>
    
          <p>
          Summons the Hallowed Mist for 4 seconds, making Gwen untargetable to enemies outside the zone while inside. Gwen gains <span className="stat--armor">14 / 16 / 18 / 20 (+5% AP) bonus Armor and <span className="stat--magres">Magic Resist</span></span> inside the mist. <br />

          The Mist will move to Gwen the first time she attempts to leave.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> SKIP N' SLASH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(10.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{35} / 
            {' '}{35} / 
            {' '}{35} / 
            {' '}{35} 
          </h5>

          <h5 className="stat--ap">
            Damage: 
            {' '}{Math.round(((10)+(atk.ap * 15 / 100)))} /
            {' '}{Math.round(((10)+(atk.ap * 15 / 100)) * (1 - mod.defMagRed))}
          </h5>

          <h5 className="stat--as">Bonus Attack Speed</h5>
          <p className="stat--as">
            {(champ.asBase * 20 / 100).toFixed(3)} /
            {' '} {(champ.asBase * 40 / 100).toFixed(3)} /
            {' '} {(champ.asBase * 60 / 100).toFixed(3)} /
            {' '} {(champ.asBase * 80 / 100).toFixed(3)} /
          </p>

          <p>
           Dashes and enhances her attacks for 4 seconds. Enhanced attacks gain <span className="stat--as">20% / 40% / 60% / 80% Attack Speed</span>, <span className="stat--ap">10 (+15% AP) magic damage</span> on-hit and 100 Range. <br />

          The first enhanced attack to hit a champion or minion refunds 50% of this ability's coodown. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> NEEDLEWORK
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
            First Cast:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 8 / 100)))} / 
            {' '}{Math.round(((45)+(atk.ap * 8 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 8 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((35)+(atk.ap * 8 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((45)+(atk.ap * 8 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 8 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
            Second Cast:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((90)+(atk.ap * 24 / 100)))} / 
            {' '}{Math.round(((135)+(atk.ap * 24 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 24 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((90)+(atk.ap * 24 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((135)+(atk.ap * 24 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 24 / 100))* (1 - mod.defMagRed))}
          </p>

          <h5 className="stat--ap">
            Third Cast:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((225)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((300)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((225)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((300)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          <b>First Cast:</b> Hurl a needle that deals <span className="stat--ap">30 / 45 / 60 (+8% AP) magic damage</span>, slows by <span className="stat--moveSpeed">30% / 35% / 40% for 1.5 seconds</span>, and applies <b>Thousand Cuts</b>  to all enemies hit. Needlework can be re-cast 2 additional times. <br />

          <b>Second Cast:</b> Fires 3 needles, dealing a total of <span className="stat--ap">90 / 135 / 180 (+24% AP) magic damage</span>. <br />

          <b>Third Cast:</b> Fires 5 needles, dealing a total of <span className="stat--ap">150 / 225 / 300 (+40% AP) magic damage</span>.
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