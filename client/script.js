//edit your code

// data to be sent to the POST request
let _data = {name: "noor"}
  
fetch('http://localhost:3000/user',{
    method:'POST',
    body: JSON.stringify(_data),
    headers: {'Content-Type': 'application/json',},
})
.then(res=>res.json())
.then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})


fetch('http://localhost:3000/user?name=noor',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',},
})
.then(res=>res.json())
.then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})