import champions from '../app/data/Champions';

const useTierRanking = (initialData, lane) => {
  const processed = JSON.parse(initialData);
  const data = processed.flatMap(object => ({ ...object.value }));
  const quantity = Number(data.length - 1);

  const calculateMean = (metric = 'win_rate') => {
    let sumOfAll = 0;
    data.forEach(record => (sumOfAll += parseInt(record[metric])));
    return sumOfAll / quantity;
  };

  const means = {
    winRate: calculateMean('win_rate'),
    pickRate: calculateMean('appear_rate'),
    banRate: calculateMean('forbid_rate'),
  };

  const calculateStandardDeviation = (metric = 'win_rate', mean = means.winRate) => {
    const squaredDifferences = data.map(record => Math.pow(record[metric] - mean, 2));
    const averageSquaredDifferences = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / quantity;
    return Math.sqrt(averageSquaredDifferences);
  };

  const stdDeviations = {
    winRate: calculateStandardDeviation('win_rate', means.winRate),
    pickRate: calculateStandardDeviation('appear_rate', means.winRate),
    banRate: calculateStandardDeviation('forbid_rate', means.winRate),
  };

  const calculateZScore = (original, mean, deviation) => (original - mean) / deviation;

  data.forEach(record => {
    record.compositeScore =
      calculateZScore(record.win_rate, means.winRate, stdDeviations.winRate) +
      calculateZScore(record.appear_rate, means.pickRate, stdDeviations.pickRate) +
      calculateZScore(record.forbid_rate, means.banRate, stdDeviations.banRate);
  });

  const compositeDivider = data.reduce((sum, record) => sum + record.compositeScore, 0) / quantity / 5;

  const getTier = compositeScore => {
    if (compositeScore > compositeDivider * 4 / 5) {
      return 'S+';
    } else if (compositeScore > compositeDivider * 3 / 5 && compositeScore <= compositeDivider * 4 / 5) {
      return 'S';
    } else if (compositeScore > compositeDivider * 2 / 5 && compositeScore <= compositeDivider * 3 / 5) {
      return 'A';
    } else if (compositeScore > compositeDivider * 1 / 5 && compositeScore <= compositeDivider * 2 / 5) {
      return 'B';
    } else if (compositeScore <= compositeDivider * 1 / 5) {
      return 'C';
    } else {
      return 'Unknown';
    }
  };

  data.forEach(record => {
    record.tier = getTier(record.compositeScore);
    record.lane = lane;
    record.champion = champions.find(champ => champ.heroId === parseInt(record.hero_id));
  });

  return data;
};

export default useTierRanking;
