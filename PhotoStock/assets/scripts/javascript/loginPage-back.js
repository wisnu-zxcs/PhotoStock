const loginBlock = document.querySelector(".loginBox");
const loginButton = document.querySelector("#loginButton");
const registBlock = document.querySelector(".registBox");
const registButton = document.querySelector("#registButton");

const toggleBlocks = showLogin => {
    loginBlock.style.display = showLogin ? "block" : "none";
    registBlock.style.display = showLogin ? "none" : "block";
};

registButton.addEventListener("click", () => toggleBlocks(false));
loginButton.addEventListener("click", () => toggleBlocks(true));

const passwordReveal = document.querySelectorAll("#passwordReveal");
const loginPassword = document.querySelector("#loginPassword");
const registPassword = document.querySelector("#registPassword");

passwordReveal.forEach(button => {
    button.addEventListener("click", function (){
        const visiblePassword = loginPassword.type === "text";
        loginPassword.type = registPassword.type = visiblePassword ? "password" : "text";
        button.textContent = visiblePassword ? "Show password" : "Hide password";
    });
});

backgroundChanger();
setInterval(backgroundChanger, 15000);