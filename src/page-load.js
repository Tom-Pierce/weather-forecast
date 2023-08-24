import { createDiv } from "./create-dom-elements";

function pageLoad() {
  const header = createDiv("header", "header");
  document.body.appendChild(header);

  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.classList.add("search-bar");
  searchBar.placeholder = "Search city..."
  header.appendChild(searchBar);

  const main = createDiv("main", "main");
  document.body.appendChild(main);
}

export { pageLoad };
