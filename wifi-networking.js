// WiFi & Networking Products - Mock Data
const wifiNetworkingProducts = {
    // Routers
    routers: [
        {
            id: "router-1",
            name: "ASUS RT-AX86U AX5700 WiFi 6 Router",
            brand: "ASUS",
            image: "https://m.media-amazon.com/images/I/71Iq9AxrXhL._AC_SL1500_.jpg",
            description: "High-performance WiFi 6 router with 5700 Mbps speed and gaming features",
            specifications: {
                wifi_standard: "WiFi 6 (802.11ax)",
                speed: "5700 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "1.8 GHz Quad-core",
                memory: "1GB RAM",
                storage: "256MB Flash",
                ports: "1 x 2.5G WAN, 4 x Gigabit LAN, 2 x USB 3.2",
                antennas: "4 external antennas",
                security: "WPA3, AiProtection Pro, VPN",
                special_features: "Gaming Port, AiMesh compatible, QoS"
            },
            price: {
                current: 3999,
                original: 4499,
                discount: "11%"
            },
            ratings: {
                average: 4.8,
                count: 542
            },
            stores: [
                { name: "Evetech", price: 3999, inStock: true, url: "#" },
                { name: "Wootware", price: 4099, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 4199, inStock: true, url: "#" }
            ]
        },
        {
            id: "router-2",
            name: "TP-Link Archer AX50 AX3000 WiFi 6 Router",
            brand: "TP-Link",
            image: "https://m.media-amazon.com/images/I/61O%2BV3-qqQL._AC_SL1500_.jpg",
            description: "Mid-range WiFi 6 router with 3000 Mbps speed and broad coverage",
            specifications: {
                wifi_standard: "WiFi 6 (802.11ax)",
                speed: "3000 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "1.5 GHz Triple-core",
                memory: "512MB RAM",
                storage: "128MB Flash",
                ports: "1 x Gigabit WAN, 4 x Gigabit LAN, 1 x USB 3.0",
                antennas: "4 external antennas",
                security: "WPA3, HomeCare, VPN",
                special_features: "OFDMA, MU-MIMO, Beamforming"
            },
            price: {
                current: 2499,
                original: 2799,
                discount: "11%"
            },
            ratings: {
                average: 4.7,
                count: 387
            },
            stores: [
                { name: "Evetech", price: 2499, inStock: true, url: "#" },
                { name: "Wootware", price: 2599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2649, inStock: false, url: "#" }
            ]
        },
        {
            id: "router-3",
            name: "Netgear Nighthawk RAX80 AX6000 WiFi 6 Router",
            brand: "Netgear",
            image: "https://m.media-amazon.com/images/I/71J2%2BbDOVeL._AC_SL1500_.jpg",
            description: "High-end WiFi 6 router with 6000 Mbps speed and falcon wing design",
            specifications: {
                wifi_standard: "WiFi 6 (802.11ax)",
                speed: "6000 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "1.8 GHz Quad-core",
                memory: "1GB RAM",
                storage: "512MB Flash",
                ports: "1 x Gigabit WAN, 5 x Gigabit LAN, 2 x USB 3.0",
                antennas: "8 internal antennas",
                security: "WPA3, Netgear Armor, VPN",
                special_features: "OFDMA, MU-MIMO, Beamforming, Link Aggregation"
            },
            price: {
                current: 4799,
                original: 5299,
                discount: "9%"
            },
            ratings: {
                average: 4.6,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 4799, inStock: true, url: "#" },
                { name: "Wootware", price: 4899, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 4999, inStock: true, url: "#" }
            ]
        },
        {
            id: "router-4",
            name: "Linksys MR7350 AX1800 WiFi 6 Router",
            brand: "Linksys",
            image: "https://m.media-amazon.com/images/I/61m5Uu5nEQL._AC_SL1500_.jpg",
            description: "Entry-level WiFi 6 router with 1800 Mbps speed and mesh capability",
            specifications: {
                wifi_standard: "WiFi 6 (802.11ax)",
                speed: "1800 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "1.2 GHz Dual-core",
                memory: "256MB RAM",
                storage: "128MB Flash",
                ports: "1 x Gigabit WAN, 4 x Gigabit LAN, 1 x USB 3.0",
                antennas: "4 internal antennas",
                security: "WPA3, Parental Controls",
                special_features: "Velop Mesh compatible, Beamforming"
            },
            price: {
                current: 1799,
                original: 1999,
                discount: "10%"
            },
            ratings: {
                average: 4.5,
                count: 276
            },
            stores: [
                { name: "Evetech", price: 1799, inStock: true, url: "#" },
                { name: "Wootware", price: 1849, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 1899, inStock: true, url: "#" }
            ]
        },
        {
            id: "router-5",
            name: "D-Link DIR-X1860 AX1800 WiFi 6 Router",
            brand: "D-Link",
            image: "https://m.media-amazon.com/images/I/61O%2BV3-qqQL._AC_SL1500_.jpg",
            description: "Budget-friendly WiFi 6 router with 1800 Mbps speed and easy setup",
            specifications: {
                wifi_standard: "WiFi 6 (802.11ax)",
                speed: "1800 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "1.0 GHz Dual-core",
                memory: "256MB RAM",
                storage: "128MB Flash",
                ports: "1 x Gigabit WAN, 4 x Gigabit LAN",
                antennas: "4 external antennas",
                security: "WPA3, Parental Controls",
                special_features: "OFDMA, MU-MIMO, Voice Control compatible"
            },
            price: {
                current: 1499,
                original: 1699,
                discount: "12%"
            },
            ratings: {
                average: 4.4,
                count: 198
            },
            stores: [
                { name: "Evetech", price: 1499, inStock: true, url: "#" },
                { name: "Wootware", price: 1549, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1599, inStock: true, url: "#" }
            ]
        }
    ],
    
    // WiFi UPS
    wifi_ups: [
        {
            id: "wifi-ups-1",
            name: "APC BE850M2 850VA UPS Battery Backup & Surge Protector",
            brand: "APC",
            image: "https://m.media-amazon.com/images/I/71yfXXKe39L._AC_SL1500_.jpg",
            description: "Reliable UPS with 850VA/450W capacity to keep your WiFi and networking equipment running during power outages",
            specifications: {
                capacity: "850VA/450W",
                battery_type: "Sealed Lead Acid",
                backup_time: "Up to 3 hours for WiFi router",
                outlets: "9 outlets (6 battery backup, 3 surge protection)",
                usb_ports: "2 x USB-A charging ports",
                input_voltage: "120V",
                form_factor: "Tower",
                dimensions: "10.8 x 4.1 x 5.5 inches",
                weight: "7.7 lbs",
                warranty: "3 years"
            },
            price: {
                current: 1999,
                original: 2299,
                discount: "13%"
            },
            ratings: {
                average: 4.7,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 1999, inStock: true, url: "#" },
                { name: "Wootware", price: 2099, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2149, inStock: true, url: "#" }
            ]
        },
        {
            id: "wifi-ups-2",
            name: "CyberPower CP1000PFCLCD PFC Sinewave UPS System",
            brand: "CyberPower",
            image: "https://m.media-amazon.com/images/I/71yfXXKe39L._AC_SL1500_.jpg",
            description: "Pure sine wave UPS with 1000VA/600W capacity and LCD display for networking equipment",
            specifications: {
                capacity: "1000VA/600W",
                battery_type: "Sealed Lead Acid",
                backup_time: "Up to 4 hours for WiFi router",
                outlets: "10 outlets (5 battery backup, 5 surge protection)",
                usb_ports: "1 x USB-A, 1 x USB-C",
                input_voltage: "120V",
                form_factor: "Tower",
                dimensions: "10.4 x 3.9 x 9.1 inches",
                weight: "12.5 lbs",
                warranty: "3 years"
            },
            price: {
                current: 2499,
                original: 2799,
                discount: "11%"
            },
            ratings: {
                average: 4.8,
                count: 387
            },
            stores: [
                { name: "Evetech", price: 2499, inStock: true, url: "#" },
                { name: "Wootware", price: 2599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2649, inStock: false, url: "#" }
            ]
        },
        {
            id: "wifi-ups-3",
            name: "Tripp Lite INTERNET550U Standby UPS System",
            brand: "Tripp Lite",
            image: "https://m.media-amazon.com/images/I/71yfXXKe39L._AC_SL1500_.jpg",
            description: "Compact UPS with 550VA/300W capacity designed specifically for modems and routers",
            specifications: {
                capacity: "550VA/300W",
                battery_type: "Sealed Lead Acid",
                backup_time: "Up to 2.5 hours for WiFi router",
                outlets: "6 outlets (3 battery backup, 3 surge protection)",
                usb_ports: "1 x USB-A charging port",
                input_voltage: "120V",
                form_factor: "Tower",
                dimensions: "7 x 3.7 x 6.7 inches",
                weight: "5.9 lbs",
                warranty: "3 years"
            },
            price: {
                current: 1299,
                original: 1499,
                discount: "13%"
            },
            ratings: {
                average: 4.6,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 1299, inStock: true, url: "#" },
                { name: "Wootware", price: 1349, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1399, inStock: true, url: "#" }
            ]
        },
        {
            id: "wifi-ups-4",
            name: "Eaton 3S550 550VA/330W UPS Battery Backup",
            brand: "Eaton",
            image: "https://m.media-amazon.com/images/I/71yfXXKe39L._AC_SL1500_.jpg",
            description: "Reliable UPS with 550VA/330W capacity for home networking equipment",
            specifications: {
                capacity: "550VA/330W",
                battery_type: "Sealed Lead Acid",
                backup_time: "Up to 2 hours for WiFi router",
                outlets: "8 outlets (4 battery backup, 4 surge protection)",
                usb_ports: "1 x USB-A",
                input_voltage: "120V",
                form_factor: "Tower",
                dimensions: "10.6 x 3.4 x 7 inches",
                weight: "6.4 lbs",
                warranty: "3 years"
            },
            price: {
                current: 1399,
                original: 1599,
                discount: "12%"
            },
            ratings: {
                average: 4.5,
                count: 276
            },
            stores: [
                { name: "Evetech", price: 1399, inStock: true, url: "#" },
                { name: "Wootware", price: 1449, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 1499, inStock: true, url: "#" }
            ]
        },
        {
            id: "wifi-ups-5",
            name: "Belkin Residential Surge Protector with Battery Backup",
            brand: "Belkin",
            image: "https://m.media-amazon.com/images/I/71yfXXKe39L._AC_SL1500_.jpg",
            description: "Entry-level UPS with 600VA/360W capacity for modem and router protection",
            specifications: {
                capacity: "600VA/360W",
                battery_type: "Sealed Lead Acid",
                backup_time: "Up to 2.5 hours for WiFi router",
                outlets: "12 outlets (6 battery backup, 6 surge protection)",
                usb_ports: "2 x USB-A charging ports",
                input_voltage: "120V",
                form_factor: "Tower",
                dimensions: "11.4 x 3.7 x 7.1 inches",
                weight: "7.2 lbs",
                warranty: "3 years"
            },
            price: {
                current: 1599,
                original: 1799,
                discount: "11%"
            },
            ratings: {
                average: 4.4,
                count: 198
            },
            stores: [
                { name: "Evetech", price: 1599, inStock: true, url: "#" },
                { name: "Wootware", price: 1649, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1699, inStock: true, url: "#" }
            ]
        }
    ],
    
    // Extenders & Repeaters
    extenders: [
        {
            id: "extender-1",
            name: "TP-Link RE650 AC2600 WiFi Range Extender",
            brand: "TP-Link",
            image: "https://m.media-amazon.com/images/I/51+FLJRi4kL._AC_SL1000_.jpg",
            description: "High-performance WiFi extender with AC2600 dual-band speeds and 4 external antennas",
            specifications: {
                wifi_standard: "WiFi 5 (802.11ac)",
                speed: "2600 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "Dual-core",
                ports: "1 x Gigabit Ethernet",
                antennas: "4 external antennas",
                coverage: "Up to 14,000 sq ft",
                setup: "WPS one-button setup",
                special_features: "MU-MIMO, Beamforming, Smart Signal Indicator"
            },
            price: {
                current: 1799,
                original: 1999,
                discount: "10%"
            },
            ratings: {
                average: 4.6,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 1799, inStock: true, url: "#" },
                { name: "Wootware", price: 1849, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1899, inStock: true, url: "#" }
            ]
        },
        {
            id: "extender-2",
            name: "NETGEAR EAX80 Nighthawk AX6000 WiFi 6 Mesh Extender",
            brand: "NETGEAR",
            image: "https://m.media-amazon.com/images/I/71S-XwWlwjL._AC_SL1500_.jpg",
            description: "Premium WiFi 6 mesh extender with 6000 Mbps speed and wide coverage",
            specifications: {
                wifi_standard: "WiFi 6 (802.11ax)",
                speed: "6000 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "Quad-core",
                ports: "4 x Gigabit Ethernet",
                antennas: "8 internal antennas",
                coverage: "Up to 2,500 sq ft",
                setup: "NETGEAR Nighthawk App",
                special_features: "OFDMA, MU-MIMO, Beamforming, Smart Connect"
            },
            price: {
                current: 3499,
                original: 3999,
                discount: "13%"
            },
            ratings: {
                average: 4.7,
                count: 387
            },
            stores: [
                { name: "Evetech", price: 3499, inStock: true, url: "#" },
                { name: "Wootware", price: 3599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 3649, inStock: false, url: "#" }
            ]
        },
        {
            id: "extender-3",
            name: "Linksys RE7000 AC1900 Max-Stream WiFi Extender",
            brand: "Linksys",
            image: "https://m.media-amazon.com/images/I/51+FLJRi4kL._AC_SL1000_.jpg",
            description: "Dual-band WiFi extender with AC1900 speeds and seamless roaming",
            specifications: {
                wifi_standard: "WiFi 5 (802.11ac)",
                speed: "1900 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "Dual-core",
                ports: "1 x Gigabit Ethernet",
                antennas: "Internal antennas",
                coverage: "Up to 10,000 sq ft",
                setup: "WPS one-button setup",
                special_features: "Spot Finder Technology, Seamless Roaming"
            },
            price: {
                current: 1499,
                original: 1699,
                discount: "12%"
            },
            ratings: {
                average: 4.5,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 1499, inStock: true, url: "#" },
                { name: "Wootware", price: 1549, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1599, inStock: true, url: "#" }
            ]
        },
        {
            id: "extender-4",
            name: "ASUS RP-AX56 AX1800 WiFi 6 Range Extender",
            brand: "ASUS",
            image: "https://m.media-amazon.com/images/I/51+FLJRi4kL._AC_SL1000_.jpg",
            description: "WiFi 6 extender with AX1800 speeds and AiMesh compatibility",
            specifications: {
                wifi_standard: "WiFi 6 (802.11ax)",
                speed: "1800 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "Dual-core",
                ports: "1 x Gigabit Ethernet",
                antennas: "4 internal antennas",
                coverage: "Up to 1,500 sq ft",
                setup: "ASUS app or web interface",
                special_features: "AiMesh compatible, OFDMA, MU-MIMO"
            },
            price: {
                current: 1999,
                original: 2299,
                discount: "13%"
            },
            ratings: {
                average: 4.6,
                count: 276
            },
            stores: [
                { name: "Evetech", price: 1999, inStock: true, url: "#" },
                { name: "Wootware", price: 2099, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 2149, inStock: true, url: "#" }
            ]
        },
        {
            id: "extender-5",
            name: "D-Link DAP-1720 AC1750 WiFi Range Extender",
            brand: "D-Link",
            image: "https://m.media-amazon.com/images/I/51+FLJRi4kL._AC_SL1000_.jpg",
            description: "Dual-band WiFi extender with AC1750 speeds and smart signal indicator",
            specifications: {
                wifi_standard: "WiFi 5 (802.11ac)",
                speed: "1750 Mbps",
                frequency_bands: "Dual-band (2.4GHz & 5GHz)",
                processor: "Single-core",
                ports: "1 x Gigabit Ethernet",
                antennas: "3 external antennas",
                coverage: "Up to 8,000 sq ft",
                setup: "WPS one-button setup",
                special_features: "Smart Signal Indicator, Access Point mode"
            },
            price: {
                current: 1299,
                original: 1499,
                discount: "13%"
            },
            ratings: {
                average: 4.4,
                count: 198
            },
            stores: [
                { name: "Evetech", price: 1299, inStock: true, url: "#" },
                { name: "Wootware", price: 1349, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1399, inStock: true, url: "#" }
            ]
        }
    ]
};

