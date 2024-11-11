const feliction = document.getElementById("feliction");


const buttonSi = document.getElementById("buttonSi");
buttonSi.addEventListener("click", funcionSi);
function funcionSi(){
    feliction.style.display = "flex";
    console.log("hoolaaa")
}

const buttonNo = document.getElementById("buttonNo")
buttonNo.addEventListener("mouseenter", funcionNo);
function funcionNo(){
    let numVertical = Math.floor(Math.random()*(500 - 60)) + 60;
    let numHorizontal = Math.floor(Math.random()*window.innerWidth);
    console.log("funciona el No");
    buttonNo.style.top = `${numVertical}px`;
    buttonNo.style.left = `${numHorizontal}px`;

}

