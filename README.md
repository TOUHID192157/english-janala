1) What is the difference between var, let, and const?
  Ans: var , let and const all the keyword in js programming language to declare varible.

      var - is used to declare a block scoped varible that can access inside from that function where it was declared , not from the outside of the fucntion it declared
      
      let and const - 0 both are block scoped function and can access from inside of that block where it is declared not and a value of varible that is declared by let can be chanded but not const declared varible.

2) What is the difference between map(), forEach(), and filter()?
  ans:  map(), forEach() and filter() all are array fucntion in modern js . The basic diffrence between them are given below 

     map() - it iterated over every element and a call back function inside it perform  the respective task  defined in it and  return a new array of same size as original array 

     forEach() - it iterates over the every element in the array and its callback fucntion returns nothing 

     filter()  - it also iterates over the single element of an array and it returns the array of element that are meets the condition rended by the call back fucntion defined in it 

3) What are arrow functions in ES6?
      
      ans: Arrow function is a concise way of declaring a fucntion using the arrow sign => in it . and single expression arrow function returns implicitly 

       the example of arrow fuction is given below :

       multi  expression arrow function with no parameter  

       const gretings  = () => {
         console.log("hello man" );
         console.log("hello everyone")  
         retun 0 ;                      
       }

       single expression arrow fucntion with single parameter 

       const getValeu = (val) =>  val*2 ;



4) How does destructuring assignment work in ES6?
   
   ans:  Destucting assignment in ES6  convenient way to extract the value from array or object and assigned to specific   varibles 

   in traditional way we assign into varibles the in the following ways from the array or object "

     const arr = [ 1,3,6]
        const a = arr[0]
        const c = arr[2]

     const person = {
        name: "saiem",
        age:24,
        city:"Dhaka"
     }
     const name = person.name


     now using destruction assignment it can do in more convenient way 
      const [d,f,e] = arr
      console.log(d) // 1 
      console.log(f) //2


       const {personName , personAge, personCity} = person
        console.log(personName ) // "saiem"
        



  
5) Explain template literals in ES6. How are they different from string concatenation?
    Ans: Creating js strings using backtic (``) in both side and can write js expression inside curly braces with a doller sign before them  instead of insted single quote ('') or double quote ("") is templated literals in Es6. Additionaly for multiline string there are no need of (\n or concationation) 

    example of string concatenation:

    const name = "saiem"
    const age = 24
    const messege = "My name is " + name + " and I am " + age + " years old";
    console.log(messege); // My name is saiem and I am 24 years old

    Example of string literals
    const introduction = `My name is ${name} and I am ${age} years old`

      