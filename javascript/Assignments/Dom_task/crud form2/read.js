function displayuser(myusers){
    document.querySelector("tbody").innerHTML=""
    myusers.forEach((user,ind) => {
     var tr=document.createElement("tr")
     for(i in user){
         var td=document.createElement("td")
         td.innerHTML=user[i]
         tr.appendChild(td)
     }
     var editTd = document.createElement("td");
     var editBtn = document.createElement("button");
     editBtn.innerHTML = "EDIT";
     editBtn.setAttribute("onclick", "edituser(" + ind + ")");
     editTd.appendChild(editBtn);
     tr.appendChild(editTd);
 
     var deletetd = document.createElement("td");
     var button = document.createElement("button");
   button.setAttribute("onclick", "deleteuser(" + ind + ")");
     button.innerHTML = "Delete";
     deletetd.appendChild(button);
     tr.appendChild(deletetd);
     document.querySelector("tbody").appendChild(tr)
    });  
 }
 displayuser(myusers);
 




