const API_URL = 'https://xf9zlapr5e.execute-api.af-south-1.amazonaws.com/laptops';

let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
const productsPerPage = 14;
let currentProcessorFilter = null; // Track current processor filter
let currentOSContext = null; // Track current OS context (windows, macos, chromeos)

// DOM elements
const productsGrid = document.getElementById('products-grid');
const paginationContainer = document.getElementById('pagination');
const sortBySelect = document.getElementById('sort-by');
const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
const processorCheckboxes = document.querySelectorAll('input[name="processor"]');
const osCheckboxes = document.querySelectorAll('input[name="os"]'); // Keep for backward compatibility
const priceCheckboxes = document.querySelectorAll('input[name="price"]');
const clearFiltersButton = document.getElementById('clear-filters');
const applyFiltersButtons = document.querySelectorAll('.apply-filters');
const cancelFiltersButtons = document.querySelectorAll('.cancel-filters');

// No wishlist functionality in this file

// Mock data for testing - hardcoded by Processor type
const mockLaptops = {
    intel: [
        {
            product_id: "intel1",
            brand: "Dell",
            model: "XPS 15",
            imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4000&hei=2800&qlt=100,0&resMode=sharp2&size=4000,2800",
            offers: [
                { price: 24999, originalPrice: 27999 },
                { price: 25499, originalPrice: 27999 }
            ],
            specs: {
                Performance: {
                    Ram: "16GB",
                    Storage: "1TB",
                    Processor: "Intel Core i7"
                },
                Os: {
                    "Operating System": "Windows 11"
                }
            }
        },
        {
            product_id: "intel2",
            brand: "HP",
            model: "Spectre x360",
            imageUrl: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08164796.png",
            offers: [
                { price: 19999, originalPrice: 21999 },
                { price: 20499, originalPrice: 21999 }
            ],
            specs: {
                Performance: {
                    Ram: "16GB",
                    Storage: "512GB",
                    Processor: "Intel Core i5"
                },
                Os: {
                    "Operating System": "Windows 11"
                }
            }
        },
        {
            product_id: "intel3",
            brand: "Lenovo",
            model: "ThinkPad X1 Carbon",
            imageUrl: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjYwNDI5fGltYWdlL3BuZ3xoMDgvaGQ5LzEzMTMxNjQ0NTc3ODIyLnBuZ3w0ZjRlOTZlYmJkMzg3YzFkNjY4ZDEyYmMzZDgxMzc1NjA0ZjIxNzBjZmJmNmUyOWRhOGVkYjkwZjE5OTdjMTRj/lenovo-laptop-thinkpad-x1-carbon-gen-10-14-hero.png",
            offers: [
                { price: 22999, originalPrice: 24999 },
                { price: 23499, originalPrice: 24999 }
            ],
            specs: {
                Performance: {
                    Ram: "16GB",
                    Storage: "1TB",
                    Processor: "Intel Core i9"
                },
                Os: {
                    "Operating System": "Windows 11"
                }
            }
        }
    ],
    amd: [
        {
            product_id: "amd1",
            brand: "Asus",
            model: "ROG Zephyrus G14",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/4CFCB9B6-9D29-4121-9895-D1D27B1D7252/w1000/h732",
            offers: [
                { price: 21999, originalPrice: 23999 },
                { price: 22499, originalPrice: 23999 }
            ],
            specs: {
                Performance: {
                    Ram: "16GB",
                    Storage: "1TB",
                    Processor: "AMD Ryzen 9"
                },
                Os: {
                    "Operating System": "Windows 11"
                }
            }
        },
        {
            product_id: "amd2",
            brand: "HP",
            model: "Pavilion Gaming",
            imageUrl: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06575286.png",
            offers: [
                { price: 15999, originalPrice: 17999 },
                { price: 16499, originalPrice: 17999 }
            ],
            specs: {
                Performance: {
                    Ram: "8GB",
                    Storage: "512GB",
                    Processor: "AMD Ryzen 5"
                },
                Os: {
                    "Operating System": "Windows 11"
                }
            }
        },
        {
            product_id: "amd3",
            brand: "Lenovo",
            model: "Legion 5",
            imageUrl: "https://p2-ofp.static.pub/fes/cms/2022/04/26/dx2bj6c5oy8l1a5wgzw9o9t1nkzrju082283.png",
            offers: [
                { price: 18999, originalPrice: 20999 },
                { price: 19499, originalPrice: 20999 }
            ],
            specs: {
                Performance: {
                    Ram: "16GB",
                    Storage: "1TB",
                    Processor: "AMD Ryzen 7"
                },
                Os: {
                    "Operating System": "Windows 11"
                }
            }
        }
    ],
    apple: [
        {
            product_id: "apple1",
            brand: "Apple",
            model: "MacBook Pro 16",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673202",
            offers: [
                { price: 32999, originalPrice: 35999 },
                { price: 33499, originalPrice: 35999 }
            ],
            specs: {
                Performance: {
                    Ram: "16GB",
                    Storage: "512GB",
                    Processor: "Apple M2 Pro"
                },
                Os: {
                    "Operating System": "macOS"
                }
            }
        },
        {
            product_id: "apple2",
            brand: "Apple",
            model: "MacBook Air M2",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
            offers: [
                { price: 19999, originalPrice: 21999 },
                { price: 20499, originalPrice: 21999 }
            ],
            specs: {
                Performance: {
                    Ram: "8GB",
                    Storage: "256GB",
                    Processor: "Apple M2"
                },
                Os: {
                    "Operating System": "macOS"
                }
            }
        },
        {
            product_id: "apple3",
            brand: "Apple",
            model: "MacBook Pro 14",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229",
            offers: [
                { price: 24999, originalPrice: 26999 },
                { price: 25499, originalPrice: 26999 }
            ],
            specs: {
                Performance: {
                    Ram: "16GB",
                    Storage: "512GB",
                    Processor: "Apple M2 Max"
                },
                Os: {
                    "Operating System": "macOS"
                }
            }
        }
    ]
};

