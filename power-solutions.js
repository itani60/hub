/**
 * Power Solutions Products Data and Display Functions
 * This file contains mock data for power solutions products
 * and functions to display, filter, and sort them.
 */

// Mock data for power solutions products
const powerSolutionsProducts = [
    // UPS (Uninterruptible Power Supply)
    {
        id: "ups001",
        name: "APC Back-UPS Pro 1500VA",
        type: "ups",
        brand: "APC",
        price: 3999.99,
        originalPrice: 4499.99,
        description: "Battery backup and surge protector for computers and electronics.",
        features: [
            "1500VA/900W power capacity",
            "Automatic Voltage Regulation (AVR)",
            "LCD display",
            "USB connectivity",
            "Energy-saving outlets"
        ],
        specifications: {
            type: "Line-Interactive UPS",
            capacity: "1500VA/900W",
            runtime: "90 minutes at 50W",
            outlets: "10 outlets (5 battery backup)",
            weight: "11.9kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ups002",
        name: "Eaton 5P 1550VA",
        type: "ups",
        brand: "Eaton",
        price: 4999.99,
        originalPrice: 5499.99,
        description: "Tower UPS with LCD display and advanced power management features.",
        features: [
            "1550VA/1100W power capacity",
            "Line-interactive topology",
            "LCD display",
            "Energy Star qualified",
            "Advanced battery management"
        ],
        specifications: {
            type: "Line-Interactive UPS",
            capacity: "1550VA/1100W",
            runtime: "98 minutes at half load",
            outlets: "8 outlets",
            weight: "12.8kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ups003",
        name: "CyberPower CP1500PFCLCD",
        type: "ups",
        brand: "CyberPower",
        price: 3499.99,
        originalPrice: 3999.99,
        description: "PFC compatible UPS with pure sine wave output and LCD display.",
        features: [
            "1500VA/900W power capacity",
            "Pure sine wave output",
            "LCD display with rotating function",
            "PowerPanel Personal Edition software",
            "Energy-saving GreenPower UPS design"
        ],
        specifications: {
            type: "Line-Interactive UPS",
            capacity: "1500VA/900W",
            runtime: "2.5 minutes at full load",
            outlets: "12 outlets (6 battery backup)",
            weight: "11.6kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ups004",
        name: "Vertiv Liebert PSI 1500VA",
        type: "ups",
        brand: "Vertiv",
        price: 4299.99,
        originalPrice: 4799.99,
        description: "Rack/tower convertible UPS with pure sine wave output for IT equipment.",
        features: [
            "1500VA/1350W power capacity",
            "Pure sine wave output",
            "Rack/tower convertible design",
            "Hot-swappable batteries",
            "Intelligent battery management"
        ],
        specifications: {
            type: "Line-Interactive UPS",
            capacity: "1500VA/1350W",
            runtime: "5.5 minutes at full load",
            outlets: "6 outlets",
            weight: "18.2kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ups005",
        name: "Tripp Lite SMART1500LCD",
        type: "ups",
        brand: "Tripp Lite",
        price: 2999.99,
        originalPrice: 3299.99,
        description: "Smart UPS with LCD display and automatic voltage regulation.",
        features: [
            "1500VA/900W power capacity",
            "Automatic Voltage Regulation (AVR)",
            "LCD display",
            "USB port and serial port",
            "Tel/DSL/Ethernet surge protection"
        ],
        specifications: {
            type: "Line-Interactive UPS",
            capacity: "1500VA/900W",
            runtime: "90 minutes at 10% load",
            outlets: "10 outlets (5 battery backup)",
            weight: "12.2kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },

    // Power Stations
    {
        id: "ps001",
        name: "Jackery Explorer 1000",
        type: "power_stations",
        brand: "Jackery",
        price: 14999.99,
        originalPrice: 16999.99,
        description: "Portable power station with 1002Wh capacity and multiple output options.",
        features: [
            "1002Wh (1000W) capacity",
            "3 AC outlets",
            "2 USB-C ports",
            "2 USB-A ports",
            "Car outlet"
        ],
        specifications: {
            type: "Portable Power Station",
            capacity: "1002Wh",
            output: "1000W (2000W surge)",
            recharge: "7 hours via AC",
            weight: "10kg",
            color: "Orange/Gray"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ps002",
        name: "EcoFlow DELTA 1300",
        type: "power_stations",
        brand: "EcoFlow",
        price: 19999.99,
        originalPrice: 21999.99,
        description: "High-capacity power station with fast charging and high output power.",
        features: [
            "1260Wh capacity",
            "6 AC outlets",
            "2 USB-C ports",
            "4 USB-A ports",
            "X-Stream fast charging"
        ],
        specifications: {
            type: "Portable Power Station",
            capacity: "1260Wh",
            output: "1800W (3300W surge)",
            recharge: "1.6 hours via AC",
            weight: "14kg",
            color: "Gray"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ps003",
        name: "Goal Zero Yeti 1500X",
        type: "power_stations",
        brand: "Goal Zero",
        price: 24999.99,
        originalPrice: 26999.99,
        description: "Versatile power station with expandable capacity and app control.",
        features: [
            "1516Wh capacity",
            "2 AC outlets",
            "2 USB-C ports",
            "2 USB-A ports",
            "Expandable with additional batteries"
        ],
        specifications: {
            type: "Portable Power Station",
            capacity: "1516Wh",
            output: "2000W (3500W surge)",
            recharge: "14 hours via AC",
            weight: "20.7kg",
            color: "Gray"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ps004",
        name: "Bluetti AC200P",
        type: "power_stations",
        brand: "Bluetti",
        price: 22999.99,
        originalPrice: 24999.99,
        description: "High-capacity power station with LiFePO4 battery and touchscreen display.",
        features: [
            "2000Wh capacity",
            "6 AC outlets",
            "1 PD USB-C port",
            "4 USB-A ports",
            "Touchscreen display"
        ],
        specifications: {
            type: "Portable Power Station",
            capacity: "2000Wh",
            output: "2000W (4800W surge)",
            recharge: "5.5 hours via AC",
            weight: "27.5kg",
            color: "Blue/Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ps005",
        name: "Anker PowerHouse II 800",
        type: "power_stations",
        brand: "Anker",
        price: 11999.99,
        originalPrice: 12999.99,
        description: "Compact power station with high capacity and multiple output options.",
        features: [
            "777Wh capacity",
            "3 AC outlets",
            "1 USB-C port",
            "4 USB-A ports",
            "LED light"
        ],
        specifications: {
            type: "Portable Power Station",
            capacity: "777Wh",
            output: "500W (1000W surge)",
            recharge: "5.5 hours via AC",
            weight: "8.3kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },

    // Inverters
    {
        id: "inv001",
        name: "Victron Phoenix 1200VA",
        type: "inverters",
        brand: "Victron",
        price: 8999.99,
        originalPrice: 9999.99,
        description: "Pure sine wave inverter with high surge capacity and reliable performance.",
        features: [
            "1200VA continuous power",
            "Pure sine wave output",
            "High surge capacity",
            "Configurable ECO mode",
            "Remote on/off capability"
        ],
        specifications: {
            type: "Pure Sine Wave Inverter",
            capacity: "1200VA/1000W",
            input: "12V DC",
            output: "230V AC",
            weight: "10kg",
            color: "Blue"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "inv002",
        name: "AIMS Power 3000W",
        type: "inverters",
        brand: "AIMS Power",
        price: 12999.99,
        originalPrice: 13999.99,
        description: "Heavy-duty pure sine wave inverter for off-grid and backup power applications.",
        features: [
            "3000W continuous power",
            "Pure sine wave output",
            "LED display",
            "Multiple protection features",
            "Remote control included"
        ],
        specifications: {
            type: "Pure Sine Wave Inverter",
            capacity: "3000W (9000W surge)",
            input: "24V DC",
            output: "230V AC",
            weight: "15.4kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "inv003",
        name: "Renogy 2000W",
        type: "inverters",
        brand: "Renogy",
        price: 9999.99,
        originalPrice: 10999.99,
        description: "Pure sine wave inverter with LCD display and multiple protection features.",
        features: [
            "2000W continuous power",
            "Pure sine wave output",
            "LCD display",
            "5 protection features",
            "Cooling fan"
        ],
        specifications: {
            type: "Pure Sine Wave Inverter",
            capacity: "2000W (4000W surge)",
            input: "12V DC",
            output: "230V AC",
            weight: "8.6kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "inv004",
        name: "Go Power! GP-SW3000",
        type: "inverters",
        brand: "Go Power!",
        price: 13999.99,
        originalPrice: 14999.99,
        description: "Industrial-grade pure sine wave inverter for RVs and off-grid applications.",
        features: [
            "3000W continuous power",
            "Pure sine wave output",
            "ETL listed to UL458",
            "Remote control included",
            "Automatic transfer switch compatible"
        ],
        specifications: {
            type: "Pure Sine Wave Inverter",
            capacity: "3000W (6000W surge)",
            input: "12V DC",
            output: "230V AC",
            weight: "13.6kg",
            color: "Silver"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "inv005",
        name: "Samlex PST-1500",
        type: "inverters",
        brand: "Samlex",
        price: 7999.99,
        originalPrice: 8499.99,
        description: "Pure sine wave inverter with high reliability for sensitive electronics.",
        features: [
            "1500W continuous power",
            "Pure sine wave output",
            "Advanced microprocessor control",
            "Multiple protection features",
            "Thermally controlled cooling fan"
        ],
        specifications: {
            type: "Pure Sine Wave Inverter",
            capacity: "1500W (3000W surge)",
            input: "12V DC",
            output: "230V AC",
            weight: "7.7kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    }
];

/**
 * Display power solutions products based on type filter
 * @param {string} type - The product type to filter by (ups, power_stations, inverters, or null for all)
 * @param {number} page - The current page number
 * @param {string} sortBy - The sorting criteria
 */
function displayPowerSolutionsProducts(type = null, page = 1, sortBy = "relevance") {
    // Get the products grid element
    const productsGrid = document.getElementById("products-grid");
    
    // Clear the grid
    productsGrid.innerHTML = "";
    
    // Filter products by type if specified
    let filteredProducts = powerSolutionsProducts;
    if (type) {
        filteredProducts = powerSolutionsProducts.filter(product => product.type === type);
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
        <a href="power-solutions-product.html?id=${product.id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    <span>${product.specifications ? (product.specifications.type || '') : ''}</span>
                    <span>${product.specifications ? (product.specifications.capacity || '') : ''}</span>
                    <span>${product.specifications ? (product.specifications.output || '') : ''}</span>
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
        window.location.href = `power-solutions-info.html?id=${product.id}`;
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
                    url: `power-solutions-info.html?id=${product.id}`
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
            displayPowerSolutionsProducts(type, currentPage - 1, sortBy);
        }
    };
    
    // Next button
    const nextButton = paginationElement.querySelector('[data-page="next"]');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            displayPowerSolutionsProducts(type, currentPage + 1, sortBy);
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
        firstPageBtn.onclick = () => displayPowerSolutionsProducts(type, 1, sortBy);
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
        pageBtn.onclick = () => displayPowerSolutionsProducts(type, i, sortBy);
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
        lastPageBtn.onclick = () => displayPowerSolutionsProducts(type, totalPages, sortBy);
        pagesContainer.appendChild(lastPageBtn);
    }
}

/**
 * Navigate to power solutions page with type filter
 * @param {string} type - The product type (ups, power_stations, inverters)
 */
function navigateToPowerSolutionsByType(type) {
    // Close the sidebar
    closeSidebar();
    
    // Navigate to power-solutions page with type parameter
    window.location.href = `power-solutions.html?type=${type}`;
}

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
    let filteredProducts = [...powerSolutionsProducts];
    
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
    displayPowerSolutionsProducts(typeParam, 1, "relevance");
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Hide clear all button
    document.getElementById('clear-filters').style.display = 'none';
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize price alert functionality
    if (typeof initializePriceAlerts === 'function') {
        setTimeout(initializePriceAlerts, 1000); // Add a larger delay to ensure products are fully loaded
    }
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get("type");
    
    // Set up sort dropdown
    const sortBySelect = document.getElementById("sort-by");
    sortBySelect.addEventListener("change", function() {
        displayPowerSolutionsProducts(typeParam, 1, this.value);
    });
    
    // Display products
    displayPowerSolutionsProducts(typeParam, 1, "relevance");
    
    // Update page title based on type
    if (typeParam) {
        const pageTitle = document.querySelector(".section-title");
        if (pageTitle) {
            let titleText = "Power Solutions";
            
            switch (typeParam) {
                case "ups":
                    titleText = "UPS";
                    break;
                case "power_stations":
                    titleText = "Power Stations";
                    break;
                case "inverters":
                    titleText = "Inverters";
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
window.navigateToPowerSolutionsByType = navigateToPowerSolutionsByType;
window.toggleFilterPanel = toggleFilterPanel;
window.closeAllFilterPanels = closeAllFilterPanels;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;