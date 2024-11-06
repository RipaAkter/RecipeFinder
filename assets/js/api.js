
"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/nutrition-details";

const /**{string} */ APP_ID="ea1d9a09";
const /**{string} */ APP_KEY="8760b52ba58df307a365818a494c90ec";
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
