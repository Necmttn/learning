
// // Y pozitif
// let a1 = -10
// let b1 = 10 
// let a2 = -20
// let b2 = 20
// // Y Negatif
// let a1 = -20
// let b1 = 20 
// let a2 = -10
// let b2 = 10
// X Pozitif
// let a1 = -20
// let b1 = 10 
// let a2 = -10
// let b2 = 20

// // X Negatif
let a1 = -10
let b1 = 20 
let a2 = -20
let b2 = 10

let engines = [a1, b1, a2, b2]

// Speed up
                           
                           
//          (front)           
//     (-)            (+)     
//     (a1)        (b1)       
//         \_______/          
//        ⎛ DRONE \           
//         \_______|          
//        /        \          
//     (b2)         (a2)
//    (+)             (-)


let yVector = a1 - a2
let xVector = b1 - b2


let vector= {
  x: Math.cos(yVector*Math.PI/45),
  xa: Math.cos(yVector*Math.PI/45),
  y: Math.sin(yVector*Math.PI/45),
  ya: Math.sin(xVector*Math.PI/45),
}

console.table(vector)
console.log(`yVector ${yVector} , xVector ${xVector}`)

let location = {
  x: (vector.xa - vector.x) * 10,
  y: (vector.ya - vector.y) * 10,
}

console.log(location)





