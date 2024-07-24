// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hijo from './Hijo'
import estilos from '../CSS/esti.module.css'

// const Padre = () => {
//     let nombre = "Carlos"
//     let direccion = "Lima 120"
//     return (
//         <div>
//             <div>Componente Padre</div>
//             <Hijo nom={nombre} dir={direccion}/>
//         </div>
//     )
// }

const Padre = () => {
    return (
        <div>
            <div className={estilos.clase1}>Componente Padre</div>
            <Hijo>Información del a compartir</Hijo>
        </div>
    )
}

export default Padre