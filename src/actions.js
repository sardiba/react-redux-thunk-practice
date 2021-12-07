import { incrementCount } from "./countService"


export const incrementCountAction = () => async (dispatch, getState) => { 
const newCount = await incrementCount();
 dispatch({
    type: 'INCREMENT_COUNT',
    payload: newCount,
})}