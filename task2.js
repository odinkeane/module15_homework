import { createButton, createDiv } from "./modules/elements.js";


function getWindowSize(){
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    return [width, height];
}

const btn = createButton("Размеры экрана");
btn.addEventListener('click', ()=>{
    const data = getWindowSize();
    console.log(data);
    alert(`Размеры видимой области страницы ${data[0]}x${data[1]}`);
});


const task2 = createDiv(["reverse-primary", "task2"],[btn])
document.body.appendChild(task2);