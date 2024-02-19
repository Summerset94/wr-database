import '../app/styles/StatColors.css';
import '../app/styles/statsTable.css';

export default function DinamicStats({currentLevel, baseStats, bonusStats, totalMemo}) {

  return(
    <details>
      <summary>Natural, Bonus and Total stats</summary>

      <table className='statsTable'>
        <thead>
          <tr>
            <th>
              Comprehensive statistics table
            </th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>Stat</td>
            <td>Base at {currentLevel}</td>
            <td>Bonus</td>
            <td>Total</td>
          </tr>
          
          <tr>
            <td>Health</td>
            <td className='stat--hp'>{baseStats.health}</td>
            <td className='stat--hp'>{Math.round(bonusStats.health)}</td>
            <td className='stat--hp'>{Math.round(totalMemo.health)}</td>
          </tr>

          <tr>
            <td>Mana</td>
            <td className='stat--mana'>{baseStats.mana}</td>
            <td className='stat--mana'>{Math.round(bonusStats.mana)}</td>
            <td className='stat--mana'>{Math.round(totalMemo.mana)}</td>
          </tr>

          <tr>
            <td>Armor</td>
            <td className='stat--armor'>{baseStats.armor}</td>
            <td className='stat--armor'>{Math.round(bonusStats.armor)}</td>
            <td className='stat--armor'>{Math.round(totalMemo.armor)}</td>
          </tr>

          <tr>
            <td>Magic Resistance</td>
            <td className='stat--magres'>{baseStats.magres}</td>
            <td className='stat--magres'>{Math.round(bonusStats.magres)}</td>
            <td className='stat--magres'>{Math.round(totalMemo.magres)}</td>
          </tr>

          <tr>
            <td>Attack</td>
            <td className='stat--ad'>{baseStats.attack}</td>
            <td className='stat--ad'>{Math.round(bonusStats.attack)}</td>
            <td className='stat--ad'>{Math.round(totalMemo.attack)}</td>
          </tr>

          <tr>
            <td>Ability Power</td>
            <td className='stat--ap'>{baseStats.ap}</td>
            <td className='stat--ap'>{Math.round(bonusStats.ap)}</td>
            <td className='stat--ap'>{Math.round(totalMemo.ap)}</td>
          </tr>

          <tr>
            <td>Attack speed</td>
            <td className='stat--as'>{baseStats.as.toFixed(2)}</td>
            <td className='stat--as'>{bonusStats.as.toFixed(2)}</td>
            <td className='stat--as'>{totalMemo.as.toFixed(2)}</td>
          </tr>

          <tr>
            <td>Movespeed</td>
            <td className='stat--moveSpeed'>{Math.round(baseStats.moveSpeed)}</td>
            <td className='stat--moveSpeed'>{Math.round(bonusStats.moveSpeed)}</td>
            <td className='stat--moveSpeed'>{Math.round(totalMemo.moveSpeed)}</td>
          </tr>

          <tr>            
            <td>Crit Chance</td>
            <td className="stat--critChance">{Math.floor(totalMemo.critChance*100)}%</td>
            <td>Crit Multiplier:</td>
            <td className="stat--as">{Math.ceil(totalMemo.critMultiplier * 100)}%</td>
          </tr>
        </tbody>
      </table>
    </details>
  )
}