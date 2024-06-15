export const Price = async({data: dataUpdate} = res) => {
    
    return /*html*/`
    <li>
        <a href="checkout.html">
            <img src="../storage/img/shopping-cart.svg">
            <span>${dataUpdate.product_price}</span>
        </a>
    </li>
    `
};