import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Signup = (props) => {
   return (
      <Layout>
         <Container>
            <Row style={{marginTop: "50px"}}>
               <Col md={{span: 6, offset: 3}}>
                  <Form>
                     <Row>
                        <Col md={6}>
                           <Input
                              className='mb-3'
                              label="First Name"
                              placeholder="First Name"
                              value=""
                              type="text"
                              onChange={() => {}}
                           />
                        </Col>
                        <Col md={6}>
                           <Input
                              className='mb-3'
                              label="Last Name"
                              placeholder="Last Name"
                              value=""
                              type="text"
                              onChange={() => {}}
                           />
                        </Col>
                     </Row>
                     
                     <Input
                        className='mb-3'
                        label="Email"
                        placeholder="Email"
                        value=""
                        type="text"
                        onChange={() => {}}
                     />

                     <Input
                        className='mb-3'
                        label="Password"
                        placeholder="Password"
                        value=""
                        type="password"
                        onChange={() => {}}
                     />
                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
                  </Form>
               </Col>
            </Row>
         </Container>
      </Layout>
   )
}

export default Signup
