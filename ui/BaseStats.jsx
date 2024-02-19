import '../app/styles/StatColors.css';
import '../app/styles/statsTable.css';

const BaseStats = ({champion}) => {

  return (
    <details>
      <summary>Base Stats</summary>

      <table>
          <thead>
            <tr>
              <th>
                Base stats
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stat</td>
              <td>Base</td>
              <td>Scaling</td>
            </tr>

            <tr>
              <td>Health</td>
              <td className='stat--hp'>{champion.healthBase}</td>
              <td className='stat--hp'>{champion.healthScale}</td>
            </tr>

            {!champion.manaBase ? (<tr>
              <td>Mana</td>
              <td colSpan={2}>Manaless(TBD)</td>
            </tr>) :
              (
                <tr>
                <td>Mana</td>
                <td className='stat--mana'>{champion.manaBase}</td>
                <td className='stat--mana'>{champion.manaScale}</td>
                </tr>
              )}

            <tr>
              <td>Armor</td>
              <td className='stat--armor'>{champion.armorBase}</td>
              <td className='stat--armor'>{champion.armorScale}</td>
            </tr>

            <tr>
              <td>Mag Res</td>
              <td className='stat--magres'>{champion.magresBase}</td>
              <td className='stat--magres'>{champion.magresScale}</td>
            </tr>

            <tr>
              <td>AD</td>
              <td className='stat--ad'>{champion.attackBase}</td>
              <td className='stat--ad'>{champion.attackScale}</td>
            </tr>            

            <tr>
            <td className="stat--as">Attack Speed</td>
            <td className="stat--as">{champion.asBase}</td>
            <td className="stat--as">{parseFloat(champion.asScale).toFixed(3)}</td>
          </tr>

          <tr>
            <td colSpan={3}><abbr title="Basically your attack speed consists of BASIC value, plus percentage of BASIC value as bonus at level 1 plus % growth on that is derived as % of BASE as. Most of AS bonuses are based on your BASE AS"><sup>**</sup></abbr>AS bonus</td>
          </tr>

          <tr>
            <td colSpan={2}>At level 1</td>
            <td className="stat--as">{Math.round(champion.asBaseBonus/champion.asBase*100)}%</td>
          </tr>

          <tr>
            <td colSpan={2}>Level bonus</td>
            <td className="stat--as">{(champion.asScale/champion.asBase*100).toFixed(1)}%</td>
          </tr>
              

          </tbody>
        </table>
    </details>    
  )
}

export default BaseStats;