const champTemplate = {
  id: 'placeholder',
name: 'Not Selected',
title: 'No title',
icon: '/images/portraits/DefaultSquare.png',

rolePrim: false,
roleSecond: false,

healthBase: 0,
healthScale: 0,

manaBase: 0,
manaScale: 0,

armorBase: 0,
armorScale: 0,

magresBase: 0,
magresScale: 0,

moveSpeed: 0,

attackBase: 0,
attackScale: 0,
apBase: 0,

asBase: 0,
asBaseBonus: 0,
asScale: 0,

heroId: 10666
};

const itemBonusTemplate = {
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
  armorReduction: 0,
  magResReduction: 0,
  ah: 0,
  bootsPassive: false
};

const runesEffectsBonusTemplate = {
  attack: 0,
  ap: 0,
  health: 0,
  armor: 0,
  magres: 0,
  as: 0,
  flatArmPen: 0,
  flatMagPen : 0,
  ah: 0,
  moveSpeed: 0,
  mana: 0,
};

const championsAbilitiesEffectsTemplate = {
  singedR: 0,
  jaxR: 0,
  dariusE: 0,
  malphiteW: 0,
  sionW: 0,
  sennaP: 0,
  rengarP: 0,
  swainP: 0,
  threshP: 0,
  twistedFateE: 0,
  veigarP: 0,
  syndraP: false,
  aatroxUlt: 0
};

const itemEffectsTemplate = {
  rabadon: false,
  twinguard: false,    
  steraks: false,
  seraphs: false,
  fimbulwinter: false,
  muramana: false,
  lastWhisper: false,
  titanicHydra: false,
  heartsteel: 0,
  

  forceOfNature: false,
  bootsPassive: false,    
};

export  {champTemplate, itemBonusTemplate, runesEffectsBonusTemplate, championsAbilitiesEffectsTemplate, itemEffectsTemplate};