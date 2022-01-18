// const data = [{"region": "Europe", "population":

// 2525285, "startOfWeek": "sunday",},{"region": "Asia", "population": 50025285, "startOfWeek":

// "monday",},{"region": "Africa", "population":

// 5425285, "startOfWeek": "sunday",},{"region": "USA", "population": 525285, "startOfWeek":

// "monday",},{"region": "Antartica", "population":

// 25285, "startOfWeek": "monday",}]

// let a=data.filter((value)=>population>20000)
// console.log(a)

// console.log("Hello World")

//Day 6 Task pre required

function handle(){
    fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user/109",{
        method:"DELETE",
        headers:{
            "Content_Type":"application/json",
        },
        body:JSON.stringify(),
    })
    .then((response)=>response.json())
    // .then((data)=>console.log(data));
}