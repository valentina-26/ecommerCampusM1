import { getProductId } from "./module/detail.js";
import { galleryCheckout } from "./components/gallery.js";


let main__section__checkout = document.querySelector("#main__section__checkout")

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!sessionStorage.getItem(id)) sessionStorage.setItem(id, JSON.stringify(await getProductId({id})));

    let info = JSON.parse(sessionStorage.getItem(id));
    main__section__checkout.innerHTML = await galleryCheckout();

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
});

