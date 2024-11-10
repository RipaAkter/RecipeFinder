
"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";

const /**{string} */ APP_ID="3f53d4ef";
const /**{string} */ APP_KEY="6a4ba6f54568002d7c6dc33e340dcb59";
const /**{String} */ TYPE = "public";



/**
 * @param {Array} queries Query array 

 * @param {Function} successCallback success callback function
 */

export const fetchData = async function (queries, successCallback) {
    const /**{string} */ query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");

    const /**{String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const /**{Object} */ response = await fetch(url);

    if(response.ok){
        const data = await response.json();
        successCallback(data);
    }
}
