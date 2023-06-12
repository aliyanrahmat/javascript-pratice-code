
// let a = 10;
// let b = 20;
// // console.log(++a);
// // console.log (--a);
// // console.log(a--);
// console.log(a++)




// let a = prompt("hey aliyan whats up")
// a=Number.parseInt(a)
// if(a>0){
//     alert ("you are valid for it")
// }


// this is if else statement
// let a = prompt(100)
// if (a>0 & a<9){
//     alert("abe to tum pada be nahe huway")
// }
// else if(a>=10 & a<19){
//     alert("abe to tum bachay ho")
// }
// else if(a>=20  & a<39){
//     alert("ha ab sahe hay tumhare umer")
// }
// else if(a>=40 & a<59){
//     alert("ab bas be kar do chacha")
// }
// else if (a>=60 & a<79){
//     alert("ab thoda aram karlo chacha")
// }
// else{
//     alert("daru nahe ab dawaye lo uncule")
// }
// console.log((a<9?"abe be tum bachay ho":" ha tum baday hogaya ho"))



// this is switch case statement
// let age = prompt("enter your age here")

// switch(age){
//     case '1':
//         console.log("your are a kid know")
//         break
//         case '2':
//             console.log("you are a kid know")
//             break
//             case '3':
//                 console.log("your are meture know")
//                 break
//                 default:
//                     console.log("your age is not spicial")
// }

//javascript function in which 2 and 3 number are divisible finder

// let num = prompt("enter your number")
// num = Number.parseInt(num)
// if(num % 2==0 && num% 3 ==0){
//     console.log("your number is divisible by 2 and 3")
// }
// else{
//     console.log("your number is not divisible by 2 and 3")

// }


// javascript loop functions

// let sum = 0
// let n = prompt("enter the value of n")
// n= Number.parseInt(n)
// for(let i = 0;i<n; i++){
//     sum += (i+1)
// }
// console.log("sum of first number "+ n +" is "+ sum)


//javascript array method....
// let b = [1,2,34,56,7]
// console.log(b)


//this is a combination of two functions like if else and while loop
// let runAgain = true;
// const canDrive=(age)=>{
//     return age>=18?true:false
// }
// while(runAgain){
//     let age = prompt("enter your age")
// age = Number.parseInt(age)
// if (age<0){
//     console.error("enter a valid age")
//     break;
// }

// if(canDrive(age)){
//     alert("yes you can deive")
// }
// else{
//     alert("you cant not drive")
// }
// runAgain = confirm("do you want to play again")
// }
// let hello = "";

// hello = () => {
//   return "Hello World!";
// }

// document.getElementById("demo").innerHTML = hello();



// const changeBgRed = ()=>{
//   document.body.firstElementChild.style.background="red"
// }

// let b= document.body
// console.log("first child of b is",b.firstChild)
// console.log("first element child is",b.firstElementChild)



// this method is used to alter the css with the help of js..............//

// document.getElementsByTagName("ul")[0].firstElementChild.style.color="red"

// document.getElementsByTagName("ul")[0].firstElementChild.style.color="green"
// document.getElementsByTagName("ul")[0].lastElementChild.style.color="green"
// Array.from(document.getElementsByTagName("li")).forEach((element)=>{
//   element.style.background="yellow"
// });



// a little logic game concept with js .....
// let user = prompt("Enter s, w, or g")
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["s","w","g"][cpuI]

// const match = (cpu,user)=>{
//     if(cpu===user){
//         return "no body is Won"
//     }
//     else if(cpu==="s" && user==="w"){
//         return "cpu"
//     }
//     else if(cpu==="s" && user==="g"){
//         return "cpu"
//     }
//     else if(cpu==="g" && user==="w"){
//         return "user"
//     }
//     else if(cpu==="g" && user==="s"){
//         return "user"
//     }
//     else if(cpu==="w" && user==="s"){
//         return "user"
//     }
//     else if(cpu==="w" && user===">
//         return "user"
//     }
// }
// let result = match(cpu,user)
// document.write(`cpu: ${cpu} <br> and user: ${user} <br> the winner is : ${result}`)


// get date data in javascript.......
// let a = new Date()
// let h = a.getHours()
// let m = a.getMinutes()
// let s = a.getSeconds()
// let d = a.getDate()

