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

 // object par loop chalane ke leye forin loop hota hai
 
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

 //                                                     FirstClass Function

function abcd(a){
    a();
}

abcd(function(){console.log('hello viewer')})

 //                                                     FisrtClass Function

 //                                                    Constructor Function
function biscuit(colors){
    this.width='12px';
    this.heigth='20px';
    this.color=colors;
}

 console.log(new biscuit('red'))
 console.log(new biscuit('green'))
 console.log(new biscuit('purple'))

 //                                                    Constructor Function



