export const descriptionDetails = async({data: dataUpdate} = res) => {
    if (dataUpdate.product_description !== null){
    let DescriptionHTML = async() => {
        let description = await dataUpdate.product_description;
        let text= description;

        if (description.length > 150) {
            text = description.substring(0, 150) + '... <strong id = "leerMasOption"> Read More.</strong>';
        }
   
        return `${text}`;
    }

    
   
    
    return /*html*/`
    <article class="product__information">
            <p id = "informationProduct">${await DescriptionHTML()}</p>
    </article>
    `
} else return null;
};