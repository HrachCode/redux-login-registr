
import {combineReducers} from "redux"
import reduser from './redusers'
import user from './redusers/user'

export default combineReducers( {
    reduser,
    user
})