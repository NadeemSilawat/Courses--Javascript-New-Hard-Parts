
// Asynchronous JavaScript

function display(data){
    console.log(data)
   }
   const dataFromAPI = fetch('https://jsonplaceholder.org/users/1')
   //... user can do NOTHING here !
   //... could be 300ms, could be half a second
   // they're just clicking and getting nothing

   .then((response)=> {
        console.log(response)
   return  response.json()}).then(display)
//    display(dataFromAPI)
   console.log("Me later");


    //(2)//
   
   //  Introducing Web Browser APIs/ Node background threads


   function printHello(){
      console.log("Hello")
   }
   setTimeout(printHello,1000)

   console.log("Me first");

   //(3)
   // We’re interacting with a world outside of JavaScript now - so we need rules

   function printHellO(){
      console.log('Hello')
   }
   function blockFor1Sec(){
      //blocks in the JavaScript thread for 1 second
   }
setTimeout(printHellO,1000);
blockFor1Sec();
console.log("World!");



