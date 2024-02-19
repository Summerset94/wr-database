import { useMemo } from 'react';

const useStatsGrowth = (champ, currentLevel, baseModifier) => {

  // Describes how stats grow through levels
  const statGrowth = function (mod) {
    if (currentLevel === 1) {
      return 0;
    } else if (currentLevel === 2) {
      return mod * 75 / 100;
    } else {
      let totalMod = 0;

      for (let level = 2; level <= currentLevel; level++) {
        totalMod += mod * (75 / 100 + (50 / 100 / 13) * (level - 2));
      }

      return totalMod;
    }
  };

  const baseStats = useMemo(() => {
    return {
      health: Math.ceil(champ.healthBase + statGrowth(champ.healthScale)),
      mana: champ.manaBase ? Math.ceil(champ.manaBase + statGrowth(champ.manaScale)) : 0,
      armor: Math.ceil(champ.armorBase + statGrowth(champ.armorScale)),
      magres: Math.ceil(champ.magresBase + statGrowth(champ.magresScale)),
      attack: Math.ceil(champ.attackBase + statGrowth(champ.attackScale)),
      ap: 0,
      as: champ.asBase + champ.asBaseBonus + (champ.asScale * (currentLevel - 1)),
      asBase: champ.asBase,
      moveSpeed: champ.moveSpeed,
      critMultiplier: baseModifier.critMultiplier,
    };
  }, [currentLevel, champ, baseModifier]);

  return baseStats;
};

export default useStatsGrowth;
