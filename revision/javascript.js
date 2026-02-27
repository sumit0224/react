// arrays method;
// string method;
// async await
// settimeout
// setintervel
// clear setintervel
// clear settimeout
// promise
// css 
// main logic



// Promise  3 state  pending  resolve reject;

// jaha pr bhi thoda tym  



// let a1 = new Promise((resolve, reject)=>{
//         let fullfilled = false;
//         if(fullfilled){
//             resolve("haa bhai maine kam kr diye or fullfilled ho gya")
//         }else{
//             reject("bhai sorry kam nhi ho paya")
//         }
// })
// a1.then(res => console.log(res)).catch(res=> console.log(res))


// fetch("https://randomuser.me/api/").then(res => console.log(res)).catch(res=> console.log(res))
// try {
    
// } catch (error) {
    
// }

setTimeout(()=>{
    console.log("hello")
}, 1000)

let a = 0
let b = setInterval(()=>{
    a++
    console.log(a)
}, 1000)
setTimeout(()=>{
    clearInterval(b)
}, 3000)