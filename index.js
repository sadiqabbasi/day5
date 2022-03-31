function f1(){
    console.log("normal function")
   }
   f1();                                            // normal function
   
   
   f1();                                           // normal function
   function f1(){
    console.log("normal function")
   }
   
   
   var f2 = function (){
    console.log("anonymous function")
   }
   f2();                                           // anonymous function
   
   // console.log(f2)       // function defination 
   
   
   // f2();                                             // TypeError : f2 is not a function
   // var f2 = function (){
   //     console.log("anonymous function")
   // }              
   
   
   var f3 = () =>{
    console.log("arrow function")
   }
   f3();                                             // arrow function
   
   
   // arrow function and anonymous functions ar NOT hoisted.
   
   
   // Que. : convert this to an arrow function
   
   function add(a, b) {
    return a + b
   }
   
   // ans :
   // 1.
   var add = (a,b) => {
    return a + b
   }
   console.log(5,4);
   
   // 2.
   var add = (a, b) => a + b            // implicit return; ONLY when the single statement inside the function is return statement.
   
   console.log(add(4, 5))
   
   
   // using 1 parameter :
   var multiplyBy2 = n => n*2           // In case of one parameter inside function, the paranthesis() can also be removed.
   
   console.log(multiplyBy2(5));
   
   
   
   // -----------------shadowing-----------------------
   
   var x = 10
   
   function a(){
    console.log(x)
   }
   
   a()                        //  10      
   
   
   var x = 10
   
   function a(){
    var x = 40;
    console.log(x);
   }
   
   a()                          // 40
   var x = 10
   
   function a() {
       var x = 20
       function b() {
           var x = 30
           console.log(x, 'b')     //30
       }
       b()
       console.log(x, 'a')         //20
   }
   console.log(x, 'global')        //10
   a()
   
   // 10 'global
   // 30 'b'
   // 20 'a'