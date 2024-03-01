 //                                                              Javascirpt

//                                                               Spread Operator


 // Spread Opertor array/boject ki value ko copy karne me madad deta hai
 
 //                                                             Array
var a=[
    {
        name:'saim',
        age:'18',
    },
    {
        name:'Rahim',
        age:'4',
    },
] 

var b=[...a]
b.pop();

console.log(b)
console.log(a)

//                                                           Array

//                                                            Object
var c={
    name:'Ali',
    age:23,
}

var d={...c}

d.name='hasan'

console.log(d)
console.log(c)




//                                                            Object

 //                                                               Spread Operator


 //                                                                Truty & Falsy

 // js mein kuch bhi liko woh mainly do chezo se belong karta hi


 //                                                         Truty
 if(1){
console.log("True")
 }
 else{
    console.log("False")

 }
 //                                                         Truty

 //                                                         Falsy

 // Falsy value ye hai 0,NaN,undefined,document.all,false

 if(0){
    console.log("True")
     }
     else{
        console.log("False")
    
     }

 //                                                         Falsy

 //                                                                Truty & Falsy

 //                                                        Forin Loop

//  // object par loop chalane ke leye forin loop hota hai
 
 var obj={
    name:'saim',
    age:23,
    city:'karachi',
 }
 for (var key in obj){
    document.write(key,obj[key] +'<br>')
 }
 //                                                        Forin Loop


 //                                                     CallBack Function

 setTimeout(function(){
    console.log('hello world')
 },3000)
 //                                                     CallBack Function

//  //                                                     FirstClass Function

function abcd(a){
    a();
}

abcd(function(){console.log('hello viewer')})

//  //                                                     FisrtClass Function

//  //                                                    Constructor Function
function biscuit(colors){
    this.width='12px';
    this.heigth='20px';
    this.color=colors;
}

 console.log(new biscuit('red'))
 console.log(new biscuit('green'))
 console.log(new biscuit('purple'))

 //                                                    Constructor Function


 //                                                    IIFE  ( Immediately Invoked Function Expression)

//pending
 //                                                    IIFE  ( Immediately Invoked Function Expression)

 //                                                    Protoype Inheritance
 var human={
    canwalk:true,
    cantalk:true,
    canfly:false,
 }
 var students={
    speakeEnglish:true,
    understandMath:true,
    learncomputer:true,
 }
 students.__proto__=human
 //                                                    Protoype Inheritance

 //                                                    this 

//  global scope 

console.log(this)

//  global scope 

//  local scope 
function ans(){
    console.log(this)
}
ans()
//  local scope

//  Method scope 
var THIS={
   
    con:function(){
        console.log(this)
    },
    name:"saim",
    age:21
}
THIS.con();

//  Method scope 


 
 //                                                    this 

 //                                                   Call
function saim(val1,val2,val3){
    console.log(this,val1,val2,val3)
}
var obj={name:"saim"}
saim.call(obj,1,2,3)
 //                                                   Call 

 
 //                                                   apply
function da(val1,val2,val3){
    console.log(this,val1,val2,val3)
}
var obj1={name:"saim",age:19}
da.apply(obj1,[1,2,3])
 //                                                   apply 

  //                                                   bind
function e(val1,val2,val3){
    console.log(this[0])
}
 var bind =e.bind("bird cow",)
 bind()

 //                                                   bind 


 

