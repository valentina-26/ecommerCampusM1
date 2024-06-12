import {galleryIndex} from ".components/gallery.js"
import { getAllProductName } from "./module/app.js";

let input_Search = document.querySelector("#input_Search");
let main__article = document.querySelector(".main__article")

input_Search.addEventListener("change", e => {
    let data = {search : e.target.value};
    input_Search.value = null;

    let res = awit getAllProductName(data);
    main__article.innerHTML = galleryIndex();

    
    
});
