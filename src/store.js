import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const intialState = {count : 0, }
const rootReducer = (state = intialState, action) => {
switch(action.type) {
    case 'INCREMENT_COUNT': return {...state, count: action.payload,}
    default: return state;}
}

export default createStore(rootReducer, applyMiddleware(thunk))