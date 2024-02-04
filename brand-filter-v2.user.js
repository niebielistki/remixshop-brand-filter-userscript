// ==UserScript==
// @name         Remixshop Brand Filter 2.0
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide specific brands on Remixshop
// @author       You
// @match        https://remixshop.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of brands to hide, converted to lowercase
    const brandsToHide = ['h&m', 'zara', 'amisu', 'bershka', 'only', 'shein', 'clockhouse', 'trendyol', 'under armour', 'h&m divided', 'h&m sport', 'stradivarius', 'c&a', 'only play', 'bik bok', 'kangaroos', 'yessica', 'house', 'f&f', 'tally weijl', 'reserved', 'pull&bear', 'marks & spencer', 'gap', 'atmosphere', 'street one', 'esprit', 'asos', 'kappahl', 'cubus', 'fb sister', 'vero moda', 'reebok', 'roxy', 'jennyfer', 'karhu', 'h&m l.o.g.g.', 'esmara', 'primark', 'boohoo', 'gina tricot', 'sinsay', 'edc by esprit', 'pretty little thing', 'bpc bonprix collection', 'woman by tchibo', 'zara trafaluc', 'zaful', 'forever 21', 'even&odd', 'terranova', 'tommy hilfiger', 'cropp', 'bsb jeans', 'cardio bunny', 'hollister', 'bsb', 'missguided', 'anna field', 'camaieu', 'new look', 'jacqueline de yong', 'collusion', 'essentials by tchibo', 'cartoon network', 'lidnex', 'diverse', 'top secret', 'trespass', 'cos', 'topshop', 'adidas orginals', 'as you', 'asyou', 'disney', 'harry potter','xersion', 'athleta', 'superdry', 'adidas stellasport', 'nike', 'adidas', 'gymshark', 'cotton on', 'fila', 'target', 'active by tchibo', 'decathlon', 'bumbum', 'yfl reserved', 'amazon essentials', 'lonsdale', 'new yorker', 'romwe', 'body power', 'damskie legginsy', 'TCM', 'denim&co.', 'native youth', 'the authentic', 'noisy may', 'black squad', 'vans', 'george', 'quechua', 'wedze', 'nasa', 'na-kd', 'denim co.', 'star wars', 'puma', 'pimpinjoy', 'kari traa', 'kappa', 'tchibo', 'old navy', 'apparel', 'dqmane', 'jdy', 'kendall & kylie'];

    // Function to remove elements containing specific brands and reflow layout
    function adjustLayout() {
        let itemsRemoved = false;
        document.querySelectorAll('.col-6.col-sm-4.col-md-3.col-lg-2.product-item').forEach(item => {
            // Convert brand data to lowercase before comparison
            const brandData = item.getAttribute('data-gtm-brand').toLowerCase();
            if (brandData && brandsToHide.includes(brandData)) {
                item.remove(); // Removes the item
                itemsRemoved = true;
            }
        });

        // If items were removed, attempt to trigger a layout reflow
        if (itemsRemoved) {
            const container = document.querySelector('.product-listing');
            if (container) {
                container.style.display = 'none';
                setTimeout(() => {
                    container.style.display = '';
                }, 10);
            }
        }
    }

    // Observer for dynamic content
    const observer = new MutationObserver(() => {
        adjustLayout();
    });

    // Start observing the document
    observer.observe(document, { childList: true, subtree: true });
})();
