import { galleryCategory } from "./components/gallery.js";
import { titleProductDetail } from "./components/section.js";
import { getProductId } from "./module/detail.js";
import { descriptionDetails } from "./components/description.js";
import {Price} from "./components/price.js"

let main__section_gallery = document.querySelector("#main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");
let main__section__description = document.querySelector("#main__section__description");
let main__section__price = document.querySelector(".footer__ul");


addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));

    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);
    main__section__description.innerHTML = await descriptionDetails(info);
    main__section__price.innerHTML = await Price(info);
    
    let decreaseButton = document.querySelector("#decreaseQuantity");
    let increaseButton = document.querySelector("#increaseQuantity");
    let quantitySpan = document.querySelector("#quantity");
    
    decreaseButton.addEventListener('click', async (e) => {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
        quantitySpan.textContent = quantity - 1;
        }
        });
        
        increaseButton.addEventListener('click', async (e) => {
        let quantity = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = quantity + 1;
        });

    let LeerMasButton = document.querySelector("#leerMasOption");
    let informationProduct = document.querySelector("#informationProduct");

    LeerMasButton.addEventListener('click', async (e) => {
        let description = info.data.product_description;
        informationProduct.textContent = description;
    });
});