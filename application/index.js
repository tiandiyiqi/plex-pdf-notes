/**
 * @Author: BLRplex (Maksim Tarhunakau)
 * @Date:   2017-01-26 11:52:09
 * @Last Modified by:   BLRplex (Maksim Tarhunakau)
 * @Last Modified time: 2017-01-26 12:01:21
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

import LandingPage from 'components/pages/LandingPage'

import reducers from 'reducers'

const logger = createLogger()

const store = createStore(
    combineReducers({
        application: reducers,
    }),
    applyMiddleware(thunk, promise, logger),
)

ReactDOM.render(
    <Provider store={ store }>
        <LandingPage />
    </Provider>,
    document.getElementById('application'),
)
