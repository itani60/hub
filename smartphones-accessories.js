const API_URL = 'https://xf9zlapr5e.execute-api.af-south-1.amazonaws.com/accessories';

let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
const productsPerPage = 14;
let currentAccessoryType = null; // Track current accessory type (adapters, powerbanks, cables)

// DOM elements
const productsGrid = document.getElementById('products-grid');
const paginationContainer = document.getElementById('pagination');
const sortBySelect = document.getElementById('sort-by');
const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
const processorCheckboxes = document.querySelectorAll('input[name="processor"]');
const priceCheckboxes = document.querySelectorAll('input[name="price"]');
const clearFiltersButton = document.getElementById('clear-filters');
const applyFiltersButtons = document.querySelectorAll('.apply-filters');
const cancelFiltersButtons = document.querySelectorAll('.cancel-filters');

// Mock data for testing - hardcoded by accessory type
const mockAccessories = {
    adapters: [
        {
            product_id: "adapter1",
            brand: "Samsung",
            model: "25W USB-C Fast Charger",
            imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/za/ep-t2510xbegww/gallery/za-25w-travel-adapter-ep-t2510-ep-t2510xbegww-530606534?$650_519_PNG$",
            offers: [
                { price: 399, originalPrice: 499 },
                { price: 429, originalPrice: 499 }
            ],
            specs: {
                Performance: {
                    "Output": "25W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "Samsung Galaxy, iPhone, iPad"
                }
            }
        },
        {
            product_id: "adapter2",
            brand: "Apple",
            model: "20W USB-C Power Adapter",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1542406417329",
            offers: [
                { price: 499, originalPrice: 599 },
                { price: 549, originalPrice: 599 }
            ],
            specs: {
                Performance: {
                    "Output": "20W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "iPhone, iPad, AirPods"
                }
            }
        },
        {
            product_id: "adapter3",
            brand: "Anker",
            model: "Nano II 45W GaN Charger",
            imageUrl: "https://m.media-amazon.com/images/I/51OXhGbgJWS._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 699, originalPrice: 899 },
                { price: 749, originalPrice: 899 }
            ],
            specs: {
                Performance: {
                    "Output": "45W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "MacBook Air, iPad Pro, iPhone, Samsung Galaxy"
                }
            }
        },
        {
            product_id: "adapter4",
            brand: "Belkin",
            model: "Boost Charge 30W USB-C PD GaN Charger",
            imageUrl: "https://www.belkin.com/on/demandware.static/-/Sites-belkin-master-catalog/default/dw5a1a9c1e/images/hi-res/WCH003/WCH003-Belkin-BOOST-CHARGE-30W-USB-C-PD-GaN-Wall-Charger-1.png",
            offers: [
                { price: 599, originalPrice: 699 },
                { price: 649, originalPrice: 699 }
            ],
            specs: {
                Performance: {
                    "Output": "30W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "iPhone, iPad, MacBook Air, Android"
                }
            }
        },
        {
            product_id: "adapter5",
            brand: "Huawei",
            model: "SuperCharge 40W Wall Charger",
            imageUrl: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/supercharge-power-adapter-max-40w/img/pc/huawei-supercharge-power-adapter-max-40w-black.png",
            offers: [
                { price: 549, originalPrice: 649 },
                { price: 599, originalPrice: 649 }
            ],
            specs: {
                Performance: {
                    "Output": "40W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "Huawei, Honor, Android"
                }
            }
        }
    ],
    powerbanks: [
        {
            product_id: "powerbank1",
            brand: "Anker",
            model: "PowerCore 26800mAh",
            imageUrl: "https://m.media-amazon.com/images/I/61jxRzRsIpL._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 899, originalPrice: 1099 },
                { price: 949, originalPrice: 1099 }
            ],
            specs: {
                Performance: {
                    "Capacity": "26800mAh",
                    "Output": "5V/3A",
                    "Input": "5V/2A"
                },
                Features: {
                    "Ports": "3 USB-A",
                    "Fast Charging": "Yes"
                }
            }
        },
        {
            product_id: "powerbank2",
            brand: "Samsung",
            model: "Wireless Battery Pack 10000mAh",
            imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/za/eb-u3300xjegww/gallery/za-battery-pack-eb-u3300-eb-u3300xjegww-530606518?$650_519_PNG$",
            offers: [
                { price: 799, originalPrice: 999 },
                { price: 849, originalPrice: 999 }
            ],
            specs: {
                Performance: {
                    "Capacity": "10000mAh",
                    "Output": "15W",
                    "Input": "USB-C"
                },
                Features: {
                    "Wireless Charging": "Yes",
                    "Fast Charging": "Yes"
                }
            }
        },
        {
            product_id: "powerbank3",
            brand: "Xiaomi",
            model: "Mi Power Bank 3 Pro 20000mAh",
            imageUrl: "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-power-bank-3-pro-20000mah/intro-1.png",
            offers: [
                { price: 699, originalPrice: 899 },
                { price: 749, originalPrice: 899 }
            ],
            specs: {
                Performance: {
                    "Capacity": "20000mAh",
                    "Output": "45W",
                    "Input": "USB-C"
                },
                Features: {
                    "Ports": "2 USB-A, 1 USB-C",
                    "Fast Charging": "Yes"
                }
            }
        },
        {
            product_id: "powerbank4",
            brand: "Belkin",
            model: "Boost Charge Power Bank 20K",
            imageUrl: "https://www.belkin.com/on/demandware.static/-/Sites-belkin-master-catalog/default/dw5a1a9c1e/images/hi-res/BPB001/BPB001-Belkin-BOOST-CHARGE-Power-Bank-20K-1.png",
            offers: [
                { price: 849, originalPrice: 999 },
                { price: 899, originalPrice: 999 }
            ],
            specs: {
                Performance: {
                    "Capacity": "20000mAh",
                    "Output": "30W",
                    "Input": "USB-C"
                },
                Features: {
                    "Ports": "1 USB-A, 1 USB-C",
                    "Fast Charging": "Yes"
                }
            }
        },
        {
            product_id: "powerbank5",
            brand: "Mophie",
            model: "Powerstation XXL 20000mAh",
            imageUrl: "https://www.zagg.com/on/demandware.static/-/Sites-zagg-master-catalog/default/dw5a1a9c1e/images/hi-res/mophie/401101661/mophie-powerstation-xxl-20k-black-hero.png",
            offers: [
                { price: 999, originalPrice: 1199 },
                { price: 1049, originalPrice: 1199 }
            ],
            specs: {
                Performance: {
                    "Capacity": "20000mAh",
                    "Output": "18W",
                    "Input": "USB-C"
                },
                Features: {
                    "Ports": "2 USB-A, 1 USB-C",
                    "Fast Charging": "Yes"
                }
            }
        }
    ],
    cables: [
        {
            product_id: "cable1",
            brand: "Anker",
            model: "PowerLine+ II USB-C to Lightning Cable",
            imageUrl: "https://m.media-amazon.com/images/I/71m-EsCA2aL._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 299, originalPrice: 399 },
                { price: 329, originalPrice: 399 }
            ],
            specs: {
                Performance: {
                    "Length": "1.8m",
                    "Connector": "USB-C to Lightning",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Durability": "Braided Nylon",
                    "Warranty": "Lifetime"
                }
            }
        },
        {
            product_id: "cable2",
            brand: "Samsung",
            model: "USB-C to USB-C Cable",
            imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/za/ep-da705bbegww/gallery/za-usb-type-c-data-cable-ep-da705-ep-da705bbegww-530606526?$650_519_PNG$",
            offers: [
                { price: 249, originalPrice: 349 },
                { price: 279, originalPrice: 349 }
            ],
            specs: {
                Performance: {
                    "Length": "1.5m",
                    "Connector": "USB-C to USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Durability": "Standard",
                    "Data Transfer": "Yes"
                }
            }
        },
        {
            product_id: "cable3",
            brand: "Apple",
            model: "USB-C to Lightning Cable",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQGH2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1517539497298",
            offers: [
                { price: 349, originalPrice: 449 },
                { price: 379, originalPrice: 449 }
            ],
            specs: {
                Performance: {
                    "Length": "1m",
                    "Connector": "USB-C to Lightning",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Durability": "Standard",
                    "Data Transfer": "Yes"
                }
            }
        },
        {
            product_id: "cable4",
            brand: "Belkin",
            model: "Boost Charge Braided USB-C Cable",
            imageUrl: "https://www.belkin.com/on/demandware.static/-/Sites-belkin-master-catalog/default/dw5a1a9c1e/images/hi-res/CAB001/CAB001-Belkin-BOOST-CHARGE-Braided-USB-C-Cable-1.png",
            offers: [
                { price: 279, originalPrice: 379 },
                { price: 299, originalPrice: 379 }
            ],
            specs: {
                Performance: {
                    "Length": "2m",
                    "Connector": "USB-C to USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Durability": "Braided Nylon",
                    "Data Transfer": "Yes"
                }
            }
        },
        {
            product_id: "cable5",
            brand: "Baseus",
            model: "3-in-1 Charging Cable",
            imageUrl: "https://m.media-amazon.com/images/I/61Jv0BwJCvL._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 199, originalPrice: 299 },
                { price: 229, originalPrice: 299 }
            ],
            specs: {
                Performance: {
                    "Length": "1.2m",
                    "Connector": "USB-A to Lightning/Micro USB/USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Durability": "Braided Nylon",
                    "Multi-Device": "Yes"
                }
            }
        }
    ]
};