// Function to directly load laptops by Processor type
function filterByProcessor(processorType, osContext = null) {
    showLoading();
    
    // Update current processor filter and OS context
    currentProcessorFilter = processorType;
    if (osContext) {
        currentOSContext = osContext;
        
        // Update URL with OS context for page refresh persistence
        const url = new URL(window.location.href);
        url.searchParams.set('os', osContext);
        window.history.replaceState({}, '', url);
    }
    
    // Directly load the laptops for this processor type from our hardcoded data
    if (mockLaptops[processorType]) {
        // Set allProducts to only include laptops of the selected processor type
        allProducts = mockLaptops[processorType];
        
        // Filter by OS context if provided
        if (currentOSContext) {
            allProducts = allProducts.filter(product => {
                if (product.specs && product.specs.Os && product.specs.Os['Operating System']) {
                    const os = product.specs.Os['Operating System'].toLowerCase();
                    
                    if (currentOSContext === 'windows') {
                        return os.includes('windows');
                    } else if (currentOSContext === 'macos') {
                        return os.includes('macos');
                    } else if (currentOSContext === 'chromeos') {
                        return os.includes('chrome');
                    }
                }
                return true; // If no OS info, include by default
            });
        }
        
        filteredProducts = [...allProducts];
        
        // Update page title to indicate current filter
        let processorName;
        if (processorType === 'intel') {
            processorName = 'Intel';
        } else if (processorType === 'amd') {
            processorName = 'AMD';
        } else if (processorType === 'apple') {
            processorName = 'Apple Silicon';
        } else {
            processorName = processorType.charAt(0).toUpperCase() + processorType.slice(1);
        }
        
        // Set title based on OS context
        let titleText = `${processorName} Laptops`;
        if (currentOSContext) {
            if (currentOSContext === 'windows') {
                titleText = 'Windows Laptops';
            } else if (currentOSContext === 'macos') {
                titleText = 'MacBook';
            } else if (currentOSContext === 'chromeos') {
                titleText = 'Chromebook';
            }
        }
        
        document.querySelector('.section-title').textContent = titleText;
        
        // Update processor filter panel to show only relevant processors for current OS
        updateProcessorFilterForOS(currentOSContext);
        
        // Update brand filter panel based on OS context
        updateBrandFilterForOS(currentOSContext);
        
        // Display the products
        sortProducts(sortBySelect.value);
        displayProducts();
        setupPagination();
    } else {
        console.error(`No data available for processor type: ${processorType}`);
        allProducts = [];
        filteredProducts = [];
        displayProducts();
    }
    
    // Close sidebar on mobile
    if (window.innerWidth < 768) {
        closeSidebar();
    }
    
    hideLoading();
}

