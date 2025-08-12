// API URL for fetching smartphone data
const API_URL = 'https://xf9zlapr5e.execute-api.af-south-1.amazonaws.com/smartphones';

// DOM elements
const productImage = document.getElementById('product-image');
const productTitle = document.getElementById('product-title');
const productDescription = document.getElementById('product-description');
const retailersGrid = document.getElementById('retailers-grid');
const specsTableBody = document.getElementById('specs-table-body');
const currentProductBreadcrumb = document.getElementById('current-product-breadcrumb');
const priceHighlight = document.getElementById('price-highlight');
const productBadge = document.getElementById('product-badge');
const productThumbnails = document.getElementById('product-thumbnails');

// Current product data
let currentProduct = null;

/**
 * Initialize the page
 */
async function initPage() {
    try {
        // Get product ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (!productId) {
            showError('No product ID specified');
            return;
        }
        
        // Show loading state
        showLoading();
        
        // Fetch product data
        await fetchProductData(productId);
        
    } catch (error) {
        console.error('Error initializing page:', error);
        showError('Failed to load product information', error);
    }
}

/**
 * Show loading state
 */
function showLoading() {
    // Add loading class to main container
    const container = document.querySelector('.product-details-container');
    if (container) {
        container.innerHTML = `
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p>Loading product information...</p>
            </div>
        `;
    }
}

/**
 * Show error message
 */
function showError(message, error) {
    const container = document.querySelector('.product-details-container');
    if (container) {
        // Always show CORS error info when testing locally with file:// protocol
        const isLocalFile = window.location.protocol === 'file:';
        const isCorsError = isLocalFile || (error && error.message && (
            error.message.includes('CORS') ||
            error.message.includes('Cross-Origin') ||
            error.message.includes('Access-Control-Allow-Origin')
        ));
        
        let errorDetails = '';
        if (isCorsError) {
            errorDetails = `
                <div class="error-details">
                    <p>This appears to be a CORS issue. When testing locally, try:</p>
                    <ul>
                        <li>Using a local development server instead of file:// protocol</li>
                        <li>Using a browser extension to disable CORS for testing</li>
                        <li>In production, ensure the API has proper CORS headers</li>
                    </ul>
                </div>
            `;
        }
        
        container.innerHTML = `
            <div class="error-container">
                <i class="fas fa-exclamation-circle"></i>
                <h2>Error</h2>
                <p>${message}</p>
                ${errorDetails}
                <a href="smartphones.html" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Smartphones
                </a>
            </div>
        `;
    }
}

/**
 * Fetch product data from API
 */
