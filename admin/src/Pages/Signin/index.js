import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Signin = (props) => {
   return (
      <Layout>
         <Container>
            <Row style={{marginTop: "50px"}}>
               <Col md={{span: 6, offset: 3}}>
                  <Form>
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

export default Signin