// Function to display WiFi & Networking products by type
function displayWifiNetworkingProducts(type = null) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    let products = [];
    
    if (type && wifiNetworkingProducts[type]) {
        products = wifiNetworkingProducts[type];
    } else {
        // If no type specified or invalid type, show all products
        Object.values(wifiNetworkingProducts).forEach(categoryProducts => {
            products = products.concat(categoryProducts);
        });
    }
    
    // Apply filters
    products = applyFilters(products);
    
    // Check if any filters are applied and update Clear All button visibility
    updateClearAllButtonVisibility();
    
    // If no products match filters, show reset filters message
    if (products.length === 0) {
        showNoResultsMessage(productsGrid);
        return;
    }
    
    // Sort products based on the selected sort option
    const sortBy = document.getElementById('sort-by')?.value || 'relevance';
    sortProducts(products, sortBy);
    
    // Display products
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Update pagination
    updatePagination(products.length);
    
    // Initialize price alerts for new product cards
    setTimeout(function() {
        initializePriceAlerts();
    }, 500);
}

// Function to apply filters to products
function applyFilters(products) {
    // Get selected brands
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked'))
        .map(input => input.value);
    
    // Get selected colors
    const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked'))
        .map(input => input.value);
    
    // Get selected price ranges
    const selectedPriceRanges = Array.from(document.querySelectorAll('input[name="price"]:checked'))
        .map(input => input.value);
    
    return products.filter(product => {
        // Filter by brand
        if (!selectedBrands.includes('all') && !selectedBrands.includes(product.brand.toLowerCase())) {
            return false;
        }
        
        // Filter by color (assuming products have a color property)
        // Since our mock data doesn't have color, we'll skip this for now
        // In a real implementation, you would check product.color or similar
        if (!selectedColors.includes('all')) {
            // For demonstration, we'll assume routers and UPS are black, and extenders are white
            let productColor = '';
            if (product.id.startsWith('router-')) {
                productColor = product.id.endsWith('1') || product.id.endsWith('3') || product.id.endsWith('5') ? 'black' : 'white';
            } else if (product.id.startsWith('wifi-ups-')) {
                productColor = product.id.endsWith('1') || product.id.endsWith('3') || product.id.endsWith('5') ? 'black' : 'white';
            } else if (product.id.startsWith('extender-')) {
                productColor = product.id.endsWith('2') || product.id.endsWith('4') ? 'black' : 'white';
            }
            
            if (!selectedColors.includes(productColor)) {
                return false;
            }
        }
        
        // Filter by price range
        if (!selectedPriceRanges.includes('all') && selectedPriceRanges.length > 0) {
            const price = product.price.current;
            let matchesPrice = false;
            
            for (const range of selectedPriceRanges) {
                if (range === '0-1000' && price < 1000) {
                    matchesPrice = true;
                    break;
                } else if (range === '1000-2000' && price >= 1000 && price < 2000) {
                    matchesPrice = true;
                    break;
                } else if (range === '2000-3000' && price >= 2000 && price < 3000) {
                    matchesPrice = true;
                    break;
                } else if (range === '3000-5000' && price >= 3000 && price < 5000) {
                    matchesPrice = true;
                    break;
                } else if (range === '5000-10000' && price >= 5000 && price < 10000) {
                    matchesPrice = true;
                    break;
                }
            }
            
            if (!matchesPrice) {
                return false;
            }
        }
        
        return true;
    });
}

