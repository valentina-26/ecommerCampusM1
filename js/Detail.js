addEventListener(DOM)

export const getAllProductName = async({ id:idCategory})=>{
    console.log("Esperando .......");
    const url = ``;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}
