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
if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
  }