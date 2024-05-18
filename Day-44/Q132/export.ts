// Question 132: Discuss the difference between default and named exports in JavaScript modules.

export function hello(){
    console.log("Hello World!")
}

export function sum(a :number, b:number){
    return a + b
}
// You can export multiple named export

function add(a: number, b: number){
    return a * b
} 

export default add
// Only one export can be declare as default