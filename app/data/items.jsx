import {styles as colors} from '../styles/statsColorCode.module.css'

let physicalItemData = [
  
  {
    name: 'Spear of Shojin',
    id: '6da733be-4967-4adf-b991-70c23b5e364b',
    icon: '/images/items/Shojin.webp',   

    description:      
      <div className='itemDescription'>
        <h3 className={colors.stat_hp}>+300 Health</h3>
        <h3 className={colors.stat_ad}>+45 Attack Damage</h3>
        <h3>+20 Ability Haste</h3>
        <p>
          <b>Dargon Awakening</b>: Increases Ability Haste of basic abilities by 25% for 8 seconds after casting an Ultimate, and grants <span className={colors.stat_moveSpeed}>30% bonus Movement Speed</span> that decays over 3 seconds. Scoring a takedown within 8 seconds refreshes the ability's duration (20s cooldown).
        </p>
       </div>

  },

  {
    name: 'Titanic Hydra',
    id: 'f1be809b-e12a-42a1-8da6-601faf1e8ded',
    icon: '/images/items/Titanic_Hydra.webp',   
   
    
    description: <div className='itemDescription'>               
      <h3 className={colors.stat_hp}>+550 Health</h3>

      <p>
        <b>Colossus:</b> Gain <span className={colors.stat_ad}>Attack Damage</span> equal to <span className={colors.stat_ad}>15</span> + <span className={colors.stat_hp}>2.5% bonus Health</span>
      </p>

      <p>
        <b>Cleave: </b> Every 1.75 seconds, your next attack deals bonus <span className={colors.stat_ad}>physical damage</span>  equal to <span className={colors.stat_ad}>25</span> <span className={colors.stat_hp}>+ 3% bonus Health</span> (also applies to turrets), creating a shockwave that deals <span className={color.stat_ad}>physical damage</span> equal to <span className={color.stat_ad}>80</span> + <span className={color.stat_hp}>10% bonus Health</span> to enemies behind the target. (Ranged champions deal 75% of the damage.)
      </p>
    </div>
  },  
  
  {
    name: 'Guardian Angel',
    id: '4bc6ea11-367a-474a-bccb-3205d4e98a28',
    icon: '/images/items/Guardian_Angel.png',

    description: <div className='itemDescription'>               
      <h3 className={colors.stat_ad}>+{40} Attack Damage</h3>
      <h3 className={colors.stat_armor}>+{40} Armor</h3>

      <p>
        <b>Resurrect: </b> Upon taking lethal damage, restores <span className={colors.stat_hp}>50% base Health</span> and <span className={colors.stat_mana}>30% maximum Mana</span> after 4 Seconds of Stasis. (210s. Cooldown)
      </p>
    </div>
  },

  {
    name: 'Bloodthirster',
    id: '76ed5ca4-a1b6-488d-ba3d-46a671f32321',
    icon: "/images/items/Bloodthirster.png",

    description: <div className='itemDescription'>        
      <h3 className={colors.stat_ad}>+ {50} Attack Damage</h3>
      <h3 className={colors.stat_critChance}>+ 25% Critical Rate</h3>

      <p><b>Bloody:</b> <b className={colors.stat_vamp}>+12% Physical Vamp</b>
      </p>
      <p><b>Bloodsworn: </b> Gain <span className={colors.stat_ad}>11 - 25 Attack Damage</span> and <span className={colors.stat_as}>10% Attack Speed</span> when your health is above <span className={colors.stat_hp}> 50%</span>.</p>
    </div>
  },

  {
    name: 'Magnetic Blaster',
    id: '1d7360db-d162-45ab-9e5a-02b89a9ed652',
    icon: '/images/items/Magnetic_Blaster.png',

    description: 
      <div className='itemDescription'>  
        <h3 className={colors.stat_critChance}>+25% Critical Rate</h3>
        <h3 className={colors.stat_as}>+35% Attack Speed</h3>

        <p>
          <b>Fervor:</b> <span className={colors.stat_moveSpeed}>+ 5% Movement speed</span>
        </p>

        <p>
          <b>Energized:</b> Generates energized attack from movement and basic attacks
        </p>

        <p>
          <b>Power Blitz: </b>Energized attacks generate 25% faster, gain 125 attack range (50 range for melee attacks), and deal <span className={colors.stat_ap}> 50-120 (based on level) bonus magic damage</span>. Damage bounces to 5 nearby enemies and can <span className={colors.stat_critChance}>critically strike</span>. 
        </p>
      </div>

  },


  {
    name: 'Blade of the Ruined King',
    id: '66f93b08-f289-4a32-860b-d308ba9e2a39',
    icon: "/images/items/Blade_of_the_Ruined_King.png",

    description: <div className='itemDescription'>
    
      <h3 className={colors.stat_ad}>+20 Attack Damage</h3>
      <h3 className={colors.stat_as}>+35% Attack Speed</h3>

      <p>
        <b>Thirst:</b> <b className={colors.stat_vamp}>+10% Physical Vamp</b>.</p>

      

      <p>
        <b>Ruined Strikes:</b> Attacks deal <span className={colors.stat_ad}>bonus physical damage</span> equal to the <span className={colors.stat_ad}>6% </span> ( <span className={colors.stat_ad}>9% </span> for Melee champions ) current target Health on-hit. Min damage: 15. Max damage vs monsters: 90
      </p>

      <p>
        <b>Drain:</b> Hitting a champion with 3 consecutive attacks or ablilties deals <span className={colors.stat_ap}> 30 (+ 5 per level) magic damage</span> and steals 25% of their Move Speed for 2 Seconds (60s Cooldown).
      </p>

    </div>
  },
  
  {
    name: 'Runaan\'s Hurricane',
    id: '1e1b6730-b0a1-4bba-9327-9ce01ebcb228',
    icon: "/images/items/Runaan's_Hurricane.png",

    description:
      <div className='itemDescription'>
        
        <h3 className={colors.stat_as}>+35% Attack Speed</h3>          

        <p>
          <b>Wind's Favor:</b> Gain <span className={colors.stat_ad}>20 Attack Damage</span> or <span className={colors.stat_ap}>40 Ability Power</span> (Adaptive).
        </p>

        <p>
          <b>Wind Blade</b> Attacks deal <span className={colors.stat_ad}>15 bonus physical damage</span>  on-hit against targets.
        </p>
        <p>Attacks strike 2 additional nearby enemies. Each attack  dealing <span className={colors.stat_ad}>55% Attack Damage </span>. These attacks CAN critically hit and trigger on-hit effects.</p>        
      </div>
  },

  {
    name: 'Youmuu\'s Ghostblade',
    id: '16137316-2954-4233-9ff8-455f188b4eeb',
    icon: "/images/items/Youmuus.png",
    description:
      <div className='itemDescription'>
        
        <h3 className={colors.stat_ad}>+{55} Attack Damage</h3>
        <h3>+{15} Ability Haste</h3>
        <h3>+{15} Lethality/flat armor penetration</h3>

        <p>Moving builds up <b>Momentum</b> stacks, granting up to 40 movement speed at 100 stacks. Stacks decay when movement impaired. </p>
        <p>Attacking with max <b>Momentum</b> consumes all stacks and grants <b className={colors.stat_as}>25% Attack Speed</b> for 4 seconds.</p>
      </div>
  },

  {
    name: 'Duskblade of Draktharr',
    id: '43b53519-f054-4f22-9e8e-18f924954919',
    icon: "/images/items/Duskblade.png",
    description:
      <div className='itemDescription'>
         
        <h3 className={colors.stat_ad}>+{55} Attack Damage</h3>
        <h3>+{10} Ability Haste</h3>
        <h3>+{18} Lethality/flat armor penetration</h3>

        <p><b>Nightstalker:</b> The first attack against a champion deals <span className={colors.stat_ad}> 20 (+ 7.5 per level) physical damage</span> and slows target by 99% for 0.35s (10s cooldown). Champions takedown refresh cooldown duration</p>
      </div>
  },

  {
    name: 'Sterak\'s Gage',
    id: 'eb479246-c514-4e8d-ad51-2b15829135f9',
    icon: "/images/items/Steraks.png",

    description:
      <div className='itemDescription'>           
        <h3 className={colors.stat_hp}>+{400} Max Health</h3>
        <h3>Heavy Handed: <span className={colors.stat_ad}>+50% basic Attack Damage</span> as BONUS attack damage</h3>

        <p><b>Lifeline:</b> Damage that puts you under <span className={colors.stat_hp}>35% Maximum health</span> triggers a <span className={colors.stat_hp}>75% of your bonus health </span> shield that decays Over 3 seconds (90 sec Cooldown)</p>

        <p><b>Sterak's fury:</b> Triggering Lifeline also increases your size and grants <span className='stat--ap'>30% Tenacity</span> for 8 seconds.</p>
      </div>
  },

  {
    name: 'Infinity Edge',
    id: 'a8819bb8-d2eb-487f-9c57-309fb87fbd3a',
    icon: "/images/items/Infinity.png",

    description:
      <div className='itemDescription'>

        <h3 className={colors.stat_ad}>+{55} Attack Damage</h3>
        <h3 className={colors.stat_critChance}>+25% Critical Rate</h3>

        <p><b>Infinity:</b> Critical Strikes deal 30% more Critical Damage</p>
      </div>
  },

  {
    name: 'Mortal Reminder',      
    id: 'e07a126b-b0b8-439c-82ad-54215dac6e64',
    icon: "/images/items/Mortal.png",

    description: 
      <div className='itemDescription'>           
        <h3 className={colors.stat_ad}>+{30} Attack Damage</h3>
        <h3 className={colors.stat_critChance}>+25% Critical Chance</h3>
        <h3>Last Whisper: <span className={colors.stat_armor}>16% - 30% </span> (based on level) Armor Penetration</h3>

        <p><b>Sepsis:</b> Dealing <span className={colors.stat_ad}>Physical Damage</span> to enemy champions apply 40% <abbr title="Reduces healing and regeneration" className={colors.stat_vamp}>Grievous wounds</abbr> to target for 3 seconds.</p>      
      </div>
  },

  {
    name: 'Manamune',
    icon: "/images/items/Manamune.png",
    id: '84b56baf-49f4-4eb4-bf2d-d582e06ec184',

    description: 
      <div className="itemDescription">

        <h3 className={colors.stat_ad}>+{25} Attack Damage</h3>
        <h3 className={colors.stat_mana}>+{300} Max mana</h3>
        <h3>+{20} Ability Haste</h3>

        <p><b>Awe:</b> grants Attacks damage equal to <span className={colors.stat_mana}>1.5% total Mana</span>, refunds <span className={colors.stat_mana}>15%</span> of all Mana spent</p>


        <p><b>Mana Charge:</b> Increase max Mana by <span className={colors.stat_mana}>10</span> every attack or when Mana is spent. Triggers up to 3 times every 12 seconds Caps at <span className={colors.stat_mana}>700</span> bonus Mana and transforms into <b>Manamune</b> </p>
      </div>


  },

  {
    name: 'Muramana',
    icon: "/images/items/Muramana.png",
    id: '6eeb4cbf-344c-48d5-ab42-93755083b65d',
    description: 
      <div className="itemDescription">
        
        <h3 className={colors.stat_ad}>+{25} Attack Damage</h3>
        <h3 className={colors.stat_mana}>+{1000} Max mana</h3>
        <h3>+{20} Ability Haste</h3>

        <p><b>Awe:</b> grants Attacks damage equal to <span className={colors.stat_mana}>1.5% total Mana</span>, refunds <span className={colors.stat_mana}>15%</span> of all Mana spent</p>


        <p><b>Shock:</b> When an <b>attack</b> hits an enemy champion drains <span className={colors.stat_mana}>2.5% of current Mana</span> and deals it as <span className={colors.stat_ad}>Physical damage</span>.</p>
        <p><b>Abilities</b> drains <span className={colors.stat_mana}>4% of current Mana</span> and deals additional
        <span className={colors.stat_mana}>4% of your current Mana</span> <span className={colors.stat_ad}>(+6% of your Attack Damage) physical damage</span>. Only triggers when remaining mana is above <b>20%</b>. Single attack or ability procs only once for one champion.</p>
      </div>
  },

  {
    name: 'Nashor\'s Tooth',
    icon: "/images/items/Nashors.png",
    id: '288067c8-c934-4a2b-8409-a7b1c4f04a52',
    description:
      <div className="itemDescription">
         
        <h3 className={colors.stat_as}>+ 45% Attack Speed</h3>
        <h3>+20 Ability Haste</h3>

        <p><b>Magic Fang:</b> Gain <span className={colors.stat_ad}>30 Attack Damage</span> or <span className='stat--ap'>60 Ability Power</span>(adaptive).</p>

        <p><b>Gnaw:</b> When basic attack hits enemy champions, it will cause
        <span className={colors.stat_ap}>15 (<span className={colors.stat_ad}>+25% bonus AD</span>) (+25% AP)
        bonus Magic damage</span></p>
      </div>
  },

  {
    name: 'Black Cleaver',
    icon: "/images/items/BC.png",
    id:'61a5a2fe-370f-45ca-afa0-c7cb0e773f46',
    description: 
      <div className='itemDescription'>

        <h3 className={colors.stat_hp}>+{350} Max Health</h3>
        <h3 className={colors.stat_ad}>+{40} Attack Damage</h3>
        <h3>+{20} Ability Haste</h3>          

        <p><b>Sunder:</b>dealing <span className={colors.stat_ad}>Physical Damage</span> to a champion reduces their <span className={colors.stat_ad}>Armor</span> by <b>4%</b>, stacking 6 times up to <b>24%</b></p>
      </div>

  },

  {
    name: 'Chempunk Chainsword',
    icon: "/images/items/Chempunk_Chainsword.png",
    id: '3f8e1039-ac42-4551-ad9c-985bc59253b8',
    description: 
      <div className='itemDescription'>

        <h3 className={colors.stat_hp}>+250 Max Health</h3>
        <h3 className={colors.stat_ad}>+45 Attack Damage</h3>
        <h3>+15 Ability Haste</h3>

        <p>
          <b>Punishment: </b>Dealing physical damage to enemy champions applies <span className={colors.stat_critChance}>50% Grievous Wounds</span>.
        </p>
      </div>

  },

  {
    name: 'Trinity Force',
    icon: "/images/items/Trinity.png",
    id: '512f9bdf-5609-4d82-bbc1-8d516b94e6ca',
    description: 
      <div className='itemDescription'>
         
        <h3 className={colors.stat_hp}>+{250} Max Health</h3>
        <h3 className={colors.stat_ad}>+{30} Attack Damage</h3>
        <h3 className={colors.stat_as}>+30% Attack Speed</h3>
        <h3>+{25} Ability Haste</h3>

        <p><b>Fervor: </b><span className={colors.stat_moveSpeed}>+5% Move Speed</span></p>
        <p><b>Spellblade:</b>After casting an ability next basic attack deals <span className={colors.stat_ad}>physical damage</span> equal to <span className={colors.stat_ad}>200% base Attack Damage</span> (1.5s Cooldown)</p>
        <p><b>Rage:</b> Attacks grant <b>20 Move Speed</b> and kills grant <b>60 Move Speed</b> for 2 seconds. Bonuses do not stack. Effect halved for ranged heroes</p>
      </div>,
  },

  {
    name: 'Maw of Malmortius',
    icon: "/images/items/MOM.png",
    id: 'bacdeade-ec6a-4f15-b6d2-b1b72a3cf822',

    description:
    <div className='itemDescription'>
       
      <h3 className={colors.stat_ad}>+{55} Attack Damage</h3>
      <h3 className={colors.stat_magres}>+{45} Magic Resistance</h3>
      <h3>+10 Ability Haste</h3>

      <p>
       <b>Demonbane:</b> <span className={colors.stat_critChance}>20% of the damage dealt by attacks or 15% physical damage dealt by abilities</span>  is converted into a magic shield that absorbs up to <span className={colors.stat_magres}>60-40</span> (based on level) <span className={colors.stat_magres}>magic damage</span>. The shield decays by 5% per second.
      </p>

    </div>
  },

  {
    name: 'Death\'s Dance',
    icon: "/images/items/DD.png",
    id: '8ea6afe0-ed9b-49b4-82a4-1021c10e5bb7',
    description:
      <div className="itemDescription">
   
        <h3 className={colors.stat_ad}>+{35} Attack Damage</h3>
        <h3 className={colors.stat_armor}>+{40} Armor</h3>
        <h3>+{15} Ability Haste</h3>

        <p><b>Cauterize:</b> <span className={colors.stat_ad}>35% Physical Damage </span> received from champions <span className={colors.stat_ad}>(15% for ranged champions)</span> is dealt to you over 3 seconds as <b>True Damage</b> instead</p>
        <p><b>Dance:</b> Champion's takedowns cleanse Cauterize's remaining damage and heal you for <span className={colors.stat_hp}>12% of your total Health</span> over 2 seconds</p>
      </div>
  },

  {
    name: 'Phantom Dancer',
    icon: "/images/items/PD.png",
    id: '4b91553b-fdec-460d-8b5b-a6ead9a6dea6',
    description:
      <div className="itemDescription">
   
        <h3 className={colors.stat_ad}>+{25} Attack Damage</h3>
        <h3 className={colors.stat_critChance}>+{25}% Critical Rate</h3>
        <h3 className={colors.stat_as}>+{30}% Attack Speed</h3>

        <p><b>Shadowwalk:</b>+5% ({Math.round(base.moveSpeed * 0.05)}) Movement Speed</p>

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
       
        <h3 className={colors.stat_ad}>+{25} Attack Damage</h3>
        <h3 className={colors.stat_critChance}>+{25}% Critical Rate</h3>
        <h3 className={colors.stat_as}>+{30}%, +25% ({((base.asBase * 0.3)+ (base.asBase * 0.25)).toFixed(3)}) Attack Speed</h3>

        <p><b>Shadowwalk:</b>+5% ({Math.round(base.moveSpeed * 0.05)}) Movement Speed</p>

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

        <h3 className={colors.stat_as}>+45 %({(base.asBase * 0.45).toFixed(3)}) Attack Speed</h3>
        <h3 className='stat--magres'>+{50} Magic Resistance</h3>

        <p><b>At Wit's End:</b> basic attacks deal <span className='stat--ap'><abbr title="(15 + 65 / 14 * (level - 1))">{Math.round(15 + 65 / 14 * (currentLevel - 1))}</abbr> bonus magic damage</span>. While below <span className={colors.stat_hp}><abbr title="50% max hp">{total.health * 0.5} health</abbr></span> dealing damage to enemy champions heals you for (100% for Melee/33% for ranged) damage dealt</p>
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

        <h3 className={colors.stat_ad}>+{40} Attack Damage</h3>
        <h3 className={colors.stat_as}>+{25}% Critical Rate</h3>
        <h3>+{20} Ability Haste</h3>

        <p>After Attacking a champion your next ability or empowered attack will deal <abbr title="20 + 1 per 10% of critchance">{20 + 1 * Math.round(total.critChance * 10)}%</abbr> more damage. 4s Cooldown. Cooldown reduced for 1s for each basic attack against a champion</p>
        <p>attacks restore <span className={colors.stat_mana}>3% missing mana</span> on hit</p>
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

        <h3 className={colors.stat_ad}>+{40} Attack Damage</h3>
        <h3 className={colors.stat_critChance}>+{25}% Critical Rate</h3>
        <h3 className={colors.stat_as}>+20% ({(base.asBase * 0.2).toFixed(3)}) Attack Speed</h3>

        <p><b>Energized:</b> Moving and attacking generate Energized attack. Energized attack deals <abbr title="50 + 5 per level"><span className='stat--ap'>{50 + 5 * (currentLevel - 1)} bonus Magic Damage</span></abbr> and slow by 75% for 0.5 seconds</p>
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

        <h3 className={colors.stat_ad}>+{40} Attack Damage</h3>
        <h3>+{15} Ability Haste</h3>
        <h3>Last Whisper: <abbr title="15 + your current level"> +{(15 + Number(currentLevel))}%</abbr> Armor Penetration</h3>

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

        <h3 className={colors.stat_critChance}>+{25}% Critical Rate</h3>
        <h3 className={colors.stat_as}>+{40}% ({(base.asBase * 0.4).toFixed(3)}) Attack Speed</h3>
        <h3>+20 Ability Haste</h3>

        <p><b>Sunburst:</b> Using an ability gathers you a stack of <span className='stat--magres'>Radiance</span> for 10 seconds, up to 3 Charges. Attacks that hit enemies use the charge to deal <abbr title="35 + 3 per level"><span className='stat--ap'>{35 + 3 * currentLevel} bonus magic damage on hit</span></abbr>. This bonus can <span className={colors.stat_vamp}>Critically strike</span>. Each unique ability can generate 1 charge every 2 seconds</p>
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

        <h3 className={colors.stat_ad}>+{45} Attack Damage</h3>
        <h3 className={colors.stat_critChance}>+{25}% Critical Rate</h3>
        <h3>+{15} Ability Haste</h3>

        <p><b>Deft Strike:</b> <span className={colors.stat_vamp}>Critical Attakcs</span> reduce your non-ultimate ability cooldowns by 20% of their remaining cooldown</p>
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

        <h3 className={colors.stat_hp}>+{250} Max Health</h3>
        <h3 className={colors.stat_ad}>+{50} Attack Damage</h3>

        <p><b>Gouge: +{8} Armor Penetration</b></p>
        <p><b>Annul:</b> Grants a spell shield that blocks one hostile ability. <b>35 seconds</b> cooldown</p>
      </div>
  },
  
  {
    name: 'Hullbreaker',
    icon: "/images/items/Hullbreaker.png",


    health: 325,
    mana: 0,
    armor: 0,
    magres: 0,
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
    ah: 0,
    armorReduction: 0,

    description: 
      <div className='itemDescription'>

        <h3 className={colors.stat_hp}>+{325} Max Health</h3>
        <h3 className={colors.stat_ad}>+{55} Attack Damage</h3>

        <p><b>Boarding Party:</b> When no allied champions are within 1200 units you get:</p>
        <p><b><u>for Melee:</u> </b> <span className={colors.stat_armor}><abbr title="4 + 46 / 14 * (level - 1)">{Math.round(4 + 46 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className={colors.stat_magres}><abbr title="4 + 16 / 14 * (level - 1)">{Math.round(4 + 16 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
        <p><b><u>for Ranged:</u> </b> <span className={colors.stat_armor}><abbr title="2 + 23 / 14 * (level - 1)">{Math.round(2 + 23 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className={colors.stat_magres}><abbr title="2 + 8 / 14 * (level - 1)">{Math.round(2 + 8 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
        <p>And deal <b>20%</b> additional Damage to Structures</p>

        <p>Nearby Large Minions gain:</p>
        <p><b>(for Melee) </b><span className={colors.stat_ad}>{Math.round(40 + 130 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(20 + 65 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
        <p><b>(for Ranged) </b><span className={colors.stat_ad}>{Math.round(20 + 60 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(10 + 30 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
        <p>Also 10% bonus size and deal 200% bonus damage to turrets</p>
      </div>
  },

  {
    name: 'Hullbreaker (Stacked Melee)',
    icon: "/images/items/Hullbreaker.png",


    health: 325,
    mana: 0,
    armor: (Math.round(4 + 46 / 14 * (currentLevel - 1))),
    magres: (Math.round(4 + 16 / 14 * (currentLevel - 1))),
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
    ah: 0,
    armorReduction: 0,

    description: 
      <div className='itemDescription'>

        <h3 className={colors.stat_hp}>+{325} Max Health</h3>
        <h3 className={colors.stat_ad}>+{55} Attack Damage</h3>

        <p><b>Boarding Party:</b> When no allied champions are within 1200 units you get:</p>
        <p><b><u>for Melee:</u> </b> <span className={colors.stat_armor}><abbr title="4 + 46 / 14 * (level - 1)">{Math.round(4 + 46 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className={colors.stat_magres}><abbr title="4 + 16 / 14 * (level - 1)">{Math.round(4 + 16 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
        <p><b><u>for Ranged:</u> </b> <span className={colors.stat_armor}><abbr title="2 + 23 / 14 * (level - 1)">{Math.round(2 + 23 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className={colors.stat_magres}><abbr title="2 + 8 / 14 * (level - 1)">{Math.round(2 + 8 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
        <p>And deal <b>20%</b> additional Damage to Structures</p>

        <p>Nearby Large Minions gain:</p>
        <p><b>(for Melee) </b><span className={colors.stat_ad}>{Math.round(40 + 130 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(20 + 65 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
        <p><b>(for Ranged) </b><span className={colors.stat_ad}>{Math.round(20 + 60 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(10 + 30 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
        <p>Also 10% bonus size and deal 200% bonus damage to turrets</p>
      </div>
  },

  {
    name: 'Hullbreaker (Stacked Ranged)',
    
    icon: "/images/items/Hullbreaker.png",


    health: 325,
    mana: 0,
    armor: Math.round(2 + 23 / 14 * (currentLevel - 1)),
    magres: Math.round(2 + 8 / 14 * (currentLevel - 1)),
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
    ah: 0,
    armorReduction: 0,

    description: 
      <div className='itemDescription'>

        <h3 className={colors.stat_hp}>+{325} Max Health</h3>
        <h3 className={colors.stat_ad}>+{55} Attack Damage</h3>

        <p><b>Boarding Party:</b> When no allied champions are within 1200 units you get:</p>
        <p><b><u>for Melee:</u> </b> <span className={colors.stat_armor}><abbr title="4 + 46 / 14 * (level - 1)">{Math.round(4 + 46 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className={colors.stat_magres}><abbr title="4 + 16 / 14 * (level - 1)">{Math.round(4 + 16 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
        <p><b><u>for Ranged:</u> </b> <span className={colors.stat_armor}><abbr title="2 + 23 / 14 * (level - 1)">{Math.round(2 + 23 / 14 * (currentLevel - 1))} Armor</abbr></span>, <span className={colors.stat_magres}><abbr title="2 + 8 / 14 * (level - 1)">{Math.round(2 + 8 / 14 * (currentLevel - 1))} Magic Resistance</abbr></span></p>
        <p>And deal <b>20%</b> additional Damage to Structures</p>

        <p>Nearby Large Minions gain:</p>
        <p><b>(for Melee) </b><span className={colors.stat_ad}>{Math.round(40 + 130 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(20 + 65 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
        <p><b>(for Ranged) </b><span className={colors.stat_ad}>{Math.round(20 + 60 / 14 * (currentLevel - 1))} Armor</span> and <span className='stat--magres'>{Math.round(10 + 30 / 14 * (currentLevel - 1))} Magic Resistance</span></p>
        <p>Also 10% bonus size and deal 200% bonus damage to turrets</p>
      </div>
  },

  {
    name: 'Divine Sunderer',
    icon: "/images/items/DivineSunderer.png",


    health: 400,
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

        <h3 className={colors.stat_hp}>+{400} Max Health</h3>
        <h3 className={colors.stat_ad}>+{25} Attack Damage</h3>
        <h3>+25 Ability Haste</h3>

        <p><b>Spellblade:</b>After using an ability your next attack within 10 seconds will deal <abbr title="10% max HP"><span className={colors.stat_hp}>{Math.round((target.health * 0.1)* (1 - modifier))}</span></abbr> as bonus <span className={colors.stat_ad}>Physical damage</span> ( <abbr title="7% max hp"><span className={colors.stat_hp}>{Math.round((target.health * 0.07)* (1 - modifier))}</span></abbr> if attack is ranged)</p>
        <p>Heal for <abbr title="7%  target max hp"><span className={colors.stat_hp}>{Math.round((target.health * 0.07))}</span></abbr> ( <abbr title="3% max hp"><span className={colors.stat_hp}>{Math.round((target.health * 0.03))}</span></abbr> If attack is ranged ).</p>
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

        <h3 className={colors.stat_ad}>+{55} Attack Damage</h3>
        <h3 >+{10} Ability Haste</h3>
        <h3>+{15} Armor Penetration</h3>

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

        <h3 className={colors.stat_ad}>+{40} Attack Damage</h3>
        <h3 className={colors.stat_critChance}>+{25}% Critical Rate</h3>
        <h3 className={colors.stat_as}>+15% ({(base.asBase * 0.15).toFixed(3)}) Attack Speed</h3>
        <h3 className={colors.stat_vamp}>+5% (<abbr title="Damage against 0 armor target / post mitigated for current target">{Math.round(total.attack* 0.05)}/{Math.round((total.attack * 0.05)* (1 - modifier))}</abbr> ) Physical Vamp</h3>

        <p><b>Lifeline:</b> Damage that puts you under <abbr title="35% of Max Health"><span className={colors.stat_hp}>{Math.round(total.health * 0.35)} Health</span></abbr> grants a shield that will absorb <span className={colors.stat_armor}><abbr title="200 + 3 per 1% of critical chance">{Math.round(300 + 3 * (total.critChance * 100))}</abbr> damage</span> for 5 seconds (90 seconds cooldown).</p>
        <p><b>Battle Furor:</b> Triggering lifeline grants <span className={colors.stat_vamp}><abbr title="5% Physical">{Math.round(total.attack * 0.05)} (Current target: {Math.round((total.attack * 0.05)* (1 - modifier))})</abbr>Physical Vamp</span> for 8 seconds</p>
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

        <h3 className={colors.stat_ad}>+{40} Attack Damage</h3>
        <h3 className={colors.stat_critChance}>+{25}% Critical Rate</h3>
        <h3>+10 Armor Penetration</h3>

        <p><b>Death And Taxes:</b> Dealing Damage that would leave an enemy champion below <abbr title="5% of their maximum health"><span className={colors.stat_hp}>{Math.round(target.health)} health</span></abbr> execute them. Champion kills grant additional <span className={colors.stat_armor}>25 Gold.</span></p>
      </div>

  },
  
];

let magicalItemData = [
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

        <h3 className='stat--ap'>+{85} Ability Power</h3>
        <h3 className={colors.stat_mana}>+{300} Max mana</h3>
        <h3>+{20} Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>
        
        <p><b>Discordic Echo:</b> Moving and casting abilities gain stacks of <b>Discord</b>. At <b>100</b> stacks your next active ability or Empowered attack will deal <abbr title="110 + 10% ap. Numbers are pre/post-mitigation"><span className={colors.stat_ap}>{Math.round(110 + total.ap * 0.1)} / {Math.round((110 + total.ap * 0.1)*(1 - modifierMres))} bonus magic damage</span></abbr> to your target and up to 3 mearby enemies</p>
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
        
        <h3 className={colors.stat_ap}>+60 Ability Power</h3>
        <h3 className={colors.stat_mana}>+200 Max Mana</h3>
        <h3>+20 Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic penetration</h3>

      <p><b>Safeguard: </b>Grant a spell shield that blocks the next enemy ability. When the shield is broken, reduce incoming damage by <span>70% for 1s</span> (40s cooldown).</p>

      <p>
        <b>Poise:</b> Provide <abbr title="included in calculations" className={colors.stat_ap}>20 Ability Power</abbr>  while safeguarded. If you deal magic damage to enemy champions while using an active ability, it will reduce Safeguard's cooldown.
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
        
        <h3 className={colors.stat_hp}>+150 Max Health</h3>
        <h3 className={colors.stat_ap}>+{75} Ability Power</h3>
        <h3>+{20} Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

        <p><b>Affliction:</b> Dealing <span className={colors.stat_ap}>Magic Damage</span> applies <span className={colors.stat_vamp}>50% Grievous Wounds</span> to enemy (Reduces the effectiveness of healing and Regeneration effect).</p>
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
    ap: 100,
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

        <h3 className='stat--ap'>+{100} Ability Power</h3>
        <p><b>Overkill:</b> Increases <span className={colors.stat_ap}>Ability Power</span> by <abbr title="20-45% based on level">{Math.round(20 + (25/14 * (currentLevel - 1)))}%</abbr></p>          
        
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

        <h3 className={colors.stat_hp}>+{350} Max Health</h3>
        <h3 className={colors.stat_ap}>+{70} Ability Power</h3>

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

        <h3 className={colors.stat_hp}>+{250} Max Health</h3>
        <h3 className={colors.stat_ap}>+{75} Ability Power</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

        <p><b>Torment:</b> Damaging Abilities or empowered attacks deal <abbr title="(0.5% + 0.005% AP) of enemy Max HP. Shows pre/post-mitigated damage"><span className={colors.stat_ap}>{Math.round((5/100 + 5/1000)*target.health)} / {Math.round((5/100 + 5/1000)*target.health * (1 - modifierMres))} bonus magic damage</span></abbr> each second over 3 seconds</p>
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

        <h3 className="stat--health">+{250} Max Health</h3>
        <h3 className={colors.stat_ap}>+{60} Ability Power</h3>
        <h3 className={colors.stat_mana}>+{300} Max mana</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>       

        <p><b>Eternity:</b> restore <span className={colors.stat_mana}>Mana</span> equal to 15% damage taken from champions. Regen <span className={colors.stat_hp}>Health</span> equal to 20% of mana spent Capped at 25 health per cast.</p>
        <p><b>Veteran:</b> Each stack provides <span className={colors.stat_hp}>20 Health (up to 200)</span>, <span className={colors.stat_mana}>10 Mana (up to 100)</span> and <span className={colors.stat_ap}>6 Ability Power (up to 60)</span>. Gain 1 stack each 45 seconds. 10 stacks maximum</p>
      </div>

  },

  {
    name: 'Rod of Ages (stacked)',
    icon: "/images/items/ROA.png",


    health: 450,
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

        <h3 className="stat--health">+{450} Max Health</h3>
        <h3 className={colors.stat_ap}>+{120} Ability Power</h3>
        <h3 className={colors.stat_mana}>+{400} Max mana</h3>  
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>      

        <p><b>Eternity:</b> restore <span className={colors.stat_mana}>Mana</span> equal to 15% damage taken from champions. Regen <span className={colors.stat_hp}>Health</span> equal to 20% of mana spent Capped at 25 health per cast.</p>
        <p><b>Veteran:</b> Each stack provides <span className={colors.stat_hp}>20 Health (up to 200)</span>, <span className={colors.stat_mana}>10 Mana (up to 100)</span> and <span className={colors.stat_ap}>6 Ability Power (up to 60)</span>. Gain 1 stack each 45 seconds. 10 stacks maximum</p>
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

        <h3 className={colors.stat_ap}>+{80} Ability Power</h3>
        <h3>+{10} Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>
        <h3>Bane: +5% ({Math.round(base.moveSpeed * 5 / 100)}) Move Speed</h3>

        <p><b>Spellblade</b>Using an ability causes next attack used within 10 seconds to deal <span className='stat--ap'><abbr title="75% BASE AD + 50% AP, numbers are pre-post mitigation damage ">{Math.round((base.attack * 75 / 100) + (total.ap * 50 / 100))} / {Math.round(((base.attack * 75 / 100) + (total.ap * 50 / 100) * (1 - modifierMres)))}</abbr> bonus magic damage</span>. Damage is reduced against structures</p>
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

        <h3 className={colors.stat_ap}>+{35} Ability Power</h3>
        <h3 className={colors.stat_mana}>+{500} Max Mana</h3>
        <h3>+{20} Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>
        
        <p><b>Awe:</b> Grants <span className={colors.stat_ap}><abbr title="1% of max mana">{Math.round(total.mana / 100)} Ability Power</abbr></span> and refunds <span className={colors.stat_mana}>25%</span>of all Mana spent</p>
        <p><b>Mana Charge:</b> Increases max Mana by <span className={colors.stat_mana}>15</span> every time mana is spent up to <span className={colors.stat_mana}>700</span> bonus Mana. Triggers up to 3 times every 12 seconds. At max stacks transforms into Seraphs Embrace</p>
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
 
        <h3 className={colors.stat_ap}>+{35} Ability Power</h3>
        <h3 className={colors.stat_mana}>+{1200} Max Mana</h3>
        <h3>+{20} Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

        <p><b>Awe:</b> Grants <abbr title="3% of Max Mana"><span className={colors.stat_ap}>{Math.round(total.mana * 3 / 100)} Ability Power</span></abbr> and refunds <span className={colors.stat_mana}>25%</span>of all Mana spent</p>
        <p><b>Lifeline:</b> Damage that puts you under <abbr title="35% Health"><span className={colors.stat_hp}>{Math.round(total.health * 35 / 100)} Health</span></abbr> consumes <span className={colors.stat_mana}>15% {Math.round(total.mana * 15 / 100)} current Mana</span> to grant a shield equal to <abbr title="15% of Current mana + flat 100 points"><span className={colors.stat_hp}>{Math.round(total.mana * (15/100) + 100)}</span></abbr> for 2 seconds (90 seconds cooldown)</p>
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
    ap: 60,
    as: 0,
    moveSpeed: (base.moveSpeed * 5 / 100),
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

        <h3 className={colors.stat_hp}>+{250} Max Health</h3>
        <h3 className='stat--ap'>+{60} Ability Power</h3>
        <h3>+{10} Ability Haste</h3>

        <p><b>Ardent:</b>+5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</p>
        <p><b>Censer:</b> When you <span className={colors.stat_hp}>heal / shield</span> an allied champion both of you gain <span className={colors.stat_as}><abbr title="10-30%; 10% + 20% / 14 * (level - 1); numbers are for your character">{(((10/100) + (20/100) / 14 * (currentLevel - 1)) * 100).toFixed(2)}%  ({(base.asBase * ((10/100) + (20/100) / 14 * (currentLevel - 1))).toFixed(3)})</abbr> Attack Speed</span> And your Attacks deal <abbr title="15 + level"><span className='stat--ap'>{15 + Number(currentLevel)} bonus Magic Damage</span></abbr> for 6 seconds. Regen effects do not trigger this effect.</p>
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

        <h3 className={colors.stat_ap}>+{75} Ability Power</h3>
        <h3 className={colors.stat_mana}>+{300} Max Mana</h3>
        <h3>+{10} Ability Haste</h3>

        <p><b>Harmonic Echo:</b> Moving and casting abilities build Harmony stacks. At 100 stacks your next healing / shielding ability coast on ally restores <abbr title="130 + 10% AP"><span className={colors.stat_hp}>{Math.round(130 + (total.ap * 10 / 100))} Health</span></abbr> to your target and up to 3 nearby allied champions</p>
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

        <h3 className={colors.stat_hp}>+{150} Max Health</h3>
        <h3 className={colors.stat_ap}>+{65} Ability Power</h3>
        <h3>+{20} Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

        <p><b>Soul Hunt:</b> <span className={colors.stat_ap}>+15 Magic Penetration</span></p>
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


        <h3 className={colors.stat_hp}>+70 Max Health</h3>
        <h3 className={colors.stat_ap}>+25 Ability Power</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

        <p>
          <b>Glory: </b>Gain Glory stacks when engaging in taking down enemy champions, up to a maximum of 30 stacks. Lose 10 stacks on death. Melee champions gain 3 stacks for each champion kill and 2 stacks for each assist. Ranged champions gain 4 stacks for each champion kill and 2 stacks for each assist.
        </p>

        <p>
          <b>Fear: </b> Gain <span className={colors.stat_ap}>5 Ability Power</span> for each stack of Glory, and <span className={colors.stat_moveSpeed}>10% bonus movement speed</span> once you reach at least 10 stacks of Glory.
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
    ap: 180,
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

        <h3 className={colors.stat_hp}>+100 Max Health</h3>
        <h3 className={colors.stat_ap}>+180 Ability Power</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

        <p>
          <b>Glory: </b>Gain Glory stacks when engaging in taking down enemy champions, up to a maximum of 30 stacks. Lose 10 stacks on death. Melee champions gain 3 stacks for each champion kill and 2 stacks for each assist. Ranged champions gain 4 stacks for each champion kill and 2 stacks for each assist.
        </p>

        <p>
          <b>Fear: </b> Gain <span className={colors.stat_ap}>5 Ability Power</span> for each stack of Glory, and <span className={colors.stat_moveSpeed}>10% bonus movement speed</span> once you reach at least 10 stacks of Glory.
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

        <h3 className={colors.stat_hp}>+200 Max Health</h3>
        <h3 className={colors.stat_ap}>+80 Ability Power</h3>
        <h3>+10 Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

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
        <h3 className={colors.stat_ap}>+85 Ability Power</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

        <p><b>Destiny:</b> +5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</p>
        <p><b>Balance:</b> <span className={colors.stat_ap}>+{15} Magic Penetration</span></p>
        <p><b>Inevitable Demise: </b> Abilities and empowered attacks <span className={colors.stat_vamp}>Critically Strike</span> for 20% bonus damage against enemies below <span className={colors.stat_hp}>35% <abbr title="For current target">({Math.round(target.health * 35 / 100)})</abbr> Health</span></p>
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

        <h3 className={colors.stat_ap}>+{65} Ability Power</h3>
        <h3 className={colors.stat_mana}>+{300} Max Mana</h3>
        <h3>+{20} Ability Haste</h3>

        <p><b>Riptide:</b> <span className={colors.stat_hp}>Healing / Shielding</span> an ally grants you both <b>15 Ability Haste</b> and <abbr title="20 - 40 ;(20 + 20 / 14 * (target's level - 1)) number is target's level = your level"><span className={colors.stat_ap}>{Math.round(20 + 20 / 14 * (currentLevel - 1))} Ability Power</span></abbr> for 6 seconds</p>
      </div>

  },

  {
    name: 'Crystaline Reflector',
    icon: "/images/items/Crystalline_Reflector.png",


    health: 200,
    mana: 0,
    armor: 45,
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

        <h3 className={colors.stat_hp}>+200 Max Health</h3>
        <h3 className={colors.stat_armor}>+{35} Armor</h3>
        <h3 className={colors.stat_ap}>+{60} Ability Power</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>
        

        <p>
          <b>Mirrored Force:</b>  Gain the mirror shard for 3s each time while casting champion abilities, the duration time of the fragment can not be stacked. During the fragment`s existence, it blocks <abbr title="8-25 based on level" className={colors.stat_ad}>{Math.round(8 + 17/14*(currentLevel - 1))} physical damage</abbr>  from the enemy champion, and deals <abbr title="10 + 3% Ability Power + 1% bonus health" className={colors.stat_ap}> {Math.round(10 + (total.ap * 3 / 100)+ (bonus.health /100))} magic damage</abbr>.
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

        <h3 className={colors.stat_hp}>+{200} Max Health</h3>
        <h3 className='stat--ap'>+{40} Ability Power</h3>
        <h3>+20 Ability Haste</h3>

        <p><b>Coordinated Fire:</b> Abilities that slow/immobilize a champion deal <abbr title="47-75; 45 + 2 * level; numbers are pre/post-mitigation"><span className={colors.stat_ap}>{45 + 2 * currentLevel} / {Math.round((45 + 2 * currentLevel) * (1 - modifierMres))} Magic Damage</span></abbr> and marks them for 4 seconds (6 seconds cooldown). Allied champion damage detonates the mark dealing <abbr title="94 - 150; 90 + 4 * level; numbers are pre/post-mitigated damage"><span className={colors.stat_ap}>{Math.round(90 + 4 * currentLevel)} / {Math.round((90 + 4 * currentLevel) * (1 - modifierMres))} Magic Damage</span></abbr> and granting you both <abbr title="Value for your champion">20% ({Math.round(base.moveSpeed * 20 / 100)}) Movement Speed</abbr> for 2 seconds</p>
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

        <h3 className={colors.stat_ap}>+75 Ability Power</h3>
        <h3>+30 Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>
                  
        <h3>Hyperdrive: +5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement speed</h3>

        <p><b>Spellweaving: </b>Active abilities and empowered attacks grant <abbr title="30 + 70% Ability Haste" className={colors.stat_moveSpeed}><b>{Math.round(30 + (total.ah * 70 /100))} Movement Speed</b></abbr> after dealing damage to enemy champion. This movement speed decays over 2 seconds. Each source has 1s cooldown for triggering the effect. Only <b>Ability Haste</b> from items contributes to Spellweaving's movement speed</p>
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

        <h3 className={colors.stat_hp}>+150 Max Health</h3>
        <h3 className={colors.stat_ap}>+80 Ability Power</h3>
        <h3>+15 Ability Haste</h3>
        <h3 className={colors.stat_vamp}>+12% Omnivamp</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>

        <p><b>Void Corruption:</b> When in combat with champions gain 1 stack of <b>Corruption</b> every 1 seconds. Every stacks increases the damage you deal by 3% up to 3 stacks. At 3 stacks additional damage becomes <b className={colors.stat_vamp}>true damage</b>.</p>
      </div>

  },

  {
    name: 'Horizon Focus',
    icon: "/images/items/Horizon_Focus.webp",

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

        <h3 className={colors.stat_hp}>+150 Max Health</h3>
        <h3 className={colors.stat_ap}>+80 Ability Power</h3>
        <h3>+15 Ability Haste</h3>
        <h3 className={colors.stat_magres}>+7% Magic Penetration</h3>
        
        <p><b>Hypershot:</b> Apply 1 mark when you damage enemy champion with non-targeted ability from 500 units away; apply 2 marks for immobolizing. MArked enemies are revealed. At 3 stacks detonate them  to deal <abbr title="90 +25% AP; numbers are pre/post-mitigation"><span className={colors.stat_ap}>{Math.round(90 + (total.ap * 25 / 100))} / {Math.round((90 + (total.ap * 25 / 100)) * (1 - modifierMres))} Magic damage</span></abbr> to the target.</p>
      </div>

  },
];

let defenceItemData = [
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
        <h3 className={colors.stat_hp}>+500 Max Health</h3>
        <h3>+15 Ability Haste</h3>

        <p><b>Immolate:</b> deals <abbr title="(16 + 9 / 14 * (level - 1)) + 0.8% of BONUS hp; pre/post mitigation numbers"><span className={colors.stat_ap}>{Math.round(sunFireEffect)} / {Math.round((sunFireEffect * (1 - modifierMres)))} Magic Damage</span></abbr> per second to nearby enemies. <span className={colors.stat_ap}>Immolate</span> increases it's damage by 7% for 5s, stacking up to 6 times to: <span className={colors.stat_ap}>{Math.round((sunFireEffect) + (sunFireEffect * 7 / 100 * 6))} / {Math.round((((sunFireEffect) + (sunFireEffect * 7 / 100 * 6)) * (1 - modifierMres)))}</span></p> 
        <p><b>Flametouch:</b> At max stacks <span className={colors.stat_ap}>Immolate</span> stacks attacks burn enemies for <abbr title="50% of immolates damage" className={colors.stat_ap}>{Math.round(((sunFireEffect) + (sunFireEffect * 7 / 100 * 6))/2)} / {Math.round(((((sunFireEffect) + (sunFireEffect * 7 / 100 * 6)) * (1 - modifierMres)))/2)} Magic Damage</abbr>. Immolate deals <abbr title="130%" className={colors.stat_ap}>{Math.round(((sunFireEffect) + (sunFireEffect * 7 / 100 * 6))*(130/100))} Damage to monsters</abbr> and <abbr title="175% + 75% / 14 * (level - 1)" className={colors.stat_ap}>{Math.round(sunFireEffect * (1.75 + 0.75 / 14 * (currentLevel - 1)))} Damage</abbr> to minions</p>         
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
        <h3 className={colors.stat_hp}>+700 Health</h3>
        <h3 className={colors.stat_hp}>150% base Health regeneration</h3>
        <h3>20 Ability Haste</h3>

        <div>
          <p>Heartsteel Effect:</p>
          <ul>
            <li>Current bonus: {(heartsteelStacks).toFixed(0)}</li>
            
            <li>Change number of stacks: <input
             type="number" 
             min="0"
             value={(heartsteelStacks).toFixed(0)}
             onChange={(e) => {updateHeartsteel(e)}} /></li>

            <li><button onClick={heartSteelProc}>Emulate current target strike</button></li>
            <li><button onClick={() => {setHeartsteelStacks(oldStacks => 0)}}>Reset stacks</button></li>
            
          </ul>
        </div>

        <p>
          <b>Colossal Consumption:</b> While within 700 units of an enemy champion, charges for 3 seconds befo
          re dealing a huge strike against the enemy champion. This charged attack deals bonus physical damage equal to 120 + 5% of maximum Health (<span className={colors.stat_ad}>{Math.round((120 + attacker.health * 5 / 100) * (1 - modifier))} damage</span>), and grants maximum Health equal to 15% of the damage dealt. The charge for each target has a 20-second cooldown.
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

        <h3 className={colors.stat_hp}>+350 Max Health</h3>
        <h3 className={colors.stat_hp}>+100% Health Regen</h3>
        <h3 className={colors.stat_magres}>+50 Magic Resistance</h3>
        <h3>+20 Ability Haste</h3>

        <p><b>Blessed:</b> Increases all healing and shielding effects on you by <span className={colors.stat_hp}>30%</span></p>
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

        <h3 className={colors.stat_hp}>+400 Max Health</h3>
        <h3 className={colors.stat_armor}>+65 Armor</h3>

        <p><b>Cold Steel:</b> reduces the attack speed of enemies by <b>15%</b> when struck by basic attack</p>
        <p><b>Determination:</b> When you are getting critically struck store (25% for melee / 18% for ranged) pre-mitigation damage received as Datermination stacks for 5 seconds (500 stacks max). When you attack an enemy champion, consume all Determination and heal yourself for the same amount. If you still have unconsumed Determination after 5 seconds, automatically consume all Determination to heal yourself for half of the amount.</p>
      </div>

  },

  {
    name: 'Thornmail',
    icon: "/images/items/Thornmail.webp",

    health: 100,
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

        <h3 className={colors.stat_hp}>+100 Max Health</h3>
        <h3 className={colors.stat_armor}>+75 Armor</h3>

        <p><b>Thorns: </b>When struck by attack deal <abbr title="20 + 6% bonus armor + 1% bonus HP; numbers are pre/post-mitigation" className={colors.stat_vamp}>{Math.round((20 + (bonus.armor * 6 / 100) + (bonus.health /100)))}
        / {Math.round((20 + (bonus.armor * 6 / 100) + (bonus.health /100)) * (1 - modifierMres))} Magic Damage</abbr> to the attacker and apply <span className={colors.stat_vamp}>50% Grievous Wounds</span>.</p>
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
        <h3 className={colors.stat_hp}>+700 Max Health</h3>
        <h3 className={colors.stat_hp}>+200% Health Regen</h3>
        <h3>+10 Ability Haste</h3>

        <p><b>Warmog's Heart:</b> If you have at least <span className={colors.stat_hp}>950 bonus health</span>, and did not take any damage within last 6 seconds, restore <abbr title="5% Max health" className={colors.stat_hp}>{Math.round(total.health * 5 / 100)} Health</abbr> per second</p>
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

        <h3 className={colors.stat_hp}>+250 Max Health</h3>
        <h3 className={colors.stat_armor}>+50 Armor</h3>
        <h3 className={colors.stat_mana}>+250 Max Mana</h3>

        <p><b>Spellblade: </b>Using an ability causes the next attack within 10 seconds to deal <abbr title="100% base AD + 25% armor; numbers are pre/post mitigation" className={colors.stat_ad}>{Math.round(base.attack + (bonus.armor / 4))} / {Math.round((base.attack + (bonus.armor / 4)) * (1 - modifier))} Bonus Physical Damage</abbr> in an area and creates an icy zone for 2 seconds that slows by <b>30%</b>. Armor increases the size of a field (1.5s Cooldown). Damage is reduced against structures.</p>
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

        <h3 className="stat--health">+250 Max Health</h3>
        <h3 className={colors.stat_armor}>+50 Armor</h3>

        <p><b>Relentless:</b> +5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</p>

        <p><b>Momentum:</b> Moving builds up stacks, granting up to 40 Movement Speed at 100 stacks. Attacking removes all Momentum stacks, stacks decay when movement impaired.</p>

        <p><b>Crushing blow:</b> Attacks deal up to <span className={colors.stat_ap}>100 <abbr title="post-mitigation">({Math.round(100 * (1 - modifierMres))})</abbr> Bonus Magic Damage</span> based on Momentum removed . Attacks with max Momentum slows the target by 50% for 1 second.</p>
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

        <h3 className={colors.stat_hp}>+300 Max Health</h3>
        <h3 className={colors.stat_magres}>+40 Magic Resistance</h3>
        <h3 className={colors.stat_mana}>+300 Max Mana</h3>
        <h3>+10 Ability Haste</h3>

        <p><b>Eternity:</b> restore <span className={colors.stat_mana}>Mana</span> equal to 15% damage taken from champions. Regen <span className={colors.stat_hp}>Health</span> equal to 20% of mana spent Capped at 25 health per cast.</p>
        <p><b>Abyssal</b> store <span>20% pre-mitigation magic damage</span> taken for 5 seconds. When you immobilize the champion explode stacks for <span className={colors.stat_ap}>Magic Damage</span> equal to stored stacks.</p>
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
        <h3 className={colors.stat_hp}>+350 Maximum Health</h3>
        <h3 className={colors.stat_armor}>+40 Armor</h3>          
        <h3 className={colors.stat_mana}>+150 Max mana</h3>
        <h3>+10 Ability Haste</h3>

        <p>
         <b>Harbringer:</b> While near an allied champion, casting your ultimate ability grants you and a nearby allied champion bonus effects for 10 seconds. Prioritizes highest attack damage ally. You have a 300 range aura that slows enemies within by 20%, and your ally's basic attacks burn their target dealing <span className={colors.stat_ap}>30% bonus magic damage</span> over 2 seconds. 
        </p>
        <p>
          <b>Frostfire Covenant: </b>Slowing a burning enemy with your frost aura deals <span className={colors.stat_ap}>60 <abbr title="post-mitigated for current target">({Math.round(60 * (1 - modifierMres))})</abbr> magic damage per second</span>  to nearby enemies and slow them by 50% for 3 seconds. 
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

        <h3 className={colors.stat_hp}>+350 Max Health</h3>
        <h3 className={colors.stat_armor}>+40 Armor</h3>
        <h3>+10 Ability Haste</h3>

        <p><b>Proptector:</b> Raise your guard when you're near an allied champion. If you or ally take damage, both of you receive <abbr title="125 + 30% BONUS HP" className={colors.stat_hp}>{Math.round(125 + (bonus.health * 30 / 100))} shield</abbr> for 1.5 seconds. 20 seconds cooldown.</p>
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
        <h3 className={colors.stat_hp}>+350 Max Health</h3>
        <h3 className={colors.stat_mana}>+500 Max Mana</h3>
        <h3>+15 Ability Haste</h3>

        <p><b>Awe:</b> Grants <abbr title="8% of Max mana" className={colors.stat_hp}>{Math.round(total.mana * 8 / 100)} bonus Health</abbr> and refunds <span className={colors.stat_mana}>15%</span> of Mana spent</p>
        <p><b>Mana Charge:</b> Increases <span className={colors.stat_mana}>Max mana by 12</span> every Attack, when mana is spent or on taking damage from champions/minions/monsters. Generates up to 3 stacks every 12 seconds. Caps at <span className={colors.stat_mana}>700 mana</span> and transforms into <b>Fimbulwinter</b></p>
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

    <h3 className={colors.stat_hp}>+350 Max Health</h3>
    <h3 className={colors.stat_mana}>+1200 Max Mana</h3>
    <h3>+15 Ability Haste</h3>

    <p><b>Awe:</b> Grants <abbr title="8% of Max mana" className={colors.stat_hp}>{Math.round(total.mana * 8 / 100)} bonus Health</abbr> and refunds <span className={colors.stat_mana}>15%</span> of Mana spent</p>
    <p><b>Frozen Colossus:</b> Immobilizing or slowing an enemy champion consumes <span className={colors.stat_mana}>3% ({Math.round(total.mana * 3/100)}) current Mana</span> and grants a shield for 3 seconds, absorbing <span className={colors.stat_hp}>{Math.round(100 + 100 / 14 * (currentLevel - 1) + total.mana * 5/100)}</span>, icreased by <b>80%</b> if there are more than 1 enemy champion nearby. Shield triggers when above <abbr title="20% Max" className={colors.stat_mana}>{Math.round(total.mana / 5)} Mana</abbr> (8s Cooldown).</p>
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

        <h3 className={colors.stat_armor}>+80 Armor</h3>
        <h3 className={colors.stat_mana}>+200 Max mana</h3>
        <h3>+25 Ability Haste</h3>

        <p><b>Winter's Caress:</b> Basic Attacks and <span className={colors.stat_ap}>Magic Damage</span> caused by you or inflicted upon you will apply stacks of Chill to enemy for 3 Seconds. Each stack reduce <b>Attack Speed</b> by <b>9%</b> up to a maximum of <b>36%</b> at <b>4 stacks</b>. Each individual ability has a 3 second cooldown on applying stacks.</p>
      </div>

  },

  {
    name: 'Force of Nature',
    icon: "/images/items/Force_of_Nature.png",

  
    health: 350,
    mana: 0,
    armor: 0,
    magres: 50,
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

        <h3 className={colors.stat_hp}>+350 Max Health</h3>
        <h3 className={colors.stat_magres}>+50 Magic resistance</h3>
        <h3>+5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</h3>

        
        <button onClick={() => updateItemEffects({ forceOfNature: !itemEffects.forceOfNature })}>
          Max stacks on / off
        </button>
        <p>
          <sub>*switch stacks off before changing to other item. Stacks don't remove by themselves.</sub>
        </p>

        <p>
          <b>Absorb:</b> Taking ability damage from enemy champions grants 1 stack of Steadfast for 7 seconds, max 6 stacks. Dealing damage to enemy champions refresh effect duration. at maximum stacks gain 10% ({Math.round(base.moveSpeed /10)}) Movement Speed and reduce all incoming magic damage by 25%.
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
        <h3 className={colors.stat_hp}>+425 Max Health</h3>
        <h3>+25 Ability Haste</h3>
        <h3>+5% ({Math.round(base.moveSpeed * 5 / 100)}) Movement Speed</h3>

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

        <h3 className={colors.stat_hp}>+250 Max Health</h3>
        <h3 className={colors.stat_armor}>+50 Armor</h3>
        <h3 className={colors.stat_magres}>+30 Magic Resistance</h3>

        <p>
          <b>Dawnbringer:</b> If you are within 400 units of enemy champion and you immobilize them or getting immobilized, reveal all nearby enemy champions and deal them <abbr title="80 + 5% BONUS HP; numbers are pre/post-mitigation" className={colors.stat_ap}>{Math.round(80 + bonus.health / 20 )} / {Math.round((80 + bonus.health / 20 ) * (1 - modifierMres))} Magic Damage</abbr>. (3 seconds Cooldown)
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

        <h3 className={colors.stat_armor}>+60 Armor</h3>
        <h3 className={colors.stat_magres}>+60 Magic Resistance</h3>

        <button onClick={() => updateItemEffects({ twinguard: !itemEffects.twinguard })}>
          Effect on / off
        </button>
        <p><sub>* please, disable bonus defence before changing items - it does not auto updates for now</sub></p>
        <p>
          <b>Endurance:</b> Gain 1 stack every 1 seconds while in combat with Enemy Champions.
        </p>
        <p>
          At full stacks gain 20% size, 20% Tenacity, increase both <span className={colors.stat_ad}>Armor</span> and <span className={colors.stat_magres}>Magic resistance</span> by 30% until Out Of Combat with enemy champions
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

        <h3 className={colors.stat_hp}>+200 Max Health</h3>
        <h3 className={colors.stat_armor}>+40 Armor</h3>
        <h3 className={colors.stat_magres}>+40 Magic Resistance</h3>

        <p>
          <b>Lifeline:</b> Damage that puts you under <abbr title="35% max HP" className={colors.stat_hp}>{Math.round(total.health * 35 / 100)} Health</abbr> grants bonus max Health equal to <abbr title="200 + 50% BONUS HP" className={colors.stat_hp}>{Math.round(200 + bonus.health/2)} health</abbr> over 3 seconds, and provides <b>50% Slow Resistance</b> and <b>30 Movement Speed</b> for 3 seconds (90 second cooldown).
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

        <h3 className={colors.stat_hp}>+300 Max Health</h3>
        <h3 className={colors.stat_armor}>+50 Armor</h3>

        <p>
          <b>Fiery Touch:</b> After dealing damage with an attack or ability, burn target for 3 seconds dealing <abbr title="1.4% max HP damage. Numbers for current target pre-post/mitigation" className={colors.stat_ap}>{Math.round((target.health * 14 /1000))} / {Math.round((target.health * 14 /1000) * (1 - modifierMres))} Magic Damage</abbr> per second. Reduced to <span className={colors.stat_ap}>{Math.round((target.health * 7 /1000))} / {Math.round((target.health * 7 /1000) * (1 - modifierMres))}</span> for ranged users. Deals 150% damage to minions and monsters. Maximum 125 damage to monsters.
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

        <h3 className={colors.stat_hp}>+80 Health</h3>
        <h3>+5 Ability Hate</h3>

        <p><b>Offering:</b> Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, nearby minions that die will each consume a charge. Consuming a charge will grant 65 gold and heal you for 20 - 80 (based on missing health) You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold Gold 100% kill gold to the nearby ally.</p>
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

        <h3 className={colors.stat_hp}>+375 (125 + 250) Health</h3>
        <h3><span className={colors.stat_ad}>+20 Attack Damage</span> or <span className={colors.stat_ap}>+40 Ability Power</span> (Adaptive)</h3>
        <h3>+15 Ability Haste</h3>

        <p>
          <b>Soulcast:</b> Every 60 seconds gain <b>75 Gold</b> <span className={colors.stat_hp}>25 Health</span>, and <span className={colors.stat_ad}>2 AD</span> or <span className={colors.stat_ap}>4 AP</span> (Adaptive) up to a maximum of <span className={colors.stat_hp}>250 Health,</span> and <span className={colors.stat_ad}>20 AD</span> or <span className={colors.stat_ap}>40 AP</span> (Adaptive).
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

        <p><b>Versatile:</b> Gain <span className={colors.stat_ad}>10 Attack Damage</span> or <span className={colors.stat_ap}>20 Ability Power</span> (Adaptive).</p>

        <p><b>Tribute:</b>  Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, your damaging abilities and attacks against champions and structures consume up to one charge per attack or cast. Consuming a charge grants 65 gold and heals for <span className={colors.stat_hp}>20 - 80 health (based on missing health)</span> . You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold to the nearby ally.</p>

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

        <h3>+10 Ability Haste</h3>

        <p>
          <b>Versatile:</b> Gain <span className={colors.stat_ad}>14 Attack Damage</span> or <span stat--ap>28 Ability Power</span> (Adaptive).
        </p>

        <p>
          <b>Soulcast:</b> Every 60 seconds gain <b>75 Gold</b> <span className={colors.stat_hp}>25 Health</span>, and <span className={colors.stat_ad}>2 AD</span> or <span className={colors.stat_ap}>4 AP</span> (Adaptive) up to a maximum of <span className={colors.stat_hp}>250 Health,</span> and <span className={colors.stat_ad}>20 AD</span> or <span className={colors.stat_ap}>40 AP</span> (Adaptive). 
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

        <h3 className={colors.stat_hp}>+175 Max Health</h3>
        <h3>+10 Ability Haste</h3>

        <p>
          <b>Spoils of War:</b> Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, your basic attacks execute minions below <span className={colors.stat_hp}>65% of their maximum health</span>, consuming 1 charge per minion. Consuming a charge will heal you for <span className={colors.stat_hp}>15 - 65 (based on missing health)</span>, as well as grant 65 Gold to you and 100% kill gold to the nearest allied champion. You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold to the nearby ally.
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

        <h3 className={colors.stat_hp}>+175 Max Health</h3>
        <h3>+10 Ability Haste</h3>

        <p>
          <b>Soulcast:</b> Every 60 seconds gain <b>75 Gold</b> <span className={colors.stat_hp}>25 Health</span>, and <span className={colors.stat_ad}>2 AD</span> or <span className={colors.stat_ap}>4 AP</span> (Adaptive) up to a maximum of <span className={colors.stat_hp}>250 Health,</span> and <span className={colors.stat_ad}>20 AD</span> or <span className={colors.stat_ap}>40 AP</span> (Adaptive).
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
          <h3 className={colors.stat_moveSpeed}>+25 Movement Speed</h3>  
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

          <h3 className={colors.stat_ad}>+35 Attack Damage</h3>
          <h3 className={colors.stat_moveSpeed}>+45 Movement Speed</h3>

          <p>
            <b>Conversion:</b> <span className={colors.stat_vamp}>+7% Omnivamp (Total / Current: {Math.round((total.attack * 7 /100))} / {Math.round((total.attack * 7  / 100)* (1 - modifier))}; <abbr title="For now it does not calculate your ability damage. placeholder with formula same for AA, just for AP"><span className={colors.stat_ap}>{Math.round((total.ap * 7 / 100))} / {Math.round((total.ap * 7 / 100)* (1 - modifierMres))}</span></abbr> )</span>  
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
      attack: 18,
      ap: 0,
      as: (base.asBase * 30/100),
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

          <h3 className={colors.stat_ad}>+15 Attack Damage</h3>
          <h3 className={colors.stat_as}>+30% ({(base.asBase * 30 / 100).toFixed(3)}) Attack Speed</h3>
          <h3 className={colors.stat_moveSpeed}>+45 Movement Speed</h3>

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

          <h3 className={colors.stat_hp}>+150 Max Health</h3>
          <h3 className={colors.stat_hp}>+100% Health Regen</h3>
          <h3 className={colors.stat_magres}>+35 Magic Resistance</h3>
          <h3 className={colors.stat_moveSpeed}>+45 Movement Speed</h3>

          <p>
            <b>Dissolve:</b> reduces <span className={colors.stat_ap}>magic damage</span> taken by 12% 
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

          <h3 className={colors.stat_hp}>+150 Max Health</h3>
          <h3 className={colors.stat_hp}>+100% Health Regen</h3>
          <h3 className={colors.stat_armor}>+35 Armor</h3>
          <h3 className={colors.stat_moveSpeed}>+45 Movement Speed</h3>

          <p>
            <b>Block:</b> reduces <span className={colors.stat_ad}>physical damage</span> taken by 10% 
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

          <h3 className={colors.stat_hp}>+150 Max Health</h3>
          <h3>+30 Ability Haste</h3>
          <h3 className={colors.stat_moveSpeed}>+45 Movement Speed</h3>

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

          <h3 className={colors.stat_ap}>+55 Ability Power</h3>
          <h3 className={colors.stat_mana}>+150% Mana Regeneration</h3>
          <h3 className={colors.stat_moveSpeed}>+45 Movement Speed</h3>
          <h3 className={colors.stat_magres}>+8 Magic Penetration</h3>  
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

          <h3 className={colors.stat_ad}>+30 Attack Damage</h3>
          <h3 className={colors.stat_moveSpeed}>+45 Movement Speed</h3>
          <h3>Strike: <span className={colors.stat_armor}>+8 Armor Penetration</span></h3>  
        </div>

    },

];

const allData = [...physicalItemData, ...magicalItemData, ...defenceItemData, ...supportItemData, ...bootsItemData]