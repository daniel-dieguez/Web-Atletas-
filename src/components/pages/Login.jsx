import React, { useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import SingninForm from '../forms/SingninForm';
import validator from 'validator';
import { isObjEmpty } from '../../helpers/Helpers';

export default function Login() {

  const [errores, setErrores] = useState("");

  const login = ({ email, password}) => { /*parametros del file singninform*/

  const errores = {};
  setErrores(errores); /* limpiamos el const */

  if(!validator.isEmail(email)){
    errores.email = 'El correo electronico es invalido';
  }

  if(!validator.isEmpty(password)){
    errores.password = 'La contrasena esta vacia '
  }

  if(!isObjEmpty(errores)){ //si el objeto esta vacio este brindara un error
    setErrores(errores);
    return;

  }


    console.log(email);
    console.log(password);
        
  }





  return (
    <div>
      <Container className='mt-5'>
        <Row>
          <Col ms="12" md={{spna:8, offset: 2}} lg={{spna:6, offset:3}}>
            <Card body>
              <h3>
              Inicia Sesion
              </h3>
              <hr></hr>
              <SingninForm errores={errores} onSubmitCallback={login}></SingninForm> {'/*Insertamos del file singnF para esta carpeta*/'}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
