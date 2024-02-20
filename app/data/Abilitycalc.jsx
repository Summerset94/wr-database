// Important: call passives with "level2" so the level-dependant scaling could work properly and not get multiplied by 0

// base is base @ level 1 ability. Growth seems to be constant across all abilities. So just difference between 1 and 2 level;
// mod is damage mod i.e: 50% AD bonus to damage

const pre = function({base = 0, growth = 0, mod = 0, growthmod = 0}, level = 1) {
  return Math.round((base + (growth * (level - 1)) ) + mod + (growthmod * (level - 1)))
};

const post = function({base = 0, growth = 0, mod = 0, growthmod = 0}, level = 1, defmod = 1) {
  return Math.round(( (base + (growth * (level - 1)) ) + mod + (growthmod * (level - 1))) * defmod)
};

const cd = function({cdbase, cdgrowth}, level = 1, cdr) {
  return ((cdbase - (cdgrowth * (level -1) )) * cdr ).toFixed(1)
};

export {pre, post, cd};