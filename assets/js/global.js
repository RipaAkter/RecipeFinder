
"use strict";

/**
 * Add Event on Multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type string
 * @param {Function} callback Callback Function
 */

window.addEventOnElements = ($elements , eventType, callback) => {
    for(const $element of $elements){
        $element.addEventListener (eventType, callback);
    }
}

