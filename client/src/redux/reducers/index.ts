import { combineReducers } from "redux";
import auth from './authReducer'
import alert from './alertReducer'
import images from './imageReducer'


export default combineReducers({
    auth,
    alert,
    images
})