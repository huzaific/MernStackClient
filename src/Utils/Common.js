import Cookies from 'js-cookie'
import axios from 'axios'
export const getStudent = () => {
    
    return new Promise((resolve , reject) => {
        axios.get('/student/check')
        .then(response => {
            
           resolve(response.data.user);
    
        })
        .catch(err => {
            resolve(null)
        })
        
    })

  
}


export const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn')
}