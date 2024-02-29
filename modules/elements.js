function createButton(value = "Кнопка", className = "primary") {
    const btn = document.createElement("button");
    btn.classList.add(className);
    btn.innerHTML = value;
    return btn;
}

function createDiv(className = ["reverse-primary"], children = [], text=""){
    const div = document.createElement("div");
    div.innerHTML = text;
    className.forEach(element => {div.classList.add(element)});
    children.forEach(element => {div.appendChild(element);});
    return div;
}

function createLink(text="Ссылка", href="#", target="_blank"){
    const link = document.createElement('a');
    link.setAttribute('href', href);
    link.setAttribute('target', target);
    link.innerHTML = text;
    return link;
}

export {createButton, createDiv, createLink}