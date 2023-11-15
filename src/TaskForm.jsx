import './css/index.css';
import React, { useState } from "react";
import cerrar from "./css/images/cerrar.png";
import adjuntar from "./css/images/adjuntar.png";
import evento from "./css/images/evento.png";
import fondob from "./css/images/fondob.avif";
import inicio from "./css/images/inicio.png";
import publicar from "./css/images/publicar.png";
import registro from "./css/images/registro.png";
import sidebar from "./css/images/sidebar.png";
import x from "./css/images/x.png";

function TaskForm({ createTask }) {
    const [ready, abrir] = useState(false)
    const [ready2, abrir2] = useState(false)
    const [ready3, abrir3] = useState(false)
    const [ready4, abrir4] = useState(false)
    const [title, setTitle] = useState("")
    const [topic, setTopic] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();

        createTask(title,topic)
    }
    return (
        <div className="sideheader">
            <div className='inicio'>
                <a onClick={function () { abrir2(true); abrir(false); abrir4(false); abrir3(false); }}><img src={inicio} width="30px" height="30px" /><br />
                    Inicio de<br />Sesion</a>
            </div>
            <div className="login" style={ready2 ? { display: "block" } : { display: 'none' }}>

                <form onSubmit={(e) => { e.preventDefault() }}>

                    <div className="flex">

                        <div className="space"></div>
                        <a>
                            <h1>Ingresar</h1>
                        </a>

                        <div className="space2"></div>
                        <a onClick={function () { abrir2(false) }}>
                            <img className="xclose" src={x} width="60px" height="60px" />
                        </a>
                    </div><br /><br />
                    <div align="center">
                        <a>
                            <h1>Nombre de Usuario</h1>
                        </a><br />
                        <input type="text" className="normalinput" /><br /><br />
                        <a>
                            <h1>Contraseña</h1>
                        </a><br />
                        <input type="password" className="normalinput" /><br /><br /><br />
                        <input className="submit" type="submit" />
                    </div>

                </form>
            </div>
            <div className='inicio'>
                <a onClick={function () { abrir3(true); abrir(false); abrir2(false); abrir4(false); }}><img src={registro} width="30px" height="30px" /><br />
                    Registrarse</a>
            </div>
            <div className="register" style={ready3 ? { display: "block" } : { display: 'none' }}>

                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="flex">

                        <div className="space"></div>
                        <a>
                            <h1>Registrarse</h1>
                        </a>

                        <div className="space2"></div>
                        <a onClick={function () { abrir3(false) }}>
                            <img className="xclose" src={x} width="60px" height="60px" />
                        </a>
                    </div><br /><br />
                    <div align="center">
                        <a>
                            <h1>Nombre de Usuario</h1>
                        </a><br />
                        <input type="text" className="normalinput" /><br /><br />
                        <a>
                            <h1>Contraseña</h1>
                        </a><br />
                        <input type="password" className="normalinput" /><br /><br />
                        <a>
                            <h1>Correo electronico</h1>
                        </a><br />
                        <input type="email" className="normalinput" /><br /><br /><br />
                        <input className="submit" type="submit" />
                    </div>

                </form>
            </div>
            <div className='inicio'>
                <a onClick={function () { abrir(true); abrir4(false); abrir2(false); abrir3(false); }}><img src={publicar} width="30px" height="30px" /><br />
                    Publicar</a>
            </div>
            <div className='share' style={ready ? { display: "block" } : { display: 'none' }}>
                <form onSubmit={handleSubmit}>
                    <div className='form-group' align='center'>
                        <a><h1>¿En qué estas pensando?</h1></a>
                        <label for='file-input'>
                            <img className='adj' src={adjuntar} />
                        </label>
                        <input type='file' id='file-input' />
                        <a onClick={function () { abrir(false) }}><img className="xclose" src={x} width="60px" height="60px" /></a>
                    </div>
                    <br /><select name="select" onChange={(e) => setTopic(e.target.value)}>
                        <option value="Arquitectura">Arquitectura</option>
                        <option value="Danza">Danza</option>
                        <option value="Dibujo">Dibujo</option>
                        <option value="Escultura">Escultura</option>
                    </select>
                    <br />
                    <br />
                    <textarea placeholder="hola" onChange={(e) => setTitle(e.target.value)}></textarea>
                    <input className="submit" type="submit" onClick={function(){abrir(false);}}/>

                </form>
            </div>
            <div className='inicio'>
                <a onClick={function () { abrir4(true); abrir(false); abrir2(false); abrir3(false); }}><img src={evento} width="30px" height="30px" /><br />
                    Crear<br />evento</a>
            </div>
            <div className="uploevent" style={ready4 ? { display: "block" } : { display: 'none' }}>
                <form onSubmit={(e) => { e.preventDefault() }}>

                    <div className="flex">

                        <div className="space"></div>
                        <a>
                            <h1>Crear Evento</h1>
                        </a>

                        <div className="space2"></div>
                        <a onClick={function () { abrir4(false) }}>
                            <img className="xclose" src={x} width="60px" height="60px" />
                        </a>
                    </div><br />
                    <div align="center">
                        <a>
                            <h1>Nombre De Evento</h1>
                        </a><br />
                        <input type="text" className="normalinput" /><br /><br />
                        <a>
                            <h1>Direccion de evento</h1>
                        </a><br />
                        <input type="text" className="normalinput" /><br /><br />
                        <a>
                            <h1>Fecha</h1>
                        </a><br />
                        <input type='date' className='normalinput' /><br /><br /><br />
                        <input className="submit" type="submit" />
                    </div>

                </form>
            </div>
            <div className='inicio'>
                <a><img src={cerrar} width="30px" height="30px" /><br />
                    Cerrar<br />Sesion</a>
            </div>


        </div>
    );


}
export default TaskForm