// Function to update processor filter panel based on current OS context
function updateProcessorFilterForOS(osContext) {
    // Hide all processor options first
    processorCheckboxes.forEach(checkbox => {
        const label = checkbox.closest('.filter-option');
        if (label) {
            label.style.display = 'none';
        }
    });
    
    // Show only relevant processors for the current OS
    if (osContext === 'windows') {
        // Windows laptops can have Intel, AMD, or Qualcomm processors
        processorCheckboxes.forEach(checkbox => {
            const value = checkbox.value;
            // Show Intel processors
            if (value === 'intel' ||
                value === 'intel-inside' ||
                value === 'intel-celeron' ||
                value === 'intel-core-i3' ||
                value === 'intel-core-i5' ||
                value === 'intel-core-i7' ||
                value === 'intel-core-5' ||
                value === 'intel-core-7' ||
                value === 'intel-core-ultra-5' ||
                value === 'intel-core-ultra-7' ||
                value === 'intel-core-ultra-9') {
                const label = checkbox.closest('.filter-option');
                if (label) {
                    label.style.display = 'block';
                }
            }
            // Show AMD processors
            else if (value === 'amd' ||
                     value === 'amd-athlon' ||
                     value === 'amd-ryzen' ||
                     value === 'amd-ryzen-3' ||
                     value === 'amd-ryzen-5' ||
                     value === 'amd-ryzen-7' ||
                     value === 'amd-ryzen-9' ||
                     value === 'amd-ryzen-ai-7') {
                const label = checkbox.closest('.filter-option');
                if (label) {
                    label.style.display = 'block';
                }
            }
            // Show Qualcomm processors
            else if (value === 'qualcomm') {
                const label = checkbox.closest('.filter-option');
                if (label) {
                    label.style.display = 'block';
                }
            }
            // Show None option
            else if (value === 'none') {
                const label = checkbox.closest('.filter-option');
                if (label) {
                    label.style.display = 'block';
                }
            }
        });
    } else if (osContext === 'macos') {
        // macOS laptops only have Apple processors
        processorCheckboxes.forEach(checkbox => {
            if (checkbox.value === 'apple' ||
                checkbox.value === 'apple-m1' ||
                checkbox.value === 'apple-m2' ||
                checkbox.value === 'apple-m3' ||
                checkbox.value === 'none') {
                const label = checkbox.closest('.filter-option');
                if (label) {
                    label.style.display = 'block';
                }
            }
        });
    } else if (osContext === 'chromeos') {
        // ChromeOS laptops typically have Intel or AMD processors
        processorCheckboxes.forEach(checkbox => {
            const value = checkbox.value;
            // Show Intel processors
            if (value === 'intel' ||
                value === 'intel-inside' ||
                value === 'intel-celeron' ||
                value === 'intel-core-i3' ||
                value === 'intel-core-i5') {
                const label = checkbox.closest('.filter-option');
                if (label) {
                    label.style.display = 'block';
                }
            }
            // Show AMD processors
            else if (value === 'amd' ||
                     value === 'amd-athlon' ||
                     value === 'amd-ryzen' ||
                     value === 'amd-ryzen-3') {
                const label = checkbox.closest('.filter-option');
                if (label) {
                    label.style.display = 'block';
                }
            }
            // Show None option
            else if (value === 'none') {
                const label = checkbox.closest('.filter-option');
                if (label) {
                    label.style.display = 'block';
                }
            }
        });
    } else {
        // If no OS context, show all processor options
        processorCheckboxes.forEach(checkbox => {
            const label = checkbox.closest('.filter-option');
            if (label) {
                label.style.display = 'block';
            }
        });
    }
}

