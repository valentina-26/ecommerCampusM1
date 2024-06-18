import { galleryCategory } from "./components/gallery.js";
import { titleProductDetail } from "./components/section.js";
import { getProductId } from "./module/detail.js";
import { descriptionDetails } from "./components/description.js";
import {Price} from "./components/price.js"


let main__section_gallery = document.querySelector("#main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");
let main__section__description = document.querySelector("#main__section__description");
let main__section__price = document.querySelector(".footer__ul");


let s = document.querySelector("#s");
let m = document.querySelector("#m");
let l = document.querySelector("#l");
let xl = document.querySelector("#xl");

let images = [s, m, l, xl];
let imgPaths = {
    s: "../storage/img/Sblack.svg",
    m: "../storage/img/Mblack.svg",
    l: "../storage/img/Lblack.svg",
    xl: "../storage/img/blackXL.svg"
};

let originalPaths = {
    s: "../storage/img/s.svg",
    m: "../storage/img/m.svg",
    l: "../storage/img/l.svg",
    xl: "../storage/img/xl.svg"
};

function deselectAll() {
    images.forEach(image => {
        image.src = originalPaths[image.id];
    });
}

s.addEventListener("click", (e) => {
    deselectAll();
    s.src = imgPaths.s;
});

m.addEventListener("click", (e) => {
    deselectAll();
    m.src = imgPaths.m;
});

l.addEventListener("click", (e) => {
    deselectAll();
    l.src = imgPaths.l;
});

xl.addEventListener("click", (e) => {
    deselectAll();
    xl.src = imgPaths.xl;
});


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
    let precioTotal = document.querySelector("#precioTotal")

    decreaseButton.addEventListener('click', async e => {
    let quantity = parseInt(quantitySpan.textContent);
    if (info.data.product_price !==  null) {
    let precioentero = parseFloat(info.data.product_price.replace('$',''))
    if (info.data.product_original_price !== null){
        let precioOriginal = parseFloat(info.data.product_original_price.replace('$',''));
        if(quantity > 1){
            quantitySpan.textContent = quantity - 1;
            quantity = parseInt(quantitySpan.textContent);
            precioTotal.innerHTML =/*html*/`
                <span id= "precioTotal" >Add to Cart $${quantity * precioentero}<del><sub>$${quantity * precioOriginal}</sub></del></span>
                `}
            }else{
                    if(quantity > 1){
                    quantitySpan.textContent = quantity - 1;
                    quantity = parseInt(quantitySpan.textContent);
                    precioTotal.innerHTML = /*html*/`
                        <span id= "precioTotal">Add to Cart $${quantity * precioentero}</span>
                        `}
            }
            }else {
                if(quantity > 1){
                quantitySpan.textContent = quantity - 1;
            };}
            });
        
   

    increaseButton.addEventListener('click', async e => {
            let quantity = parseInt(quantitySpan.textContent);
            if (info.data.product_price !==  null) {
            let precioentero = parseFloat(info.data.product_price.replace('$',''))
            if (info.data.product_original_price !== null){
                let precioOriginal = parseFloat(info.data.product_original_price.replace('$',''));
                quantitySpan.textContent = quantity + 1;
                quantity = parseInt(quantitySpan.textContent);
                precioTotal.innerHTML =/*html*/`
                    <span id= "precioTotal" >Add to Cart $${quantity * precioentero}<del><sub>$${quantity * precioOriginal}</sub></del></span>
            `}else{
                quantitySpan.textContent = quantity + 1;
                quantity = parseInt(quantitySpan.textContent);
                console.log(quantity);
                precioTotal.innerHTML = /*html*/`
                <span id= "precioTotal">Add to Cart $${quantity * precioentero}</span>
                `}
            }else return quantitySpan.textContent = quantity + 1;
});

let LeerMasButton = document.querySelector("#leerMasOption");
    let informationProduct = document.querySelector("#informationProduct")

    if(LeerMasButton){
        LeerMasButton.addEventListener('click', async e => {
            let description = info.data.product_description;
            informationProduct.textContent = description;
        });
    };

});