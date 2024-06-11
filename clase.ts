import { IAvenger } from "./types.d" // d= declaraciones 

// interface Avenger {
//     name: string
//     powerScore: number
//     wonBattles: number
//     age: number
//     battle: (enemy: Avenger, win: boolean) => void
// }

class Avenger implements IAvenger{

    // readonly name: string
    // // # ó private dato privado
    // #powerScore: number
    // wonBattles: number = 0
    name: string
    powerScore: number
    wonBattles: number
    age: number

    constructor(name:string, powerScore :number, wonBattles: number, age:number){
        this.name = name
        // this.#powerScore = powerScore
        this.powerScore = powerScore
    }

    get fullName(){
    //  return `${this.name}, de poder ${this.#powerScore}`
     return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number){
        if(newPower <= 100){
            // this.#powerScore = newPower
            this.powerScore = newPower
        }else{
            throw new Error('Power score cannot be more then 100')
        }
    }
}

const avengers = new Avenger('Spidey', 80, 45,78)