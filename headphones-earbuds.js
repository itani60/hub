/**
 * Headphones & Earbuds Products Data and Display Functions
 * This file contains mock data for headphones and earbuds products
 * and functions to display, filter, and sort them.
 */

// Mock data for headphones and earbuds products
const headphonesEarbudsProducts = [
    // Headphones
    {
        id: "hp001",
        name: "Sony WH-1000XM5",
        type: "headphones",
        brand: "Sony",
        price: 6999.99,
        originalPrice: 7999.99,
        description: "Industry-leading noise cancellation with exceptional sound quality and comfort.",
        features: [
            "Industry-leading noise cancellation",
            "30-hour battery life",
            "LDAC high-resolution audio",
            "Speak-to-chat technology",
            "Adaptive sound control"
        ],
        specifications: {
            type: "Over-ear",
            connectivity: "Bluetooth 5.2, 3.5mm wired",
            batteryLife: "30 hours (with ANC)",
            weight: "250g",
            color: "Black"
        },
        image: "https://assets.kogan.com/files/product/2022/KHPSONWH1XM5BA/KHPSONWH1XM5BA_1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753"
    },
    {
        id: "hp002",
        name: "Bose QuietComfort 45",
        type: "headphones",
        brand: "Bose",
        price: 5499.99,
        originalPrice: 5999.99,
        description: "Legendary noise cancellation with balanced sound and all-day comfort.",
        features: [
            "World-class noise cancellation",
            "24-hour battery life",
            "Aware Mode for environmental awareness",
            "Comfortable and lightweight design",
            "Multi-point connection"
        ],
        specifications: {
            type: "Over-ear",
            connectivity: "Bluetooth 5.1, 3.5mm wired",
            batteryLife: "24 hours",
            weight: "240g",
            color: "White"
        },
        image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_TRIPLE_MIDNIGHT_HERO_FLOATING.png/jcr:content/renditions/cq5dam.web.1280.1280.png"
    },
    {
        id: "hp003",
        name: "Sennheiser HD 660S",
        type: "headphones",
        brand: "Sennheiser",
        price: 7299.99,
        originalPrice: 7999.99,
        description: "Audiophile-grade open-back headphones with exceptional detail and clarity.",
        features: [
            "Open-back design for natural soundstage",
            "150-ohm impedance for audiophile amplifiers",
            "Handcrafted in Germany",
            "Detachable cable",
            "Velour ear pads for extended comfort"
        ],
        specifications: {
            type: "Open-back, over-ear",
            connectivity: "Wired (6.3mm and 3.5mm)",
            impedance: "150 ohms",
            weight: "260g",
            color: "Black"
        },
        image: "https://assets.sennheiser.com/img/25514/x1_desktop_HD_660S_Isofront_Sennheiser_01.jpg"
    },
    {
        id: "hp004",
        name: "JBL Live 660NC",
        type: "headphones",
        brand: "JBL",
        price: 2499.99,
        originalPrice: 2999.99,
        description: "Wireless over-ear headphones with active noise cancellation and powerful JBL sound.",
        features: [
            "Active noise cancellation",
            "50-hour battery life",
            "Voice assistant compatible",
            "Ambient Aware and TalkThru technologies",
            "Foldable design"
        ],
        specifications: {
            type: "Over-ear",
            connectivity: "Bluetooth 5.0, 3.5mm wired",
            batteryLife: "50 hours (without ANC), 40 hours (with ANC)",
            weight: "265g",
            color: "Blue"
        },
        image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5e9e94c5/JBL_LIVE_660NC_Product%20Image_Hero_Blue.png?sw=535&sh=535"
    },
    {
        id: "hp005",
        name: "Audio-Technica ATH-M50x",
        type: "headphones",
        brand: "Audio-Technica",
        price: 3299.99,
        originalPrice: 3599.99,
        description: "Professional studio monitor headphones with critically acclaimed sonic performance.",
        features: [
            "Professional-grade sound",
            "90-degree swiveling earcups",
            "Collapsible design for portability",
            "Detachable cables included",
            "Exceptional clarity throughout frequency range"
        ],
        specifications: {
            type: "Closed-back, over-ear",
            connectivity: "Wired (3.5mm with 6.3mm adapter)",
            impedance: "38 ohms",
            weight: "285g",
            color: "Black"
        },
        image: "https://www.audio-technica.com/media/catalog/product/cache/aee8318de9d8e245b6b604605849c7dc/a/t/ath-m50x_1_1.png"
    },

    // Earbuds
    {
        id: "eb001",
        name: "Apple AirPods Pro 2",
        type: "earbuds",
        brand: "Apple",
        price: 4999.99,
        originalPrice: 5499.99,
        description: "Active noise cancellation, transparency mode, and spatial audio with dynamic head tracking.",
        features: [
            "Active Noise Cancellation",
            "Adaptive Transparency mode",
            "Spatial Audio with dynamic head tracking",
            "Up to 6 hours of listening time",
            "MagSafe Charging Case with speaker and lanyard loop"
        ],
        specifications: {
            type: "In-ear",
            connectivity: "Bluetooth 5.3",
            batteryLife: "6 hours (earbuds), 30 hours (with case)",
            weight: "5.3g per earbud",
            color: "White"
        },
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361"
    },
    {
        id: "eb002",
        name: "Samsung Galaxy Buds 2 Pro",
        type: "earbuds",
        brand: "Samsung",
        price: 3999.99,
        originalPrice: 4499.99,
        description: "Samsung's premium earbuds with intelligent ANC and Hi-Fi sound quality.",
        features: [
            "Intelligent Active Noise Cancellation",
            "360 Audio with Direct Multi-Channel",
            "24-bit Hi-Fi sound",
            "IPX7 water resistance",
            "Auto Switch between Samsung devices"
        ],
        specifications: {
            type: "In-ear",
            connectivity: "Bluetooth 5.3",
            batteryLife: "5 hours (with ANC), 8 hours (without ANC)",
            weight: "5.5g per earbud",
            color: "Bora Purple"
        },
        image: "https://images.samsung.com/is/image/samsung/p6pim/za/2208/gallery/za-galaxy-buds2-pro-r510-sm-r510nlvaxfa-533186121?$650_519_PNG$"
    },
    {
        id: "eb003",
        name: "Sony WF-1000XM5",
        type: "earbuds",
        brand: "Sony",
        price: 4799.99,
        originalPrice: 5299.99,
        description: "Sony's flagship noise-cancelling earbuds with exceptional sound quality and comfort.",
        features: [
            "Industry-leading noise cancellation",
            "8-hour battery life with ANC",
            "LDAC high-resolution audio",
            "Speak-to-chat technology",
            "Wireless charging case"
        ],
        specifications: {
            type: "In-ear",
            connectivity: "Bluetooth 5.3",
            batteryLife: "8 hours (with ANC), 12 hours (without ANC)",
            weight: "5.9g per earbud",
            color: "Black"
        },
        image: "https://www.sony.co.za/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660"
    },
    {
        id: "eb004",
        name: "Jabra Elite 7 Pro",
        type: "earbuds",
        brand: "Jabra",
        price: 3499.99,
        originalPrice: 3999.99,
        description: "Premium earbuds with MultiSensor Voice technology for crystal-clear calls.",
        features: [
            "MultiSensor Voice technology",
            "Adjustable Active Noise Cancellation",
            "IP57 dust and water resistance",
            "8-hour battery life",
            "Wireless charging case"
        ],
        specifications: {
            type: "In-ear",
            connectivity: "Bluetooth 5.2",
            batteryLife: "8 hours (earbuds), 30 hours (with case)",
            weight: "5.4g per earbud",
            color: "Titanium Black"
        },
        image: "https://www.jabra.co.za/-/media/Images/Products/Jabra-Elite-7-Pro/Product-view/Jabra-Elite-7-Pro-Titanium-Black-Product-view-Front.png"
    },
    {
        id: "eb005",
        name: "Nothing Ear (2)",
        type: "earbuds",
        brand: "Nothing",
        price: 2999.99,
        originalPrice: 3499.99,
        description: "Transparent design earbuds with personalized ANC and Hi-Res audio certification.",
        features: [
            "Personalized Active Noise Cancellation",
            "Hi-Res Audio certification",
            "Dual Connection",
            "Transparent design",
            "11.6mm custom driver"
        ],
        specifications: {
            type: "In-ear",
            connectivity: "Bluetooth 5.3",
            batteryLife: "6 hours (earbuds), 36 hours (with case)",
            weight: "4.5g per earbud",
            color: "White/Transparent"
        },
        image: "https://za.nothing.tech/cdn/shop/files/Ear_2_PDP_Desktop_1_1512x.jpg?v=1679386191"
    },

];

