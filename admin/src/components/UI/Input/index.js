import React from 'react'
import { Form } from 'react-bootstrap';

const Input = (props) => {
   return (
      <Form.Group className={props.className} controlId="formBasicEmail">
         <Form.Label>{props.label}</Form.Label>
         <Form.Control
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
         />
         <Form.Text className="text-muted">
            {props.errorMessage}
         </Form.Text>
      </Form.Group>
   )
}

export default Input
