let valueDiplays= document.querySelectorAll(".countup-num");
let interval =1000;


valueDiplays.forEach((valueDiplay)=>{
    let startValue=0;
    let endValue =parseInt(valueDiplay.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter = setInterval(()=>{
        startValue+=1;
        valueDiplay.textContent = startValue;
        if(startValue == endValue){
            // valueDiplay.textContent=endValue+"+";
            clearInterval(counter);
        }
    },duration);
})