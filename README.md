# Remixshop Brand Filter Userscript

## Overview
This project contains a Userscript developed to enhance the shopping experience on Remixshop.com by hiding product listings from specified brands. The script aims to provide a personalized browsing experience for users interested in vintage and second-hand clothing without the clutter of undesired brands.

## Features
- Dynamically hides product listings from a predefined list of brands.
- Supports automatic updates to handle new content loaded onto the page.
- Version 2 introduces a more efficient way to detect changes and reflow the layout, improving the script's performance and reliability.

## Getting Started
To use this Userscript, you'll need a Userscript manager like Tampermonkey installed in your browser. Once set up, you can add the script to your browser and configure it as needed.

### Installation
1. Install Tampermonkey (or a similar Userscript manager) for your browser.
2. Open the Userscript you wish to install (`brand-filter-v1.user.js` or `brand-filter-v2.user.js`).
3. Copy the script's content and add it to your Userscript manager.
4. The script will automatically run on Remixshop.com and hide the specified brands.

## Versioning
- **Version 1.0**: Initial version with basic functionality to hide brands based on a predefined list.
- **Version 2.0**: Enhanced version using mutation observers for better performance and layout adjustments after removing elements.

## Contributing
Feedback and contributions are welcome! If you have suggestions for improvement or new features, feel free to open an issue or submit a pull request.

## License
This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements
- Thanks to Remixshop.com for providing a platform that inspired this project.
- Appreciation for the Userscript community for the invaluable resources and support.
