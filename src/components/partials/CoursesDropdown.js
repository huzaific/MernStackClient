import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function CoursesDropdown({setDisplayCourses}) {
    return (
             <Dropdown onSelect={(eventKey) => setDisplayCourses(eventKey)}>
                    <Dropdown.Toggle >
                    Filter by Course
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item eventKey='All'>All</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Computer Architecture and Organization'>Computer Architecture and Organization</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Discrete Mathematics'>Discrete Mathematics</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Introduction to Operating Systems'>Introduction to Operating system</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Computer Graphics and Multimedia'>Computer graphics and multimedia</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='Theory of Automata'>Theory of Automata</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
      
    )
}