// console.log(h,m,s,d);


    //  an synchronus function example......
    
    // let a = prompt("what is your name");
    // let b =  prompt('what is your father name ');
    // let c = prompt("what is your age");
    // console.log("your name is "+ a + b +" and your age is "+c);

    // an asynchronus function with an example ......
    // console.log('hello aliyan')
    // setTimeout(function(){
    // console.log('welcome back to js')
    // },3000);
    // console.log('hello aliyan')


    // callback functions.......

    // function loadScript(src,callback){
    //     var script = document.createElement("script");
    //     script.src = src;
    //     script.onload= function(){
    //         console.log("loaded script with SRC:"+src)
    //         callback(null,src);
    //     }
    //     script.onerror = function(){
    //         console.log("error loading  script with src: "+src);
    //         callback(new Error("src got some error"))
    //     }
    //     document.body.appendChild(script);
    // }

    // function hello(error,src){
    //     if (error){
    //         console.log(error)
    // return 
    //     }
    // 
    //     alert('hello world'+src);
    // }
    // function goodmorning(src){
    //     alert('goodmorning'+src)
    // }
    // loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",hello);



    // js promisses functions....

// let promise = new Promise(function(resolve, reject) {
//     alert('hello')
//     resolve(56)
// })
// console.log("hello one")
// setTimeout(function(){
//     console.log("hello two in one")
// },3000)
// console.log("my name is "+"hello three")
// console.log(promise)


//  promises.then and catch....

// let p1 = new Promise((resolve,reject)=>{
//     console.log('promises is pending...')
//     setTimeout(()=>{
//      console.log("i am promises and i am resolve!")
// resolve(true)
//     },5000)
// });

// let p2 = new Promise((resolve,reject)=>{
//     console.log('promises is pending...')
//     setTimeout(()=>{
//      console.log("i am promises and i am rejected!")
// reject(new Error('i am an error'))
//     },5000)
// });
// p1.then((value)=>{
//  console.log(value)
// })

// p1.then((value)=>{
//     console.log(value)
// })


// promises chaining.then function and method......
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolved after 2 seconds")
//     },2000)
// })

// p1.then((value) =>{
// console.log(value)
// return new promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promis 2")
//     },2000)
// })
// })


//  js attaching multiple handlers .....

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         alert("hay i am resolved")
//         resolve(1);
//     },2000)
// })
// p1.then(()=>{
// console.log("congrulation your promise is now resolved")
// })

// p1.then(()=>{
//     console.log("hurray")
// })




// async/await function ......


// async function harry(){

// let deliWeather = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("27 deg")
//     },2000)
// });


// let isbWeather = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("38 deg")
//     },5000)
// });
// console.log("fetachin delhi weather please wait...")
// let deliW = await deliWeather
// console.log("fettching delhi weather"+ deliW)
// console.log("fetachin islamabad weather please wait...")
// let isbW = await isbWeather
// console.log("fetching isb weather"+isbW)
// return[deliW,isbW]
// // deliWeather.then(alert)
// // isbWeather.then(alert)
// }
// console.log("welcome to weather control room aliyan")
// harry()


// error handling:try and catch.....

// setTimeout(()=>{
//     console.log("hacking wifi....please wait..")
// },2000)

// setTimeout(()=>{
//     console.log("fetching username and password...")
// },4000)

// try{
//     console.log(erro)
// }
// catch(err){
//     console.log("working on progress")
// }
// setTimeout(()=>{
//     console.log("hacking ilhan user name and fb id...")
// },6000)
// setTimeout(()=>{
//     console.log("sucessfully hacked user id'1231233120'...")    
// },8000)


// pratice set of functions...

// let p =()=>{
//     return new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//     reject(new Error("please this is not acceptable"))
//  },3000)       
//     })
// }

// let a = async()=>{
//     try{
//         let c = await p()
//         console.log(c)
//     }
//     catch(err){
//         console.log("this error has been handled")
//     }
// }
// a()

// cookies in js 

// console.log(document.cookie)
// document.cookie="name= aliyanrahmat-1122"
// document.cookie="father name = rahmat"
// document.cookie="age 22"
//     let key = prompt("enter your key")
//     let value = prompt("enter your value")
//     document.cookie = `${encodeURIcomponent(key)}=${encodeURIcomponent(value)}`
//     console.log(document.cookie)


// localstorage and related methods

let key = prompt("enter key you want to set")
let value= prompt("enter value you want to set")
localStorage.setItem(key,value)

console.log(`the value at ${key} is ${localStorage.getItem(key)}`)
if (key =="red" || key =="blue"){
    localStorage.removeItem(key)
}
if (key == 0){
    localStorage.clear()
}