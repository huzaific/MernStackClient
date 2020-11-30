const initState = {

    currentStudent:null,
    isLoggedIn:false,
    isError:false,
    error:null
    
}

const studentReducer = (state = initState , action) => {

    console.log(state)
    switch(action.type){


        case 'LOGIN_STUDENT' || 'SIGNUP_STUDENT'||'STUDENT_LOGGEDIN':
            console.log('logged in')
            return {
                ...state,
                currentStudent:action.payload,
                isLoggedIn:true,
                isError:false,
                error:null
            }

        case 'STUDENT_NOT_LOGGEDIN' || 'LOGOUT_STUDENT':
            console.log('not logged in')
            return {
                currentStudent:null,
                isLoggedIn:false,
                isError:false,
                error:null
            }
        
        case 'LOGIN_SIGNUP_LOGOUT_ERROR':
            return {
                currentStudent:null,
                isLoggedIn:false,
                isError:true,
                error:action.payload
            }
        
        default:
            return {

                currentStudent:null,
                isLoggedIn:false,
                isError:false,
                error:null
                
            }

    }


}

export default studentReducer