/**
 * Data Storage Products Data and Display Functions
 */

// Data for storage products
const dataStorageProducts = [
    // Memory Cards
    {
        id: "mc001",
        name: "Lexar Professional 633x 32GB SDHC UHS-I Card",
        type: "memory_cards",
        brand: "Lexar",
        capacity: "32GB",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/61GJ-FCJRRL._AC_SL1500_.jpg"
    },
    {
        id: "mc002",
        name: "Samsung EVO Plus 64GB microSDXC UHS-I Card",
        type: "memory_cards",
        brand: "Samsung",
        capacity: "64GB",
        price: 249.99,
        image: "https://m.media-amazon.com/images/I/81axmUuRHrL._AC_SL1500_.jpg"
    },
    {
        id: "mc003",
        name: "SanDisk Extreme Pro 128GB SDXC UHS-I Card",
        type: "memory_cards",
        brand: "SanDisk",
        capacity: "128GB",
        price: 499.99,
        image: "https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_SL1000_.jpg"
    },
    {
        id: "mc004",
        name: "Kioxia Exceria Plus 256GB microSDXC Card",
        type: "memory_cards",
        brand: "Kioxia",
        capacity: "256GB",
        price: 899.99,
        image: "https://m.media-amazon.com/images/I/71jzZLdALmL._AC_SL1500_.jpg"
    },
    {
        id: "mc005",
        name: "Samsung PRO Plus 512GB SDXC UHS-I Card",
        type: "memory_cards",
        brand: "Samsung",
        capacity: "512GB",
        price: 1499.99,
        image: "https://m.media-amazon.com/images/I/71LfnkRgZ4L._AC_SL1500_.jpg"
    },
    
    // USB Flash Drives
    {
        id: "usb001",
        name: "Lexar JumpDrive S75 16GB USB 3.0 Flash Drive",
        type: "usb_flash_drives",
        brand: "Lexar",
        capacity: "16GB",
        price: 129.99,
        image: "https://m.media-amazon.com/images/I/71eHG3p9G4L._AC_SL1500_.jpg"
    },
    {
        id: "usb002",
        name: "SanDisk Ultra 32GB USB 3.0 Flash Drive",
        type: "usb_flash_drives",
        brand: "SanDisk",
        capacity: "32GB",
        price: 179.99,
        image: "https://m.media-amazon.com/images/I/71bV203ASmL._AC_SL1500_.jpg"
    },
    {
        id: "usb003",
        name: "Kioxia TransMemory U301 64GB USB 3.0 Flash Drive",
        type: "usb_flash_drives",
        brand: "Kioxia",
        capacity: "64GB",
        price: 249.99,
        image: "https://m.media-amazon.com/images/I/61QpHRdXEhL._AC_SL1500_.jpg"
    },
    {
        id: "usb004",
        name: "Lexar JumpDrive P20 128GB USB 3.0 Flash Drive",
        type: "usb_flash_drives",
        brand: "Lexar",
        capacity: "128GB",
        price: 499.99,
        image: "https://m.media-amazon.com/images/I/61QNGcvxHtL._AC_SL1500_.jpg"
    },
    {
        id: "usb005",
        name: "SanDisk Extreme PRO 256GB USB 3.2 Flash Drive",
        type: "usb_flash_drives",
        brand: "SanDisk",
        capacity: "256GB",
        price: 899.99,
        image: "https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_SL1500_.jpg"
    },
    
    // External Drives
    {
        id: "ext001",
        name: "Seagate Portable 1TB External Hard Drive",
        type: "external_drives",
        brand: "Seagate",
        capacity: "1TB",
        drive_type: "hdd",
        price: 899.99,
        image: "https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"
    },
    {
        id: "ext002",
        name: "Western Digital My Passport 2TB External Hard Drive",
        type: "external_drives",
        brand: "Western Digital",
        capacity: "2TB",
        drive_type: "hdd",
        price: 1299.99,
        image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg"
    },
    {
        id: "ext003",
        name: "Samsung T7 500GB Portable SSD",
        type: "external_drives",
        brand: "Samsung",
        capacity: "500GB",
        drive_type: "ssd",
        price: 1499.99,
        image: "https://m.media-amazon.com/images/I/81aAhbPsGlL._AC_SL1500_.jpg"
    },
    {
        id: "ext004",
        name: "Toshiba Canvio Basics 4TB Portable External Hard Drive",
        type: "external_drives",
        brand: "Toshiba",
        capacity: "4TB",
        drive_type: "hdd",
        price: 1899.99,
        image: "https://m.media-amazon.com/images/I/71GbgG21XaL._AC_SL1500_.jpg"
    },
    {
        id: "ext005",
        name: "SanDisk Extreme Portable SSD 1TB",
        type: "external_drives",
        brand: "SanDisk",
        capacity: "1TB",
        drive_type: "ssd",
        price: 2499.99,
        image: "https://m.media-amazon.com/images/I/81oMdVQgDqL._AC_SL1500_.jpg"
    },
    {
        id: "ext006",
        name: "Western Digital Elements 8TB Desktop Hard Drive",
        type: "external_drives",
        brand: "Western Digital",
        capacity: "8TB",
        drive_type: "hdd",
        price: 3499.99,
        image: "https://m.media-amazon.com/images/I/71QZ+3aGXaL._AC_SL1500_.jpg"
    },
    {
        id: "ext007",
        name: "Samsung T7 Touch 2TB Portable SSD",
        type: "external_drives",
        brand: "Samsung",
        capacity: "2TB",
        drive_type: "ssd",
        price: 3999.99,
        image: "https://m.media-amazon.com/images/I/81aAhbPsGlL._AC_SL1500_.jpg"
    },
    {
        id: "ext008",
        name: "Seagate Expansion 10TB Desktop External Hard Drive",
        type: "external_drives",
        brand: "Seagate",
        capacity: "10TB",
        drive_type: "hdd",
        price: 4999.99,
        image: "https://m.media-amazon.com/images/I/71LZP3LyFYL._AC_SL1500_.jpg"
    }
];

