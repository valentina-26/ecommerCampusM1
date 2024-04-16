export const Price = async({data: dataUpdate} = res) => {
    if (dataUpdate.product_original_price == null){
        return /*html*/`
        
        <li>
        <a href="checkout.html">
            <img src="../storage/img/shopping-cart.svg">
            <span id ="precioTotal" >Add to card ${dataUpdate.product_price}</span>
        </a>
    </li>
    `}

    return /*html*/ `
    <li>
        <a href="checkout.html">
            <img src="../storage/img/shopping-cart.svg">
            <span id ="precioTotal">Add to card ${dataUpdate.product_price}<sub>${dataUpdate.product_original_price}</sub></del></span>
        </a>
    </li>
    `
};