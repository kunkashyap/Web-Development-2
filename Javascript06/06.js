function doHomework(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let homeworkDone = true;
            if (homeworkDone){
                console.log("Homework is done");
                resolve("Homework complete");

            }else{
                reject("Homework not done.");
            }
        }
    ,3000);
})
}


function eatDinner(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let dinnerEaten = true;
            if (dinnerEaten){
                console.log("Dinner is done");
                resolve("Dinner complete");

            }else{
                reject("Dinner not done.");
            }
        },2000);
});
}

function gotoPlayground(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let permission = true;
            if (permission){
                console.log("Went to playground.");
                resolve("Playground time!");

            }else{
                reject("Not allowed to go.");
            }
        },3000);
});
}

doHomework().then((msg)=>{
    console.log(msg)
    return eatDinner()
}).then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Go to sleep.")
})

//event loop - flow (next class)
