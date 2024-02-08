import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';

export default function SingninForm({ errores, onSubmitCallback }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({ email, password }); /*Aqui se realiza la evaluacion de los datos*/
  }

  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-2">
        <Form.Label> Correo Electronico</Form.Label>
        <Form.Control type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Correo' isInvalid={errores.email}></Form.Control>
        <Form.Control.Feedback type='invalid'>{errores.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label> Contrasena</Form.Label>
        <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Contraseña' isInvalid={errores.password}></Form.Control>
        <Form.Control.Feedback type='invalid'>{errores.password}</Form.Control.Feedback>
      </Form.Group>

      <Button className='mt-3' variant='primary' type='submit'>Inicia Sesion</Button>
    </Form>

  )
}
