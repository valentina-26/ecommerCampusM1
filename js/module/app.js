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
		'x-rapidapi-key': '1780a41306msh70037e7972db288p16453fjsn326530ce2cfd',
		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
	}
};
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}

export const getAllInicio = async()=>{
    let page = 2000
    page = Math.random()*(page/20);
    page = parseInt(Math.round(page));
    if (!page) page = 1;
    console.log("Esperando .......");
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=make%20up&page${page}=1&country=US&sort_by=NEWEST&category_id=fashion&product_condition=NEW`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}
