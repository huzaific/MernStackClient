import Axios from "axios"

export const loadStudent = () => {


    return (dispatch , getState) => {

        Axios.get('/student/check')
        .then(response => {

            const user = response.data.user
            dispatch({
                type:'STUDENT_LOGGEDIN',
                payload:user
            })
          
    
        })
        .catch(err => {

            dispatch({
                type:'STUDENT_NOT_LOGGEDIN'
            })
           
        })
    }

}

export const loginStudent = (credentials) => {

    const {rollNo , password} = credentials
    return (dispatch , getState)=>{

        Axios.post('/student/login' , {
            rollNo,
            password
        })
        .then(response => {

            const user = response.data.user
            dispatch({
                type:'LOGIN_STUDENT',
                payload:user
            })


        })
        .catch(err => {
            dispatch({
                type:'LOGIN_SIGNUP_LOGOUT_ERROR',
                payload:err
            })
        }) 
    }
}

export const signupStudent = (credentials) => {

    const {rollNo , password} = credentials

    return (dispatch , getState)=>{

        Axios({
            method:'POST',
            url:'/student/signup',
            data:credentials
    
          })
          .then(response => {
           return Axios.post('/student/login' , {
    
              rollNo,
              password
          })
          })
          .then(response => {
    

            const user = response.data.user
            dispatch({
                type:'SIGNUP_STUDENT',
                payload:user
            })
            
          })
          .catch(err => {
            dispatch({
                type:'LOGIN_SIGNUP_LOGOUT_ERROR',
                payload:err
            })
        }) 
      
    }
}

export const logoutStudent = () => {

    return (dispatch , getState) => {
        Axios.post('/student/logout')
        .then(response => {
            dispatch({
                type:'LOGOUT_STUDENT'
            })
        })
        .catch(err => {
            dispatch({
                type:'LOGIN_SIGNUP_LOGOUT_ERROR',
                payload:err
            })
        })
    }

   
}