//promise 


const checkAge = new Promise((resolve, reject)=> {
    let age = 2;
    if(age>=18){
        resolve("you can vote");
    }else{
        reject("you cannot vote");  
    }
});
// checkAge.then(msg=>console.log(msg))
// .catch(error => console.log(error));

