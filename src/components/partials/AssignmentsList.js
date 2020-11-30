import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import AssignmentBio from './AssignmentBio'

function AssignmentsList(props) {

    
    
    const {assignments , displayCourses} = props

    const assignmentsList = assignments.length?
    (
        <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Time</th>
                <th>Course Name</th>
                <th>Assignment Number</th>
                <th>Assignment File</th>
            </tr>
        </thead>
        <tbody>
       {    
       displayCourses === 'All'?
       (
        assignments.map((assign , index) => {

        
            return(
                
                <AssignmentBio key={assign._id} index={index} assign={assign} />
                

            )
           
        })
       )
       :
       (
          assignments.filter(assign => {

            return assign.courseName === displayCourses

           }).map((assign , index) => {

            return(
                
                <AssignmentBio key={assign._id} index={index} assign={assign} />
                
            )
           
        })
       )
        
    }
    </tbody>
                
</Table>
    ):
    (
        <h2 style={{textAlign:'center'}}>No Submissions Yet</h2>
    )

    return (
     <div>
         {
             assignmentsList
         }
     </div>
        

     
      
    )
}

const mapStateToProps = (state) => {

    return {
        assignments:state.assignment.assignments
    }

}


export default connect(mapStateToProps)(AssignmentsList)