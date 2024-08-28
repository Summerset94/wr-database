import { useMemo } from "react";

const useTotalStats = (baseStats, bonusStats, champ, championModifier, runesEffects, itemEffectsMemo, currentLevel) => {
  const totalMemo = useMemo(() => {
    const combiner = {
      health: champ.name !== 'Pyke' ? championModifier.health + itemEffectsMemo.health : baseStats.health,
      mana: champ.manaBase ? baseStats.mana + bonusStats.mana : bonusStats.mana,
      armor: baseStats.armor + bonusStats.armor + runesEffects.armor,
      magres: baseStats.magres + bonusStats.magres + runesEffects.magres,
      attack: baseStats.attack + bonusStats.attack,
      ap: bonusStats.ap,

      as: championModifier.as,

      armPen: bonusStats.armPen,
      magPen: bonusStats.magPen,
      flatArmPen: bonusStats.flatArmPen,
      flatMagPen: bonusStats.flatMagPen,
      armorReduction: bonusStats.armorReduction,
      magResReduction: bonusStats.magResReduction,


      moveSpeed: baseStats.moveSpeed + bonusStats.moveSpeed,
      ah: bonusStats.ah,

      critChance: bonusStats.critChance,
      critMultiplier: bonusStats.critMultiplier,
      critDamage: ((baseStats.attack + bonusStats.attack))*(champ.name != 'Ashe' ? baseStats.critMultiplier + bonusStats.critMultiplier : 1),
      
      forceOfNature: itemEffectsMemo.forceOfNature,
      bootsPassive: itemEffectsMemo.bootsPassive,
      terminus: itemEffectsMemo.terminus
    }

    return {
      health: combiner.health,
      mana: combiner.mana,

      armor: combiner.armor,
      magres: combiner.magres,

      attack: combiner.attack,      
      ap: combiner.ap,
      
      as: combiner.as,
      dps: (combiner.attack) * (combiner.as),
      
      dmgReductArm: ((1 - (100/(100 + combiner.armor)))*100),
      dmgReductMag: ((1 - (100/(100 + combiner.magres)))*100),
      effectiveHealthArm: ((combiner.health)/(100/(100 + (combiner.armor)))),
      effectiveHealthMag: ((combiner.health)/(100/(100 + (combiner.magres)))),

      flatArmPen: combiner.flatArmPen,
      flatMagPen: combiner.flatMagPen,
      armPen: combiner.terminus ? Math.min(40/100, combiner.armPen) : combiner.armPen,
      magPen:  combiner.terminus ? Math.min(40/100, combiner.magPen) : combiner.magPen,
      armorReduction: combiner.armorReduction,
      magResReduction: combiner.magResReduction,
      

      moveSpeed: combiner.moveSpeed,
      critChance: combiner.critChance,
      critMultiplier: combiner.critMultiplier,
      critDamage: combiner.critDamage,
      
      ah: combiner.ah,
      cdr: (1-(1/(1+combiner.ah/100))),

      currentLevel: currentLevel,
      
      forceOfNature: combiner.forceOfNature,
      bootsPassive: combiner.bootsPassive
    };
  }, [baseStats, bonusStats]);

  return totalMemo
}

export default useTotalStats