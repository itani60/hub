/**
 * Portable Speakers Products Data and Display Functions
 * This file contains mock data for portable speakers products
 * and functions to display, filter, and sort them.
 */

// Mock data for portable speakers products
const portableSpeakersProducts = [
    // Bluetooth Speakers
    {
        id: "bs001",
        name: "JBL Charge 5",
        type: "bluetooth_speakers",
        brand: "JBL",
        price: 2999.99,
        originalPrice: 3499.99,
        description: "Powerful portable Bluetooth speaker with long-lasting battery and waterproof design.",
        features: [
            "IP67 waterproof and dustproof",
            "20 hours of playtime",
            "Built-in powerbank",
            "JBL PartyBoost for multiple speaker pairing",
            "USB-C charging"
        ],
        specifications: {
            type: "Bluetooth Speaker",
            connectivity: "Bluetooth 5.1",
            batteryLife: "20 hours",
            weight: "960g",
            color: "Black"
        },
        image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw9a0d9c61/JBL_Charge_5_Product%20Image_Hero_Black.png?sw=535&sh=535"
    },
    {
        id: "bs002",
        name: "Sony SRS-XB43",
        type: "bluetooth_speakers",
        brand: "Sony",
        price: 3499.99,
        originalPrice: 3999.99,
        description: "Extra Bass Bluetooth speaker with multi-colored line lights and sound effects.",
        features: [
            "EXTRA BASS sound",
            "IP67 waterproof, rustproof, and dustproof",
            "24 hours of battery life",
            "Multi-colored line lights and speaker lights",
            "Party Connect for up to 100 speakers"
        ],
        specifications: {
            type: "Bluetooth Speaker",
            connectivity: "Bluetooth 5.0, NFC",
            batteryLife: "24 hours",
            weight: "2.95kg",
            color: "Blue"
        },
        image: "https://www.sony.co.za/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660"
    },
    {
        id: "bs003",
        name: "Bose SoundLink Flex",
        type: "bluetooth_speakers",
        brand: "Bose",
        price: 2799.99,
        originalPrice: 3299.99,
        description: "Portable Bluetooth speaker with PositionIQ technology for optimal sound in any position.",
        features: [
            "PositionIQ technology",
            "IP67 waterproof and dustproof",
            "12 hours of battery life",
            "Built-in microphone for calls",
            "Silicone body with powder coating"
        ],
        specifications: {
            type: "Bluetooth Speaker",
            connectivity: "Bluetooth 5.1",
            batteryLife: "12 hours",
            weight: "590g",
            color: "Stone Blue"
        },
        image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_flex/product_silo_images/SLF_0320_Stone_Blue_EC_02.png/jcr:content/renditions/cq5dam.web.1280.1280.png"
    },
    {
        id: "bs004",
        name: "Ultimate Ears WONDERBOOM 3",
        type: "bluetooth_speakers",
        brand: "Ultimate Ears",
        price: 1999.99,
        originalPrice: 2299.99,
        description: "Compact, floating Bluetooth speaker with 360-degree sound and outdoor boost.",
        features: [
            "360-degree sound",
            "IP67 waterproof and dustproof",
            "Floats in water",
            "14 hours of battery life",
            "Outdoor Boost mode"
        ],
        specifications: {
            type: "Bluetooth Speaker",
            connectivity: "Bluetooth",
            batteryLife: "14 hours",
            weight: "420g",
            color: "Joyous Bright"
        },
        image: "https://resource.logitech.com/w_800,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/ultimate-ears/products/speakers/wonderboom-3/gallery/wonderboom-3-gallery-joyous-bright-hero.png?v=1"
    },
    {
        id: "bs005",
        name: "Anker Soundcore Motion+",
        type: "bluetooth_speakers",
        brand: "Anker",
        price: 1799.99,
        originalPrice: 1999.99,
        description: "Hi-Res certified Bluetooth speaker with BassUp technology and customizable EQ.",
        features: [
            "Hi-Res Audio certification",
            "BassUp technology",
            "30W audio output",
            "IPX7 waterproof",
            "12 hours of playtime"
        ],
        specifications: {
            type: "Bluetooth Speaker",
            connectivity: "Bluetooth 5.0",
            batteryLife: "12 hours",
            weight: "1050g",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },

    // Party Speakers
    {
        id: "ps001",
        name: "JBL PartyBox 310",
        type: "party_speakers",
        brand: "JBL",
        price: 8999.99,
        originalPrice: 9999.99,
        description: "Powerful portable party speaker with dynamic light show and karaoke features.",
        features: [
            "240W output power",
            "Dynamic light show synced to the beat",
            "Karaoke features with mic and guitar inputs",
            "IPX4 splash proof",
            "18 hours of playtime"
        ],
        specifications: {
            type: "Party Speaker",
            connectivity: "Bluetooth, USB, AUX",
            batteryLife: "18 hours",
            weight: "15.84kg",
            color: "Black"
        },
        image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5b9611ce/JBL_PartyBox_310_Hero_0033_x1.png?sw=535&sh=535"
    },
    {
        id: "ps002",
        name: "Sony MHC-V73D",
        type: "party_speakers",
        brand: "Sony",
        price: 12999.99,
        originalPrice: 14999.99,
        description: "High-power party speaker system with 360-degree sound and lighting effects.",
        features: [
            "High-efficiency tweeter and midrange",
            "Omnidirectional sound and party lights",
            "Karaoke and guitar input",
            "Gesture control",
            "BLUETOOTH® technology"
        ],
        specifications: {
            type: "Party Speaker",
            connectivity: "Bluetooth, USB, HDMI, Audio In",
            power: "AC power",
            weight: "21.9kg",
            color: "Black"
        },
        image: "https://www.sony.co.za/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660"
    },
    {
        id: "ps003",
        name: "LG XBOOM RN7",
        type: "party_speakers",
        brand: "LG",
        price: 6999.99,
        originalPrice: 7999.99,
        description: "Powerful party speaker with DJ effects, karaoke features, and multi-color lighting.",
        features: [
            "Powerful 250W output",
            "Multi-color lighting effects",
            "DJ effects and voice effects",
            "Karaoke Star",
            "18 hours of battery life"
        ],
        specifications: {
            type: "Party Speaker",
            connectivity: "Bluetooth, USB, AUX",
            batteryLife: "18 hours",
            weight: "12.1kg",
            color: "Black"
        },
        image: "https://www.lg.com/za/images/speakers-sound-systems/md07529605/gallery/RN7-D-01.jpg"
    },
    {
        id: "ps004",
        name: "Philips TANX200",
        type: "party_speakers",
        brand: "Philips",
        price: 3499.99,
        originalPrice: 3999.99,
        description: "Compact party speaker with bass boost and dynamic lighting effects.",
        features: [
            "Bass boost button",
            "Dynamic lights",
            "14 hours playtime",
            "Bluetooth streaming",
            "Audio-in for easy connection"
        ],
        specifications: {
            type: "Party Speaker",
            connectivity: "Bluetooth, Audio-in",
            batteryLife: "14 hours",
            weight: "3.25kg",
            color: "Black"
        },
        image: "https://images.philips.com/is/image/PhilipsConsumer/TANX200_77-IMS-en_ZA?wid=840&hei=720&$jpglarge$"
    },
    {
        id: "ps005",
        name: "Anker Soundcore Trance",
        type: "party_speakers",
        brand: "Anker",
        price: 2999.99,
        originalPrice: 3499.99,
        description: "Portable Bluetooth party speaker with BassUp technology and light show.",
        features: [
            "BassUp technology",
            "Light show synced to the beat",
            "IPX7 waterproof",
            "18 hours of playtime",
            "PartyCast technology"
        ],
        specifications: {
            type: "Party Speaker",
            connectivity: "Bluetooth 5.0",
            batteryLife: "18 hours",
            weight: "5.9kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71Qpz2B6kQL._AC_SL1500_.jpg"
    }
];

/**
 * Display portable speakers products based on type filter
 * @param {string} type - The product type to filter by (bluetooth_speakers, party_speakers, usb_speakers, radios, or null for all)
 * @param {number} page - The current page number
 * @param {string} sortBy - The sorting criteria
 */
function displayPortableSpeakersProducts(type = null, page = 1, sortBy = "relevance") {
    // Get the products grid element
    const productsGrid = document.getElementById("products-grid");
    
    // Clear the grid
    productsGrid.innerHTML = "";
    
    // Filter products by type if specified
    let filteredProducts = portableSpeakersProducts;
    if (type) {
        filteredProducts = portableSpeakersProducts.filter(product => product.type === type);
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
        <a href="portable-speakers-product.html?id=${product.id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    <span>${product.specifications ? (product.specifications.type || '') : ''}</span>
                    <span>${product.specifications ? (product.specifications.connectivity || '') : ''}</span>
                    <span>${product.specifications ? (product.specifications.batteryLife || '') : ''}</span>
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
    
    // Add event listener for compare button
    const compareButton = card.querySelector('.compare-button');
    compareButton.addEventListener('click', function () {
        window.location.href = `portable-speakers-info.html?id=${product.id}`;
    });
    
    // Add event listener for wishlist button
    const wishlistButton = card.querySelector('.wishlist-button');
    wishlistButton.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Only call wishlist.js functions if loaded
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
                    url: `portable-speakers-info.html?id=${product.id}`
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
    
    // Add event listener for price alert bell
    const priceAlertBell = card.querySelector('.price-alert-bell');
    if (priceAlertBell && typeof togglePriceAlert === 'function') {
        priceAlertBell.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productName = product.name;
            const productPrice = product.price;
            const productImage = product.image;
            
            togglePriceAlert(product.id, productPrice, productName, productImage);
        });
    }
    
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
            displayPortableSpeakersProducts(type, currentPage - 1, sortBy);
        }
    };
    
    // Next button
    const nextButton = paginationElement.querySelector('[data-page="next"]');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            displayPortableSpeakersProducts(type, currentPage + 1, sortBy);
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
        firstPageBtn.onclick = () => displayPortableSpeakersProducts(type, 1, sortBy);
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
        pageBtn.onclick = () => displayPortableSpeakersProducts(type, i, sortBy);
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
        lastPageBtn.onclick = () => displayPortableSpeakersProducts(type, totalPages, sortBy);
        pagesContainer.appendChild(lastPageBtn);
    }
}

