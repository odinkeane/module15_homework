import { createDiv, createLink } from "./modules/elements.js";

let websocket;
window.addEventListener('load', () => {
    websocket = new WebSocket("wss://echo-ws-service.herokuapp.com");
    websocket.onopen = () => {
        console.log('conntected');
    }
    websocket.onclose = () => {
        console.log('disconntected');
    }
    websocket.onmessage = (evt) => {
        messanger.appendChild(createDiv(['primary', 'left', 'text-message'], [], evt.data));
    }
    websocket.onerror = (evt) => {
        console.log(evt.data);
    }
})




const send = document.querySelector('.send');
const text = document.querySelector('.text');
const messanger = document.querySelector('.messanger');
const geolocation = document.querySelector('.geolocation');
send.addEventListener('click', () => {
    const message = text.value.replace(/(<([^>]+)>)/gi, '');
    if (message !== "") {
        messanger.appendChild(createDiv(['primary', 'right', 'text-message'], [], message));
        websocket.send(message);
    }
})
geolocation.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            const message = `https://www.openstreetmap.org/#map=19/${coords.latitude}/${coords.longitude}`
            const link = createLink(`${coords.latitude} ${coords.longitude}`, message);
            messanger.appendChild(createDiv(['primary', 'right', 'text-message'], [link]));
        });
    }
})