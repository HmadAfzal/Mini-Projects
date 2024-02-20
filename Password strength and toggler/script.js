let input=document.querySelector("#passwordField")
let p= document.querySelector(".strength")
let eye=document.querySelector(".eye")

input.addEventListener('input', () => {
    if (input.value.length === 1) {
        p.innerHTML="Weak Password"
        input.style.borderColor = "red";
        p.style.color="red"
    } else if (input.value.length <= 4 && /[0-9]/.test(input.value)) {
        p.innerHTML= "Medium Password"
        p.style.color="orange"
        input.style.borderColor = "orange";
    } else if ( input.value.length <= 8 &&/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(input.value)) {
        p.innerHTML="Strong Password"
        p.style.color="green"
        input.style.borderColor = "green";
    }
});

function seepassword() {
    eye.addEventListener("click",(()=>{
    if (input.type==="password") {
        input.type="text";
        eye.src="eyeopen.svg"

    } else if(input.type==="text") {
        input.type="password";
        eye.src="eyeclose.svg"
    }
    
}))
}

seepassword();