/**
 * Navigate to portable speakers page with type filter
 * @param {string} type - The product type (bluetooth_speakers, party_speakers)
 */
function navigateToPortableSpeakersByType(type) {
    // Close the sidebar
    closeSidebar();
    
    // Navigate to portable-speakers page with type parameter
    window.location.href = `portable-speakers.html?type=${type}`;
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
        displayPortableSpeakersProducts(typeParam, 1, this.value);
    });
    
    // Display products
    displayPortableSpeakersProducts(typeParam, 1, "relevance");
    
    // Update page title based on type
    if (typeParam) {
        const pageTitle = document.querySelector(".section-title");
        if (pageTitle) {
            let titleText = "Portable Speakers";
            
            switch (typeParam) {
                case "bluetooth_speakers":
                    titleText = "Bluetooth Speakers";
                    break;
                case "party_speakers":
                    titleText = "Party Speakers";
                    break;
            }
            
            pageTitle.textContent = titleText;
        }
    }
    
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
    let filteredProducts = [...portableSpeakersProducts];
    
    // If type filter is applied from URL, apply it first
    if (typeParam) {
        filteredProducts = filteredProducts.filter(product => product.type === typeParam);
    }
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productBrand = product.brand?.toLowerCase() || '';
            return selectedBrands.some(brand => productBrand.includes(brand));
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
                const [min, max] = range.split('-').map(Number);
                if (max) {
                    return productPrice >= min && productPrice <= max;
                } else {
                    // For "5000+" price range
                    return productPrice >= min;
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
    displayPortableSpeakersProducts(typeParam, 1, "relevance");
    
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

// Make the function available globally
window.navigateToPortableSpeakersByType = navigateToPortableSpeakersByType;