async function fetchProductData(productId) {
    try {
        // Check if we're running from a file:// URL (local file)
        const isLocalFile = window.location.protocol === 'file:';
        
        if (isLocalFile && productId === 'apple-iphone-16-128gb-teal') {
            // Use sample data for this specific product when testing locally
            console.log('Using sample data for local testing');
            currentProduct = {
                "product_id": "apple-iphone-16-128gb-teal",
                "category": "smartphones",
                "brand": "Apple",
                "color": "Teal",
                "description": "Make a statement with the iPhone 16 in a fresh Teal finish. This eye-catching color houses the powerful A18 chip with Apple Intelligence. The advanced 48MP dual-camera system is redesigned for spatial video, letting you capture memories like never before. With the new Action and Capture buttons and a gorgeous 6.1-inch Super Retina XDR display, it's a perfect fusion of style and function.",
                "imageUrl": "https://comparehub-smartphone-images.s3.af-south-1.amazonaws.com/phones/apple/iphone-16/teal-v1.png",
                "model": "iPhone 16 Teal",
                "offers": [
                    {
                        "logoUrl": "https://comparehub-retailer-logos.s3.af-south-1.amazonaws.com/store-a.svg",
                        "originalPrice": 21499,
                        "price": 20999,
                        "retailer": "Store A",
                        "saleEnds": "31 October 2025",
                        "url": "https://www.store-a.co.za/shopping/product-details/apple-iphone-16-128gb-teal/824012"
                    },
                    {
                        "logoUrl": "https://comparehub-retailer-logos.s3.af-south-1.amazonaws.com/store-b.svg",
                        "originalPrice": 20999,
                        "price": 20999,
                        "retailer": "Store B",
                        "saleEnds": null,
                        "url": "https://shop.store-b.co.za/products/smartphones/apple/iphone-16-128gb-teal"
                    },
                    {
                        "logoUrl": "https://comparehub-retailer-logos.s3.af-south-1.amazonaws.com/store-c.svg",
                        "originalPrice": 21999,
                        "price": 21499,
                        "retailer": "Store C",
                        "saleEnds": "31 October 2025",
                        "url": "https://www.store-c.co.za/iphone-16/buy/128gb-teal"
                    }
                ],
                "specs": {
                    "AdditionalFeatures": [
                        "Action button",
                        "Capture Button",
                        "Dynamic Island"
                    ],
                    "Audio": {
                        "Microphones": "Stereo microphones with Voice Isolation",
                        "Speakers": "Stereo speakers with Spatial Audio playback"
                    },
                    "Battery": {
                        "Capacity": "3561mAh (Typical)",
                        "Fast Charging": "Supports 20W adapter (50% in 30 mins)",
                        "PowerShare": "No",
                        "Wireless Charging": "MagSafe and Qi2 wireless charging up to 15W"
                    },
                    "Camera": {
                        "Features": [
                            "48MP Main with 2x optical-quality Telephoto",
                            "Spatial Video Capture",
                            "Smart HDR 5",
                            "Photonic Engine",
                            "Night mode"
                        ],
                        "Front_Camera": "12MP TrueDepth (f/1.9, Autofocus)",
                        "Rear_Main": "48MP (f/1.6, sensor-shift OIS)",
                        "Rear_Ultra_Wide": "12MP (f/2.4, 120° FoV)"
                    },
                    "Connectivity": {
                        "5g": "Sub-6GHz",
                        "Bluetooth": "5.3",
                        "Nfc": "Yes",
                        "Usb": "USB-C with USB 2.0 speeds",
                        "UWB": "Second-generation Ultra Wideband chip",
                        "Wifi": "Wi-Fi 6 (802.11ax)"
                    },
                    "Dimensions": {
                        "Full": "147.6 x 71.6 x 7.8mm",
                        "Weight": "171g"
                    },
                    "Display": {
                        "Main": {
                            "Brightness": "1000 nits (HBM), 1600 nits (peak for HDR)",
                            "Refresh Rate": "60Hz",
                            "Resolution": "2556 x 1179 pixels",
                            "Size": "6.1-inch",
                            "Type": "Super Retina XDR OLED"
                        }
                    },
                    "Durability": {
                        "Material": "Ceramic Shield front, Colour-infused glass back, Aluminum frame",
                        "Water Resistance": "IP68 (up to 6 meters for 30 minutes)"
                    },
                    "Os": {
                        "Features": [
                            "Apple Intelligence",
                            "Redesigned Photos app",
                            "Customizable Home Screen"
                        ],
                        "Operating System": "iOS 18"
                    },
                    "Performance": {
                        "Processor": "A18 (5-core GPU)",
                        "Ram": "8GB",
                        "Storage": "128GB "
                    },
                    "Security": {
                        "Biometrics": "Face ID"
                    }
                }
            };
            
            // Display product information using the sample data
            displayProductInfo();
            return;
        }
        
        // If not using sample data, proceed with API call
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const products = await response.json();
        
        // Find the specific product
        currentProduct = products.find(product => product.product_id === productId);
        
        if (!currentProduct) {
            throw new Error('Product not found');
        }
        
        // Display product information
        displayProductInfo();
        
    } catch (error) {
        console.error('Error fetching product data:', error);
        
        // If we're running locally and it's likely a CORS error, try to use sample data
        const isLocalFile = window.location.protocol === 'file:';
        const isCorsError = error.message && (
            error.message.includes('CORS') ||
            error.message.includes('Cross-Origin') ||
            error.message.includes('Failed to fetch')
        );
        
        if (isLocalFile && isCorsError && productId === 'apple-iphone-16-128gb-teal') {
            console.log('CORS error detected, falling back to sample data');
            // Retry with sample data
            fetchProductData(productId);
        } else {
            // Show error message
            showError('Failed to load product information', error);
        }
    }
}

/**
 * Display product information
 */
