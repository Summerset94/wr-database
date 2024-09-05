import '../app/styles/runes.css';

import React, {useMemo, useState, useEffect} from 'react'
import useRunesEffects from '../hooks/useRunesEffects';
import useRuneFormulas from '../hooks/useRuneFormulas';

const Runes = ({bonus, champ, currentLevel, mod, atk, def, updateRunesEffects}) => {

const level = currentLevel;

  // useReducer hook for tracking runes effects that have constant impact on character
const { runesEffects, dispatch, resetKeystones, resetPath } = useRunesEffects()

// Memo to track the defenders resistances change
const turretArmor = useMemo(() => {

  const turretArmor = {
    armor: 25
  };

  switch (runesEffects.path.turretPlates) {
    case 0:
      turretArmor.armor = 25;
      break;
    case 1: 
      turretArmor.armor = 65;
      break;
    case 2:
      turretArmor.armor = 105;
      break;
    case 3:
      turretArmor.armor = 185;
      break;
    case 4:
      turretArmor.armor = 265;
      break;

  } 

  const postMitigationArmor = (target, attacker) => {
    let mitigatedArmor = 0
    if (attacker.armorReduction && (target.armor * (1 - attacker.armorReduction) <= 0)) {
      return (target.armor * (1 - attacker.armorReduction))
    } else if (attacker.armorReduction) { 
     
      mitigatedArmor = ((target.armor * (1 - attacker.armorReduction)) * (1 - attacker.armPen) - attacker.flatArmPen);
     
      return (Math.max(mitigatedArmor, 0))

    } else {
      mitigatedArmor = (target.armor * ((1 - attacker.armPen)) - attacker.flatArmPen)

      return (Math.max(mitigatedArmor, 0))
    }
  };

  const physicalDamageReduction = (postMitigationArmor, champ) => {
    return ((1 - (100/(100 + (postMitigationArmor))))*100);
  }
  const postMitigationArmorTurret = postMitigationArmor(turretArmor, atk);

  const physicalReductionTurret = physicalDamageReduction(postMitigationArmorTurret, def);   

  return (physicalReductionTurret/100) 

},[atk, def, runesEffects]);

// calculations of runes effects
const runeFormulas = useRuneFormulas(atk, bonus, mod, currentLevel, runesEffects, turretArmor, champ, def);

// push runes effects the character stats
useEffect(() => {
  const payload = {
    attack: (runeFormulas.damagetype.type === 'physical' ? runeFormulas.conqueror.bonus + runesEffects.path.eyeballCollector + (runesEffects.path.zombieWard * 3) + (runeFormulas.gatheringStorm.bonus) : 0) + (runeFormulas.damagetype.type === 'physical' && runesEffects.path.eyeballCollector === 10 ? 10 : 0) + (runeFormulas.damagetype.type === 'physical' && runesEffects.path.zombieWard === 5 ? 10 : 0),

    ap: (runeFormulas.damagetype.type === 'magical' ? runeFormulas.conqueror.bonus + (runesEffects.path.eyeballCollector * 2) + (runesEffects.path.zombieWard * 6) + (runeFormulas.gatheringStorm.bonus) : 0) + (runeFormulas.damagetype.type === 'magical' && runesEffects.path.eyeballCollector === 10 ? 20 : 0) + (runeFormulas.damagetype.type === 'magical' && runesEffects.path.zombieWard === 5 ? 20 : 0),

    health: (runesEffects.keystones.grasp * 5) + (runesEffects.path.overgrowth * 3) + (runesEffects.path.overgrowth > 29 ? (atk.health * 3 / 100) : 0),

    mana: (runesEffects.path.manaflow * 30),

    armor: (runesEffects.keystones.aftershock ? runeFormulas.aftershock.defence.armor : 0) + (runesEffects.path.loyalty ? 2 : 0) + (runesEffects.path.perseverance ? runeFormulas.perseverance : 0),

    magres: (runesEffects.keystones.aftershock ? runeFormulas.aftershock.defence.magres : 0) + (runesEffects.path.loyalty ? 5 : 0) + (runesEffects.path.perseverance ? runeFormulas.perseverance : 0),

    as: (runeFormulas.lethalTempo.as) + (runeFormulas.legendAlacrity.as),

    flatArmPen: (runesEffects.path.suddenImpact ? 13 : 0),

    flatMagPen: (runesEffects.path.suddenImpact ? 13 : 0),

    ah: (runesEffects.path.transcendence ? runeFormulas.transcendence : 0),

    moveSpeed: (runesEffects.path.pathfinder ? 50 : 0),
  }

  updateRunesEffects(payload)
}, [runesEffects, currentLevel, champ])

// Keystone runes
const keystones = [
  {
    name: 'Electrocute',    
    id: '6ba993ad-90a3-4e86-9a72-5c769914c2ae',
    icon: '../images/runes/electrocute.webp',
    description: <div className='runeDescription'>
    <p>Within 3 seconds, hit the same enemy champion with 3 basic attacks or abilities to cause additional adaptive damage to the target.</p>

    <p title='Physical or magical based on your bonus attack and Ability Power'>Damage type: {runeFormulas.damagetype.description}</p>
    <p>Damage (pre/post-mitigation): {Math.round(runeFormulas.electrocute.damage.raw)} / {Math.round(runeFormulas.electrocute.damage.mitigated)}</p>
    <p>Damage formula: 40-194 (+11 per level) (<span className='stat--ad'>+40% bonus AD</span>) (<span className='stat--ap'>+20% AP</span>)</p>
    <p>Cooldown: {(runeFormulas.electrocute.cooldown).toFixed(1)} (20-13 based on level) seconds.</p>
  </div>
  },

  {
    name: 'Empowerment',    
    id: '4c0dc300-9225-40c3-a209-b3c0d900d0f8',
    icon: '../images/runes/PTA.webp',
    description: <div className='runeDescription'>    
    <p>Hitting an enemy champion with 3 consecutive attacks deals <span className='stat--armor'>40-180 bonus adaptive damage</span> and makes them <span className='stat--armor'>Vulnerable</span>, increasing all damage they take by <span className='stat--armor'>8% for 6 seconds</span>. </p>

    <p>
    Once Vulnerable, your attacks to the target deal <span className='stat--vamp'>8-24 bonus true damage</span>. When the target exits the Vulnerable state, Vulnerability enters cooldown and cannot be applied to any enemy for the next 4 seconds.
    </p>



    <p title='Physical or magical based on your bonus attack and Ability Power'>Damage type: {runeFormulas.damagetype.description}</p>
    <p>Damage (pre/post-mitigation): {Math.round(runeFormulas.PTA.damage.raw)} / {Math.round(runeFormulas.PTA.damage.mitigated)}</p>
    <p>Damage formula: 40-180 (+10 per level)</p>
    <p className='stat--vamp'>On-hit True Damage: {Math.round(runeFormulas.PTA.trueDamage)}</p>
    <p>Damage formula: 6 + 1 per level</p>
    
  </div>
  },

  {
    name: 'Arcane Comet',    
    id: '1a8adad5-e8d8-4f71-afbe-58f5593289e2',
    icon: '../images/runes/arcaneComet.webp',
    description: <div className='runeDescription'>
      <p>
      Damaging a champion with an ability hurls a comet at their location. When a comet hits an enemy champion, the next comet's damage increases by 2.
      </p>
      <p title='Physical or magical based on your bonus attack and Ability Power'>Damage type: {runeFormulas.damagetype.description}</p>
      <p>Base Damage (pre/post-mitigation): {Math.round(runeFormulas.arcaneComet.damage.raw)} / {Math.round(runeFormulas.arcaneComet.damage.mitigated)}</p>
      <p>Damage formula: 30-100 (+5 per level) (<span className='stat--ad'>+35% bonus AD</span>) (<span className='stat--ap'>+20% AP</span> )</p>
      <p>Cooldown: {(runeFormulas.arcaneComet.cooldown).toFixed(1)} (16-8 based on level) seconds.</p>
  </div>
  },

  {
    name: 'Aery',
    id: 'ca422aab-6277-4784-8b52-8ea6a8a235d1',
    icon: '../images/runes/aery.webp',
    description: <div className='runeDescription'>
    <p>Your Attacks and abilities send Aery to a target, damaging enemies or shielding allies. Aery lingers on the target for 2 seconds before flying back to the user, and cannot be sent out again until she returns. Aery will gradually accelerate her return, and can be picked up by moving near her.</p>

    
    <p title='Physical or magical based on your bonus attack and Ability Power'>Damage type: {runeFormulas.damagetype.description}</p>
    <p>Damage (pre/post-mitigation): {Math.round(runeFormulas.aery.damage.raw)} / {Math.round(runeFormulas.aery.damage.mitigated)}</p>
    <p>Damage formula: 10-60 (based on level) (<span className='stat--ad'>+20% bonus AD</span>) (<span className='stat--ap'>+10% AP</span>)</p>
    
    <p>Shield: <span className='stat--armor'>{Math.round(runeFormulas.aery.shield)}</span></p>
    <p>Shield formula: 20-120 (based on level) (<span className='stat--ad'>+40% bonus AD</span>) (<span className='stat--ap'>+20% AP</span>)</p>
  </div>
  },

 {
  name: 'Phase Rush',
  id: '510faf7b-99f8-47ce-818d-3ccfe6b4b9a7',
  icon: '../images/runes/phaseRush.webp',
  description:  <div className='runeDescription'>
  <p>Using basic attacks or abilities on an enemy champion 3 times within 4 seconds grants Movement Speed and reduces the remaining cooldown of basic abilities by 20% and grants 25 Ability Haste for duration</p>

  <p>Duration: 3 seconds</p>
  <p>Movement Speed bonus (melee / ranged): <span className='stat--moveSpeed'>{Math.round(runeFormulas.phaseRush.melee)} / {Math.round(runeFormulas.phaseRush.ranged)}</span></p>
  <p>Cooldown reduction under effect: {Math.round(runeFormulas.phaseRush.cdr*100)}%</p>
  <p>Movespeed formula: melee: 40%-60% based on level, ranged: 30%-50% based on level</p>
  <p>Cooldown: 12 seconds.</p>
</div>
 },

 {
  name: 'Conqueror',
  id: 'c446021b-0e9e-48d7-8b66-a985057be148',
  icon: '../images/runes/conqueror.webp',
  description:  <div className='runeDescription'>
  <p>Gain stacks of Adaptive Force when hitting a champion with separate attacks or abilities. Stacks up to 6 times. When fully stacked, gain bonus omnivamp</p>

  <p>Stacks: {runesEffects.keystones.conqueror}</p>
  <button type='button' onClick={() => dispatch({ type: 'conqueror' })}>Change Stacks</button>

  <p>Active bonus: {runeFormulas.damagetype.description} {Math.round(runeFormulas.conqueror.bonus)}</p>
  <p>At full Stacks gain <span className='stat--vamp'>8% / 5% (for melee/ranged) Omnivamp</span> </p>
</div>
 },

 {
  name: 'Freet Footwork',
  id: 'b093a8f4-e3e8-4df2-b003-874794a6820d',
  icon: '../images/runes/fleetFootwork.webp',
  description: <div className='runeDescription'>
  <p>Moving, Attacking and casting builds Energy stacks. At 100 stacks, your heals you, grants increased Movement Speed, and restores mana or energy if you attack a champion</p>

  <p className='stat--hp'>Healing from champions: {Math.round(runeFormulas.fleetFootwork.healing.champion)}</p>
  <p className='stat--hp'>Healing from minions/monsters:</p>
  <ul>
    <li>for melee champions: <span className='stat--hp'>{Math.round(runeFormulas.fleetFootwork.healing.melee)}</span></li>
    <li>for ranged champions: <span className='stat--hp'>{Math.round(runeFormulas.fleetFootwork.healing.ranged)}</span></li>
  </ul>
  
  <p>Healing formula: 15-85 (based on level) (<span className='stat--ad'>+30% bonus AD</span>) (<span className='stat--ap'>+30% AP</span>)</p>

  <p>
    Movement Speed bonus: <span className='stat--moveSpeed'>20% ({Math.round(atk.moveSpeed * 20 / 100)}) for 1 second</span>.
  </p>

  <p>
    When attacking a champion, restore <span className='stat--mana'>8% missing mana</span> or <span className='stat--armor'>8% missing energy</span>
  </p>
</div>
 },

//  Kraken Slayer (removed)
//  {
//   name: 'Kraken Slayer',
//   id: 'c16ebe1e-8988-4178-b355-d3b65483f28e',
//   icon: "../images/runes/krakenSlayer.webp",
//   description: <div className='runeDescription'>
//   <p>Gain stacks when hitting a champion with attacks. When reaching 3 stacks. Upon reaching 3 stacks, deal bonus true damage on attack.</p>

//   <p>Stacks reset after not attacking enemy champion for 3 seconds.</p>

//   <p className='stat--vamp'>Damage: {Math.round(runeFormulas.krakenSlayer.damage)}</p>

//   <p>
//     Damage formula: 30-95 (based on level) (<span className='stat--ad'>+40% bonus AD</span>) (<span className='stat--ap'>+20% AP</span>)
//   </p>
  
// </div>
//  },

 {
  name: 'Grasp of the Undying',
  icon: "../images/runes/grasp.webp",
  id: '4aa2b0a4-02bf-49dc-abf5-7246b8931d11',
  description: <div className='runeDescription'>
  <p>
     Every 3 seconds in combat, your next attack on a champion will be enhanced with additional damage and increase your <span className='stat--hp'>Health</span> by <span className='stat--hp'>5</span> permanently
  </p>

  <p>Grasp proc damage: </p>
  <ul>
    <li>Pre-mitigation: <span className='stat--ap'>{Math.round(runeFormulas.grasp.damage.raw)}</span></li>
    <li>Post-mitigation: <span className='stat--ap'>{Math.round(runeFormulas.grasp.damage.mitigated)}</span></li>
  </ul>

  <div>
        <label>
          Set your <span className="stat--armor">Grasp</span> stacks:
          {' '}<input
            type="number"
            value={runesEffects.keystones.grasp}
            onChange={(e) => {dispatch({type: 'grasp', payload: e.target.value})}}
          />
        </label>            
        <ul>
          <li>Stacks: {runesEffects.keystones.grasp}</li>
          <li>Bonus health: <span className='stat--hp'>{(runesEffects.keystones.grasp * 5)}</span> </li>
        </ul>
      </div>
</div>,
 },

 {
  name: 'Aftershock',
  icon: '../images/runes/aftershock.webp',
  id: 'a61d65e7-1b28-4e54-940f-0c3233617b3f',
  description: <div className='runeDescription'>
    

    <p>
      Defence bonus: {runesEffects.keystones.aftershock ? <span className='stat--hp'>Active</span> : <span className='stat--vamp'>Disabled</span>};
    </p>
    <p>
      <button onClick={() => {dispatch({type: 'toggleAftershock'})}}>toggle defence bonus</button>
    </p>


    <p>
      Damage (pre / post-mitigation): <span className='stat--ap'>{Math.round(runeFormulas.aftershock.damage.raw)} / {Math.round(runeFormulas.aftershock.damage.mitigated)} magic damage</span>
    </p>

    <p>
      Defence bonus: <span className='stat--armor'>{Math.round(runeFormulas.aftershock.defence.armor)} Armor</span> / <span className='stat--magres'>{Math.round(runeFormulas.aftershock.defence.magres)} Magic Resistance</span> 
    </p>

    <p>After immobilizing an enemy champion, gain defences and deal a burst of magic damage around you</p>

    <p>
      Damage formula: 12-110 (based on level) (<span className='stat--hp'>
        3% Max Health</span>).
    </p>

    <p>
      Defence formula: <span className='stat--armor'>35 Armor (+60% bonus Armor)</span>, <span className='stat--magres'>35 Magic Resistance (+60% bonus Magic Resistance)</span> for 2.5 seconds
    </p>

    <p>
      Cooldown: 20 Seconds
    </p>
    
    
  </div>,
 },

 {
  name: 'Lethal Tempo',
  icon: '../images/runes/lethalTempo.webp',
  id: '0dce20df-c3ce-42a9-b0c2-d2acea2b62e0',
  description: <div className='runeDescription'>
    <p>
      Gain stacks of attack speed when attacking enemy champions. Each stack increases <span className='stat--as'>Attack Speed</span>  by <span className='stat--as'>10–18%</span> (melee) or <span className='stat--as'>7–15%</span> (ranged). Stacks up to 6 times, stacks lasts for 6 seconds. When fully stacked, you gain 50 (melee) or 75 (ranged) Attack Distance.
    </p>
    <p>
      Stacks: {runesEffects.keystones.tempo}
    </p>
    <p>
      Attack Speed Bonus: {(runeFormulas.lethalTempo.as).toFixed(3)}
    </p>

     <p>
      Current bonus type: <u>{runesEffects.keystones.tempoType}</u>
     </p>
     <p>
      Switch bonus types  and stacks 
      <button onClick={() => {dispatch({type: 'toggleTempoType'})}}>Toggle type</button>
      <button onClick={() => {dispatch({type: 'tempoStacks'})}}>Change current stacks</button>
     </p>
  </div>
  
 },

 {
  name: 'First Strike',
  icon: '../images/runes/firstStrike.webp',
  id: '08831f5d-b7e5-4165-a589-017cf388f924',
  description: <div>
    <p>
      Dealing damage to an enemy champions within 0.25 seconds of engaging them in combat grants <span className='stat--armor'>5 Gold</span> and enables First Strike for 3 seconds. While the effect is active you deal 7% of <strong>post-mitigation</strong> damage inflicted as <span className='stat--vamp'>true damage</span>.
    </p>
    <p>
      After the effect ends gain gold equal to 100% (for melee characters) / 85% (for ranged characters) of <strong>bonus damage</strong>.
    </p>

    <p>
      Cooldown: {(20-(7/14*(currentLevel-1))).toFixed(1)} (20-13 based on level) seconds.
    </p>
  </div>,
 },

 {
  name: 'Glacial Augment',
  icon: "../images/runes/glacial.webp",
  id: '33675895-4045-429d-b2fd-b4d4aabe5cd2',
  description: <div className='runeDescription'>
    <p>Landing a basic attack on a champion champion will <span className='stat--moveSpeed'>slow</span>  them by <span className='stat--moveSpeed'>20% for 1.5 seconds</span>. (10 second cooldown per target).</p>
    
    <p>
      Immobilizing an enemy champion will cause 3 glacial rays to emanate from them towards you and other nearby enemy champions, creating icy zones that last 3 seconds. Enemies within the zone are slowed by <span className='stat--moveSpeed'>{Math.round(20 + bonus.health * 1.5/100)}%</span> (20 + <span className='stat--hp'> 1.5% of your bonus health</span>), and deal 12% reduced damage against you and your allies. The slow persists for 1.5 seconds after leaving the zone. (20 second cooldown)
    </p>
  </div>,
 }

];

// Main runes broken down by rune paths
const mainRunes = [
  {
    path: 'Domination',
    path_Id: '763258c4-3c21-4a77-bb40-04f1c3254fc4',
    icon: '../images/runes/domination.webp',
    runes: [
      {
        name: 'Scorch',
        icon: '../images/runes/scorch.webp',
        id: '7cea6e4f-010c-4bb9-948c-fe61fbea2968',
        slot: 0,
        description: <div className='runeDescription'>
          <p>
            Damaging an enemy with an ability deals an additional 28-42 (based on level) <span className='stat--ap'>magic damage</span> after 1 second (8 seconds cooldown).
          </p>

          <p>
            Damage (pre- / post-mitigation): <span className='stat--ap'>{Math.round(28 + (currentLevel - 1))}</span> / <span className='stat--ap'>{Math.round((28 + (currentLevel - 1)) * (1 - mod.defMagRed))}</span>
          </p>          
        </div>
      },

      {
        name: 'Psychic Wave',
        icon: '../images/runes/psychicWave.webp',
        id: '0e0b4fe0-4739-4717-a1ec-a73bf49b67bc',
        slot: 0,
        description: <div className='runeDescription'>
         <p>
          The next attack after damaging a champion with ability / next ability after damaging champion with an attack creates an explosion that deals <span className='stat--armor'>Adaptive damage</span> in a small area.</p>
          <p>
            Ranged champions deal <span className='stat--vamp'>70% Damage when used</span>
          </p>

          <p>
            Cooldown: 6 seconds.
          </p>

          <p title='Physical or magical based on your bonus attack and Ability Power'>Damage type: {runeFormulas.damagetype.description}</p>
          <p>Damage (pre/post-mitigation): {Math.round(runeFormulas.psychicWave.damage.raw)} / {Math.round(runeFormulas.psychicWave.damage.mitigated)}</p>
          <p>Damage <span className='stat--vamp'>ranged</span> (pre/post-mitigation): {Math.round(runeFormulas.psychicWave.damage.raw * 70 / 100)} / {Math.round(runeFormulas.psychicWave.damage.mitigated * 70 / 100)}</p>
          <p>Damage formula: 22-50 (+2 per level) (<span className='stat--ad'>+15% bonus AD</span>) (<span className='stat--ap'>+7.5% AP</span>)</p>
        </div>
      },

      {
        name: 'Shield Bash',
        icon: '../images/runes/shieldBash.webp',
        id: 'e1cf17ea-2aba-4e88-9d20-71640ca4871b',
        slot: 0,
        description: <div className='runeDescription'>
          <p>Damage (pre- / post-mitigation): {Math.round(runeFormulas.shieldBash.damage.raw)} / {Math.round(runeFormulas.shieldBash.damage.mitigated)} {runeFormulas.damagetype.description} damage.</p>

          <p>
            After gaining a healing or shielding effect, your next attack on an enemy champion is empowered to deal 15-50 (based on level) (<span className='stat--ad'>+15 bonus AD</span>) (<span className='stat--ap'>+10% AP</span>) bonus adaptive damage. Empowered attack goes on cooldown after 5 seconds of shield expiring. 
          </p>

          <p>
            7 Seconds cooldown.
          </p>
        </div>
      },

      {
        name: 'Sudden Impact',
        icon: '../images/runes/suddenImpact.webp',
        id: '95347d1b-0597-4b95-aade-d4cd886c645d',
        slot: 0,
        description: <div className='runeDescription'>
          <p>
            Effect is: {runesEffects.path.suddenImpact ? <span className='stat--hp'>Active</span> : <span className='stat--vamp'>Disabled</span>}.
          </p>
          <p>
            <button onClick={()=> {dispatch({type:'toggleSuddenImpact'})}}>Switch bonus penetration effect</button>
          </p>
          <p>After Exiting stealth or Using a dash, leap, blink, or teleport effect, damaging an enemy champion grants you <span className='stat--armor'>13 Armor Penetration</span> and <span className='stat--magres'>13 Magic Penetration </span>for 4 seconds.</p>

          <p>
            4 Seconds cooldown.
          </p>
        </div>
      },

      {
        name: 'Empowered Attack',
        icon: '../images/runes/empoweredAttack.webp',
        id:'6a16395f-ef11-4565-8894-1545edb4e612',
        slot: 1,
        description: <div className='runeDescription'>
          <p>Every 8 seconds the next attack against an enemy champion will be empowered, dealing 35-50 (based on level) bonus adaptive damage</p>

          <p>
            Bonus (pre/post mitigation): {Math.round(runeFormulas.empoweredAA.raw)} / {Math.round(runeFormulas.empoweredAA.mitigated)} {runeFormulas.damagetype.description} damage
          </p>
        </div>
      },

      {
        name: 'Cheap Shot',
        icon: '../images/runes/cheapShot.webp',
        id: 'a42d3c1c-b0cf-4a0c-8ae2-c1ac5d4c9eb6',
        slot: 1,
        description: <div className='runeDescription'>
          <p>
            Deal <span className='stat--vamp'>{10 + 35/14*(currentLevel-1)}</span> (10-45 based on level) bonus true damage to enemies whose movement is impaired.
          </p>          
        </div>
      },

      {
        name: 'Mark of the Weak',
        icon: '../images/runes/markOfTheWeak.webp',
        id: '699413fd-ea39-4e40-96d5-0ef4d09d1240',
        slot: 1,
        description: <div className='runeDescription'>
          <p>
            Using abilities to deal damage to deal damage to enemy champions marks them as weak, increasing damage taken by 4%-7% (increased at level 5, 9, 13).
          </p>
          <p>
            The mark disappears after they take ability damage 3 times or after 7 seconds.
          </p>

          <p>
            coldown: 15 seconds
          </p>
        </div>
      },

      {
        name: 'Eyeball Collector',
        icon: '../images/runes/eyeballCollector.webp',
        id: '09792921-c845-4e66-8f44-b2d34b1b4654',
        slot: 2,
        description: <div className='runeDescription'>
        <p>
          Current Stacks: {runesEffects.path.eyeballCollector}
        </p>

        <p>
          Bonus: {runeFormulas.eyeballCollector.bonus} {runeFormulas.eyeballCollector.type}
        </p>

        <p>
          <button onClick={() => {dispatch({type:'eyeball'})}}>Change stacks amount</button>
        </p>

        <p>
          Gain <span className='stat--ad'>1 Attack Damage</span> or <span className='stat--ap'>2 Ability Power</span> after each enemy takedown stacking up to 10 times.
        </p> 

        <p>
          At 10 stacks gain bonus <span className='stat--ad'>10 Attack Damage</span> or <span className='stat--ap'>20 Ability Power</span>
        </p>
        </div>
      },

      {
        name: 'Ingenious Hunter',
        icon: '../images/runes/ingeniousHunter.webp',
        id: '35673a93-0283-4944-8182-210570657f08',
        slot: 2,
        description: <div className='runeDescription'>
          Gain 20 Item Ability Haste. Gain a bonus 5 Item Ability Haste after each unique enemy champion takedown. Stacks up to 5 times.
        </div>
      },

      {
        name: 'Zombie Ward',
        icon: '../images/runes/zombieWard.webp',
        id: '06409904-eec6-48ec-982e-48cf34517bf1',
        slot: 2,
        description: <div className='runeDescription'>
           <p>
          Current Stacks: {runesEffects.path.zombieWard}
        </p>

        <p>
          Bonus: {runeFormulas.zombieWard.bonus} {runeFormulas.zombieWard.type}
        </p>

        <p>
          <button onClick={() => {dispatch({type:'zombie ward'})}}>Change stacks amount</button>
        </p>

          <p>
            Removing an enemy ward (excluding Zombie Wards) within 10 seconds of damaging it will summon an allied Zombie Ward in its place. Zombie ward has 1 health and lasts for 120 seconds.
          </p>
          
          <p>
          Gain <span className='stat--ad'>3 Attack Damage</span> or <span className='stat--ap'>6 Ability Power</span> for each ward takedown stacking up to 5 times.
          </p>

          <p>
          At 5 stacks gain bonus <span className='stat--ad'>10 Attack Damage</span> or <span className='stat--ap'>20 Ability Power</span>
        </p>
        </div>
      }
    ]
  },

  { 
  path: 'Precision',
  path_Id: '3008a5ce-324f-4146-bdbb-19cc67f7f077',
  icon: '../images/runes/precision.webp',
  runes: [
    {
      name: 'Brutal',
      icon: '../images/runes/brutal.webp',
      id: 'fe664075-22a7-44d8-b5aa-35678f45dc59',
      slot: 0,
      description: <div className='runeDescription'>
        <p>
          Bonus: {Math.round(12 + (7/14 * (currentLevel-1)))} / {Math.round((12 + (7/14 * (currentLevel-1)) * (1 - (runeFormulas.damagetype.type === 'physical' ? mod.defPhysRed : def.defMagRed))))} {runeFormulas.damagetype.description} damage
        </p>

        <p>
          Basic attacks deal 12-19 bonus <u>adaptive</u> damage <u>on-hit</u> against champions.
        </p>
      </div>
    },

    {
      name: 'Triumph',
      id: 'd6ef6071-597d-4286-aaba-70209db07f09',
      icon: '../images/runes/triumph.webp',
      slot: 0,
      description: <div className='runeDescription'>
        <p>
          <span className='stat--hp'>Maximum healing: {Math.round(atk.health / 10)}</span>
        </p>

        {champ.manaBase && (<p>
          <span className='stat--mana'>Mana restoration: {Math.round(atk.mana/10)}</span>
        </p>)}

        <p>
          Champion takedowns restore <span className='stat--hp'>10% missing Health</span> and 10% of <span className='stat--mana'>total mana</span> or <span className='stat--armor'>total energy</span>.
        </p>
      </div>
    },

    {
      name: 'Gathering Storm',
      id: '72a32aa9-ac31-4b44-abe5-af9dae2ee316',
      icon: '../images/runes/gatheringStorm.webp',
      slot: 0,
      description: <div className='runeDescription'>
  
        <div>
          <label>
            Set your <span className="stat--armor">Gathering Storm</span> stacks:
            {' '}<input
              type="number"
              value={runesEffects.path.gatheringStorm}
              onChange={(e) => {dispatch({type: 'gathering storm', payload: e.target.value})}}
            />
          </label>            
          <ul>
            <li>Stacks: {runesEffects.path.gatheringStorm}</li>
            <li>Game Time: {runesEffects.path.gatheringStorm*3}:00</li>
            <li>Bonus {runeFormulas.gatheringStorm.bonus} {runeFormulas.gatheringStorm.type}</li>
          </ul>
        </div>

        <p>
          Every <b>3 minutes</b> gain adaptive force:
        </p>
  
        <p>
          <span className='stat--ad'>Attack Damage: start from 2 AD</span>, each stack increments added value by 1 (2 = 2; 2 + 3 = 5; 2 + 3 + 4 = 9 and so on).
        </p>
  
        <p>
          <span className='stat--ap'>Ability Power: start from 4 AP</span>, each stack increments value by 2 (4 = 4; 4 + 6 = 10; 4 + 6 + 8 = 18 and so on).
        </p>
      </div>
    },

    {
      name: 'Last Stand',
      icon: '../images/runes/lastStand.webp',
      id: '8670a32f-d3d4-4662-82ac-8e7f95749912',
      slot: 1,
      description: <div className='runeDescription'>
        <p>
          When your health lower than <span className='stat--hp'>{Math.round(atk.health * 60 / 100)}</span> (60%), attacks launched at champions deal 5-11% bonus {runeFormulas.damagetype.description} (adaptive) damage.
        </p>
        
        <p>
          Grants maximum bonus damage when health is lower than <span className='stat--hp'>{Math.round(atk.health * 30 / 100)}</span> (30%).
        </p>
      </div>
    },

    {
      name: 'Giant Slayer',
      icon: '../images/runes/giantSlayer.webp',
      id: 'c0094161-1f7f-478c-b619-b1c675524ff9',
      slot: 1,
      description: <div className='runeDescription'>
        <p>
          Deal bonus damage based on enemy Champion's <span className='stat--hp'>bonus Health</span> (+1% per 100 bonus hp) up to 16% at <span className='stat--hp'>1600 bonus Health</span>
        </p>        
      </div>
    },

    {
      name: 'Coup de Grace',
      icon: '../images/runes/coupDeGrace.webp',
      id: '78c61594-676f-4118-b190-0089e9e808cd',
      slot: 1,
      description: <div className='runeDescription'>
        <p>
          Deal 8% increased damage (excluding <span className='stat--vamp'>true damage</span>) to enemy champions below <span className='stat--hp'>40% maximum Health</span>.
        </p>
      </div>
    },

    {
      name: 'Legend: Alacrity',
      icon: 'images/runes/legendAlacrity.webp',
      id: '79482cca-80b1-4c54-a05c-6e48b75196e0',
      slot: 2,
      description: <div className='runeDescription'>
        
        <p>Change current Stacks: {runesEffects.path.legendAlacrity - 3}</p>
        <label htmlFor="alacrity-stacks">          
          <input type="range"
          min="0"
          max='17'
          name="alacrity-stacks"
          value={runesEffects.path.legendAlacrity - 3}
          onChange={(e) => {dispatch({type: 'legend alacrity', payload: e.target.value})}} />
        </label>
        <p>
          Gain <span className='stat--as'>3% (+1% per Legend stack) bonus Attack Speed</span> up to 20%
        </p>
         
        <p>
          Gain Legend stacks per 15 points earned (up to 17 times):
        </p>

        <ul>
          <li>
            15 points for champion takedown;
          </li>
          <li>15 points for epic monster;</li>
          <li>5 points for large monster kill;</li>
          <li>3 points for minion kill;</li>
        </ul>
      </div>
    },

    {
      name: 'Legend: Tenacity',
      icon: '../images/runes/legendTenacity.webp',
      id: '45bd6ef9-2474-41b1-8c95-f64e9cfae79e',
      slot: 2,
      description: <div className='runeDescription'>
        <p>Gain 3% Tenacity and 3% Slow Resist. Get Legend stacks and get up to 15% Tenacity and 20% Slow Resist.</p>

        <p>
          Points per stack: 15 / 15 / 15 / 30 / 15 / 30 / 15 / 30 / 15 / 30 / 15 / 30.
        </p>

        <ul>
          <li>
            15 points for champion takedown;
          </li>
          <li>15 points for epic monster;</li>
          <li>5 points for large monster kill;</li>
          <li>3 points for minion kill;</li>
        </ul>
      </div>
    },

    {
      name: 'Legend: Bloodline',
      icon: '../images/runes/legendBloodline.webp',
      id: '7fc6ab32-54f6-4cef-9662-ebe7b94f7192',
      slot: 2,
      description: <div className='runeDescription'>
        <p>Gain <span className='stat--vamp'>1% Omnivamp</span>. Gain Legend Stacks to get  and get up to <span className='stat--vamp'>7% Omnivamp</span>.</p>

        <p>
          Points per stack: 30 / 45 / 45 / 30 / 45 / 45
        </p>

        <ul>
          <li>
            15 points for champion takedown;
          </li>
          <li>15 points for epic monster;</li>
          <li>5 points for large monster kill;</li>
          <li>3 points for minion kill;</li>
        </ul>
      </div>
    }
  ]
  },

  {
    path: 'Resolve',
    path_Id: '95d9ea7b-df3e-4ddc-a0a2-5c485ee37d2d',
    icon: '../images/runes/resolve.webp',
    runes: [
      {
        name: 'Font of Life',
        icon: '../images/runes/fontOfLife.webp',
        id: "d4bbb5f0-357f-488f-b039-1cd7fa1eb1fb",
        slot: 0,
        description: <div className='runeDescription'>
          <p><span className='stat--hp'>Healing</span> (ally / self): <span className='stat--hp'>{Math.round(runeFormulas.fontOfLife.healAlly)} / {Math.round(runeFormulas.fontOfLife.healSelf)} hp</span></p>

          <p>Hitting an enemy champion with an attack or ability marks them. When allies or you damage marked champions, receive healing. Each ally (and you) can trigger healing once per mark.</p>

          <p>Healing formula:</p>
          <ul>
            <li>
              Ally: <span className='stat--hp'>3% of your Maximum Health</span> + <span className='stat--ap'>15% of your Ability Power</span>
            </li>
            <li>
              Self: <span className='stat--hp'>1% of your Maximum Health</span> + <span className='stat--ap'>5% of your Ability Power</span>
            </li>
          </ul>

          <p>Mark Duration: 3 seconds</p>

          <p>Cooldown: 15s for Melee champions, 20s for Ranged champions.</p>
          <p>
            subsequent heals from other ally's marks are <u>reduced to 25% effectivenes</u>
          </p>
        </div>
      },

      {
        name: 'Courage of the Colossus',
        icon: '../images/runes/colossus.webp',
        id: '7033ce9c-05df-4d2f-876a-881cb7879b0d',
        slot: 0,
        description: <div className='runeDescription'>
          <p className='stat--armor'>Shield size: {Math.round(runeFormulas.colossus.shield)}</p>

          <p>
            Gain a shield that absorbs 25-45 (based on level) (<span className='stat--hp'>+1% of your Maximum Health</span>) for 3 seconds when you immobilize an enemy champion.
          </p>

          <p>
            Cooldown: 10 seconds.
          </p>
        </div>
      },

      {
        name: 'Nullifying Orb',
        icon: '../images/runes/nullOrb.webp',
        id: '75c9746d-2e79-477a-9731-37d66d932f45',
        slot: 0,
        description: <div className='runeDescription'>
          <p className='stat--armor'>Shield size: {Math.round(runeFormulas.nullOrb.shield)}</p>

          <p>
            If you take damage that puts you under <span className='stat--hp'>{Math.round(atk.health * 35 / 100)} (35% of Maximum) health</span>, gain a shield that absorbs 60-190 (based on level) damage for 4 seconds. 
          </p>

          <p>
            Cooldown: 60 seconds
          </p>
        </div>
      },

      {
        name: 'Second Wind',
        icon: '../images/runes/secondWind.webp',
        id: '1fe514d5-9a9a-4981-85bb-f9b09ba8ecbb',
        slot: 1,
        description: <div>
          <p>Gain <span className='stat--hp'>5 Health</span> every 5 seconds.</p>

          <p>
            After taking damage from an enemy regenerate <span className='stat--hp'>6 (+2% of your missing) Health</span> over the next 5 secons. Effect is doubled for melee champions.
          </p>
        </div>
      },

      {
        name: 'Loyalty',
        icon: '../images/runes/loyalty.webp',
        id: 'fdc55ad8-6c21-492d-952f-b8f9611039db',
        slot: 1,
        description: <div className='runeDescription'>
            <p>Bonus defence: {runesEffects.path.loyalty ? <span className='stat--hp'>Active</span> : <span className='stat--vamp'>Disabled</span>}</p>
            <p>
              <button onClick={() => {dispatch({type: 'toggleLoyalty'})}}>Switch rune status</button>
            </p>

            <p>
              You gain <span className='stat--armor'>2 Armor</span> and <span className='stat--magres'>5 Magic Resistance</span>. Your closest ally champion gains <span className='stat--armor'>5 Armor</span> and <span className='stat--magres'>2 Magic Resistance</span>.
            </p>
        </div>
      },

      {
        name: 'Bone Plating',
        icon: '../images/runes/bonePlating.webp',
        id: '465f0ab5-7416-465c-84fc-4583784ad2d5',
        slot: 1,
        description: <div className='runeDescription'>
          <p>
            When taking damage from a champion, the current and next 3 champion abilities or attacks against you within 1.5 seconds deal <span className='stat--armor'>{Math.round(30 + 30/14*(currentLevel-1))} (30-60 based on level) less damage</span>.
          </p>

          <p>
            Coooldown: 30 seconds.
          </p>
        </div>
      },

      {
        name: 'Overgrowth',
        icon: '../images/runes/overgrowth.webp',
        id: 'd4cc0d13-8fb2-42c7-95ca-ad344fff6717',
        slot: 2,
        description: <div className='runeDescription'>
          <p>Current stacks: {runesEffects.path.overgrowth}</p>
          <p className='stat--hp'>Bonus Health: {Math.round((runesEffects.path.overgrowth * 3))}</p>

          <label htmlFor="overgrowth-stacks">
            <p>Change stacks:</p>
            <input type="number"
             min="0"
             value={runesEffects.path.overgrowth}
             onChange={(e) => {dispatch({type: 'overgrowth', payload: e.target.value})}} />
            </label>     

          <p>
            When 2 enemies or 1 monster dies near your champion, permanently gain <span className='stat--hp'>3 Maximum Health</span>. Can be gained infinitely. Gain a <span className='stat--hp'>3% Maximum health</span> bonus upon reaching 30 stacks.
          </p>
        </div>
      },

      {
        name: 'Revitalize',
        icon: '../images/runes/revitalize.webp',
        id: 'dc069b87-cd0b-49a5-aa31-a6d0692aadd2',
        slot: 2,
        description: <div className='runeDescription'>
          <p>Gain a 5% amplification effect when healing or granting shields. If the target's health lower than 20%, amplify effect by additional 10%</p>
        </div>
      },

      {
        name: 'Perseverance',
        icon: '../images/runes/perseverance.webp',
        id: 'aeaf58c5-84f5-4e45-865f-eec4b76f7ff5',
        slot: 2,
        description: <div className='runeDescription'>
          <p>Defence bonus: {runesEffects.path.perseverance ? <span className='stat--hp'>Active</span> : <span className='stat--vamp'>Disabled</span>}</p>

          <p><button onClick={() => {dispatch({type: 'togglePerseverance'})}}>Switch defence bonus</button></p>

          <p>Gain 10% Tenacity. Gain <u className='stat--armor'>{Math.round(runeFormulas.perseverance)}</u>  (16-30 based on level) <span className='stat--armor'>Armor</span> and <span className='stat--magres'>Magic Resistance</span></p> for 1.5 seconds when immobilized. Refresh duration time when immobilized multiple times
        </div>
      },

      {
        name: 'Onslaught',
        icon: '../images/runes/onslaught.png',
        id: '356a1607-3771-42aa-9e23-1cd606270abb',
        slot: 2,
        description: <div className='runeDescription'>
          <p>
            Gain <span className='stat--moveSpeed'>5% Tenacity</span> plus additional Tenacity (up to 20%) based on number of surrounding enemy champions.
          </p>
        </div>
      }

    ]
  },

  {
    path: 'Inspiration',
    path_Id: '9c9a3d34-896b-48d1-8002-a1b55fd94ae2',
    icon: '../images/runes/inspiration.webp',
    runes: [
      {
        name: 'Sweet Tooth',
        icon: '../images/runes/sweetTooth.webp',
        id: '3201c3c7-9b60-452f-9de3-282aa75b1788',
        slot: 0,
        description: <div className='runeDescription'>
          <p>Increases <span className='stat--armor'>Honeyfruit</span> healing by <span className='stat--hp'>20%</span>.</p>

          <p>
            Whenever you or nearby ally eats a <span className='stat--armor'>Honeyfruit</span>, gain 15 gold.
          </p>
        </div>
      },

      {
        name: 'Hexflash',
        icon: '../images/runes/hexflash.webp',
        id: '59152308-79a2-4ff2-9bdc-378b2d9f1a12',
        slot: 0,
        description: <div className='runeDescription'>
          <p>While flash is on cooldown, it is replaced by <span className='stat--armor'>Hexflash</span>. You can blink to a new location after channeling for 2 seconds.</p>

          <p>
          When channeled for less than 1s, you will dash the distance as if you channeled for 1s.
          </p>

          <p>
            Cooldown: 25 seconds.
          </p>
        </div>
      },

      {
        name: 'Item Crafting',
        icon: '../images/runes/itemCrafting.webp',
        id: '222ca439-41ff-4254-a563-b90b2f8c65e3',
        slot: 0,
        description: <div className='runeDescription'>
          <p>Every 3 minutes you can buy 1 item outside of the buy zone at the additional cost of <span className='stat--armor'>50 gold</span></p>
        </div>
      },

      {
        name: 'Transcendence',
        icon: '../images/runes/transcendence.webp',
        id: '3c34c87b-bd25-4eb6-bd12-2b2b36350169',
        slot: 1,
        description: <div className='runeDescription'>

        <p>Ability Haste: {runesEffects.path.transcendence ? <span className='stat--hp'>Active</span> : <span className='stat--vamp'>Disabled</span>}</p>

        <p><button onClick={() => {dispatch({type: 'toggleTranscendence'})}}>Switch AH bonus</button></p>

          <p>Gain a bonus when reaching the following levels:</p>
          <ul>
            <li>
              1: gain 6 Ability Haste;
            </li>
            <li>
              6: gain 6 Ability Haste;
            </li>
            <li>
              11: After Basic Ability hits the target reduce 15% of ability's cooldown time (8 seconds cooldown).
            </li>
          </ul>
        </div>
      },

      {
        name: 'Future\'s Market',
        icon: '../images/runes/futuresMarket.webp',
        id: '5709fe7e-4fc5-4333-972e-7a8359264d35',
        slot: 1,
        description: <div className='runeDescription'>
          <p>You can purchase items on credit from 2 minutes onward.</p>
          <p>
            Credit limit: 145 + 7/minute
          </p>
        </div>
      },

      {
        name: 'Pathfinder',
        icon: '../images/runes/pathfinder.webp',
        id: '51f7595f-4b61-4fe9-a636-1d47916ff41b',
        slot: 1,
        description: <div className='runeDescription'>
          <p>River Movespeed bonus: {runesEffects.path.pathfinder ? <span className='stat--hp'>Active</span> : <span className='stat--vamp'>Disabled</span>}</p>

          <p><button onClick={() => {dispatch({type: 'togglePathfinder'})}}>toggle Movement speed bonus</button></p>

          <p>
            Gain <span className='stat--moveSpeed'>50 bonus Movement Speed</span> in the river.
          </p>

          <p>
            When in the river and out of combat restore <span className='stat--mana'>2% missing Mana</span> or <span className='stat--hp'>2% missing Health</span> (whichever is lower) every 1 second.
          </p>
        </div>
      },

      {
        name: 'Nimbus Cloak',
        icon: '../images/runes/nimbusCloak.webp',
        id: 'a632eba9-b305-45b7-a2c2-22ee46bc12c3',
        slot: 2,
        description: <div className='runeDescription'>
          After using a <b>Summoner Spell</b> (Flash, Ignite, etc), gain <span className='stat--moveSpeed'>10-40% Movement Speed bonus</span> for 3 seconds. bonus depends on spell cooldown.
        </div>
      },

      {
        name: 'Demolish',
        icon: '../images/runes/demolish.webp',
        id: '9ca63fae-dde6-4ecc-a298-5bf1ef564322',
        slot: 2,
        description: <div className='runeDescription'>
          <p>Number of turret plates destroyed {runesEffects.path.turretPlates}</p>
          
          <p className='stat--ad'>Damage (you are with friendly minions without ally champions nearby): {Math.round(runeFormulas.demolish.damage)}</p>
          <p><button onClick={() => {dispatch({type: 'plates'})}}>Change number of destroyed plates</button></p>

          
          

          <p>
            When you are within 550 range of enemy turret, gain a charge every 0.5 seconds up to 6 times.
          </p>

          <p>
            When fully charged, your next attack against the turret deals an additional <span className='stat--ad'>200 (<span className='stat--hp'>+30% Max Health</span>) physical damage</span>.
          </p>

          <p><sub>*Based on numbers of destroyed plates, turret <span className='stat--armor'>Armor value</span> equals: <span className='stat--armor'>25 / 65 / 105 / 185 / 265</span>. Tier 2 turrets have 15 armor, so ~like 0 plates. Tier 3 / Tier 1 without plates have 25 armor.</sub></p>

          <p>
            Cooldown: 35 seconds.
          </p>          
        </div>
      },

      {
        name: 'Manaflow Band',
        icon: '../images/runes/manaflow.webp',
        id: 'e8a1b612-1307-49c4-a7c1-c576bbea9c0f',
        slot: 2,
        description: <div className='runeDescription'>
          <p>Current bonus: <span className='stat--mana'>{Number(runesEffects.path.manaflow * 30)} mana</span></p>
          <p><button onClick={() => dispatch({type: 'manaflow'})}>Add stack (resets after max)</button></p>
          <p>Hitting an enemy with ability or empowered attack permanently increases your <span className='stat--mana'>Maximum mana</span> by <span className='stat--mana'>30</span> up to <span className='stat--mana'>300</span></p>
        </div>
      }
    ]
  }

 
]

// tracking the runes that are active for current champion
const [chosenRunes, setChosenRunes] = useState({
  keystone: keystones[0].id,
  path: mainRunes[0].path_Id,
  primary: [mainRunes[0].runes[0].id, mainRunes[0].runes[3].id, mainRunes[0].runes[6].id],
  secondary: mainRunes[1].runes[0].id
});

const secondaryRunes = useMemo(() => {
  const chosenPath = chosenRunes.path;

  return mainRunes
  .filter(path => path.path_Id !== chosenPath)
  .flatMap(path => path.runes);
}, [chosenRunes])

const updateKeystone = (e) => {
  dispatch({type:'reset-keystones'})
  setChosenRunes(oldRunes => ({
    ...oldRunes,
    keystone: e.target.value
  }));
};

const updateSecondary = (e) => {
  dispatch({type:'reset-path'})
  setChosenRunes(oldRunes => ({
    ...oldRunes,
    secondary: e.target.value
  }));
};

const updateRunePath = (e) => {
  dispatch({ type: 'reset-path' });

  const newPathId = e.target.value;
  const selectedPathObject = mainRunes.find(rune => rune.path_Id === newPathId);

  setChosenRunes(oldRunes => {
    const newState = {
      ...oldRunes,
      path: newPathId
    };

    if (selectedPathObject) {
      newState.primary = [selectedPathObject.runes[0].id, selectedPathObject.runes[3].id, selectedPathObject.runes[6].id];
    }

    // Find the secondary rune from the non-selected path
    const nonSelectedPathRunes = mainRunes.find(path => path.path_Id !== newPathId).runes;
    newState.secondary = nonSelectedPathRunes[0].id;

    return newState;
  });
};

// with main rune at index
const updateMainRune = (e, index) => {
    dispatch({ type: 'reset-path' });
    setChosenRunes((oldRunes) => ({
      ...oldRunes,
      primary: oldRunes.primary.map((value, i) => (i === index ? e.target.value : value)),
    }));
  };

// render the description of rune at selected index
const mainRune = (index) => {
  const selectedPath = mainRunes.find((path) => path.path_Id === chosenRunes.path);
  if (selectedPath) {
    const selectedRune = selectedPath.runes.find((rune) => rune.id === chosenRunes.primary[index]);
    if (selectedRune) {
      return (
        <><h3 className='runeName'>{selectedRune.name}</h3>
      <img src={selectedRune.icon} alt={selectedRune.name} />
      {selectedRune.description}</>
      );
    }
  }
  return <p>No description available for the selected rune.</p>;
};

const secondaryRune = () => {
    const chosenPath = chosenRunes.path;

    const secondaryRunes =  mainRunes
    .filter(path => path.path_Id !== chosenPath)
    .flatMap(path => path.runes);

    const selectedRune = secondaryRunes.find((rune) => rune.id === chosenRunes.secondary);    

      return (
        <><h3 className='runeName'>{selectedRune.name}</h3>
      <img src={selectedRune.icon} alt={selectedRune.name} />
      {selectedRune.description}</>
      );
    
};

return (
  <div className='runeWrapper'>
    <select name="keystoneselector" id="keystone-selector" className='keystoneSelector' onChange={updateKeystone} value={chosenRunes.keystone}>
      <option value="" disabled>Select a keystone</option>
      {keystones.map((keystone) => (
        <option key={keystone.id} value={keystone.id}>{keystone.name}</option>
      ))}
    </select> 

    <div className='keystoneTile'>
      <h3 className='runeName'>{keystones.find(k => k.id === chosenRunes.keystone)?.name}</h3>
      <img src={keystones.find(k => k.id === chosenRunes.keystone)?.icon} alt={chosenRunes.keystone.name} />
      {keystones.find(k => k.id === chosenRunes.keystone)?.description}
    </div>

    <select name="primary-runes" id="rune-primary-selector" className='pathSelector' onChange={updateRunePath} value={chosenRunes.path}>
      <option value='' disabled>Select a path</option>
      {mainRunes.map((paths) => (
        <option key={paths.path_Id} value={paths.path_Id}>{paths.path}</option>
      ))}
    </select>

    <div className='runeTile'>
        <select name="primary-slot-1" id="rune-primary-1" value={chosenRunes.primary[0]} onChange={(e) => updateMainRune(e, 0)}>
        <option value='' disabled>Select a rune</option>
      {mainRunes
        .filter((path) => path.path_Id === chosenRunes.path)
        .flatMap((item) =>
          item.runes
            .filter((rune) => rune.slot === 0)
            .map((rune) => (
              <option value={rune.id} key={rune.id}>
                {rune.name}
              </option>
            ))
        )}
    </select>
    {mainRune(0)}
    </div>

    <div className='runeTile'>
        <select name="primary-slot-2" id="rune-primary-2" value={chosenRunes.primary[1]} onChange={(e) => updateMainRune(e, 1)}>
          <option value='' disabled>Select a rune</option>
      {mainRunes
        .filter((path) => path.path_Id === chosenRunes.path)
        .flatMap((item) =>
          item.runes
            .filter((rune) => rune.slot === 1)
            .map((rune) => (
              <option value={rune.id} key={rune.id}>
                {rune.name}
              </option>
            ))
        )}
    </select>
    {mainRune(1)}
    </div>

    <div className='runeTile'>
        <select name="primary-slot-3" id="rune-primary-3" value={chosenRunes.primary[2]} onChange={(e) => updateMainRune(e, 2)}>
          <option value='' disabled>Select a rune</option>
      {mainRunes
        .filter((path) => path.path_Id === chosenRunes.path)
        .flatMap((item) =>
          item.runes
            .filter((rune) => rune.slot === 2)
            .map((rune) => (
              <option value={rune.id} key={rune.id}>
                {rune.name}
              </option>
            ))
        )}
    </select>
    {mainRune(2)}
    </div>

    <select name="secondary-rune" id="secondary-rune-selector" className='secondarySelector' onChange={updateSecondary} value={chosenRunes.secondary}>
    <option value='' disabled>Secondary rune</option>
    {secondaryRunes.map((rune) => (
      <option key={rune.id} value={rune.id}>{rune.name}</option>
    ))}
    </select>

    <div className='secondaryTile'>
     {secondaryRune()}
    </div>
  </div>
);

};

export default Runes