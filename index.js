const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const formE1 = document.getElementById("form");
const question =document.getElementById('name');
const inputE1 = document.getElementById('input');
const scoreE1 = document.getElementById("score");

 question.innerText = `what is ${num1} multiplied by ${num2}?`;
 let correctAns = num1 * num2;
 let score =JSON.parse(localStorage.getItem("score"));
 if(!score){
    score = 0;
 }
 scoreE1.innerHTML = `score:${score}`;
  
 formE1.addEventListener("submit",()=>{
    let userAns = +inputE1.value;
    if(correctAns === userAns){
        score++
        updateLocalStorage();
    }else{
        score--
        updateLocalStorage();
    }
 })
 function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
 }

