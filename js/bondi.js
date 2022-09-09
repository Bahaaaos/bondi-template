var btn=document.querySelector(".portifolio .container .btn"),
    allBtn=document.querySelectorAll("button"),
  list=document.querySelectorAll(".portifolio li"),
  liapp=document.getElementById("apps"),
  licode=document.getElementById("code"),
  lidesign=document.getElementById("design"),
  liall=document.getElementById("all"),
  liphoto=document.getElementById("photo"),
  pro=document.querySelectorAll(".portifolio .row >div"),
  hiddenpro=document.querySelectorAll(".portifolio .row > .hidden"),
  btn2=document.querySelector(".blogs button"),
  blog=document.querySelectorAll(".blogs .row >.hidden"),
  num2=-1,
  navItem=document.querySelectorAll("header .nav-item"),
  l=pro.length;
  let loginButton=document.querySelector("a.login");
  let formLogin=document.querySelector("form.login");
  let formButton=document.querySelector("form button.login");
let navButton=document.querySelector("nav button");
let navdiv=document.querySelector("nav>div");
let linkItem=document.querySelectorAll(".nav-link");
linkItem.forEach(el=>{ //to hide the navigation when click on list item in small screen
    el.onclick=function(){
        "use strict";
        navdiv.classList.remove("show");
    }
})
  loginButton.onclick=function(){//to to toggle the form when click on button
      "use strict";
      formLogin.classList.toggle("hidden");
  }
  formButton.onclick=function(){//to hide the form on click on buton inside form
    "use strict";
    formLogin.classList.add("hidden");

  }
  
  let num=-1; 

  btn.onclick=function() {   //function for showing and hidding projects 
    hiddenpro.forEach((el)=>{
        el.classList.toggle("hidden");
       el.classList.toggle("visible");
    });
    this.textContent="show less";
    if (num<0)  {
   btn.textContent="show less";

    }else{
        btn.textContent="I want more...";
    }
    this.style.outline="none";
    num=num*-1;
}



function filtering(x) { // function for filter portifolio  
    document.getElementById(x).onclick=function(){
    pro.forEach(el=>{
        el.style.opacity=1;
     if (!el.classList.contains(x) && x!=="all"){
        el.style.opacity="0.3";
     }});
     list.forEach(el=>{
         el.classList.remove("active");
     })
     this.classList.add("active");
    }
 
    }

    filtering("apps");
    filtering("code");
    filtering("design");
    filtering("photo");
    filtering("all");
    btn2.onclick=function(){ //function for showing and hidding storys 
        blog.forEach(el=>{
            el.classList.toggle("hidden");
            el.classList.toggle("visible");
        })
        if (num2<0){
            this.textContent="less story";
        }else{
            this.textContent="more story";
        }
        num2=num2*-1;
        this.style.outline="none"

    }

 //to add active class to the list item you click on
    navItem.forEach(el=>{
        el.onclick=function(){
           for(let i=0;i<navItem.length;i++){
            navItem[i].classList.remove("active");
           }
        this.classList.add("active");
        }
    });





