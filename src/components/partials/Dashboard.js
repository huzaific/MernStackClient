import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row , Dropdown, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { loadAssignments } from '../../actions/assignmentActions.'
import { getStudent, isLoggedIn } from '../../Utils/Common'

import Signup from '../forms/Signup'
import AssignmentsList from './AssignmentsList'
import CoursesDropdown from './CoursesDropdown'

 function Dashboard(props) {

    const [displayCourses , setDisplayCourses] = useState('All')

    useEffect(() => {

        props.load_assignments()
        
    })


    return (
      
            <Container fluid>
                <Row>
                    
                    <h4 style={{margin:0}}>Assignments You Have Submitted</h4>
                    <Col />
                    <CoursesDropdown setDisplayCourses={setDisplayCourses} />
                    
                </Row>
                <Row>
                    <Col style={{margin:'30px 0px'}}>
                        {
                            props.taskDone?
                            (
                                <AssignmentsList displayCourses={displayCourses} />
                            ):
                            (
                                <h3>Loading....</h3>
                            )
                        }
                
                    </Col>
                </Row>
              
                
            
            </Container>
           
      
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        load_assignments:() => dispatch(loadAssignments())
    }

}

const mapStateToProps = (state) => {
    return{
        taskDone:state.assignment.loadStatus.taskDone
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard)