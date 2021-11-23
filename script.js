let sum ="";

function addToSum(operator){
    sum =sum + operator;
    document.getElementById("output").innerText=sum;
}

function evaluateSum(){
document.getElementById("output").innerText=eval(sum);
}

function clearSum(){
    sum="";
    document.getElementById("output").innerText=sum;
}
function light() {
    document.getElementById("calculator").style.backgroundColor = "white";
    let buttons = document.getElementsByClassName("numbut");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor="grey";
        buttons[i].style.color="white";
    }
  }
  function dark() {
    document.getElementById("calculator").style.backgroundColor = "black";
    let buttons = document.getElementsByClassName("numbut");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor="white";
        buttons[i].style.color="black";
    }
  }