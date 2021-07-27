//Assignment Ques # 01
var itemsArray = [
    { name:"juice",price:"50",quantity:"3"},
    { name:"cookie",price:"30",quantity:"9"},
    { name:"shirt",price:"880",quantity:"1"},
    { name:"pen",price:"100",quantity:"2"},
];
console.log(itemsArray[0].price* itemsArray[0].quantity)
console.log(itemsArray[1].price * itemsArray[1].quantity)
console.log(itemsArray[2].price * itemsArray[2].quantity)
console.log(itemsArray[3].price * itemsArray[3].quantity)
console.log(itemsArray[0]+itemsArray[1]+ itemsArray[2], itemsArray[3])

//Assignment Ques # 02
const item =
{
    name:"Hamza",
    email:"humzajaved68@gmail.com",
    password:9999,
    age:21,
    gender:"Male",
    city:"Karachi",
    Country:"Pakistan"
};
    
if ("name" in item === true) 
{
        console.log(" yes")
}
   
else
{
        console.log("nothing")
}

if ("email" in item === true) 
{       
        console.log ("u are") 
}
   
else 
{ 
        console.log("u win ")
} 

//Assignment Ques # 03

function Person () {
   this.name = 'Raza',
   this.age = 20,
   this.greet = function () 
   {
       console.log('WhatsUP!');
   }
}

const person1 = new Person();   // Here we create objects
const person2 = new Person();   // Here we create objects

console.log(person1.name);      // accessing property
console.log(person2.name);      // accessing property

//Assignment Ques # 04
function Person(first, last, age, gender, profession, address)
{
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.gender = gender;
   this.profession = profession;
   this.address = address;
 }