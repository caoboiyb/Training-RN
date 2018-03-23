import { combineReducers } from 'redux'
import LibrariesReducer from './LibrariesReducer'

export default combineReducers({
    libraries: LibrariesReducer
})