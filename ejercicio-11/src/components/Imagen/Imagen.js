import React from "react";
import './Imagen.css';

function Imagen(props) {

    return <img src={props.src} className="rounded mx-auto" alt={props.alt}/>
}

export default Imagen;