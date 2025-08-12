/**
 * Home Entertainment Systems Products Data and Display Functions
 * This file contains mock data for home entertainment systems products
 * and functions to display, filter, and sort them.
 */

// Mock data for home entertainment systems products
const homeEntertainmentProducts = [
    // Hi-Fi Systems
    {
        id: "hs001",
        name: "Sony MHC-V83D",
        type: "hifi_systems",
        brand: "Sony",
        price: 9999.99,
        originalPrice: 11999.99,
        description: "High-power party speaker system with 360-degree sound and lighting effects.",
        features: [
            "High-efficiency tweeter and midrange",
            "Omnidirectional sound and party lights",
            "Karaoke and guitar input",
            "Gesture control",
            "BLUETOOTH® technology"
        ],
        specifications: {
            type: "Hi-Fi System",
            connectivity: "Bluetooth, USB, HDMI, Audio In",
            power: "AC power",
            weight: "21.9kg",
            color: "Black"
        },
        image: "https://www.sony.co.za/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660"
    },
    {
        id: "hs002",
        name: "LG XBOOM OK99",
        type: "hifi_systems",
        brand: "LG",
        price: 12999.99,
        originalPrice: 14999.99,
        description: "Powerful 1800W Hi-Fi system with DJ features and karaoke functionality.",
        features: [
            "1800W total output power",
            "Multi-color lighting effects",
            "DJ features with scratch pad",
            "Karaoke creator",
            "Bluetooth connectivity"
        ],
        specifications: {
            type: "Hi-Fi System",
            connectivity: "Bluetooth, USB, AUX",
            power: "AC power",
            weight: "25.3kg",
            color: "Black"
        },
        image: "https://www.lg.com/za/images/home-audio/md07529605/gallery/OK99-D-01.jpg"
    },
    {
        id: "hs003",
        name: "Yamaha MCR-B020",
        type: "hifi_systems",
        brand: "Yamaha",
        price: 4999.99,
        originalPrice: 5499.99,
        description: "Compact Hi-Fi system with CD player, Bluetooth and rich sound quality.",
        features: [
            "CD player with MP3 disc playback",
            "Bluetooth connectivity",
            "FM radio with 30 presets",
            "USB port for device charging",
            "Compact design"
        ],
        specifications: {
            type: "Hi-Fi System",
            connectivity: "Bluetooth, USB, CD, FM Radio",
            power: "AC power",
            weight: "3.3kg",
            color: "Black"
        },
        image: "https://usa.yamaha.com/files/MCR-B020_BL_a_0001_5d09718b478175d4b5c6b4c880d4a8d1.jpg"
    },
    {
        id: "hs004",
        name: "Denon D-M41",
        type: "hifi_systems",
        brand: "Denon",
        price: 7999.99,
        originalPrice: 8999.99,
        description: "Premium Hi-Fi mini system with CD player and Bluetooth connectivity.",
        features: [
            "High-quality audio circuitry",
            "CD player with MP3/WMA playback",
            "Bluetooth streaming",
            "FM/AM tuner",
            "Optical digital input"
        ],
        specifications: {
            type: "Hi-Fi System",
            connectivity: "Bluetooth, CD, FM/AM, Optical",
            power: "AC power",
            weight: "5.2kg",
            color: "Silver"
        },
        image: "https://www.denon.com/-/media/images/denon/dm41/dm41_e2_bk_re.png"
    },
    {
        id: "hs005",
        name: "Panasonic SC-PMX90",
        type: "hifi_systems",
        brand: "Panasonic",
        price: 6499.99,
        originalPrice: 6999.99,
        description: "Premium Hi-Fi system with CD player, Bluetooth and high-resolution audio support.",
        features: [
            "120W total output power",
            "High-resolution audio playback",
            "CD player with MP3 support",
            "Bluetooth with NFC",
            "USB-DAC function"
        ],
        specifications: {
            type: "Hi-Fi System",
            connectivity: "Bluetooth, USB, CD, FM Radio",
            power: "AC power",
            weight: "4.8kg",
            color: "Silver"
        },
        image: "https://www.panasonic.com/content/dam/pim/eu/en/SC/SC-PMX/SC-PMX90/SC-PMX90EGS-Variation_Image_for_See_All_1Global-1_eu_en.png"
    },

    // Soundbars
    {
        id: "sb001",
        name: "Samsung HW-Q950T",
        type: "soundbars",
        brand: "Samsung",
        price: 14999.99,
        originalPrice: 17999.99,
        description: "9.1.4 channel soundbar system with Dolby Atmos and wireless subwoofer.",
        features: [
            "9.1.4 channel configuration",
            "Dolby Atmos and DTS:X support",
            "Q-Symphony with compatible Samsung TVs",
            "Wireless subwoofer",
            "Alexa voice assistant built-in"
        ],
        specifications: {
            type: "Soundbar",
            connectivity: "HDMI, Optical, Bluetooth, WiFi",
            power: "AC power",
            weight: "7.1kg (soundbar), 9.8kg (subwoofer)",
            color: "Black"
        },
        image: "https://images.samsung.com/is/image/samsung/p6pim/za/hw-q950t-za/gallery/za-soundbar-hw-q950t-hw-q950t-za-frontblack-thumb-275992297"
    },
    {
        id: "sb002",
        name: "Sony HT-G700",
        type: "soundbars",
        brand: "Sony",
        price: 7999.99,
        originalPrice: 8999.99,
        description: "3.1 channel soundbar with Dolby Atmos and wireless subwoofer.",
        features: [
            "3.1 channel configuration",
            "Dolby Atmos and DTS:X support",
            "Vertical Surround Engine",
            "Wireless subwoofer",
            "HDMI eARC support"
        ],
        specifications: {
            type: "Soundbar",
            connectivity: "HDMI, Optical, Bluetooth",
            power: "AC power",
            weight: "3.5kg (soundbar), 7.4kg (subwoofer)",
            color: "Black"
        },
        image: "https://www.sony.co.za/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660"
    },
    {
        id: "sb003",
        name: "Bose Smart Soundbar 700",
        type: "soundbars",
        brand: "Bose",
        price: 11999.99,
        originalPrice: 13999.99,
        description: "Premium soundbar with Alexa and Google Assistant built-in.",
        features: [
            "QuietPort technology for deep bass",
            "ADAPTiQ audio calibration",
            "Alexa and Google Assistant built-in",
            "Bose Voice4Video technology",
            "HDMI ARC support"
        ],
        specifications: {
            type: "Soundbar",
            connectivity: "HDMI, Optical, Bluetooth, WiFi",
            power: "AC power",
            weight: "4.8kg",
            color: "Black"
        },
        image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_soundbar_700/product_silo_images/soundbar_700_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.1280.1280.png"
    },
    {
        id: "sb004",
        name: "JBL Bar 5.1",
        type: "soundbars",
        brand: "JBL",
        price: 9999.99,
        originalPrice: 10999.99,
        description: "5.1 channel soundbar with detachable wireless surround speakers.",
        features: [
            "5.1 channel configuration",
            "Detachable wireless surround speakers",
            "10-inch wireless subwoofer",
            "4K pass-through",
            "Bluetooth streaming"
        ],
        specifications: {
            type: "Soundbar",
            connectivity: "HDMI, Optical, Bluetooth",
            power: "AC power",
            weight: "3.9kg (soundbar), 13kg (subwoofer)",
            color: "Black"
        },
        image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5b9611ce/JBL_Bar_5.1_Hero_0033_x1.png?sw=535&sh=535"
    },
    {
        id: "sb005",
        name: "LG SN8YG",
        type: "soundbars",
        brand: "LG",
        price: 8499.99,
        originalPrice: 9499.99,
        description: "3.1.2 channel soundbar with Dolby Atmos and Google Assistant.",
        features: [
            "3.1.2 channel configuration",
            "Dolby Atmos and DTS:X support",
            "Meridian Audio technology",
            "Google Assistant built-in",
            "4K pass-through"
        ],
        specifications: {
            type: "Soundbar",
            connectivity: "HDMI, Optical, Bluetooth, WiFi",
            power: "AC power",
            weight: "4.2kg (soundbar), 7.8kg (subwoofer)",
            color: "Black"
        },
        image: "https://www.lg.com/za/images/sound-bars/md07504535/gallery/SN8YG-D-01.jpg"
    }
];

