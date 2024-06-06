// Enums
// con const se genera menos codigo internamente pero son const
// hace mas exacto la validación y utilizarlo hacia afuera

// enum ERROR_TYPES {
//     NOT_FOUND,
//     UNAUTHORIZED,
//     FORBIDDEN
// }

const enum ERROR_TYPES {
    NOT_FOUND = 'notFound',
    UNAUTHORIZED = 'unauthorized',
    FORBIDDEN = 'forbidden',
}

function mostrarMensaje(tipoDeError){
    if(tipoDeError === ERROR_TYPES.NOT_FOUND){
        console.log("no se encuentra el recurso");
        
    } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
        console.log("no tienes permisos para acceder");
        
    } else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
        console.log("no tienes permisos para acceder");
        
    }
}