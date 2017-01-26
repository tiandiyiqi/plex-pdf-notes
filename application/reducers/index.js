/**
 * @Author: BLRplex (Maksim Tarhunakau)
 * @Date:   2017-01-26 11:58:51
 * @Last Modified by:   BLRplex (Maksim Tarhunakau)
 * @Last Modified time: 2017-01-26 12:06:44
 */

import { combineReducers } from 'redux'

const stubReducer = (state = {}, action) => {
    switch (action.type) {
    default:
        return state
    }
}

const reducers = combineReducers({
    stub: stubReducer,
})

export default reducers
