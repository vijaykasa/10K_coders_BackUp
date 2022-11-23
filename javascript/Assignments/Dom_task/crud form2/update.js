var getindex;
function edituser(i){
    getindex=i
    myusers.forEach((element,index) => {
        if(i == index){
            for(a in element){
            
                document.getElementById(a).value=element[a]
             }
        }
    });
   document.getElementById("btnupdate").style.display="block"
   document.getElementById("btnsubmit").style.display="none"
}


function update(){
    var user=readuserdetails()
    myusers[getindex]=user
    localStorage.setItem("myusers",JSON.stringify(myusers))
    displayuser(myusers)
    clearform()
    document.getElementById("btnupdate").style.display="none"
    document.getElementById("btnsubmit").style.display="block"
}
      