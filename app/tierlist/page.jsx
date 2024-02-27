
import React from 'react';
import winRateData from '../data/winRateData';
import champions from '../data/Champions';
import Image from 'next/image';
import '../styles/tierlist.css'

const page = () => {
// output on the page
  let outputRender = '';

  //  data from winrates
  const winRatesBase = JSON.parse(winRateData);

  const lanes = {
    2: "Baron lane",
    5: "Jungle",
    1: "Middle",
    3: "Duo lane (carry)",
    4: "Support",
  };
  
  const processedList = (rank = 'diamond') => {
    const extractedRank = { ...winRatesBase[rank] }; 
    

    const laneIcons = {
      2: "/images/laneIcons/laneBaron.webp",
      5: "/images/laneIcons/laneJungle.webp",
      1: "/images/laneIcons/laneMiddle.webp",
      3:"/images/laneIcons/laneDuo.webp",
      4:"/images/laneIcons/laneSupport.webp"
    }
  
    const extractedLane = Object.values(extractedRank).map(lane =>
      lane.flatMap(object => ({ ...object.value }))
    );
  
    const flatArray = extractedLane.flat();
  
    const finishedList = flatArray.map(record => {
      const champion = champions.find(champ => champ.heroId === parseInt(record.hero_id));
  
      return {
        name: champion.name,
        heroId: champion.heroId,
        icon: champion.icon,
        id: record.id,
        position: lanes[parseInt(record.position)],
        laneIcon: laneIcons[parseInt(record.position)],
        pickRate: record.appear_rate,
        banRate: record.forbid_rate,
        winRate: record.win_rate,
      };
    });
  
    return finishedList;
  };

  const data = {
    diamond: processedList('diamond'),
    masters: processedList('masters')
  }
  
  const calculateMean = (data, metric = 'winRate') => {
    const quantity = Number(data.length);

    let sumOfAll = 0;

    data.forEach(record => (sumOfAll += parseInt(record[metric])));
    return sumOfAll / quantity;
  };

  const means = {
    diamond: {
      winRate: calculateMean(data.diamond, 'winRate'),
      pickRate: calculateMean(data.diamond, 'pickRate'),
      banRate: calculateMean(data.diamond, 'banRate')
    },

    masters: {
      winRate: calculateMean(data.masters, 'winRate'),
      pickRate: calculateMean(data.masters, 'pickRate'),
      banRate: calculateMean(data.masters, 'banRate')
    }
  }


  const calculateStandardDeviation = (data, metric, mean) => {
    const quantity = Number(data.length);
    const squaredDifferences = data.map(record => Math.pow(record[metric] - mean, 2));
    const averageSquaredDifferences = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / quantity;
    return Math.sqrt(averageSquaredDifferences);
  };
  
  const stdDeviations = {
    diamond: {
      winRate: calculateStandardDeviation(data.diamond, 'winRate', means.diamond.winRate),
      pickRate: calculateStandardDeviation(data.diamond, 'pickRate', means.diamond.pickRate),
      banRate: calculateStandardDeviation(data.diamond, 'banRate', means.diamond.banRate),
    },

    masters: {
      winRate: calculateStandardDeviation(data.masters, 'winRate', means.masters.winRate),
      pickRate: calculateStandardDeviation(data.masters, 'pickRate', means.masters.pickRate),
      banRate: calculateStandardDeviation(data.masters, 'banRate', means.masters.banRate),
    },
    
  };

  const calculateZScore = (original, mean, deviation) => (original - mean) / deviation;

  data.diamond.forEach(record => {
    record.compositeScore =
      calculateZScore(record.winRate, means.diamond.winRate, stdDeviations.diamond.winRate) +
      calculateZScore(record.pickRate, means.diamond.pickRate, stdDeviations.diamond.pickRate) +
      calculateZScore(record.banRate, means.diamond.banRate, stdDeviations.diamond.banRate);
  });

  data.masters.forEach(record => {
    record.compositeScore =
      calculateZScore(record.winRate, means.masters.winRate, stdDeviations.masters.winRate) +
      calculateZScore(record.pickRate, means.masters.pickRate, stdDeviations.masters.pickRate) +
      calculateZScore(record.banRate, means.masters.banRate, stdDeviations.masters.banRate);
  });


  const summedUp = () => {
    

    const summedUpList = data.diamond.map(record => {
      const secondComposite = data.masters.find(record => record.heroId === data.heroId && record.position === data.position) || 0;
      const compositeSum = (record.compositeScore + secondComposite)/2
      return {
        ...record,
        compositeScore: compositeSum
      }
    })

    const compositeDivider = (lane) => {
      return summedUpList.filter(record => record.position === lane).reduce((sum, record) => sum + record.compositeScore, 0) / Number(summedUpList.filter(record => record.position === lane).length)}

    const getTier = (compositeScore, lane) => {
      if (compositeScore > compositeDivider(lane) * 3) {
        return 'FOTM';
      } else if (compositeScore > compositeDivider(lane) * 2 && compositeScore <= compositeDivider(lane) * 3) {
        return 'S+';
      } else if (compositeScore > compositeDivider(lane) * 1.3 && compositeScore <= compositeDivider(lane) * 2) {
        return 'S';
      } else if (compositeScore > compositeDivider(lane) * 0.9 && compositeScore <= compositeDivider(lane) * 1.3) {
        return 'A';
      } else if (compositeScore > compositeDivider(lane) * 0.7 && compositeScore <= compositeDivider(lane) * 0.9) {
        return 'B';
      } else if (compositeScore > compositeDivider(lane) * 0.2 && compositeScore <= compositeDivider(lane) * 0.7) {
        return 'C';
      } else if (compositeScore <= compositeDivider(lane) * 0.2) {
        return 'D';
      } else {
        return 'Unknown';
      }
    };

    summedUpList.forEach(record => record.tier = getTier(record.compositeScore, record.position));
    summedUpList.forEach(record => record.performance= (record.compositeScore/compositeDivider(record.position)) * 100);
      
    summedUpList.forEach(record => record.totalScore = compositeDivider(record.position))

    return summedUpList;
  }

  const rankingslist = summedUp();

  const tiers = {
    FOTM: rankingslist.filter(record => record.tier === "FOTM"),
    SS: rankingslist.filter(record => record.tier === "S+"),
    S: rankingslist.filter(record => record.tier === "S"),
    A: rankingslist.filter(record => record.tier === "A"),
    B: rankingslist.filter(record => record.tier === "B"),
    C: rankingslist.filter(record => record.tier === "C"),
    D: rankingslist.filter(record => record.tier === "D"),
  };

  const formTiles = (tier) => {
    const splitLanes = [
      tier.filter(record => record.position === lanes[2]),
      tier.filter(record => record.position === lanes[5]),
      tier.filter(record => record.position === lanes[1]),
      tier.filter(record => record.position === lanes[3]),
      tier.filter(record => record.position === lanes[4]),
    ];

    return (

      <>
        <h4>Baron Lane</h4>
        <div className="lane-tile">{splitLanes[0].map(record => {
    return <div key={record.id} className='record-tile'>
      <p>{record.name}</p>
      <Image
        src={record.icon}
        alt={record.heroId}
        width={80}
        height={80}  
         />
      <p>relative performance: {Math.round(record.performance)}%</p>
    </div>
  })}</div>
        <h4>Jungle</h4>
        <div className="lane-tile">{splitLanes[1].map(record => {
    return <div key={record.id} className='record-tile'>
      <p>{record.name}</p>
      <Image
        src={record.icon}
        alt={record.heroId}
        width={80}
        height={80}  
         />
      <p>relative performance: {Math.round(record.performance)}%</p>
    </div>
  })}</div>
        <h4>Mid lane</h4>
        <div className="lane-tile">{splitLanes[2].map(record => {
            return <div key={record.id} className='record-tile'>
              <p>{record.name}</p>
              <Image
                src={record.icon}
                alt={record.heroId}
                width={80}
                height={80}  
                /> 
              <p>relative performance: {Math.round(record.performance)}%</p>
            </div>
          })}</div>
        <h4>Duo lane (carry)</h4>
        <div className="lane-tile">{splitLanes[3].map(record => {
                    return <div key={record.id} className='record-tile'>
                      <p>{record.name}</p>
                      <Image
                        src={record.icon}
                        alt={record.heroId}
                        width={80}
                        height={80}  
                        />
                      <p>relative performance: {Math.round(record.performance)}%</p>
                    </div>
                  })}</div>
        <h4>Support</h4>          
        <div className="lane-tile">{splitLanes[4].map(record => {
          return <div key={record.id} className='record-tile'>
            <p>{record.name}</p>
            <Image
              src={record.icon}
              alt={record.heroId}
              width={80}
              height={80}  
              />
            <p>relative performance: {Math.round(record.performance)}%</p>
          </div>
        })}</div>
      </>     
    )
  }



  

  return (
    <> 
    <div>
      <h5 className='disclaimer'><u>Disclaimer:</u> Provided tierlist is automated and based upon relative (compared to other champions on the same line) champion perfomance across Diamond-Grandmaster ranks on China's national server and formed through statistics calculations. It does not consider the difficulty of a champion or any other specifics and rather represents the most recent META champions from chinese server. The only subjective part on author's side is a threshold that breaks characters by tiers. If you see a high win rate champion in low tiers, it means that "statistically" that champion is too niche or requires dedication and deep champion knowledge to be effective. Author believes that every champion is viable.</h5>
    </div>

    <div  id='fotm' className='tier-mark'>
      <h1>FOTM</h1>
      <p>Over the top performance. May be a target of next patch nerfs.</p>
    </div>    
    <div className="rank-tile">
      {formTiles(tiers.FOTM)}
    </div>

    <div id='splus' className='tier-mark'>
      <h1>S+</h1>
      <p>Safe for blind pick, easy to get high output</p>
    </div>    
    <div className="rank-tile">
      {formTiles(tiers.SS)}
    </div>

    <div id='s' className='tier-mark'>
      <h1>S</h1>
      <p>Solid choice in the current meta, more reliant on team composition.</p>
    </div>     
    <div className="rank-tile">
      {formTiles(tiers.S)}
    </div>

    <div id='a' className='tier-mark'>
      <h1>A</h1>
      <p>Average, middle of the road performance.</p>
    </div>
    <div className="rank-tile">
      {formTiles(tiers.A)}
    </div>

    <div id='b' className='tier-mark'>
      <h1>B</h1>
      <p>Results are more likely to get influenced by team composition.</p>
    </div>   
    <div className="rank-tile">
      {formTiles(tiers.B)}
    </div>

    <div id='c' className='tier-mark'>
      <h1>C</h1>
      <p>Niche and situational picks or champion requires deep understanding to play</p>
    </div>    
    <div className="rank-tile">
      {formTiles(tiers.C)}
    </div>


    <div id='d' className='tier-mark'>
      <h1>D</h1>
      <p>Champion struggles at current position. May be a target of upcoming patch buffs</p>
    </div>     
    <div className="rank-tile">
      {formTiles(tiers.D)}
    </div>
    </>
  )
}

export default page