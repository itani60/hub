// TV & Streaming Products - Mock Data
const tvStreamingProducts = {
    // Televisions
    televisions: [
        {
            id: "tv-1",
            name: "Samsung QN90A 65\" Neo QLED 4K Smart TV",
            brand: "Samsung",
            image: "https://m.media-amazon.com/images/I/91RfzivKmwL._AC_SL1500_.jpg",
            description: "Premium 4K Neo QLED TV with Quantum HDR 32X, Anti-Reflection, and Object Tracking Sound",
            specifications: {
                display_type: "Neo QLED",
                resolution: "4K Ultra HD (3840 x 2160)",
                screen_size: "65 inches",
                refresh_rate: "120Hz",
                hdr: "Quantum HDR 32X",
                smart_platform: "Tizen",
                voice_assistants: "Bixby, Amazon Alexa, Google Assistant",
                hdmi_ports: "4 x HDMI 2.1",
                usb_ports: "2 x USB",
                audio: "60W, 4.2.2 channel",
                special_features: "Anti-Reflection, Object Tracking Sound+, Gaming Mode"
            },
            price: {
                current: 24999,
                original: 27999,
                discount: "11%"
            },
            ratings: {
                average: 4.8,
                count: 876
            },
            stores: [
                { name: "Evetech", price: 24999, inStock: true, url: "#" },
                { name: "Wootware", price: 25499, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 25999, inStock: true, url: "#" }
            ]
        },
        {
            id: "tv-2",
            name: "LG C1 55\" OLED 4K Smart TV",
            brand: "LG",
            image: "https://m.media-amazon.com/images/I/91RfzivKmwL._AC_SL1500_.jpg",
            description: "OLED 4K TV with Dolby Vision IQ, Dolby Atmos, and NVIDIA G-SYNC compatibility",
            specifications: {
                display_type: "OLED",
                resolution: "4K Ultra HD (3840 x 2160)",
                screen_size: "55 inches",
                refresh_rate: "120Hz",
                hdr: "Dolby Vision IQ, HDR10, HLG",
                smart_platform: "webOS",
                voice_assistants: "LG ThinQ AI, Google Assistant, Amazon Alexa",
                hdmi_ports: "4 x HDMI 2.1",
                usb_ports: "3 x USB",
                audio: "40W, 2.2 channel",
                special_features: "NVIDIA G-SYNC, AMD FreeSync, Filmmaker Mode"
            },
            price: {
                current: 19999,
                original: 22999,
                discount: "13%"
            },
            ratings: {
                average: 4.9,
                count: 1243
            },
            stores: [
                { name: "Evetech", price: 19999, inStock: true, url: "#" },
                { name: "Wootware", price: 20499, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 20999, inStock: false, url: "#" }
            ]
        },
        {
            id: "tv-3",
            name: "Sony X90J 65\" 4K LED Smart TV",
            brand: "Sony",
            image: "https://m.media-amazon.com/images/I/91RfzivKmwL._AC_SL1500_.jpg",
            description: "4K HDR LED TV with Full Array LED, XR Motion Clarity, and Acoustic Multi-Audio",
            specifications: {
                display_type: "LED",
                resolution: "4K Ultra HD (3840 x 2160)",
                screen_size: "65 inches",
                refresh_rate: "120Hz",
                hdr: "HDR10, Dolby Vision, HLG",
                smart_platform: "Google TV",
                voice_assistants: "Google Assistant, Amazon Alexa",
                hdmi_ports: "4 x HDMI (2 x HDMI 2.1)",
                usb_ports: "2 x USB",
                audio: "20W, 2.0 channel",
                special_features: "XR Motion Clarity, Acoustic Multi-Audio, BRAVIA Core"
            },
            price: {
                current: 18999,
                original: 20999,
                discount: "10%"
            },
            ratings: {
                average: 4.7,
                count: 654
            },
            stores: [
                { name: "Evetech", price: 18999, inStock: true, url: "#" },
                { name: "Wootware", price: 19499, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 19999, inStock: true, url: "#" }
            ]
        },
        {
            id: "tv-4",
            name: "Hisense U8G 55\" ULED 4K Smart TV",
            brand: "Hisense",
            image: "https://m.media-amazon.com/images/I/91RfzivKmwL._AC_SL1500_.jpg",
            description: "ULED 4K TV with Quantum Dot, Full Array Local Dimming, and Dolby Vision Atmos",
            specifications: {
                display_type: "ULED",
                resolution: "4K Ultra HD (3840 x 2160)",
                screen_size: "55 inches",
                refresh_rate: "120Hz",
                hdr: "Dolby Vision, HDR10+, HDR10, HLG",
                smart_platform: "Android TV",
                voice_assistants: "Google Assistant, Amazon Alexa",
                hdmi_ports: "4 x HDMI (2 x HDMI 2.1)",
                usb_ports: "2 x USB",
                audio: "30W, 2.1.2 channel",
                special_features: "Full Array Local Dimming, Quantum Dot, Game Mode Pro"
            },
            price: {
                current: 14999,
                original: 16999,
                discount: "12%"
            },
            ratings: {
                average: 4.6,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 14999, inStock: true, url: "#" },
                { name: "Wootware", price: 15499, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 15999, inStock: true, url: "#" }
            ]
        },
        {
            id: "tv-5",
            name: "TCL 6-Series 65\" QLED 4K Smart TV",
            brand: "TCL",
            image: "https://m.media-amazon.com/images/I/91RfzivKmwL._AC_SL1500_.jpg",
            description: "QLED 4K TV with Mini-LED, Quantum Dot, and Dolby Vision HDR",
            specifications: {
                display_type: "QLED",
                resolution: "4K Ultra HD (3840 x 2160)",
                screen_size: "65 inches",
                refresh_rate: "120Hz",
                hdr: "Dolby Vision, HDR10, HLG",
                smart_platform: "Roku TV",
                voice_assistants: "Amazon Alexa, Google Assistant",
                hdmi_ports: "4 x HDMI (2 x HDMI 2.1)",
                usb_ports: "1 x USB",
                audio: "15W, 2.0 channel",
                special_features: "Mini-LED, Quantum Dot, Variable Refresh Rate"
            },
            price: {
                current: 16999,
                original: 18999,
                discount: "11%"
            },
            ratings: {
                average: 4.5,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 16999, inStock: true, url: "#" },
                { name: "Wootware", price: 17499, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 17999, inStock: true, url: "#" }
            ]
        }
    ],
    
    // Streaming Devices
    streaming_devices: [
        {
            id: "stream-1",
            name: "Roku Ultra Streaming Device",
            brand: "Roku",
            image: "https://m.media-amazon.com/images/I/81Jc5-NQRsL._AC_SL1500_.jpg",
            description: "Premium 4K/HDR/Dolby Vision streaming device with Dolby Atmos, Bluetooth, and voice remote",
            specifications: {
                resolution: "4K Ultra HD, HDR10, Dolby Vision",
                audio: "Dolby Atmos, DTS",
                connectivity: "Dual-band Wi-Fi, Ethernet, Bluetooth",
                ports: "HDMI, USB, Ethernet",
                storage: "Internal storage for channels",
                processor: "Quad-core processor",
                remote: "Voice remote with TV controls, lost remote finder",
                special_features: "Private listening, Bluetooth streaming, Ethernet port"
            },
            price: {
                current: 1999,
                original: 2299,
                discount: "13%"
            },
            ratings: {
                average: 4.8,
                count: 876
            },
            stores: [
                { name: "Evetech", price: 1999, inStock: true, url: "#" },
                { name: "Wootware", price: 2099, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2149, inStock: true, url: "#" }
            ]
        },
        {
            id: "stream-2",
            name: "Amazon Fire TV Stick 4K Max",
            brand: "Amazon",
            image: "https://m.media-amazon.com/images/I/81Jc5-NQRsL._AC_SL1500_.jpg",
            description: "Powerful 4K streaming stick with Wi-Fi 6 support and Alexa Voice Remote",
            specifications: {
                resolution: "4K Ultra HD, HDR10+, Dolby Vision",
                audio: "Dolby Atmos",
                connectivity: "Wi-Fi 6, Bluetooth 5.0",
                ports: "HDMI",
                storage: "8GB",
                processor: "Quad-core 1.8 GHz",
                remote: "Alexa Voice Remote with TV controls",
                special_features: "Live View Picture-in-Picture, Wi-Fi 6 support"
            },
            price: {
                current: 1299,
                original: 1499,
                discount: "13%"
            },
            ratings: {
                average: 4.7,
                count: 1243
            },
            stores: [
                { name: "Evetech", price: 1299, inStock: true, url: "#" },
                { name: "Wootware", price: 1349, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1399, inStock: true, url: "#" }
            ]
        },
        {
            id: "stream-3",
            name: "Apple TV 4K (32GB)",
            brand: "Apple",
            image: "https://m.media-amazon.com/images/I/81Jc5-NQRsL._AC_SL1500_.jpg",
            description: "Premium streaming device with A12 Bionic chip, Dolby Vision, and redesigned Siri Remote",
            specifications: {
                resolution: "4K HDR, Dolby Vision",
                audio: "Dolby Atmos",
                connectivity: "Wi-Fi 6, Bluetooth 5.0, HDMI 2.1",
                ports: "HDMI, Ethernet",
                storage: "32GB",
                processor: "A12 Bionic chip",
                remote: "Siri Remote with touch-enabled clickpad",
                special_features: "Color calibration with iPhone, HomeKit hub"
            },
            price: {
                current: 2999,
                original: 3299,
                discount: "9%"
            },
            ratings: {
                average: 4.9,
                count: 654
            },
            stores: [
                { name: "Evetech", price: 2999, inStock: true, url: "#" },
                { name: "Wootware", price: 3099, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 3199, inStock: false, url: "#" }
            ]
        },
        {
            id: "stream-4",
            name: "Google Chromecast with Google TV",
            brand: "Google",
            image: "https://m.media-amazon.com/images/I/81Jc5-NQRsL._AC_SL1500_.jpg",
            description: "4K streaming device with Google TV interface and voice remote",
            specifications: {
                resolution: "4K HDR, Dolby Vision",
                audio: "Dolby Atmos",
                connectivity: "Wi-Fi, Bluetooth",
                ports: "HDMI",
                storage: "8GB",
                processor: "Quad-core",
                remote: "Voice remote with TV controls",
                special_features: "Google Assistant, personalized recommendations"
            },
            price: {
                current: 999,
                original: 1199,
                discount: "17%"
            },
            ratings: {
                average: 4.6,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 999, inStock: true, url: "#" },
                { name: "Wootware", price: 1049, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1099, inStock: true, url: "#" }
            ]
        },
        {
            id: "stream-5",
            name: "NVIDIA Shield TV Pro",
            brand: "NVIDIA",
            image: "https://m.media-amazon.com/images/I/81Jc5-NQRsL._AC_SL1500_.jpg",
            description: "High-performance Android TV streaming device with AI upscaling and gaming capabilities",
            specifications: {
                resolution: "4K HDR, Dolby Vision, HDR10",
                audio: "Dolby Atmos, DTS-X",
                connectivity: "Wi-Fi, Bluetooth, Gigabit Ethernet",
                ports: "HDMI 2.0, 2 x USB 3.0",
                storage: "16GB (expandable)",
                processor: "NVIDIA Tegra X1+ processor",
                remote: "Backlit remote with voice control",
                special_features: "AI upscaling, GeForce NOW cloud gaming, Plex Media Server"
            },
            price: {
                current: 3499,
                original: 3999,
                discount: "13%"
            },
            ratings: {
                average: 4.8,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 3499, inStock: true, url: "#" },
                { name: "Wootware", price: 3599, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 3699, inStock: true, url: "#" }
            ]
        }
    ],
    
    // No TV accessories section
};

