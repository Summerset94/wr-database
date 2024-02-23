const championsData = process.env.RANK_LIST;

const fullWinRateList = async() => {
  const res = await fetch(championsData, {cache: "no-store"})
 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const fetchedHeroData = await fullWinRateList();
// response comes in a format of res.data[rank][line]
// 1 dia, 2 masters, 3 challenger, 4 Legendary Que
// 2 top, 5 jungle, 1 mid, 3 bot 4 support

const formArray = (object) => {
  const array = Object.entries(object).map(([key, value]) => ({
    key,
    value,
  }));

  return array
}

const winRateObject =  {
  'elohell': {
    'top': formArray(fetchedHeroData.data[0][2]),
    'jungle': formArray(fetchedHeroData.data[0][5]),
    'mid': formArray(fetchedHeroData.data[0][1]),
    'bot': formArray(fetchedHeroData.data[0][3]),
    'support': formArray(fetchedHeroData.data[0][4]),
  },

  'diamond': {
    'top': formArray(fetchedHeroData.data[1][2]),
    'jungle': formArray(fetchedHeroData.data[1][5]),
    'mid': formArray(fetchedHeroData.data[1][1]),
    'bot': formArray(fetchedHeroData.data[1][3]),
    'support': formArray(fetchedHeroData.data[1][4]),
  },

  'masters': {
    'top': formArray(fetchedHeroData.data[2][2]),
    'jungle': formArray(fetchedHeroData.data[2][5]),
    'mid': formArray(fetchedHeroData.data[2][1]),
    'bot': formArray(fetchedHeroData.data[2][3]),
    'support': formArray(fetchedHeroData.data[2][4]),
  },

  'challenger': {
    'top': formArray(fetchedHeroData.data[3][2]),
    'jungle': formArray(fetchedHeroData.data[3][5]),
    'mid': formArray(fetchedHeroData.data[3][1]),
    'bot': formArray(fetchedHeroData.data[3][3]),
    'support': formArray(fetchedHeroData.data[3][4]),
  },

  'legendary': {
    'top': formArray(fetchedHeroData.data[4][2]),
    'jungle': formArray(fetchedHeroData.data[4][5]),
    'mid': formArray(fetchedHeroData.data[4][1]),
    'bot': formArray(fetchedHeroData.data[4][3]),
    'support': formArray(fetchedHeroData.data[4][4]),
  }
};

const winRateData = JSON.stringify(winRateObject);

export default winRateData;