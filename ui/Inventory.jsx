import { useState, useEffect, useMemo } from "react";
import '../app/styles/inventory.css'

const Inventory = ({index, champ, currentLevel, base, bonus, total, mod, atk, def, handleBonusChange, updateItemEffects, itemEffects}) => {

  const attacker = atk;
  const target = def;
  // target's physical and magical damage reduction respectively
  const modifier = 1 - (mod.defPhysRed);
  const modifierMres = 1 - (mod.defMagRed);

  // colculations for Sunfire Aegis aoe damage
  const sunFireEffect = ((16 + 9 / 14 * (currentLevel - 1)) + (bonus.health * 8 / 100));

  // tracking and calculating heartsteel item effect
  const [heartsteelStacks, setHeartsteelStacks] = useState(0);

  const updateHeartsteel = (event) => {
    event.preventDefault();
    const value = Number(event.target.value);
    setHeartsteelStacks(value); 
  };

  const heartSteelProc = () => {
    const procDamage = (120 + (attacker.health * 5/100)) * (modifier) * (15/100);
    setHeartsteelStacks(oldStacks => oldStacks + procDamage)
  }

  // variables for items
  let physicalItemData = [
    {
      name: 'Empty slot',

      icon: '/images/portraits/DefaultSquare.png',


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>Empty slot</div>

    },
    
    {
      name: 'Sundered Sky',

      icon: '/images/items/Sundered_Sky.webp',


      health: 300,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 40,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          <ul>
            <li className="stat--hp">300 Max Health</li>
            <li className="stat--ad">40 Attack Damage</li>
            <li>15 Ability Haste</li>
          </ul>

          <p className="stat--ad">Current target pre / post-mitigation damage: {Math.round(atk.attack * 160/100)} / {Math.round(atk.attack * 160/100 * modifier)}</p>
          <p className="stat--hp">base healing: {Math.round(base.attack * 140 / 100)}</p>

          <p>
            <b>Lightshield Strike:</b> The first attack against an enemy champion <span className="stat--critChance">Critically Strikes</span> (6s cooldown per target), dealing <span className="stat--ad">160% damage</span> and restoring Health (equal to <span className="stat--ad">140% of base Attack Damage</span> <span className="stat--hp">+ 6% of missing Health</span>) to you.
          </p>
        </div>

    },
    
    {
      name: 'Eclipse',

      icon: '/images/items/Eclipse.webp',


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 60,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          <ul>
            <li className="stat--ad">+60 Attack Damage</li>
            <li>+20 Ability Haste</li>
          </ul>

          <p className="stat--ad">Damage Melee / Ranged (current target): {Math.round(def.health * 6/100 * modifier)} / {Math.round(def.health * 3/100 * modifier)}</p>
          <p className="stat--armor">Shield Melee / Ranged: {Math.round(160 + bonus.attack * 40 / 100)} / {Math.round(80 + bonus.attack * 20 / 100)}</p>

          <p>
            <b>Ever Rising Moon:</b> Hitting an enemy champion with 2 separate attacks or abilities within <b>1.8</b> seconds deals <span className="stat--ad">bonus physical damage</span> equal to <span className="stat--ad">6% of the target's Max Health (3% for ranged champions)</span>, and grants you a shield that absorbs damage equal to <span className="stat--armor">160</span>  <span className="stat--ad">+ 40% bonus Attack Damage</span> (80 + 20% bonus Attack Damage for ranged champions) for 2 seconds. (6s cooldown)
          </p>
        </div>

    },

    {
      name: 'Terminus (stacked)',

      icon: '/images/items/Terminus.webp',


      health: 0,
      mana: 0,
      armor: (5 + 1 * Math.floor((currentLevel -1)/4)) * 3,
      magres: (5 + 1 * Math.floor((currentLevel -1)/4)) * 3,
      attack: 40,
      ap: 0,
      as: (base.asBase * 0.30),
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 33/100,
      magPen: 33/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          <ul>
            <li className="stat--ad">+40 Attack Damage</li>
            <li className="stat--as">+30% ({(base.asBase*0.3).toFixed(3)}) Attack Speed</li>            
          </ul>

          <p>Fully stacked bonus:</p>

          <ul>
            <li className="stat--armor">+{Math.round((5 + 1 * Math.floor((currentLevel -1)/4)) * 3)} Armor</li>
            <li className="stat--magres">+{Math.round((5 + 1 * Math.floor((currentLevel -1)/4)) * 3)} Magic Resistance</li>
            <li className="stat--armor">+33% Armor Penetration</li>
            <li className="stat--magres">+33% Magic Penetration</li>
          </ul>

          <p>!!! Item doesn't stack with <span className="stat--armor">Last Whisper</span> items (<span className="stat--armor">Mortal Reminder and Serylda's Grudge</span>) and <span className="stat--armor">Black Cleaver</span>. </p>
          <p>
            <b>Shadow:</b> Attacks deal <span className="stat--ap">35</span> (<span className="stat--ap">{Math.round(35 * (modifierMres))}</span> for current target) bonus <span className="stat--ap">magic damage</span> on hit.
          </p>
          <p>
            <b>Juxtaposition:</b> lternate between Light and Dark on-hits when attacking.
          </p>

          <p>
            <span className="stat--armor">Light attacks</span> grant <b>5-8</b> (scales at levels 5/ 9 / 13) <span className="stat--armor">Armor</span> and <span className="stat--magres">Magic Resist</span> for 5 seconds on hit.
          </p>

          <p>
            <span className="stat--ap">Dark attacks</span> Dark attacks grant 11% <span className="stat--armor">Armor Pen</span>  and <span className="stat--magres"> Magic Pen</span> for 5 seconds on hit.
          </p>

          <p>
            Each on-hit effect stacks up to 3 times.
          </p>
        </div>

    },  
    
    {
      name: 'Spear of Shojin',

      icon: '/images/items/Shojin.webp',


      health: 300,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 50,
      ap: 0,
      as: 0,
      moveSpeed: (base.moveSpeed * 0.05),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 25,
      armorReduction: 0,

      description:
        
        <div className='itemDescription'>

          <ul>
          <li className="stat--hp">+300 Health</li>
          <li className="stat--ad">+45 Attack Damage</li>
          <li>+20 Ability Haste</li>
          </ul>
          
          <p>
            <b>Dargon Awakening</b>: Increases Ability Haste of basic abilities by 25% for 10 seconds after casting an Ultimate, and grants <span className="stat--moveSpeed">25% bonus Movement Speed</span> that decays over 3 seconds. Scoring a takedown within 10 seconds refreshes the ability's duration (20s cooldown).
          </p>
          <p>
            <b>Rising Dragon:</b> <span className="stat--moveSpeed">+5% Movement Speed</span>
          </p>

          
         </div>

    },

    {
      name: 'Titanic Hydra',

      icon: '/images/items/Titanic_Hydra.webp',
      
      health: 450,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      armorReduction: 0,
      
      description: <div className='itemDescription'>
        <ul>
          <li className="stat--hp">+450 Health</li>
          <li className="stat--ad">+{Math.round(15 + bonus.health * 0.025)} Attack Damage*</li>          
        </ul>              
        

        <p>
          <b>Colossus:</b> Gain <span className="stat--ad">Attack Damage</span> equal to <span className="stat--ad">15</span> + <span className="stat--hp">2.5% bonus Health</span>
        </p>
  
        <p>
          <b>Cleave: </b> Every 1.75 seconds, your next attack deals bonus physical damage equal to 25 + 3% bonus Health (pre / post-mitigation): <span className="stat--ad">{Math.round(25 + bonus.health * 3 / 100)} / {Math.round((25 + bonus.health * 3 / 100) * (1- modifier))}</span> (also applies to turrets), creating a shockwave that deals physical damage equal to 80 + 10% bonus Health: <span className="stat--ad">{Math.round(80 + bonus.health * 10 / 100)} / {Math.round((80 + bonus.health * 10 / 100) * (1- modifier))}</span> to enemies behind the target. (Ranged champions deal 75% of the damage.)
        </p>
      </div>
    },  
    
    {
      name: 'Guardian Angel',

      icon: '/images/items/Guardian_Angel.png',


      
      health: 0,
      mana: 0,
      armor: 40,
      magres: 0,
      attack: 40,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      armorReduction: 0,
      
      description: <div className='itemDescription'>
        <ul>
          <li className='stat--ad'>+{40} Attack Damage</li>
          <li className='stat--armor'>+{40} Armor</li>
        </ul>

        <p>
          <b>Resurrect: </b> Upon taking lethal damage, restores <span className='stat--hp'> 50% BASE ({Math.round(base.health / 2)}) Health</span> and <span className="stat--mana"> 30% ({Math.round(total.mana * 0.3)}) of maximum Mana</span> after 4 Seconds of Stasis. (210s. Cooldown)
        </p>
      </div>
    },
  
    {
      name: 'Bloodthirster',

      icon: "/images/items/Bloodthirster.png",
      
      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 50 + (10 + Number(currentLevel)),
      ap: 0,
      as: base.asBase*10/100,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      armorReduction: 0,

      
      description: <div className='itemDescription'>
        <ul>
          <li className='stat--ad'>+{50} Attack Damage</li>
          <li className='stat--critChance'>+{Number(0.25*100)}% Critical Rate</li>
        </ul>
        
        <p>Conditional bonus above 50% HP (included)</p>

        <ul>
          <li className="stat--ad">+{Math.round(10 + Number(currentLevel))} Attack Damage</li>
          <li className="stat--as">+10% ({(base.asBase*10/100).toFixed(3)}) Attack Speed</li>
        </ul>
  
        <p><b>Bloody: </b> <span className="stat--vamp">+12% Physical Vamp</span></p>
        <p><b>Bloodsworn: </b> Gain <span className="stat--ad">11-25 (based on level) Attack Damage</span> and <span className="stat--as">10% Attack Speed</span> when your health is above <span className="stat--hp"> 50%</span>.</p>
      </div>
    },

    {
      name: 'Magnetic Blaster',

      icon: '/images/items/Magnetic_Blaster.png',

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: (base.asBase * 0.35),
      moveSpeed: (base.moveSpeed * 5 / 100),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: (25/100),
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,
      bootsPassive: false,

      description: 
        <div className='itemDescription'>
          <ul>
            <li className="stat--critChance">+25% Critical Rate</li>
            <li className="stat--as">+35% ({(base.asBase * 0.35).toFixed(3)}) Attack Speed</li>
            <li className="stat--moveSpeed">+5% ({Math.round(base.moveSpeed * 0.05)}) Movement Speed</li>
          </ul> 

          <p className="stat--ap">Discharge damage pre/post mitigation: {(50 + (5 * (currentLevel-1)))} / {Math.round((50 + (5 * (currentLevel-1))) * modifierMres)}</p>
          

          <p>
            <b>Fervor:</b> <span className="stat--moveSpeed">+ 5% Movement speed</span>
          </p>

          <p>
            <b>Energized:</b> Generates energized attack from movement and basic attacks
          </p>

          <p>
            <b>Power Blitz: </b>Energized attacks generate 25% faster, gain 125 attack range (50 range for melee attacks), and deal <span className="stat--ap">50 - 120 (based on level) magic damage</span>. Damage bounces to 5 nearby enemies and can <span className="stat--critChance">critically strike</span>. 
          </p>
        </div>

    },

  
    {
      name: 'Blade of the Ruined King',

      icon: "/images/items/Blade_of_the_Ruined_King.png",
      
      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 25,
      ap: 0,
      as: (base.asBase * 0.35),
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      armorReduction: 0,
      
  
      description: <div className='itemDescription'>
      
        <ul>
          <li className='stat--ad'>+{25} Attack Damage</li>
          <li className='stat--as'>+35% ({Number(base.asBase * 0.35).toFixed(3)}) Attack Speed</li>
        </ul>        
  
        <p>
          <b>Thirst:</b> <b className='stat--vamp'>+12% Physical Vamp</b>
        </p>        
  
        <p>
          <b>Ruined Strikes:</b> Attacks deal <span className='stats--ad'>bonus physical damage</span> equal to the <span className='stat--ad'>6% ({Math.round(Math.max(target.health * (6 / 100) * (modifier), 15))})</span>( <span className="stat--ad">9% ({Math.round(Math.max(target.health * (9 / 100) * (modifier), 15))})</span> for Melee) current target Health on-hit. Min damage: 15. Max damage vs monsters: 90
        </p>
  
        <p>
          <b>Drain:</b> Hitting a champion with 3 consecutive attacks or ablilties deals <span className="stat--ap">{30 + 5 * (currentLevel - 1)} Magic Damage</span> (30 + 5 per champion level) and steals 25% of their Move Speed for 2 Seconds (60s Cooldown).
        </p>  
      </div>
    },
    
    {
      name: 'Runaan\'s Hurricane',

      icon: "/images/items/Runaan's_Hurricane.png",
      
      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: (bonus.attack > bonus.ap || bonus.ap == 0 ? 20 : 0),
      ap: (bonus.ap > bonus.attack ? 40 : 0 ),
      as: (base.asBase * 0.35),
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      armorReduction: 0,
      
      description:
        <div className='itemDescription'>

          <ul>
            <li className='stat--as'>+35% ({(base.asBase * 0.35).toFixed(3)}) Attack Speed</li>
            <li><span className="stat--ad">+20 Attack Damage</span> or <span className="stat--ap">+40 Ability Power</span></li>
          </ul>

          <p className="stat--ad">Bolts pre/post mitigation damage: {Math.round(total.attack * 0.55)} / {Math.round(total.attack * 0.55 * modifier)}</p>
          
                    
  
          <p>
            <b>Wind's Favor:</b> Gain <span className="stat--ad">20 Attack Damage</span> or <span className="stat--ap">40 Ability Power</span> (Adaptive).
          </p>

          <p>
            <b>Wind Blade</b> Attacks deal <span className="stat--ad">15 bonus physical damage</span>  on-hit against targets.
          </p>
          <p>Attacks strike 2 additional nearby enemies. Each attack  dealing <span className="stat--ad">55% of Attack Damage</span>. These attacks CAN critically hit and trigger on-hit effects.</p>        
        </div>
    },
  
    {
      name: 'Youmuu\'s Ghostblade',

      icon: "/images/items/Youmuus.png",
      
      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 55,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 15,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,      
      ah: 15,
      armorReduction: 0,    
  
      description:
        <div className='itemDescription'>
          
          <ul>
            <li className='stat--ad'>+{55} Attack Damage</li>
            <li>+{15} Ability Haste</li>
            <li>+{15} Lethality/flat armor penetration</li>
          </ul>
          
  
          <p>Moving builds up <b>Momentum</b> stacks, granting up to 40 movement speed at 100 stacks. Attacking removes all <b>Momentum</b> Stacks decay when movement impaired. </p>
          <p>Attacking with max <b>Momentum</b> consumes all stacks, grants <b className='stat--as'>25% ({Number(base.asBase*0.25).toFixed(3)}) Attack Speed</b> for 4 seconds.</p>
        </div>
    },
  
    {
      name: 'Duskblade of Draktharr',

      icon: "/images/items/Duskblade.png",
      
      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 55,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 18,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,      
      ah: 10,
      armorReduction: 0,
      
  
      description:
        <div className='itemDescription'>

          <ul>
            <li className='stat--ad'>+{55} Attack Damage</li>
            <li>+{10} Ability Haste</li>
            <li>+{18} Lethality/flat armor penetration</li>  
          </ul>

          <p className="stat--ad">Nightstalker pre/post mitigation damage: {Math.round(60 + (100/14)*(currentLevel - 1))} / {Math.round((60 + (100/14)*(currentLevel - 1)) * modifier)}</p>             
  
          <p><b>Nightstalker:</b> The first attack against a champion deals <span className="stat--ad">60 - 160 (based on level) physical damage</span> and slows target by 99% for 0.35s (10s cooldown). Champions takedown refresh cooldown duration</p>
        </div>
    },
  
    {
      name: 'Sterak\'s Gage',

      icon: "/images/items/Steraks.png",
      
      health: 400,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      armorReduction: 0,    
      item_shield: (bonus.health * 0.75),
      
      description:
        <div className='itemDescription'>
          <ul>
            <li className='stat--hp'>+{400} Max Health</li>
            <li className="stat--ad">+{Math.round(base.attack*0.5)} Attack Damage</li>
          </ul>

          <p className="stat--armor">Lifeline shield: {Math.round(bonus.health * 0.75)}</p>

          
          <h3>Heavy Handed: <span className='stat--ad'>+50% of BASE AD</span> as BONUS attack damage</h3>
  
          <p><b>Lifeline:</b> Damage that puts you under <span className='stat--hp'>{Math.round(total.health*0.35)} (35% MAX ) health</span> triggers a <span className="stat--armor"> {bonus.health * 0.75} <span className="stat--hp">(75% of BONUS HP)</span> points shield</span>  that decays Over 3 seconds (90 sec Cooldown)</p>
  
          <p><b>Sterak's fury:</b> Triggering Lifeline also  grants <span className='stat--ap'>30% Tenacity</span> for 8 seconds.</p>
        </div>
    },
  
    {
      name: 'Infinity Edge',
      
      icon: "/images/items/Infinity.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 60,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 25 / 100,
      critMultiplier: 30 / 100,
      armorReduction: 0,
      ah: 0,      
  
      description:
        <div className='itemDescription'>

          <ul>
            <li className='stat--ad'>+{60} Attack Damage</li>
            <li className='stat--critChance'>+{0.25*100}% Critical Rate</li>
          </ul>          
  
          <p><b>Infinity:</b> Critical Strikes deal 30% more Critical Damage</p>
        </div>
    },

    {
      name: 'Mortal Reminder',      
      
      icon: "/images/items/Mortal.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 30,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: (25/100),
      critMultiplier: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--ad'>+{30} Attack Damage</li>
            <li className="stat--critChance">+25% Critical Chance</li>
            <li>Last Whisper: 16-33% Armor Penetration</li>
          </ul>          

          <p><b>Sepsis:</b> Dealing <span className='stat--ad'>Physical Damage</span> to enemy champions apply 40% <abbr title="Reduces healing and regeneration" className="stat--vamp">Grievous wounds</abbr> to target for 3 seconds.</p>      
        </div>
    },

    {
      name: 'Manamune',
      icon: "/images/items/Manamune.png",

      health: 0,
      armor: 0,
      magres: 0,
      attack: 25 + Math.round(total.mana * 0.015),
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,      
      armorReduction: 0,
      mana: 300,
      ah: 20,

      description: 
        <div className="itemDescription">

          <ul>
            <li className="stat--ad">+{25} Attack Damage</li>
            <li className='stat--mana'>+{300} Max mana</li>
            <li>+{20} Ability Haste</li>
          </ul>
          

          <p><b>Awe:</b> grants <abbr title="1.5% of maximum mana"><span className="stat--mana">{Math.round(total.mana * 0.015)}</span></abbr> Attacks damage, refunds <span className='stat--mana'>15%</span> of all Mana spent</p>


          <p><b>Mana Charge:</b> Increase max Mana by <span className='stat--mana'>10</span> every attack or when Mana is spent. Triggers up to 3 times every 12 seconds Caps at <span className='stat--mana'>700</span> bonus Mana and transforms into <b>Manamune</b> </p>
        </div>


    },

    {
      name: 'Muramana',
      icon: "/images/items/Muramana.png",

      health: 0,      
      armor: 0,
      magres: 0,
      attack: 25,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,      
      armorReduction: 0,
      mana: 1000,
      ah: 20,

      description: 
        <div className="itemDescription">

          <ul>
            <li className="stat--ad">+{25} Attack Damage</li>
            <li className='stat--mana'>+{1000} Max mana</li>
            <li>+{20} Ability Haste</li>
          </ul>         
         

          <p><b>Awe:</b> grants <abbr title="2% of maximum mana"><span className="stat--mana">{Math.round(total.mana * 0.02)}</span></abbr> Attacks damage, refunds <span className='stat--mana'>15%</span> of all Mana spent</p>


          <p><b>Shock:</b> When an <b>attack</b> hits an enemy champion drains <abbr title="2.5% "><span>{Math.round(total.mana * 0.025)}</span></abbr> and deals it as <span className='stat--ad'>Physical damage</span>.</p>
          <p><b>Abilities</b> drains <abbr title="4%"><span className="stat--mana">{Math.round(total.mana * 0.04)}</span></abbr> <b>current</b> mana and deals additional <abbr title="4% of mana drained + 6% of your Attack Damage"><span className="stat--ad">{Math.round((total.mana * 0.04) + (total.attack * 0.06))} Physical damage</span></abbr>. Only triggers when remaining mana is above <abbr title="20%"><span className="stat--mana">{Math.round(total.mana * 0.2)}</span></abbr>. Single attack or ability procs only once for one champion.</p>
        </div>
    },

    {
      name: 'Nashor\'s Tooth',
      icon: "/images/items/Nashors.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: (bonus.attack > bonus.ap || bonus.ap == 0 ? 30 : 0),
      ap: (bonus.ap > bonus.attack ? 60 : 0 ),
      as: Number(base.asBase * 0.45),
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description:
        <div className="itemDescription">

          <ul>
            <li className='stat--as'>+ 45% ({(base.asBase * 0.45).toFixed(3)}) Attack Speed</li>
            <li>+20 Ability Haste</li>
            <li><span className="stat--ad">+30 Attack Damage</span> or <span className="stat--ap">+60 Ability Power</span></li>
          </ul>

          <p className="stat--ap">on-hit damage pre/post mitigation: {Math.round(15 + (bonus.attack * 0.25) + (bonus.ap * 0.25))} / {Math.round((15 + (bonus.attack * 0.25) + (bonus.ap * 0.25))*(modifierMres))}</p>
           
          

          <p><b>Magic Fang:</b> Gain <span className="stat--ad">30 Attack Damage</span> or <span className='stat--ap'>60 Ability Power</span> <abbr title="Based of what BONUS stat you have more. Calculated whenever you select this item from the list"><b>(Adaptive)</b></abbr>.</p>

          <p><b>Gnaw:</b> When basic attack hits enemy champions, it will cause <span className="stat--ap">15 (<span className="stat--ad">+25% bonus AD</span>) (+25% AP) magic damage</span></p>
        </div>
    },

    {
      name: 'Black Cleaver(stacked)',
      icon: "/images/items/BC.png",

      health: 350,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 40,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction:0.24,    

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--hp'>+{350} Max Health</li>
            <li className='stat--ad'>+{40} Attack Damage</li>
            <li>+{20} Ability Haste</li>  
          </ul>

          <p><b>Sunder:</b>dealing <span className="stat--ad">Physical Damage</span> to a champion reduces their <span className="stat--ad">Armor</span> by <b>4%</b>, stacking 6 times up to <b>24%</b></p>
        </div>

    },

    {
      name: 'Chempunk Chainsword',
      icon: "/images/items/Chempunk_Chainsword.png",

      health: 250,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 45,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,
      bootsPassive: false,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+250 Max Health</li>
            <li className="stat--ad">+45 Attack Damage</li>
            <li>+15 Ability Haste</li>
          </ul>

          <p>
            <b>Punishment: </b>Dealing physical damage to enemy champions applies <span className="stat--critChance">50% Grievous Wounds</span>.
          </p>
        </div>

    },

    {
      name: 'Trinity Force',
      icon: "/images/items/Trinity.png",

      health: 250,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 30,
      ap: 0,
      as: (base.asBase * 0.3),
      moveSpeed: (base.moveSpeed * 0.05),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 30,
      armorReduction:0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--hp'>+{250} Max Health</li>
            <li className='stat--ad'>+{30} Attack Damage</li>
            <li className='stat--as'>+30% ({(base.asBase * 0.3).toFixed(3)}) Attack Speed</li>
            <li>+{25} Ability Haste</li>
            <li className="stat--moveSpeed">+{Math.round(base.moveSpeed * 0.05)} Movement Speed</li>
          </ul>
           
           <p className="stat--ad">Spellblade damage pre/post mitigation: {Math.round(base.attack * 2)} /  {Math.round((base.attack * 2) * (1- modifier))}</p>         

          <p><b>Fervor: </b>+5% Move Speed</p>
          <p><b>Spellblade:</b>After casting an ability next basic attack deals <span className="stat--ad">200% of BASE AD as physical damage</span> (1.5s Cooldown)</p>
          <p><b>Valor:</b> Attacks grant <b>20 Move Speed</b> and kills grant <b>60 Move Speed</b> for 2 seconds. Bonuses do not stack. Effect halved for ranged heroes</p>
        </div>,
    },

    {
      name: 'Maw of Malmortius',
      icon: "/images/items/MOM.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 45,
      attack: 55,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction:0,

      description:
      <div className='itemDescription'>

        <ul>
          <li className="stat--ad">+{55} Attack Damage</li>
          <li className="stat--magres">+{45} Magic Resistance</li>
          <li>+10 Ability Haste</li>
        </ul>

        <p className="stat--magres">Shield potency: {Math.round(60 + (340/14*(currentLevel-1)))}</p>

        <p>
         <b>Demonbane:</b> <span className="stat--critChance">20% of the damage dealt by attacks or 15% physical damage dealt by abilities</span>  is converted into a magic shield that absorbs up to <span className="stat--magres">60-400 (based on level) magic damage</span>.
        </p>

      </div>
    },

    {
      name: 'Death\'s Dance',
      icon: "/images/items/DD.png",

      health: 0,
      mana: 0,
      armor: 40,
      magres: 0,
      attack: 35,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction:0,

      description:
        <div className="itemDescription">
          <ul>
            <li className="stat--ad">+{35} Attack Damage</li>
            <li className="stat--armor">+{40} Armor</li>
            <li>+{15} Ability Haste</li>
          </ul>

          <p className="stat--hp">Healing on takedown: {Math.round(total.health * 0.12)} Health</p>

          <p><b>Cauterize:</b> <span className='stat--ad'>35% Physical Damage </span> received from champions <span className="stat--ad">(15% for ranged champions)</span> is dealt to you over 3 seconds as <b>True Damage</b> instead</p>
          <p><b>Dance:</b> Champion's takedowns cleanse Cauterize's remaining damage and heal you for <span className="stat--hp">12% of Max health</span> over 2 seconds</p>
        </div>
    },

    {
      name: 'Phantom Dancer',
      icon: "/images/items/PD.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 25,
      ap: 0,
      as: (base.asBase * 0.3),
      moveSpeed: (base.moveSpeed * 0.05),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      ah: 0,
      armorReduction:0,

      description:
        <div className="itemDescription">

          <ul>
            <li className="stat--ad">+{25} Attack Damage</li>
            <li className="stat--critChance">+{25}% Critical Rate</li>
            <li className='stat--as'>+{30}% ({(base.asBase * 0.3).toFixed(3)}) Attack Speed</li>
            <li className="stat--moveSpeed">+{Math.round(base.moveSpeed * 0.05)} Movement Speed</li>
          </ul>

          <p><b>Shadowwalk:</b>+5% Movement Speed</p>

          <p><b>Spectral Waltz</b>: gain +7% ({Math.round(base.moveSpeed * 0.07)}) Movement Speed when you attack for 3 seconds. After attacking 4 times gain 25% ({(base.asBase * 0.25).toFixed(3)}) Attack Speed for the same duration</p>
        </div>
    },

    {
      name: 'Phantom Dancer (Stacked)',
      icon: "/images/items/PD.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 25,
      ap: 0,
      as: (base.asBase * 0.3) + (base.asBase * 0.25),
      moveSpeed: (base.moveSpeed * 0.05),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      ah: 0,
      armorReduction:0,

      description:
        <div className="itemDescription">

          <ul>
            <li className="stat--ad">+{25} Attack Damage</li>
            <li className="stat--critChance">+{25}% Critical Rate</li>
            <li className='stat--as'>+{30}%, +25% ({((base.asBase * 0.3)+ (base.asBase * 0.25)).toFixed(3)}) Attack Speed</li>
            <li className="stat--moveSpeed">+{Math.round(base.moveSpeed * 0.12)} Movement Speed</li>
          </ul>        
          

          <p><b>Shadowwalk:</b>+5% Movement Speed</p>

          <p><b>Spectral Waltz</b>: gain +7% ({Math.round(base.moveSpeed * 0.07)}) Movement Speed when you attack for 3 seconds. After attacking 4 times gain 25% ({(base.asBase * 0.25).toFixed(3)}) Attack Speed for the same duration</p>
        </div>
    },

    {
      name: 'Wit\'s End',
      icon: "/images/items/WitsEnd.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 50,
      attack: 0,
      ap: 0,
      as: (base.asBase * 0.45),
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction:0,

      description:
        <div className="itemDescription">

          <ul>
            <li className="stat--as">+45 %({(base.asBase * 0.45).toFixed(3)}) Attack Speed</li>
            <li className='stat--magres'>+{50} Magic Resistance</li>
          </ul>

          <p className="stat--ap">on-hit pre/post mitigation damage: {Math.round(15 + 65 / 14 * (currentLevel - 1))} / {Math.round((15 + 65 / 14 * (currentLevel - 1))*modifierMres)}</p>
 
         

          <p><b>At Wit's End:</b> basic attacks deal <span className='stat--ap'>15-80 bonus magic damage</span>. While below <span className='stat--hp'> 50% of maximum {total.health * 0.5} health</span> dealing damage to enemy champions heals you for (100% for Melee/33% for ranged) damage dealt</p>
        </div>
    },
  
    {
      name: 'Essence Reaver',
      icon: "/images/items/ER.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 40,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      ah: 20,
      armorReduction:0,

      description:
        <div className="itemDescription">

          <ul>
            <li className="stat--ad">+{40} Attack Damage</li>
            <li className='stat--as'>+{25}% Critical Rate</li>
            <li>+{20} Ability Haste</li>
          </ul>

          

          <p>After Attacking a champion your next ability or empowered attack will deal <span className="stat--critChance">20-30% ({20 + 1 * Math.round(total.critChance * 10)}%) more damage</span> based on critical rate. 4s Cooldown. Cooldown reduced for 1s for each basic attack against a champion</p>
          <p>attacks restore <span className='stat--mana'>3% missing mana</span> on hit</p>
        </div>
    },

    {
      name: 'Stormrazor',
      icon: "/images/items/Stormrazor.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 40,
      ap: 0,
      as: (base.asBase * 0.2),
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      ah: 0,
      armorReduction:0,

      description:
        <div className="itemDescription">

          <ul>
            <li className="stat--ad">+{40} Attack Damage</li>
            <li className="stat--critChance">+{25}% Critical Rate</li>
            <li className="stat--as">+20% ({(base.asBase * 0.2).toFixed(3)}) Attack Speed</li>
          </ul>

          <p className="stat--ap">Discharge damage pre/post mitigation: {65 + 5 * (currentLevel - 1)} / {Math.round((65 + 5 * (currentLevel - 1))*modifierMres)}</p>       

          <p><b>Energized:</b> Moving and attacking generate Energized attack. Energized attack deals <span className='stat--ap'> 65 + 5 per level bonus Magic Damage</span> and slow by 75% for 0.5 seconds</p>
        </div>
    }, 
    
    {
      name: 'Serylda\'s Grudge',
      icon: "/images/items/Serylda.png",


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 40,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--ad'>+{40} Attack Damage</li>
            <li>+{15} Ability Haste</li>
            <li>Last Whisper: 16-33% Armor Penetration</li>
          </ul>

          <p><b>Icy:</b> Damaging and active abilities and empowered attacks slow enemies by 30% for 1 second</p>
        </div>
    },

    {
      name: 'Solari Chargeblade',
      icon: "/images/items/Solari.png",


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: (base.asBase * 0.4),
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--critChance'>+{25}% Critical Rate</li>
            <li className="stat--as">+{40}% ({(base.asBase * 0.4).toFixed(3)}) Attack Speed</li>
            <li>+20 Ability Haste</li>
          </ul>

          <p className="stat--ap">Proc damage pre/post mitigation: {Math.round(35 + 3 * currentLevel)} / {Math.round((35 + 3 * currentLevel)*modifierMres)}</p>

          <p><b>Sunburst:</b> Using an ability gathers you a stack of <span className='stat--magres'>Radiance</span> for 10 seconds, up to 3 Charges. Attacks that hit enemies use the charge to deal <span className='stat--ap'> 35 + 3 per level bonus magic damage on hit</span>. This bonus can <span className="stat--vamp">Critically strike</span>. Each unique ability can generate 1 charge every 2 seconds</p>
        </div>
    },

    {
      name: 'Navori Quickblades',
      icon: "/images/items/Navori.png",


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 45,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--ad">+{45} Attack Damage</li>
            <li className='stat--critChance'>+{25}% Critical Rate</li>
            <li>+{15} Ability Haste</li>
          </ul>          

          <p><b>Deft Strike:</b> <span className="stat--vamp">Critical Attakcs</span> reduce your non-ultimate ability cooldowns by 20% of their remaining cooldown</p>
        </div>
    },

    {
      name: 'Edge of Night',
      icon: "/images/items/EdgeOfNight.png",


      health: 250,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 50,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 8,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
          <li className="stat--hp">+{250} Max Health</li>
          <li className='stat--ad'>+{50} Attack Damage</li>
          <li className="stat--armor">+8 Armor Penetration</li>
          </ul>


          <p><b>Gouge: +{8} Armor Penetration</b></p>
          <p><b>Annul:</b> Grants a spell shield that blocks one hostile ability. <b>35 seconds</b> cooldown</p>
        </div>
    },
    
    // {
    //   name: 'Hullbreaker',
    //   icon: "/images/items/Hullbreaker.png",


    //   health: 325,
    //   mana: 0,
    //   armor: 0,
    //   magres: 0,
    //   attack: 55,
    //   ap: 0,
    //   as: 0,
    //   moveSpeed: 0,
    //   flatArmPen: 0,
    //   flatMagPen: 0,
    //   armPen: 0,
    //   magPen: 0,
    //   critChance: 0,
    //   critMultiplier: 0,
    //   ah: 0,
    //   armorReduction: 0,

    //   description: 
    //     <div className='itemDescription'>

    //       <h3 className='stat--hp'>+{325} Max Health</h3>
    //       <h3 className='stat--ad'>+{55} Attack Damage</h3>

    //       <p><b>Boarding Party:</b> When no allied champions are within 1200 units you get:</p>
    //       <p><b><u>for Melee:</u> </b> <span className="stat--armor"><abbr title="4 + 46 / 14 * (level - 1)">{Math.round(4 + 46 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className="stat--magres"><abbr title="4 + 16 / 14 * (level - 1)">{Math.round(4 + 16 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
    //       <p><b><u>for Ranged:</u> </b> <span className="stat--armor"><abbr title="2 + 23 / 14 * (level - 1)">{Math.round(2 + 23 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className="stat--magres"><abbr title="2 + 8 / 14 * (level - 1)">{Math.round(2 + 8 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
    //       <p>And deal <b>20%</b> additional Damage to Structures</p>

    //       <p>Nearby Large Minions gain:</p>
    //       <p><b>(for Melee) </b><span className='stat--ad'>{Math.round(40 + 130 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(20 + 65 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
    //       <p><b>(for Ranged) </b><span className='stat--ad'>{Math.round(20 + 60 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(10 + 30 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
    //       <p>Also 10% bonus size and deal 200% bonus damage to turrets</p>
    //     </div>
    // },

    // {
    //   name: 'Hullbreaker (Stacked Melee)',
    //   icon: "/images/items/Hullbreaker.png",


    //   health: 325,
    //   mana: 0,
    //   armor: (Math.round(4 + 46 / 14 * (currentLevel - 1))),
    //   magres: (Math.round(4 + 16 / 14 * (currentLevel - 1))),
    //   attack: 55,
    //   ap: 0,
    //   as: 0,
    //   moveSpeed: 0,
    //   flatArmPen: 0,
    //   flatMagPen: 0,
    //   armPen: 0,
    //   magPen: 0,
    //   critChance: 0,
    //   critMultiplier: 0,
    //   ah: 0,
    //   armorReduction: 0,

    //   description: 
    //     <div className='itemDescription'>

    //       <h3 className='stat--hp'>+{325} Max Health</h3>
    //       <h3 className='stat--ad'>+{55} Attack Damage</h3>

    //       <p><b>Boarding Party:</b> When no allied champions are within 1200 units you get:</p>
    //       <p><b><u>for Melee:</u> </b> <span className="stat--armor"><abbr title="4 + 46 / 14 * (level - 1)">{Math.round(4 + 46 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className="stat--magres"><abbr title="4 + 16 / 14 * (level - 1)">{Math.round(4 + 16 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
    //       <p><b><u>for Ranged:</u> </b> <span className="stat--armor"><abbr title="2 + 23 / 14 * (level - 1)">{Math.round(2 + 23 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className="stat--magres"><abbr title="2 + 8 / 14 * (level - 1)">{Math.round(2 + 8 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
    //       <p>And deal <b>20%</b> additional Damage to Structures</p>

    //       <p>Nearby Large Minions gain:</p>
    //       <p><b>(for Melee) </b><span className='stat--ad'>{Math.round(40 + 130 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(20 + 65 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
    //       <p><b>(for Ranged) </b><span className='stat--ad'>{Math.round(20 + 60 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(10 + 30 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
    //       <p>Also 10% bonus size and deal 200% bonus damage to turrets</p>
    //     </div>
    // },

    // {
    //   name: 'Hullbreaker (Stacked Ranged)',
      
    //   icon: "/images/items/Hullbreaker.png",


    //   health: 325,
    //   mana: 0,
    //   armor: Math.round(2 + 23 / 14 * (currentLevel - 1)),
    //   magres: Math.round(2 + 8 / 14 * (currentLevel - 1)),
    //   attack: 55,
    //   ap: 0,
    //   as: 0,
    //   moveSpeed: 0,
    //   flatArmPen: 0,
    //   flatMagPen: 0,
    //   armPen: 0,
    //   magPen: 0,
    //   critChance: 0,
    //   critMultiplier: 0,
    //   ah: 0,
    //   armorReduction: 0,

    //   description: 
    //     <div className='itemDescription'>

    //       <h3 className='stat--hp'>+{325} Max Health</h3>
    //       <h3 className='stat--ad'>+{55} Attack Damage</h3>

    //       <p><b>Boarding Party:</b> When no allied champions are within 1200 units you get:</p>
    //       <p><b><u>for Melee:</u> </b> <span className="stat--armor"><abbr title="4 + 46 / 14 * (level - 1)">{Math.round(4 + 46 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className="stat--magres"><abbr title="4 + 16 / 14 * (level - 1)">{Math.round(4 + 16 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
    //       <p><b><u>for Ranged:</u> </b> <span className="stat--armor"><abbr title="2 + 23 / 14 * (level - 1)">{Math.round(2 + 23 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className="stat--magres"><abbr title="2 + 8 / 14 * (level - 1)">{Math.round(2 + 8 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
    //       <p>And deal <b>20%</b> additional Damage to Structures</p>

    //       <p>Nearby Large Minions gain:</p>
    //       <p><b>(for Melee) </b><span className='stat--ad'>{Math.round(40 + 130 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(20 + 65 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
    //       <p><b>(for Ranged) </b><span className='stat--ad'>{Math.round(20 + 60 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(10 + 30 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
    //       <p>Also 10% bonus size and deal 200% bonus damage to turrets</p>
    //     </div>
    // },

    {
      name: 'Divine Sunderer',
      icon: "/images/items/DivineSunderer.png",


      health: 425,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 25,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 25,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+{425} Max Health</li>
            <li className='stat--ad'>+{25} Attack Damage</li>
            <li>+25 Ability Haste</li>
          </ul>

          <p className="stat--ad">Spellblade proc (current target) as melee/ranged champ: {Math.round((target.health * 0.1)* (modifier))} / {Math.round((target.health * 0.07)* (modifier))}</p>

          <p className="stat--hp">Healing as melee/ranged champ: {Math.round((target.health * 0.07))} / {Math.round((target.health * 0.03))}</p>

          <p><b>Spellblade:</b>After using an ability your next attack within 10 seconds will deal <span className="stat--hp">10% of Target's Max health</span> as bonus <span className="stat--ad">Physical damage</span> (7% if ranged attack)</p>
          <p>Heal for <span className="stat--hp">7% of target's Max Health (3% for ranged attack)</span>.</p>
          <p>1.5s Cooldown. Damage is reduced against structures</p>
        </div>
    },

    {
      name: 'Serpent\'s Fang',
      icon: "/images/items/Serpent.webp",


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 50,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 15,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--ad'>+{55} Attack Damage</li>
            <li >+{10} Ability Haste</li>
            <li>+{15} Armor Penetration</li>
          </ul>

          <p><b>Shield Reaver:</b> Dealing damage to an enemy champion reduces any shields they gain for 3s. Melee champions apply (10% of bonus Attack Damage + 40)% shield reduction, capped at 60%; while ranged champions apply (10% of bonus Attack Damage + 25)% shield reduction, capped at 45%. When you damage an enemy who is unaffected by Shield Reaver, all shields on them are reduced by the same values.</p>
        </div>

    },

    
    {
      name: 'Immortal Shieldbow',
      icon: "/images/items/ISB.webp",


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 40,
      ap: 0,
      as: (base.asBase * 0.15),
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--ad">+{40} Attack Damage</li>
            <li className='stat--critChance'>+{25}% Critical Rate</li>
            <li className='stat--as'>+15% ({(base.asBase * 0.15).toFixed(3)}) Attack Speed</li>
            <li className="stat--vamp">+5% Physical Vamp</li>
          </ul>

          

          <p><b>Lifeline:</b> Damage that puts you under <span className='stat--hp'>{Math.round(total.health * 0.35)} (35% of Max) Health</span> grants a shield that will absorb <span className="stat--armor">{Math.round(250 + 300/14*(currentLevel - 1))} (250-550 based on level) damage</span> for 5 seconds (90 seconds cooldown).</p>
          <p><b>Battle Furor:</b> Triggering lifeline grants <span className='stat--vamp'>8% Physical Vamp</span> for 8 seconds</p>
        </div>
    },

    {
      name: 'The Collector',
      icon: "/images/items/Collector.webp",


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 40,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 10,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0.25,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--ad'>+{40} Attack Damage</li>
            <li className="stat--critChance">+{25}% Critical Rate</li>
            <li>+10 Armor Penetration</li>
          </ul>

          <p className="stat--vamp">Execution Treshold (current target) {Math.round(target.health*0.05)} HP</p>         

          <p><b>Death And Taxes:</b> Dealing Damage that would leave an enemy champion below <span className="stat--hp">5% health</span> execute them. Champion kills grant additional <span className="stat--armor">25 Gold.</span></p>
        </div>

    },
    
  ];

  let magicalItemData = [
    {
      name: 'Psychic Projector',
      icon: "/images/items/Psychic_Projector.webp",


      health: 300,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 60,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          <ul>
            <li className="stat--hp">+300 Max Health</li>
            <li className="stat--ap">+60 Ability Power</li>
            <li className="stat--magres">+7% Magic Penetration</li>
            <li>+15 Ability Haste</li>
          </ul>

          <p className="stat--armor">Shield (Melee / Ranged): {Math.round(30 + atk.ap * 10 / 100 + bonus.health * 5 / 100)} / {Math.round((30 + atk.ap * 10 / 100 + bonus.health * 5 / 100) * 60/100)}</p>

          <p>
            <b>Conversion:</b> Gain <span className="stat--ap">Ability Power</span> equal to <span className="stat--hp">3% of bonus Health.</span> 
          </p>

          <p>
            <b>Projection:</b> When taking champion damage, gain a non-stacking shield that absorbs damage equal to <span className="stat--armor">30 <span className="stat--ap">(+10% AP)</span> <span className="stat--hp">(+5% of bonus Health)</span> for 3 seconds (for ranged champions, the shield absorbs damage equal to 60% of this value)</span> . Triggers every 3 seconds.
          </p>
        </div>

    },

    {
      name: 'Luden\'s Echo',
      icon: "/images/items/Ludens.png",


      health: 0,
      mana: 300,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 85,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--ap'>+{85} Ability Power</li>
            <li className='stat--mana'>+{300} Max mana</li>
            <li>+{20} Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul>

          <p className="stat--ap">Discord discharge damage pre/post mitigation {Math.round(110 + total.ap * 0.1)} / {Math.round((110 + total.ap * 0.1)*(modifierMres))}</p>
          
          <p><b>Discordic Echo:</b> Moving and casting abilities gain stacks of <b>Discord</b>. At <b>100</b> stacks your next active ability or Empowered attack will deal <span className="stat--ap"> 110 + 10% AP bonus magic damage</span> to your target and up to 3 mearby enemies</p>
        </div>

    },

    {
      name: 'Crown Of The Shattered Queen',
      icon: "/images/items/Crown_Queen.png",


      health: 0,
      mana: 200,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 60,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: (7/100),
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,
      bootsPassive: false,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--ap">+60 Ability Power</li>
            <li className="stat--mana">+200 Max Mana</li>
            <li>+20 Ability Haste</li>
            <li className="stat--magres">+7% Magic penetration</li>
          </ul>        
          

        <p><b>Safeguard: </b>Grant a spell shield that blocks the next enemy ability. When the shield is broken, reduce incoming damage by <span>50% for 1s</span> (40s cooldown).</p>

        <p>
          <b>Poise:</b> Provide <span className="stat--ap">20 Ability Power (included in calculations)</span> while safeguarded. If you deal magic damage to enemy champions while using an active ability, it will reduce Safeguard's cooldown.
        </p>
        </div>

    },

    {
      name: 'Morellonomicon',
      icon: "/images/items/Morellonomicon.png",


      health: 150,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 75,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+150 Max Health</li>
            <li className="stat--ap">+{75} Ability Power</li>
            <li>+{20} Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul> 

          <p><b>Affliction:</b> Dealing <span className="stat--ap">Magic Damage</span> applies <span className="stat--vamp">50% Grievous Wounds</span> to enemy (Reduces the effectiveness of healing and Regeneration effects).</p>
        </div>

    },


    {
      name: 'Rabadon\'s Deathcap',
      icon: "/images/items/Rabadon.png",


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 90,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className='stat--ap'>+{90} Ability Power</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul> 
          
          <p><b>Overkill:</b> Increases <span className="stat--ap">Ability Power</span> by <b>20% - 45%</b> (based on level)</p>          
        </div>       

    },

    {
      name: 'Rylai\'s Crystal Scepter',
      icon: "/images/items/Rylais.png",


      health: 350,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 70,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+{350} Max Health</li>
            <li className="stat--ap">+{70} Ability Power</li>
          </ul>

          <p><b>Icy:</b> Damaging active abilities and empowered attacks slow enemies by 30% for 1 second.</p>
        </div>

    },

    {
      name: 'Liandry\'s Torment',
      icon: "/images/items/Liandry.png",


      health: 250,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 75,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+{250} Max Health</li>
            <li className="stat--ap">+{75} Ability Power</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul>
          

          <p className="stat--ap">Damage per tick (pre/ post-mitigation): {Math.round(def.health * (0.004 + atk.ap * 0.005/100))} / {Math.round((def.health * (0.004 + atk.ap * 0.005/100)) * modifierMres)} </p>

          <p><b>Torment:</b> Damaging Abilities or empowered attacks deal <span className="stat--ap"> <span className="stat--hp">0.4% </span> (+0.005% AP) of enemy Max HP bonus magic damage</span> each second over 3 seconds</p>
        </div>

    },

    {
      name: 'Rod of Ages',
      icon: "/images/items/ROA.png",


      health: 250,
      mana: 300,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 60,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--health">+{250} Max Health</li>
            <li className="stat--ap">+{60} Ability Power</li>
            <li className="stat--mana">+{300} Max mana</li>
            <li className="stat--magres">+7% Magic Penetration</li>    
          </ul>             

          <p><b>Eternity:</b> restore <span className="stat--mana">Mana</span> equal to 15% damage taken from champions. Regen <span className="stat--hp">Health</span> equal to 20% of mana spent Capped at 25 health per cast.</p>
          <p><b>Veteran:</b> Each stack provides <span className="stat--hp">25 Health (up to 250)</span>, <span className="stat--mana">10 Mana (up to 100)</span> and <span className="stat--ap">6 Ability Power (up to 60)</span>. Gain 1 stack each 45 seconds. 10 stacks maximum</p>
        </div>

    },

    {
      name: 'Rod of Ages (stacked)',
      icon: "/images/items/ROA.png",


      health: 500,
      mana: 400,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 120,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--health">+{450} Max Health</li>
            <li className="stat--ap">+{120} Ability Power</li>
            <li className="stat--mana">+{400} Max mana</li>  
            <li className="stat--magres">+7% Magic Penetration</li> 
          </ul>               

          <p><b>Eternity:</b> restore <span className="stat--mana">Mana</span> equal to 15% damage taken from champions. Regen <span className="stat--hp">Health</span> equal to 20% of mana spent Capped at 25 health per cast.</p>
          <p><b>Veteran:</b> Each stack provides <span className="stat--hp">25 Health (up to 250)</span>, <span className="stat--mana">10 Mana (up to 100)</span> and <span className="stat--ap">6 Ability Power (up to 60)</span>. Gain 1 stack each 45 seconds. 10 stacks maximum</p>
        </div>

    },

    {
      name: 'Lich Bane',
      icon: "/images/items/LichBane.png",


      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 80,
      as: 0,
      moveSpeed: (base.moveSpeed * 5 / 100),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--ap">+{80} Ability Power</li>
            <li>+{10} Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li>
            <li>Bane: +5% ({Math.round(base.moveSpeed * 5 / 100)}) Move Speed</li>
          </ul>

          <p className="stat--ap">Spellblade damage pre/post mitigation: {Math.round((base.attack * 75 / 100) + (total.ap * 50 / 100))} / {Math.round(((base.attack * 75 / 100) + (total.ap * 50 / 100) * (modifierMres)))}</p>
          

          <p><b>Spellblade</b>Using an ability causes next attack used within 10 seconds to deal <span className='stat--ap'> <span className="stat--ad">75% BASE AD</span> +50% AP bonus magic damage</span>. Damage is reduced against structures</p>
        </div>

    },

    {
      name: 'Archangel\'s Staff',
      icon: "/images/items/ArchangelStaff.png",
      health: 0,
      mana: 500,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 35 + (Math.round(total.mana / 100)),
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--ap">+{35} Ability Power</li>
            <li className="stat--mana">+{500} Max Mana</li>
            <li>+{20} Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li> 
          </ul>
          
          <p><b>Awe:</b> Grants <span className="stat--ap">1% of max mana ({Math.round(total.mana / 100)}) as Ability Power</span> and refunds <span className="stat--mana">25%</span>of all Mana spent</p>
          <p><b>Mana Charge:</b> Increases max Mana by <span className="stat--mana">15</span> every time mana is spent up to <span className="stat--mana">700</span> bonus Mana. Triggers up to 3 times every 12 seconds. At max stacks transforms into Seraphs Embrace</p>
        </div>

    },

    {
      name: 'Seraph\'s Embrace',
      icon: "/images/items/Seraphs.png",


      health: 0,
      mana: 1200,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 35,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
   
          <ul>
            <li className="stat--ap">+{35} Ability Power</li>
            <li className='stat--mana'>+{1200} Max Mana</li>
            <li>+{20} Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul>          

          <p><b>Awe:</b> Grants <span className="stat--ap"> 3% of Max Mana ({Math.round(total.mana * 3 / 100)}) as Ability Power</span> and refunds <span className="stat--mana">25%</span>of all Mana spent</p>
          <p><b>Lifeline:</b> Damage that puts you under <span className="stat--hp"> 35% Health ({Math.round(total.health * 35 / 100)})</span> consumes <span className="stat--mana">15% ({Math.round(total.mana * 15 / 100)} at 100%) current Mana</span> to grant a shield equal to <span className="stat--hp">100 <span className="stat--mana">+ 15% of current mana</span>  ({Math.round(total.mana * (15/100) + 100)})</span> for 2 seconds (90 seconds cooldown)</p>
        </div>

    },

    {
      name: 'Ardent Censer',
      icon: "/images/items/Ardent.png",


      health: 250,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 55,
      as: 0,
      moveSpeed: (base.moveSpeed * 5 / 100),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          <ul>
            <li className="stat--hp">+{250} Max Health</li>
            <li className="stat--ap">+{55} Ability Power</li>
            <li>+{10} Ability Haste</li>
            <li className="stat--moveSpeed">+5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</li>
          </ul>

          <p>
            <b>Ardent:</b>+5% Movement Speed.
          </p>
          <p>
            <b>Censer</b>: When you heal or shield an allied champion other than yourself, they gain <span className="stat--as">15-40% Attack Speed</span>, and their basic attacks deal <span className="stat--ap">20–40 bonus magic damage</span> (based on level).
          </p>
        </div>

    },

    {
      name: 'Harmonic Echo',
      icon: "/images/items/HarmonicEcho.png",


      health: 0,
      mana: 300,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 75,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--ap">+{75} Ability Power</li>
            <li className="stat--mana">+{300} Max Mana</li>
            <li >+{10} Ability Haste</li>
            <li className="stat--hp">Healing Effect: {Math.round(135 + (total.ap * 10 / 100))}</li>
          </ul>          

          <p><b>Harmonic Echo:</b> Moving and casting abilities build Harmony stacks. At 100 stacks your next healing / shielding ability coast on ally restores <span className="stat--hp">135 <span className="stat--ap">(+10% AP)</span> Health</span> to your target and up to 3 nearby allied champions</p>
          
        </div>

    },

    {
      name: 'Awakened Soulstealer',
      icon: "/images/items/Soulstealer.png",

      health: 150,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 65,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 15,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+{150} Max Health</li>
            <li className="stat--ap">+{65} Ability Power</li>
            <li>+{20} Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li>
            <li className="stat--magres"><b>Soul Hunt:</b> +15 Magic Penetration</li>
          </ul> 
          
          <p><b>Soulfire:</b> Takedowns on enemy champions within of 3 seconds of dealing damage to them reduce the remaining cooldowns of your abilities by 25%</p>
        </div>

    },

    {
      name: 'Mejai\'s Soulstealer',
      icon: "/images/items/Mejais_Soulstealer.png",


      health: 70,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 25,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: (7/100),
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,
      bootsPassive: false,

      description: 
        <div className='itemDescription'>


          <ul>
            <li className="stat--hp">+70 Max Health</li>
            <li className="stat--ap">+25 Ability Power</li>
            <li className="stat--magres">+7% Magic Penetration</li> 
          </ul>          

          <p>
            <b>Glory: </b>Gain Glory stacks when engaging in taking down enemy champions, up to a maximum of 30 stacks. Lose 10 stacks on death. Melee champions gain 3 stacks for each champion kill and 2 stacks for each assist. Ranged champions gain 4 stacks for each champion kill and 2 stacks for each assist.
          </p>

          <p>
            <b>Fear: </b> Gain <span className="stat--ap">5 Ability Power</span> for each stack of Glory, and <span className="stat--moveSpeed">10% bonus movement speed</span> once you reach at least 10 stacks of Glory.
          </p>
        </div>

    },

    {
      name: 'Mejai\'s Soulstealer (Stacked)',
      icon: "/images/items/Mejais_Soulstealer.png",


      health: 100,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 175,
      as: 0,
      moveSpeed: (base.moveSpeed * 10 / 100),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: (7/100),
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,
      bootsPassive: false,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+100 Max Health</li>
            <li className="stat--ap">+175 Ability Power</li>
            <li className="stat--magres">+7% Magic Penetration</li>
            <li className="stat--moveSpeed">+{Math.round(base.moveSpeed*0.1)} Movement speed</li>
          </ul>
          

          <p>
            <b>Glory: </b>Gain Glory stacks when engaging in taking down enemy champions, up to a maximum of 30 stacks. Lose 10 stacks on death. Melee champions gain 3 stacks for each champion kill and 2 stacks for each assist. Ranged champions gain 4 stacks for each champion kill and 2 stacks for each assist.
          </p>

          <p>
            <b>Fear: </b> Gain <span className="stat--ap">5 Ability Power</span> for each stack of Glory, and <span className="stat--moveSpeed">10% bonus movement speed</span> once you reach at least 10 stacks of Glory.
          </p>
        </div>

    },

    {
      name: 'Oceanid\'s Trident',
      icon: "/images/items/Oceanids_Trident.png",

      health: 200,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 80,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: (7/100),
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,
      bootsPassive: false,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+200 Max Health</li>
            <li className="stat--ap">+80 Ability Power</li>
            <li>+10 Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul>
          

          <p>
            <b>Lethal Weapon: </b> Dealing ability damage to an enemy champion reduces any shields they gain for 3s (Area of effect abilities apply 5% of bonus Ability Power + 25% shield reduction, capped at 45%; while single target abilities apply 5% of bonus Ability Power + 40% shield reduction, capped at 60%). When you damage an enemy who is unaffected by Lethal Weapon, all shields on them are reduced by the same values.
          </p>
        </div>

    },

    {
      name: 'Infinity Orb',
      icon: "/images/items/Infinity_Orb.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 85,
      as: 0,
      moveSpeed: (base.moveSpeed * 5 / 100),
      flatArmPen: 0,
      flatMagPen: 15,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
        <ul>
          <li className="stat--ap">+85 Ability Power</li>
          <li className="stat--magres">+7% Magic Penetration</li>
          <li className="stat--moveSpeed"><b>Destiny:</b> +5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</li>
          <li className="stat--magres"><b>Balance:</b> +{15} Magic Penetration</li>
        </ul>

          <p><b>Inevitable Demise: </b> Abilities and empowered attacks <span className="stat--vamp">Critically Strike</span> for 20% bonus damage against enemies below <span className='stat--hp'>35% ({Math.round(target.health * 35 / 100)} for current target) Health</span></p>
        </div>

    },

    {
      name: 'Staff of Flowing Waters',
      icon: "/images/items/Staff_of_Flowing_Water.png",

      health: 0,
      mana: 300,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 65,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--ap">+{65} Ability Power</li>
            <li className="stat--mana">+{300} Max Mana</li>
            <li>+{20} Ability Haste</li>
          </ul>          

          <p><b>Riptide:</b> <span className="stat--hp">Healing / Shielding</span> an ally grants you both <b>15 Ability Haste</b> and <abbr title="20 - 40 ;(20 + 20 / 14 * (target's level - 1)) number is target's level = your level"><span className="stat--ap">{Math.round(20 + 20 / 14 * (currentLevel - 1))} Ability Power</span></abbr> for 6 seconds</p>
        </div>

    },

    {
      name: 'Crystaline Reflector',
      icon: "/images/items/Crystalline_Reflector.png",


      health: 200,
      mana: 0,
      armor: 40,
      magres: 0,
      attack: 0,
      ap: 60,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+200 Max Health</li>
            <li className="stat--armor">+{40} Armor</li>
            <li className="stat--ap">+{70} Ability Power</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul>

          <p>Shard effects:</p>

          <ul>
            <li className="stat--armor">Damage block: {Math.round(8 + 17/14*(currentLevel - 1))}</li>
            <li className="stat--ap">Damage pre/post mitigation: {Math.round(10 + (total.ap * 3 / 100)+ (bonus.health /100))} / {Math.round((10 + (total.ap * 3 / 100)+ (bonus.health /100))*modifierMres)}</li>
          </ul>  

          <p>
            <b>Mirrored Force:</b>  Gain the mirror shard for 3s each time while casting champion abilities, the duration time of the fragment can not be stacked. During the fragment`s existence, it blocks <span className="stat--ad">8-25 (based on level) physical damage</span> from the enemy champion, and deals <span className="stat--ap"> 10 (+3% Ability Power) <span className="stat--hp">(+1% bonus health)</span> magic damage</span>.
          </p>
        </div>

    },

    
    {
      name: 'Imerial Mandate',
      icon: "/images/items/Imperial_Mandate.webp",

      health: 200,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 40,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+{200} Max Health</li>
            <li className='stat--ap'>+{40} Ability Power</li>
            <li>+20 Ability Haste</li>
            <li className="stat--ap">Mark Damage pre/post mitigation: {45 + 2 * currentLevel} / {Math.round((45 + 2 * currentLevel) * (modifierMres))}</li>
            <li className="stat--ap">Proc Damage pre/post mitigation: {Math.round(90 + 4 * currentLevel)} / {Math.round((90 + 4 * currentLevel) * (modifierMres))}</li>
          </ul>
          
          

          <p><b>Coordinated Fire:</b> Abilities that slow/immobilize a champion deal <span className="stat--ap">47-75 (45 + 2/level) magic damage</span> and marks them for 4 seconds (6 seconds cooldown). Allied champion damage detonates the mark dealing <span className="stat--ap">94-150 (90 + 4/level) magic damage</span> and granting you both <span className="stat--moveSpeed">20% ({Math.round(base.moveSpeed * 20 / 100)}) Movement Speed</span> for 2 seconds</p>
        </div>

    },

    {
      name: 'Cosmic Drive',
      icon: "/images/items/Cosmic_Drive.webp",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 75,
      as: 0,
      moveSpeed: (base.moveSpeed * 5 / 100),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 30,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--ap">+75 Ability Power</li>
            <li>+30 Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li>
            <li>Hyperdrive: +5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement speed</li>
          </ul>

          <p className="stat--moveSpeed">Bonus Movement speed on proc: {Math.round(30 + (total.ah * 70 /100))}</p>

          <p><b>Spellweaving: </b>Active abilities and empowered attacks grant <span className="stat--moveSpeed">30 (+ 70% Ability Haste) Movement Speed</span> after dealing damage to enemy champion. This movement speed decays over 2 seconds. Each source has 1s cooldown for triggering the effect. Only <b>Ability Haste</b> from items contributes to Spellweaving's movement speed</p>
        </div>

    },

    {
      name: 'Riftmaker',
      icon: "/images/items/Riftmaker.webp",

      health: 150,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 80,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+150 Max Health</li>
            <li className="stat--ap">+80 Ability Power</li>
            <li>+15 Ability Haste</li>
            <li className="stat--vamp">+13% Omnivamp</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul>
          

          <p><b>Void Corruption:</b> When in combat with champions gain 1 stack of <b>Corruption</b> every 1 seconds. Every stacks increases the damage you deal by 2.5% up to 3 stacks. At 3 stacks additional damage becomes <b className="stat--vamp">true damage</b>.</p>
        </div>

    },

    {
      name: 'Horizon Focus',
      icon: "/images/items/Horizon_Focus.webp",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 90,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 7/100,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            {/* <li className="stat--hp">+150 Max Health</li> */}
            <li className="stat--ap">+90 Ability Power</li>
            <li>+20 Ability Haste</li>
            <li className="stat--magres">+7% Magic Penetration</li>
          </ul>
          
          
          {/* <p><b>Hypershot:</b> Apply 1 mark when you damage enemy champion with non-targeted ability from 500 units away; apply 2 marks for immobolizing. MArked enemies are revealed. At 3 stacks detonate them  to deal <abbr title="90 +25% AP; numbers are pre/post-mitigation"><span className="stat--ap">{Math.round(90 + (total.ap * 25 / 100))} / {Math.round((90 + (total.ap * 25 / 100)) * (modifierMres))} Magic damage</span></abbr> to the target.</p> */}

          <p>
           <b>Hypershot:</b> Damaging an enemy champion with an ability from 600 units away reveals them for 6 seconds and increases damage dealt to them by 9%.
          </p>
          <p>
            <b>Focus: </b> When Hypershot is triggered, it reveals all enemy champions within 1,200 units of the target for 2s. (15s cooldown)
          </p>
        </div>

    },
  ];

  let defenceItemData = [
    {
      name: 'Redemption',
      icon: "/images/items/Redemption.webp",

      health: 400,
      mana: 300,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          <ul>
            <li className="stat--hp">+400 Max Health</li>
            <li className="stat--mana">+300 Max Mana</li>
            <li>+20 Ability Haste</li>
            <li className="stat--hp">Healing effect: {Math.round(50 + bonus.health*6/100)}</li>
          </ul>

          <p>
            <b>Salvation</b>: <span className="stat--hp">Heal</span> ally units in the range of 350 for <span className="stat--hp">(50 + 6% bonus health)</span>  every 8s. If no allied champions are around, Salvation will not be triggered.
          </p>

          <p>
            <b>Eternity</b>: Restore <span className="stat--mana">Mana</span>  equal to 15% of the damage taken from champions. When consuming Mana, restore health equal to  20% of mana consumed. Every cast restores Maximum 15 Health
          </p>
        </div>

    },

    {
      name: 'Sunfire Aegis',
      icon: "/images/items/Sunfire_Aegis.png",

      health: 500,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          
          <ul>
            <li className="stat--hp">+500 Max Health</li>
            <li>+15 Ability Haste</li>
          </ul>


          <p className="stat--ap">Immolate pre/post mitigation damage:</p>
          <ul>
            <li className="stat--ap">Unstacked: {Math.round(sunFireEffect)} / {Math.round((sunFireEffect * (modifierMres)))}</li>
            <li className="stat--ap">Stacked: {Math.round((sunFireEffect) + (sunFireEffect * 11 / 100 * 4))} / {Math.round((((sunFireEffect) + (sunFireEffect * 11 / 100 * 4)) * (modifierMres)))}</li>
            <li className="stat--ap">Flametouch: {Math.round(((sunFireEffect) + (sunFireEffect * 11 / 100 * 4))/2)} / {Math.round(((((sunFireEffect) + (sunFireEffect * 11 / 100 * 4)) * (modifierMres)))/2)}</li>
          </ul>
          

          <p><b>Immolate:</b> deals <span className="stat--ap">16-25 based on level (<span className="stat--hp">+0.8% of bonus HP</span>) Magic Damage</span> per second to nearby enemies. <span className="stat--ap">Immolate</span> increases it's damage by 11% for 5s, stacking up to 4 times.</p>

          <p><b>Flametouch:</b> At max stacks <span className="stat--ap">Immolate</span> stacks attacks burn enemies for <span className="stat--ap">50% of Immolate's damage</span>. Immolate deals 130% Damage to monsters and 175%-250% (based on level) damage to minions.</p>         
        </div>

    },

    {
      name: 'Heartsteel',
      icon: "/images/items/Heartsteel.webp",

      health: 700,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+700 Health</li>
            <li className="stat--hp">150% base Health regeneration</li>
            <li>20 Ability Haste</li>
          </ul>
          

          <div>
            <p>Heartsteel Effect:</p>
            <ul>
              <li>Current bonus: {(heartsteelStacks).toFixed(0)}</li>
              
              <li>
                Change number of stacks: 
                <input
                  type="number"
                  min="0"
                  value={heartsteelStacks.toFixed(0)}
                  onChange={updateHeartsteel}
                />
              </li>

              <li><button onClick={heartSteelProc}>Emulate current target strike</button></li>
              <li><button onClick={() => {setHeartsteelStacks(oldStacks => 0)}}>Reset stacks</button></li>
              
            </ul>
          </div>

          <p>
            <b>Colossal Consumption:</b> While within 700 units of an enemy champion, charges for 3 seconds befo
            re dealing a huge strike against the enemy champion. This charged attack deals bonus physical damage equal to 120 + 5% of maximum Health (<span className="stat--ad">{Math.round((120 + attacker.health * 5 / 100) * (modifier))} damage</span>), and grants maximum Health equal to 15% of the damage dealt. The charge for each target has a 20-second cooldown.
          </p>         
        </div>

    },

    {
      name: 'Spirit Visage',
      icon: "/images/items/Spirit_Visage.png",

      health: 350,
      mana: 0,
      armor: 0,
      magres: 50,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 20,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+350 Max Health</li>
            <li className="stat--hp">+100% Health Regen</li>
            <li className="stat--magres">+50 Magic Resistance</li>
            <li>+20 Ability Haste</li>
          </ul>
          

          <p><b>Blessed:</b> Increases all healing and shielding effects on you by <span className="stat--hp">30%</span></p>
        </div>

    },

    {
      name: 'Randuin\'s Omen',
      icon: "/images/items/Randuins_Omen.png",

      health: 400,
      mana: 0,
      armor: 65,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+400 Max Health</li>
            <li className="stat--armor">+65 Armor</li>
          </ul>          

          <p><b>Cold Steel:</b> reduces the attack speed of enemies by <b>15%</b> when struck by basic attack</p>
          <p><b>Determination:</b> When you are getting critically struck store (25% for melee / 18% for ranged) pre-mitigation damage received as Datermination stacks for 5 seconds (500 stacks max). When you attack an enemy champion, consume all Determination and heal yourself for the same amount. If you still have unconsumed Determination after 5 seconds, automatically consume all Determination to heal yourself for half of the amount.</p>
        </div>

    },

    {
      name: 'Thornmail',
      icon: "/images/items/Thornmail.webp",

      health: 200,
      mana: 0,
      armor: 75,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+200 Max Health</li>
            <li className="stat--armor">+75 Armor</li>
            <li className="stat--ap">Pre/post mitigation thorn damage: {Math.round((20 + (bonus.armor * 6 / 100) + (bonus.health * 2 /100)))}
            / {Math.round((20 + (bonus.armor * 6 / 100) + (bonus.health * 2 /100)) * (modifierMres))}</li>
          </ul>
          

          <p><b>Thorns: </b>When struck by attack deal <span className="stat--ap">20 <span className="stat--armor">(+6% bonus armor)</span> <span className="stat--hp">(+1% bonus HP)</span> magic damage</span> to the attacker and apply <span className="stat--vamp">50% Grievous Wounds</span>.</p>
        </div>

    },

    {
      name: 'Warmog\'s Armor',
      icon: "/images/items/Warmogs_Armor.png",

      health: 700,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+700 Max Health</li>
            <li className="stat--hp">+200% Health Regen</li>
            <li>+10 Ability Haste</li>
          </ul>

          <p><b>Warmog's Heart:</b> If you have at least <span className="stat--hp">950 bonus health</span>, and did not take any damage within last 6 seconds, restore <span className="stat--hp"> 5% Max health ({Math.round(total.health * 5 / 100)})</span> per second</p>
        </div>

    },

    {
      name: 'Iceborn Gauntlet',
      icon: "/images/items/Iceborn_Gauntlet.png",

      health: 250,
      mana: 250,
      armor: 50,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 30,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+250 Max Health</li>
            <li className="stat--armor">+50 Armor</li>
            <li className="stat--mana">+250 Max Mana</li>
          </ul>

          <p className="stat--ad">Spellblade pre/post mitigation damage: {Math.round(base.attack + (bonus.armor / 4))} / {Math.round((base.attack + (bonus.armor / 4)) * (modifier))}</p>

          <p><b>Spellblade: </b>Using an ability causes the next attack within 10 seconds to deal <span className="stat--ad"> 100% base AD <span className="stat--armor">(+25% bonus Armor)</span> Physical Damage</span> in an area and creates an icy zone for 2 seconds that slows by <b>30%</b>. Armor increases the size of a field (1.5s Cooldown). Damage is reduced against structures.</p>
        </div>

    },

    {
      name: 'Dead Man\'s Plate',
      icon: "/images/items/Dead_Mans_Plate.png",

      health: 250,
      mana: 0,
      armor: 50,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: (base.moveSpeed * 5 / 100),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
          <li className="stat--health">+250 Max Health</li>
          <li className="stat--armor">+50 Armor</li>
          <li className="stat--moveSpeed"><b>Relentless:</b> +5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</li>
          </ul>          

          <p><b>Momentum:</b> Moving builds up stacks, granting up to 40 Movement Speed at 100 stacks. Attacking removes all Momentum stacks, stacks decay when movement impaired.</p>

          <p><b>Crushing blow:</b> Attacks deal up to <span className="stat--ap">100 <abbr title="post-mitigation">({Math.round(100 * (modifierMres))})</abbr> Bonus Magic Damage</span> based on Momentum removed . Attacks with max Momentum slows the target by 50% for 1 second.</p>
        </div>

    },

    {
      name: 'Abyssal Mask',
      icon: "/images/items/Abyssal_Mask.png",

      health: 250,
      mana: 300,
      armor: 0,
      magres: 40,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+300 Max Health</li>
            <li className="stat--magres">+40 Magic Resistance</li>
            <li className="stat--mana">+300 Max Mana</li>
            <li>+10 Ability Haste</li>
          </ul>          

          <p><b>Eternity:</b> restore <span className="stat--mana">Mana</span> equal to 15% damage taken from champions. Regen <span className="stat--hp">Health</span> equal to 20% of mana spent Capped at 25 health per cast.</p>
          <p><b>Abyssal</b> store <span>20% pre-mitigation magic damage</span> taken for 5 seconds. When you immobilize the champion explode stacks for <span className="stat--ap">Magic Damage</span> equal to stored stacks.</p>
        </div>

    },

    {
      name: 'Zeke\'s Convergence',
      icon: "/images/items/Zekes_Convergence.png",

      health: 350,
      mana: 150,
      armor: 40,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          
          <ul>
            <li className="stat--hp">+350 Maximum Health</li>
            <li className="stat--armor">+40 Armor</li>          
            <li className="stat--mana">+150 Max mana</li>
            <li>+10 Ability Haste</li>
          </ul>
          

          <p>
           <b>Harbringer:</b> While near an allied champion, casting your ultimate ability grants you and a nearby allied champion bonus effects for 10 seconds. Prioritizes highest attack damage ally. You have a 300 range aura that slows enemies within by 20%, and your ally's basic attacks burn their target dealing <span className="stat--ap">30% bonus magic damage</span> over 2 seconds. 
          </p>
          <p>
            <b>Frostfire Covenant: </b>Slowing a burning enemy with your frost aura deals <span className="stat--ap">60 ({Math.round(60 * (modifierMres))}) magic damage per second</span> to nearby enemies and slow them by 50% for 3 seconds. 
          </p>
        </div> 

    },

    {
      name: 'Protector\'s Vow',
      icon: "/images/items/Protectors_Vow.png",

      health: 350,
      mana: 0,
      armor: 40,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+350 Max Health</li>
            <li className="stat--armor">+40 Armor</li>
            <li>+10 Ability Haste</li>
            <li className="stat--armor">Shield potency: {Math.round(125 + (bonus.health * 30 / 100))}</li>
          </ul>
          

          <p><b>Proptector:</b> Raise your guard when you're near an allied champion. If you or ally take damage, both of you receive <span  className="stat--armor"> 125 <span className="stat--hp">(+30% BONUS HP)</span> shield</span> for 1.5 seconds. 20 seconds cooldown.</p>
        </div>

    },

    {
      name: 'Winter\'s Approach',
      icon: "/images/items/Winter's_Approach.png",

      health: 350 + Math.round((total.mana) * 8 / 100),
      mana: 500,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+350 Max Health</li>
            <li className="stat--mana">+500 Max Mana</li>
            <li>+15 Ability Haste</li> 
          </ul>          

          <p><b>Awe:</b> Grants <span className="stat--hp"> <span className="stat--mana">10% of Max mana ({Math.round(total.mana * 10 / 100)})</span>  as bonus Health</span> and refunds <span className="stat--mana">15%</span> of Mana spent</p>
          <p><b>Mana Charge:</b> Increases <span className="stat--mana">Max mana by 12</span> every Attack, when mana is spent or on taking damage from champions/minions/monsters. Generates up to 3 stacks every 12 seconds. Caps at <span className="stat--mana">700 mana</span> and transforms into <b>Fimbulwinter</b></p>
        </div>

    },

    {
      name: 'Fimbulwinter',
      icon: "/images/items/Fimbulwinter.png",

      health: 350,
      mana: 1200,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
      <div className='itemDescription'>

      <ul>
        <li className="stat--hp">+350 Max Health</li>
        <li className="stat--mana">+1200 Max Mana</li>
        <li>+15 Ability Haste</li>
      </ul>
      

      <p><b>Awe:</b> Grants <span className="stat--hp"> <span className="stat--mana">10% of Max mana ({Math.round(total.mana * 10 / 100)})</span>  as bonus Health</span> and refunds <span className="stat--mana">15%</span> of Mana spent</p>
      <p><b>Frozen Colossus:</b> Immobilizing or slowing an enemy champion consumes <span className="stat--mana">3% ({Math.round(total.mana * 3/100)}) current Mana</span> and grants a shield for 3 seconds, absorbing <span className="stat--hp">{Math.round(100 + 100 / 14 * (currentLevel - 1) + total.mana * 5/100)}</span>, icreased by <b>80%</b> if there are more than 1 enemy champion nearby. Shield triggers when above <abbr title="20% Max" className="stat--mana">{Math.round(total.mana / 5)} Mana</abbr> (8s Cooldown).</p>
    </div>

    },

    {
      name: 'Frozen Heart',
      icon: "/images/items/FH.png",

      health: 0,
      mana: 200,
      armor: 80,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 25,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--armor">+80 Armor</li>
            <li className="stat--mana">+200 Max mana</li>
            <li>+25 Ability Haste</li>
          </ul>
          

          <p><b>Winter's Caress:</b> Basic Attacks and <span className="stat--ap">Magic Damage</span> caused by you or inflicted upon you will apply stacks of Chill to enemy for 3 Seconds. Each stack reduce <b>Attack Speed</b> by <b>9%</b> up to a maximum of <b>36%</b> at <b>4 stacks</b>. Each individual ability has a 3 second cooldown on applying stacks.</p>
        </div>

    },

    {
      name: 'Force of Nature',
      icon: "/images/items/Force_of_Nature.png",

    
      health: 350,
      mana: 0,
      armor: 0,
      magres: 55,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: Math.round(base.moveSpeed * 5 / 100),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+350 Max Health</li>
            <li className="stat--magres">+55 Magic resistance</li>
            <li>+5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</li> 
          </ul> 
          
          <button onClick={() => updateItemEffects({ forceOfNature: !itemEffects.forceOfNature })}>
            Max stacks on / off
          </button>

          <p>Bonus magic defence is: {itemEffects.forceOfNature ? <span className="stat--hp">Active</span> :  <span className="stat--vamp">Disabled</span>}</p>
          
          <p>
            <sub>*switch stacks off before changing to other item. Stacks don't remove by themselves.</sub>
          </p>

          <p>
            <b>Absorb:</b> Taking ability damage from enemy champions grants 1 stack of Steadfast for 7 seconds, max 4 stacks. Dealing damage to enemy champions refresh effect duration. at maximum stacks gain 10% ({Math.round(base.moveSpeed /10)}) Movement Speed and reduce all incoming magic damage by 25%.
          </p>
        </div>

    },

    {
      name: 'Ixtali Seedjar',
      icon: "/images/items/Ixtali_Seedjar.png",

      health: 425,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: Math.round(base.moveSpeed * 5 / 100),
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 25,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+425 Max Health</li>
            <li>+25 Ability Haste</li>
            <li>+5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</li>
          </ul>          

          <p>
            <b>Harvester:</b> Plants hit by you or your ally drop a seed. Picking up a seed replaces your trinket with corresponding plant for 60 seconds and grants you  <b>+40% ({Math.round(base.moveSpeed * 40 / 100)}) Movement Speed </b> decaying over 2.5 seconds
          </p>
          <p>
            <b>Propagation:</b> Plant your held seed at a terget location causing it to grow to full size over 1 second. Each plant type has 30 seconds cooldown
          </p>
        </div>

    },

    {
      name: 'Dawnshroud',
      icon: "/images/items/Dawnshroud.png",

      health: 250,
      mana: 0,
      armor: 50,
      magres: 30,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>
          <ul>
            <li className="stat--hp">+250 Max Health</li>
            <li className="stat--armor">+50 Armor</li>
            <li className="stat--magres">+30 Magic Resistance</li>
          </ul>

          <p className="stat--ap">Damage (pre / post-mitigation): {Math.round(80 + (bonus.health * 5 / 100) )} / {Math.round((80 + (bonus.health * 5 / 100) ) * (modifierMres))} Magic Damage</p>  
          <p>
            <b>Dawnbringer:</b> If you are within 400 units of enemy champion and you immobilize them or getting immobilized, reveal all nearby enemy champions for 3 seconds and deal them <span className="stat--ap">80 <span className="stat--hp">(+5% bonus HP)</span> Magic Damage</span>. (3 seconds Cooldown)
          </p>
        </div>

    },

    {
      name: 'Amaranth Twinguard',
      icon: "/images/items/Amaranth.png",

      health: 0,
      mana: 0,
      armor: 60,
      magres: 60,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
          <li className="stat--armor">+60 Armor</li>
          <li className="stat--magres">+60 Magic Resistance</li>
          </ul>          

          <button onClick={() => updateItemEffects({ twinguard: !itemEffects.twinguard })}>
            Effect on / off
          </button>

          <p>Bonus defence: {itemEffects.twinguard ? <span className="stat--hp">Active</span> :  <span className="stat--vamp">Disabled</span>}</p>
          <p><sub>* please, disable bonus defence before changing items - it does not auto updates for now</sub></p>
          <p>
            <b>Endurance:</b> Gain 1 stack every 1 seconds while in combat with Enemy Champions (3 stacks maximum).
          </p>
          <p>
            At full stacks gain 20% size, 20% Tenacity, increase both <span className="stat--armor">Armor</span> and <span className="stat--magres">Magic resistance</span> by 30% until Out Of Combat with enemy champions.
          </p>
        </div>

    },    

    {
      name: 'Mantle of the Twelfth Hour',
      icon: "/images/items/12HourMantle.png",

      health: 200,
      mana: 0,
      armor: 40,
      magres: 40,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+200 Max Health</li>
            <li className="stat--armor">+40 Armor</li>
            <li className="stat--magres">+40 Magic Resistance</li>
            <li className="stat--hp">Lifeline Health: {Math.round(200 + bonus.health/2)}</li>
          </ul>          

          <p>
            <b>Lifeline:</b> Damage that puts you under <span className="stat--hp"> 35% max HP ({Math.round(total.health * 35 / 100)}) Health</span> grants bonus max Health equal to <span className="stat--hp">200 (+50% BONUS HP) health</span> over 3 seconds, and provides <b>50% Slow Resistance</b> and <b>30 Movement Speed</b> for 3 seconds (90 second cooldown).
          </p>
        </div>

    },

    {
      name: 'Searing Crown',
      icon: "/images/items/SearingCrown.png",

      health: 300,
      mana: 0,
      armor: 50,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+300 Max Health</li>
            <li className="stat--armor">+50 Armor</li>
            <li className="stat--ap">Fiery Touch damage as melee/ranged: {Math.round((target.health * 14 /1000) * (modifierMres))} / {Math.round((target.health * 7 /1000) * (modifierMres))}</li>
          </ul>          

          <p>
            <b>Fiery Touch:</b> After dealing damage with an attack or ability, burn target for 3 seconds dealing <span className="stat--ap">1.4% of target's Max Health as magic damage</span>, halved for ranged users. Deals 150% damage to minions and monsters. Maximum 125 damage to monsters.
          </p>
        </div>

    },
  ];

  let supportItemData = [
    {
      name: 'Ancient Coin',
      icon: "/images/items/Ancient_Coin.png",

      health: 80,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 5,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+80 Health</li>
            <li>+5 Ability Hate</li>
          </ul>
          

          <p><b>Offering:</b> Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, nearby minions that die will each consume a charge. Consuming a charge will grant 65 gold and heal you for 20 - 80 (based on missing health) You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold to the nearby ally.</p>
          <p><b>Mission:</b> This item transforms into <b>Talisman of Ascension</b> after obtaining <b>750</b> gold.</p>
        </div>
    },

    {
      name: 'Talisman of Ascension (Stacked)',
      icon: "/images/items/Talisman_of_Ascension.png",

      health: 375,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: (total.ap < total.attack ? 20 : 0),
      ap:  (total.ap > total.attack ? 40 : 0),
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 15,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+375 (125 + 250) Health</li>
            <li><span className="stat--ad">+20 Attack Damage</span> or <span className="stat--ap">+40 Ability Power</span> (Adaptive)</li>
            <li>+15 Ability Haste</li>
          </ul>
          
          <p>
            <b>Soulcast:</b> Every 60 seconds gain <b>75 Gold</b> <span className="stat--hp">25 Health</span>, and <span className="stat--ad">2 AD</span> or <span className="stat--ap">4 AP</span> (Adaptive) up to a maximum of <span className="stat--hp">250 Health,</span> and <span className="stat--ad">20 AD</span> or <span className="stat--ap">40 AP</span> (Adaptive).
            </p>
        </div>

    },

    {
      name: 'Spectral Sickle',
      icon: "/images/items/Spectral_Sickle.png",

      health: 0,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: (total.ap < total.attack ? 10 : 0),
      ap:  (total.ap > total.attack ? 20 : 0),
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <p><b>Versatile:</b> Gain <span className="stat--ad">10 Attack Damage</span> or <span className="stat--ap">20 Ability Power</span> (Adaptive).</p>

          <p><b>Tribute:</b>  Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, your damaging abilities and attacks against champions and structures consume up to one charge per attack or cast. Consuming a charge grants 65 gold and heals for <span className="stat--hp">20 - 80 health (based on missing health)</span> . You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold to the nearby ally.</p>

          <p><b>Quest:</b> Earn <b>750</b> Gold with this item to transform it into <b>Black Mist Scythe</b>.</p>
        </div>

    },

    {
      name: 'Black Mist Scythe (Stacked)',
      icon: "/images/items/Black_Mist_Scythe.png",

      health: 250,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: (total.ap < total.attack ? 34 : 0),
      ap:  (total.ap > total.attack ? 68 : 0),
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li>+10 Ability Haste</li>
          </ul>        

          <p>
            <b>Versatile:</b> Gain <span className="stat--ad">14 Attack Damage</span> or <span stat--ap>28 Ability Power</span> (Adaptive).
          </p>

          <p>
            <b>Soulcast:</b> Every 60 seconds gain <b>75 Gold</b> <span className="stat--hp">25 Health</span>, and <span className="stat--ad">2 AD</span> or <span className="stat--ap">4 AP</span> (Adaptive) up to a maximum of <span className="stat--hp">250 Health,</span> and <span className="stat--ad">20 AD</span> or <span className="stat--ap">40 AP</span> (Adaptive). 
          </p>

        </div>

    },

    {
      name: 'Relic Shield',
      icon: "/images/items/Relic_Shield.png",

      health: 175,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: 0,
      ap: 0,
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 10,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+175 Max Health</li>
            <li>+10 Ability Haste</li>
          </ul>
          

          <p>
            <b>Spoils of War:</b> Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, your basic attacks execute minions below <span className="stat--hp">65% of their maximum health</span>, consuming 1 charge per minion. Consuming a charge will heal you for <span className="stat--hp">15 - 65 (based on missing health)</span>, as well as grant 65 Gold to you and 100% kill gold to the nearest allied champion. You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold to the nearby ally.
          </p>

          <p>
            <b>Quest:</b> earn <b>750</b> gold with this item to transform it into <b>Bulwark of the Mountain</b>
          </p>

        </div>
    },

    {
      name: 'Bulwark of the Mountain (Stacked)',
      icon: "/images/items/Bulwark_of_the_Mountain.png",

      health: 175+250,
      mana: 0,
      armor: 0,
      magres: 0,
      attack: (total.ap < total.attack ? 20 : 0),
      ap:  (total.ap > total.attack ? 40 : 0),
      as: 0,
      moveSpeed: 0,
      flatArmPen: 0,
      flatMagPen: 0,
      armPen: 0,
      magPen: 0,
      critChance: 0,
      critMultiplier: 0,
      ah: 0,
      armorReduction: 0,

      description: 
        <div className='itemDescription'>

          <ul>
            <li className="stat--hp">+175 Max Health</li>
            <li>+10 Ability Haste</li>
          </ul>
          

          <p>
            <b>Soulcast:</b> Every 60 seconds gain <b>75 Gold</b> <span className="stat--hp">25 Health</span>, and <span className="stat--ad">2 AD</span> or <span className="stat--ap">4 AP</span> (Adaptive) up to a maximum of <span className="stat--hp">250 Health,</span> and <span className="stat--ad">20 AD</span> or <span className="stat--ap">40 AP</span> (Adaptive).
            </p>

        </div>

    },
  ];

  let bootsItemData = [
      {
        name: 'Empty slot',
        icon: '/images/portraits/DefaultSquare.png',
  
        health: 0,
        mana: 0,
        armor: 0,
        magres: 0,
        attack: 0,
        ap: 0,
        as: 0,
        moveSpeed: 0,
        flatArmPen: 0,
        flatMagPen: 0,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 0,
        armorReduction: 0,
        bootsPassive: false,
  
        description: 
          <div className='itemDescription'>
            <p>
              No boots selected
            </p>
  
          </div>
  
      },

      {
        name: 'Boots of Speed',
        icon: "/images/items/bootsBasic.png",
  
        health: 0,
        mana: 0,
        armor: 0,
        magres: 0,
        attack: 0,
        ap: 0,
        as: 0,
        moveSpeed: 25,
        flatArmPen: 0,
        flatMagPen: 0,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 0,
        armorReduction: 0,
        bootsPassive: false,
  
        description: 
          <div className='itemDescription'>
            <h3 className="stat--moveSpeed">+25 Movement Speed</h3>  
          </div>
  
      },

      {
        name: 'Gluttonous Greaves',
        icon: "/images/items/bootsVamp.png",
  
        health: 0,
        mana: 0,
        armor: 0,
        magres: 0,
        attack: 35,
        ap: 0,
        as: 0,
        moveSpeed: 45,
        flatArmPen: 0,
        flatMagPen: 0,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 0,
        armorReduction: 0,
        bootsPassive: false,
  
        description: 
          <div className='itemDescription'>

            <ul>
              <li className="stat--ad">+35 Attack Damage</li>
              <li className="stat--moveSpeed">+45 Movement Speed</li>
            </ul>           

            <p>
              <b>Conversion:</b> <span className="stat--vamp">+7% Omnivamp</span>  
            </p>  
          </div>
  
      },

      {
        name: 'Berserker\'s Greaves',
        icon: "/images/items/bootsBerserkers.png",
  
        health: 0,
        mana: 0,
        armor: 0,
        magres: 0,
        attack: 20,
        ap: 0,
        as: (base.asBase * 35/100),
        moveSpeed: 45,
        flatArmPen: 0,
        flatMagPen: 0,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 0,
        armorReduction: 0,
        bootsPassive: false,
  
        description: 
          <div className='itemDescription'>
            <ul>
              <li className="stat--ad">+20 Attack Damage</li>
              <li className="stat--as">+35% ({(base.asBase * 35 / 100).toFixed(3)}) Attack Speed</li>
              <li className="stat--moveSpeed">+45 Movement Speed</li>
            </ul>
          </div>
  
      },

      {
        name: 'Mercury\'s Treads',
        icon: "/images/items/bootsMercury.png",
  
        health: 200,
        mana: 0,
        armor: 0,
        magres: 35,
        attack: 0,
        ap: 0,
        as: 0,
        moveSpeed: 45,
        flatArmPen: 0,
        flatMagPen: 0,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 0,
        armorReduction: 0,
        bootsPassive: 'Mercury',
  
        description: 
          <div className='itemDescription'>

            <ul>
              <li className="stat--hp">+150 Max Health</li>
              <li className="stat--hp">+100% Health Regen</li>
              <li className="stat--magres">+35 Magic Resistance</li>
              <li className="stat--moveSpeed">+45 Movement Speed</li>
            </ul>           

            <p>
              <b>Dissolve:</b> reduces <span className="stat--ap">magic damage</span> taken by 7-12% (based on level)
            </p>  
          </div>
  
      },

      {
        name: 'Plated Steelcaps',
        icon: "/images/items/bootsSteelcaps.png",
  
        health: 150,
        mana: 0,
        armor: 35,
        magres: 0,
        attack: 0,
        ap: 0,
        as: 0,
        moveSpeed: 45,
        flatArmPen: 0,
        flatMagPen: 0,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 0,
        armorReduction: 0,
        bootsPassive: 'Steelcaps',
  
        description: 
          <div className='itemDescription'>

            <ul>
              <li className="stat--hp">+150 Max Health</li>
              <li className="stat--hp">+100% Health Regen</li>
              <li className="stat--armor">+35 Armor</li>
              <li className="stat--moveSpeed">+45 Movement Speed</li>
            </ul>            

            <p>
              <b>Block:</b> reduces <span className="stat--ad">physical damage</span> taken by 7-10% (+1% at level 5/9/13) 
            </p>    
          </div>
  
      },

      {
        name: 'Ionian Boots of Lucidity',
        icon: "/images/items/bootsIonians.png",
  
        health: 150,
        mana: 0,
        armor: 0,
        magres: 0,
        attack: 0,
        ap: 0,
        as: 0,
        moveSpeed: 45,
        flatArmPen: 0,
        flatMagPen: 0,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 30,
        armorReduction: 0,
        bootsPassive: 'Ionian',
  
        description: 
          <div className='itemDescription'>

            <ul>
              <li className="stat--hp">+150 Max Health</li>
              <li>+30 Ability Haste</li>
              <li className="stat--moveSpeed">+45 Movement Speed</li>
            </ul>
            

            <p>
              <b>Summoned:</b> Reduces summoner spell cooldowns by <b>15%</b>  
            </p>  
          </div>
  
      },

      {
        name: 'Boots of Mana',
        icon: "/images/items/bootsMana.png",
  
        health: 0,
        mana: 0,
        armor: 0,
        magres: 0,
        attack: 0,
        ap: 55,
        as: 0,
        moveSpeed: 45,
        flatArmPen: 0,
        flatMagPen: 8,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 0,
        armorReduction: 0,
        bootsPassive: false,
  
        description: 
          <div className='itemDescription'>

            <ul>
              <li className="stat--ap">+55 Ability Power</li>
              <li className="stat--mana">+150% Mana Regeneration</li>
              <li className="stat--moveSpeed">+45 Movement Speed</li>
              <li className="stat--magres">+8 Magic Penetration</li> 
            </ul>
             
          </div>  
      },

      {
        name: 'Boots of Dynamism',
        icon: "/images/items/bootsDynamism.png",
  
        health: 0,
        mana: 0,
        armor: 0,
        magres: 0,
        attack: 35,
        ap: 0,
        as: 0,
        moveSpeed: 45,
        flatArmPen: 8,
        flatMagPen: 0,
        armPen: 0,
        magPen: 0,
        critChance: 0,
        critMultiplier: 0,
        ah: 0,
        armorReduction: 0,
        bootsPassive: false,
  
        description: 
          <div className='itemDescription'>

            <ul>
            <li className="stat--ad">+30 Attack Damage</li>
            <li className="stat--moveSpeed">+45 Movement Speed</li>
            <li>Strike: <span className="stat--armor">+8 Armor Penetration</span></li>  
            </ul>            
          </div>
  
      },

  ];

  const allData = [...physicalItemData, ...magicalItemData, ...defenceItemData, ...supportItemData, ...bootsItemData];

  // generate 5 slots for items
const [Items, setItems] = useState(Array.from({ length: 5 }, () => ({...physicalItemData[0]})));
// track the slot where item's supposed to be equipped to
  const [currentSlot, setCurrentSlot] = useState(0)
// delete item from inventory
  const deleteItem = (toDelete) => {
    setItems((oldItems) => 
      oldItems.map((item) => 
        item.name === toDelete.name ? { ...physicalItemData[0] } : item
      )
    );
  };

//  automated item effects
  useEffect(() => {
  const checkHeartsteel = Items.some((item) => item.name === 'Heartsteel');
  const payload = {
    rabadon: Items.some((item) => item.name === "Rabadon's Deathcap"),
    steraks: Items.some((item) => item.name === 'Sterak\'s Gage'),
    seraphs: Items.some((item) => item.name === 'Seraph\'s Embrace'),
    fimbulwinter: Items.some((item) => item.name === 'Fimbulwinter'),
    muramana: Items.some((item) => item.name === 'Muramana'),
    lastWhisper:  Items.some((item) => item.name === 'Mortal Reminder' || item.name === 'Serylda\'s Grudge') && !Items.some((item) => item.name === 'Terminus (stacked)'),
    heartsteel: checkHeartsteel ? heartsteelStacks : 0,
    titanicHydra: Items.some((item) => item.name === 'Titanic Hydra'),
    terminus: Items.some((item) => item.name === 'Terminus (stacked)'),
    psychicProjector: Items.some((item) => item.name === 'Psychic Projector')
  };

  updateItemEffects(payload);
}, [Items, currentLevel, heartsteelStacks]);

  //  State for Boots
  const [selectedBoots, setSelectedBoots] = useState({...bootsItemData[0]});

  // adds item to a free slot if one exists
  const addToInventory = (item, index) => {
    if (Items[index].name === 'Empty slot') {
      setItems(oldState => {
        const newState = [...oldState];
        newState[index] = item;
        return newState;
      });
        if (index < 4){setCurrentSlot(index + 1)}
        else {setCurrentSlot(0)}
      } else if (index < 4) {      
      addToInventory(item, index + 1);
    } else {
      setCurrentSlot(0);      
    }
  }

  //  Logic for combining all bonus stat from items
  const inventoryNums = useMemo(() => {
    const combined = [...Items, selectedBoots];
    const aggregatedValues = {};

    combined.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key !== 'name' && key !== 'icon' && key !== 'description') {
          const value = item[key];
          if (typeof value === 'number' || typeof value === 'string') {
            aggregatedValues[key] = (aggregatedValues[key] || 0) + value;
          }
        }
      });
    });    

    return {...aggregatedValues}    
  }, [Items, selectedBoots]);  

   // updating characters bonus stats whenever inventory changes
   useEffect(() => {    
    handleBonusChange(inventoryNums);
  }, [inventoryNums, currentLevel]);

  const [capturedItem, setCapturedItem] = useState(physicalItemData[0]);
  const [focusItem, setFocusItem] = useState(Items[0]);

  // generate inventory buttons for a selected item category
    const InventoryButtons = function(items) {
    return (
      <div className="inventory-list">
        {items.map((item) => (
          <button className="inventoryButton" key={item.name} onClick={() => setCapturedItem(item) }>
            <img src={item.icon} alt="Item image" className="inventory-itemIcon"/>
            <p>{item.name}</p>          
          </button>          
        ))}
      </div>      
    );
  };

  const bootsInventoryButtons = function(items) {
    return (
      <div className="inventory-list">
        {items.map((item, index) => (
          <button className="inventoryButton" key={item.name} onClick={() => setCapturedItem(item) }>
            <img src={item.icon} alt="Item image" className="inventory-itemIcon"/>
            <p>{item.name}</p>
          </button>          
        ))}
      </div>
    );
  }; 

  const physicalItems = InventoryButtons(physicalItemData);
  const magicalItems = InventoryButtons(magicalItemData);
  const defenceItems = InventoryButtons(defenceItemData);
  const supportItems = InventoryButtons(supportItemData);
  const BootsSection = bootsInventoryButtons(bootsItemData);

  // selecting active item category
  const [tiles, setTiles] = useState([true, false, false ,false, false])
  const toggleTiles = function (i) {
    const def = [false, false, false ,false, false];
    def[i] = true
    setTiles((state) => state =  def);
  };


  return (
    <div className='inventory-wrap'>
      <div className="category-selector">
        <button onClick={() => {toggleTiles(0)}}>Physical Items</button>
        <button onClick={() => {toggleTiles(1)}}>Magical Items</button>
        <button onClick={() => {toggleTiles(2)}}>Defence Items</button>
        <button onClick={() => {toggleTiles(3)}}>Support Items</button>
        <button onClick={() => {toggleTiles(4)}}>Boots</button>   
      </div>

      <div className="item-list">
        {tiles[0] && physicalItems}
        {tiles[1] && magicalItems}
        {tiles[2] && defenceItems}
        {tiles[3] && supportItems}
        {tiles[4] && BootsSection}
      </div>

      <div className="item-description">
        <div>
          <button className="inventoryButton" onClick={!tiles[4] ? () => addToInventory(capturedItem, currentSlot) : () => setSelectedBoots(capturedItem)}>          
          Add to inventory
        </button>

        <img src={capturedItem.icon} alt="Item image" className="inventory-itemIcon"/>

        <p>{capturedItem.name}</p>
        </div>

        {allData.find((dataItem) => dataItem.name === capturedItem.name)?.description}
      </div>

      <div className="equipped-items">
        {/* pictures of items with buttons to delete underneath */}        
        {Items.map((item) => (
            <div className="inventroy-equippedTile">
              <button key={item.index} className="button inventory-deletebtn" onClick={() => deleteItem(item)}>
                X
              </button>
              <img src={item.icon} alt="Item image" className="inventory-itemIcon" onClick={() => {setFocusItem(item)}}/>
              {/* <p>{item.name}</p>
              {allData.find((dataItem) => dataItem.name === item.name)?.description}               */}
            </div>
          ))}

          <div className="inventroy-equippedTile">
            <button key={selectedBoots.name} className="button inventory-deletebtn" onClick={() => setSelectedBoots(bootsItemData[0])}>
              X
            </button>
            <img src={selectedBoots.icon} alt="Item image" className="inventory-itemIcon" onClick={() => {setFocusItem(selectedBoots)}}/>
            {/* <p>{selectedBoots.name}</p>
            {allData.find((dataItem) => dataItem.name === selectedBoots.name)?.description}               */}
          </div>
      </div>      

        <div className="focused-item">
          <h2>Detailed description and <span className="stat--armor">effects</span> toggle:</h2>
          <p>*(press on item icon that is in your inventory to show description)</p>

          {allData.find((dataItem) => dataItem.name === focusItem.name)?.description}
        </div>
    </div>
  )
}

export default Inventory