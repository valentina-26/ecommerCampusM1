import { getProductId } from "./module/detail.js";
import { galleryCheckout,galleryBill } from "./components/gallery.js";


let main__section__checkout = document.querySelector("#main__section__checkout")
let section_bill = document.querySelector("#section_bill")

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!sessionStorage.getItem(id)) sessionStorage.setItem(id, JSON.stringify(await getProductId({id})));

    let info = JSON.parse(sessionStorage.getItem(id));
    main__section__checkout.innerHTML = await galleryCheckout();
    section_bill.innerHTML = await galleryBill(info);

    let decreaseButton = document.querySelector("#decreaseQuantity");
    let increaseButton = document.querySelector("#increaseQuantity");
    let quantitySpan = document.querySelector("#quantity");

    const updatePrice = (quantity) => {
        let precioEntero = parseFloat(info.data.product_price.replace('$', ''));
        let precioTotalContent = `<span id="precioTotal">Add to Cart $${quantity * precioEntero}`;
        if (info.data.product_original_price !== null) {
            let precioOriginal = parseFloat(info.data.product_original_price.replace('$', ''));
            precioTotalContent += `<del><sub>$${quantity * precioOriginal}</sub></del>`;
        }
        precioTotalContent += `</span>`;
        precioTotal.innerHTML = precioTotalContent;
    };

    decreaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
            quantity -= 1;
            quantitySpan.textContent = quantity;
            updatePrice(quantity);
        }
    });

    increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantitySpan.textContent);
        quantity += 1;
        quantitySpan.textContent = quantity;
        updatePrice(quantity);
    });

    updatePrice(1);  // Inicializa el precio con la cantidad inicial
});


    