// Display data storage products
function displayDataStorageProducts(type = null, page = 1, sortBy = "relevance") {
    const productsGrid = document.getElementById("products-grid");
    productsGrid.innerHTML = "";
    
    let filteredProducts = dataStorageProducts;
    if (type) {
        // Handle type parameter mismatches between HTML and JS
        let searchType = type;
        if (type === 'external_drivers') {
            searchType = 'external_drives';
        } else if (type === 'usb_drivers') {
            searchType = 'usb_flash_drives';
        }
        
        filteredProducts = dataStorageProducts.filter(product => product.type === searchType);
    }
    
    filteredProducts = sortProducts(filteredProducts, sortBy);
    
    const productsPerPage = 9;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    paginatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Initialize price alerts after products are displayed
    if (typeof initializePriceAlerts === 'function') {
        initializePriceAlerts();
    }
    
    updatePagination(page, totalPages, type, sortBy);
}

// Create product card
function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-product-id", product.id);
    
    let specsText = product.capacity;
    if (product.type === 'external_drives' && product.drive_type) {
        specsText += ` ${product.drive_type.toUpperCase()}`;
    }
    
    card.innerHTML = `
        <div class="product-content">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    <span>${specsText}</span>
                </div>
                <div class="product-price">
                    <span class="current-price">R${product.price.toLocaleString()}</span>
                </div>
                <div class="product-retailers">
                    <span>2 retailers</span>
                </div>
            </div>
        </div>
        <div class="price-alert-bell" data-product-id="${product.id}" data-product-price="${product.price}" onclick="togglePriceAlert('${product.id}', ${product.price}, '${product.name}', '${product.image}')">
            <i class="fas fa-bell"></i>
        </div>
        <div class="product-buttons">
            <button class="compare-button" data-product-id="${product.id}">Compare</button>
            <button class="wishlist-button" data-product-id="${product.id}">Add to Wishlist</button>
        </div>
    `;
    
    return card;
}

