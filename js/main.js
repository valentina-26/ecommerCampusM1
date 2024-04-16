import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex, itemsCarrito } from "./components/gallery.js";
import { getAllProductName, getAllCategory, getAllInicio } from "./module/app.js";

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");
let nav__ul = document.querySelector(".nav__ul");
let footer = document.querySelector(".footer");

// Asignamos el HTML generado por itemsCarrito al footer
footer.innerHTML = itemsCarrito();

const footerCounter = async () => {
    let index__counter = document.querySelector("#index__counter");
    let counter = sessionStorage.length - 2;
    if (counter < 0) counter = 0;
    console.log(counter);
    if (index__counter) {
        index__counter.textContent = counter;
    }
};
await footerCounter();

document.addEventListener("DOMContentLoaded", async e => {
    if (!localStorage.getItem("getAllCategory")) {
        localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    }
    nav__ul.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));
    let res = await getAllInicio();
    main__article.innerHTML = galleryIndex(res, "fashion");
    footer.innerHTML = itemsCarrito();
    await footerCounter(); // Aseguramos que el contador se actualice después de cargar el HTML del footer
});

input__search.addEventListener("change", async e => {
    let params = new URLSearchParams(location.search);
    let data = { search: e.target.value, id: params.get('id') };
    input__search.value = null;
    let res = await getAllProductName(data);
    main__article.innerHTML = galleryIndex(res, params.get('id'));
});
