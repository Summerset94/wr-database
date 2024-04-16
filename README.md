# WR-Database

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Project consists of two main parts:
- Chinese Winrates translator;
- Champions build calculator;

### Prerequisites

- For editing use [VSCode](https://code.visualstudio.com/download) or any other IDE or text editor of your choice.
- To run localy (from your pc) install [Node.js](https://nodejs.org/en) runtime environment.

### Getting Started

After downloading the source code for project, open the project folder in VSCode:

- **Ctrl+K Ctrl+O** by default or "File" -> Open Folder from top left dropdown menu;
- Open the terminal by pressing **Ctrl+Shift+`** or calling the terminal from Terminal -> New Terminal from top left dropdown menu;
- Make sure that terminal is opened in your project's folder (the end of line should be 'your projects folder'/wr-database); 
- You can navigate in terminal by typing **cd** *folder name*;
  type **cd ../** if you want to move to a parent directory;
  if your folder name have whitespaces in it you need to wrap **the whole path to it** in quotes:
  
  ```bash
  cd 'my project/my folder'
  ```

- Next you need to install the dependencies by typing a command in terminal:

  ```bash
  npm install
  ```

- After dependencies are installed you can run the development server to see the changes you make to project in real time while working on it:

  ```bash
  npm run dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project structure

* next - NextJS compiled files. Ignore
* app - most project files with interface and logic
* hooks - custom React hooks (Javascript functions) for build calculator that emulates game mechanics logic
* node_modules - Node.JS  modules and dependencies will be installed here. Ignore
* public - static files (images) are stored here
* ui - custom interface elements are stored here
* .env - links to API from Tencent national's server
* jsconfig, next-env.d, next.config, package-lock, package, tsconfig - configuration files. Ignore.


# Build calculator


## [Basic champion stats ]

Stored in: "app/data/Champions.jsx"

Each champion is stored as a JS object with following properties:

- `id` - Champion name written in lower case without any whitespaces (i.e. Kai'sa = kaisa, Twisted Fate = twistedfate). Used to associate a champion with it's abilities file;
- `name` - Champion name. For displaying in calculator / leaderboards;
- `title` - Champion title. same as `name` property;
- `icon` - Link to a champion portrait icon;
- `rolePrim` - Champion's primary role;
- `roleSecond` - Champion's secondary role;
  > displayed as icons. Declared in `roles` variable at the top of a file. set with assigned to champions with `roles.x` or `false` on secondary role if a champ doesn't have it
- `...Base` - base value of stat at level 1 (`manaBase: false` for champions with energy/rage/no rescource etc);
- `...Scale` - Growth per level value of stat;
- `moveSpeed` - Champion's base movement speed;
- Attack Speed is a special case:
  * `asBase` - basic champion's Attack Speed. It's used to calculate % bonuses from leveling, items etc
  > Senna is the only exception that I've found so far. She gets only 20% of bonus from items. I.e. if item gives 45% Attack Speed, Senna gets only 9% boost;
  * `asBaseBonus` - % bonus to Attack Speed that champions receive from the start;
  * `asScale` - % bonus that champions receive with each level
  > x*0.022 means growth is 2.2%. Just multiply number by 100;
- `heroId` - Champion identifier from Tencent's server;

## [Calculator]

The main file that handles logic and serves as a collecting hub is

> ui/ChampionPage.jsx

!!! You can **Ctrl+Left Click** on imported (not written in the same file as you are in) functions to access the file with them and see the logic;
!!! if some function has other values in braces i.e. `(champ, currentLevel, baseModifier)` in `useStatsGrowth(champ, currentLevel, baseModifier)` it means that function **needs** those values to work properly;

- `const [currentLevel, setCurrentLevel] = useState(1);` React hook that tracks the level `currentLevel` of selected champion with a simplle function that handles the change of level value. 
  - `<div className='levelSlider'>`...`<div>` - contains a simple slider to change the level of champion with `min` value of 1 and `max` value of 15. you can remove maximum value if you want to experiment and see how champion's stats and some abilities will change at levels past 15 (i.e. in URF)
- `baseModifier` contains small adjustements for Critical Multiplier based on a selected champion (as of 9th of April 2024 the base value is 175%);
- `baseStats` contains a logic for adding level growth bonus to champions. Wild Rift uses the logic similiar to LoL adjusted to 15 level max. The growth is not linear and scale from 75% to 125% of `statScale` value based on level gained. All stats here are considered as **base** stats for further calculations
  > `health` - hp;
  >
  > `mana` - Mana. if champion doesn't use mana (`champ.manaBase ?` checks if champion have mana) sets it as 0 for further calculations since manaless champions still can use tear items;
  >
  > `armor`, `magres`, `attack` - Armor, Magic Resistance and Attack respectively;
  >
  > `ap` - Ability Power;
  >
  > `as` - total 'natural' Attack Speed;
  >
  > `asBase` - 'base' Attack Speed that's used to calculate bonus from items, runes and other sources;
  >
  > `moveSpeed` - Movement Speed;
  >
  > `critMultiplier` - Damage multiplier from Critical Strikes;

- `itemBonus` tracks bonus stats from champion's equipped items. Template for inventory bonus stats is stored in "app/data/ChampTemplates.js -> `itemBonusTemplate`"

  >`health`;
  >
  >`mana`;
  >
  >`armor`;
  >
  >`magres` - Magic Resistance;
  >
  >`attack`;
  >
  >`ap` - Ability Power;
  >
  >`as` - Attack Speed. All items in inventory adds bonus based on champion's base Attack Speed and have 'raw' numbers rather than %;
  >
  >`moveSpeed` - Movement Speed;
  >
  >`flatArmPen` - **Flat** Armor Penetration (what used to be Lethality. But since it doesn't scale anymore it's the same thing basically);
  >
  >`flatMagPen` - **Flat** Magic Penetration;
  >
  >`armPen` - **Percentage** Armor Penetration;
  >
  >`magPen` - **Percentage** Magic Penetration;
  >
  >`critChance` - Critical **Rate / Chance** in raw numbers (ranges from 0 to 1, not from 0 to 100);
  >
  >`CritMultiplier` - Critical **Multiplier** (bonus from Infinity Edge)
  >
  >`armorReduction` - Armor **Reduction** effect, separate from Penetration (see Black Cleaver effects);
  >
  >`magResReduction` - Magic **Reduction** effect. Same as Armor Reduction;
  >
  >`ah` - Ability Haste;
  >
  >`bootsPassive` - tracking the passive defence effects of 'Mercury Threads' and 'Plated Steelcaps'

- `runesEffects` tracks bonus stats from champion's equipped runes. Has same stats as `itemBonus`. Template for bonus stats is stored in "app/data/ChampTemplates.js -> `runesEffectsBonusTemplate`"

- `abilitiesBonus` **tracks** the champion specific abilities that changes champions stats (like bonus Health from Sion's passive, number of Senna's soul stacks). 
- `championModifier` **calculates** effects from champions passives, toggleable and stacked abilities. It has a set of stats with 'Mod' postfix i.e `attackMod` and updates stats as needed based on selected champion. Each stat is separated by "// Stat name" comment line with:

```
switch (champ.name) {
  case '(name of the champion taken from 'name' property of champion from Champions.jsx)':
    (logic that modifies stats);
    break;
  ...(logic for other champions)
  default (standard values)
    (logic);
    break;
}
```

As an example:

```
 //Armor Penetration
  switch (champ.name) {
    case 'Nilah':
      armPenMod = (itemBonus.critChance * 35 / 100);
      break;
  ...other cases
  default:
      armPenMod = 0;
      break;
  }
```

Part responsoble for bonus **Armor Penetration** (`//Armor Penetration`) stat that is provided by Nilah's (`case 'Nilah'`) passive ability. It provides bonus percentage Armor Penetration (`armPenMod`) equal to 35% of Critical Rate (`itemBonus.critChance * 35 / 100`). Only `itemBonus` is taken into account since Critical Rate doesn't grow naturally and is not provided through any rune effect. `break;` tells to stop iterating through other cases. `default: armPenMod = 0;` sets that natural Armor Penetration for champions is absent (or 0);

- `itemEffects` **tracks** some unique abilities of items like Rabadon's Deathcap or Twinguard effects. As of now this variable just tracks the state of effect: is it working or not? If it's auto activated like bonus AD from Muramana, the effect is turned on automatically if champion has item in inventory, otherwise items have buttons to toggle effects.

- `itemEffectsMemo` **calculates** effects of items from `itemEffects` tracker. The pattern is:
   > `const (effect name) = itemEffects.(item effect name) ? (effect) : 0`
   >
   >For Example
   >>- `const tringuardAR` - name of the effect. This on is for Amaranth Twinguard's Armor buff part of effect;
   >>
   >>- `itemEffects.twinguard ?` - checks whether Twinguard is active in `itemEffects` list of effects. It uses 'ternary operator' of JS. It means that it's written of a form of:
   >>>
   >>>`some statement ? first option : second option`
   >>>
   >>>where:
   >>>
   >>>- `some statement` - some argument that we need to check whether it is correct or not;
   >>>
   >>>- `?` - ternary operator that needs **two** arguments separated by `:` and checks if `some statment` is correct (true);
   >>>
   >>>- `first option` - will be activated if `some statement` is correct (true);
   >>>
   >>>- `:` separates first and second options;
   >>>
   >>>- `second option` - will be activated of `some statement` is incorrect (false).
   >>
   >>- `(baseStats.armor + itemBonus.armor + championModifier.armor) * 30 / 100` - logic part that works if effect is present. In our case it adds base champion's Armor `baseStats.armor` at chosen level `currentLevel`, bonus Armor from items `itemBonus.armor` and includes Champion specific values if any are present `championModifier.armor` and multiplies the sum by 30% `* 30 / 100`;
   >>
   >>- `0` - default value that takes into account if effect is not present as **every effect is taken into account** when stats are calculated;

  (!!!) Two effects are not declared as numbers here

  > `forceOfNature` - just checks if champion has "Force Of Nature" in inventory **and** it's effect is active;
  >
  > `bootsPassive` - checks whether "Mercury's Threads" / "Plated Steelcaps" are present in inventory for further calculations;

- `bonusStats` - combines item, runes, champion specific bonuses int a singular bonus stat

  > !!! **Pyke** is present here due to his unique interaction with HP items at:
  >
  >`const combiner` -> `health: champ.name !== 'Pyke' ? itemBonus.health + itemEffectsMemo.health : 0,`
  >
  >Since this function is a final destination of "bonus stats" and Pyke still needs to receive bonus health from items and effects but it just doesn't get added to his HP pool.
  >
  > !!! **Syndra** is present here due the way how her Transcendence passive works:
  >
  >`ap: itemBonus.ap + championModifier.ap + itemEffectsMemo.ap + runesEffects.ap + (abilitiesBonus.syndraP ? (itemBonus.ap + runesEffects.ap * 0.12) : 0),`
  >
  >It's due the fact that her bonus Ability Power from Transcendence is calculated parallel to Rabadon's Deathcap

- `totalMemo` - combines both **Base** and **Bonus** stats into **Total** Stats. Some specifics here:
  >- `const combiner` - just a variable that adds all values together and passes them into `return {...(code here)}` part which is our output;
  >
  >- `dps` - deprecated. Since it's just shows raw AA damage and doesn't take any on-hit items/abilities into effect.
  >
  >- `dmgReductArm` - Damage reduction in % against **Physical Damage**. Pre-reduction raw stat that doesn't take enemy's armor reduction effects into account;
  >
  >- `dmgReductMag` - Damage reduction in % against **Magic Damage**. Pre-reduction raw stat that doesn't take enemy's armor reduction effects into account;
  >
  >- `effectiveHealthArm` - Effective Health pool against **Physical Damage**. Pre-reduction raw stat that doesn't take enemy's armor reduction effects into account;
  >
  >- `effectiveHealthMag` - Effective Health pool against **Magic Damage**. Pre-reduction raw stat that doesn't take enemy's armor reduction effects into account;
  >
  >- `cdr` - Cooldown Reduction. it converts **Ability Haste** into the value that's used in game to calculate cooldown reduction.

- `// state setters for bonuses` - functions to apdate values of
  - `itemBonus` - `updateitemBonus`;
  - `runesEffects` - `updateRunesEffects`;
  - `abilitiesBonus` - `updateAbilitiesBonus`;
  - `itemEffects` - `updateItemEffects`;

- `totalStats` - variable that stores **Total Stats** of both champions and is shared across the calculator (*Champion 1 has no access to Champion 2 base and bonus stats and vice versa*);
  - `totalStats[0]` for Champion 1;
  - `totalStats[1]` for Champion 2;

Whenever total stats `totalMemo` of either champion changes stats are automatically updated via 

```
useEffect(() => {
  setTotalStats(prevTotalStats => {
    const newTotalStats = [...prevTotalStats];
    newTotalStats[index] = totalMemo;
    return newTotalStats;
  });
}, [totalMemo]);
```

 > - `useEffect(() => {}, [dependencies])` is a React specific "hook" that watches for changes in dependencies array and executes a function when any of them are changed;
 >
 >- `index` of a Champion is `0` for Champion 1 and `1` for Champion 2 and are a hardcoded props in "app/calculator/Page.jsx" -> 
  ```
  const pages = [
    {component: <ChampionPage index={0}/>, label: 'Champion 1' },
    {component: <ChampionPage index={1}/>, label: 'Champion 2' }
  ]
  ```
- `statsComparison` compares stats of two selected champions. These numbers are mainly needed to calculate post-mitigation effective damage and defence
  >- `const postMitigationArmor` - function that takes two arguments: `target` - total stats of champion that is a... target, `attacker` - total stats of attacking champion; It takes into account both Reduction and Penetration effects and takes into account the inability to lower defence past 0 with Penetration (Reduction can still do it);
  >
  >- `const postMitigationMres` - same as `postMitigationArmor` but for Magic Defence;
  >
  >- `physicalDamageReduction` and `magicalDamageReduction` - functions that take into account post-mitigation defences and `champ` as an argument (atk / def based on context) to check for unique item passives from Force Of Nature, Mercs or Steelcaps and returns your damage reduction after enemy's defence shred;
  >
  >- in `return` statement:
  >>- `atkPhysRed`, `defPhysRed` - Physical damage reduction of Champ1, Champ2;
  >>
  >>- `atkMagRed`, `defMagRed` - Magic damage reduction of Champ1, Champ2;

- `const [activePageIndex, setActivePageIndex] = useState(0);` - sets an active part of calculator that will be rendered under tables with champions stats. As of now consists of 3 options that are declared below: 

```
const pages = [
    {component: <Abilities
      index={index}
      champ={champ}
      currentLevel={currentLevel}
      base={baseStats}
      bonus={bonusStats}
      mod={statsComparison}       
      atk={atk}
      def={def}    
      updateAbilitiesBonus={updateAbilitiesBonus}
    />, label: 'Abilities' },

    {component: <Inventory
      index={index}
      champ={champ}
      currentLevel={currentLevel}
      base={baseStats}
      bonus={bonusStats}
      total={totalMemo}      
      mod={statsComparison}       
      atk={atk}
      def={def}    
      handleBonusChange={updateitemBonus}
      updateItemEffects={updateItemEffects}
      itemEffects={itemEffects}

    />, label: 'Inventory' },

    {component: <Runes
      base={baseStats}
      bonus={bonusStats}
      total={totalMemo}
      index={index}
      champ={champ}
      currentLevel={currentLevel}   
      mod={statsComparison}       
      atk={atk}
      def={def}
      itemEffects={itemEffects}
      updateRunesEffects={updateRunesEffects}
    />, label: 'Runes' },
  ]
```
The syntax for those are: 
>- `component` - React component `<Component (some optional props)={some data} />` with props (data) that you select to pass to those component as `props name ={variable you want to pass under this name}`;
>
>- `label` - just a name you want to render on screen;

## [Champions abilities]

File that handles importing abilities for selected champion is found in "ui/Abilities.jsx"

It uses `useEffect` React hook to import separate files with champions abilities from "app/data/abilities/(file with champion abilities).jsx".

**!!!** All champion ability files must be named same as `id` property of corresponding Champion from "app/data/Champions.jsx"

A template for champion's abilites is stored in "app/data/abilities/abilitiestemplate.jsx"

- `export default function blank...`: `blank` should be replaced with champion's value of `id` property from "app/data/Champions.jsx";

**!!!** MOST champions don't have the following method implemented and don't separate calculations into a separate variable. But since old variant is hardd to maintain and update all champions after Zyra uses the following schema.

- `const calculations`: contains calculations for abilities with examples stored in `const TEMPLATE` inside `calculations`
  - `base` - base value. Like ability cooldown/damage/whatever at level 1;
  - `growth` - **fixed** bonus that you get on ability level up. For Example if ability has 9 seconds cooldown on level 1 and 7 at level 2, growth would be `-2`; if **base** damage of ability is 55 at level 1 and 90 at level 2. growth will be 90 - 55 = `35`. All growth values are linear so far;
  - modifier - your ability **scaling** for healing/shielding/damage. consists of **source of scaling** (can be multiple, just don't forget to add them together) and **value** in % (in template all set as `value/100` to get % numbers). 
    - `champ` - if ability scales off **base** stat;
    - `bonus` - if ability scales off **bonus** stat;
    - `atk` - if ability scales off **total** stat;
    - `x.ap` - for Ability Power (i.e `atk.ap`);
    - `x.attack` - for Attack Damage (`bonus.attack`, `atk.attack`);
  
  There are empty objects here declared as `const passive` `const q`, `const w`, `const e`, `const r`, for passive ability, ability 1 / Q, ability 2 / W, ability 3 / E, Ultimate ability / R that you can edit according to champion ability specifics.

  under `return` statement of `calculations` you will find the output information with `TEMPLATE` example;

  Each template output example have 4 levels coded in. you can remove the unused levels (for ultimates, static cooldowns and costs).

  - `TEMPLATE` -> `damage` -> `mitigated`: Each formula ends with `(1 - mod.defMagRed)`. This is a template for **Magic Damage** if ability does **Physical damage** replace `defMagRed` with `defPhysRed` so it would take target's physical damage reduction instead of magic damage reduction;

**!!!** If ability scales off Ability Power it doesn't guarantee that it does Magic Damage and vice versa for AD. The type of damage is mentioned in ability's description.

  - `TEMPLATE` -> `text` is just for convenience not to repeat the code in abilities descriptions that are rendered on screen.

- `const abilities` - array that stores abilities descriptions 
  - `<span className="marker--ability">(P / 1 / 2 / 3 / ULT)</span>` write the ability description after `</span>`. This is a line that marks ability name.
  
  - Template for damage: 

  ```
  <h5 className="stat--ad">Damage:</h5>
    <p className="stat--ad">Pre-mitigation: 
      {' '}{Math.round(calculations.q.damage.raw[1])} /
      {' '}{Math.round(calculations.q.damage.raw[2])} /
      {' '}{Math.round(calculations.q.damage.raw[3])} /
      {' '}{Math.round(calculations.q.damage.raw[4])}
    </p>
    <p className="stat--ad">post-mitigation: 
      {' '}{Math.round(calculations.q.damage.mitigated[1])} /
      {' '}{Math.round(calculations.q.damage.mitigated[2])} /
      {' '}{Math.round(calculations.q.damage.mitigated[3])} /
      {' '}{Math.round(calculations.q.damage.mitigated[4])}
    </p>
  ```

Same template (without post-mitigation part) may be applied to healing/shielding abilities:

  > `{' '}{Math.round(calculations.q.healing[1])}`;
  >
  > `{' '}{Math.round(calculations.q.shielding[1])}`;

**!!!** don't forget to change the [color coding](color-coding) for various damage types, healing or shielding abilities!

Part

```
<p>
            
</p>
```

 is reserved with parargraph with ability description, but you can make several paragraphs, it doesn't matter.

 - `return` statement in this component:

 ```
 return(
    <>
    {abilities.map((ability, index) => (
      <div className="abilitiesTile">
        <div key={index}>{ability.description}</div>
        </div>
    ))}   
    </>
     
  )
 ```

 is used to render all abilities on screen.

 ## [Inventory]

 tbd

 ## [Runes]

 tbd

## [Color coding]

For visual clarity throughout the calculator separate CSS styles are corresponding for champions stats that you can use by adding `className=(code)` to HTML mark up. The codes are stored in "app/styles/StatColors.css" and are following:

- Attack Damage (orange): stat--ad;
- Ability Power (pink): stat--ap;
- Armor (yellow): stat--armor;
- Magic Resistance (cyan): stat--magres;
- Health (green): stat--hp;
- Mana (blue): stat--mana;
- Critical Strike (tangerine-orange): stat--critChance;
- Vampirism (red): stat--vamp;
- Attack speed (yellow): stat--as;
- Movement Speed (light-blue): stat--moveSpeed;
- Miscelaneous (coral): stat--misc;