// Function to show "no results" message with reset filters button
function showNoResultsMessage(container) {
    container.innerHTML = `
        <div class="no-results" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 0;">
            <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
            <p style="font-size: 18px; margin-bottom: 20px; font-weight: bold;">No products match your filters.</p>
            <button class="filter-button clear" onclick="resetAllFilters()" style="margin-top: 10px;">Reset Filters</button>
        </div>
    `;
    
    // Hide pagination when no results
    document.getElementById("pagination").style.display = 'none';
}

// Function to update the visibility of the Clear All button
function updateClearAllButtonVisibility() {
    const clearAllButton = document.getElementById('clear-filters');
    if (!clearAllButton) return;
    
    // Check if any filters are applied
    const brandFilters = Array.from(document.querySelectorAll('input[name="brand"]:checked'))
        .filter(input => input.value !== 'all');
    
    const colorFilters = Array.from(document.querySelectorAll('input[name="color"]:checked'))
        .filter(input => input.value !== 'all');
    
    const priceFilters = Array.from(document.querySelectorAll('input[name="price"]:checked'));
    
    const anyFiltersApplied = brandFilters.length > 0 ||
                             colorFilters.length > 0 ||
                             priceFilters.length > 0;
    
    // Show/hide clear all button
    clearAllButton.style.display = anyFiltersApplied ? 'flex' : 'none';
}

