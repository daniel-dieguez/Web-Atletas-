
//haremos una llamada a la Api:
import axios from "axios";
import {SET_CURRENT_USER} from './types';
import {LOGIN_ENDOPOINT} from '../helpers/endopoints';
import { error } from "jquery";

// para ver las acciones que estan relacionados con el tema del loggin, para registrar el usuario.

export const loginUser = (userData) => dispatch => { // dispatch es el evento para el cambio de accion y redirigira a la tarea designada.
 
    return new Promise((resolve, reject)=>{
        const tokenApp = Buffer.from('usuario a poner','utf9').toString('base64'); 
        axios.post(LOGIN_ENDOPOINT, userData,{'Authorization': `Basic ${tokenApp}`,'Content-type': 'applicatiomn/x-www-form-urlencoded'}).then(
            response => {
                console.log(response);

            }).catch(error =>{
                reject(error);
            });  //generaremos un token de acceso
    });


}