// JavaScript’s built in iterators are actually objects with a next method that when called
// returns the next element from the ‘stream’/flow - so let’s restructure slightly


// function createFlow(array){
//     let i = 0
//     const inner = {next : function(){
//         const element = array[i]
//         i++
//         return element
//     }
       
//   }
//  return inner 
// }

// const returnNextElement = createFlow([4,5,6])
// console.log(returnNextElement.next()) // 4
// console.log(returnNextElement.next()) // 5
// console.log(returnNextElement.next()) // 6
// console.log(returnNextElement.next()) // undefined


// Once we start thinking of our data as flows (where we can pick of an element one-by-one)
// we can rethink how we produce those flows -JavaScript now lets us produce the flows using a function 


    // function *createflow(){
    //     yield 1
    //     yield 2
    //     yield 3
    
    // }

    // const nextElement = createflow()
    // console.log(nextElement.next())
    // console.log(nextElement.next())
    // console.log(nextElement.next())
    // console.log(nextElement.next())



        //// (02)  ///////

    // function *createFlow(){
    //     const num = 10
    //     const newNum = yield num
    //     yield 5 + newNum
    //     yield 6
    // }

    // const returnNextElement = createFlow();
    // console.log(returnNextElement.next()); //10
    // console.log(returnNextElement.next(2)); //7


        ////  (03) //////
//   We can use the ability to pause createFlow’s running and then restart it only when our data return


    // function doWhereDataRecevied(value){
    //     returnNextElement.next(value)
    // }

    // function* createFlow(){
    //     const data = yield fetch('https://jsonplaceholder.org/users/4')
    //     console.log(data)
    // }

    // const returnNextElement = createFlow()
    // const futureData = returnNextElement.next()

    // futureData.value.then(doWhereDataRecevied)


// Async/await simplifies all this and finally fixes
// the inversion of control problem of callbacks


        async function createflow(){
            console.log("Me first");
            const data = await fetch('https://jsonplaceholder.org/users/1')
            console.log(data);
        }

        createflow()
        console.log("Me Second");


        