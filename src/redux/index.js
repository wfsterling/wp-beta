import { combineReducers } from "redux";
import userInfoReducer from "./reducers/UserInfoReducer";

const rootReducer = combineReducers({
    userInfoReducer
});

export default rootReducer;
