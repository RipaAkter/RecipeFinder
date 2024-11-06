"use strict";


/**
 * import
 */

import { fetchData } from "./api";



/**
 * Home page search
 */

const /** {NodeElement} */ $searchField = document.querySelector("[data-search-field]");
const /**{ NodeElement} */ $searchBtn = document.querySelector("[data-search-btn]");

$searchBtn.addEventListener("click", function () {
    if($searchField.value) window.location.href = `./recipes.html?q=${$searchField.value}`;
});

/**
 * Search submit when press enter
 */

$searchField.addEventListener("keydown", e => {
    if(e.key == "Enter") $searchBtn.click();
} );

/**
 * tab panel navigation
 */
const /** {Nodelist} */ $tabBtns = document.querySelectorAll("[data-tab-btn]");
const $tabPanels = document.querySelectorAll("[data-tab-panel]");

let /**nodeElement */ [$lastActiveTabPanel] = $tabPanels;
let /**nodeElement */ [$lastActiveTabBtn] = $tabBtns;

addEventOnElements($tabBtns, "click", function(){
    $lastActiveTabPanel.setAttribute("hidden", "");
    $lastActiveTabBtn.setAttribute("aria-selected", false);
    $lastActiveTabBtn.setAttribute("tabindex", -1);

    const /**{NodeElement} */ $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
    $currentTabPanel.removeAttribute("hidden");
    this.setAttribute("aria-selected", true);
    this.setAttribute("tabindex", 0);

    $lastActiveTabPanel = $currentTabPanel;
    $lastActiveTabBtn = this;

});

/**
 * NAVIGATE TAB WITH ARROW KEY
 */

addEventOnElements($tabBtns, "keydown", function(e){
    const /** {NodeElements} */ $nextElement = this.nextElementSibling;
    const /** {NodeElements} */ $previousElement = this.previousElementSibling;

    if(e.key === "ArrowRight" && $nextElement) {
        this.setAttribute("tabindex", -1);
        $nextElement.setAttribute("tabindex", 0);
        $nextElement.focus();
    }else if(e.key === "ArrowLeft" && $previousElement){
        this.setAttribute("tabindex", -1);
        $previousElement.setAttribute("tabindex", 0);
        $previousElement.focus();
    } else if(e.key === "Tab"){
        this.setAttribute("tabindex", -1);
        $lastActiveTabBtn.setAttribute("tabindex", 0);
    }
});


