var id = document.getElementById("id");
var demo = document.getElementById("wrapper");
var question = document.getElementById("question");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var answers = document.getElementsByName("answers");
var result = document.getElementById("result");
var capture =document.getElementById("capture");
var slide=document.getElementById("slide");
var score = 0;
var i = 0;
var arry = [];
fetch("http://localhost:3000/questions")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    arry = data;
    for (p in arry[0]) {
        if (p == "id") {
          id.innerHTML = arry[0][p];
        } else if (p == "question") {        
          question.innerHTML = arry[0][p];
        } else if (p == "a") {         
          a.innerHTML = arry[0][p];
        } else if (p == "b") {          
          b.innerHTML = arry[0][p];
        } else if (p == "c") {         
          c.innerHTML = arry[0][p];
        } else if (p == "d") {        
          d.innerHTML = arry[0][p];
        }
      }
  });
function submit() {
  i++ 
  next(); 
  capture.style.display="block"
  slide.style.display="none"
}
function next() {
  if (i > arry.length - 1) {
    demo.innerHTML = `your score is ${score}/${arry.length}`;
  } else {
    for (p in arry[i]) {
      if (p == "id") { 
        id.innerHTML = arry[i][p];
      } else if (p == "question") { 
        question.innerHTML = arry[i][p];
      } else if (p == "a") { 
        a.innerHTML = arry[i][p];
      } else if (p == "b") {  
        b.innerHTML = arry[i][p];
      } else if (p == "c") {   
        c.innerHTML = arry[i][p];
      } else if (p == "d") {     
        d.innerHTML = arry[i][p];
      }
    }
    result.innerHTML = "";
    answers.forEach((ele) => {
      ele.checked = false;
    });
  }
}

function check(){
  answers.forEach((ele) => {
    if (ele.checked == true) {
      if (ele.value == arry[i].correct) {
        result.innerHTML = `your answer is right: ${arry[i].correct}`;
       score++;   
      } 
    }  else {      
      result.innerHTML = `your answer is wrong the right answer is :${arry[i].correct}`;
    }
    capture.style.display="none"
    slide.style.display="block"
  });  
}


function addnewquestion(){
    window.location.href="new.html"
}