// Function to display TV & Streaming products by type
function displayTVStreamingProducts(type = null, filters = {}) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    let products = [];
    
    if (type && tvStreamingProducts[type]) {
        products = tvStreamingProducts[type];
    } else {
        // If no type specified or invalid type, show all products
        Object.values(tvStreamingProducts).forEach(categoryProducts => {
            products = products.concat(categoryProducts);
        });
    }
    
    // Apply filters
    if (filters && Object.keys(filters).length > 0) {
        // Filter by brand
        if (filters.brand && !filters.brand.includes('all')) {
            products = products.filter(product =>
                filters.brand.some(brand => product.brand.toLowerCase() === brand.toLowerCase())
            );
        }
        
        // Filter by screen size (for televisions)
        if (filters.screen_size && !filters.screen_size.includes('all')) {
            products = products.filter(product => {
                if (!product.specifications || !product.specifications.screen_size) return false;
                
                const screenSizeStr = product.specifications.screen_size;
                const screenSize = parseInt(screenSizeStr);
                
                return filters.screen_size.some(sizeRange => {
                    if (sizeRange === '32') return screenSize <= 32;
                    if (sizeRange === '40-43') return screenSize >= 40 && screenSize <= 43;
                    if (sizeRange === '49-50') return screenSize >= 49 && screenSize <= 50;
                    if (sizeRange === '55') return screenSize === 55;
                    if (sizeRange === '65') return screenSize === 65;
                    if (sizeRange === '75') return screenSize === 75;
                    if (sizeRange === '85+') return screenSize >= 85;
                    return false;
                });
            });
        }
        
        // Filter by OS
        if (filters.os && !filters.os.includes('all')) {
            products = products.filter(product => {
                if (!product.specifications || !product.specifications.smart_platform) return false;
                
                const platform = product.specifications.smart_platform.toLowerCase();
                
                return filters.os.some(os => {
                    if (os === 'android') return platform.includes('android') &&
                                                !platform.includes('9.0') &&
                                                !platform.includes('11');
                    if (os === 'android_9') return platform.includes('android 9.0');
                    if (os === 'android_11') return platform.includes('android 11');
                    if (os === 'google_tv') return platform.includes('google');
                    if (os === 'tvos') return platform.includes('tvos') || platform.includes('tv os');
                    if (os === 'vidaa') return platform.includes('vidaa');
                    if (os === 'webos') return platform.includes('webos') || platform.includes('web os');
                    return false;
                });
            });
        }
        
        // Filter by price range
        if (filters.price && !filters.price.includes('all')) {
            products = products.filter(product => {
                const price = product.price.current;
                
                return filters.price.some(priceRange => {
                    if (priceRange === '0-1000') return price <= 1000;
                    if (priceRange === '1000-2000') return price > 1000 && price <= 2000;
                    if (priceRange === '2000-5000') return price > 2000 && price <= 5000;
                    if (priceRange === '5000-10000') return price > 5000 && price <= 10000;
                    if (priceRange === '10000-15000') return price > 10000 && price <= 15000;
                    if (priceRange === '15000-20000') return price > 15000 && price <= 20000;
                    if (priceRange === '20000-30000') return price > 20000 && price <= 30000;
                    if (priceRange === '30000-50000') return price > 30000 && price <= 50000;
                    if (priceRange === '50000+') return price > 50000;
                    return false;
                });
            });
        }
    }
    
    // Sort products based on the selected sort option
    const sortBy = document.getElementById('sort-by')?.value || 'relevance';
    sortProducts(products, sortBy);
    
    // Check if any filters are applied
    updateClearAllButtonVisibility(filters);
    
    // Display products or show "no results" message
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 0;">
                <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                <p style="font-size: 18px; margin-bottom: 20px; font-weight: bold;">No products match your filters.</p>
                <button class="filter-button clear" onclick="resetFilters()" style="margin-top: 10px;">Reset Filters</button>
            </div>
        `;
        document.getElementById("pagination").style.display = 'none';
    } else {
        // Display products
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Update pagination
        updatePagination(products.length);
        document.getElementById("pagination").style.display = products.length > 10 ? 'flex' : 'none';
    }
    
    // Initialize price alerts for new product cards
    setTimeout(function() {
        initializePriceAlerts();
    }, 500);
}

// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    // Calculate the lowest price from stores
    const lowestPrice = Math.min(...product.stores.map(store => store.price));
    
    // Check if product has price alerts set
    const priceAlerts = getPriceAlerts();
    const hasPriceAlert = priceAlerts.some(alert => alert.productId === product.id);
    
    // Determine product type based on ID
    let productType = 'television';
    if (product.id.startsWith('stream-')) {
        productType = 'streaming';
    }
    
    // Generate specs HTML based on product type
    let specsHTML = '';
    
    if (productType === 'television') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.display_type || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.screen_size || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.resolution || '') : ''}</span>
        `;
    } else if (productType === 'streaming') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.resolution || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.connectivity || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.storage || '') : ''}</span>
        `;
    }
    
    card.innerHTML = `
        <a href="televisions-streaming-product.html?id=${product.id}" class="product-link">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    ${specsHTML}
                </div>
                <div class="product-price">
                    <span class="current-price">R${product.price.current.toLocaleString()}</span>
                </div>
                <div class="product-retailers">
                    <span>${product.stores.length} retailers</span>
                </div>
            </div>
        </a>
        <div class="price-alert-bell ${hasPriceAlert ? 'active' : ''}" data-product-id="${product.id}" data-product-price="${lowestPrice || 0}">
            <i class="fas fa-bell"></i>
        </div>
        <div class="product-buttons">
            <button class="compare-button" data-product-id="${product.id}">Compare</button>
            <button class="wishlist-button" data-product-id="${product.id}">Add to Wishlist</button>
        </div>
    `;
    
    // Add event listener for price alert bell
    const priceAlertBell = card.querySelector('.price-alert-bell');
    priceAlertBell.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const productId = this.getAttribute('data-product-id');
        const currentPrice = parseFloat(this.getAttribute('data-product-price'));
        
        togglePriceAlert(productId, currentPrice, product.name, product.image);
    });

    // Add event listener for compare button
    const compareButton = card.querySelector('.compare-button');
    compareButton.addEventListener('click', function () {
        window.location.href = `televisions-streaming-info.html?id=${product.id}`;
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
                    price: product.price.current,
                    image: product.image,
                    url: `televisions-streaming-info.html?id=${product.id}`
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

// Function to sort products
function sortProducts(products, sortBy) {
    switch (sortBy) {
        case 'price-asc':
            products.sort((a, b) => a.price.current - b.price.current);
            break;
        case 'price-desc':
            products.sort((a, b) => b.price.current - a.price.current);
            break;
        case 'brand-asc':
            products.sort((a, b) => a.brand.localeCompare(b.brand));
            break;
        case 'brand-desc':
            products.sort((a, b) => b.brand.localeCompare(a.brand));
            break;
        default:
            // Default sorting (relevance) - could be based on ratings or other factors
            products.sort((a, b) => b.ratings.average - a.ratings.average);
    }
}

// Function to update pagination
function updatePagination(totalProducts) {
    const paginationElement = document.getElementById('pagination');
    if (!paginationElement) return;
    
    const pagesContainer = paginationElement.querySelector('.pages');
    if (!pagesContainer) return;
    
    const productsPerPage = 10; // Adjust as needed
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    pagesContainer.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'page-number' + (i === 1 ? ' active' : '');
        pageButton.textContent = i;
        pageButton.setAttribute('data-page', i);
        pagesContainer.appendChild(pageButton);
    }
}

// Function to navigate to TV & Streaming products by type
function navigateToTVStreamingByType(type) {
    // Update URL with the selected type
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    window.history.pushState({}, '', url);
    
    // Display products of the selected type
    displayTVStreamingProducts(type);
    
    // Update page title based on type
    updatePageTitle(type);
    
    // Update filter panels based on product type
    updateFilterPanelsForProductType(type);
}

// Function to update filter panels based on product type
function updateFilterPanelsForProductType(type) {
    if (type === 'streaming_devices') {
        // Update brand panel for streaming devices
        updateBrandPanelForStreamingDevices();
        
        // Hide screen size panel for streaming devices
        document.querySelector('.filter-button[data-panel="screen-size-panel"]').style.display = 'none';
        document.getElementById('screen-size-panel').classList.remove('active');
        
        // Update OS panel for streaming devices
        updateOSPanelForStreamingDevices();
        
        // Update price panel for streaming devices
        updatePricePanelForStreamingDevices();
    } else {
        // Show screen size panel for TVs
        document.querySelector('.filter-button[data-panel="screen-size-panel"]').style.display = 'flex';
        
        // Reset brand panel to default (TV brands)
        resetBrandPanelToDefault();
        
        // Reset OS panel to default
        resetOSPanelToDefault();
        
        // Reset price panel to default
        resetPricePanelToDefault();
    }
}

// Function to update brand panel for streaming devices
function updateBrandPanelForStreamingDevices() {
    const brandPanel = document.getElementById('brand-panel');
    if (!brandPanel) return;
    
    const filterOptions = brandPanel.querySelector('.filter-options');
    if (!filterOptions) return;
    
    // Clear existing options
    filterOptions.innerHTML = '';
    
    // Add streaming device brands
    const streamingDeviceBrands = [
        { value: 'all', label: 'All Brands' },
        { value: 'amazon', label: 'Amazon' },
        { value: 'apple', label: 'Apple' },
        { value: 'google', label: 'Google' },
        { value: 'mecool', label: 'MECOOL' },
        { value: 'netogy', label: 'Netogy' },
        { value: 'nvidia', label: 'NVIDIA' },
        { value: 'qvwi', label: 'QVWI' },
        { value: 'roku', label: 'Roku' },
        { value: 'xiaomi', label: 'Xiaomi' }
    ];
    
    // Create brand options
    streamingDeviceBrands.forEach(brand => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'brand';
        input.value = brand.value;
        if (brand.value === 'all') input.checked = true;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + brand.label));
        
        filterOptions.appendChild(label);
    });
}

// Function to reset brand panel to default (TV brands)
function resetBrandPanelToDefault() {
    const brandPanel = document.getElementById('brand-panel');
    if (!brandPanel) return;
    
    const filterOptions = brandPanel.querySelector('.filter-options');
    if (!filterOptions) return;
    
    // Clear existing options
    filterOptions.innerHTML = '';
    
    // Add TV brands
    const tvBrands = [
        { value: 'all', label: 'All Brands' },
        { value: 'hisense', label: 'Hisense' },
        { value: 'jvc', label: 'JVC' },
        { value: 'orion', label: 'Orion' },
        { value: 'samsung', label: 'Samsung' },
        { value: 'sinotec', label: 'Sinotec' },
        { value: 'skyworth', label: 'Skyworth' },
        { value: 'tcl', label: 'TCL' },
        { value: 'telefunken', label: 'Telefunken' },
        { value: 'toshiba', label: 'Toshiba' },
        { value: 'xiaomi', label: 'Xiaomi' }
    ];
    
    // Create brand options
    tvBrands.forEach(brand => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'brand';
        input.value = brand.value;
        if (brand.value === 'all') input.checked = true;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + brand.label));
        
        filterOptions.appendChild(label);
    });
}

// Function to update OS panel for streaming devices
function updateOSPanelForStreamingDevices() {
    const osPanel = document.getElementById('os-panel');
    if (!osPanel) return;
    
    // Update panel title
    const panelTitle = osPanel.querySelector('h3');
    if (panelTitle) panelTitle.textContent = 'Streaming Device OS';
    
    const filterOptions = osPanel.querySelector('.filter-options');
    if (!filterOptions) return;
    
    // Clear existing options
    filterOptions.innerHTML = '';
    
    // Add streaming device OS options
    const streamingDeviceOS = [
        { value: 'all', label: 'All OS' },
        { value: 'android', label: 'Android' },
        { value: 'android_9', label: 'Android 9.0' },
        { value: 'android_11', label: 'Android 11' },
        { value: 'google_tv', label: 'Google TV' },
        { value: 'tvos', label: 'tvOS' },
        { value: 'roku_os', label: 'Roku OS' },
        { value: 'fire_os', label: 'Fire OS' }
    ];
    
    // Create OS options
    streamingDeviceOS.forEach(os => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'os';
        input.value = os.value;
        if (os.value === 'all') input.checked = true;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + os.label));
        
        filterOptions.appendChild(label);
    });
}

// Function to reset OS panel to default
function resetOSPanelToDefault() {
    const osPanel = document.getElementById('os-panel');
    if (!osPanel) return;
    
    // Update panel title
    const panelTitle = osPanel.querySelector('h3');
    if (panelTitle) panelTitle.textContent = 'Smart TV & Streaming Platform';
    
    const filterOptions = osPanel.querySelector('.filter-options');
    if (!filterOptions) return;
    
    // Clear existing options
    filterOptions.innerHTML = '';
    
    // Add TV OS options
    const tvOS = [
        { value: 'all', label: 'All Platforms' },
        { value: 'android', label: 'Android' },
        { value: 'android_9', label: 'Android 9.0' },
        { value: 'android_11', label: 'Android 11' },
        { value: 'google_tv', label: 'Google TV' },
        { value: 'tvos', label: 'tvOS' },
        { value: 'vidaa', label: 'VIDAA Smart' },
        { value: 'webos', label: 'Web OS' }
    ];
    
    // Create OS options
    tvOS.forEach(os => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'os';
        input.value = os.value;
        if (os.value === 'all') input.checked = true;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + os.label));
        
        filterOptions.appendChild(label);
    });
}

// Function to update price panel for streaming devices
function updatePricePanelForStreamingDevices() {
    const pricePanel = document.getElementById('price-panel');
    if (!pricePanel) return;
    
    const filterOptions = pricePanel.querySelector('.filter-options');
    if (!filterOptions) return;
    
    // Clear existing options
    filterOptions.innerHTML = '';
    
    // Add streaming device price ranges
    const streamingDevicePrices = [
        { value: '0-1000', label: 'Under R1,000' },
        { value: '1000-2000', label: 'R1,000 - R2,000' },
        { value: '2000-5000', label: 'R2,000 - R5,000' },
        { value: '5000-10000', label: 'R5,000 - R10,000' },
        { value: '10000+', label: 'Over R10,000' }
    ];
    
    // Create price options
    streamingDevicePrices.forEach(price => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'price';
        input.value = price.value;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + price.label));
        
        filterOptions.appendChild(label);
    });
}

// Function to reset price panel to default
function resetPricePanelToDefault() {
    const pricePanel = document.getElementById('price-panel');
    if (!pricePanel) return;
    
    const filterOptions = pricePanel.querySelector('.filter-options');
    if (!filterOptions) return;
    
    // Clear existing options
    filterOptions.innerHTML = '';
    
    // Add TV price ranges
    const tvPrices = [
        { value: '0-1000', label: 'Under R1,000' },
        { value: '1000-2000', label: 'R1,000 - R2,000' },
        { value: '2000-5000', label: 'R2,000 - R5,000' },
        { value: '5000-10000', label: 'R5,000 - R10,000' },
        { value: '10000-15000', label: 'R10,000 - R15,000' },
        { value: '15000-20000', label: 'R15,000 - R20,000' },
        { value: '20000-30000', label: 'R20,000 - R30,000' },
        { value: '30000-50000', label: 'R30,000 - R50,000' },
        { value: '50000+', label: 'Over R50,000' }
    ];
    
    // Create price options
    tvPrices.forEach(price => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'price';
        input.value = price.value;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + price.label));
        
        filterOptions.appendChild(label);
    });
}

// Function to update page title based on product type
function updatePageTitle(type) {
    const titleElement = document.querySelector('.section-title');
    if (!titleElement) return;
    
    let title = 'TV & Streaming';
    
    switch (type) {
        case 'televisions':
            title = 'Televisions';
            break;
        case 'streaming_devices':
            title = 'Streaming Devices';
            break;
    }
    
    titleElement.textContent = title;
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get product type from URL if available
    const urlParams = new URLSearchParams(window.location.search);
    const productType = urlParams.get('type');
    
    // Display products
    displayTVStreamingProducts(productType);
    
    // Update page title
    updatePageTitle(productType);
    
    // Update filter panels based on product type
    updateFilterPanelsForProductType(productType);
    
    // Add event listener for sort select
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            displayTVStreamingProducts(productType);
        });
    }
    
    // Add event listeners for pagination
    const pagination = document.getElementById('pagination');
    if (pagination) {
        pagination.addEventListener('click', function(e) {
            if (e.target.classList.contains('page-number') || e.target.classList.contains('page-nav')) {
                // Handle pagination click
                const pageButtons = pagination.querySelectorAll('.page-number');
                pageButtons.forEach(btn => btn.classList.remove('active'));
                
                if (e.target.classList.contains('page-number')) {
                    e.target.classList.add('active');
                }
                
                // Here you would implement actual pagination logic
                // For now, we're just updating the UI
            }
        });
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
    // Set modal content
    document.getElementById('priceAlertProductTitle').textContent = productName;
    document.getElementById('priceAlertProductPrice').textContent = `R${currentPrice.toLocaleString()}`;
    document.getElementById('priceAlertProductImage').src = productImage;
    document.getElementById('alertPrice').value = Math.floor(currentPrice * 0.9);
    document.getElementById('alertPrice').max = currentPrice - 1;
    
    // Show modal
    const modal = document.getElementById('priceAlertModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Add event listeners
    document.getElementById('priceAlertModalClose').addEventListener('click', closePriceAlertModal);
    document.getElementById('cancelPriceAlert').addEventListener('click', closePriceAlertModal);
    document.getElementById('savePriceAlert').addEventListener('click', function() {
        savePriceAlertSettings(productId, currentPrice, productName, productImage);
    });
}

function closePriceAlertModal() {
    const modal = document.getElementById('priceAlertModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function savePriceAlertSettings(productId, currentPrice, productName, productImage) {
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
    
    // Close modal
    closePriceAlertModal();
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

// Initialize price alert bells when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add price alert bells to product cards
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
                const productImage = card.querySelector('.product-image img').src;
                
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
});

// Add CSS for price alert bell
const priceAlertBellStyle = document.createElement('style');
priceAlertBellStyle.textContent = `
    .price-alert-bell {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 100;
        color: #ff3a3a;
        background: white;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        border: 2px solid #ff3a3a;
    }
    
    .price-alert-bell:hover {
        transform: scale(1.15);
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .price-alert-bell.active {
        color: #ff3a3a;
        animation: bell-pulse 2s infinite;
        background-color: #fff0f0;
    }
    
    @keyframes bell-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(priceAlertBellStyle);

// Function to update the visibility of the Clear All button
function updateClearAllButtonVisibility(filters = {}) {
    const clearAllButton = document.getElementById('clear-filters');
    if (!clearAllButton) return;
    
    // Check if any filters are applied
    const anyFiltersApplied = filters && Object.keys(filters).some(key => {
        return filters[key] &&
               Array.isArray(filters[key]) &&
               filters[key].length > 0 &&
               !filters[key].includes('all');
    });
    
    // Show/hide clear all button
    clearAllButton.style.display = anyFiltersApplied ? 'flex' : 'none';
}

// Function to reset all filters
function resetFilters() {
    // Get the current product type from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productType = urlParams.get('type');
    
    // Update filter panels based on product type
    updateFilterPanelsForProductType(productType);
    
    // Reset all checkboxes to default state
    document.querySelectorAll('input[value="all"]').forEach(cb => {
        cb.checked = true;
    });
    
    document.querySelectorAll('.filter-options input:not([value="all"])').forEach(cb => {
        cb.checked = false;
    });
    
    // Display products with no filters
    displayTVStreamingProducts(productType, {});
    
    // Close all filter panels
    document.querySelectorAll('.filter-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Hide clear all button
    const clearAllButton = document.getElementById('clear-filters');
    if (clearAllButton) {
        clearAllButton.style.display = 'none';
    }
}

// Make functions available globally
window.displayTVStreamingProducts = displayTVStreamingProducts;
window.navigateToTVStreamingByType = navigateToTVStreamingByType;
window.resetFilters = resetFilters;

// Function to initialize price alerts
function initializePriceAlerts() {
    // Add price alert bells to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        // Check if card already has a price alert bell
        if (!card.querySelector('.price-alert-bell')) {
            const productId = card.getAttribute('data-product-id');
            const productPriceElement = card.querySelector('.current-price');
            
            if (productPriceElement) {
                const productPrice = parseFloat(productPriceElement.textContent.replace(/[^0-9.]/g, ''));
                const productName = card.querySelector('.product-name').textContent;
                const productImage = card.querySelector('.product-image img').src;
                
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
        }
    });
}

// Make function available globally
window.initializePriceAlerts = initializePriceAlerts;