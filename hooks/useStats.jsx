import React, { createContext, useContext, useState } from 'react';

const StatsContext = createContext();

const initialState = {
  name: 'Not Selected',
  health: 0,
  mana: 0,
  armor: 0,
  magres: 0,
  attack: 0,      
  ap: 0,      
  as: 0,
  dps: 0,      
  dmgReductArm: 0,
  dmgReductMag: 0,
  effectiveHealthArm: 0,
  effectiveHealthMag: 0,
  flatArmPen: 0,
  flatMagPen: 0,
  armPen: 0,
  magPen: 0,
  moveSpeed: 0,
  critChance: 0,
  critMultiplier: 0,
  critDamage: 0,
  armorReduction: 0,
  magResReduction: 0,
  cdr: 0,
  ah: 0,
  bootsPassive: false,
  fonEffect: false
}

export const StatsProvider = ({ children }) => {
  const [totalStats, setTotalStats] = useState([{...initialState}, {...initialState}]); // Initialize with two empty objects
  return (
    <StatsContext.Provider value={{ totalStats, setTotalStats }}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
};
