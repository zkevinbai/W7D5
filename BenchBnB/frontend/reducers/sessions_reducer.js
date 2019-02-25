import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import { merge } from 'lodash';

let newState={};
const sessionsReducer = (oldState={id: null}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState = merge( {}, oldState, action.currentUser);
            return newState;

        case LOGOUT_CURRENT_USER:
            newState = merge({}, oldState);
            delete newState[currentUser];
            return newState;
            
        default:
            return oldState;
    }
};

export default sessionsReducer;