import { SET_LEAGUE } from './ui.actions';

const INITIAL_STATE = {
    league: 'nba'
};
const uiReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_LEAGUE: return { ...state, league: action.payload}
        default: return state
    };
};

export default uiReducer;