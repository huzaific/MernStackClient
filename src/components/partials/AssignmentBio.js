import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function AssignmentBio({assign , index}) {

    const [showCourse , setShowCourse] = useState(false)

    const date = new Date(assign.createdAt)
     
    return (
      
   
            <tr>
            <td>{index + 1}</td>
            <td>{date.toLocaleDateString()}</td>
            <td>{date.toLocaleTimeString()}</td>
            <td>{assign.courseName}</td>
            <td>{assign.assignNo}</td>
            <td><a style={{cursor:'pointer' , color:'blue'}} onClick={() => setShowCourse(true)}>View File</a></td>
            <Modal size='lg' backdrop='static' show={showCourse} onHide={() => setShowCourse(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{`${assign.courseName}  ${assign.assignNo} Assignment`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   

                </Modal.Body>

            </Modal>
            </tr>
           
     

        
    )
}
