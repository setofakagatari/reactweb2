import './css/index.css';
import React, { useState } from "react";



export function Header() {
    return <div className="header">

        <a>Principal</a>

        <a >Perfil</a>

        <a >Arquitectura</a>

        <a >Danza</a>

        <a >Dibujo</a>

        <a >Escultura</a>
        <form>
            <input type="search" placeholder="Busca" className="search" />

        </form>

    </div>
}


export function Eventos() {
    return <div className="sidebar">
        <h1>Eventos</h1>
        <p>comming soon</p>
    </div>
}



export function Footer() {
    return <div className="footer">
        <h1>Contactenos </h1>
    </div>
}
