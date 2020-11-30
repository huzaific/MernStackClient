import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddAssignment from '../forms/AddAssignment'

export default function Assignment(props) {
    return (
        <Container fluid>
            <Row style={{margin:'60px auto'}}>
                <Col />
                <Col md={12} lg={8} >
                <AddAssignment {...props}/>
                </Col>
                <Col />
            </Row>

        </Container>
    )
}
