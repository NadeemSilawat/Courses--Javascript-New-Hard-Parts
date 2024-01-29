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


    function *createflow(){
        yield 1
        yield 2
        yield 3
    
    }

    const nextElement = createflow()
    console.log(nextElement.next())
    console.log(nextElement.next())
    console.log(nextElement.next())
    console.log(nextElement.next())
