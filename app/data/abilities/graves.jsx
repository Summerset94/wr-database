import {useMemo} from 'react'
export default function graves({currentLevel, mod, bonus, atk, def, champ}) {
  const calculations = useMemo(()=> {
    const p = {
      damage: {
        base: atk.attack * 70/100,
        growth: atk.attack * (2 * Number(currentLevel))/100,
        bulletBonus: {
          base: 24 /100,
          growth: (9.3)/ 14* (Number(currentLevel-1)) / 100
        }
      }
      
    };

    return {
      p : {
        damage: {
          bullet: {
            raw: p.damage.base + p.damage.growth,
            mitigated: (p.damage.base + p.damage.growth) * (1- mod.defPhysRed)
          },
          salvo: {
            raw: (p.damage.base + p.damage.growth) + (p.damage.base + p.damage.growth) * (p.damage.bulletBonus.base + p.damage.bulletBonus.growth) * 3,
            mitigated: ((p.damage.base + p.damage.growth) + (p.damage.base + p.damage.growth) * (p.damage.bulletBonus.base + p.damage.bulletBonus.growth) * 3) * (1- mod.defPhysRed),
          }
        },

        crit: {
          bullet: {
            raw: (p.damage.base + p.damage.growth) * 1.3,
            mitigated: (p.damage.base + p.damage.growth) * 1.3 * (1- mod.defPhysRed)
          },
          salvo: {
            raw: (p.damage.base + p.damage.growth) * 1.3 + ((p.damage.base + p.damage.growth) * (p.damage.bulletBonus.base + p.damage.bulletBonus.growth) * 1.3) * 5,
            mitigated: ((p.damage.base + p.damage.growth) * 1.3 + ((p.damage.base + p.damage.growth) * (p.damage.bulletBonus.base + p.damage.bulletBonus.growth) * 1.3) * 5) * (1- mod.defPhysRed),
          }
        }
      }
    }
  }, [currentLevel, mod, bonus, atk])

  const abilities = [
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> NEW DESTINY
          </h4>

          <h5 className="stat--ad">
            Damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}Bullet: {Math.round(calculations.p.damage.bullet.raw)} / 
            {' '}Salvo: {Math.round(calculations.p.damage.salvo.raw)} / 
            <span className="stat--critChance">
              {' '}Crit-bullet: {Math.round(calculations.p.crit.bullet.raw)} / 
              {' '}Crit-salvo: {Math.round(calculations.p.crit.salvo.raw)}
            </span> 
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}Bullet: {Math.round(calculations.p.damage.bullet.mitigated)} / 
            {' '}Salvo: {Math.round(calculations.p.damage.salvo.mitigated)} / 
            <span className="stat--critChance">
              {' '}Crit-bullet: {Math.round(calculations.p.crit.bullet.mitigated)} / 
              {' '}Crit-salvo: {Math.round(calculations.p.crit.salvo.mitigated)}
            </span>
          </p>
    
          <p>
          Graves' shotgun has some unique properties: <br />
          <b>Double Barrel:</b> Graves must reload when he runs out of ammo. Attack Speed reduces reload time slightly, but reduces time between attacks dramatically.

          <b>12 Gauge:</b>  Attacks fire 4 bullets. Units hit take <abbr className="stat--ad" title="based on level">72%-100% AD physical damage +24-33.3%% for additional bullets</abbr>. Critical strikes fire <span className="stat--critChance">6 bullets, 130% damage each and increase each bullet's damage by 30%</span>. Strcutures only take 75% damage. <br />

          <b>Buckshot:</b> Bullets cannot pass through enemy units. Non-champions struck by multiple bullets are knock back slightly. 
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> END OF THE LINE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(13*mod.atkcdr).toFixed(1)} / 
            {' '}{(11*mod.atkcdr).toFixed(1)} / 
            {' '}{(9*mod.atkcdr).toFixed(1)} / 
            {' '}{(7*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{65} / 
            {' '}{70} / 
            {' '}{75} / 
            {' '}{80} 
          </h5>

          <h5 className="stat--ad">
           Initial damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((45)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((65)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((85)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((105)+(bonus.attack * 80 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((45)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((65)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((85)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((105)+(bonus.attack * 80 / 100))* (1 - mod.defPhysRed))}          
          </p>

          <h5 className="stat--ad">
           Explosion damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 80 / 100)))} / 
            {' '}{Math.round(((130)+(bonus.attack * 110 / 100)))} / 
            {' '}{Math.round(((180)+(bonus.attack * 140 / 100)))} / 
            {' '}{Math.round(((230)+(bonus.attack * 170 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((80)+(bonus.attack * 80 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((130)+(bonus.attack * 110 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((180)+(bonus.attack * 140 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((230)+(bonus.attack * 170 / 100))* (1 - mod.defPhysRed))}          
          </p>
    
          <p>
            Fires a powder round that deals <span className="stat--ad">45 / 65 / 85 / 105 (+80% bonus AD) physical damage</span> and then detonates after 1 second to deal an additional <span className="stat--ad">80 / 130 / 180 / 230 (+80% / 110% / 140% / 170% bonus AD) physical damage</span>. <br />

            Detonates in 0.25 seconds if the round hits terrain, Deals 90% damage against monsters.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> SMOKE SCREEN
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(20*mod.atkcdr).toFixed(1)} / 
            {' '}{(18*mod.atkcdr).toFixed(1)} / 
            {' '}{(16*mod.atkcdr).toFixed(1)} / 
            {' '}{(14*mod.atkcdr).toFixed(1)} 
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{75} / 
            {' '}{80} / 
            {' '}{85} / 
            {' '}{90} 
          </h5>

          <h5 className="stat--ap">
            Damage:
          </h5>

          <p className="stat--ap">Pre-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((125)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((190)+(atk.ap * 60 / 100)))} / 
            {' '}{Math.round(((255)+(atk.ap * 60 / 100)))}
          </p>

          <p className="stat--ap">Post-mitigation: 
            {' '}{Math.round(((60)+(atk.ap * 60 / 100)) * (1 - mod.defMagRed))} / 
            {' '}{Math.round(((125)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((190)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))} / 
            {' '}{Math.round(((255)+(atk.ap * 60 / 100))* (1 - mod.defMagRed))}          
          </p>
    
          <p>
          Throws a canister that creates a cloud of smoke for 4 seconds. Enemies within the smoke cannot see outside of it. <br />

          Enemies caught in the initial impact take <span className="stat--ap">60 / 125 / 190 / 255 (+60% AP) magic damage</span> and are <span className="stat--moveSpeed">slowed by 50%</span> for 0.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> QUICKDRAW
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
            {' '}{40} / 
            {' '}{40} / 
            {' '}{40} / 
            {' '}{40} 
          </h5>
    
          <p>
          Dashes a fixed length in a target direction, reloading one shell and granting <b>True Grit</b> for 4 seconds. True Grit grants <span className="stat--armor">6 / 10 / 14 / 18 bonus armor</span>, stacks up to 8 times, and refreshes when damaging non-minions. <br />
          Dashing towards an enemy champion grants 2 stacks of True Grit. Each bullet hit reduces Quickdraw's cooldown by 0.5 seconds.
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> COLLATERAL DAMAGE
          </h4>
    
          <h5>
          Cooldown: 
            {' '}{(75*mod.atkcdr).toFixed(1)} / 
            {' '}{(60*mod.atkcdr).toFixed(1)} / 
            {' '}{(45*mod.atkcdr).toFixed(1)}
          </h5>
            <h5 className="stat--mana">
          Cost: 
            {' '}{100} / 
            {' '}{100} / 
            {' '}{100}
          </h5>

          <h5 className="stat--ad">
            Shell damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((300)+(bonus.attack * 150 / 100)))} / 
            {' '}{Math.round(((450)+(bonus.attack * 150 / 100)))} / 
            {' '}{Math.round(((600)+(bonus.attack * 150 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((300)+(bonus.attack * 150 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((450)+(bonus.attack * 150 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((600)+(bonus.attack * 150 / 100))* (1 - mod.defPhysRed))}
          </p>

          <h5 className="stat--ad">
            Explosion damage:
          </h5>

          <p className="stat--ad">Pre-mitigation: 
            {' '}{Math.round(((200)+(bonus.attack * 120 / 100)))} / 
            {' '}{Math.round(((320)+(bonus.attack * 120 / 100)))} / 
            {' '}{Math.round(((440)+(bonus.attack * 120 / 100)))}
          </p>

          <p className="stat--ad">Post-mitigation: 
            {' '}{Math.round(((200)+(bonus.attack * 120 / 100)) * (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((320)+(bonus.attack * 120 / 100))* (1 - mod.defPhysRed))} / 
            {' '}{Math.round(((440)+(bonus.attack * 120 / 100))* (1 - mod.defPhysRed))}
          </p>
    
          <p>
            Fires an explosive shell that deals <span className="stat--ad">300 / 450 / 600 (+150% AD) physical damage</span>  and knocks Graves back from recoil. The shell explodes upon hitting an enemy champion or reaching the end of its range, dealing <span className="stat--ad">200 / 320 / 440 (+120% AD) physical damage</span> in a cone. <br />

            Enemies damaged by the shell's initial impact do not take damage from the explosive cone.
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