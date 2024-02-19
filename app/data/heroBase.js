const championsData = process.env.HERO_LIST;

const fullHeroList = async() => {
  const res = await fetch(championsData)
 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const fetchedHeroData = await fullHeroList();

const heroBase = fetchedHeroData['heroList'];


export default heroBase;