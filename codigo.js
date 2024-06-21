let  brazoBase = document.querySelector(".brazoBase");
let  brazo2 = document.querySelector(".brazo2");
let  union = document.querySelector(".union");
let  hidraulico2 = document.querySelector(".hidraulico2");
let  brazoDeAgarre = document.querySelector(".brazoDeAgarre");
let  agarre1 = document.querySelector(".agarre1");
let  agarre2 = document.querySelector(".agarre2");

let b = document.querySelectorAll(".btn");

b[0].addEventListener("touchstart",()=>{
 brazoBase.style.transform += "rotate(-5deg)"
});
b[1].addEventListener("touchstart",()=>{
 brazo2.style.transform += "rotate(-5deg)"
});
b[2].addEventListener("touchstart",()=>{
 union.style.transform += "rotate(-5deg)"
});
b[3].addEventListener("touchstart",()=>{
 hidraulico2.style.transform += "translatey(-5px)"
});
b[4].addEventListener("touchstart",()=>{
 brazoDeAgarre.style.transform += "rotate(-5deg)"
});
b[5].addEventListener("touchstart",()=>{
 agarre1.style.transform += "rotate(-5deg)"
 agarre2.style.transform += "rotate(5deg)"
});
b[6].addEventListener("touchstart",()=>{
  brazoBase.style.transform += "rotate(5deg)"
});
b[7].addEventListener("touchstart",()=>{
 brazo2.style.transform += "rotate(5deg)"
});
b[8].addEventListener("touchstart",()=>{
 union.style.transform += "rotate(5deg)";
});
b[9].addEventListener("touchstart",()=>{
 hidraulico2.style.transform += "translatey(5px)"
});
b[10].addEventListener("touchstart",()=>{
 brazoDeAgarre.style.transform += "rotate(5deg)"
});
b[11].addEventListener("touchstart",()=>{
 agarre1.style.transform += "rotate(5deg)"
 agarre2.style.transform += "rotate(-5deg)"
});