// Function to reset all filters
function resetAllFilters() {
    // Reset brand filters
    document.querySelectorAll('input[name="brand"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset color filters
    document.querySelectorAll('input[name="color"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset price filters
    document.querySelectorAll('input[name="price"]').forEach(input => {
        input.checked = false;
    });
    
    // Get product type from URL if available
    const urlParams = new URLSearchParams(window.location.search);
    const productType = urlParams.get('type');
    
    // Hide clear all button
    const clearAllButton = document.getElementById('clear-filters');
    if (clearAllButton) {
        clearAllButton.style.display = 'none';
    }
    
    // Display products with reset filters
    displayWifiNetworkingProducts(productType);
}

// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    // Calculate the lowest price from stores
    const lowestPrice = Math.min(...product.stores.map(store => store.price));
    
    // Check if product has price alerts set
    const priceAlerts = getPriceAlerts ? getPriceAlerts() : [];
    const hasPriceAlert = priceAlerts.some && priceAlerts.some(alert => alert.productId === product.id);
    
    // Determine product type based on ID
    let productType = 'router';
    if (product.id.startsWith('wifi-ups-')) {
        productType = 'ups';
    } else if (product.id.startsWith('extender-')) {
        productType = 'extender';
    }
    
    // Generate specs HTML based on product type
    let specsHTML = '';
    
    if (productType === 'router') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.wifi_standard || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.speed || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.frequency_bands || '') : ''}</span>
        `;
    } else if (productType === 'ups') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.capacity || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.backup_time || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.outlets ? product.specifications.outlets.split(' ')[0] + ' outlets' : '') : ''}</span>
        `;
    } else if (productType === 'extender') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.wifi_standard || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.speed || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.coverage || '') : ''}</span>
        `;
    }
    
    card.innerHTML = `
        <a href="wifi-networking-product.html?id=${product.id}" class="product-link">
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

