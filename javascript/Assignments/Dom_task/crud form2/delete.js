function deleteuser(i){
    console.log(i)
    myusers = myusers.filter((ele,index) => {
       return i !== index
    });
    localStorage.setItem("myusers",JSON.stringify(myusers))
    displayuser(myusers)
}