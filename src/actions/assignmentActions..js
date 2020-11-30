import axios from 'axios'
export const loadAssignments = () => {
    return (dispatch , getState) => {

        axios.get('/assignment')
        .then(response => {
            dispatch({
                type:'LOAD_ASSIGNMENT',
                payload:response.data
            })
        })
        .catch(err => {
            dispatch({
                type:'LOAD_ASSIGNMENT_ERROR',
                payload:err
            })
        })
        



    }
}
export const addAssignment = (assignment) =>{

    return (dispatch , getState) => {

        axios({
            method:'POST',
            url:'/assignment',
            data:assignment
        })
        .then(response => {
            dispatch({
                type:'ADD_ASSIGNMENT',
                payload:response.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type:'ADD_ASSIGNMENT_ERROR',
                payload:err
            })
        })



    }


}

export const clearAddAssignmentError = () => {
    return {
        type:'CLEAR_ADD_ASSIGNMENT_ERROR'
    }
}

export const clearLoadAssignmentError = () => {
    return {
        type:'CLEAR_ADD_ASSIGNMENT_ERROR'
    }
}