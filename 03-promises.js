
    //promise
// Using two-pronged ‘facade’functions 
// that both initiate background we  browser work and return a placeholder object (promise) immediately in JavaScript

// function display(data){
//     console.log(data)
//    }
//    const futureData = fetch('https://jsonplaceholder.org/users/1')
//    futureData.then(display); // Attaches display functionality
//    console.log("Me first");



   //(2)
//But we need to know how our promisedeferred functionality gets back into JavaScript to be run


function displays(data){console.log(data)}
function printHello(){console.log("Hello")}
function blockFor300Sec(){/*block js thread for 300ms with long for loop */}

setTimeout(printHello,0);


const futhureData = fetch("https://jsonplaceholder.org/users/2")
futhureData.then((response)=>{
  return response.json()
}).then(display)

blockFor300Sec()

//Which will run first?

console.log("Me first!");




