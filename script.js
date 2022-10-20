let text=document.getElementsByClassName("text");
let button=document.getElementsByClassName("sign-up-button")
let button1=document.getElementsByClassName("signin")
let fail=document.getElementsByClassName("fail");
let up=document.getElementsByClassName("up");
let register=document.getElementsByClassName("register-icon");
let signin=document.getElementsByClassName("signin-icon");
let profile=document.getElementsByClassName("profile");
let name1=document.getElementsByClassName("name");
let address=document.getElementsByClassName("address");
let bottom=document.getElementsByClassName("bottom");

let test=[]
let mas=[]
if(localStorage.length==0){
    localStorage.setItem("mas", JSON.stringify(mas))
}
 mas=JSON.parse(localStorage.getItem("mas"));
text[0].onchange=function (){
    test[0]=/^[A-Za-zА-Яа-я]{1,20}$/.test(text[0].value);
    if(test[0]){
        this.classList.remove("shadow-red");
        this.classList.add("shadow-green");
        fail[0].style.display="none";
    }
    else{
        this.classList.add("shadow-red");
    }
}
text[1].onchange=function (){
    test[1]=/^[A-Za-zА-Яа-я]{1,20}$/.test(text[1].value);
    if(test[1]){
        this.classList.remove("shadow-red");
        this.classList.add("shadow-green");
        fail[0].style.display="none";
    }
    else{
        this.classList.add("shadow-red");
    }
}    
text[2].onchange=function (){
    test[2]=/^[A-Za-z0-9,.,-]+@[A-Za-z0-9,.,-]+$/.test(text[2].value);
    if(test[2]){
        this.classList.remove("shadow-red");
        this.classList.add("shadow-green");
        fail[0].style.display="none";
    }
    else{
        this.classList.add("shadow-red");
    }
}    
text[3].onchange=function (){
    test[3]=/^\w{5,20}$/.test(text[3].value);
    if(test[3]){
        this.classList.add("shadow-green");
        this.classList.remove("shadow-red");
        fail[0].style.display="none";
    }
    else{
        this.classList.add("shadow-red");
    }
}    
button[0].addEventListener("click", function(){
    console.log(mas)
    if(test[0] && test[1] && test[2] && test[3]){
        let obj={
            firstName:text[0].value,
            secondName:text[1].value,
            email:text[2].value,
            password:text[3].value
        }
        if(mas.length==0){
            mas.push(obj);
            localStorage.setItem("mas",JSON.stringify(mas))
            for(let i=0;i<4;i++){
                text[i].classList.remove("shadow-red");
                text[i].classList.remove("shadow-green");
                text[i].value="";
            }
            console.log("dsf")
        }
        else{
            let q=0;
            for(let i=0;i<mas.length;i++){
            if(mas[i].email==text[2].value){
                text[2].classList.add("shadow-red");
                fail[0].style.display="block";
                break
            }
            else{
                q++;
                if(q==mas.length){
                mas.push(obj);
                localStorage.setItem("mas",JSON.stringify(mas))
                q=0
                for(let i=0;i<4;i++){
                    text[i].classList.remove("shadow-green");
                    text[i].value="";
                }
                }
            }
            }
        }
    }
})
up[0].addEventListener("click", function(){
    register[0].style.display="none";
    signin[0].style.display="block"
})
up[1].addEventListener("click", function(){
    register[0].style.display="block";
    signin[0].style.display="none";
})
button1[0].addEventListener("click", function(){
    console.log("df")
    for(let i=0;i<mas.length;i++){
        if(text[4].value==mas[i].email && text[5].value==mas[i].password){
            text[4].value="";
            text[5].value="";
            signin[0].style.display="none";
            profile[0].style.display="block";
            let first=mas[i].firstName[0].toUpperCase() + mas[i].firstName.slice(1)
            let second=mas[i].secondName[0].toUpperCase() + mas[i].secondName.slice(1)
            name1[0].textContent=`${first} ${second}`;
            address[0].textContent=mas[i].email
        }
        else{
            fail[1].style.display="block"
        }
    }
})
bottom[0].addEventListener("click", function(){
    signin[0].style.display="block";
    profile[0].style.display="none";
    fail[1].style.display="none"
})