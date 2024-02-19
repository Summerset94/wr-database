import React from 'react'
import { useState, useEffect } from 'react'
import { useStats } from '../hooks/useStats';
import {useRouter, useSearchParams} from 'next/navigation';
import useStorage from '../hooks/UseStorage';
import champions from '../app/data/Champions';
import {champTemplate, itemBonusTemplate, runesEffectsBonusTemplate, championsAbilitiesEffectsTemplate, itemEffectsTemplate} from '../app/data/ChampTemplates';
import useBaseModifier from '../hooks/useBaseModifier';
import useStatsGrowth from '../hooks/useStatsGrowth';
import useChampionModifier from '../hooks/useChampionModifier';
import useItemPassives from '../hooks/useItemPassives';
import useCombinedBonusStats from '../hooks/useCombinedBonusStats';
import useTotalStats from '../hooks/useTotalStats';
import useStatsComparison from '../hooks/useStatsComparison';
import VisitCard from '../ui/VisitCard';
import BaseStats from '../ui/BaseStats';
import DinamicStats from '../ui/DinamicStats';
import DerivativeStats from '../ui/DerivativeStats';

const ChampionPage = ({index}) => {
  const {getItem, setItem} = useStorage();
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const activeParam = index === 0 ? 'champion1' : 'champion2'

  
  const [activeChampion, setActiveChampion] = useState(champTemplate);

  useEffect(() => {
    const champion = champions.find(champion => champion.heroId === parseInt(getItem(index === 0 ? 'champion1' : 'champion2')));
    
    if (champion) {
      setActiveChampion(oldState => champion);
    } else {
      // Handle the case where no champion is found
      console.error('Champion not found for the given ID:', getItem(index === 0 ? 'champion1' : 'champion2'));
    }
  }, []);



  // active champion selector
  const handleChampSelect = (event) => {
    event.preventDefault();
    
    const selectedChampion = champions.find(champion => champion.name === event.target.value);

    // Check if selectedChampion is defined
    if (selectedChampion) {
        const id = selectedChampion.heroId.toString();
        setItem(activeParam, id);

        router.push(index === 0 ? `/calculator?champ1=${id}&champ2=${getItem('champion2')}`: `/calculator?champ1=${getItem('champion1')}&champ2=${id}`)

        setActiveChampion(oldState => selectedChampion);

        console.log('1:', getItem('champion1'), '2:', getItem('champion2'))
    } else {
        // Handle the case where no champion is found
        console.error('Champion not found for the given name:', event.target.value);
    }
}

  // level slider 
  const [currentLevel, setCurrentLevel] = useState(1);
  function levelSlider(n) {
    n.preventDefault();
    const newLevel = n.target.value;
    setCurrentLevel(newLevel);
  }
 
  // a bit of legacy spaghetti 
  const champion = activeChampion;  
  const champ = champion;

  // sorting based on various champions stats
const [sortedList, setSortedList] = useState(champions);

const sortingHat = (type = 'alphabetical') => {
  let comparisonStat = 0;

  switch (type) {
    case 'baseHealth':
      champions.forEach((object) => (object.toCompare = object.healthBase));
      break;
    case 'totalHealth':
      champions.forEach(
        (object) => (object.toCompare = object.healthBase + object.healthScale * 14)
      );
      break;
    case 'baseAttack':
      champions.forEach((object) => (object.toCompare = object.attackBase));
      break;
    case 'totalAttack':
      champions.forEach(
        (object) => (object.toCompare = object.attackBase + object.attackScale * 14)
      );
      break;
    case 'baseArmor':
      champions.forEach((object) => (object.toCompare = object.armorBase));
      break;
    case 'totalArmor':
      champions.forEach(
        (object) => (object.toCompare = object.armorBase + object.armorScale * 14)
      );
      break;
    case 'baseMagres':
      champions.forEach((object) => (object.toCompare = object.magresBase));
      break;
    case 'totalMagres':
      champions.forEach(
        (object) => (object.toCompare = object.magresBase + object.magresScale * 14)
      );
      break;

      case 'baseAS':
        champions.forEach((object) => (object.toCompare = object.asBase));
        break;
      case 'totalAS':
        champions.forEach(
          (object) => (object.toCompare = object.asBase + object.asBaseBonus +  object.asScale * 14)
        );
        break;
    case 'alphabetical':
    default:
      champions.forEach((object) => (object.toCompare = object.name));
  }

  const sortedChampions = [...champions].sort((a, b) => b.toCompare - a.toCompare);

  setSortedList(sortedChampions);
};

// modifier for critical Chance 
const baseModifier = useBaseModifier(champ, currentLevel);

// hook that encapsulates the champion stats growth through leveling
const baseStats = useStatsGrowth(champ, currentLevel, baseModifier);

// bonus stats from items tracker
const [itemBonus, setItemBonus] = useState(itemBonusTemplate, []);

// bonus stats from runes tracker
const [runesEffects, setRunesEffects] = useState(runesEffectsBonusTemplate)

// champions abilities effects tracker
const [abilitiesBonus, setAbilitiesBonus] = useState(championsAbilitiesEffectsTemplate);

// hook for unique champions stats modifiers / various abilities bonuses
const championModifier = useChampionModifier(champ, baseStats, itemBonus, currentLevel, abilitiesBonus, runesEffects);

// Some unique items bonuses tracker
const [itemEffects, setItemEffects] = useState(itemEffectsTemplate);


// bonuses from various item effect passive effects
const itemEffectsMemo = useItemPassives(itemEffects, baseStats, itemBonus, championModifier, currentLevel);

// total combined bonus stats
const bonusStats = useCombinedBonusStats(itemBonus, championModifier, currentLevel, itemEffectsMemo, runesEffects, champ, abilitiesBonus, baseStats);

// total stats
const totalMemo = useTotalStats(baseStats, bonusStats, champ, championModifier, runesEffects, itemEffectsMemo);

// state setters for bonuses
const updateRunesEffects = (updatedValues) => {
  setRunesEffects((prevStats) => ({...prevStats, ...updatedValues}))
};

const updateAbilitiesBonus = function(updatedValues) {
  setAbilitiesBonus((prevStats) => ({...prevStats, ...updatedValues}))
};

function updateitemBonus(updatedValues) {
  setItemBonus((prevStats) => ({...prevStats, ...updatedValues}))
};

function updateItemEffects(updatedValues) {
  setItemEffects((prevStats) => ({ ...prevStats, ...updatedValues }));
};

// passing total stats into custom context hook whenever our total stats changes

const { totalStats, setTotalStats } = useStats();

useEffect(() => {
  setTotalStats(prevTotalStats => {
    const newTotalStats = [...prevTotalStats];
    newTotalStats[index] = totalMemo;
    return newTotalStats;
  });
}, [totalMemo]);

// this hook is for using the stats compared against enemies stats
const atk = totalStats[index];
const def = totalStats[index === 0 ? 1 : 0];

const statsComparison = useStatsComparison(atk, def);


  return (
    <>
    <div>
      <div className='champSelector'>
        <div><h5>Sort by:</h5>
        <select onChange={(e) => {sortingHat(e.target.value)}}>
          <option value="alphabetical">Alpabetical (default)</option>
          <option value="baseHealth">Health base</option>
          <option value="totalHealth">Health natural at 15</option>
          <option value="baseAttack">Attack base</option>
          <option value="totalAttack">Attack natural at 15</option>
          <option value="baseArmor">Armor base</option>
          <option value="totalArmor">Armor natural at 15</option>
          <option value="baseMagres">Magic Resistance base</option>
          <option value="totalMagres">Magic Resistance natural at 15</option>
          <option value="baseAS">Attack speed base</option>
          <option value="totalAS">Attack Speed natural at 15</option>
        </select></div>
        
        <div><h5>Select Champion: </h5>
      <select onChange={handleChampSelect}>
        <option value={champTemplate}>Select a champion</option>
        {sortedList.map((champion) => (
          <option key={champion.id} value={champion.name}>
            {champion.name}
          </option>
        ))}
      </select></div>
      
      </div>

      <div className='levelSlider'>
        <p>Select level: {currentLevel}</p>

        <input
          className='slider'
          type="range"
          min="1"
          max="15"
          step="1"
          value={currentLevel}
          onChange={levelSlider}
        />        
      </div>
    </div>

    <VisitCard
      champ={champ}
    />

    <BaseStats
      champion={champ} />

    <DinamicStats
      currentLevel={currentLevel}
      baseStats={baseStats}
      bonusStats={bonusStats}
      totalMemo={totalMemo}
    />

    <DerivativeStats
      totalMemo={totalMemo}
      formula={statsComparison}
    />

    </> 
  )
}

export default ChampionPage