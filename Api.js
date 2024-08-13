// fetch("https://dummyjson.com/products").then((res)=>{
//     // console.log(res);    
// // console.log(res.json()) 
// res.json().then((data)=>{
//     console.log(data);
// });
   
// });

// this is without nesting
fetch("https://dummyjson.com/products").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
})