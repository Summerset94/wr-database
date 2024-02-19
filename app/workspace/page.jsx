import heroBase from '../data/heroBase';
import winRateData from '../data/winRateData';
import champions from '../data/Champions';
export default async function Page() {

  const heroData = JSON.stringify(heroBase, null, 4)
  const winRatesBase = winRateData
  const myChampionsData = JSON.stringify(champions, null, 4);

  return (


    <div>
      <details>
        <summary>the stuff that I get from json data to see how it's formatted</summary>

        <details>
          <summary>basic champions info from API</summary>

          <pre>{heroData}</pre>
        </details>

        <details>
          <summary>Raw winrate data</summary>

          <pre>{winRatesBase}</pre>
        </details>      

        <details>
          <summary>My champions array</summary>

          <pre>{myChampionsData}</pre>
        </details>    
      </details>

          
    </div>
  )
}