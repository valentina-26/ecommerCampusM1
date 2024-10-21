import { headers } from "../components/env.js";

export const getAllProductName = async({search:text, id:idCategory})=>{
    console.log("Esperando .......");
    console.log(text, idCategory);
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&category_id=${idCategory}&product_condition=ALL`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}

export const getAllCategory = async()=>{
    console.log("Esperando .......");
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-category-list?country=US`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '210e85b1e1msh0c59fb7b46fa133p11057ejsn67fcd94639ce',
		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
	}
};
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}
document.querySelector(".carga").style.display = "block";
export const getAllInicio = async()=>{
    let page = 2000
    page = Math.random()*(page/20);
    page = parseInt(Math.round(page));
    if (!page) page = 1;
    console.log("Esperando .......");
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=clothes&page=${page}1&country=US&sort_by=RELEVANCE&category_id=fashion&product_condition=ALL`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    document.querySelector(".carga").style.display = "none";
    return data;
}
