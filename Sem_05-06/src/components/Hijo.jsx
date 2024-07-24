// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
// const Hijo = ({nom, dir}) => {
//   return (
//     <div>
//         <div>Componente Hijo</div>
//         <p>{nom}</p>
//         <p>{dir}</p>
//     </div>

//   )
// }

// eslint-disable-next-line react/prop-types
const Hijo = ({ children }) => {
    let nombre = "Pedro"
    let element = <h4>Hola {nombre}</h4>
    let nEdad = 12
    let text
    if (nEdad < 18) {
        text = "Menor de edad"
    } else {
        text = "Mayor de edad"
    }
    let nEdad2=15
    const element2=(nEdad2<18)?"Es menor":"Es mayor"
    return (
        <>
            <div>Componente Hijo</div>
            <p>{children}</p>
            {element}
            {text}
            <p>{element2}</p>
        </>

    )
}

export default Hijo