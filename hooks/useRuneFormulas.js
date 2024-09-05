import { useMemo } from "react";

const useRuneFormulas = (atk, bonus, mod, currentLevel, runesEffects, turretArmor, champ, def) => {

  const runeFormulas = useMemo(()=>{
    const damagetype = bonus.attack < atk.ap * 0.6 ? 'magical' : 'physical';
  
    const electrocute = {
      damage: {
        base: 40,
        growth: 154,
        modifier: bonus.attack * 40 / 100 + atk.ap * 25 / 100
      },
  
      cooldown: {
        base: 20,
        growth: -7
      }
    };

    const PTA = {
      damage: {
        base: 40,
        growth: 10
      },

      trueDamage: {
        base: 8,
        growth: 16/14 * (currentLevel - 1),
      }
    };

    const arcaneComet = {
      damage: {
        base: 30,
        growth: 5,
        modifier: bonus.attack * 35 / 100 + atk.ap * 20 / 100
      },
  
      cooldown: {
        base: 16,
        growth: -8
      }
    };
  
    const aery = {
      damage: {
        base: 10,
        growth: 50,
        modifier: bonus.attack * 20 / 100 + atk.ap * 10 / 100
      },
  
      shield: {
        base: 20,
        growth: 100,
        modifier: bonus.attack * 40 / 100 + atk.ap * 20 / 100
      }
    };
  
    const phaseRush = {
      movespeed: {
        melee: {
          base: 0.4,
          growth: 0.2
        },
  
        ranged: {
          base: 0.3,
          growth: 0.2
        }
      }
    };
  
    const conqueror = {
      ad: {
        base: 2,
        growth: 4
      },
  
      ap: {
        base: 3,
        growth: 6
      }
    };
  
    const fleetFootwork = {
      healing: {
        base: 15,
        growth: 70,
        modifier: (bonus.attack * 30/100) + (atk.ap*30/100)
      }
    };
  
    const krakenSlayer = {
      damage: {
        base: 30,
        growth: 65,
        modifier: (bonus.attack * 40 / 100) + (atk.ap * 20 / 100)
      }
    };
  
    const aftershock = {
      damage: {
        base: 12,
        growth: 98,
        modifier: (atk.health * 3 / 100)
      },
      defence: {
        armor: 35 + (bonus.armor * 60 / 100),
        magres: 35 + (bonus.magres * 60 / 100)
      }
    };
  
    const lethalTempo = {
      base: runesEffects.keystones.tempoType === 'ranged' ? 7 : 10,
      growth: 8,
      bonus: 0,
      stacks: runesEffects.keystones.tempo
    }
  
    const shieldBash = {
      damage: {
        base: 15,
        growth: 35,
        modifier: (bonus.attack * 15 / 100) + (atk.ap * 10 / 100)
      }
    }
  
    const empoweredAA = {
      base: 35,
      growth: 15,
    }

    const psychicWave = {
      damage: {
        base: 22,
        growth: 8,
        modifier: bonus.attack * 15 / 100 + atk.ap * 7.5 / 100
      },
    }
  
    const GSformula = function(stacks, firstValue, incrementation) {
      return (stacks / 2) * (2 * firstValue + (stacks - 1) * incrementation);
    };  
  
    const colossus = {
      base: 25,
      growth: 20,
      modifier: (atk.health * 1 / 100)
    }
  
    const nullOrb = {
      base: 60,
      growth: 130
    }
  
    
    
    return { 
  
      damagetype: {
      type: damagetype,
      description: damagetype === 'physical' ? <span className='stat--ad'>Physical</span> : <span className='stat--ap'>Magical</span>
      },
  
      electrocute: {
  
        cooldown: (electrocute.cooldown.base + electrocute.cooldown.growth/14 * (currentLevel-1)),
        damage: {
          raw: (electrocute.damage.base + electrocute.damage.growth/14*(currentLevel-1) + electrocute.damage.modifier),
          mitigated: ((electrocute.damage.base + electrocute.damage.growth/14*(currentLevel-1) + electrocute.damage.modifier) * (1 - (damagetype === 'physical' ? mod.defPhysRed : mod.defMagRed)))
        }
      },      

      arcaneComet: {
  
        cooldown: (arcaneComet.cooldown.base + arcaneComet.cooldown.growth/14 * (currentLevel-1)),
        damage: {
          raw: (arcaneComet.damage.base + (arcaneComet.damage.growth*(currentLevel-1)) + arcaneComet.damage.modifier),
          mitigated: ((arcaneComet.damage.base +( arcaneComet.damage.growth*(currentLevel-1)) + arcaneComet.damage.modifier) * (1 - (damagetype === 'physical' ? mod.defPhysRed : mod.defMagRed)))
        }
      },

      psychicWave: {

        damage: {
          raw: (psychicWave.damage.base + (psychicWave.damage.growth*(currentLevel-1)) + psychicWave.damage.modifier),
          mitigated: ((psychicWave.damage.base +( psychicWave.damage.growth*(currentLevel-1)) + psychicWave.damage.modifier) * (1 - (damagetype === 'physical' ? mod.defPhysRed : mod.defMagRed)))
        }
      },

      PTA: { 
        
        damage: {
          raw: (PTA.damage.base + (PTA.damage.growth *(currentLevel-1) )),
          mitigated: ((PTA.damage.base + (PTA.damage.growth *(currentLevel-1) )) * (1 - (damagetype === 'physical' ? mod.defPhysRed : mod.defMagRed)))
      },

        trueDamage: PTA.trueDamage.base + PTA.trueDamage.growth/14*(currentLevel-1)
      },
  
      aery: {
        damage: {
          raw: (aery.damage.base + aery.damage.growth/14*(currentLevel-1) + aery.damage.modifier),
          mitigated: ((aery.damage.base + aery.damage.growth/14*(currentLevel-1) + aery.damage.modifier) * (1 - (damagetype === 'physical' ? mod.defPhysRed : mod.defMagRed)))
        },
        shield: (aery.shield.base + aery.shield.growth/14*(currentLevel-1) + aery.shield.modifier)
      },
  
      phaseRush:{
        melee: (atk.moveSpeed * (phaseRush.movespeed.melee.base + phaseRush.movespeed.melee.growth/14 * (currentLevel-1))),
        ranged: (atk.moveSpeed * (phaseRush.movespeed.ranged.base + phaseRush.movespeed.ranged.growth/14 * (currentLevel-1))),
        cdr: (1-(1/(1+(atk.ah + 25)/100)))
      },
  
      conqueror:{
        bonus: damagetype === 'physical' ? 
         ((conqueror.ad.base + conqueror.ad.growth/14*(currentLevel-1))*runesEffects.keystones.conqueror) :
         ((conqueror.ap.base + conqueror.ap.growth/14*(currentLevel-1))*runesEffects.keystones.conqueror),
        stacks: runesEffects.keystones.conqueror
      },
  
      fleetFootwork: {
        healing: {
          champion: fleetFootwork.healing.base + (fleetFootwork.healing.growth/14*(currentLevel-1)) + (fleetFootwork.healing.modifier),
    
          melee: (fleetFootwork.healing.base + (fleetFootwork.healing.growth/14*(currentLevel-1)) + (fleetFootwork.healing.modifier)) * (60/100),
    
          ranged: (fleetFootwork.healing.base + (fleetFootwork.healing.growth/14*(currentLevel-1)) + (fleetFootwork.healing.modifier)) * (20/100)
         }
      },
  
      krakenSlayer: {
        damage: krakenSlayer.damage.base + (krakenSlayer.damage.growth/14*(currentLevel-1)) + krakenSlayer.damage.modifier
      },
  
      grasp: {
        damage: {
          raw: Number((atk.health * 3 / 100) + (bonus.attack * 20 / 100) + (atk.ap * 10 / 100)),
          mitigated: ((atk.health * 3 / 100) + (bonus.attack * 20 / 100) + (atk.ap * 10 / 100)) * (1 - mod.defMagRed),
        }
      },
  
      aftershock: {
        damage: {
          raw: (aftershock.damage.base + aftershock.damage.growth/14*(currentLevel-1) + aftershock.damage.modifier),
          mitigated: (aftershock.damage.base + aftershock.damage.growth/14*(currentLevel-1) + aftershock.damage.modifier) * (1 - mod.defMagRed)
        },
        defence: {
          armor: aftershock.defence.armor,
          magres: aftershock.defence.magres
        }
      },
  
      lethalTempo: {
        as: champ.asBase * ((lethalTempo.base + lethalTempo.growth/14*(currentLevel-1))*lethalTempo.stacks + lethalTempo.bonus)/100
      },
  
      shieldBash: {
        damage: {
          raw: shieldBash.damage.base + shieldBash.damage.growth/14 * (currentLevel-1) + shieldBash.damage.modifier,
          mitigated: (shieldBash.damage.base + shieldBash.damage.growth/14 * (currentLevel-1) + shieldBash.damage.modifier) * (1 - (damagetype === 'physical' ? mod.defPhysRed : def.defMagRed))
        }
      },
  
      empoweredAA: {
        raw: empoweredAA.base + empoweredAA.growth/14*(currentLevel -1),
        mitigated: empoweredAA.base + empoweredAA.growth/14*(currentLevel -1) * (1 - (damagetype === 'physical' ? mod.defPhysRed : def.defMagRed)),
      },
  
      eyeballCollector: {
        bonus: (runesEffects.path.eyeballCollector + (runesEffects.path.eyeballCollector === 10 ? 10 : 0)) * (damagetype === 'magical' ? 2 : 1),
        type: damagetype === 'magical' ? <span className='stat--ap'>Ability Power</span> : <span className='stat--ad'>Attack Damage</span>
      },
  
      zombieWard: {
        bonus: (runesEffects.path.zombieWard * (damagetype === 'magical' ? 6 : 3) + (runesEffects.path.zombieWard === 5 ? damagetype === 'magical' ? 20 : 10 : 0)),
        type: damagetype === 'magical' ? <span className='stat--ap'>Ability Power</span> : <span className='stat--ad'>Attack Damage</span>
      },
  
      gatheringStorm: {
        type: damagetype === "physical" ? <span className='stat--ad'>Attack Damage</span> : <span className='stat--ap'>Ability Power</span>,
        bonus: damagetype === 'physical' ? GSformula(runesEffects.path.gatheringStorm, 2 , 1) : GSformula(runesEffects.path.gatheringStorm, 4 , 2)
      },
  
      legendAlacrity: {
        as: runesEffects.path.legendAlacrity > 0  ? (champ.asBase * (runesEffects.path.legendAlacrity + 3))/100 : 0,      
      },
  
      fontOfLife: {
        healAlly: (atk.health * 3 / 100) + (atk.ap * 15 / 100),
        healSelf: (atk.health * 1 / 100) + (atk.ap * 5 / 100)
      },
  
      colossus: {
        shield: colossus.base + colossus.growth/14*(currentLevel-1) + colossus.modifier
      },
  
      nullOrb: {
        shield: nullOrb.base + nullOrb.growth/14 * (currentLevel -1)
      },
  
      perseverance: 16 + 14/14*(currentLevel-1),
  
      transcendence: currentLevel < 6 ? 6 : 12,
  
      demolish: {
        damage: (200 + atk.health * (30 / 100)) * (1 - turretArmor)
      },
  
    }
  }, [mod, currentLevel, runesEffects, champ, turretArmor])

  return runeFormulas;
}

export default useRuneFormulas;