/**
 * Display home entertainment systems products based on type filter
 * @param {string} type - The product type to filter by (hifi_systems, soundbars, or null for all)
 * @param {number} page - The current page number
 * @param {string} sortBy - The sorting criteria
 */
function displayHomeEntertainmentProducts(type = null, page = 1, sortBy = "relevance") {
    // Get the products grid element
    const productsGrid = document.getElementById("products-grid");
    
    // Clear the grid
    productsGrid.innerHTML = "";
    
    // Filter products by type if specified
    let filteredProducts = homeEntertainmentProducts;
    if (type) {
        filteredProducts = homeEntertainmentProducts.filter(product => product.type === type);
    }
    
    // Sort products
    filteredProducts = sortProducts(filteredProducts, sortBy);
    
    // Pagination
    const productsPerPage = 9;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Create product cards
    paginatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Update pagination
    updatePagination(page, totalPages, type, sortBy);
}

/**
 * Create a product card element
 * @param {Object} product - The product data
 * @returns {HTMLElement} - The product card element
 */
function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-product-id", product.id);
    
    // Check if product has price alerts set
    const priceAlerts = getPriceAlerts ? getPriceAlerts() : [];
    const hasPriceAlert = priceAlerts.some && priceAlerts.some(alert => alert.productId === product.id);
    
    card.innerHTML = `
        <a href="home-entertainment-systems-product.html?id=${product.id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    <span>${product.specifications ? (product.specifications.type || '') : ''}</span>
                    <span>${product.specifications ? (product.specifications.connectivity || '') : ''}</span>
                    <span>${product.specifications ? (product.specifications.power || '') : ''}</span>
                </div>
                <div class="product-price">
                    <span class="current-price">R${product.price.toLocaleString()}</span>
                </div>
                <div class="product-retailers">
                    <span>2 retailers</span>
                </div>
            </div>
        </a>
        <div class="price-alert-bell ${hasPriceAlert ? 'active' : ''}" data-product-id="${product.id}" data-product-price="${product.price || 0}">
            <i class="fas fa-bell"></i>
        </div>
        <div class="product-buttons">
            <button class="compare-button" data-product-id="${product.id}">Compare</button>
            <button class="wishlist-button" data-product-id="${product.id}">Add to Wishlist</button>
        </div>
    `;
    
  
    const priceAlertBell = card.querySelector('.price-alert-bell');
    priceAlertBell.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const productId = this.getAttribute('data-product-id');
        const productPrice = parseFloat(this.getAttribute('data-product-price'));
        const productName = card.querySelector('.product-name').textContent;
        const productImage = card.querySelector('.product-image').src;
        
        togglePriceAlert(productId, productPrice, productName, productImage);
    });
    
    
    const compareButton = card.querySelector('.compare-button');
    compareButton.addEventListener('click', function () {
        window.location.href = `home-entertainment-systems-info.html?id=${product.id}`;
    });
    
    const wishlistButton = card.querySelector('.wishlist-button');
    wishlistButton.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
       
        if (typeof addToWishlist === 'function') {
            const productId = this.getAttribute('data-product-id');
            
            // Show loading indicator
            this.classList.add('wishlist-loading');
            const originalText = this.innerHTML;
            this.innerHTML = '<div class="wishlist-spinner"></div>';
            
            try {
                const wishlistItem = {
                    id: productId,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    url: `home-entertainment-systems-info.html?id=${product.id}`
                };
                
                addToWishlist(wishlistItem);
            } catch (error) {
                console.error('Error updating wishlist:', error);
                // Use a notification function from your main app if available
                if (typeof showNotification === 'function') {
                    showNotification('Wishlist Error', 'There was a problem updating your wishlist. Please try again.', 'error');
                }
            } finally {
                // Hide loading indicator
                this.classList.remove('wishlist-loading');
                this.innerHTML = originalText;
            }
        }
    });
    
    return card;
}

