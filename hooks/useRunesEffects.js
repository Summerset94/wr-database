import { useReducer } from 'react';

const initialRunesEffects = {
  keystones: {
    conqueror: 0,
    grasp: 0,
    aftershock: false,
    tempoType: 'ranged',
    tempo: 0,
  },
  
  path: {
    suddenImpact: false,
    eyeballCollector: 0,
    zombieWard: 0,
    gatheringStorm: 0,
    legendAlacrity: 0,
    loyalty: false,
    overgrowth: 0,
    perseverance: false,
    transcendence: false,
    pathfinder: false,
    turretPlates: 0,
    manaflow: 0,
  }, 
  
};


const runesEffectsReducer = (state, action) => {
  switch (action.type) {
    case 'conqueror':
      return {
        ...state,
        keystones: {
          ...state.keystones,
          conqueror: state.keystones.conqueror < 6 ? state.keystones.conqueror + 1 : 0,
        }
        
      };

    case 'grasp':
      return {
        ...state,
        keystones: {
          ...state.keystones,
          grasp: parseInt(action.payload) || 0,
        }
      };  

    case 'toggleAftershock':
      return {
        ...state,
        keystones: {
          ...state.keystones,
          aftershock: !state.keystones.aftershock
        }        
      };

    case 'toggleTempoType':
      return {
        ...state,
        keystones: {
          ...state.keystones,
          tempoType: state.keystones.tempoType === 'ranged' ? 'melee' : 'ranged'
        }
        
      };

    case 'tempoStacks': 
      return {
        ...state,
        keystones: {
          ...state.keystones,
          tempo: state.keystones.tempo < 6 ? state.keystones.tempo + 1 : 0,
        }        
      }

    case 'reset-keystones':
      return {
        ...state,
        keystones: {
          ...initialRunesEffects.keystones
        }        
      };
      
    case 'reset-path':
      return {
        ...state,
        path: {
          ...initialRunesEffects.path
        }        
      };  

    case 'toggleSuddenImpact':
      return {
        ...state,
        path: {
          ...state.path,
          suddenImpact: !state.path.suddenImpact
        }
      };

    case 'eyeball': 
      return {
        ...state,
        path: {
          ...state.path,
          eyeballCollector: state.path.eyeballCollector < 10 ? state.path.eyeballCollector + 1 : 0,
        }
      };

    case 'zombie ward': 
      return {
        ...state,
        path: {
          ...state.path,
          zombieWard: state.path.zombieWard < 5 ? state.path.zombieWard + 1 : 0,
        }
      };

    case 'gathering storm':
      return {
        ...state,
        path: {
          ...state.path,
          gatheringStorm: parseInt(action.payload) || 0
        }
      }

    case 'legend alacrity':
      return {
        ...state,
        path: {
          ...state.path,
          legendAlacrity: (parseInt(action.payload) + 3) || 0
        }
      }

    case 'toggleLoyalty':
      return {
        ...state,
        path: {
          ...state.path,
          loyalty: !state.path.loyalty
        }
      };


    case 'overgrowth':
      return {
        ...state,
        path: {
          ...state.path,
          overgrowth: parseInt(action.payload) || 0
        }
      };

    case 'togglePerseverance':
      return {
        ...state,
        path: {
          ...state.path,
          perseverance: !state.path.perseverance
        }
      };

    case 'toggleTranscendence':
      return {
        ...state,
        path: {
          ...state.path,
          transcendence: !state.path.transcendence
        }
      };

    case 'togglePathfinder':
      return {
        ...state,
        path: {
          ...state.path,
          pathfinder: !state.path.pathfinder
        }
      };

    case 'plates': 
    return {
      ...state,
      path: {
        ...state.path,
        turretPlates: state.path.turretPlates < 4 ? state.path.turretPlates + 1 : 0
      }
    }; 
    
    case 'manaflow': 
    return {
      ...state,
      path: {
        ...state.path,
        manaflow: state.path.manaflow < 10 ? state.path.manaflow + 1 : 0
      }
    };


    default:
      return state;
  }
};

const useRunesEffects = () => {
  const [runesEffects, dispatch] = useReducer(runesEffectsReducer, initialRunesEffects);

  return { runesEffects, dispatch };
};

export default useRunesEffects;