// Function to navigate to WiFi & Networking products by type
function navigateToWifiNetworkingByType(type) {
    // Update URL with the selected type
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    window.history.pushState({}, '', url);
    
    // Display products of the selected type
    displayWifiNetworkingProducts(type);
    
    // Update page title based on type
    updatePageTitle(type);
}

// Function to update page title based on product type
function updatePageTitle(type) {
    const titleElement = document.querySelector('.section-title');
    if (!titleElement) return;
    
    let title = 'WiFi & Networking';
    
    switch (type) {
        case 'routers':
            title = 'Routers';
            break;
        case 'wifi_ups':
            title = 'WiFi UPS';
            break;
        case 'extenders':
            title = 'Extenders & Repeaters';
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
    displayWifiNetworkingProducts(productType);
    
    // Update page title
    updatePageTitle(productType);
    
    // Add event listener for sort select
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            displayWifiNetworkingProducts(productType);
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
    
    // Add event listeners for filter buttons
    const filterButtons = document.querySelectorAll('.filter-button:not(.clear)');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const panelId = this.getAttribute('data-panel');
            const panel = document.getElementById(panelId);
            
            // Close all other panels
            document.querySelectorAll('.filter-panel').forEach(p => {
                if (p.id !== panelId) {
                    p.classList.remove('active');
                }
            });
            
            // Toggle current panel
            panel.classList.toggle('active');
        });
    });
    
    // Add event listener for clear all filters button
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', resetAllFilters);
    }
    
    // Add event listeners for apply and cancel buttons in filter panels
    document.querySelectorAll('.apply-filters').forEach(button => {
        button.addEventListener('click', function() {
            // Close the panel
            this.closest('.filter-panel').classList.remove('active');
            // Apply filters and update display
            displayWifiNetworkingProducts(productType);
            // Update Clear All button visibility
            updateClearAllButtonVisibility();
        });
    });
    
    document.querySelectorAll('.cancel-filters').forEach(button => {
        button.addEventListener('click', function() {
            // Close the panel without applying filters
            this.closest('.filter-panel').classList.remove('active');
        });
    });
    
    // Add CSS for no results message
    const noResultsStyle = document.createElement('style');
    noResultsStyle.textContent = `
        .no-results-message {
            text-align: center;
            padding: 40px 20px;
            background: #f9f9f9;
            border-radius: 12px;
            margin: 20px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .no-results-icon {
            font-size: 48px;
            color: #ccc;
            margin-bottom: 20px;
        }
        
        .no-results-message h3 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #333;
        }
        
        .no-results-message p {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
        }
        
        .reset-filters-btn {
            background: #4285f4;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .reset-filters-btn:hover {
            background: #3367d6;
        }
    `;
    document.head.appendChild(noResultsStyle);
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
        } else {
            // If bell already exists, make sure it has an event listener
            const bellIcon = card.querySelector('.price-alert-bell');
            if (bellIcon && !bellIcon.hasAttribute('data-event-attached')) {
                const productId = card.getAttribute('data-product-id');
                const productPrice = parseFloat(bellIcon.getAttribute('data-product-price') || '0');
                const productName = card.querySelector('.product-name').textContent;
                const productImage = card.querySelector('.product-image img').src;
                
                bellIcon.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    togglePriceAlert(productId, productPrice, productName, productImage);
                });
                
                bellIcon.setAttribute('data-event-attached', 'true');
            }
        }
    });
}

// Make functions available globally
window.displayWifiNetworkingProducts = displayWifiNetworkingProducts;
window.navigateToWifiNetworkingByType = navigateToWifiNetworkingByType;
window.closeNotification = closeNotification;
window.resetAllFilters = resetAllFilters;
window.initializePriceAlerts = initializePriceAlerts;