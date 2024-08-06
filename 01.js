// console.log("Renu Yadav");
// for of loop
let str = "javascript";
let size = 0;
for(let i of str){
     console.log("i=",i);
     size++;
}
console.log("string size=",size);

// for in loop
let students = {
    name: "Renu Yadav",
    age: 20,
    cgpa:7.5,
    isPass: true,
};
for(let key in students){  
    console.log(key);  //return key value
    console.log("key=",key, "value=",students[key]);
}

// these are the special loops in js

// print all even numbers from 0 to 100
let i=0;
do {
    if(i%2==0){
        console.log(i);
        i+=1;
    };
}while(i<=100);


console.log("hi");