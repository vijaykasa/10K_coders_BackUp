

var Name=document.getElementById("name");
var username=document.getElementById("username");
var email=document.getElementById("email");
var password=document.getElementById("password");
var Cpassword=document.getElementById("Cpassword");



var userinfo={
    name:"",
    username:"",
    email:"",
    password:"",
    Cpassword:""
}
var myusers= JSON.parse(localStorage.getItem("myusers"))
if(myusers == null){
    var myusers=[]
}

function getuser(){

    var user=readuserdetails()

    myusers.push(user)
    localStorage.setItem("myusers",JSON.stringify(myusers))
    displayuser(myusers)
    clearform()
}

function clearform(){
    myusers.forEach(element => {
        for(i in element){
            document.getElementById(i).value=""
        }
    });
}

function readuserdetails(){
    var user={...userinfo}
    for(i in user){
       user[i]=document.getElementById(i).value
    }
    return user
}