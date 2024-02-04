// ==UserScript==
// @name         Remixshop Brand Filter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide specific brands on Remixshop
// @author       You
// @match        https://remixshop.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of brands to hide
    const brandsToHide = ['H&M', 'Zara', 'Amisu', 'Bershka', 'ONLY', 'SHEIN', 'Clockhouse', 'Trendyol', 'Under Armour', 'H&M Divided', 'H&M Sport', 'Stradivarius', 'C&A', 'ONLY Play', 'Bik Bok', 'Kangaroos', 'Yessica', 'House', 'F&F', 'Tally Weijl', 'Reserved', 'Pull&Bear', 'Marks & Spencer', 'Gap', 'Atmosphere', 'Street One', 'Esprit', 'ASOS', 'KappAhl', 'Cubus', 'Fb Sister', 'Tally Weijl', 'Vero Moda', 'House', 'REEBOK', 'PRIMARK', 'ROXY', 'JENNYFER', 'KARHU', 'H&M L.O.G.G.', 'Esmara', 'Primark', 'BOOHOO', 'GINA TRICOT', 'Bohoo', 'Primark', 'Sinsay', 'EDC BY ESPRIT', 'Pretty Little Thing'];

    // Function to hide elements containing specific brands
    function hideBrands() {
        document.querySelectorAll('.product-box').forEach(item => {
            const brandName = item.querySelector('.product-brand'); // Selector for the brand name
            if (brandName && brandsToHide.includes(brandName.textContent.trim())) {
                item.style.display = 'none';
            }
        });
    }

    // Check for new content and apply the hiding function every 1 second
    setInterval(hideBrands, 1000);
})();