/**
 * Sort products based on criteria
 * @param {Array} products - The products to sort
 * @param {string} sortBy - The sorting criteria
 * @returns {Array} - The sorted products
 */
function sortProducts(products, sortBy) {
    const sortedProducts = [...products];
    
    switch (sortBy) {
        case "price-asc":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "brand-asc":
            sortedProducts.sort((a, b) => a.brand.localeCompare(b.brand));
            break;
        case "brand-desc":
            sortedProducts.sort((a, b) => b.brand.localeCompare(a.brand));
            break;
        default:
            // Default is relevance, sort by price
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
    }
    
    return sortedProducts;
}

/**
 * Update pagination controls
 * @param {number} currentPage - The current page number
 * @param {number} totalPages - The total number of pages
 * @param {string} type - The product type filter
 * @param {string} sortBy - The sorting criteria
 */
function updatePagination(currentPage, totalPages, type, sortBy) {
    const paginationElement = document.getElementById("pagination");
    const pagesContainer = paginationElement.querySelector(".pages");
    
    // Clear existing pages
    pagesContainer.innerHTML = "";
    
    // Previous button
    const prevButton = paginationElement.querySelector('[data-page="prev"]');
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            displayHomeEntertainmentProducts(type, currentPage - 1, sortBy);
        }
    };
    
    // Next button
    const nextButton = paginationElement.querySelector('[data-page="next"]');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            displayHomeEntertainmentProducts(type, currentPage + 1, sortBy);
        }
    };
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // Add first page if not visible
    if (startPage > 1) {
        const firstPageBtn = document.createElement("button");
        firstPageBtn.className = "page-number";
        firstPageBtn.textContent = "1";
        firstPageBtn.onclick = () => displayHomeEntertainmentProducts(type, 1, sortBy);
        pagesContainer.appendChild(firstPageBtn);
        
        if (startPage > 2) {
            const ellipsis = document.createElement("span");
            ellipsis.className = "page-ellipsis";
            ellipsis.textContent = "...";
            pagesContainer.appendChild(ellipsis);
        }
    }
    
    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.className = `page-number ${i === currentPage ? "active" : ""}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => displayHomeEntertainmentProducts(type, i, sortBy);
        pagesContainer.appendChild(pageBtn);
    }
    
    // Add last page if not visible
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement("span");
            ellipsis.className = "page-ellipsis";
            ellipsis.textContent = "...";
            pagesContainer.appendChild(ellipsis);
        }
        
        const lastPageBtn = document.createElement("button");
        lastPageBtn.className = "page-number";
        lastPageBtn.textContent = totalPages;
        lastPageBtn.onclick = () => displayHomeEntertainmentProducts(type, totalPages, sortBy);
        pagesContainer.appendChild(lastPageBtn);
    }
}

/**
 * Navigate to home entertainment systems page with type filter
 * @param {string} type - The product type (hifi_systems, soundbars)
 */
function navigateToHomeEntertainmentByType(type) {
    // Close the sidebar
    closeSidebar();
    
    // Navigate to home-entertainment-systems page with type parameter
    window.location.href = `Home-Entertainment-Systems.html?type=${type}`;
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize price alert functionality
    if (typeof initializePriceAlerts === 'function') {
        setTimeout(initializePriceAlerts, 500); // Add a small delay to ensure products are loaded
    }
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get("type");
    
    // Set up sort dropdown
    const sortBySelect = document.getElementById("sort-by");
    sortBySelect.addEventListener("change", function() {
        displayHomeEntertainmentProducts(typeParam, 1, this.value);
    });
    
    // Display products
    displayHomeEntertainmentProducts(typeParam, 1, "relevance");
    
    // Update page title based on type
    if (typeParam) {
        const pageTitle = document.querySelector(".section-title");
        if (pageTitle) {
            let titleText = "Home Entertainment Systems";
            
            switch (typeParam) {
                case "hifi_systems":
                    titleText = "Hi-Fi Systems";
                    break;
                case "soundbars":
                    titleText = "Soundbars";
                    break;
            }
            
            pageTitle.textContent = titleText;
        }
    }
    
    // Initialize price alert bells
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        // Check if card already has a price alert bell
        if (!card.querySelector('.price-alert-bell')) {
            const productId = card.getAttribute('data-product-id');
            const productPrice = parseFloat(card.querySelector('.current-price').textContent.replace(/[^0-9.]/g, ''));
            
            // Create bell icon
            const bellIcon = document.createElement('div');
            bellIcon.className = 'price-alert-bell';
            bellIcon.setAttribute('data-product-id', productId);
            bellIcon.setAttribute('data-product-price', productPrice);
            bellIcon.innerHTML = '<i class="fas fa-bell"></i>';
            
            // Add click event
            bellIcon.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const productName = card.querySelector('.product-name').textContent;
                const productImage = card.querySelector('.product-image').src;
                
                togglePriceAlert(productId, productPrice, productName, productImage);
            });
            
            // Check if this product already has an alert set
            const alerts = getPriceAlerts();
            const hasAlert = alerts.some(alert => alert.productId === productId);
            
            // Update bell appearance based on alert status
            if (hasAlert) {
                bellIcon.classList.add('active');
            }
            
            // Add to card
            card.appendChild(bellIcon);
        }
    });
    
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        if (button.id !== 'clear-filters') {
            const panelId = button.getAttribute('data-panel');
            button.addEventListener('click', () => toggleFilterPanel(panelId));
        }
    });
    
    // Set up apply filter buttons
    const applyButtons = document.querySelectorAll('.apply-filters');
    applyButtons.forEach(button => {
        button.addEventListener('click', applyFilters);
    });
    
    // Set up cancel filter buttons
    const cancelButtons = document.querySelectorAll('.cancel-filters');
    cancelButtons.forEach(button => {
        button.addEventListener('click', closeAllFilterPanels);
    });
    
    // Set up clear all filters button
    const clearAllButton = document.getElementById('clear-filters');
    if (clearAllButton) {
        clearAllButton.addEventListener('click', resetFilters);
        clearAllButton.style.display = 'none'; // Hide initially
    }
    
    // Close filter panels when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.filter-button') && !event.target.closest('.filter-panel')) {
            closeAllFilterPanels();
        }
    });
});

/**
 * Toggle filter panel visibility
 * @param {string} panelId - The ID of the panel to toggle
 */
function toggleFilterPanel(panelId) {
    const panel = document.getElementById(panelId);
    const allPanels = document.querySelectorAll('.filter-panel');
    
    // Close all other panels
    allPanels.forEach(p => {
        if (p.id !== panelId && p.classList.contains('active')) {
            p.classList.remove('active');
        }
    });
    
    // Toggle the selected panel
    panel.classList.toggle('active');
}

/**
 * Close all filter panels
 */
function closeAllFilterPanels() {
    const allPanels = document.querySelectorAll('.filter-panel');
    allPanels.forEach(panel => {
        panel.classList.remove('active');
    });
}

/**
 * Apply filters to products
 */
function applyFilters() {
    // Get the type parameter from URL
    const typeParam = new URLSearchParams(window.location.search).get("type");
    
    // Get selected brands
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const selectedBrands = Array.from(brandCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected colors
    const colorCheckboxes = document.querySelectorAll('input[name="color"]');
    const selectedColors = Array.from(colorCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected price ranges
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    const selectedPriceRanges = Array.from(priceCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Filter products
    let filteredProducts = [...homeEntertainmentProducts];
    
    // If type filter is applied from URL, apply it first
    if (typeParam) {
        filteredProducts = filteredProducts.filter(product => product.type === typeParam);
    }
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productBrand = product.brand?.toLowerCase() || '';
            return selectedBrands.some(brand => productBrand.includes(brand.toLowerCase()));
        });
    }
    
    // Apply color filter
    if (selectedColors.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            if (product.specifications && product.specifications.color) {
                const productColor = product.specifications.color.toLowerCase();
                return selectedColors.some(color => productColor.includes(color.toLowerCase()));
            }
            return false;
        });
    }
    
    // Apply price filter
    if (selectedPriceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productPrice = product.price || 0;
            return selectedPriceRanges.some(range => {
                if (range.includes('+')) {
                    // For "15000+" price range
                    const min = parseInt(range.replace('+', ''));
                    return productPrice >= min;
                } else {
                    const [min, max] = range.split('-').map(Number);
                    return productPrice >= min && productPrice <= max;
                }
            });
        });
    }
    
    // Sort and display filtered products
    const sortBySelect = document.getElementById('sort-by');
    const sortBy = sortBySelect ? sortBySelect.value : 'relevance';
    
    // Sort the filtered products
    filteredProducts = sortProducts(filteredProducts, sortBy);
    
    // Display the filtered products
    displayFilteredProducts(filteredProducts);
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Update the visibility of the "Clear All" button
    updateClearAllButtonVisibility();
}

/**
 * Function to display filtered products
 * @param {Array} products - The filtered products to display
 */
function displayFilteredProducts(products) {
    const productsGrid = document.getElementById("products-grid");
    productsGrid.innerHTML = "";
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 0;">
                <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                <p style="font-size: 18px; margin-bottom: 20px; font-weight: bold;">No products match your filters.</p>
                <button class="filter-button clear" onclick="resetFilters()" style="margin-top: 10px;">Reset Filters</button>
            </div>
        `;
        document.getElementById("pagination").style.display = 'none';
        return;
    }
    
    // Pagination
    const productsPerPage = 9;
    const page = 1; // Reset to first page when filtering
    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    // Create product cards
    paginatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Update pagination
    const typeParam = new URLSearchParams(window.location.search).get("type");
    updatePagination(page, totalPages, typeParam, document.getElementById('sort-by').value);
    document.getElementById("pagination").style.display = products.length > productsPerPage ? 'flex' : 'none';
}

