import { useMemo } from "react";

const useItemPassives = (itemEffects, baseStats, itemBonus, championModifier, currentLevel, runesEffects) => {
  const itemEffectsMemo = useMemo(() =>{
    
  const steraks = itemEffects.steraks ? baseStats.attack / 2 : 0;
  const rabadon = itemEffects.rabadon ? ((itemBonus.ap + championModifier.ap) * (20 + (35/14 * (currentLevel - 1))) / 100) : 0;
  const twinguardAR = itemEffects.twinguard ? ((baseStats.armor + itemBonus.armor + championModifier.armor) * 35 / 100) : 0;
  const twinguardMR = itemEffects.twinguard ? ((baseStats.magres + itemBonus.magres + championModifier.magres) * 35 / 100) : 0;
  const seraphs = itemEffects.seraphs ? ((baseStats.mana? baseStats.mana + itemBonus.mana + runesEffects.mana : itemBonus.mana + runesEffects.mana) * 3/100) : 0;
  const muramana = itemEffects.muramana ? ((baseStats.mana? baseStats.mana + itemBonus.mana  + runesEffects.mana : itemBonus.mana  + runesEffects.mana) * 1.5/100) : 0;
  const fimbulwinter = itemEffects.fimbulwinter ? ((baseStats.mana? baseStats.mana + itemBonus.mana  + runesEffects.mana : itemBonus.mana  + runesEffects.mana) * 8/100) : 0;
  const lastWhisper = itemEffects.lastWhisper ? ((15 + Number(currentLevel))/100) : 0;
  const heartsteel = itemEffects.heartsteel;
  const titanicHydra = itemEffects.titanicHydra ? (15 + ((championModifier.health + itemEffects.heartsteel - baseStats.health) * 25 /1000)) : 0;


  const forceOfNature = itemEffects.forceOfNature;
  const bootsPassive = itemEffects.bootsPassive;


  
  return {
    attack: steraks + muramana + titanicHydra,
    ap: rabadon + seraphs,
    armor: twinguardAR,
    magres: twinguardMR,
    health: fimbulwinter + heartsteel,
    armPen: lastWhisper,
    forceOfNature: forceOfNature,
    bootsPassive: bootsPassive

  }
}, [itemEffects, baseStats, itemBonus, championModifier])

  return itemEffectsMemo
}

export default useItemPassives;