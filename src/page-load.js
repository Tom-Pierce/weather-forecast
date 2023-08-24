import { createForecastArray } from ".";
import { createDiv } from "./create-dom-elements";

function pageLoad() {
  const header = createDiv("header", "header");
  document.body.appendChild(header);
  const searchBarContainer = createDiv("", "search-bar-container");
  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.classList.add("search-bar");
  searchBar.placeholder = "Search city...";
  searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && e.target.value) {
      createForecastArray(e.target.value);
      e.target.value = "";
    }
  });
  searchBarContainer.appendChild(searchBar);
  header.appendChild(searchBarContainer);
  const main = createDiv("main", "main");
  document.body.appendChild(main);
}

export { pageLoad };
