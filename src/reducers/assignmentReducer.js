const initState = {

    assignments:[],
    addStatus:{
        taskDone:false,
        taskFailed:false,
        error:null
    },
    loadStatus:{
        taskDone:false,
        taskFailed:false,
        error:null
    }
    
    

}


const assignmentReducer = (state = initState , action) => {

    switch(action.type){

        case 'LOAD_ASSIGNMENT':
            return {
                ...state,
                loadStatus:{
                    taskDone:true,
                    taskFailed:false,
                    error:null
                },
                assignments:action.payload
            }


        case 'LOAD_ASSIGNMENT_ERROR':
            return {
                ...state,
                loadStatus:{
                    taskDone:false,
                    taskFailed:true,
                    error:action.payload
                }

            }

        case 'CLEAR_LOAD_ASSIGNMENT_ERROR':
                return {
                    ...state,
                    loadStatus:{
                        taskDone:false,
                        taskFailed:false,
                        error:null
                    },
    
                }

        case 'ADD_ASSIGNMENT':
            return{
                ...state,
                addStatus:{
                    taskDone:true,
                    taskFailed:false,
                },
                assignments:[...state.assignments,action.payload]
            }
           
            
        case 'ADD_ASSIGNMENT_ERROR':
            return {
                ...state,
                addStatus:{
                    taskDone:false,
                    taskFailed:true,
                    error:action.payload
                },

            }

        
        case 'CLEAR_ADD_ASSIGNMENT_ERROR':
            return {
                ...state,
                addStatus:{
                    taskDone:false,
                    taskFailed:false,
                    error:null
                },

            }
        
            case 'CLEAR_LOAD_ASSIGNMENT_ERROR':
            return {
                ...state,
                loadStatus:{
                    taskDone:false,
                    taskFailed:false,
                    error:null
                },

            }
          


        default:
            return {
                ...state,
                addStatus:{
                    taskDone:false,
                    taskFailed:false,
                    error:null
                },
            }
            
    }

}


export default assignmentReducer