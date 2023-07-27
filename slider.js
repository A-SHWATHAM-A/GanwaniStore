let curentimg=0;
let ul =document.querySelectorAll(".slider>ul li");


let a=document.getElementsByClassName("left")[0];
let b=document.getElementsByClassName("right")[0];
a.addEventListener("click",left);
b.addEventListener("click",right);
function left (){
    if(curentimg>0){curentimg--;
    }else{
        curentimg =ul.length-1;
        
    }for(let i=0;i<ul.length;i++){
        ul[i].className="";
    }
    ul[curentimg].className="active";

    

}
function right (){
    if(curentimg<ul.length-1)
    {
        curentimg++;
    }else{
        curentimg =0;
        
    }for(let i=0;i<ul.length;i++){
        ul[i].className="";
    }
    ul[curentimg].className="active";

}
setInterval(right,5000);  