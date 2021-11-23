let sum ="";

function addToSum(operator){
    document.getElementById("output").innerText=sum;
    sum =sum + operator;
}

function evaluateSum(){
document.getElementById("output").innerText=eval(sum);
}

function clearSum(){
    sum="";
    document.getElementById("output").Innertext=sum;
}