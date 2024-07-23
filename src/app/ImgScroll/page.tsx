

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import './page.css'

export default function page() {
  return (
    <div>
      <Container fluid>
        <Row>
        <Col className='px-0'>
          <Image className='banner' src='/Images/banner.JPG' fluid/>
        </Col>      
        </Row>
      </Container>
    </div>
  )
}
