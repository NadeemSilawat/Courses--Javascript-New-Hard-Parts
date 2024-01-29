
            //Iterators//

   // Simple way 
    const number = [5,4,3];

    for(let i = 0 ; i< number.length; i++){
      console.log(number[i])
    }
    

// Functions can be returned from other functions in JavaScript


    function creatNewFunction(){
        function add2(num){
            return num + 2; 
        }
        return add2;
    }

    const newFunction = creatNewFunction();
    console.log(newFunction(7));


// We want to create a function that holds both 
// our array, the position we are currently at in our ‘stream’ of elements and has the ability to return the next element

        function createFunction(array){
            let i =0;
            function inner(){
                const element = array[i]
                i++
                return element
            }
            return inner
        }

        const returnNextElement = createFunction([4,5,6]);

// By calling the returnNextElement /****\

    console.log(returnNextElement()) //vale: 4 done : false
    console.log(returnNextElement()) //vale: 5 done : false
    console.log(returnNextElement())
    console.log(returnNextElement()) //undefined
    





    
