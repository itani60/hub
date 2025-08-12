/**
 * Wearables and Devices Products Data and Display Functions
 * This file contains mock data for wearable technology products
 * and functions to display, filter, and sort them.
 */

// Mock data for wearables and devices products
const wearablesDevicesProducts = [
    // Smartwatches
    {
        id: "sw001",
        name: "Apple Watch Series 8",
        type: "smartwatches",
        brand: "Apple",
        price: 7999.99,
        originalPrice: 8499.99,
        description: "Advanced health features, always-on Retina display, and fitness tracking.",
        features: [
            "ECG app and blood oxygen sensor",
            "Always-On Retina display",
            "Water resistant to 50 meters",
            "GPS and cellular connectivity",
            "Fall detection and emergency SOS"
        ],
        specifications: {
            display: "1.9-inch LTPO OLED",
            processor: "Apple S8",
            storage: "32GB",
            battery: "Up to 18 hours",
            connectivity: "Bluetooth 5.0, Wi-Fi, LTE",
            color: "Midnight"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "sw002",
        name: "Samsung Galaxy Watch 5",
        type: "smartwatches",
        brand: "Samsung",
        price: 5999.99,
        originalPrice: 6499.99,
        description: "Advanced health monitoring with a durable design and long battery life.",
        features: [
            "BioActive Sensor for health monitoring",
            "Sapphire Crystal Glass",
            "Body composition analysis",
            "Advanced sleep coaching",
            "IP68 and 5ATM water resistance"
        ],
        specifications: {
            display: "1.4-inch Super AMOLED",
            processor: "Exynos W920",
            storage: "16GB",
            battery: "Up to 50 hours",
            connectivity: "Bluetooth 5.2, Wi-Fi, LTE",
            color: "Graphite"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "sw003",
        name: "Garmin Fenix 7",
        type: "smartwatches",
        brand: "Garmin",
        price: 12999.99,
        originalPrice: 13999.99,
        description: "Premium multisport GPS watch with advanced training features and rugged design.",
        features: [
            "Multi-band GPS",
            "Real-time stamina tracking",
            "Visual race predictor",
            "TopoActive maps",
            "Up to 28 days battery life"
        ],
        specifications: {
            display: "1.3-inch transflective MIP",
            processor: "Garmin custom",
            storage: "32GB",
            battery: "Up to 28 days (smartwatch mode)",
            connectivity: "Bluetooth, ANT+, Wi-Fi",
            color: "Silver/Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "sw004",
        name: "Fitbit Sense 2",
        type: "smartwatches",
        brand: "Fitbit",
        price: 4999.99,
        originalPrice: 5499.99,
        description: "Advanced health smartwatch with stress management and ECG app.",
        features: [
            "cEDA sensor for stress management",
            "ECG app for heart rhythm assessment",
            "Skin temperature sensor",
            "Built-in GPS",
            "6+ days battery life"
        ],
        specifications: {
            display: "1.58-inch AMOLED",
            processor: "Fitbit custom",
            storage: "4GB",
            battery: "Up to 6 days",
            connectivity: "Bluetooth 5.0, Wi-Fi",
            color: "Graphite/Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "sw005",
        name: "Huawei Watch GT 3 Pro",
        type: "smartwatches",
        brand: "Huawei",
        price: 6499.99,
        originalPrice: 6999.99,
        description: "Premium smartwatch with titanium case and comprehensive health monitoring.",
        features: [
            "Titanium case and sapphire glass",
            "ECG analysis",
            "Arterial stiffness detection",
            "100+ workout modes",
            "14-day battery life"
        ],
        specifications: {
            display: "1.43-inch AMOLED",
            processor: "Huawei custom",
            storage: "4GB",
            battery: "Up to 14 days",
            connectivity: "Bluetooth 5.2, NFC",
            color: "Titanium"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },

    // Fitness Trackers
    {
        id: "ft001",
        name: "Fitbit Charge 5",
        type: "fitness_trackers",
        brand: "Fitbit",
        price: 2999.99,
        originalPrice: 3299.99,
        description: "Advanced fitness tracker with built-in GPS and health metrics.",
        features: [
            "Built-in GPS",
            "EDA sensor for stress management",
            "ECG app",
            "24/7 heart rate monitoring",
            "Sleep tracking with stages"
        ],
        specifications: {
            display: "1.04-inch AMOLED",
            sensors: "3-axis accelerometer, optical heart rate, EDA, ECG",
            battery: "Up to 7 days",
            waterproof: "50m water resistant",
            connectivity: "Bluetooth 5.0",
            color: "Black/Graphite"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ft002",
        name: "Garmin Vivosmart 5",
        type: "fitness_trackers",
        brand: "Garmin",
        price: 2499.99,
        originalPrice: 2799.99,
        description: "Slim fitness tracker with health monitoring and smart notifications.",
        features: [
            "Body Battery energy monitoring",
            "Pulse Ox sensor",
            "Stress tracking",
            "Connected GPS",
            "7-day battery life"
        ],
        specifications: {
            display: "0.41 x 0.73-inch OLED",
            sensors: "Accelerometer, heart rate, Pulse Ox",
            battery: "Up to 7 days",
            waterproof: "5 ATM water resistant",
            connectivity: "Bluetooth Smart",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ft003",
        name: "Samsung Galaxy Fit 2",
        type: "fitness_trackers",
        brand: "Samsung",
        price: 1499.99,
        originalPrice: 1699.99,
        description: "Lightweight fitness band with AMOLED display and long battery life.",
        features: [
            "Auto workout detection",
            "Heart rate monitoring",
            "Sleep analysis",
            "Stress tracking",
            "15-day battery life"
        ],
        specifications: {
            display: "1.1-inch AMOLED",
            sensors: "Accelerometer, gyro, heart rate",
            battery: "Up to 15 days",
            waterproof: "5 ATM water resistant",
            connectivity: "Bluetooth 5.1",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ft004",
        name: "Xiaomi Mi Band 7",
        type: "fitness_trackers",
        brand: "Xiaomi",
        price: 899.99,
        originalPrice: 999.99,
        description: "Affordable fitness tracker with large AMOLED display and comprehensive features.",
        features: [
            "1.62-inch AMOLED display",
            "SpO2 monitoring",
            "120+ sports modes",
            "Sleep tracking",
            "14-day battery life"
        ],
        specifications: {
            display: "1.62-inch AMOLED",
            sensors: "Accelerometer, gyro, heart rate, SpO2",
            battery: "Up to 14 days",
            waterproof: "5 ATM water resistant",
            connectivity: "Bluetooth 5.2",
            color: "Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },
    {
        id: "ft005",
        name: "Huawei Band 7",
        type: "fitness_trackers",
        brand: "Huawei",
        price: 1299.99,
        originalPrice: 1499.99,
        description: "Ultra-thin fitness tracker with large display and comprehensive health monitoring.",
        features: [
            "Ultra-thin 9.99mm design",
            "1.47-inch AMOLED display",
            "TruSeen 4.0 heart rate monitoring",
            "96 workout modes",
            "14-day battery life"
        ],
        specifications: {
            display: "1.47-inch AMOLED",
            sensors: "Accelerometer, gyro, heart rate, SpO2",
            battery: "Up to 14 days",
            waterproof: "5 ATM water resistant",
            connectivity: "Bluetooth 5.0",
            color: "Graphite Black"
        },
        image: "https://m.media-amazon.com/images/I/71K6mVELDML._AC_SL1500_.jpg"
    },

];

/**
 * Display wearables and devices products based on type filter
 * @param {string} type - The product type to filter by (smartwatches, fitness_trackers, vr_headsets, or null for all)
 * @param {number} page - The current page number
 * @param {string} sortBy - The sorting criteria
 */
function displayWearablesDevicesProducts(type = null, page = 1, sortBy = "relevance") {
    // Get the products grid element
    const productsGrid = document.getElementById("products-grid");
    
    // Clear the grid
    productsGrid.innerHTML = "";
    
    // Filter products by type if specified
    let filteredProducts = wearablesDevicesProducts;
    if (type) {
        filteredProducts = wearablesDevicesProducts.filter(product => product.type === type);
    }
    
    // Update page title based on type
    updatePageTitle(type);
    
    // Update the visibility of the "Clear All" button
    updateClearAllButtonVisibility();
    
    // Update filter panels based on type - directly modify the DOM
    if (type === "fitness_trackers") {
        updateFiltersForFitnessTrackers();
    } else if (type === "smartwatches") {
        updateFiltersForSmartwatches();
    } else {
        // Default filters for all wearables
        updateFiltersForAllWearables();
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
    
    // Determine which specifications to show based on product type
    let specLine1 = '';
    let specLine2 = '';
    let specLine3 = '';
    
    if (product.type === 'smartwatches') {
        specLine1 = product.specifications.display || '';
        specLine2 = product.specifications.battery || '';
        specLine3 = product.specifications.connectivity || '';
    } else if (product.type === 'fitness_trackers') {
        specLine1 = product.specifications.display || '';
        specLine2 = product.specifications.battery || '';
        specLine3 = product.specifications.waterproof || '';
    } else if (product.type === 'vr_headsets') {
        specLine1 = product.specifications.display || '';
        specLine2 = product.specifications.refreshRate || '';
        specLine3 = product.specifications.fieldOfView || '';
    }
    
    card.innerHTML = `
        <a href="wearables-devices-product.html?id=${product.id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    <span>${specLine1}</span>
                    <span>${specLine2}</span>
                    <span>${specLine3}</span>
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
        window.location.href = `wearables-devices-info.html?id=${product.id}`;
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
                    url: `wearables-devices-info.html?id=${product.id}`
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
            displayWearablesDevicesProducts(type, currentPage - 1, sortBy);
        }
    };
    
    // Next button
    const nextButton = paginationElement.querySelector('[data-page="next"]');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            displayWearablesDevicesProducts(type, currentPage + 1, sortBy);
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
        firstPageBtn.onclick = () => displayWearablesDevicesProducts(type, 1, sortBy);
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
        pageBtn.onclick = () => displayWearablesDevicesProducts(type, i, sortBy);
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
        lastPageBtn.onclick = () => displayWearablesDevicesProducts(type, totalPages, sortBy);
        pagesContainer.appendChild(lastPageBtn);
    }
}

/**
 * Navigate to wearables and devices page with type filter
 * @param {string} type - The product type (smartwatches, fitness_trackers, vr_headsets)
 */
function navigateToWearablesByType(type) {
    // Close the sidebar
    closeSidebar();
    
    // Navigate to wearables-devices page with type parameter
    window.location.href = `wearables-devices.html?type=${type}`;
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get("type");
    
    // Set up sort dropdown
    const sortBySelect = document.getElementById("sort-by");
    sortBySelect.addEventListener("change", function() {
        displayWearablesDevicesProducts(typeParam, 1, this.value);
    });
    
    // Display products
    displayWearablesDevicesProducts(typeParam, 1, "relevance");
    
    // Update page title based on type
    if (typeParam) {
        const pageTitle = document.querySelector(".section-title");
        if (pageTitle) {
            let titleText = "Wearables & Devices";
            
            switch (typeParam) {
                case "smartwatches":
                    titleText = "Smartwatches";
                    break;
                case "fitness_trackers":
                    titleText = "Fitness Trackers";
                    break;
                case "vr_headsets":
                    titleText = "VR Headsets";
                    break;
            }
            
            pageTitle.textContent = titleText;
        }
    }
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
window.navigateToWearablesByType = navigateToWearablesByType;

// Update filters for fitness trackers
function updateFiltersForFitnessTrackers() {
    // Get the filter panels
    const brandPanel = document.getElementById('brand-panel');
    const processorPanel = document.getElementById('processor-panel');
    const pricePanel = document.getElementById('price-panel');
    
    if (!brandPanel || !processorPanel || !pricePanel) return;
    
    // Hide the "Clear All" button initially
    const clearAllButton = document.getElementById('clear-filters');
    if (clearAllButton) {
        clearAllButton.style.display = 'none';
    }
    
    // 1. Update brand panel
    const brandPanelTitle = brandPanel.querySelector('h3');
    if (brandPanelTitle) {
        brandPanelTitle.textContent = 'Fitness Tracker Brands';
    }
    
    // Update brand filter button text
    const brandFilterButton = document.querySelector('.filter-button[data-panel="brand-panel"]');
    if (brandFilterButton) {
        brandFilterButton.innerHTML = '<i class="fas fa-tag"></i> Brand';
    }
    
    // Get the filter options container
    const brandOptions = brandPanel.querySelector('.filter-options');
    if (brandOptions) {
        // Clear existing options
        brandOptions.innerHTML = '';
        
        // Add "All Brands" option
        const allBrandsLabel = document.createElement('label');
        allBrandsLabel.className = 'filter-option';
        allBrandsLabel.innerHTML = '<input type="checkbox" name="brand" value="all" checked> All Brands';
        brandOptions.appendChild(allBrandsLabel);
        
        // Add specific brands for fitness trackers
        const fitnessTrackerBrands = ['Riversong', 'Apple', 'Garmin', 'Genius', 'Huawei', 'Polaroid', 'Samsung', 'Volkano', 'Xiaomi'];
        
        fitnessTrackerBrands.forEach(brand => {
            const label = document.createElement('label');
            label.className = 'filter-option';
            label.innerHTML = `<input type="checkbox" name="brand" value="${brand.toLowerCase()}"> ${brand}`;
            brandOptions.appendChild(label);
        });
        
        // Add apply/cancel buttons
        if (!brandPanel.querySelector('.apply-buttons')) {
            const buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'apply-buttons';
            buttonsDiv.innerHTML = `
                <button class="apply-filters">Apply</button>
                <button class="cancel-filters">Cancel</button>
            `;
            brandPanel.appendChild(buttonsDiv);
            
            // Add event listeners
            const applyButton = buttonsDiv.querySelector('.apply-filters');
            const cancelButton = buttonsDiv.querySelector('.cancel-filters');
            
            if (applyButton) {
                applyButton.addEventListener('click', applyFilters);
            }
            
            if (cancelButton) {
                cancelButton.addEventListener('click', closeAllFilterPanels);
            }
        }
    }
    
    // 2. Update processor panel to OS panel
    const processorPanelTitle = processorPanel.querySelector('h3');
    if (processorPanelTitle) {
        processorPanelTitle.textContent = 'Operating System';
    }
    
    // Update processor filter button text to OS
    const processorFilterButton = document.querySelector('.filter-button[data-panel="processor-panel"]');
    if (processorFilterButton) {
        // Save original text if not already saved
        if (!processorFilterButton.getAttribute('data-original-text')) {
            processorFilterButton.setAttribute('data-original-text', processorFilterButton.innerHTML);
        }
        
        // Update button text to "OS"
        processorFilterButton.innerHTML = '<i class="fas fa-mobile-alt"></i> OS';
        
        // Update data-panel attribute to match the new panel ID
        processorFilterButton.setAttribute('data-panel', 'os-panel');
        processorPanel.id = 'os-panel';
    }
    
    // Update OS options
    const osOptions = processorPanel.querySelector('.filter-options');
    if (osOptions) {
        // Clear existing options
        osOptions.innerHTML = '';
        
        // Add OS options for fitness trackers
        const fitnessTrackerOS = ['Android 6', 'Android 5', 'Android 4', 'WatchOS'];
        
        fitnessTrackerOS.forEach(os => {
            const label = document.createElement('label');
            label.className = 'filter-option';
            label.innerHTML = `<input type="checkbox" name="os" value="${os.toLowerCase().replace(' ', '')}"> ${os}`;
            osOptions.appendChild(label);
        });
        
        // Add apply/cancel buttons
        if (!processorPanel.querySelector('.apply-buttons')) {
            const buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'apply-buttons';
            buttonsDiv.innerHTML = `
                <button class="apply-filters">Apply</button>
                <button class="cancel-filters">Cancel</button>
            `;
            processorPanel.appendChild(buttonsDiv);
            
            // Add event listeners
            const applyButton = buttonsDiv.querySelector('.apply-filters');
            const cancelButton = buttonsDiv.querySelector('.cancel-filters');
            
            if (applyButton) {
                applyButton.addEventListener('click', applyFilters);
            }
            
            if (cancelButton) {
                cancelButton.addEventListener('click', closeAllFilterPanels);
            }
        }
    }
    
    // 3. Update price panel
    const priceOptions = pricePanel.querySelector('.filter-options');
    if (priceOptions) {
        // Clear existing options
        priceOptions.innerHTML = '';
        
        // Add price ranges for fitness trackers
        const priceRanges = [
            { value: '0-1000', label: 'Under R1,000' },
            { value: '1000-3000', label: 'R1,000 - R3,000' },
            { value: '3000-5000', label: 'R3,000 - R5,000' },
            { value: '5000-10000', label: 'R5,000 - R10,000' },
            { value: '10000+', label: 'Over R10,000' }
        ];
        
        priceRanges.forEach(range => {
            const label = document.createElement('label');
            label.className = 'filter-option';
            label.innerHTML = `<input type="checkbox" name="price" value="${range.value}"> ${range.label}`;
            priceOptions.appendChild(label);
        });
        
        // Add apply/cancel buttons
        if (!pricePanel.querySelector('.apply-buttons')) {
            const buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'apply-buttons';
            buttonsDiv.innerHTML = `
                <button class="apply-filters">Apply</button>
                <button class="cancel-filters">Cancel</button>
            `;
            pricePanel.appendChild(buttonsDiv);
            
            // Add event listeners
            const applyButton = buttonsDiv.querySelector('.apply-filters');
            const cancelButton = buttonsDiv.querySelector('.cancel-filters');
            
            if (applyButton) {
                applyButton.addEventListener('click', applyFilters);
            }
            
            if (cancelButton) {
                cancelButton.addEventListener('click', closeAllFilterPanels);
            }
        }
    }
}

// Update filters for smartwatches
function updateFiltersForSmartwatches() {
    // Similar implementation as updateFiltersForFitnessTrackers but with smartwatch-specific options
    // For now, we'll use the same implementation as fitness trackers
    updateFiltersForFitnessTrackers();
}

// Update filters for VR headsets
function updateFiltersForVRHeadsets() {
    // Similar implementation as updateFiltersForFitnessTrackers but with VR headset-specific options
    // For now, we'll use the same implementation as fitness trackers
    updateFiltersForFitnessTrackers();
}

// Update filters for all wearables (default)
function updateFiltersForAllWearables() {
    // Similar implementation as updateFiltersForFitnessTrackers but with general wearable options
    // For now, we'll use the same implementation as fitness trackers
    updateFiltersForFitnessTrackers();
}

// Update page title based on product type
function updatePageTitle(type) {
    const pageTitle = document.querySelector(".section-title");
    if (pageTitle) {
        let titleText = "Wearables & Devices";
        
        switch (type) {
            case "smartwatches":
                titleText = "Smartwatches";
                break;
            case "fitness_trackers":
                titleText = "Fitness Trackers";
                break;
            case "vr_headsets":
                titleText = "VR Headsets";
                break;
        }
        
        pageTitle.textContent = titleText;
    }
}

// Toggle filter panel
function toggleFilterPanel(panelId) {
    const panel = document.getElementById(panelId);
    const filterPanels = document.querySelectorAll('.filter-panel');
    filterPanels.forEach(p => {
        if (p.id !== panelId) {
            p.classList.remove('active');
        }
    });
    panel.classList.toggle('active');
}

// Close all filter panels
function closeAllFilterPanels() {
    const filterPanels = document.querySelectorAll('.filter-panel');
    filterPanels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Function to update the visibility of the "Clear All" button
function updateClearAllButtonVisibility() {
    const clearAllButton = document.getElementById('clear-filters');
    if (!clearAllButton) return;
    
    // Check if any filters are applied
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const osCheckboxes = document.querySelectorAll('input[name="os"]');
    const processorCheckboxes = document.querySelectorAll('input[name="processor"]');
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    
    // Count selected filters (excluding "All Brands" which is checked by default)
    const selectedBrands = Array.from(brandCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .length;
        
    const selectedOS = Array.from(osCheckboxes)
        .filter(cb => cb.checked)
        .length;
        
    const selectedProcessors = Array.from(processorCheckboxes)
        .filter(cb => cb.checked)
        .length;
        
    const selectedPriceRanges = Array.from(priceCheckboxes)
        .filter(cb => cb.checked)
        .length;
    
    // Show the button only if at least one filter is applied
    const totalFiltersApplied = selectedBrands + selectedOS + selectedProcessors + selectedPriceRanges;
    
    if (totalFiltersApplied > 0) {
        clearAllButton.style.display = 'block';
    } else {
        clearAllButton.style.display = 'none';
    }
}

// Apply filters
function applyFilters() {
    const typeParam = new URLSearchParams(window.location.search).get("type");
    let filteredProducts = [...wearablesDevicesProducts];
    
    // If type filter is applied from URL, apply it first
    if (typeParam) {
        filteredProducts = filteredProducts.filter(product => product.type === typeParam);
    }
    
    // Get selected brands
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const selectedBrands = Array.from(brandCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected OS (instead of processors for wearables)
    const osCheckboxes = document.querySelectorAll('input[name="os"]');
    const selectedOS = Array.from(osCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Get selected price ranges
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    const selectedPriceRanges = Array.from(priceCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Apply brand filter - with specific brands for wearables
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productBrand = product.brand?.toLowerCase() || '';
            return selectedBrands.some(brand => productBrand.includes(brand));
        });
    }
    
    // Apply OS filter for wearables
    if (selectedOS.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            // Get OS from specifications
            const productOS = product.specifications?.os?.toLowerCase() || '';
            return selectedOS.some(os => productOS.includes(os));
        });
    }
    
    // Apply price filter
    if (selectedPriceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productPrice = product.price || 0;
            return selectedPriceRanges.some(range => {
                if (range === '0-1000') return productPrice < 1000;
                if (range === '1000-3000') return productPrice >= 1000 && productPrice < 3000;
                if (range === '3000-5000') return productPrice >= 3000 && productPrice < 5000;
                if (range === '5000-10000') return productPrice >= 5000 && productPrice < 10000;
                if (range === '10000+') return productPrice >= 10000;
                return false;
            });
        });
    }
    
    // Sort and display filtered products
    const sortBySelect = document.getElementById('sort-by');
    const sortBy = sortBySelect ? sortBySelect.value : 'relevance';
    
    // Sort the filtered products
    filteredProducts = sortProducts(filteredProducts, sortBy);
    
    // Update the global variable if needed
    // wearablesDevicesProducts = filteredProducts; // Uncomment if you want to update the global variable
    
    // Display the filtered products
    displayFilteredProducts(filteredProducts);
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Update the visibility of the "Clear All" button
    updateClearAllButtonVisibility();
}

// Function to display filtered products
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
    updatePagination(page, totalPages, null, document.getElementById('sort-by').value);
    document.getElementById("pagination").style.display = products.length > productsPerPage ? 'flex' : 'none';
}

// Reset all filters
function resetFilters() {
    // Reset checkboxes
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.checked = checkbox.value === 'all';
    });
    
    const processorCheckboxes = document.querySelectorAll('input[name="processor"]');
    processorCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    const osCheckboxes = document.querySelectorAll('input[name="os"]');
    osCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    priceCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Refresh display with all products
    const typeParam = new URLSearchParams(window.location.search).get("type");
    displayWearablesDevicesProducts(typeParam, 1, "relevance");
    closeAllFilterPanels();
    
    // Update the visibility of the "Clear All" button
    updateClearAllButtonVisibility();
}

// Add event listeners for filter buttons when DOM is loaded
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
    // Add to existing DOMContentLoaded event
    
    // Filter button click events
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        if (button.id !== 'clear-filters') {
            button.addEventListener('click', () => {
                const panelId = button.getAttribute('data-panel');
                toggleFilterPanel(panelId);
            });
        }
    });
    
    const clearFiltersButton = document.getElementById('clear-filters');
    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', resetFilters);
        // Hide "Clear All" button by default
        clearFiltersButton.style.display = 'none';
    }
    
    // Initialize the "Clear All" button visibility
    updateClearAllButtonVisibility();
    
    // Add change event listeners to all filter checkboxes
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateClearAllButtonVisibility);
    });
    
    const osCheckboxes = document.querySelectorAll('input[name="os"]');
    osCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateClearAllButtonVisibility);
    });
    
    const processorCheckboxes = document.querySelectorAll('input[name="processor"]');
    processorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateClearAllButtonVisibility);
    });
    
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    priceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateClearAllButtonVisibility);
    });
    
    // "All Brands" checkbox logic
    const allBrandsCheckbox = document.querySelector('input[name="brand"][value="all"]');
    if (allBrandsCheckbox) {
        allBrandsCheckbox.addEventListener('change', function() {
            if (this.checked) {
                brandCheckboxes.forEach(cb => {
                    if (cb.value !== 'all') cb.checked = false;
                });
                updateClearAllButtonVisibility();
            }
        });
        
        brandCheckboxes.forEach(checkbox => {
            if (checkbox.value !== 'all') {
                checkbox.addEventListener('change', function() {
                    if (this.checked) allBrandsCheckbox.checked = false;
                    const anyBrandChecked = Array.from(brandCheckboxes).some(cb => cb.checked && cb.value !== 'all');
                    if (!anyBrandChecked) allBrandsCheckbox.checked = true;
                    updateClearAllButtonVisibility();
                });
            }
        });
    }
    
    const applyFiltersButtons = document.querySelectorAll('.apply-filters');
    applyFiltersButtons.forEach(button => {
        button.addEventListener('click', applyFilters);
    });
    
    const cancelFiltersButtons = document.querySelectorAll('.cancel-filters');
    cancelFiltersButtons.forEach(button => {
        button.addEventListener('click', closeAllFilterPanels);
    });
    
    // Close filter panels when clicking outside
    document.addEventListener('click', function(event) {
        const filterPanels = document.querySelectorAll('.filter-panel');
        const filterButtons = document.querySelectorAll('.filter-button');
        let clickedInsideFilter = false;
        
        filterPanels.forEach(panel => {
            if (panel.contains(event.target)) clickedInsideFilter = true;
        });
        
        filterButtons.forEach(button => {
            if (button.contains(event.target)) clickedInsideFilter = true;
        });
        
        if (!clickedInsideFilter) closeAllFilterPanels();
    });
});