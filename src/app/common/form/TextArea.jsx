import React from 'react'
import { Form, Label } from 'semantic-ui-react'


const TextArea = ({input, rows, width, type, placeholder, meta:{touched, error}}) => {

  return (
  <Form.Field error={touched && !!error} with={width} >
  < textArea {...input} placeholder={placeholder} type={type} rows={rows} > </textArea>
  {touched && error && <Label basic color='red'> {error}</Label>}
  
  </Form.Field>


  )
}

export default TextArea
