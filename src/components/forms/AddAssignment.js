import React, { useEffect, useState } from 'react'
import { Card, Form , Row , Col , Container , Button, Dropdown, DropdownButton, InputGroup, FormControl, Alert} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addAssignment, clearAddAssignmentError, clearAssignmentError } from '../../actions/assignmentActions.'
import pen from '../../images/pem.png'
function AddAssignment(props) {


    const [courseName , setCourseName] = useState('')
    const [assignNo , setAssignNo] = useState(1)
    const [assignFile , setAssignFile] = useState();

    const [disabled , setDisabled] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        props.clearAddAssignmentError()
        const form = new FormData()
        form.append('courseName' , courseName)
        form.append('assignNo' , assignNo)
        form.append('assignFile' , assignFile)

        setDisabled(true)
        props.addAssignment(form)
        
    }

    useEffect(() => {
      if(props.taskDone){
        props.clearAddAssignmentError()
        setDisabled(false)
        props.history.push('/mainpage/dashboard')
      }

      if(props.taskFailed){
        setDisabled(false)
      }


      
    })

    useEffect(() => {
      props.clearAddAssignmentError()
    },[courseName , assignNo , assignFile])

    const errorMessage = props.taskFailed?
    (
      <Alert variant={'danger'}>
        Failed to upload Assignment... Try again
      </Alert>

    )
    :
    (
      null
    )
   


    return (
      
        <Container fluid className='login-signup'>
 
    <Row className='login-signup-headings'>
        <Col>
        <Card.Title>Submit Your Assignment</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Submit within the deadline.</Card.Subtitle>
        </Col>

        <Col style={{textAlign:'center'}} xl={"auto"} sm={12}>
            <img src={pen} style={{
                width:'50px',
                height:'60px'
            }}/>
        </Col>

    </Row>

    
    <Row className='login-signup-form'>
        <Col>
        
<Form onSubmit={handleSubmit}>
<Form.Group>
<Form.Label>Course Name</Form.Label>
<InputGroup>
    <FormControl
      readOnly
      value={courseName}
      placeholder="Course Name"
      aria-label="Course Name"
      aria-describedby="basic-addon2"
      id='courseName'
      
    />

    <DropdownButton
    
    onSelect={(value) => {setCourseName(value)}}
      as={InputGroup.Append}
      variant="outline-secondary"
      title="Select"
     
      
      
    >
               
                    <Dropdown.Item  eventKey='Computer Architecture and Organization' >Computer Architecture and Organization</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Discrete Mathematics'>Discrete Mathematics</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Introduction to Operating Systems'>Introduction to Operating system</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Computer Graphics and Multimedia'>Computer Graphics and multimedia</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Theory of Automata'>Theory of Automata</Dropdown.Item>
    </DropdownButton>
  </InputGroup>

</Form.Group>


<Form.Group>
    <Form.Label>Assignment Number</Form.Label>
<InputGroup>
    <FormControl
      readOnly
      value={assignNo}
      placeholder="Assignment Number"
      aria-label="Assignment Number"
      aria-describedby="basic-addon2"
      type='number'
      id='assignNo'
      
    />

    <DropdownButton
    
    onSelect={(value) => {setAssignNo(value)}}
      as={InputGroup.Append}
      variant="outline-secondary"
      title="Select"
      
      
      
    >
                    <Dropdown.Item  eventKey='1' >1</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='2'>2</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='3'>3</Dropdown.Item>
                  
    </DropdownButton>
  </InputGroup>

</Form.Group>

<Form.Group>
<Form.File onChange={(e) => setAssignFile(e.target.files[0])} id="assignFile" label="Upload your file" />
</Form.Group>
<Form.Group>
{
  errorMessage
}

</Form.Group>

<Button variant="primary" type="submit" block disabled={disabled}>
  Submit
</Button>

</Form>

        </Col>
    </Row>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        addAssignment:(assignment) => dispatch(addAssignment(assignment)),
        clearAddAssignmentError:() => dispatch(clearAddAssignmentError())
    }

}
const mapStateToProps = (state) => {
  return {
    taskDone:state.assignment.addStatus.taskDone,
    taskFailed:state.assignment.addStatus.taskFailed,
    err:state.assignment.addStatus.error
  }
}



export default connect(mapStateToProps , mapDispatchToProps)(AddAssignment)