/**
 * Display headphones and earbuds products based on type filter
 * @param {string} type - The product type to filter by (headphones, earbuds, or null for all)
 * @param {number} page - The current page number
 * @param {string} sortBy - The sorting criteria
 */
function displayHeadphonesEarbudsProducts(type = null, page = 1, sortBy = "relevance") {
    // Get the products grid element
    const productsGrid = document.getElementById("products-grid");
    
    // Clear the grid
    productsGrid.innerHTML = "";
    
    // Filter products by type if specified
    let filteredProducts = headphonesEarbudsProducts;
    if (type) {
        filteredProducts = headphonesEarbudsProducts.filter(product => product.type === type);
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
    
    card.innerHTML = `
        <a href="headphones-earbuds-product.html?id=${product.id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    <span>${product.specifications ? (product.specifications.type || '') : ''}</span>
                    <span>${product.specifications ? (product.specifications.connectivity || '') : ''}</span>
                </div>
                <div class="product-price">
                    <span class="current-price">R${product.price.toLocaleString()}</span>
                    ${product.originalPrice > product.price ? `<span class="original-price">R${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="product-retailers">
                    <span>2 retailers</span>
                </div>
            </div>
        </a>
        <div class="product-buttons">
            <button class="compare-button" data-product-id="${product.id}">Compare</button>
            <button class="wishlist-button" data-product-id="${product.id}">Add to Wishlist</button>
        </div>
    `;
    
    // Add event listener for compare button
    const compareButton = card.querySelector('.compare-button');
    compareButton.addEventListener('click', function () {
        window.location.href = `headphones-earbuds-info.html?id=${product.id}`;
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
                    url: `headphones-earbuds-info.html?id=${product.id}`
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
            // Default is relevance, no sorting needed
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
            displayHeadphonesEarbudsProducts(type, currentPage - 1, sortBy);
        }
    };
    
    // Next button
    const nextButton = paginationElement.querySelector('[data-page="next"]');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            displayHeadphonesEarbudsProducts(type, currentPage + 1, sortBy);
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
        firstPageBtn.onclick = () => displayHeadphonesEarbudsProducts(type, 1, sortBy);
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
        pageBtn.onclick = () => displayHeadphonesEarbudsProducts(type, i, sortBy);
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
        lastPageBtn.onclick = () => displayHeadphonesEarbudsProducts(type, totalPages, sortBy);
        pagesContainer.appendChild(lastPageBtn);
    }
}

/**
 * Navigate to headphones and earbuds page with type filter
 * @param {string} type - The product type (headphones, earbuds)
 */
function navigateToHeadphonesEarbudsByType(type) {
    // Close the sidebar
    closeSidebar();
    
    // Navigate to headphones-earbuds page with type parameter
    window.location.href = `headphones-earbuds.html?type=${type}`;
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
    let filteredProducts = [...headphonesEarbudsProducts];
    
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
                    // For "8000+" price range
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
    displayHeadphonesEarbudsProducts(typeParam, 1, "relevance");
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Hide clear all button
    document.getElementById('clear-filters').style.display = 'none';
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get("type");
    
    // Set up sort dropdown
    const sortBySelect = document.getElementById("sort-by");
    sortBySelect.addEventListener("change", function() {
        displayHeadphonesEarbudsProducts(typeParam, 1, this.value);
    });
    
    // Display products
    displayHeadphonesEarbudsProducts(typeParam, 1, "relevance");
    
    // Update page title based on type
    if (typeParam) {
        const pageTitle = document.querySelector(".section-title");
        if (pageTitle) {
            let titleText = "Headphones & Earbuds";
            
            switch (typeParam) {
                case "headphones":
                    titleText = "Headphones";
                    break;
                case "earbuds":
                    titleText = "Earbuds";
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

// Make the function available globally
window.navigateToHeadphonesEarbudsByType = navigateToHeadphonesEarbudsByType;