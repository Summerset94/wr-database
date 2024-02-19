import { useReducer } from 'react';

const initialLeaderboardsState = {
  rank: 'diamond',
  lane: 'top'
};

const leaderboardsReducer = (state, action) => {
  switch (action.type) {
    case 'elohell':
      return {
        ...state,
        rank: 'elohell'
      };

    case 'diamond':
      return {
        ...state,
        rank: 'diamond'
      };
    case 'masters':
      return {
        ...state,
        rank: 'masters'
      };
    case 'sovereign':
      return {
        ...state,
        rank: 'sovereign'
      };
    case 'legendary':
      return {
        ...state,
        rank: 'legendary'
      };
    case 'top':
      return {
        ...state,
        lane: 'top'
      };
    case 'jungle':
      return {
        ...state,
        lane: 'jungle'
      };
    case 'mid':
      return {
        ...state,
        lane: 'mid'
      };
    case 'bot':
      return {
        ...state,
        lane: 'bot'
      };
    case 'support':
      return {
        ...state,
        lane: 'support'
      };
    default:
      return state;
  }
};

const useLeaderboards = () => {
  const [chosenLeaderboards, dispatch] = useReducer(leaderboardsReducer, initialLeaderboardsState);

  return { chosenLeaderboards, dispatch };
};

export default useLeaderboards;