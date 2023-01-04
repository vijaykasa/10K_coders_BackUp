import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducers'


export const store=configureStore({
    reducer:rootReducer,
    devTools: true,
    middleware:[thunk]
})