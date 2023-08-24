import { createDiv } from "./create-dom-elements";

function pageLoad(){
    const main = createDiv("main", "main")
    document.body.appendChild(main);
}

export {
    pageLoad
}