let main = document.querySelector(".main");
let originalContent = main.innerHTML;

function setupSubmitListener() {
    let submit = document.querySelector(".submit");
    submit.addEventListener("click", () => {
        let popUp = document.createElement("div");
        main.innerHTML = `<div class="popup">
            <div class="check">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="0 0 48 48">
                    <path fill="#c8e6c9" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path>
                    <polyline fill="none" stroke="#4caf50" stroke-miterlimit="10" stroke-width="4" points="14,24 21,31 36,16"></polyline>
                </svg>
            </div>
            <div class="txt">
                <h2>Thank you!</h2>
                <p>Your application has been submitted successfully. Thanks!</p>
                <button class="ok">Ok</button>
            </div>
        </div>`;
        main.appendChild(popUp);
        
        let okbtn = document.querySelector(".ok");
        okbtn.addEventListener("click", () => {
            main.innerHTML = originalContent;
            setupSubmitListener();
        });
    });
}

setupSubmitListener();
