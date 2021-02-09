const butt = document.getElementById("butt");
const box = document.getElementById("box");
const body = document.getElementsByTagName("body");

butt.addEventListener("click",() => {
    butt.classList.toggle("active");
    box.classList.toggle("active");
    document.body.classList.toggle("active");
}); 

console.log("Hello wrold");


