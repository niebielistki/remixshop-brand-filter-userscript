<i> As an enthusiast of vintage fashion and second-hand clothes, I found myself spending too much time sifting through brands that didn't interest me. The absence of a feature to filter out unwanted brands prompted me to create a solution tailored to my needs. This script stems from a personal necessity to streamline my online shopping experience, focusing solely on the brands that align with my taste without the hassle of navigating through those that don't. It saves me a great deal of time :-) </i>


#### OVERVIEW
This project contains a Userscript developed to enhance the shopping experience on [remixshop.com](https://remixshop.com/) <b> by hiding product listings from specified brands </b>. The script aims to provide a personalized browsing experience for users interested in vintage and second-hand clothing without the clutter of undesired brands.

#### FEATURES
- Dynamically hides product listings from a predefined list of brands.
- Reduces the number of products on the page by fitting into the product display frame thus not creating empty blocks.
- Supports automatic updates to handle new content loaded onto the page.
- The page looks the same as before, you can't even see that any products have been removed from it.
- Version 2 introduces a more efficient way to detect changes and reflow the layout, improving the script's performance and reliability.

#### GETTING STARTED
To use this Userscript, you'll need a Userscript manager like Tampermonkey installed in your browser. Once set up, you can add the script to your browser and configure it as needed.

###### INSTALLATION
1. Install [Tampermonkey](https://www.tampermonkey.net) (or a similar Userscript manager) for your browser.
2. Open the Userscript you wish to install (`brand-filter-v1.user.js` or `brand-filter-v2.user.js`).
3. Copy the script's content and add it to your Userscript manager.
4. The script will automatically run on Remixshop.com and hide the specified brands.

#### VERSIONS
- **Version 1.0**: Initial version with basic functionality to hide brands based on a predefined list.
- **Version 2.0**: Enhanced version using mutation observers for better performance and layout adjustments after removing elements.

#### Acknowledgements
- Thanks to [remixshop.com](https://remixshop.com/) for providing a platform that inspired this project.
- Appreciation for the Userscript community for the invaluable resources.

#### Contributing
<i> Feedback and contributions are welcome! If you have suggestions for improvement or new features, feel free to open an issue or submit a pull request. </i>
