import { combineReducers } from "redux"
import assignmentReducer from "./assignmentReducer"
import studentReducer from "./studentReducer"


const rootReducer = combineReducers({
    assignment:assignmentReducer,
    student:studentReducer
})
    

export default rootReducer