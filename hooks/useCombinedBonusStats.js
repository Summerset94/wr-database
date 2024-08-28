import { useMemo } from "react"

const useCombinedBonusStats = (itemBonus, championModifier, currentLevel, itemEffectsMemo, runesEffects, champ, abilitiesBonus, baseStats) => {
  const bonusStats = useMemo(() => {
    const combiner = {
      health: champ.name !== 'Pyke' ? itemBonus.health + itemEffectsMemo.health : 0,
      mana: itemBonus.mana + runesEffects.mana,
      armor: itemBonus.armor + championModifier.armor + itemEffectsMemo.armor,
      magres: itemBonus.magres + championModifier.magres + itemEffectsMemo.magres,
      attack: itemBonus.attack + championModifier.attack + itemEffectsMemo.attack + runesEffects.attack,
      ap: itemBonus.ap + championModifier.ap + itemEffectsMemo.ap + runesEffects.ap + (abilitiesBonus.syndraP ? (itemBonus.ap + runesEffects.ap * 0.12) : 0),
  
      as: Math.max((championModifier.as - baseStats.as), 0),
  
      armPen: itemBonus.armPen + itemEffectsMemo.armPen + championModifier.armPen,
      magPen: itemBonus.magPen + championModifier.magPen,
      flatArmPen: itemBonus.flatArmPen + runesEffects.flatArmPen,
      flatMagPen: itemBonus.flatMagPen + runesEffects.flatMagPen,
      armorReduction: itemBonus.armorReduction,
      magResReduction: itemBonus.magResReduction,
  
  
      moveSpeed: itemBonus.moveSpeed + championModifier.moveSpeed + runesEffects.moveSpeed,
      ah: itemBonus.ah + runesEffects.ah,
  
      critChance: championModifier.critChance,
      critMultiplier: championModifier.critMultiplier,
      
    }
  
    return {
      health: combiner.health,
      mana: combiner.mana,
  
      armor: combiner.armor,
      magres: combiner.magres,
  
      attack: combiner.attack,      
      ap: combiner.ap,
      
      as: combiner.as,
      
  
      flatArmPen: combiner.flatArmPen,
      flatMagPen: combiner.flatMagPen,
      armPen: combiner.armPen,
      magPen: combiner.magPen,
      armorReduction: combiner.armorReduction,
      magResReduction: combiner.magResReduction,
      
  
      moveSpeed: combiner.moveSpeed,
      critChance: combiner.critChance,
      critMultiplier: combiner.critMultiplier,
      
      
      ah: combiner.ah,
      
      
      forceOfNature: combiner.forceOfNature,
      bootsPassive: combiner.bootsPassive
    }
  }, [itemBonus, championModifier, currentLevel, itemEffectsMemo, runesEffects]);

  return bonusStats
}

export default useCombinedBonusStats;