// Function to update brand filter panel based on current OS context
function updateBrandFilterForOS(osContext) {
    // Get the brand panel and its title
    const brandPanel = document.getElementById('brand-panel');
    const brandPanelTitle = brandPanel ? brandPanel.querySelector('h3') : null;
    
    // Get all brand checkboxes
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    
    // If macOS, replace brand filter with screen size filter
    if (osContext === 'macos') {
        // Update panel title
        if (brandPanelTitle) {
            brandPanelTitle.textContent = 'Screen Size';
        }
        
        // Update brand filter button text
        const brandFilterButton = document.querySelector('.filter-button[data-panel="brand-panel"]');
        if (brandFilterButton) {
            // Save original text if not already saved
            if (!brandFilterButton.getAttribute('data-original-text')) {
                brandFilterButton.setAttribute('data-original-text', brandFilterButton.innerHTML);
            }
            
            // Update button text to "Screen Size"
            brandFilterButton.innerHTML = '<i class="fas fa-laptop"></i> Screen Size';
        }
        
        // Hide all brand options first
        brandCheckboxes.forEach(checkbox => {
            const label = checkbox.closest('.filter-option');
            if (label) {
                label.style.display = 'none';
            }
        });
        
        // Get the filter options container
        const filterOptions = brandPanel ? brandPanel.querySelector('.filter-options') : null;
        
        // If filter options container exists and doesn't already have screen size options
        if (filterOptions && !filterOptions.querySelector('input[value="13-inch"]')) {
            // Create screen size options
            const screenSizes = ['13-inch', '14-inch', '15-inch'];
            
            // Create "All Sizes" option
            const allSizesLabel = document.createElement('label');
            allSizesLabel.className = 'filter-option';
            allSizesLabel.innerHTML = `
                <input type="checkbox" name="screen-size" value="all" checked> All Sizes
            `;
            filterOptions.appendChild(allSizesLabel);
            
            // Create individual screen size options
            screenSizes.forEach(size => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                label.innerHTML = `
                    <input type="checkbox" name="screen-size" value="${size}"> ${size}
                `;
                filterOptions.appendChild(label);
            });
            
            // Add event listeners to screen size checkboxes
            const allSizesCheckbox = filterOptions.querySelector('input[name="screen-size"][value="all"]');
            const sizesCheckboxes = filterOptions.querySelectorAll('input[name="screen-size"]');
            
            if (allSizesCheckbox) {
                allSizesCheckbox.addEventListener('change', function() {
                    if (this.checked) {
                        sizesCheckboxes.forEach(cb => {
                            if (cb.value !== 'all') cb.checked = false;
                        });
                    }
                });
            }
            
            sizesCheckboxes.forEach(checkbox => {
                if (checkbox.value !== 'all') {
                    checkbox.addEventListener('change', function() {
                        if (this.checked && allSizesCheckbox) allSizesCheckbox.checked = false;
                        const anySizeChecked = Array.from(sizesCheckboxes).some(cb => cb.checked && cb.value !== 'all');
                        if (!anySizeChecked && allSizesCheckbox) allSizesCheckbox.checked = true;
                    });
                }
            });
        }
    } else {
        // For other OS contexts, restore original brand filter
        if (brandPanelTitle) {
            brandPanelTitle.textContent = 'Laptop Brands';
        }
        
        // Restore original brand filter button text
        const brandFilterButton = document.querySelector('.filter-button[data-panel="brand-panel"]');
        if (brandFilterButton && brandFilterButton.getAttribute('data-original-text')) {
            brandFilterButton.innerHTML = brandFilterButton.getAttribute('data-original-text');
        }
        
        // Show all brand options
        brandCheckboxes.forEach(checkbox => {
            const label = checkbox.closest('.filter-option');
            if (label) {
                label.style.display = 'block';
            }
        });
        
        // Remove any screen size options
        const screenSizeCheckboxes = document.querySelectorAll('input[name="screen-size"]');
        screenSizeCheckboxes.forEach(checkbox => {
            const label = checkbox.closest('.filter-option');
            if (label) {
                label.remove();
            }
        });
    }
}

async function fetchProducts() {
    try {
        showLoading();
        
        // Check URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const processorParam = urlParams.get('processor');
        const osParam = urlParams.get('os');
        
        // First priority: Check for OS context in URL
        if (osParam) {
            // Map OS context to processor type
            let processorType;
            if (osParam === 'windows') {
                processorType = 'intel';
            } else if (osParam === 'macos') {
                processorType = 'apple';
            } else if (osParam === 'chromeos') {
                processorType = 'amd';
            }
            
            if (processorType) {
                // Load laptops with OS context
                filterByProcessor(processorType, osParam);
                return;
            }
        }
        
        // Second priority: Check for processor type in URL
        if (processorParam && mockLaptops[processorParam.toLowerCase()]) {
            // Load specific processor laptops
            filterByProcessor(processorParam.toLowerCase());
        } else {
            // Skip API fetch and directly use mock data for testing
            // Combine all laptop types for initial view
            allProducts = [
                ...mockLaptops.intel,
                ...mockLaptops.amd,
                ...mockLaptops.apple
            ];
            
            filteredProducts = [...allProducts];
            sortProducts(sortBySelect.value);
            displayProducts();
            setupPagination();
        }
        
        hideLoading();
    } catch (error) {
        console.error('Error in fetchProducts:', error);
        
        // Fallback to showing all laptops
        allProducts = [
            ...mockLaptops.intel,
            ...mockLaptops.amd,
            ...mockLaptops.apple
        ];
        filteredProducts = [...allProducts];
        sortProducts(sortBySelect.value);
        displayProducts();
        setupPagination();
        hideLoading();
    }
}

