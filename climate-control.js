/**
 * Climate Control Products Data and Display Functions
 * This file contains mock data for climate control products
 * and functions to display, filter, and sort them.
 */

// Mock data for climate control products
const climateControlProducts = [
    // Fans
    {
        id: "f001",
        name: "Dyson Pure Cool",
        type: "fans",
        brand: "Dyson",
        price: 7999.99,
        originalPrice: 8999.99,
        description: "Purifying tower fan with HEPA filter and air multiplier technology.",
        features: [
            "HEPA filter captures 99.97% of particles",
            "Air Multiplier technology",
            "Oscillation up to 350°",
            "10 airflow settings",
            "Sleep timer"
        ],
        specifications: {
            type: "Tower Fan",
            power: "40W",
            noise: "62dB",
            weight: "4.9kg",
            color: "White/Silver"
        },
        image: "https://www.dyson.co.za/medialibrary/Group/Shared/Feature%20Modules/Dyson%20Pure%20Cool%20TP04%20White%20Silver%20Hero.ashx"
    },
    {
        id: "f002",
        name: "Vornado 660",
        type: "fans",
        brand: "Vornado",
        price: 2499.99,
        originalPrice: 2999.99,
        description: "Whole room air circulator with Vortex technology for powerful airflow.",
        features: [
            "Vortex air circulation",
            "4 speed settings",
            "Deep-pitched blades",
            "Adjustable height",
            "5-year warranty"
        ],
        specifications: {
            type: "Air Circulator",
            power: "100W",
            noise: "54-67dB",
            weight: "3.6kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f003",
        name: "Honeywell TurboForce",
        type: "fans",
        brand: "Honeywell",
        price: 899.99,
        originalPrice: 1099.99,
        description: "Compact desk fan with powerful airflow and 90° pivoting head.",
        features: [
            "TurboForce power",
            "3 speed settings",
            "90° pivoting head",
            "Aerodynamic turbo design",
            "Removable grill for easy cleaning"
        ],
        specifications: {
            type: "Desk Fan",
            power: "40W",
            noise: "50dB",
            weight: "1.8kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f004",
        name: "Goldair 40cm Pedestal Fan",
        type: "fans",
        brand: "Goldair",
        price: 699.99,
        originalPrice: 899.99,
        description: "Adjustable height pedestal fan with 3 speed settings and oscillation function.",
        features: [
            "3 speed settings",
            "Oscillation function",
            "Adjustable height",
            "Tilt adjustment",
            "Safety grill"
        ],
        specifications: {
            type: "Pedestal Fan",
            power: "50W",
            noise: "55dB",
            weight: "3.2kg",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f005",
        name: "Orion Tower Fan",
        type: "fans",
        brand: "Orion",
        price: 1299.99,
        originalPrice: 1499.99,
        description: "Slim tower fan with remote control and 3 speed settings.",
        features: [
            "3 speed settings",
            "Remote control",
            "Timer function",
            "Oscillation",
            "LED display"
        ],
        specifications: {
            type: "Tower Fan",
            power: "45W",
            noise: "48dB",
            weight: "3.8kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f006",
        name: "Pineware 40cm Box Fan",
        type: "fans",
        brand: "Pineware",
        price: 599.99,
        originalPrice: 699.99,
        description: "High-velocity box fan with 3 speed settings and carry handle.",
        features: [
            "3 speed settings",
            "High air flow",
            "Carry handle",
            "Sturdy construction",
            "Easy to clean"
        ],
        specifications: {
            type: "Box Fan",
            power: "60W",
            noise: "60dB",
            weight: "3.5kg",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f007",
        name: "Alva 30cm Desk Fan",
        type: "fans",
        brand: "Alva",
        price: 399.99,
        originalPrice: 499.99,
        description: "Compact desk fan with 3 speed settings and tilt adjustment.",
        features: [
            "3 speed settings",
            "Tilt adjustment",
            "Compact design",
            "Stable base",
            "Safety grill"
        ],
        specifications: {
            type: "Desk Fan",
            power: "35W",
            noise: "50dB",
            weight: "1.5kg",
            color: "Silver"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f008",
        name: "Philips Air Circulator",
        type: "fans",
        brand: "Philips",
        price: 1899.99,
        originalPrice: 2199.99,
        description: "Powerful air circulator with 5 speed settings and 120° oscillation.",
        features: [
            "5 speed settings",
            "120° oscillation",
            "Timer function",
            "Remote control",
            "Energy efficient"
        ],
        specifications: {
            type: "Air Circulator",
            power: "40W",
            noise: "45dB",
            weight: "2.8kg",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f009",
        name: "Russell Hobbs Pedestal Fan",
        type: "fans",
        brand: "Russell Hobbs",
        price: 899.99,
        originalPrice: 1099.99,
        description: "Elegant pedestal fan with remote control and 3 speed settings.",
        features: [
            "3 speed settings",
            "Remote control",
            "Timer function",
            "Oscillation",
            "Adjustable height"
        ],
        specifications: {
            type: "Pedestal Fan",
            power: "55W",
            noise: "52dB",
            weight: "3.4kg",
            color: "Grey"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f010",
        name: "Salton Tower Fan",
        type: "fans",
        brand: "Salton",
        price: 1199.99,
        originalPrice: 1399.99,
        description: "Slim tower fan with 3 speed settings and remote control.",
        features: [
            "3 speed settings",
            "Remote control",
            "Timer function",
            "Oscillation",
            "Compact design"
        ],
        specifications: {
            type: "Tower Fan",
            power: "45W",
            noise: "50dB",
            weight: "3.6kg",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f011",
        name: "Xiaomi Mi Smart Standing Fan",
        type: "fans",
        brand: "Xiaomi",
        price: 1599.99,
        originalPrice: 1899.99,
        description: "Smart standing fan with app control and 100 speed settings.",
        features: [
            "App control",
            "100 speed settings",
            "Natural wind simulation",
            "Timer function",
            "Voice control compatible"
        ],
        specifications: {
            type: "Smart Fan",
            power: "38W",
            noise: "42dB",
            weight: "3.0kg",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f012",
        name: "Kenwood 40cm Pedestal Fan",
        type: "fans",
        brand: "Kenwood",
        price: 799.99,
        originalPrice: 999.99,
        description: "Adjustable pedestal fan with 3 speed settings and wide oscillation.",
        features: [
            "3 speed settings",
            "Wide oscillation",
            "Adjustable height",
            "Tilt adjustment",
            "Stable base"
        ],
        specifications: {
            type: "Pedestal Fan",
            power: "50W",
            noise: "55dB",
            weight: "3.3kg",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "f013",
        name: "Swan Retro Desk Fan",
        type: "fans",
        brand: "Swan",
        price: 899.99,
        originalPrice: 1099.99,
        description: "Stylish retro desk fan with 3 speed settings and oscillation function.",
        features: [
            "3 speed settings",
            "Oscillation function",
            "Retro design",
            "Tilt adjustment",
            "Sturdy construction"
        ],
        specifications: {
            type: "Desk Fan",
            power: "45W",
            noise: "52dB",
            weight: "2.5kg",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },

    // Air Conditioners
    {
        id: "ac001",
        name: "LG Dual Inverter",
        type: "air_conditioners",
        brand: "LG",
        price: 12999.99,
        originalPrice: 14999.99,
        description: "Energy-efficient split air conditioner with dual inverter compressor.",
        features: [
            "Dual Inverter Compressor",
            "Energy saving up to 70%",
            "10-year warranty on compressor",
            "Low noise operation",
            "Smart ThinQ technology"
        ],
        specifications: {
            type: "Split Air Conditioner",
            capacity: "12,000 BTU",
            power: "1100W",
            coverage: "20-25 sq.m",
            color: "White"
        },
        image: "https://www.lg.com/za/images/air-conditioners/md07529605/gallery/medium01.jpg"
    },
    {
        id: "ac002",
        name: "Samsung WindFree",
        type: "air_conditioners",
        brand: "Samsung",
        price: 15999.99,
        originalPrice: 17999.99,
        description: "Premium air conditioner with WindFree cooling technology and AI Auto Comfort.",
        features: [
            "WindFree Cooling",
            "AI Auto Comfort",
            "Triple Inverter Technology",
            "R32 refrigerant",
            "SmartThings compatible"
        ],
        specifications: {
            type: "Split Air Conditioner",
            capacity: "18,000 BTU",
            power: "1650W",
            coverage: "30-35 sq.m",
            color: "White"
        },
        image: "https://images.samsung.com/is/image/samsung/p6pim/za/ar18tshgawk-za/gallery/za-wind-free-ar9500t-ar18tshgawk-za-531557093"
    },
    {
        id: "ac003",
        name: "Midea Portable",
        type: "air_conditioners",
        brand: "Midea",
        price: 6999.99,
        originalPrice: 7999.99,
        description: "Portable air conditioner with dehumidifier and remote control.",
        features: [
            "3-in-1: Cooling, Fan, Dehumidifier",
            "Easy-roll casters",
            "24-hour timer",
            "Sleep mode",
            "Remote control included"
        ],
        specifications: {
            type: "Portable Air Conditioner",
            capacity: "10,000 BTU",
            power: "1150W",
            coverage: "15-20 sq.m",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ac004",
        name: "Daikin FTXM",
        type: "air_conditioners",
        brand: "Daikin",
        price: 18999.99,
        originalPrice: 20999.99,
        description: "High-end inverter air conditioner with 3D airflow and intelligent eye sensor.",
        features: [
            "Inverter technology",
            "3D airflow",
            "Intelligent eye sensor",
            "Titanium apatite deodorizing filter",
            "Online controller (optional)"
        ],
        specifications: {
            type: "Split Air Conditioner",
            capacity: "24,000 BTU",
            power: "2000W",
            coverage: "40-45 sq.m",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ac005",
        name: "Hisense Window AC",
        type: "air_conditioners",
        brand: "Hisense",
        price: 4999.99,
        originalPrice: 5499.99,
        description: "Window-mounted air conditioner with remote control and energy-saving mode.",
        features: [
            "3 cooling speeds",
            "3 fan speeds",
            "Energy-saving mode",
            "Sleep mode",
            "24-hour timer"
        ],
        specifications: {
            type: "Window Air Conditioner",
            capacity: "8,000 BTU",
            power: "800W",
            coverage: "10-15 sq.m",
            color: "White"
        },
        image: "https://hisense.co.za/wp-content/uploads/2022/11/Hisense-Window-AC-1.jpg"
    },

    // Air Coolers
    {
        id: "acl001",
        name: "Symphony Diet 12T",
        type: "air_coolers",
        brand: "Symphony",
        price: 2999.99,
        originalPrice: 3499.99,
        description: "Portable air cooler with honeycomb cooling pads and i-Pure technology.",
        features: [
            "Honeycomb cooling pads",
            "i-Pure technology",
            "Powerful air throw",
            "Low power consumption",
            "Mosquito repellent"
        ],
        specifications: {
            type: "Portable Air Cooler",
            capacity: "12 liters",
            power: "170W",
            coverage: "16 sq.m",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "acl002",
        name: "Honeywell TC10PEU",
        type: "air_coolers",
        brand: "Honeywell",
        price: 3499.99,
        originalPrice: 3999.99,
        description: "Indoor evaporative air cooler with remote control and ice compartment.",
        features: [
            "Evaporative cooling technology",
            "3 speed settings",
            "Detachable water tank",
            "Ice compartment",
            "Low water alarm"
        ],
        specifications: {
            type: "Evaporative Air Cooler",
            capacity: "10 liters",
            power: "100W",
            coverage: "16 sq.m",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "acl003",
        name: "Bajaj DC 2015",
        type: "air_coolers",
        brand: "Bajaj",
        price: 1999.99,
        originalPrice: 2299.99,
        description: "Desert air cooler with honeycomb cooling media and 4-way air deflection.",
        features: [
            "Honeycomb cooling media",
            "4-way air deflection",
            "3-speed control",
            "Ice chamber",
            "Castor wheels for mobility"
        ],
        specifications: {
            type: "Desert Air Cooler",
            capacity: "20 liters",
            power: "190W",
            coverage: "30 sq.m",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "acl004",
        name: "Crompton Ozone",
        type: "air_coolers",
        brand: "Crompton",
        price: 2499.99,
        originalPrice: 2799.99,
        description: "Desert air cooler with everlast pump and auto-fill function.",
        features: [
            "Everlast pump",
            "Auto-fill function",
            "Honeycomb cooling pads",
            "3-side cooling",
            "Water level indicator"
        ],
        specifications: {
            type: "Desert Air Cooler",
            capacity: "55 liters",
            power: "190W",
            coverage: "50 sq.m",
            color: "White/Blue"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "acl005",
        name: "Orient Electric Smartcool",
        type: "air_coolers",
        brand: "Orient Electric",
        price: 1799.99,
        originalPrice: 1999.99,
        description: "Personal air cooler with dense honeycomb pads and auto-louver movement.",
        features: [
            "Dense honeycomb pads",
            "Auto-louver movement",
            "Dust filter",
            "Ice chamber",
            "Cord winding station"
        ],
        specifications: {
            type: "Personal Air Cooler",
            capacity: "8 liters",
            power: "125W",
            coverage: "10 sq.m",
            color: "White"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    }
];

/**
 * Display climate control products based on type filter
 * @param {string} type - The product type to filter by (fans, air_conditioners, air_coolers, or null for all)
 * @param {number} page - The current page number
 * @param {string} sortBy - The sorting criteria
 */
function displayClimateControlProducts(type = null, page = 1, sortBy = "relevance") {
    // Get the products grid element
    const productsGrid = document.getElementById("products-grid");
    
    // Clear the grid
    productsGrid.innerHTML = "";
    
    // Filter products by type if specified
    let filteredProducts = climateControlProducts;
    if (type) {
        filteredProducts = climateControlProducts.filter(product => product.type === type);
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
        <a href="climate-control-product.html?id=${product.id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    <span>${product.specifications ? (product.specifications.type || '') : ''}</span>
                    <span>${product.specifications ? (product.specifications.capacity || '') : ''}</span>
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
    
    // Add event listener for compare button
    const compareButton = card.querySelector('.compare-button');
    compareButton.addEventListener('click', function () {
        window.location.href = `climate-control-info.html?id=${product.id}`;
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
                    url: `climate-control-info.html?id=${product.id}`
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
    if (priceAlertBell) {
        priceAlertBell.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productId = this.getAttribute('data-product-id');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));
            
            togglePriceAlert(productId, productPrice, product.name, product.image);
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
            displayClimateControlProducts(type, currentPage - 1, sortBy);
        }
    };
    
    // Next button
    const nextButton = paginationElement.querySelector('[data-page="next"]');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            displayClimateControlProducts(type, currentPage + 1, sortBy);
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
        firstPageBtn.onclick = () => displayClimateControlProducts(type, 1, sortBy);
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
        pageBtn.onclick = () => displayClimateControlProducts(type, i, sortBy);
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
        lastPageBtn.onclick = () => displayClimateControlProducts(type, totalPages, sortBy);
        pagesContainer.appendChild(lastPageBtn);
    }
}

/**
 * Navigate to climate control page with type filter
 * @param {string} type - The product type (fans, air_conditioners, air_coolers)
 */
function navigateToClimateControlByType(type) {
    // Close the sidebar
    closeSidebar();
    
    // Navigate to climate-control page with type parameter
    window.location.href = `climate-control.html?type=${type}`;
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
    let filteredProducts = [...climateControlProducts];
    
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
                    // For "20000+" price range
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
    displayClimateControlProducts(typeParam, 1, "relevance");
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Hide clear all button
    document.getElementById('clear-filters').style.display = 'none';
}

/**
 * Display "No Results" message with reset button
 * @param {HTMLElement} container - The container to add the message to
 */
function showNoResultsMessage(container) {
    container.innerHTML = `
        <div class="no-results" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 0;">
            <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
            <p style="font-size: 18px; margin-bottom: 20px; font-weight: bold;">No products match your filters.</p>
            <button class="filter-button clear" onclick="resetFilters()" style="margin-top: 10px;">Reset Filters</button>
        </div>
    `;
    document.getElementById("pagination").style.display = 'none';
}
// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add CSS for price alert modal
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Price Alert Modal Styles */
        .price-alert-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            overflow-y: auto;
        }
        
        .price-alert-modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
        }
        
        .price-alert-container {
            position: relative;
            background-color: #fff;
            margin: 30px auto;
            width: 90%;
            max-width: 500px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transform: translateY(0);
            transition: transform 0.3s ease;
            overflow: hidden;
            animation: modalFadeIn 0.3s ease;
        }
        
        @keyframes modalFadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .price-alert-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px;
            background: linear-gradient(135deg, #ff3a3a 0%, #ff5252 100%);
            color: white;
            position: relative;
        }
        
        .price-alert-title {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            color: white;
        }
        
        .price-alert-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .price-alert-close:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(90deg);
        }
        
        .price-alert-content {
            padding: 25px;
        }
        
        .price-alert-product {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .price-alert-product-image {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            overflow: hidden;
            background: #f9f9f9;
            padding: 5px;
        }
        
        .price-alert-product-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        .price-alert-product-info {
            flex: 1;
        }
        
        .price-alert-product-title {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            margin: 0 0 5px 0;
        }
        
        .price-alert-product-price {
            font-size: 18px;
            font-weight: 700;
            color: #ff3a3a;
        }
        
        .price-alert-form-group {
            margin-bottom: 20px;
        }
        
        .price-alert-form-group label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 500;
            font-size: 15px;
        }
        
        .price-alert-input-container {
            position: relative;
            margin: 20px 0;
        }
        
        .price-alert-currency {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-weight: bold;
            color: #333;
        }
        
        .price-alert-input {
            width: 100%;
            padding: 14px 14px 14px 30px;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-size: 15px;
            transition: all 0.3s ease;
            background-color: #f9f9f9;
        }
        
        .price-alert-input:focus {
            outline: none;
            border-color: #ff3a3a;
            background-color: #fff;
            box-shadow: 0 0 0 3px rgba(255, 58, 58, 0.1);
        }
        
        .price-alert-actions {
            display: flex;
            gap: 15px;
        }
        
        .price-alert-btn {
            flex: 1;
            padding: 14px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }
        
        .price-alert-btn.primary {
            background: linear-gradient(135deg, #ff3a3a 0%, #ff5252 100%);
            color: white;
            border: none;
            box-shadow: 0 4px 15px rgba(255, 58, 58, 0.3);
        }
        
        .price-alert-btn.primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(255, 58, 58, 0.4);
        }
        
        .price-alert-btn.secondary {
            background: white;
            color: #666;
            border: 2px solid #e1e5e9;
        }
        
        .price-alert-btn.secondary:hover {
            background: #f9f9f9;
            border-color: #ccc;
        }
        
        /* Notification styles */
        .notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 350px;
        }
        
        .notification {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            margin-bottom: 10px;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            opacity: 0;
        }
        
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .notification.hiding {
            transform: translateX(120%);
            opacity: 0;
        }
        
        .notification-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            background-color: #f8f9fa;
            border-bottom: 1px solid #eee;
        }
        
        .notification-title {
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .notification-title i {
            font-size: 16px;
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            color: #666;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            transition: background-color 0.2s;
        }
        
        .notification-close:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        
        .notification-body {
            padding: 12px 15px;
        }
        
        .notification-message {
            margin: 0;
            font-size: 14px;
            line-height: 1.5;
            color: #333;
        }
        
        .notification-progress {
            height: 3px;
            background-color: #007bff;
            width: 100%;
            transition: width 0.1s linear;
        }
        
        .notification.success .notification-progress {
            background-color: #28a745;
        }
        
        .notification.error .notification-progress {
            background-color: #dc3545;
        }
        
        .notification.warning .notification-progress {
            background-color: #ffc107;
        }
        
        .notification.info .notification-progress {
            background-color: #17a2b8;
        }
    `;
    document.head.appendChild(styleElement);
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get("type");
    
    
    // Set up sort dropdown
    const sortBySelect = document.getElementById("sort-by");
    sortBySelect.addEventListener("change", function() {
        displayClimateControlProducts(typeParam, 1, this.value);
    });
    
    // Display products
    displayClimateControlProducts(typeParam, 1, "relevance");
    
    // Update page title based on type
    if (typeParam) {
        const pageTitle = document.querySelector(".section-title");
        if (pageTitle) {
            let titleText = "Climate Control";
            
            switch (typeParam) {
                case "fans":
                    titleText = "Fans";
                    break;
                case "air_conditioners":
                    titleText = "Air Conditioners";
                    break;
                case "air_coolers":
                    titleText = "Air Coolers";
                    break;
            }
            
            pageTitle.textContent = titleText;
        }
    }
    
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        const panelId = button.getAttribute('data-panel');
        button.addEventListener('click', () => toggleFilterPanel(panelId));
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
    
    // Initialize filter panels with appropriate options based on product type
    updateFilterPanels(typeParam);
});

/**
 * Update filter panels based on product type
 * @param {string} type - The product type filter
 */
function updateFilterPanels(type) {
    // Update brand panel
    const brandPanel = document.getElementById('brand-panel');
    if (brandPanel) {
        const brandOptions = brandPanel.querySelector('.filter-options');
        if (type === 'fans') {
            // Clear existing options
            brandOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="all" checked> All Brands
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="goldair"> Goldair
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="orion"> Orion
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="pineware"> Pineware
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="alva"> Alva
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="philips"> Philips
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="russell hobbs"> Russell Hobbs
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="salton"> Salton
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="xiaomi"> Xiaomi
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="kenwood"> Kenwood
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="swan"> Swan
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="dyson"> Dyson
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="vornado"> Vornado
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="honeywell"> Honeywell
                </label>
            `;
            
            // Update panel title
            const panelTitle = brandPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'Fan Brands';
            }
        } else if (type === 'air_conditioners') {
            // Clear existing options and add air conditioner brands
            brandOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="all" checked> All Brands
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="lg"> LG
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="samsung"> Samsung
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="midea"> Midea
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="daikin"> Daikin
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="hisense"> Hisense
                </label>
            `;
            
            // Update panel title
            const panelTitle = brandPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'Air Conditioner Brands';
            }
        } else if (type === 'air_coolers') {
            // Clear existing options and add air cooler brands
            brandOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="all" checked> All Brands
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="dyson"> Dyson
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="taurus"> Taurus
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="goldair"> Goldair
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="xiaomi"> Xiaomi
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="meaco"> Meaco
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="symphony"> Symphony
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="honeywell"> Honeywell
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="bajaj"> Bajaj
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="crompton"> Crompton
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="orient electric"> Orient Electric
                </label>
            `;
            
            // Update panel title
            const panelTitle = brandPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'Air Cooler Brands';
            }
        }
    }
    
    // Update color panel
    const colorPanel = document.getElementById('color-panel');
    if (colorPanel) {
        const colorOptions = colorPanel.querySelector('.filter-options');
        colorOptions.innerHTML = `
            <label class="filter-option">
                <input type="checkbox" name="color" value="all" checked> All Colors
            </label>
            <label class="filter-option">
                <input type="checkbox" name="color" value="white"> White
            </label>
            <label class="filter-option">
                <input type="checkbox" name="color" value="black"> Black
            </label>
            <label class="filter-option">
                <input type="checkbox" name="color" value="grey"> Grey
            </label>
            <label class="filter-option">
                <input type="checkbox" name="color" value="silver"> Silver
            </label>
        `;
    }
    
    // Update price panel based on product type
    const pricePanel = document.getElementById('price-panel');
    if (pricePanel) {
        const priceOptions = pricePanel.querySelector('.filter-options');
        if (type === 'air_conditioners') {
            // Price ranges for air conditioners
            priceOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="price" value="0-5000"> Under R5,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="5000-10000"> R5,000 - R10,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="10000-15000"> R10,000 - R15,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="15000-20000"> R15,000 - R20,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="20000+"> Over R20,000
                </label>
            `;
        } else if (type === 'fans') {
            // Price ranges for fans
            priceOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="price" value="0-500"> Under R500
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="500-1000"> R500 - R1,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="1000-1500"> R1,000 - R1,500
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="1500-2000"> R1,500 - R2,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="2000+"> Over R2,000
                </label>
            `;
        } else if (type === 'air_coolers') {
            // Price ranges for air coolers
            priceOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="price" value="0-2000"> Under R2,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="2000-3000"> R2,000 - R3,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="3000-4000"> R3,000 - R4,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="4000+"> Over R4,000
                </label>
            `;
        }
    }
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

function savePriceAlerts(alerts) {
    localStorage.setItem('priceAlerts', JSON.stringify(alerts));
}

function togglePriceAlert(productId, currentPrice, productName, productImage) {
    const alerts = getPriceAlerts();
    const existingAlertIndex = alerts.findIndex(alert => alert.productId === productId);
    
    if (existingAlertIndex >= 0) {
        // Remove existing alert
        alerts.splice(existingAlertIndex, 1);
        showNotification('Price Alert Removed', `Price alert for ${productName} has been removed.`, 'info');
        
        // Update UI
        const bellIcon = document.querySelector(`.price-alert-bell[data-product-id="${productId}"]`);
        if (bellIcon) {
            bellIcon.classList.remove('active');
        }
    } else {
        // Show price alert modal
        showPriceAlertModal(productId, currentPrice, productName, productImage);
    }
    
    savePriceAlerts(alerts);
}

function showPriceAlertModal(productId, currentPrice, productName, productImage) {
    // Check if modal already exists
    let modal = document.getElementById('priceAlertModal');
    if (modal) {
        modal.remove();
    }
    
    // Create modal HTML
    const modalHTML = `
        <div class="price-alert-modal" id="priceAlertModal">
            <div class="price-alert-container">
                <div class="price-alert-header">
                    <h2 class="price-alert-title">Set Price Alert</h2>
                    <button class="price-alert-close" id="priceAlertModalClose">&times;</button>
                </div>
                <div class="price-alert-content">
                    <div class="price-alert-product">
                        <div class="price-alert-product-image">
                            <img src="${productImage}" alt="${productName}">
                        </div>
                        <div class="price-alert-product-info">
                            <h3 class="price-alert-product-title">${productName}</h3>
                            <div class="price-alert-product-price">R${currentPrice.toLocaleString()}</div>
                        </div>
                    </div>
                    
                    <form id="priceAlertForm">
                        <div class="price-alert-form-group">
                            <label for="alertPrice">Alert me when price drops below:</label>
                            <div class="price-alert-input-container">
                                <span class="price-alert-currency">R</span>
                                <input type="number" id="alertPrice" class="price-alert-input" value="${Math.floor(currentPrice * 0.9)}" min="1" max="${currentPrice - 1}">
                            </div>
                        </div>
                        
                        <div class="price-alert-form-group">
                            <label for="alertEmail">Email for notifications (optional):</label>
                            <input type="email" id="alertEmail" class="price-alert-input" placeholder="Enter your email address">
                        </div>
                        
                        <div class="price-alert-actions">
                            <button type="button" class="price-alert-btn secondary" id="cancelPriceAlert">Cancel</button>
                            <button type="button" id="savePriceAlert" class="price-alert-btn primary">Set Alert</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    // Show modal with animation
    setTimeout(() => {
        document.getElementById('priceAlertModal').classList.add('active');
    }, 10);
    
    // Add event listeners
    document.getElementById('priceAlertModalClose').addEventListener('click', () => {
        document.getElementById('priceAlertModal').classList.remove('active');
        setTimeout(() => {
            document.getElementById('priceAlertModal').remove();
        }, 300);
    });
    
    document.getElementById('cancelPriceAlert').addEventListener('click', () => {
        document.getElementById('priceAlertModal').classList.remove('active');
        setTimeout(() => {
            document.getElementById('priceAlertModal').remove();
        }, 300);
    });
    
    document.getElementById('savePriceAlert').addEventListener('click', () => {
        const alertPrice = parseFloat(document.getElementById('alertPrice').value);
        const alertEmail = document.getElementById('alertEmail').value;
        
        if (isNaN(alertPrice) || alertPrice >= currentPrice || alertPrice <= 0) {
            showNotification('Invalid Price', 'Please enter a valid price below the current price.', 'error');
            return;
        }
        
        // Save the alert
        const alerts = getPriceAlerts();
        alerts.push({
            productId,
            productName,
            currentPrice,
            alertPrice,
            email: alertEmail,
            dateCreated: new Date().toISOString()
        });
        savePriceAlerts(alerts);
        
        // Update UI
        const bellIcon = document.querySelector(`.price-alert-bell[data-product-id="${productId}"]`);
        if (bellIcon) {
            bellIcon.classList.add('active');
        }
        
        // Show confirmation
        showNotification('Price Alert Set', `We'll notify you when ${productName} drops below R${alertPrice.toLocaleString()}.`, 'success');
        
        // Close modal with animation
        document.getElementById('priceAlertModal').classList.remove('active');
        setTimeout(() => {
            document.getElementById('priceAlertModal').remove();
        }, 300);
    });
}

// Helper function to show notifications
function showNotification(title, message, type = 'info') {
    // Check if notification container exists
    let container = document.getElementById('notificationContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notificationContainer';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Set icon based on type
    let icon;
    switch(type) {
        case 'success': icon = 'fas fa-check-circle'; break;
        case 'error': icon = 'fas fa-exclamation-circle'; break;
        case 'warning': icon = 'fas fa-exclamation-triangle'; break;
        case 'info': icon = 'fas fa-info-circle'; break;
        default: icon = 'fas fa-bell';
    }
    
    notification.innerHTML = `
        <div class="notification-header">
            <div class="notification-title">
                <i class="${icon}"></i>
                ${title}
            </div>
            <button class="notification-close" onclick="closeNotification(this)">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="notification-body">
            <p class="notification-message">${message}</p>
        </div>
        <div class="notification-progress"></div>
    `;
    
    // Add to container
    container.appendChild(notification);
    
    // Trigger show animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-hide after 5 seconds (except for errors)
    if (type !== 'error') {
        const duration = 5000;
        const progressBar = notification.querySelector('.notification-progress');
        let width = 100;
        const interval = setInterval(() => {
            width -= 100 / (duration / 100);
            progressBar.style.width = width + '%';
            if (width <= 0) {
                clearInterval(interval);
                closeNotification(notification.querySelector('.notification-close'));
            }
        }, 100);
    }
}

// Close notification function
function closeNotification(button) {
    const notification = button.closest('.notification');
    notification.classList.add('hiding');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Make the function available globally
window.navigateToClimateControlByType = navigateToClimateControlByType;
window.closeNotification = closeNotification;