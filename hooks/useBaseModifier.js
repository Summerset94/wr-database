import { useMemo } from 'react';

const useBaseModifier = (champ, currentLevel) => {
  const baseModifier = useMemo(() => {
    let critMultiplier;

    switch (champ.name) {
      case 'Yone':
      case 'Yasuo':
        critMultiplier = 1.65;
        break;
      case 'Senna':
        critMultiplier = 1.5;
        break;
      case 'Jhin':
        critMultiplier = 1.5;
        break;
      default:
        critMultiplier = 1.75;
    };

    return {
      critMultiplier,
    };
  }, [champ, currentLevel]);

  return baseModifier;
};

export default useBaseModifier;
