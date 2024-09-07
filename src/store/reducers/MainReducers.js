import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import AboutReducer from "./AboutReducer";
const mainReducer = combineReducers({
    root: rootReducer,
    aboutContent: AboutReducer
})
export default mainReducer