function showLoading() {
    productsGrid.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading products...</p>
        </div>
    `;
}

function hideLoading() {
    const loadingSpinner = document.querySelector('.loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.remove();
    }
}

function displayProducts() {
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 0;">
                <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                <p style="font-size: 18px; margin-bottom: 20px; font-weight: bold;">No products match your filters.</p>
                <button class="filter-button clear" onclick="resetFilters()" style="margin-top: 10px;">Reset Filters</button>
            </div>
        `;
        paginationContainer.style.display = 'none';
        return;
    }
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    productsGrid.innerHTML = '';

    currentProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });

    paginationContainer.style.display = filteredProducts.length > productsPerPage ? 'flex' : 'none';
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.product_id);

    // Get the lowest price from offers
    let lowestPrice = Infinity;
    let highestOriginalPrice = 0;

    if (product.offers && product.offers.length > 0) {
        product.offers.forEach(offer => {
            if (offer.price && offer.price < lowestPrice) {
                lowestPrice = offer.price;
            }
            if (offer.originalPrice && offer.originalPrice > highestOriginalPrice) {
                highestOriginalPrice = offer.originalPrice;
            }
        });
    }

    // If no valid price was found, set to null
    if (lowestPrice === Infinity) {
        lowestPrice = null;
    }

    // Format price with commas
    const formattedPrice = lowestPrice ? lowestPrice.toLocaleString('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }) : 'Price not available';

    // Extract RAM, storage and OS from specs if available
    let ramText = '';
    let storageText = '';
    let osText = '';

    if (product.specs) {
        if (product.specs.Performance) {
            if (product.specs.Performance.Ram) {
                ramText = product.specs.Performance.Ram;
            }
            if (product.specs.Performance.Storage) {
                storageText = product.specs.Performance.Storage;
            }
        }
        if (product.specs.Os && product.specs.Os['Operating System']) {
            osText = product.specs.Os['Operating System'];
        }
    }

    // Check if product has price alerts set
    const priceAlerts = getPriceAlerts();
    const hasPriceAlert = priceAlerts.some(alert => alert.productId === product.product_id);

    card.innerHTML = `
        <a href="laptops-product.html?id=${product.product_id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.imageUrl}" alt="${product.model}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.model || product.brand + ' ' + product.product_id}</h3>
                <div class="product-specs">
                    <span>${ramText} ${storageText}</span>
                    <span>${osText}</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${formattedPrice}</span>
                    ${highestOriginalPrice > lowestPrice ? `<span class="original-price">R${highestOriginalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="product-retailers">
                    <span>${product.offers ? product.offers.length : 0} retailers</span>
                </div>
            </div>
        </a>
        <div class="price-alert-bell ${hasPriceAlert ? 'active' : ''}" data-product-id="${product.product_id}" data-product-price="${lowestPrice || 0}" style="position: absolute; top: 10px; left: 10px; z-index: 100; color: #ff3a3a; background: white; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); cursor: pointer; border: 2px solid #ff3a3a;">
            <i class="fas fa-bell"></i>
        </div>
        <div class="product-buttons">
            <button class="compare-button" data-product-id="${product.product_id}">Compare</button>
            <button class="wishlist-button" data-product-id="${product.product_id}">Add to Wishlist</button>
        </div>
    `;

    // Add event listener for price alert bell
    const priceAlertBell = card.querySelector('.price-alert-bell');
    priceAlertBell.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const productId = this.getAttribute('data-product-id');
        const currentPrice = parseFloat(this.getAttribute('data-product-price'));
        
        togglePriceAlert(productId, currentPrice, product.model || product.brand + ' ' + product.product_id);
    });

    // Add event listener for compare button
    const compareButton = card.querySelector('.compare-button');
    compareButton.addEventListener('click', function () {
        window.location.href = `laptops-info.html?id=${product.product_id}`;
    });

    // Add event listener for wishlist button
    const wishlistButton = card.querySelector('.wishlist-button');
    wishlistButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Just log the action since we removed the wishlist scripts
        console.log('Add to wishlist clicked for product:', product.product_id);
    });

    return card;
}

// Setup pagination
function setupPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const pagesContainer = document.querySelector('.pages');

    if (!pagesContainer) return;

    pagesContainer.innerHTML = '';

    // Add page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.setAttribute('data-page', i);
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayProducts();
            updatePaginationActive();
        });
        pagesContainer.appendChild(pageButton);
    }

    // Add event listeners to prev/next buttons
    const prevButton = document.querySelector('.page-nav[data-page="prev"]');
    const nextButton = document.querySelector('.page-nav[data-page="next"]');

    if (prevButton) {
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayProducts();
                updatePaginationActive();
            }
        });
    }

    if (nextButton) {
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayProducts();
                updatePaginationActive();
            }
        });
    }
}

// Update active state in pagination
function updatePaginationActive() {
    const pageButtons = document.querySelectorAll('.page-number');
    pageButtons.forEach(button => {
        button.classList.toggle('active', parseInt(button.getAttribute('data-page')) === currentPage);
    });

    const prevButton = document.querySelector('.page-nav[data-page="prev"]');
    const nextButton = document.querySelector('.page-nav[data-page="next"]');

    if (prevButton) {
        prevButton.disabled = currentPage === 1;
    }

    if (nextButton) {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        nextButton.disabled = currentPage === totalPages;
    }

    // Scroll to top of products section
    document.querySelector('.deals-section').scrollIntoView({ behavior: 'smooth' });
}

// Helper function to get lowest price from offers
function getLowestPrice(product) {
    let lowestPrice = Infinity;
    if (product.offers && product.offers.length > 0) {
        product.offers.forEach(offer => {
            if (offer.price && offer.price < lowestPrice) {
                lowestPrice = offer.price;
            }
        });
    }
    return lowestPrice === Infinity ? 0 : lowestPrice;
}

// Sort products
function sortProducts(sortOption) {
    switch (sortOption) {
        case 'price-asc':
            filteredProducts.sort((a, b) => getLowestPrice(a) - getLowestPrice(b));
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => getLowestPrice(b) - getLowestPrice(a));
            break;
        case 'brand-asc':
            filteredProducts.sort((a, b) => (a.brand || '').localeCompare(b.brand || ''));
            break;
        case 'brand-desc':
            filteredProducts.sort((a, b) => (b.brand || '').localeCompare(a.brand || ''));
            break;
        case 'relevance':
        default:
            filteredProducts = [...filteredProducts];
            break;
    }
    currentPage = 1;
    displayProducts();
    setupPagination();
}

// Apply filters
function applyFilters() {
    filteredProducts = [...allProducts];
    
    // Handle brand or screen size filtering based on OS context
    let selectedBrands = [];
    
    if (currentOSContext === 'macos') {
        // For macOS, use screen size filter
        const screenSizeCheckboxes = document.querySelectorAll('input[name="screen-size"]');
        const selectedSizes = Array.from(screenSizeCheckboxes).filter(cb => cb.checked && cb.value !== 'all').map(cb => cb.value);
        
        if (selectedSizes.length > 0) {
            filteredProducts = filteredProducts.filter(product => {
                // Extract screen size from product name or model
                const productName = (product.model || '').toLowerCase();
                return selectedSizes.some(size => {
                    const sizeValue = size.replace('-inch', '');
                    return productName.includes(`${sizeValue}"`) ||
                           productName.includes(`${sizeValue}-inch`) ||
                           productName.includes(`${sizeValue} inch`);
                });
            });
        }
    } else {
        // For other OS contexts, use brand filter
        selectedBrands = Array.from(brandCheckboxes).filter(cb => cb.checked && cb.value !== 'all').map(cb => cb.value);
        
        if (selectedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(product => {
                const productBrand = product.brand?.toLowerCase() || '';
                return selectedBrands.some(brand => productBrand.includes(brand));
            });
        }
    }
    
    // Get selected processors from both processor and OS checkboxes for backward compatibility
    let selectedProcessors = Array.from(processorCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    
    // Map OS checkboxes to processor types if any are checked
    const selectedOS = Array.from(osCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    if (selectedOS.length > 0) {
        if (selectedOS.includes('macos')) {
            selectedProcessors.push('apple');
        }
        if (selectedOS.includes('windows')) {
            selectedProcessors.push('intel');
        }
        if (selectedOS.includes('chromeos')) {
            selectedProcessors.push('amd');
        }
    }
    
    // Remove duplicates
    selectedProcessors = [...new Set(selectedProcessors)];
    const selectedPriceRanges = Array.from(priceCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    if (selectedProcessors.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            let productProcessor = '';
            let productOS = '';
            
            // Handle "None" processor option
            if (selectedProcessors.includes('none') && (!product.specs || !product.specs.Performance || !product.specs.Performance.Processor)) {
                return true;
            }
            
            // Get processor info
            if (product.specs && product.specs.Performance && product.specs.Performance.Processor) {
                productProcessor = product.specs.Performance.Processor.toLowerCase();
            } else {
                // If no processor info and "none" is not selected, exclude
                return false;
            }
            
            // Get OS info
            if (product.specs && product.specs.Os && product.specs.Os['Operating System']) {
                productOS = product.specs.Os['Operating System'].toLowerCase();
            }
            
            // Group processors by type
            const appleProcessors = selectedProcessors.filter(p =>
                p === 'apple' || p.startsWith('apple-'));
            
            const intelProcessors = selectedProcessors.filter(p =>
                p === 'intel' || p.startsWith('intel-'));
            
            const amdProcessors = selectedProcessors.filter(p =>
                p === 'amd' || p.startsWith('amd-'));
            
            const qualcommProcessors = selectedProcessors.filter(p =>
                p === 'qualcomm');
            
            // Check Apple processors
            if (appleProcessors.length > 0) {
                // If specific Apple processors are selected (M1, M2, M3)
                const specificAppleProcessors = appleProcessors.filter(p => p !== 'apple');
                
                if (specificAppleProcessors.length > 0) {
                    // Check for specific Apple processor models
                    const matchesSpecificApple = specificAppleProcessors.some(processor => {
                        if (processor === 'apple-m1') return productProcessor.includes('m1') && productOS.includes('macos');
                        if (processor === 'apple-m2') return productProcessor.includes('m2') && productOS.includes('macos');
                        if (processor === 'apple-m3') return productProcessor.includes('m3') && productOS.includes('macos');
                        return false;
                    });
                    
                    if (matchesSpecificApple) return true;
                } else if (appleProcessors.includes('apple')) {
                    // Generic Apple Silicon filter
                    if (productProcessor.includes('apple') && productOS.includes('macos')) return true;
                }
            }
            
            // Check Intel processors
            if (intelProcessors.length > 0) {
                // If specific Intel processors are selected
                const specificIntelProcessors = intelProcessors.filter(p => p !== 'intel');
                
                if (specificIntelProcessors.length > 0) {
                    // Check for specific Intel processor models
                    const matchesSpecificIntel = specificIntelProcessors.some(processor => {
                        if (processor === 'intel-inside') return productProcessor.includes('inside');
                        if (processor === 'intel-celeron') return productProcessor.includes('celeron');
                        if (processor === 'intel-core-i3') return productProcessor.includes('i3');
                        if (processor === 'intel-core-i5') return productProcessor.includes('i5');
                        if (processor === 'intel-core-i7') return productProcessor.includes('i7');
                        if (processor === 'intel-core-5') return productProcessor.includes('core 5');
                        if (processor === 'intel-core-7') return productProcessor.includes('core 7');
                        if (processor === 'intel-core-ultra-5') return productProcessor.includes('ultra 5');
                        if (processor === 'intel-core-ultra-7') return productProcessor.includes('ultra 7');
                        if (processor === 'intel-core-ultra-9') return productProcessor.includes('ultra 9');
                        return false;
                    });
                    
                    if (matchesSpecificIntel) return true;
                } else if (intelProcessors.includes('intel')) {
                    // Generic Intel filter
                    if (productProcessor.includes('intel')) return true;
                }
            }
            
            // Check AMD processors
            if (amdProcessors.length > 0) {
                // If specific AMD processors are selected
                const specificAmdProcessors = amdProcessors.filter(p => p !== 'amd');
                
                if (specificAmdProcessors.length > 0) {
                    // Check for specific AMD processor models
                    const matchesSpecificAmd = specificAmdProcessors.some(processor => {
                        if (processor === 'amd-athlon') return productProcessor.includes('athlon');
                        if (processor === 'amd-ryzen') return productProcessor.includes('ryzen');
                        if (processor === 'amd-ryzen-3') return productProcessor.includes('ryzen 3');
                        if (processor === 'amd-ryzen-5') return productProcessor.includes('ryzen 5');
                        if (processor === 'amd-ryzen-7') return productProcessor.includes('ryzen 7');
                        if (processor === 'amd-ryzen-9') return productProcessor.includes('ryzen 9');
                        if (processor === 'amd-ryzen-ai-7') return productProcessor.includes('ryzen ai 7');
                        return false;
                    });
                    
                    if (matchesSpecificAmd) return true;
                } else if (amdProcessors.includes('amd')) {
                    // Generic AMD filter
                    if (productProcessor.includes('amd')) return true;
                }
            }
            
            // Check Qualcomm processors
            if (qualcommProcessors.length > 0 && productProcessor.includes('snapdragon')) {
                return true;
            }
            
            // If we got here, no match was found
            return false;
        });
    }
    if (selectedPriceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            let lowestPrice = Infinity;
            if (product.offers && product.offers.length > 0) {
                product.offers.forEach(offer => {
                    if (offer.price && offer.price < lowestPrice) {
                        lowestPrice = offer.price;
                    }
                });
            }
            if (lowestPrice === Infinity) lowestPrice = 0;
            return selectedPriceRanges.some(range => {
                if (range === '0-4000') return lowestPrice < 4000;
                if (range === '4000-8000') return lowestPrice >= 4000 && lowestPrice < 8000;
                if (range === '8000-16000') return lowestPrice >= 8000 && lowestPrice < 16000;
                if (range === '16000-28000') return lowestPrice >= 16000 && lowestPrice < 28000;
                if (range === '30000+') return lowestPrice >= 30000;
                return false;
            });
        });
    }
    // Show "Clear All" button when filters are applied
    if (clearFiltersButton) {
        clearFiltersButton.style.display = 'block';
    }
    
    sortProducts(sortBySelect.value);
    currentPage = 1;
    displayProducts();
    setupPagination();
    closeAllFilterPanels();
}

