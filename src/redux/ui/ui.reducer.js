import { SET_LEAGUE, SUMMARY_READ } from './ui.actions';

const INITIAL_STATE = {
    league: 'nba',
    read: false
};
const uiReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_LEAGUE: return { ...state, league: action.payload}
        case SUMMARY_READ: return { ...state, read: action.payload}
        default: return state
    };
};

export default uiReducer;