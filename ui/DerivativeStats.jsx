import '../app/styles/StatColors.css';
import '../app/styles/statsTable.css';

export default function DerivativeStats({totalMemo, formula}) {

  return(
    <details>
      <summary>Derivative stats</summary>
      <table className="statsTable">
        <tbody>
        <tr>
            <td colSpan={2}>Damage mitigation raw</td>
            <td colSpan={2}>Post reduction</td>
          </tr>
          <tr>
            <td>Physical</td>
            <td className='stat--armor'>{totalMemo.dmgReductArm.toFixed(0)}%</td>
            <td>Physical</td>
            <td className='stat--armor'>{(formula.attackerPhysReduction)}%</td>
          </tr>
          <tr>
            <td >Magical</td>
            <td className='stat--magres'>{totalMemo.dmgReductMag.toFixed(0)}%</td>
            <td >Magical</td>
            <td className='stat--magres'>{(formula.defenderPhysReduction)}%</td>
          </tr>

          <tr>
            <td colSpan={2}>Effective HP raw</td>
            <td colSpan={2}>Post defence reduction</td>
          </tr>

          <tr>
            <td>VS Physical</td>
            <td className='stat--hp'>{Math.round(totalMemo.effectiveHealthArm)}</td>
            <td>VS Physical</td>
            <td className='stat--hp'>{Math.round(formula.attackerEffectivePhysHealth)}</td>
          </tr>
          <tr>
            <td>VS Magic</td>
            <td className='stat--hp'>{Math.round(totalMemo.effectiveHealthMag)}</td>
            <td>VS Magic</td>
            <td className='stat--hp'>{Math.round(formula.attackerEffectiveMagHealth)}</td>
          </tr>

          <tr>
            <td colSpan={2}>Damage Penetration:</td>
            <td colSpan={2}>Effective Damage:</td>               
          </tr>

          <tr>
            <td>Flat Armor</td>
            <td className="stat--ad">{totalMemo.flatArmPen}</td>
            <td>Effective AD</td>
            <td className="stat--ad">{Math.round(totalMemo.attack * (100 - formula.defenderPhysReduction)/ 100)}</td>
          </tr>
          <tr>
            <td>Flat Magic</td>
            <td className="stat--ap">{totalMemo.flatMagPen}</td>
            <td>Effective AP</td>
            <td className="stat--ap">{Math.round(totalMemo.ap * (100 - formula.defenderPhysReduction)/ 100)}</td>
          </tr>
          <tr>
            <td>Percentage Armor</td>
            <td className="stat--ad">{((totalMemo.armPen) * 100).toFixed(0)}%</td>
            <td>Physical Damage modifier</td>
            <td className='stat--ad'>{Math.round(100 - formula.defenderPhysReduction)}%</td>
          </tr>
          <tr>
            <td>Percentage Magic</td>
            <td className="stat--ap">{(totalMemo.magPen * 100).toFixed(0)}%</td>
            <td>Magic Damage modifier</td>
            <td className='stat--ap'>{Math.round(100 - formula.defenderMagReduction)}%</td>
          </tr>

          <tr>
            <td colSpan={2}><abbr title="Ability haste converted into cdr">Cooldown reduction</abbr></td>
            <td colSpan={2} className="stat--moveSpeed">{Math.floor(totalMemo.cdr*100)}%</td>
          </tr>
        </tbody>
      </table>
    </details>
  )
}