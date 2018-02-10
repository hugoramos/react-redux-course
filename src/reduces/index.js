import { combineReducers } from 'redux';

import TicketReducer from './reduce-ticket'

const rootReducer = combineReducers({
    tickets: TicketReducer
})

export default rootReducer;