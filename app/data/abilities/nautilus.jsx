export default function nautilus({currentLevel, mod, bonus, atk, def, champ}) {
  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> STAGGERING BLOW
          </h4>
    
          <p>
            Attacks deal an additional <abbr title="13 + 8 per level" className="stat--ad">{13 + Number(currentLevel * 8)} physical damage</abbr> and root the target for <abbr title="1-1.75 based on level">{(1 + 0.05357 * (currentLevel - 1)).toFixed(2)} seconds</abbr>.
          </p>

          <p>
            6 seconds cooldown for the same target
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> DREDGE LINE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(12*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(10*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((120)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((180)+(atk.ap * 90 / 100)))} / 
            {' '}{Math.round(((240)+(atk.ap * 90 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 90 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((120)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((180)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((240)+(atk.ap * 90 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Hurls his anchor forward, dealing <span className="stat--ap">60 / 120 / 180 / 240 (+90% AP) magic damage</span> to the first target hit and pulling them and Nautilus together.
          </p>

          <p>
          if the anchor hits terrain, Nautilus pulls himself to the terrain and 50% of DREDGE LINE'S cooldown and mana coast are refunded.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> TITAN'S WRATH
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(11*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{80}
          </h5>

          <h5 className="stat--hp">
            Shield:
          </h5>

          <p className="stat--hp">
                  {Math.round(((55)+(atk.health * 11 / 100)))} / 
            {' '}{Math.round(((65)+(atk.health * 12 / 100)))} / 
            {' '}{Math.round(((75)+(atk.health * 13 / 100)))} / 
            {' '}{Math.round(((85)+(atk.health * 14 / 100)))}
          </p>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100)))} / 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((40)+(atk.ap * 40 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((50)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((60)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((70)+(atk.ap * 40 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Gains a shield that absorbs <span className="stat--hp">55 / 65 / 75 / 85 (+10 / 11 / 12 / 13% Max Health) damage</span> for 6 seconds.
          </p>

          <p>
          While the shield holds, Nautilus attacks are empowered to deal an additional <span className="stat--ap">40 / 50 / 60 / 70 (+40% AP) magic damage</span> around the target.
          </p>

          <p>
            Deals 200% damage against monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> RIPTIDE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(6.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(6*mod.atkcdr).toFixed(1)} / 
            {' '}{(5.5*mod.atkcdr).toFixed(1)} / 
            {' '}{(5*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{60} / 
            {' '}{70} / 
            {' '}{80} / 
            {' '}{90} 
          </h5>
    
          <p>
            Sends weaves emanating outwards that deal <span className="stat--ap">60 / 100 / 140 / 180 (+50% AP) magic damage</span> and slow by <span className="stat--moveSpeed">35 / 40 / 45 / 50%</span>  decaying over 1.5 seconds.
          </p>

          <p>
          Enemies hit by subsequent waves take <span className="stat--critChance">50%</span> damage.
          </p>

          <p>
            Deals 175% damage against monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> DEPTH CHARGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(50*mod.atkcdr).toFixed(1)} / 
            {' '}{(40*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100}
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((275)+(atk.ap * 80 / 100)))} / 
            {' '}{Math.round(((400)+(atk.ap * 80 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((150)+(atk.ap * 80 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((275)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((400)+(atk.ap * 80 / 100))* (1 - mod.defMagRed))}
          </p>
    
          <p>
          Nautilus fires a <b>DEPTH CHARGE</b> that locks up on enemy champion and slowly travels towards the target, dealing <span className="stat--ap">150 / 275 / 400 (+80% AP) magic damage</span>, knocking them Up and Stunning them for 1/1.5/2 seconds.
          </p>

          <p>
          Other enemies hit by the DEPTH CHARGE are also Knocked Up and Stunned and take <span className="stat--ap">125 / 175 / 225 (+40% AP) magic damage</span>.
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