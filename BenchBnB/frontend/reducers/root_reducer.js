import { combineReducers} from 'redux';
import sessionsReducer from './sessions_reducer';

export default combineReducers({
    entities: {
        users: usersReducer
    },
    
    session: sessionsReducer,

    errors: {
        errors: errorsReducer
    }
});