// Function to directly load accessories by type
function navigateToAccessoryByType(type) {
    showLoading();
    
    // Update current accessory type
    currentAccessoryType = type;
    
    // Update URL with type for page refresh persistence
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    window.history.replaceState({}, '', url);
    
    // Directly load the accessories for this type from our hardcoded data
    if (mockAccessories[type]) {
        // Set allProducts to only include accessories of the selected type
        allProducts = mockAccessories[type];
        filteredProducts = [...allProducts];
        
        // Update page title to indicate current filter
        let typeTitle;
        if (type === 'adapters') {
            typeTitle = 'Smartphone Adapters';
        } else if (type === 'powerbanks') {
            typeTitle = 'Smartphone Powerbanks';
        } else if (type === 'cables') {
            typeTitle = 'Smartphone Cables';
        } else {
            typeTitle = 'Smartphone Accessories';
        }
        
        document.querySelector('.section-title').textContent = typeTitle;
        
        // Display the products
        sortProducts(sortBySelect.value);
        displayProducts();
        setupPagination();
    } else {
        console.error(`No data available for accessory type: ${type}`);
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

async function fetchProducts() {
    try {
        showLoading();
        
        // Check URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const typeParam = urlParams.get('type');
        
        // Check for type in URL
        if (typeParam && mockAccessories[typeParam.toLowerCase()]) {
            // Load specific accessory type
            navigateToAccessoryByType(typeParam.toLowerCase());
        } else {
            // Skip API fetch and directly use mock data for testing
            // Combine all accessory types for initial view
            allProducts = [
                ...mockAccessories.adapters,
                ...mockAccessories.powerbanks,
                ...mockAccessories.cables
            ];
            
            filteredProducts = [...allProducts];
            sortProducts(sortBySelect.value);
            displayProducts();
            setupPagination();
        }
        
        hideLoading();
    } catch (error) {
        console.error('Error in fetchProducts:', error);
        
        // Fallback to showing all accessories
        allProducts = [
            ...mockAccessories.adapters,
            ...mockAccessories.powerbanks,
            ...mockAccessories.cables
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

    // Extract specs from product if available
    let outputText = '';
    let connectorText = '';
    let fastChargingText = '';
    let capacityText = '';
    let lengthText = '';
    let featuresText = '';

    if (product.specs) {
        if (product.specs.Performance) {
            if (product.specs.Performance.Output) {
                outputText = product.specs.Performance.Output;
            }
            if (product.specs.Performance.Connector) {
                connectorText = product.specs.Performance.Connector;
            }
            if (product.specs.Performance["Fast Charging"]) {
                fastChargingText = product.specs.Performance["Fast Charging"];
            }
            if (product.specs.Performance.Capacity) {
                capacityText = product.specs.Performance.Capacity;
            }
            if (product.specs.Performance.Length) {
                lengthText = product.specs.Performance.Length;
            }
        }
        if (product.specs.Features) {
            const features = [];
            for (const [key, value] of Object.entries(product.specs.Features)) {
                features.push(`${key}: ${value}`);
            }
            featuresText = features.join(', ');
        }
    }

    // Check if product has price alerts set
    const priceAlerts = getPriceAlerts();
    const hasPriceAlert = priceAlerts.some(alert => alert.productId === product.product_id);

    // Determine accessory type for the product link
    let accessoryType = 'accessories';
    if (product.product_id.includes('adapter')) {
        accessoryType = 'adapters';
    } else if (product.product_id.includes('powerbank')) {
        accessoryType = 'powerbanks';
    } else if (product.product_id.includes('cable')) {
        accessoryType = 'cables';
    }

    card.innerHTML = `
        <a href="smartphone-${accessoryType}.html?id=${product.product_id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.imageUrl}" alt="${product.model}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.model || product.brand + ' ' + product.product_id}</h3>
                <div class="product-specs">
                    ${capacityText ? `<span>Capacity: ${capacityText}</span>` : ''}
                    ${outputText ? `<span>Output: ${outputText}</span>` : ''}
                    ${connectorText ? `<span>Connector: ${connectorText}</span>` : ''}
                    ${lengthText ? `<span>Length: ${lengthText}</span>` : ''}
                    ${fastChargingText ? `<span>Fast Charging: ${fastChargingText}</span>` : ''}
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
        window.location.href = `smartphone-${accessoryType}-info.html?id=${product.product_id}`;
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
    
    // Get selected brands
    const selectedBrands = Array.from(brandCheckboxes).filter(cb => cb.checked && cb.value !== 'all').map(cb => cb.value);
    
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productBrand = product.brand?.toLowerCase() || '';
            return selectedBrands.some(brand => productBrand.includes(brand));
        });
    }
    
    // Get selected price ranges
    const selectedPriceRanges = Array.from(priceCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    
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
                if (range === '8000-12000') return lowestPrice >= 8000 && lowestPrice < 12000;
                if (range === '12000+') return lowestPrice >= 12000;
                return false;
            });
        });
    }
    
    currentPage = 1;
    sortProducts(sortBySelect.value);
    displayProducts();
    setupPagination();
    
    // Close filter panels on mobile
    if (window.innerWidth < 768) {
        document.querySelectorAll('.filter-panel').forEach(panel => {
            panel.classList.remove('active');
        });
    }
}

// Reset filters
function resetFilters() {
    // Reset brand checkboxes
    brandCheckboxes.forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    // Reset price checkboxes
    priceCheckboxes.forEach(cb => {
        cb.checked = false;
    });
    
    // Reset filtered products
    filteredProducts = [...allProducts];
    currentPage = 1;
    sortProducts(sortBySelect.value);
    displayProducts();
    setupPagination();
}

// Toggle price alert
function togglePriceAlert(productId, currentPrice, productName) {
    const priceAlerts = getPriceAlerts();
    const existingAlertIndex = priceAlerts.findIndex(alert => alert.productId === productId);
    
    if (existingAlertIndex !== -1) {
        // Remove existing alert
        priceAlerts.splice(existingAlertIndex, 1);
        document.querySelector(`.price-alert-bell[data-product-id="${productId}"]`).classList.remove('active');
    } else {
        // Add new alert
        const targetPrice = prompt(`Enter your target price for ${productName}:`, Math.floor(currentPrice * 0.9));
        
        if (targetPrice !== null && !isNaN(targetPrice) && parseFloat(targetPrice) > 0) {
            priceAlerts.push({
                productId,
                productName,
                currentPrice,
                targetPrice: parseFloat(targetPrice),
                dateAdded: new Date().toISOString()
            });
            document.querySelector(`.price-alert-bell[data-product-id="${productId}"]`).classList.add('active');
        }
    }
    
    localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
}

// Get price alerts from localStorage
function getPriceAlerts() {
    const alerts = localStorage.getItem('priceAlerts');
    return alerts ? JSON.parse(alerts) : [];
}

// Close sidebar on mobile
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Fetch products on page load
    fetchProducts();
    
    // Sort by select
    if (sortBySelect) {
        sortBySelect.addEventListener('change', () => {
            sortProducts(sortBySelect.value);
        });
    }
    
    // Apply filters buttons
    applyFiltersButtons.forEach(button => {
        button.addEventListener('click', () => {
            applyFilters();
        });
    });
    
    // Cancel filters buttons
    cancelFiltersButtons.forEach(button => {
        button.addEventListener('click', () => {
            resetFilters();
        });
    });
    
    // Clear filters button
    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', () => {
            resetFilters();
        });
    }
    
    // Check URL parameters for accessory type
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    
    if (typeParam && mockAccessories[typeParam.toLowerCase()]) {
        navigateToAccessoryByType(typeParam.toLowerCase());
    }
});

// Function to handle accessory type navigation from sidebar
function handleAccessoryTypeClick(type) {
    navigateToAccessoryByType(type);
}

// Make functions available globally
window.handleAccessoryTypeClick = handleAccessoryTypeClick;
window.resetFilters = resetFilters;
window.applyFilters = applyFilters;