    //get the icon of the qusetions div
let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");
let plus4 = document.getElementById("plus4");
let plus5 = document.getElementById("plus5");
let plus6 = document.getElementById("plus6");

// get the div of qusetions and hide div
let question1=document.querySelector(".qusetion1");
let hideDiv1=document.querySelector(".hide-div1");

let question2=document.querySelector(".qusetion2");
let hideDiv2=document.querySelector(".hide-div2");

let question3=document.querySelector(".qusetion3");
let hideDiv3=document.querySelector(".hide-div3");

let question4=document.querySelector(".qusetion4");
let hideDiv4=document.querySelector(".hide-div4");

let question5=document.querySelector(".qusetion5");
let hideDiv5=document.querySelector(".hide-div5");

let question6=document.querySelector(".qusetion6");
let hideDiv6=document.querySelector(".hide-div6");

// fubction of qusetions 
question1.onclick = function (){

if (hideDiv1.style.display == "none"){
    plus1.style.transform=" rotate(-15deg)"
    hideDiv1.style.display="block"
}else{
    plus1.style.transform="none";
    hideDiv1.style.display="none"
    }
}
question2.onclick = function (){
    
    if (hideDiv2.style.display == "none"){
        plus2.style.transform=" rotate(-15deg)"
        hideDiv2.style.display="block"
    }else{
        plus2.style.transform="none";
        hideDiv2.style.display="none"
        }
}
question3.onclick = function (){
    if (hideDiv3.style.display == "none"){
        plus3.style.transform=" rotate(-15deg)"
        hideDiv3.style.display="block"
    }else{
        plus3.style.transform="none";
        hideDiv3.style.display="none"
        }
}
question4.onclick = function (){
    if (hideDiv4.style.display == "none"){
        plus4.style.transform=" rotate(-15deg)"
        hideDiv4.style.display="block"
    }else{
        plus4.style.transform="none";
        hideDiv4.style.display="none"
        }
}
question5.onclick = function (){
    if (hideDiv5.style.display == "none"){
        plus5.style.transform=" rotate(-15deg)"
        hideDiv5.style.display="block"
    }else{
        plus5.style.transform="none";
        hideDiv5.style.display="none"
        }
}
question6.onclick = function (){
    if (hideDiv6.style.display == "none"){
        plus6.style.transform=" rotate(-15deg)"
        hideDiv6.style.display="block"
    }else{
        plus6.style.transform="none";
        hideDiv6.style.display="none";
        }
}

