//JS Menu
const mainHeader = document.getElementById("header-main");
const btnMenu = document.getElementById("bars-menu");
const nav = document.getElementById("nav");
const itemMenu = document.querySelector(".main-menu__item--icon");
const iconSearch = document.getElementById("btn-search");
const search = document.getElementById("search");

btnMenu.addEventListener("click", () => {
  nav.classList.add("header__nav--show");
  mainHeader.classList.add("header__main--show");
});

mainHeader.addEventListener("click", (e) => {
  if (e.target.id == "header-main") {
    nav.classList.remove("header__nav--show");
    search.classList.remove("search--show");
    mainHeader.classList.remove("header__main--show");
  }
});

itemMenu.addEventListener("click", () => {
  itemMenu.nextElementSibling.classList.toggle("main-menu__submenu--show");
  itemMenu.lastElementChild.classList.toggle("icon-drop--show");
});

iconSearch.addEventListener("click", (e) => {
  search.classList.add("search--show");
  search.nombre.focus();
  mainHeader.classList.add("header__main--show");
});

search.firstElementChild.firstElementChild.addEventListener("click", () => {
  search.classList.remove("search--show");
  mainHeader.classList.remove("header__main--show");
});

search.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
    .then((res) => res.json());
});
search.nombre.addEventListener("input", (e) => {
  console.log(e.target.value.trim());
});
