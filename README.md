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


**Basic stats about champions** 

Stored in:

> app/data/Champions.jsx

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

**Calculator**

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

- `itemBonus` tracks bonus stats from champion's equipped items. Template for inventory bonus stats is stored in 

>app/data/ChampTemplates.js -> `itemBonusTemplate`


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

- `runesEffects` tracks bonus stats from champion's equipped runes. Has same stats as `itemBonus`. Template for bonus stats is stored in 

>app/data/ChampTemplates.js -> `runesEffectsBonusTemplate`

- `abilitiesBonus` **tracks** the champion specific abilities that changes champions stats (like bonus Health from Sion's passive, number of Senna's soul stacks).
- `championModifier` **calculates** effects from champions passives, toggleable and stacked abilities