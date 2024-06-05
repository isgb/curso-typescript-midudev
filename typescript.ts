
// https://www.typescriptlang.org/play/?ssl=1&ssc=50&pln=1&pc=54#code/MYewdgzgLgBBCGBPAEgSwGICcQFt0FcxgpVwYBeGAChgDMwAuaseHAUwek1TAHMBKCgD4YANxCoAJjEHkRAbwBQMFXTBUA5AFlUvfGwA2G-gG5FAX0WLQkWAhSoKzVhzhRufWQuWqbEEAZsAHQGILxUAAbIAfAwACTyLOzmEaYWVvZoWLgERCTgVJmo-EA

/** primera forma */
// function saludar({name, age}: {name:string, age:number}){
//     console.log(`hola ${name}, tienes ${age}`);
// }
// saludar({ name:2, age:'Pepe' })

/*********************************** */

/** segunda forma */
// function saludar(persona:{name:string, age:number}){
//     const {name,age} = persona
//     console.log(`hola ${name}, tienes ${age}`);
// }
// saludar({ name:2, age:'Pepe' })

/*********************************** */

// function saludar({name, age}: {name:string, age:number}): number{
//     console.log(`hola ${name}, tienes ${age}`);
//     return age
// }

// let username:string 
// username = saludar({name:'pepe', age: 2})

/*********************************** */

//EVITAR USAR :Function !!
// const sayHiFromFunction = (fn: Function) => {
//     fn('Miguel')
// }

// sayHiFromFunction((name:string) => {
//    console.log(`Hola ${name}`);
// })

// sayHiFromFunction(() => {
//    return Math.random()
// })

// const sayHiFromFunction = (fn: (name:string) => void) => {
//     fn('Miguel');
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`);
// }

// sayHiFromFunction(sayHi)

/*********************************** */
//Tipar arrow functions

// const sumar = (a:number, b:number): number => {
//     return a + b;
// }

// const restar: (a:number, b:number) => number = (a,b) => {
//     return a - b;
// } 

// // never: para cuando nunca va regresar nada
// function throwError(message: string): never {
//     throw new Error(message)
// }
/*********************************** */
// Type Alias
// type Hero = {
//     name:string,
//     age:number
// }

// let hero:Hero = {
//     name: 'Thor',
//     age: 1500
// }

// function createHero(hero: Hero): Hero{
//     const {name,age} = hero;
//     return{ name,age }
// }

// const thor = createHero({name: 'Thor', age: 1500})
/************************************** */
// Optional properties //error lens visualcode

// template union types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type Hero = {
//     // readonly id?:number, // readonly no es inmutable
//     readonly id?:HeroId // readonly no es inmutable
//     name:string
//     age:number
//     isActive?: boolean
// }

// let hero:Hero = {
//     name: 'Thor',
//     age: 1500
// }

// function createHero(hero: Hero): Hero{
//     const {name,age} = hero;
//     return{ 
//         id:crypto.randomUUID(),
//         name,age, 
//         isActive: true 
//     }
// }

// // const thor = Object.freeze(createHero({name: 'Thor', age: 1500})) //no te permite mutar el objetp
// const thor = createHero({name: 'Thor', age: 1500})

/************************************** */
//Unio Types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// // let annn = number | string;
// // annn = true;
// // const enableAnimationDuration: boolean | number = 200

// type Hero = {
//     // readonly id?:number, // readonly no es inmutable
//     readonly id?:HeroId // readonly no es inmutable
//     name:string
//     age:number
//     isActive?: boolean
//     powerScale?:HeroPowerScale
// }

// let hero:Hero = {
//     name: 'Thor',
//     age: 1500
// }

// function createHero(hero: Hero): Hero{
//     const {name,age} = hero;
//     return{ 
//         id:crypto.randomUUID(),
//         name,age, 
//         isActive: true 
//     }
// }

// // const thor = Object.freeze(createHero({name: 'Thor', age: 1500})) //no te permite mutar el objetp
// const thor = createHero({name: 'Thor', age: 1500})
// thor.powerScale = "planetary";
/************************************** */

//Intersection Types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// type HeroBasicInfo = {
//     name:string,
//     age:number
// }

// type HeroProperties = {
//     readonly id?:HeroId
//     isActive?: boolean
//     powerScale?:HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// let hero:Hero = {
//     name: 'Thor',
//     age: 1500
// }

// function createHero(input: HeroBasicInfo): Hero{
//     const {name,age} = input;
//     return{ 
//         id:crypto.randomUUID(),
//         name,age, 
//         isActive: true 
//     }
// }

// const thor = createHero({name: 'Thor', age: 1500})
// thor.powerScale = "planetary";

/************************************** */
//Type Indexing

// type HeroProperties = {
//     isActive: boolean,
//     address:{
//         planet:string,
//         city: string
//     }
// }

// const addressHero: HeroProperties['address'] = {
//     planet:'Tierra',
//     city: 'Madrid'
// }
/************************************** */
//Type from value

// const address = {
//     planet: 'Earth',
//     city: 'Madrid'
// }

// type Address = typeof address

// const addressTwitch: Address = {
//     planet:'Mars',
//     city:'Twitch'
// }
/************************************** */
//Type from function return
// function createAddress(){
//     return{
//         planet:'Tierra',
//         city:'Barcelona'
//     }
// }

// type Address = ReturnType<typeof createAddress>

/************************************** */

//Arrays
// const languages:string[] = [];
// const languages:Array<string> = [];
// const languages:(string | number)[] = [];

// languages.push('Javascript')
// languages.push(4)

////-----------
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// type HeroBasicInfo = {
//     id?:number,
//     name:string,
//     age:number
// }

// const heroWithBasicsInfo: HeroBasicInfo[] = []
////-------------------------

/*
 [
    ['x','0','0']
    ['0','x','0']
    ['0','0','x']
 ]
*/

type CellValue = 'x' | '0' | ''
type Gameboard = [
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue]
]

// const gameBoard: CellValue[][] = [
//     ['x','0','0'],
//     ['0','x','0'],
//     ['0','0','x']
// ]

const gameBoard: Gameboard = [
    ['x','0','0'],
    ['0','x','0'],
    ['0','0','x']
]

//TUPLAS: ARRAYS PREDEFINIDOS QUE NO VAN A CAMBIAR
// type State = [string, (newName:string) => void]
// const [hero, setHero] = useState('thor')

type RGB = [number,number,number]
const rgb:RGB = [2,3,4]