function displayProductInfo() {
    // Create the HTML structure for the product view
    const productViewHTML = `
        <div class="breadcrumb">
            <a href="index.html">Home</a>
            <span class="breadcrumb-separator">/</span>
            <a href="smartphones.html">Smartphones</a>
            <span class="breadcrumb-separator">/</span>
            <span id="current-product-breadcrumb"></span>
        </div>

        <!-- Product Header Section -->
        <div class="product-header">
            <div class="product-image-gallery">
                <div class="product-image-container">
                    <img src="" alt="Product Image" class="product-image" id="product-image">
                    <div class="product-badge" id="product-badge"></div>
                </div>
                <div class="product-thumbnails" id="product-thumbnails">
                    <!-- Thumbnails will be populated by JavaScript -->
                </div>
            </div>
            <div class="product-info">
                <h1 id="product-title"></h1>
                <div class="price-highlight" id="price-highlight"></div>

                <div class="compare-actions">
                    <button class="compare-btn" id="compare-btn">
                        Compare
                    </button>
                    <button class="wishlist-btn" id="wishlist-btn">
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>

        <!-- Product Description Section -->
        <div class="product-description" id="product-description">
            <!-- Description will be populated by JavaScript -->
        </div>

        <!-- Price Comparison Section -->
        <div class="price-comparison-section">
            <h2 class="section-title toggle-section" data-target="retailers-grid">
                <i class="fas fa-chevron-right"></i> Price Comparison
            </h2>
            <div class="retailers-grid" id="retailers-grid" style="display: none;">
                <!-- Retailer cards will be populated by JavaScript -->
            </div>
        </div>

        <!-- Full Specifications Section -->
        <div class="specifications-section">
            <h2 class="section-title toggle-section" data-target="specs-container">
                <i class="fas fa-chevron-right"></i> Full Specifications
            </h2>
            <div class="specs-container" id="specs-container" style="display: none;">
                <table class="specs-table">
                    <tbody id="specs-table-body">
                        <!-- Specifications will be populated by JavaScript -->
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Price History Graphs Section -->
        <div class="price-history-section" style="background-color: #fff; border-radius: 12px; padding: 0; margin: 30px 0; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08); overflow: hidden; position: relative; max-width: 100%;">
            <h2 class="section-title toggle-section" data-target="price-history-container" style="margin: 0px; color: rgb(255, 255, 255); font-size: 20px; border-bottom: none; background: linear-gradient(135deg, #d80000, #05182d); padding: 15px 20px; text-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px; letter-spacing: 0.5px; cursor: pointer;">
                <i class="fas fa-chevron-right" style="color: #fff; margin-right: 10px;"></i> Price History Graphs
            </h2>
            <div class="price-history-container" id="price-history-container" style="padding: 15px; display: none; overflow-x: hidden;">
                <div class="sort-options" style="display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 15px;">
                    <label for="sort-by" style="font-size: 14px; margin-right: 5px;">Sort by:</label>
                    <select id="sort-by" style="padding: 8px; border-radius: 5px; border: 1px solid #ddd; font-size: 14px; background-color: #f8f8f8;">
                        <option value="relevance">30 days</option>
                        <option value="price-asc">3 months</option>
                        <option value="price-desc">6 months</option>
                        <option value="brand-asc">12 months</option>
                    </select>
                </div>
                <div class="price-history-graph-container" style="position: relative; height: 250px; margin: 15px 0; max-width: 100%; overflow-x: hidden;">
                    <canvas id="price-history-graph"></canvas>
                </div>
            </div>
        </div>
    `;
    
    // Reset the container with the product view HTML
    const container = document.querySelector('.product-details-container');
    if (container) {
        container.innerHTML = productViewHTML;
    }
    
    // Re-get DOM elements after resetting container
    const productImage = document.getElementById('product-image');
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');
    const retailersGrid = document.getElementById('retailers-grid');
    const specsTableBody = document.getElementById('specs-table-body');
    const currentProductBreadcrumb = document.getElementById('current-product-breadcrumb');
    const priceHighlight = document.getElementById('price-highlight');
    
    // Set product image with proper loading
    if (productImage) {
        // Set up image loading with fade-in effect
        productImage.onload = function() {
            this.classList.add('product-image-loaded');
        };
        
        // Set alt text first
        productImage.alt = currentProduct.model;
        
        // Then set the source to trigger loading
        productImage.src = currentProduct.imageUrl;
    }
    
    // Set product title
    if (productTitle) {
        productTitle.textContent = currentProduct.model || `${currentProduct.brand} ${currentProduct.product_id}`;
    }
    
    // Set breadcrumb
    if (currentProductBreadcrumb) {
        currentProductBreadcrumb.textContent = currentProduct.model || currentProduct.product_id;
    }
    
    // Set price highlight
    if (priceHighlight) {
        // Find lowest price
        let lowestPrice = Infinity;
        let lowestPriceRetailer = '';
        
        if (currentProduct.offers && currentProduct.offers.length > 0) {
            currentProduct.offers.forEach(offer => {
                if (offer.price && offer.price < lowestPrice) {
                    lowestPrice = offer.price;
                    lowestPriceRetailer = offer.retailer;
                }
            });
        }
        
        if (lowestPrice !== Infinity) {
            const formattedPrice = lowestPrice.toLocaleString('en-ZA', {
                style: 'currency',
                currency: 'ZAR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            
            // Price display removed as requested
            priceHighlight.innerHTML = '';
        } else {
            // Price display removed as requested
            priceHighlight.innerHTML = '';
        }
    }
    
    // Set product description
    if (productDescription) {
        productDescription.innerHTML = `
            <h2 class="section-title">
                Product Description
            </h2>
            <div class="description-content">
                ${currentProduct.description || 'No description available'}
            </div>
        `;
    }
    
    // Display retailers
    displayRetailers();
    
    // Display specifications
    displaySpecifications();
    
    // Add toggle functionality to section titles
    addToggleFunctionality();
    
    // Initialize price history tabs
    initPriceHistoryTabs();
}

/**
 * Display retailers and price comparison
 */
function displayRetailers() {
    const retailersGrid = document.getElementById('retailers-grid');
    
    if (!retailersGrid) return;
    
    if (!currentProduct.offers || currentProduct.offers.length === 0) {
        retailersGrid.innerHTML = `
            <div class="no-retailers">
                <p>No retailer information available for this product.</p>
            </div>
        `;
        return;
    }
    
    // Sort offers by price (lowest first)
    const sortedOffers = [...currentProduct.offers].sort((a, b) => a.price - b.price);
    
    // Create retailer cards
    retailersGrid.innerHTML = '';
    
    sortedOffers.forEach((offer, index) => {
        const isBestPrice = index === 0; // First offer is the lowest price
        
        const originalPrice = offer.originalPrice 
            ? offer.originalPrice.toLocaleString('en-ZA', {
                style: 'currency',
                currency: 'ZAR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })
            : null;
            
        const currentPrice = offer.price
            ? offer.price.toLocaleString('en-ZA', {
                style: 'currency',
                currency: 'ZAR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })
            : 'Price not available';
            
        const discount = (offer.originalPrice && offer.price && offer.originalPrice > offer.price)
            ? Math.round(((offer.originalPrice - offer.price) / offer.originalPrice) * 100)
            : null;
            
        const retailerCard = document.createElement('div');
        retailerCard.className = 'retailer-card';
        
        retailerCard.innerHTML = `
            <div class="retailer-header">
                <div class="retailer-logo">
                    <span class="retailer-name">${offer.retailer}</span>
                </div>
            </div>
            <div class="retailer-pricing">
                ${originalPrice && originalPrice !== currentPrice 
                    ? `<span class="original-price">${originalPrice}</span>` 
                    : ''}
                <span class="current-price">${currentPrice}</span>
            </div>
            ${offer.saleEnds 
                ? `<div class="sale-ends">Sale ends: ${offer.saleEnds}</div>` 
                : ''}
            <a href="${offer.url}" class="retailer-link" target="_blank" rel="noopener">
                <i class="fas fa-external-link-alt"></i> Visit ${offer.retailer}
            </a>
        `;
        
        retailersGrid.appendChild(retailerCard);
    });
}

/**
 * Display product specifications
 */
function displaySpecifications() {
    const specsTableBody = document.getElementById('specs-table-body');
    
    if (!specsTableBody) return;
    
    if (!currentProduct.specs || Object.keys(currentProduct.specs).length === 0) {
        specsTableBody.innerHTML = `
            <tr>
                <td colspan="2" class="no-specs">
                    No specifications available for this product.
                </td>
            </tr>
        `;
        return;
    }
    
    // Clear existing specs
    specsTableBody.innerHTML = '';
    
    // Order of specifications (for consistent display)
    const specOrder = [
        'Performance', 'Display', 'Camera', 'Battery', 'Connectivity', 
        'Dimensions', 'Os', 'Security', 'Durability', 'Audio', 'AdditionalFeatures'
    ];
    
    // Create a sorted list of spec categories
    const sortedCategories = Object.keys(currentProduct.specs).sort((a, b) => {
        const indexA = specOrder.indexOf(a);
        const indexB = specOrder.indexOf(b);
        
        // If both categories are in the specOrder array, sort by their index
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }
        
        // If only one category is in the specOrder array, prioritize it
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        
        // If neither category is in the specOrder array, sort alphabetically
        return a.localeCompare(b);
    });
    
    // Add each specification category
    sortedCategories.forEach(category => {
        const specs = currentProduct.specs[category];
        
        // Create category header
        const categoryRow = document.createElement('tr');
        categoryRow.className = 'spec-category';
        categoryRow.innerHTML = `
            <td colspan="2" class="spec-category-name">${formatCategoryName(category)}</td>
        `;
        specsTableBody.appendChild(categoryRow);
        
        // Add specs for this category
        if (Array.isArray(specs)) {
            // Handle array of values (like AdditionalFeatures)
            const specRow = document.createElement('tr');
            specRow.innerHTML = `
                <td class="spec-name"></td>
                <td class="spec-value">
                    <ul class="spec-list">
                        ${specs.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                </td>
            `;
            specsTableBody.appendChild(specRow);
        } else if (typeof specs === 'object') {
            // Handle object of key-value pairs
            Object.entries(specs).forEach(([key, value]) => {
                const specRow = document.createElement('tr');
                
                if (Array.isArray(value)) {
                    // Handle array values
                    specRow.innerHTML = `
                        <td class="spec-name">${formatSpecName(key)}</td>
                        <td class="spec-value">
                            <ul class="spec-list">
                                ${value.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </td>
                    `;
                } else if (typeof value === 'object' && value !== null) {
                    // Handle nested objects (like Display.Main)
                    specRow.innerHTML = `
                        <td class="spec-name">${formatSpecName(key)}</td>
                        <td class="spec-value">
                            <table class="nested-specs">
                                ${Object.entries(value).map(([nestedKey, nestedValue]) => `
                                    <tr>
                                        <td class="nested-spec-name">${formatSpecName(nestedKey)}</td>
                                        <td class="nested-spec-value">${nestedValue}</td>
                                    </tr>
                                `).join('')}
                            </table>
                        </td>
                    `;
                } else {
                    // Handle simple key-value pairs
                    specRow.innerHTML = `
                        <td class="spec-name">${formatSpecName(key)}</td>
                        <td class="spec-value">${value}</td>
                    `;
                }
                
                specsTableBody.appendChild(specRow);
            });
        } else {
            // Handle simple values
            const specRow = document.createElement('tr');
            specRow.innerHTML = `
                <td class="spec-name"></td>
                <td class="spec-value">${specs}</td>
            `;
            specsTableBody.appendChild(specRow);
        }
    });
}

/**
 * Format category name for display
 */
function formatCategoryName(name) {
    // Handle special cases
    switch (name) {
        case 'Os':
            return 'Operating System';
        case 'AdditionalFeatures':
            return 'Additional Features';
        default:
            // Convert camelCase to Title Case with spaces
            return name
                .replace(/([A-Z])/g, ' $1') // Add space before capital letters
                .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
    }
}

/**
 * Format specification name for display
 */
function formatSpecName(name) {
    // Handle special cases
    switch (name) {
        case 'Ram':
            return 'RAM';
        case 'Nfc':
            return 'NFC';
        case 'Usb':
            return 'USB';
        case 'Wifi':
            return 'Wi-Fi';
        case '5g':
            return '5G';
        case 'UWB':
            return 'Ultra Wideband';
        case 'Front_Camera':
            return 'Front Camera';
        case 'Rear_Main':
            return 'Main Camera';
        case 'Rear_Ultra_Wide':
            return 'Ultra-Wide Camera';
        case 'Rear_Telephoto':
            return 'Telephoto Camera';
        default:
            // Convert snake_case or camelCase to Title Case with spaces
            return name
                .replace(/_/g, ' ') // Replace underscores with spaces
                .replace(/([A-Z])/g, ' $1') // Add space before capital letters
                .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
    }
}

/**
 * Add toggle functionality to section titles
 */
function addToggleFunctionality() {
    // Get all toggle section titles
    const toggleSections = document.querySelectorAll('.toggle-section');
    
    // Add click event listener to each toggle section
    toggleSections.forEach(section => {
        section.style.cursor = 'pointer';
        
        // Get the target content element
        const targetId = section.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        
        if (targetContent) {
            // Add click event listener
            section.addEventListener('click', () => {
                // Toggle the display of the target content
                const isVisible = targetContent.style.display !== 'none';
                
                // Toggle display
                if (isVisible) {
                    targetContent.style.display = 'none';
                    // Change icon to chevron-right when closed
                    const icon = section.querySelector('i');
                    if (icon) {
                        icon.className = 'fas fa-chevron-right';
                    }
                } else {
                    targetContent.style.display = 'block';
                    // Change icon back to chevron-down when opened
                    const icon = section.querySelector('i');
                    if (icon) {
                        icon.className = 'fas fa-chevron-down';
                    }
                    
                    // If this is the price history section, redraw the graph for mobile
                    if (targetId === 'price-history-container') {
                        // Small delay to ensure container is visible before drawing
                        setTimeout(() => {
                            const sortDropdown = document.getElementById('sort-by');
                            const currentOption = sortDropdown ? sortDropdown.value : 'relevance';
                            updatePriceHistoryGraph(currentOption);
                        }, 50);
                    }
                }
            });
        }
    });
}

// Add Chart.js to the page
function loadChartJs() {
    if (window.Chart) {
        return Promise.resolve(); // Chart.js already loaded
    }
    
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

/**
 * Initialize price history graph
 */
function initPriceHistoryTabs() {
    // Load Chart.js first
    loadChartJs().then(() => {
        // Initialize with the default option (relevance for 30 days)
        updatePriceHistoryGraph('relevance');
        
        // Add event listener for the sort dropdown
        const sortDropdown = document.getElementById('sort-by');
        if (sortDropdown) {
            sortDropdown.addEventListener('change', (event) => {
                updatePriceHistoryGraph(event.target.value);
            });
        }
    }).catch(error => {
        console.error('Failed to load Chart.js:', error);
        // Fallback if Chart.js fails to load
        const graphContainer = document.getElementById('price-history-graph');
        if (graphContainer) {
            graphContainer.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <p>Unable to load price history chart. Please try again later.</p>
                </div>
            `;
        }
    });
}

/**
 * Show sorting options modal
 */
function showTimePeriodModal(currentPeriod) {
    // Remove any existing modal
    const existingModal = document.querySelector('.time-period-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'time-period-modal';
    modal.style.position = 'absolute';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    modal.style.borderRadius = '8px';
    modal.style.padding = '20px';
    modal.style.zIndex = '1000';
    modal.style.minWidth = '250px';
    
    // Create modal title
    const modalTitle = document.createElement('div');
    modalTitle.textContent = 'Sort By';
    modalTitle.style.fontWeight = 'bold';
    modalTitle.style.fontSize = '16px';
    modalTitle.style.marginBottom = '15px';
    modalTitle.style.borderBottom = '1px solid #eee';
    modalTitle.style.paddingBottom = '10px';
    modal.appendChild(modalTitle);
    
    // Create sorting options
    const sortOptions = [
        { value: 'price_low', label: 'Price: Low to High' },
        { value: 'price_high', label: 'Price: High to Low' },
        { value: 'name_asc', label: 'Name: A to Z' },
        { value: 'name_desc', label: 'Name: Z to A' },
        { value: 'newest', label: 'Newest First' }
    ];
    
    sortOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'time-period-option';
        optionElement.textContent = option.label;
        optionElement.setAttribute('data-sort', option.value);
        optionElement.style.padding = '10px';
        optionElement.style.cursor = 'pointer';
        optionElement.style.borderRadius = '4px';
        
        // Highlight the current selection
        if (option.value === currentPeriod) {
            optionElement.style.backgroundColor = '#f0f7ff';
            optionElement.style.color = '#0066cc';
            optionElement.style.fontWeight = 'bold';
        }
        
        // Hover effect
        optionElement.addEventListener('mouseover', () => {
            if (option.value !== currentPeriod) {
                optionElement.style.backgroundColor = '#f5f5f5';
            }
        });
        
        optionElement.addEventListener('mouseout', () => {
            if (option.value !== currentPeriod) {
                optionElement.style.backgroundColor = 'transparent';
            }
        });
        
        // Click event
        optionElement.addEventListener('click', () => {
            // Update the graph with the selected sorting option
            updatePriceHistoryGraph(option.value);
            
            // Update current period
            currentPeriod = option.value;
            
            // Close the modal
            modal.remove();
            
            // Remove overlay
            const overlay = document.querySelector('.modal-overlay');
            if (overlay) {
                overlay.remove();
            }
        });
        
        modal.appendChild(optionElement);
    });
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    
    // Close modal when clicking outside
    overlay.addEventListener('click', () => {
        modal.remove();
        overlay.remove();
    });
    
    // Add modal and overlay to the document
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

/**
 * Generate price data for the specified time period
 * @param {string} sortOption - The selected sort option
 * @returns {Object} - Object with labels and data for the chart
 */
function generatePriceData(sortOption) {
    // Base price around R20,000
    const basePrice = 20000;
    
    let labels = [];
    let data = [];
    
    // Determine if we're on mobile
    const isMobile = window.innerWidth < 480;
    
    // Generate data based on the selected time period
    if (sortOption === 'price-asc') {
        // 3 months - January to March
        labels = ['January', 'February', 'March'];
        data = [20999, 20499, 19999];
    } else if (sortOption === 'price-desc') {
        // 6 months - January to June
        labels = isMobile ?
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] :
            ['January', 'February', 'March', 'April', 'May', 'June'];
        data = [20999, 20499, 19999, 19499, 18999, 18499];
    } else if (sortOption === 'brand-asc') {
        // 12 months - January to December
        labels = isMobile ?
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] :
            ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November', 'December'];
        data = [20999, 20499, 19999, 19499, 18999, 18499,
               18999, 19499, 19999, 19499, 18999, 18499];
    } else {
        // 30 days - For mobile, use fewer data points with fixed values
        if (isMobile) {
            // Use 5 fixed data points for mobile
            labels = ['Day 1', 'Day 8', 'Day 15', 'Day 22', 'Day 30'];
            data = [20999, 20499, 19999, 19499, 19999];
        } else {
            // For desktop, use 10 data points
            for (let i = 1; i <= 10; i++) {
                labels.push(`Day ${i * 3}`);
            }
            
            // Generate a somewhat realistic price trend for 30 days
            let currentPrice = basePrice;
            for (let i = 0; i < 10; i++) {
                // Random price fluctuation
                const variation = Math.random() * 500 - 250; // -250 to +250
                currentPrice = Math.max(basePrice - 2000, Math.min(basePrice + 1000, currentPrice + variation));
                data.push(currentPrice);
            }
        }
    }
    
    return { labels, data };
}

/**
 * Update price history graph based on selected sorting option
 */
function updatePriceHistoryGraph(sortOption) {
    const canvas = document.getElementById('price-history-graph');
    
    if (!canvas || !window.Chart) return;
    
    // Destroy existing chart if it exists
    if (window.priceHistoryChart) {
        window.priceHistoryChart.destroy();
    }
    
    // Generate data for the selected time period
    const { labels, data } = generatePriceData(sortOption);
    
    // Calculate statistics
    const lowestPrice = Math.min(...data);
    const highestPrice = Math.max(...data);
    const averagePrice = Math.round(data.reduce((sum, price) => sum + price, 0) / data.length);
    
    // Format prices for display
    const formatPrice = (price) => {
        return price.toLocaleString('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };
    
    // Create a gradient for the line color based on price
    // Calculate the midpoint price for color transition
    const midPrice = (lowestPrice + highestPrice) / 2;
    
    // Create the chart
    const ctx = canvas.getContext('2d');
    
    // Create a custom segment styling function
    const createGradient = (ctx, data) => {
        // Create gradient colors for each segment
        return data.map((value, index) => {
            // Green for lower prices, red for higher prices
            return value < midPrice ? '#2e7d32' : '#c62828';
        });
    };
    
    window.priceHistoryChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${currentProduct.model || 'Product'} (128GB)`,
                data: data,
                borderColor: (context) => {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    
                    // If no chart area, return default color
                    if (!chartArea) {
                        return '#667eea';
                    }
                    
                    // Get the current data point
                    const dataIndex = context.dataIndex;
                    const dataValue = context.dataset.data[dataIndex];
                    
                    // Return green for low prices, red for high prices
                    return dataValue < midPrice ? '#2e7d32' : '#c62828';
                },
                segment: {
                    borderColor: (ctx) => createGradient(ctx, data)
                },
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: (context) => {
                    const dataValue = context.dataset.data[context.dataIndex];
                    return dataValue < midPrice ? '#2e7d32' : '#c62828';
                },
                pointBorderColor: '#ffffff',
                pointBorderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#667eea',
                    borderWidth: 1,
                    cornerRadius: 10,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + formatPrice(context.parsed.y);
                        }
                    },
                    // Optimize tooltip padding for mobile
                    padding: window.innerWidth < 768 ? 8 : 12,
                    titleFont: {
                        size: window.innerWidth < 768 ? 12 : 14
                    },
                    bodyFont: {
                        size: window.innerWidth < 768 ? 11 : 13
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        drawBorder: false,
                        // Reduce grid lines on mobile
                        display: window.innerWidth < 480 ? false : true
                    },
                    ticks: {
                        color: '#666',
                        font: {
                            size: window.innerWidth < 768 ? 10 : 12,
                            weight: '500'
                        },
                        // Show fewer ticks on small screens
                        maxTicksLimit: window.innerWidth < 480 ? 5 : (window.innerWidth < 768 ? 7 : 10),
                        // Auto-skip labels that would overlap
                        autoSkip: true,
                        // Add more padding at the bottom on mobile to avoid overlap with legend
                        padding: window.innerWidth < 480 ? 10 : 0,
                        // Ensure all labels are displayed on mobile
                        autoSkipPadding: window.innerWidth < 480 ? 15 : 0
                    }
                },
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        drawBorder: false,
                        // Reduce grid lines on mobile
                        tickLength: window.innerWidth < 480 ? 5 : 10
                    },
                    ticks: {
                        color: '#666',
                        font: {
                            size: window.innerWidth < 768 ? 10 : 12,
                            weight: '500'
                        },
                        callback: function(value) {
                            // Shorter price format for mobile
                            if (window.innerWidth < 480) {
                                return 'R' + Math.round(value/1000) + 'k';
                            }
                            return formatPrice(value);
                        },
                        // Show fewer ticks on small screens
                        maxTicksLimit: window.innerWidth < 480 ? 4 : 6
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            elements: {
                line: {
                    // Thinner lines on mobile for clarity
                    borderWidth: window.innerWidth < 480 ? 2 : 3
                },
                point: {
                    // Smaller points on mobile
                    radius: window.innerWidth < 480 ? 4 : (window.innerWidth < 768 ? 5 : 6),
                    hoverRadius: window.innerWidth < 480 ? 6 : (window.innerWidth < 768 ? 7 : 8),
                    hoverBorderWidth: window.innerWidth < 480 ? 2 : 4
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            // Optimize for touch devices
            events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
        }
    });
    
    // Add price statistics below the chart
    const container = canvas.parentElement;
    
    // Create stats container if it doesn't exist
    let statsContainer = container.querySelector('.price-stats');
    if (!statsContainer) {
        statsContainer = document.createElement('div');
        statsContainer.className = 'price-stats';
        statsContainer.style.display = 'flex';
        statsContainer.style.justifyContent = 'space-around';
        statsContainer.style.margin = '20px 0 10px';
        statsContainer.style.textAlign = 'center';
        statsContainer.style.flexWrap = 'wrap';
        
        // Responsive layout for mobile
        if (window.innerWidth < 480) {
            statsContainer.style.flexDirection = 'column';
            statsContainer.style.alignItems = 'center';
            statsContainer.style.gap = '10px';
        }
        container.appendChild(statsContainer);
    } else {
        statsContainer.innerHTML = '';
    }
    
    // Add stats
    const stats = [
        { label: 'Lowest', value: lowestPrice, color: '#2e7d32', bgColor: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' },
        { label: 'Average', value: averagePrice, color: '#1565c0', bgColor: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' },
        { label: 'Highest', value: highestPrice, color: '#c62828', bgColor: 'linear-gradient(135deg, #ffebee, #ffcdd2)' }
    ];
    
    stats.forEach(stat => {
        const statElement = document.createElement('div');
        statElement.className = 'price-stat';
        statElement.style.padding = window.innerWidth < 480 ? '10px' : '15px';
        statElement.style.background = stat.bgColor;
        statElement.style.borderRadius = '10px';
        statElement.style.minWidth = window.innerWidth < 480 ? '80%' : '120px';
        statElement.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.1)';
        statElement.style.margin = '5px';
        
        statElement.innerHTML = `
            <div style="font-size: ${window.innerWidth < 480 ? '14px' : '16px'}; color: ${stat.color}; margin-bottom: 5px;">${stat.label}</div>
            <div style="font-size: ${window.innerWidth < 480 ? '16px' : '18px'}; font-weight: 700; color: ${stat.color};">${window.innerWidth < 480 ? 'R' + Math.round(stat.value/1000) + 'k' : formatPrice(stat.value)}</div>
        `;
        
        statsContainer.appendChild(statElement);
    });
    
    // Add color legend with improved positioning
    const legendContainer = document.createElement('div');
    legendContainer.style.position = 'absolute';
    
    // Position legend differently based on screen size
    if (window.innerWidth < 480) {
        // For mobile, position in the top-right corner of the chart
        legendContainer.style.top = '10px';
        legendContainer.style.right = '10px';
        legendContainer.style.display = 'flex';
        legendContainer.style.flexDirection = 'column';
        legendContainer.style.maxWidth = '80px'; // Limit width to avoid overlap
    } else {
        // For larger screens, position in the top-right corner
        legendContainer.style.top = '10px';
        legendContainer.style.right = '10px';
        legendContainer.style.display = 'flex';
        legendContainer.style.flexDirection = 'column';
    }
    
    legendContainer.style.gap = '5px';
    legendContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    legendContainer.style.padding = window.innerWidth < 480 ? '4px' : '8px';
    legendContainer.style.borderRadius = '5px';
    legendContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    legendContainer.style.fontSize = window.innerWidth < 480 ? '9px' : '12px';
    legendContainer.style.fontWeight = 'bold';
    legendContainer.style.zIndex = '5';
    
    // Create legend items - consistent across all devices
    const legendItems = [
        { color: '#2e7d32', label: 'Low Price' },
        { color: '#c62828', label: 'High Price' }
    ];
    
    legendItems.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.style.display = 'flex';
        legendItem.style.alignItems = 'center';
        legendItem.style.gap = '3px';
        
        legendItem.innerHTML = `
            <div style="width: ${window.innerWidth < 480 ? '8px' : '12px'}; height: ${window.innerWidth < 480 ? '8px' : '12px'}; border-radius: 50%; background-color: ${item.color};"></div>
            <span>${item.label}</span>
        `;
        
        legendContainer.appendChild(legendItem);
    });
    
    // Add legend to the chart container
    container.style.position = 'relative';
    container.appendChild(legendContainer);
}

// Add responsive styles for mobile devices
function addResponsiveStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        @media (max-width: 480px) {
            .price-history-section {
                margin: 20px 0 !important;
            }
            .price-history-container {
                padding: 10px !important;
            }
            .price-history-graph-container {
                height: 200px !important;
                margin-top: 10px !important;
            }
            .price-stats {
                flex-direction: column !important;
                align-items: center !important;
                gap: 10px !important;
                margin-top: 15px !important;
            }
            .price-stat {
                width: 90% !important;
                padding: 8px !important;
            }
        }
        
        @media (min-width: 481px) and (max-width: 768px) {
            .price-history-graph-container {
                height: 250px !important;
            }
        }
    `;
    document.head.appendChild(styleElement);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page
    initPage();
    
    // Add responsive styles
    addResponsiveStyles();
    
    // Add resize event listener for responsive graph
    let resizeTimeout;
    window.addEventListener('resize', function() {
        // Debounce the resize event to prevent excessive redraws
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Get the current sort option
            const sortDropdown = document.getElementById('sort-by');
            const currentOption = sortDropdown ? sortDropdown.value : 'relevance';
            
            // Redraw the graph with the current option
            if (document.getElementById('price-history-graph')) {
                updatePriceHistoryGraph(currentOption);
            }
        }, 250); // Wait 250ms after resize ends before redrawing
    });
    
    // Add orientation change listener for mobile devices
    window.addEventListener('orientationchange', function() {
        // Small delay to ensure the orientation change is complete
        setTimeout(function() {
            const sortDropdown = document.getElementById('sort-by');
            const currentOption = sortDropdown ? sortDropdown.value : 'relevance';
            
            // Redraw the graph with the current option
            if (document.getElementById('price-history-graph')) {
                updatePriceHistoryGraph(currentOption);
            }
        }, 300);
    });
});

// CSS is already included in the HTML file