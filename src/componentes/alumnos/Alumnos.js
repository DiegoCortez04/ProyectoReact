import React,{Fragment, useEffect, useState} from 'react';
import ClienteAxios from '../../config/axios';
import { Link } from 'react-router-dom';

function Alumnos (){
    const [alumnos,guardarAlumnos] = useState([]);
    const ConsultarAPI = async () => {
        const AlumnosConsulta = await ClienteAxios.get('/alumnos');
        guardarAlumnos(AlumnosConsulta.data);
        console.log(alumnos);
    }
    useEffect(() => {
        ConsultarAPI();
    },[]);

    const deleteAlumno = async (id) => {
        try{
            const response =await ClienteAxios.delete('/alumnos/'+id+'');
            alert("Alumno Eliminado");
            window.location.reload();
        }catch(error){
            console.error(error)
        }
    };

    return(
        <Fragment>
        <Link to = {"/nuevo-alumno"} class="btn btn-verde nvo-alumno"><i class="fas fa-plus-circule">Nuevo Alumno
            </i>
        </Link>
        <ul class ="listado-alumnos">
            {alumnos.map(alumno =>
                <li class="alumno">
                    <div class="info-alumno">
                        <p class="nombre">{alumno.Nombre}</p>
                        <p class="carrera">{alumno.Carrera}</p>
                        <p>{alumno.Email}</p>
                    </div>
                    <div class="acciones">
                        <a href="#" class="btn btn-azul">
                        <i class="fas fa-pen-alt"></i>
                        Editar Alumno
                        </a>
                    <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteAlumno(alumno.ID_Alumno)}>
                        <li class="fas fa-times"></li>
                        Eliminar Alumno
                    </button>
                    </div>
                </li>
            )}
        </ul>
        </Fragment>
    )
}
export default Alumnos;