// Sort products
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
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
    }
    
    return sortedProducts;
}

// Update pagination
function updatePagination(currentPage, totalPages, type, sortBy) {
    const paginationElement = document.getElementById("pagination");
    const pagesContainer = paginationElement.querySelector(".pages");
    pagesContainer.innerHTML = "";
    
    const prevButton = paginationElement.querySelector('[data-page="prev"]');
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            displayDataStorageProducts(type, currentPage - 1, sortBy);
        }
    };
    
    const nextButton = paginationElement.querySelector('[data-page="next"]');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            displayDataStorageProducts(type, currentPage + 1, sortBy);
        }
    };
    
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.className = `page-number ${i === currentPage ? "active" : ""}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => displayDataStorageProducts(type, i, sortBy);
        pagesContainer.appendChild(pageBtn);
    }
}

// Navigate to data storage by type
function navigateToDataStorageByType(type) {
    if (typeof closeSidebar === 'function') {
        closeSidebar();
    }
    window.location.href = `Data-storage.html?type=${type}`;
}

// Update filter panels
function updateFilterPanels(type) {
    // Brand panel
    const brandPanel = document.getElementById('brand-panel');
    if (brandPanel) {
        const brandOptions = brandPanel.querySelector('.filter-options');
        brandOptions.innerHTML = '<label class="filter-option"><input type="checkbox" name="brand" value="all" checked> All Brands</label>';
        
        if (type === 'memory_cards') {
            brandOptions.innerHTML += `
                <label class="filter-option"><input type="checkbox" name="brand" value="lexar"> Lexar</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="samsung"> Samsung</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="sandisk"> SanDisk</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="kioxia"> Kioxia</label>
            `;
            
            // Update panel title
            const panelTitle = brandPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'Memory Card Brands';
            }
        } else if (type === 'usb_flash_drives') {
            brandOptions.innerHTML += `
                <label class="filter-option"><input type="checkbox" name="brand" value="lexar"> Lexar</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="sandisk"> SanDisk</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="kioxia"> Kioxia</label>
            `;
            
            // Update panel title
            const panelTitle = brandPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'USB Drive Brands';
            }
        } else if (type === 'external_drives') {
            brandOptions.innerHTML += `
                <label class="filter-option"><input type="checkbox" name="brand" value="seagate"> Seagate</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="western-digital"> Western Digital</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="samsung"> Samsung</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="toshiba"> Toshiba</label>
                <label class="filter-option"><input type="checkbox" name="brand" value="sandisk"> SanDisk</label>
            `;
            
            // Update panel title
            const panelTitle = brandPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'External Drive Brands';
            }
        }
    }
    
    // Capacity panel
    const capacityPanel = document.getElementById('capacity-panel');
    if (capacityPanel) {
        const capacityOptions = capacityPanel.querySelector('.filter-options');
        capacityOptions.innerHTML = '<label class="filter-option"><input type="checkbox" name="capacity" value="all" checked> All Capacities</label>';
        
        if (type === 'memory_cards') {
            capacityOptions.innerHTML += `
                <label class="filter-option"><input type="checkbox" name="capacity" value="32GB"> 32GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="64GB"> 64GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="128GB"> 128GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="256GB"> 256GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="512GB"> 512GB</label>
            `;
            
            // Update panel title
            const panelTitle = capacityPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'Memory Card Capacity';
            }
        } else if (type === 'usb_flash_drives') {
            capacityOptions.innerHTML += `
                <label class="filter-option"><input type="checkbox" name="capacity" value="16GB"> 16GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="32GB"> 32GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="64GB"> 64GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="128GB"> 128GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="256GB"> 256GB</label>
            `;
            
            // Update panel title
            const panelTitle = capacityPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'USB Drive Capacity';
            }
        } else if (type === 'external_drives') {
            capacityOptions.innerHTML += `
                <label class="filter-option"><input type="checkbox" name="capacity" value="500GB"> 500GB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="1TB"> 1TB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="2TB"> 2TB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="4TB"> 4TB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="8TB"> 8TB</label>
                <label class="filter-option"><input type="checkbox" name="capacity" value="10TB"> 10TB</label>
            `;
            
            // Update panel title
            const panelTitle = capacityPanel.querySelector('h3');
            if (panelTitle) {
                panelTitle.textContent = 'External Drive Capacity';
            }
        }
    }
    
    // Price panel
    const pricePanel = document.getElementById('price-panel');
    if (pricePanel) {
        const priceOptions = pricePanel.querySelector('.filter-options');
        
        if (type === 'memory_cards' || type === 'usb_flash_drives') {
            priceOptions.innerHTML = `
                <label class="filter-option"><input type="checkbox" name="price" value="0-200"> Under R200</label>
                <label class="filter-option"><input type="checkbox" name="price" value="200-500"> R200 - R500</label>
                <label class="filter-option"><input type="checkbox" name="price" value="500-1000"> R500 - R1,000</label>
                <label class="filter-option"><input type="checkbox" name="price" value="1000+"> Over R1,000</label>
            `;
        } else if (type === 'external_drives') {
            priceOptions.innerHTML = `
                <label class="filter-option"><input type="checkbox" name="price" value="0-1000"> Under R1,000</label>
                <label class="filter-option"><input type="checkbox" name="price" value="1000-2000"> R1,000 - R2,000</label>
                <label class="filter-option"><input type="checkbox" name="price" value="2000-3000"> R2,000 - R3,000</label>
                <label class="filter-option"><input type="checkbox" name="price" value="3000-5000"> R3,000 - R5,000</label>
                <label class="filter-option"><input type="checkbox" name="price" value="5000+"> Over R5,000</label>
            `;
        }
    }
    
    // Show/hide drive type button for external drives
    const driveTypeButton = document.getElementById('drive-type-button');
    
    if (type === 'external_drives') {
        // Show drive type button for external drives
        if (driveTypeButton) {
            driveTypeButton.style.display = 'flex';
        }
    } else {
        // Hide drive type button for other storage types
        if (driveTypeButton) {
            driveTypeButton.style.display = 'none';
        }
        
        // Make sure the drive type panel is closed when switching to other storage types
        const driveTypePanel = document.getElementById('drive-type-panel');
        if (driveTypePanel && driveTypePanel.classList.contains('active')) {
            driveTypePanel.classList.remove('active');
        }
    }
}

/**
 * Apply filters to products
 */
function applyFilters() {
    // Get the type parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    let typeParam = urlParams.get("type");
    
    // Convert type parameter to match the internal types
    if (typeParam === 'external_drivers') {
        typeParam = 'external_drives';
    } else if (typeParam === 'usb_drivers') {
        typeParam = 'usb_flash_drives';
    }
    
    // Get selected brands
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const selectedBrands = Array.from(brandCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected capacities
    const capacityCheckboxes = document.querySelectorAll('input[name="capacity"]');
    const selectedCapacities = Array.from(capacityCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected drive types (for external drives)
    const driveTypeCheckboxes = document.querySelectorAll('input[name="drive_type"]');
    const selectedDriveTypes = Array.from(driveTypeCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected price ranges
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    const selectedPriceRanges = Array.from(priceCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Filter products
    let filteredProducts = [...dataStorageProducts];
    
    // If type filter is applied from URL, apply it first
    if (typeParam) {
        filteredProducts = filteredProducts.filter(product => product.type === typeParam);
    }
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productBrand = product.brand?.toLowerCase() || '';
            return selectedBrands.some(brand => productBrand.toLowerCase().includes(brand.toLowerCase()));
        });
    }
    
    // Apply capacity filter
    if (selectedCapacities.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return selectedCapacities.includes(product.capacity);
        });
    }
    
    // Apply drive type filter (for external drives only)
    if (selectedDriveTypes.length > 0 && typeParam === 'external_drives') {
        filteredProducts = filteredProducts.filter(product => {
            return selectedDriveTypes.includes(product.drive_type.toLowerCase());
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
    
    // Initialize price alerts after filtered products are displayed
    if (typeof initializePriceAlerts === 'function') {
        initializePriceAlerts();
    }
    
    // Update pagination
    const urlParams = new URLSearchParams(window.location.search);
    let typeParam = urlParams.get("type");
    if (typeParam === 'external_drivers') {
        typeParam = 'external_drives';
    } else if (typeParam === 'usb_drivers') {
        typeParam = 'usb_flash_drives';
    }
    
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
    const anyCapacitySelected = document.querySelectorAll('input[name="capacity"]:checked:not([value="all"])').length > 0;
    const anyDriveTypeSelected = document.querySelectorAll('input[name="drive_type"]:checked:not([value="all"])').length > 0;
    const anyPriceSelected = document.querySelectorAll('input[name="price"]:checked').length > 0;
    
    // Show/hide clear all button
    if (anyBrandSelected || anyCapacitySelected || anyDriveTypeSelected || anyPriceSelected) {
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
    
    // Reset capacity checkboxes
    document.querySelectorAll('input[name="capacity"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset drive type checkboxes
    document.querySelectorAll('input[name="drive_type"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset price checkboxes
    document.querySelectorAll('input[name="price"]').forEach(input => {
        input.checked = false;
    });
    
    // Get the type parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    let typeParam = urlParams.get("type");
    
    // Convert type parameter to match the internal types
    if (typeParam === 'external_drivers') {
        typeParam = 'external_drives';
    } else if (typeParam === 'usb_drivers') {
        typeParam = 'usb_flash_drives';
    }
    
    // Display products with original filters
    displayDataStorageProducts(typeParam, 1, "relevance");
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Hide clear all button
    document.getElementById('clear-filters').style.display = 'none';
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

// Initialize page
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get("type");
    
    const sortBySelect = document.getElementById("sort-by");
    if (sortBySelect) {
        sortBySelect.addEventListener("change", function() {
            displayDataStorageProducts(typeParam, 1, this.value);
        });
    }
    
    displayDataStorageProducts(typeParam, 1, "relevance");
    
    if (typeParam) {
        const pageTitle = document.querySelector(".section-title");
        if (pageTitle) {
            let titleText = "Data Storage";
            
            switch (typeParam) {
                case "memory_cards":
                    titleText = "Memory Cards";
                    break;
                case "usb_flash_drives":
                case "usb_drivers":
                    titleText = "USB Flash Drives";
                    break;
                case "external_drives":
                case "external_drivers":
                    titleText = "External Drives";
                    break;
            }
            
            pageTitle.textContent = titleText;
        }
    }
    
    // Convert type parameter to match the internal types
    let internalType = typeParam;
    if (typeParam === 'external_drivers') {
        internalType = 'external_drives';
    } else if (typeParam === 'usb_drivers') {
        internalType = 'usb_flash_drives';
    }
    
    updateFilterPanels(internalType);
    
    // Initialize price alerts when the page loads
    if (typeof initializePriceAlerts === 'function') {
        initializePriceAlerts();
    }
    
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        if (button.id !== 'clear-filters') {
            const panelId = button.getAttribute('data-panel');
            button.onclick = function() {
                toggleFilterPanel(panelId);
            };
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

// Toggle filter panel
function toggleFilterPanel(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    
    document.querySelectorAll('.filter-panel').forEach(p => {
        if (p.id !== panelId && p.classList.contains('active')) {
            p.classList.remove('active');
        }
    });
    
    panel.classList.toggle('active');
}

// Make functions available globally
window.navigateToDataStorageByType = navigateToDataStorageByType;
window.toggleFilterPanel = toggleFilterPanel;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;
window.closeAllFilterPanels = closeAllFilterPanels;