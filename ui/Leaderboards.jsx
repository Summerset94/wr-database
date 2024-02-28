'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import'../app/styles/leaderboards.css';
import {useRouter, useSearchParams} from 'next/navigation';
export const dynamic = "force-dynamic";

function Leaderboards({champions, winRateData}) {

  

  const router = useRouter();
  const searchParams = useSearchParams();

  const changeLeaderboards = ({rank, lane}) => {
    const chosenRank = rank ? rank : searchParams.get('rank');
    const chosenLane = lane ? lane : searchParams.get('lane');

    if (chosenRank === searchParams.get('rank') && chosenLane === searchParams.get('lane')) {
      return
    } else {
      return  router.push(`/rankings?rank=${chosenRank}&lane=${chosenLane}`, {scroll: false})
    }
  }



// saved state with chosen rank/lane options to render
  const [leaderboards, setLeaderboards] = useState([]);
  const [latestUpdate, setLatestUpdate] = useState('');

// Getting the date of rankings update

  const statsUpdateDate = (stats) => {
    const numberString = stats[0].value.dtstatdate.toString();

  
  const lastTwoDigits = numberString.slice(-2);
  const digit5and6 = numberString.slice(4, 6);
  const firstFourDigits = numberString.slice(0, 4);

  // Construct the formatted string
  const formattedString = `${lastTwoDigits} (day) - ${digit5and6} (month) - ${firstFourDigits} (year)`;

  return formattedString;
  }


// Searches for champion data based on champion ID in chinese API (to translate results from chinese)
    function getChamp(id) {
    return champions.find(champ => champ.heroId === parseInt(id));
  }

// Translates Floating Point value into percentage
    function getFloat(string) {
      return (parseFloat(string) * 100).toFixed(2);
    }
  

// Fetching cleaned up Winrate statistics from Chinese server
  useEffect(() => {
    const fetchData = async () => {
      
      const fetchedWinRate = JSON.parse(winRateData);
     
      const stats = fetchedWinRate[searchParams.get('rank')][searchParams.get('lane')];   


      const results = await Promise.all(stats.map(async record => {
        const champion = getChamp(record.value.hero_id);

        return (
          <tr className='row' key={record.value.hero_id}>
            <td>
              <Image
                src={champion.icon}
                width={70}
                height={70}
                alt={champion.id}
              />
            </td>
            <td>{champion.name}</td>
            <td>{getFloat(record.value.win_rate)}%</td>
            <td>{getFloat(record.value.appear_rate)}%</td>
            <td>{getFloat(record.value.forbid_rate)}%</td>
          </tr>
        );
      }));

      const updateTime = () => setLatestUpdate(statsUpdateDate(stats))

      
      updateTime();
      setLeaderboards(results);


    };

    fetchData();
  }, [searchParams]);

  

  return (
    <div className='ranking-wrap'>    
      <h4>Last updated on: <u>{latestUpdate}</u>.</h4>
      <p>Select Rank</p>
      <div className='btngroup'> 
        {/* <button onClick={() => dispatch({type: 'elohell'})}>Emerald and below</button> */}
          <button onClick={() => changeLeaderboards({rank: 'diamond'})}>Diamond</button>          
          <button onClick={() => changeLeaderboards({rank: 'masters'})}>Masters and above</button>
          <button onClick={() => changeLeaderboards({rank: 'challenger'})}>Challenger</button>
          <button onClick={() => changeLeaderboards({rank: 'legendary'})}>Legendary Queue</button>
      </div>

      <p>Select Lane</p>

      <div className='btngroup'> 
          <button onClick={() => changeLeaderboards({lane: 'top'})}>Baron lane</button>
          <button onClick={() => changeLeaderboards({lane: 'jungle'})}>Jungle</button>
          <button onClick={() => changeLeaderboards({lane: 'mid'})}>Middle</button>
          <button onClick={() => changeLeaderboards({lane: 'bot'})}>Duo lane</button>
          <button onClick={() => changeLeaderboards({lane: 'support'})}>Support</button>
      </div>

      <h4>Showing statistics for <strong>{searchParams.get('rank')}</strong> rank on <strong>{searchParams.get('lane')}</strong> position</h4>

      <table>        
        <thead>        
          <tr>
            <td>Portrait</td>
            <td>Name</td>
            <td>Win Rate</td>
            <td>Pick Rate</td>
            <td>Ban Rate</td>
          </tr>
        </thead>

        <tbody>{leaderboards}</tbody>
      </table>
    </div>
  );
}

export default Leaderboards;

