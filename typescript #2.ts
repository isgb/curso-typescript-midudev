// Enums
// con const se genera menos codigo internamente pero son const
// hace mas exacto la validación y utilizarlo hacia afuera

// enum ERROR_TYPES {
//     NOT_FOUND,
//     UNAUTHORIZED,
//     FORBIDDEN
// }

// const enum ERROR_TYPES {
//     NOT_FOUND = 'notFound',
//     UNAUTHORIZED = 'unauthorized',
//     FORBIDDEN = 'forbidden',
// }

// function mostrarMensaje(tipoDeError){
//     if(tipoDeError === ERROR_TYPES.NOT_FOUND){
//         console.log("no se encuentra el recurso");
        
//     } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
//         console.log("no tienes permisos para acceder");
        
//     } else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
//         console.log("no tienes permisos para acceder");
        
//     }
// }

/**************************************** */
// Aserciones de tipos
// const canvas = document.getElementById('span')

// // es inferencia->Typescript se da cuenta que dentro del if
// // ya solo el canvas va a poder ser un HTMLCanvasElement
// if(canvas instanceof HTMLCanvasElement){
//     const ctx = canvas.getContext('2d');
// }

/**************************************** */
//NARROWING -- typeof con los objetos
// function mostrarLongitud(objeto: number | string){
//     if(typeof objeto === 'string'){
//         return objeto.length
//     }

//     return objeto.toString().length
// }

// mostrarLongitud('1')

interface Mario{
    company: string,
    nombre: string,
    saltar: () => void
}

interface Sonic{
    company: string,
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic

//type Guard
// la función determina si es Sonic o no
function checkIsSonic(personaje: Personaje): personaje is Sonic{
    return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje){
    if(checkIsSonic(personaje)){
        personaje.correr()
    }
}

function fn(x:string | number){
    if(typeof x === 'string'){
        x.toUpperCase()
    }else if(typeof x === 'number'){
        x.toFixed(2)
    }else {
        x
    }
}