// Reset all filters
function resetFilters() {
    brandCheckboxes.forEach(checkbox => {
        checkbox.checked = checkbox.value === 'all';
    });
    processorCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    priceCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    filteredProducts = [...allProducts];
    sortProducts(sortBySelect.value);
    currentPage = 1;
    displayProducts();
    setupPagination();
    closeAllFilterPanels();
    
    // Reset section title
    document.querySelector('.section-title').textContent = 'Top Laptops Deals';
    
    // Reset current processor filter and OS context
    currentProcessorFilter = null;
    currentOSContext = null;
    
    // Remove OS context from URL
    const url = new URL(window.location.href);
    url.searchParams.delete('os');
    url.searchParams.delete('processor');
    window.history.replaceState({}, '', url);
    
    // Hide "Clear All" button when all filters are cleared
    if (clearFiltersButton) {
        clearFiltersButton.style.display = 'none';
    }
}

// Close all filter panels
function closeAllFilterPanels() {
    const filterPanels = document.querySelectorAll('.filter-panel');
    filterPanels.forEach(panel => {
        panel.classList.remove('active');
    });
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

function togglePriceAlert(productId, currentPrice, productName) {
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
        showPriceAlertModal(productId, currentPrice, productName);
    }
    
    savePriceAlerts(alerts);
}

