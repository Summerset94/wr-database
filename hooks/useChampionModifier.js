import { useMemo } from "react"

const useChampionModifier = (champ, baseStats, itemBonus, currentLevel, abilitiesBonus, runesEffects) => {
  const championModifier = useMemo(() => {
    let healthMod;
    let attackMod;
    let apMod;
    let asMod;
    let critChanceMod;
    let moveSpeedMod;
    let armPenMod;
    let magPenMod;
    let armorMod;
    let magresMod;
    let critMultiplierMod

  //Armor
  switch (champ.name) {
    case 'Ornn':
      if (currentLevel <= 4) {
        armorMod = (itemBonus.armor * 7 /100)
      } else if (currentLevel >4 && currentLevel <= 8) {
        armorMod = (itemBonus.armor * 12 /100)
      } else if (currentLevel >8 && currentLevel <= 12) {
        armorMod = (itemBonus.armor * 17 /100)
      } else {
        armorMod = (itemBonus.armor * 22 /100)
      };
      break;
    case 'Singed':
      if (abilitiesBonus.singedR == 0) {
        armorMod = 0
      } else if (abilitiesBonus.singedR == 1) {
        armorMod = 30
      } else if (abilitiesBonus.singedR == 2) {
        armorMod = 50
      } else if (abilitiesBonus.singedR == 3) {
        armorMod = 80
      }
      break;
    case 'Jax':
      if (abilitiesBonus.jaxR == 0) {
        armorMod = 0
      } else if (abilitiesBonus.jaxR == 1) {
        armorMod = (30 + itemBonus.attack * 40 /100)
      } else if (abilitiesBonus.jaxR == 2) {
        armorMod = (50 + itemBonus.attack * 40 /100)
      } else if (abilitiesBonus.jaxR == 3) {
        armorMod = (70 + itemBonus.attack * 40 /100)
      }
      break; 

    case 'Thresh':
      armorMod = abilitiesBonus.threshP * 2;
      break;

    case 'Malphite':
      if (abilitiesBonus.malphiteW === 0) {
        armorMod = 0;
      } else {
        armorMod = ((baseStats.armor + itemBonus.armor) * (15 + abilitiesBonus.malphiteW * 5) / 100)
      }      
      break;
    default:
      armorMod = 0;
      break;
  }

  //Magic Resistance
  switch (champ.name) {
    case 'Ornn':
      if (currentLevel <= 4) {
        magresMod = (itemBonus.magres * 7 /100)
      } else if (currentLevel >4 && currentLevel <= 8) {
        magresMod = (itemBonus.magres * 12 /100)
      } else if (currentLevel >8 && currentLevel <= 12) {
        magresMod = (itemBonus.magres * 17 /100)
      } else {
        magresMod = (itemBonus.magres * 22 /100)
      };
      break;
      case 'Singed':
      if (abilitiesBonus.singedR == 0) {
        magresMod = 0
      } else if (abilitiesBonus.singedR == 1) {
        magresMod = 30
      } else if (abilitiesBonus.singedR == 2) {
        magresMod = 50
      } else if (abilitiesBonus.singedR == 3) {
        magresMod = 80
      }
      break;
      case 'Jax':
      if (abilitiesBonus.jaxR == 0) {
        magresMod = 0
      } else if (abilitiesBonus.jaxR == 1) {
        magresMod = (30 + itemBonus.attack * 40 /100) * 0.6
      } else if (abilitiesBonus.jaxR == 2) {
        magresMod = (50 + itemBonus.attack * 40 /100) * 0.6
      } else if (abilitiesBonus.jaxR == 3) {
        magresMod = (70 + itemBonus.attack * 40 /100) * 0.6
      }
      break; 
    default:
      magresMod = 0;
      break;
  }

  //Health
    switch (champ.name) {
      case 'Pyke':
        healthMod = baseStats.health;
        break;
      case 'Ornn':
        if (currentLevel <= 4) {
          healthMod = baseStats.health + ((itemBonus.health + runesEffects.health) * 7 /100)
        } else if (currentLevel >4 && currentLevel <= 8) {
          healthMod = baseStats.health + ((itemBonus.health + runesEffects.health) * 12 /100)
        } else if (currentLevel >8 && currentLevel <= 12) {
          healthMod = baseStats.health + ((itemBonus.health + runesEffects.health) * 17 /100)
        } else {
          healthMod = baseStats.health + ((itemBonus.health + runesEffects.health) * 22 /100)
        };
        break;
      case 'Sion':
        healthMod = baseStats.health + itemBonus.health + runesEffects.health + abilitiesBonus.sionW;
        break;

      case 'Swain':
        healthMod = baseStats.health + itemBonus.health + runesEffects.health +  (abilitiesBonus.swainP * 16);
        break;
      
      case 'Vladimir':
        healthMod = baseStats.health + itemBonus.health + runesEffects.health + Math.round(itemBonus.ap * 120 / 100);
        break;


      default:
        healthMod = baseStats.health + itemBonus.health + runesEffects.health ;
        break;

      
    }  
    
  // Attack
    switch (champ.name) {
      case 'Pyke':
        attackMod = Math.ceil(itemBonus.health / 14);
        break;
      case 'Zeri':
        attackMod = baseStats.as + itemBonus.as + runesEffects.as >= 1.5 ? Math.floor((baseStats.as + itemBonus.as + runesEffects.as - 1.5) * (50 / champ.asBase)) : 0;
        break;
      case 'Jhin':
        attackMod = Math.round((baseStats.attack + itemBonus.attack + runesEffects.attack)*((5+55/14*(currentLevel-1))/100 + ((itemBonus.as+ runesEffects.as)*(14 + (17/14*(currentLevel - 1))))/(champ.asBase*100) + (itemBonus.critChance*(23 + (26/14*(currentLevel - 1))))/100));
        break;
      case 'Hecarim':
        attackMod = Math.round((itemBonus.moveSpeed + runesEffects.moveSpeed) * 12 / 100);
        break;
      case 'Senna':
        attackMod = abilitiesBonus.sennaP;
        break;

      case 'Rengar':
        if (abilitiesBonus.rengarP == 0) {
          attackMod = 0
        } else if (abilitiesBonus.rengarP == 1) {
          attackMod = ((baseStats.attack + itemBonus.attack + runesEffects.attack) * 4/100)
        } else if (abilitiesBonus.rengarP == 2) {
          attackMod = ((baseStats.attack + itemBonus.attack + runesEffects.attack) * 8/100)
        } else if (abilitiesBonus.rengarP == 3) {
          attackMod = ((baseStats.attack + itemBonus.attack + runesEffects.attack) * 12/100)
        } else if (abilitiesBonus.rengarP == 4) {
          attackMod = ((baseStats.attack + itemBonus.attack + runesEffects.attack) * 16/100)
        } else if (abilitiesBonus.rengarP == 5) {
          attackMod = ((baseStats.attack + itemBonus.attack + runesEffects.attack) * 20/100)
        };
        break;
      case 'Aatrox':
        attackMod = (baseStats.attack + itemBonus.attack + runesEffects.attack) * (abilitiesBonus.aatroxUlt > 0 ? (0.2 + (0.1 * abilitiesBonus.aatroxUlt)) : 0);
        break;

      case 'Yasuo':
      case 'Yone':
        attackMod = Math.max(Math.round(((itemBonus.critChance * 2) - 1) * 40), 0) 
        break;

      case 'Tryndamere':
        attackMod = Math.max(Math.round((itemBonus.critChance - 1) * 40), 0) 
        break;
        
      default:
        attackMod = 0;
        break;
    }

  // Ability Power
    switch (champ.name) {
      case 'Singed':
        if (abilitiesBonus.singedR == 0) {
          apMod = 0
        } else if (abilitiesBonus.singedR == 1) {
          apMod = 30
        } else if (abilitiesBonus.singedR == 2) {
          apMod = 50
        } else if (abilitiesBonus.singedR == 3) {
          apMod = 80
        }
        break;

      case 'Thresh':
        apMod = abilitiesBonus.threshP * 2;
        break;

      case 'Veigar':
        apMod = abilitiesBonus.veigarP;
        break;

      case 'Vladimir':
        apMod = Math.round(itemBonus.health * 4.5 / 100);
        break;

      default:
        apMod = 0
        break;
    }

  // Attack Speed
    switch (champ.name) {
      case 'Zeri':
        asMod = (baseStats.as + itemBonus.as + runesEffects.as) < 1.5 ? (baseStats.as + itemBonus.as + runesEffects.as) : 1.5;
        break;
      case 'Jhin':
        asMod = baseStats.as;
        break;
      case 'Senna' :
        asMod = baseStats.as + ((itemBonus.as + runesEffects.as) / 5);
        break;

      case 'Twisted Fate':
        if (abilitiesBonus.twistedFateE == 0) {
          asMod = baseStats.as + itemBonus.as + runesEffects.as;
        } else if (abilitiesBonus.twistedFateE == 1) {
          asMod = baseStats.as + itemBonus.as +  (champ.asBase * 15 / 100)+ runesEffects.as;
        } else if (abilitiesBonus.twistedFateE == 2) {
          asMod = baseStats.as + itemBonus.as + (champ.asBase * 20 / 100)+ runesEffects.as;
        } else if (abilitiesBonus.twistedFateE == 3) {
          asMod = baseStats.as + itemBonus.as + (champ.asBase * 25 / 100)+ runesEffects.as;
        } else if (abilitiesBonus.twistedFateE == 4) {
          asMod = baseStats.as + itemBonus.as + (champ.asBase * 30 / 100)+ runesEffects.as;
        };
        break;

      default:
        asMod = baseStats.as + itemBonus.as + runesEffects.as;
        break;
    }

  //Crit Chance
  switch (champ.name) {
    case 'Yone':
      critChanceMod = Math.max(itemBonus.critChance * 2 || 1);
      break;
    case 'Yasuo':
      critChanceMod = Math.max(itemBonus.critChance * 2 || 1);
      break;

    case 'Senna':
      critChanceMod = (itemBonus.critChance + (0.15 * Math.floor (abilitiesBonus.sennaP/20)));
      break;
    default:
      critChanceMod = itemBonus.critChance;
      break;
  }

  //Crit Multiplier
  switch (champ.name) {
    case 'Ashe':
      critMultiplierMod = 1;
      break;
    case 'Senna':
      critMultiplierMod = ((baseStats.critMultiplier + itemBonus.critMultiplier))
      break;
    case 'Jhin':
      critMultiplierMod = (150 / 100) + itemBonus.critMultiplier;
      break;
    case 'Yasuo':
    case 'Yone':
      critMultiplierMod = (165 / 100) + itemBonus.critMultiplier;
      break;
    default: 
    critMultiplierMod = baseStats.critMultiplier + itemBonus.critMultiplier;
      break;
  }
  
  //Movement Speed
  switch (champ.name) {
    case 'Janna':
      moveSpeedMod = (baseStats.moveSpeed + itemBonus.moveSpeed + runesEffects.moveSpeed) * 5 / 100;
      break;
    case 'Singed':
      if (abilitiesBonus.singedR === 0) {
        moveSpeedMod = 0
      } else if (abilitiesBonus.singedR === 1) {
        moveSpeedMod = 30
      } else if (abilitiesBonus.singedR === 2) {
        moveSpeedMod = 50
      } else if (abilitiesBonus.singedR === 3) {
        moveSpeedMod = 80
      }
      break;
    
    case 'Aatrox':      
      moveSpeedMod = (baseStats.moveSpeed + itemBonus.moveSpeed + runesEffects.moveSpeed) * (abilitiesBonus.aatroxUlt > 0 ? 0.4 + (0.2 * abilitiesBonus.aatroxUlt) : 0);
      break;
    default:
      moveSpeedMod = 0;
      break;
  }

  //Armor Penetration
  switch (champ.name) {
    case 'Nilah':
      armPenMod = (itemBonus.critChance * 35 / 100);
      break;
    case 'Pantheon':
      if (currentLevel < 5) {
        armPenMod = 0
      } else if (currentLevel >= 5 && currentLevel < 9) {
        armPenMod = 10/100
      } else if (currentLevel >= 9 && currentLevel < 13) {
        armPenMod = 20/100
      } else {
        armPenMod = 30/100
      }
      break;
    case 'Darius':
      if (abilitiesBonus.dariusE == 0) {
        armPenMod = 0
      } else if (abilitiesBonus.dariusE == 1) {
        armPenMod = 15/100
      } else if (abilitiesBonus.dariusE == 2) {
        armPenMod = 22/100
      } else if (abilitiesBonus.dariusE == 3) {
        armPenMod = 29/100
      } else if (abilitiesBonus.dariusE == 4) {
        armPenMod = 36/100
      }
      break;
    default:
      armPenMod = 0;
      break;

  }

  //Magic Penetration
  switch (champ.name) {
    case 'Mordekaiser':
      magPenMod = 1/100 + Math.floor((currentLevel-1)/4) * 2/100
      break;
    default:
      magPenMod = 0;
      break;
  }
  
    return {
      health: healthMod,
      attack: attackMod,
      ap: apMod,
      as: asMod,
      critChance: critChanceMod,
      moveSpeed: moveSpeedMod,
      armPen : armPenMod,
      magPen: magPenMod,
      armor: armorMod,
      magres: magresMod,
      critMultiplier: critMultiplierMod,
    };
  }, [champ, baseStats, itemBonus, currentLevel, abilitiesBonus, runesEffects]);

  return championModifier
}

export default useChampionModifier;