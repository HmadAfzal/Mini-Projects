let selectbox = document.querySelector(".selectbox")
let selectfield = document.querySelector(".selectfield")
let expand = document.querySelector(".expand")
let lists = document.querySelectorAll(".lists")
let main = document.querySelector(".main")
let p = document.querySelector(".p")
let select = false


selectbox.addEventListener("click", (() => {
    if (select == false) {
        selectfield.style.opacity = 0;
        expand.style.transform = "rotateX(180deg)";

        select = true;
    }
    else if (select == true) {
        selectfield.style.opacity = 100;
        expand.style.transform = "rotateX(0deg)";
        select = false;
    }

}))


main.addEventListener("click",((e)=>{
    if (e.target.innerText) {
        let select = e.target.innerText;
        console.log(select);
        p.innerText = select;
    }

}))