function showPriceAlertModal(productId, currentPrice, productName) {
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
                            <img src="${document.querySelector(`.product-card[data-product-id="${productId}"] .product-image`).src}" alt="${productName}">
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
    
    // Show modal with animation
    setTimeout(() => {
        document.getElementById('priceAlertModal').classList.add('active');
    }, 10);
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
    notification.className = `notification notification-${type}`;
    
    // Add icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${icon}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add to container
    container.appendChild(notification);
    
    // Add close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.classList.add('notification-hiding');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.add('notification-hiding');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

document.addEventListener('DOMContentLoaded', async () => {
    // Hide "Clear All" button by default
    if (clearFiltersButton) {
        clearFiltersButton.style.display = 'none';
    }
    
    // Add event listeners to sidebar OS links but map them to processor filtering
    const windowsLink = document.querySelector('.submenu a[href="#windows"]');
    const macOSLink = document.querySelector('.submenu a[href="#macos"]');
    const chromeOSLink = document.querySelector('.submenu a[href="#chromeos"]');
    
    if (windowsLink) {
        windowsLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Map Windows OS to Intel processors with Windows OS context
            filterByProcessor('intel', 'windows');
        });
    }
    
    if (macOSLink) {
        macOSLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Map macOS to Apple processors with macOS context
            filterByProcessor('apple', 'macos');
        });
    }
    
    if (chromeOSLink) {
        chromeOSLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Map ChromeOS to AMD processors with ChromeOS context
            filterByProcessor('amd', 'chromeos');
        });
    }
    
    await fetchProducts();

    // Sort select change event
    if (sortBySelect) {
        sortBySelect.addEventListener('change', () => {
            sortProducts(sortBySelect.value);
        });
    }
    
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
    
    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', resetFilters);
    }
    
    applyFiltersButtons.forEach(button => {
        button.addEventListener('click', applyFilters);
    });
    
    cancelFiltersButtons.forEach(button => {
        button.addEventListener('click', closeAllFilterPanels);
    });

    // Function to check if any filters are applied and show/hide "Clear All" button
    function updateClearAllButtonVisibility() {
        if (!clearFiltersButton) return;
        
        // Check if any brand/screen size filters are applied
        const brandFiltersApplied = Array.from(brandCheckboxes).some(cb => cb.checked && cb.value !== 'all');
        
        // Check if any screen size filters are applied
        const screenSizeCheckboxes = document.querySelectorAll('input[name="screen-size"]');
        const screenSizeFiltersApplied = Array.from(screenSizeCheckboxes).some(cb => cb.checked && cb.value !== 'all');
        
        // Check if any processor filters are applied
        const processorFiltersApplied = Array.from(processorCheckboxes).some(cb => cb.checked);
        
        // Check if any price filters are applied
        const priceFiltersApplied = Array.from(priceCheckboxes).some(cb => cb.checked);
        
        // Show/hide button based on whether any filters are applied
        if (brandFiltersApplied || screenSizeFiltersApplied || processorFiltersApplied || priceFiltersApplied) {
            clearFiltersButton.style.display = 'block';
        } else {
            clearFiltersButton.style.display = 'none';
        }
    }
    
    // Add change event listeners to all filter checkboxes
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateClearAllButtonVisibility);
    });
    
    processorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateClearAllButtonVisibility);
    });
    
    priceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateClearAllButtonVisibility);
    });
    
    // "All Brands" checkbox logic
    const allBrandsCheckbox = document.querySelector('input[name="brand"][value="all"]');
    if (allBrandsCheckbox) {
        allBrandsCheckbox.addEventListener('change', function () {
            if (this.checked) {
                brandCheckboxes.forEach(cb => {
                    if (cb.value !== 'all') cb.checked = false;
                });
            }
        });
        brandCheckboxes.forEach(checkbox => {
            if (checkbox.value !== 'all') {
                checkbox.addEventListener('change', function () {
                    if (this.checked) allBrandsCheckbox.checked = false;
                    const anyBrandChecked = Array.from(brandCheckboxes).some(cb => cb.checked && cb.value !== 'all');
                    if (!anyBrandChecked) allBrandsCheckbox.checked = true;
                });
            }
        });
    }
    
    document.addEventListener('click', function (event) {
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