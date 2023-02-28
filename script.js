
/*let button =document.getElementById("button");
button.addEventListener("click", getQuotes(event));*/

async function getQuotes() {
    const res = await fetch("https://api.adviceslip.com/advice");
const data = await res.json();
let quote = document.getElementById('quote');
quote.innerHTML = data.slip.advice;
document.getElementById("ID").innerHTML = data.slip.id;

}

