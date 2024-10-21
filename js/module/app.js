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
    const url = `https://real-time-amazon-data.p.rapidapi.com/deal-products?country=US&sort_by=FEATURED&page=1'`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1fe3d58549mshc026dc0b3248a3ep1d25fbjsn46d9483a5513',
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
    const url = `https://real-time-amazon-data.p.rapidapi.com/deal-products?country=US&sort_by=FEATURED&page=${page}`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    document.querySelector(".carga").style.display = "none";
    return data;
}
