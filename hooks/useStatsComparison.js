import { useMemo } from "react";

export default function useStatsComparison(atk, def) {

  const formula = useMemo(() => {

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

  const postMitigationMres = (target, attacker) => {
    let mitigatedMres = 0
    if (attacker.magResReduction && (target.magres - attacker.magResReduction <= 0)) {
      return (target.magres - attacker.magResReduction)
    } else if (attacker.magResReduction) { 
     
      mitigatedMres = ((target.magres - attacker.magResReduction) * (1 - attacker.magPen) - attacker.flatMagPen);
     
      return Math.max(mitigatedMres, 0)

    } else {
      mitigatedMres = (target.magres * (1 - attacker.magPen) - attacker.flatMagPen)

      return Math.max(mitigatedMres, 0)
    }
  };

  const postMitigationArmorAttacker = postMitigationArmor(atk ,def);
  const postMitigationArmorDefender = postMitigationArmor(def, atk);

  const postMitigationMresAttacker = postMitigationMres(atk ,def);
  const postMitigationMresDefender = postMitigationMres(def ,atk);

  const physicalDamageReduction = (postMitigationArmor, champ) => {
    return Math.round((1 - (100/(100 + (postMitigationArmor))))*100*(1 + (champ.bootsPassive === 'Steelcaps' ? 0.07 + (0.01 * Math.floor((champ.currentLevel - 1)/4)) : 0)) );
  };

  const magicalDamageReduction = (postMitigationMres, champ) => {
    return Math.round((1 - (100/(100 + (postMitigationMres))))*100*((1 + (champ.bootsPassive === 'Mercury' ? 0.07 + (0.05/14 * (champ.currentLevel - 1))  : 0) + (champ.forceOfNature ? 0.25 : 0))));
  };

  const physicalReductionAttacker = physicalDamageReduction(postMitigationArmorAttacker, atk);
  const physicalReductionDefender = physicalDamageReduction(postMitigationArmorDefender, def);

  const magicalReductionAttacker = magicalDamageReduction(postMitigationMresAttacker, atk);
  const magicalReductionDefender = magicalDamageReduction(postMitigationMresDefender, def); 

return {
  attackerArmor: postMitigationArmorAttacker,
  attackerMres: postMitigationMresAttacker,
  attackerPhysReduction: physicalReductionAttacker,
  attackerMagReduction: magicalReductionAttacker,
  attackerEffectivePhysHealth: ((atk.health)/(100/(100 + (postMitigationArmorAttacker)))),
  attackerEffectiveMagHealth: ((atk.health)/(100/(100 + (postMitigationMresAttacker)))),
  atkcdr:(1 - atk.cdr),
  atkPhysRed: physicalReductionAttacker/100,
  atkMagRed: magicalReductionAttacker/100,


  defenderArmor: postMitigationArmorDefender,
  defenderMres: postMitigationMresDefender,
  defenderPhysReduction: physicalReductionDefender,
  defenderMagReduction: magicalReductionDefender,
  defPhysRed: physicalReductionDefender/100,
  defMagRed: magicalReductionDefender/100,
  defcdr:(1 - def.cdr)
}


},
[atk, def]);

return formula
}