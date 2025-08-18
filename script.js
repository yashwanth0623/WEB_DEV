console.log("hii");
let name ='Hii';
const b=20;
console.log(name,20);
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b==0){
        console.log("not valid");
    }else{
    return a/b;
    }
}
console.log(add(3,5));
console.log(sub(3,5));
console.log(mul(3,5));
console.log(div(3,5));

let colors=["red","blue","green"];
console.log(colors);
colors.push("orange");
console.log(colors);
function change(){
    let r=Math.trunc(Math.random() * 256);
    let g=Math.trunc(Math.random() * 256);
    let b=Math.trunc(Math.random() * 256);
    console.log(r,g,b);
    let body_bg=document.querySelector("body");
    body_bg.style.cssText = `background-color:rgb(${r},${g},${b})`;
    let display=document.querySelector("#rgb");
    display.innerHTML=`${r},${g},${b}`;
}

let body_bg = document.querySelector("#mode");
let body_mode =document.querySelector("body");
let premode= 'light' ;

body_mode.addEventListener('click',(e)=>{
    if (premode === 'light'){
        premode = 'dark' ;
        body_mode.classList.add('dark');
        body_mode.classList.remove('light');
    }
    else{
        premode = 'light' ;
        body_mode.classList.add('light');
        body_mode.classList.remove('dark');
    }
    console.log(premode);
});

let images = document.getElementsByTagName("img");
for(let i=0;i<images.length;i++){
images[i].addEventListener('click',function(){
 document.querySelector('body').style.cssText = `background-image:url(${images[i].src});
 background-repeat:no-repeat;
 background-size:cover;
 background-position:center; `
})
};

