/**
 * Update the visibility of the Clear All button
 */
function updateClearAllButtonVisibility() {
    const clearAllButton = document.getElementById('clear-filters');
    
    // Check if any filters are applied
    const anyBrandSelected = document.querySelectorAll('input[name="brand"]:checked:not([value="all"])').length > 0;
    const anyColorSelected = document.querySelectorAll('input[name="color"]:checked:not([value="all"])').length > 0;
    const anyPriceSelected = document.querySelectorAll('input[name="price"]:checked').length > 0;
    
    // Show/hide clear all button
    if (anyBrandSelected || anyColorSelected || anyPriceSelected) {
        clearAllButton.style.display = 'flex';
    } else {
        clearAllButton.style.display = 'none';
    }
}

/**
 * Reset all filters
 */
function resetFilters() {
    // Reset brand checkboxes
    document.querySelectorAll('input[name="brand"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset color checkboxes
    document.querySelectorAll('input[name="color"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset price checkboxes
    document.querySelectorAll('input[name="price"]').forEach(input => {
        input.checked = false;
    });
    
    // Get the type parameter from URL
    const typeParam = new URLSearchParams(window.location.search).get("type");
    
    // Display products with original filters
    displayHomeEntertainmentProducts(typeParam, 1, "relevance");
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Hide clear all button
    document.getElementById('clear-filters').style.display = 'none';
}

// Price Alert Functions
function getPriceAlerts() {
    const savedAlerts = localStorage.getItem('priceAlerts');
    if (savedAlerts) {
        try {
            return JSON.parse(savedAlerts);
        } catch (e) {
            console.error('Error parsing price alerts:', e);
            return [];
        }
    }
    return [];
}

// Make the functions available globally
window.navigateToHomeEntertainmentByType = navigateToHomeEntertainmentByType;
window.toggleFilterPanel = toggleFilterPanel;
window.closeAllFilterPanels = closeAllFilterPanels;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;