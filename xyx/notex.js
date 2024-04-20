//! callback pahli cheej to ek function hai , aap is function wo sab likhdo jo aapko chalaana ho jab answer aajaye , aur ise tabl chalao jab aapka async code chal chuka ho 

// import { func } from "prop-types"

// function doSomeAsyncTask(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result =>{
//         callback()
//     })
// }

// doSomeAsyncTask("some url",func(){

// })


//! Async /await  = koi bhi funciton banalo and uske andar jo man men aaye wo async code likhdo, ab jab aap async likhte ho to baad wallid line pahale chal jaati hai kyuki axync side stack pe hota hair ar baad wali line agar async ke basis par hur to aapka code fail ho jaayega, wo isliy kyuki aapa code depend karat hai async code par jo ki baad men chalega sync code chalne ke baad 

//? with async await aap async code bhi aise likh sakte ho jaise ki aap normal synchoronous code likh rahe ho 
// async function abcd(){
//     let a =  await fetch(`https://randomuser.me/api/`)
//     a = await a.json()
//     console.log(a);
// }
// abcd()


//! Event loop

//! callback Vs Promises Vs Async / await 
//? Prime numer nikaalo with generator jab jab next bola jayee tabhi agle print ho 1 - 100

// Generators 
// function* allNums (){
//     for(let i = 1; i< 11; i++){
//         yield i;
//     }
// }
// const gen = allNums();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// ! WEb worksers 
//? thread ais amjho  ki ek computaitonal tasks perofmr krne ke liye ek thread aloted hota hai 

//? usually hammara poora cod esingle thread part chalta hair par kai baar kuch bade callucatinos perform karne pad jaate hai jiski wajah se aapka main thread busy hojata hai yaa fir wo kaafi jaada loaded johaata hai aur aapke baaki tasks ki performance kam hojaati hai 

//? is situation ki acche seh andle karne ke liye we use web workers.aap chaaho to apa koi task web worker ko bhej sakte ho jo ki doosre thread mein usko perofmr karega and aapka main thread efficiently baaki cheejo ko handle kar paayega ( ek waiter tha kam ke liya ab do waiters hai )

// new Worker('worker.js')

// aap apni main js file se data send kr skte ho and app worker files data acceptkaroge and jo perofm karna hai karoge and waha se data wapas main file bhejoge and main file men wapas accept karoge 


//main.js
var nums = Array.from({length:10000}, (_,b)=>b+1);
const worker = new Worker('worker.js');

worker.postMessage(nums);

worker.onmessage = function(data){
    console.log(data.data);
}


//worker js
onmessage = function(data){
    const ans = data.data.reduce((acc,item)=> acc+item, 0);
    postMessage(ans);
}





