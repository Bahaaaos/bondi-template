var btn=document.querySelector(".portifolio button"),
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
  var num=-1; 
  btn.onclick=function(){   //function for showing and hidding projects 
    hiddenpro.forEach((el)=>{
        el.classList.toggle("hidden");
        el.classList.toggle("visible");
           })
    if(num<0){
   this.textContent="show less";

    }else{
        this.textContent="I want more..."
    }
    this.style.outline="none";
    num=num*-1

}

var btnl=allBtn.length;
for (let i=0;i<btnl;i++) {
    allBtn[i].onclick=function(){
        this.style.outline="none";
    }
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

function navActive() {
    navItem.forEach(el=>{
        el.onclick=function(){
           for(let i=0;i<navItem.length;i++){
            navItem[i].classList.remove("active");
           }
        this.classList.add("active");
        }
    });
}

navActive();


let Letters="abcdefghijklmnbopqrstuvwxyz",
    part="gijkl",
    len=part.length;
    console.log(len)
function findLostLetter(){
   // console.log(Letters.indexOf(part[0]))

  /*  let sub=Letters.substring(Letters.indexOf(part[0]),Letters.indexOf(part[len-1])+1);
    console.log(sub);*/
    for (let i=1;i<len-1;i++) {
        if( part[i]!==Letters[Letters.indexOf(part[0])+i]){
            console.log(Letters[Letters.indexOf(part[0])+i]);
            break;
        }
    }
   // console.log(sub);
}
findLostLetter();