/**
 * Gaming Products Data and Display Functions
 * This file contains data and functionality for gaming products including:
 * - Gaming Consoles (Xbox, PlayStation, Nintendo)
 * - Gaming Laptops
 * - PC Gaming
 */

// ==================== PRODUCT DATA ====================

// Gaming Console Products
const consoleProducts = [
    // PlayStation
    {
        id: "ps5-disc",
        name: "PlayStation 5 Disc Edition",
        type: "console",
        brand: "PlayStation",
        price: 11999.99,
        originalPrice: 12999.99,
        storage: "825GB SSD",
        description: "Next-generation gaming console with ultra-high-speed SSD and 3D audio.",
        features: [
            "Ultra-High Speed SSD",
            "Ray Tracing",
            "4K-TV Gaming",
            "Tempest 3D AudioTech",
            "Haptic feedback"
        ],
        specifications: {
            processor: "AMD Zen 2 (8 cores)",
            graphics: "AMD RDNA 2",
            weight: "4.5kg",
            color: "White"
        },
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21"
    },
    {
        id: "ps5-digital",
        name: "PlayStation 5 Digital Edition",
        type: "console",
        brand: "PlayStation",
        price: 9999.99,
        originalPrice: 10999.99,
        storage: "825GB SSD",
        description: "Digital edition of the PS5 without disc drive for digital-only gaming.",
        features: [
            "Ultra-High Speed SSD",
            "Ray Tracing",
            "4K-TV Gaming",
            "Tempest 3D AudioTech",
            "Digital-only"
        ],
        specifications: {
            processor: "AMD Zen 2 (8 cores)",
            graphics: "AMD RDNA 2",
            weight: "3.9kg",
            color: "White"
        },
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20"
    },
    
    // Xbox
    {
        id: "xbox-series-x",
        name: "Xbox Series X",
        type: "console",
        brand: "Xbox",
        price: 11499.99,
        originalPrice: 12499.99,
        storage: "1TB SSD",
        description: "The most powerful Xbox ever with 4K gaming and up to 120 FPS.",
        features: [
            "True 4K Gaming",
            "120 FPS",
            "1TB Custom SSD",
            "Quick Resume",
            "Smart Delivery"
        ],
        specifications: {
            processor: "AMD Zen 2 (8 cores)",
            graphics: "AMD RDNA 2",
            weight: "4.45kg",
            color: "Black"
        },
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni"
    },
    {
        id: "xbox-series-s",
        name: "Xbox Series S",
        type: "console",
        brand: "Xbox",
        price: 6999.99,
        originalPrice: 7499.99,
        storage: "512GB SSD",
        description: "Next-gen performance in the smallest Xbox ever, designed for digital gaming.",
        features: [
            "1440p Gaming",
            "120 FPS",
            "512GB Custom SSD",
            "Quick Resume",
            "All-Digital"
        ],
        specifications: {
            processor: "AMD Zen 2 (8 cores)",
            graphics: "AMD RDNA 2",
            weight: "1.93kg",
            color: "White"
        },
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4nRvw"
    },
    
    // Nintendo
    {
        id: "nintendo-switch-oled",
        name: "Nintendo Switch OLED",
        type: "console",
        brand: "Nintendo",
        price: 7999.99,
        originalPrice: 8499.99,
        storage: "64GB",
        description: "Enhanced Nintendo Switch with vibrant 7-inch OLED screen and enhanced audio.",
        features: [
            "7-inch OLED screen",
            "Enhanced audio",
            "Wired LAN port",
            "64GB internal storage",
            "Wide adjustable stand"
        ],
        specifications: {
            processor: "NVIDIA Custom Tegra",
            battery: "4.5-9 hours",
            weight: "0.42kg (console only)",
            color: "White"
        },
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01"
    },
    {
        id: "nintendo-switch-lite",
        name: "Nintendo Switch Lite",
        type: "console",
        brand: "Nintendo",
        price: 4999.99,
        originalPrice: 5499.99,
        storage: "32GB",
        description: "Compact, lightweight Nintendo Switch system dedicated to handheld play.",
        features: [
            "Built-in controllers",
            "Compatible with all Nintendo Switch games that support handheld mode",
            "Lightweight design",
            "5.5-inch touch screen",
            "32GB internal storage"
        ],
        specifications: {
            processor: "NVIDIA Custom Tegra",
            battery: "3-7 hours",
            weight: "0.28kg",
            color: "Turquoise"
        },
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-lite-yellow/gallery/image01"
    }
];

// Gaming Laptop Products
const laptopProducts = [
    {
        id: "asus-rog-strix-g15",
        name: "ASUS ROG Strix G15",
        type: "laptop",
        brand: "ASUS",
        price: 24999.99,
        originalPrice: 27999.99,
        storage: "1TB SSD",
        description: "Powerful gaming laptop with high refresh rate display and RGB lighting.",
        features: [
            "15.6-inch FHD 300Hz display",
            "NVIDIA GeForce RTX 3070",
            "AMD Ryzen 9 5900HX",
            "16GB DDR4 RAM",
            "RGB keyboard"
        ],
        specifications: {
            processor: "AMD Ryzen 9 5900HX",
            graphics: "NVIDIA GeForce RTX 3070",
            ram: "16GB DDR4",
            weight: "2.3kg",
            color: "Black"
        },
        image: "https://dlcdnwebimgs.asus.com/gain/F99C2D98-9F56-4C5E-8B55-7E1E16B1FC91/w1000/h732"
    },
    {
        id: "msi-raider-ge76",
        name: "MSI Raider GE76",
        type: "laptop",
        brand: "MSI",
        price: 32999.99,
        originalPrice: 35999.99,
        storage: "2TB SSD",
        description: "High-end gaming laptop with desktop-class performance and cooling.",
        features: [
            "17.3-inch QHD 240Hz display",
            "NVIDIA GeForce RTX 3080",
            "Intel Core i9-12900HK",
            "32GB DDR5 RAM",
            "Per-key RGB keyboard"
        ],
        specifications: {
            processor: "Intel Core i9-12900HK",
            graphics: "NVIDIA GeForce RTX 3080",
            ram: "32GB DDR5",
            weight: "2.9kg",
            color: "Titanium Blue"
        },
        image: "https://storage-asset.msi.com/global/picture/image/feature/nb/Raider-GE76-12UHS/KV-GE76-light.png"
    },
    {
        id: "lenovo-legion-5-pro",
        name: "Lenovo Legion 5 Pro",
        type: "laptop",
        brand: "Lenovo",
        price: 21999.99,
        originalPrice: 23999.99,
        storage: "1TB SSD",
        description: "Gaming laptop with 16-inch QHD display and excellent thermal performance.",
        features: [
            "16-inch QHD 165Hz display",
            "NVIDIA GeForce RTX 3060",
            "AMD Ryzen 7 5800H",
            "16GB DDR4 RAM",
            "White backlit keyboard"
        ],
        specifications: {
            processor: "AMD Ryzen 7 5800H",
            graphics: "NVIDIA GeForce RTX 3060",
            ram: "16GB DDR4",
            weight: "2.45kg",
            color: "Storm Grey"
        },
        image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjM1NTIwfGltYWdlL2pwZWd8aGJhL2g1MS8xMTUxNzI4MzE5Njk1OC5qcGd8MzA0NTZlZDY4OThhZDI2NTc5NzExY2EzMWNiYWM1MzBhOGMxYmY5ZTY5NjFjMTRiYTc1NmVjYzVjOGRmMzE4Mg/lenovo-laptop-legion-5-pro-16-amd-subseries-hero.jpg"
    },
    {
        id: "alienware-m15-r7",
        name: "Alienware m15 R7",
        type: "laptop",
        brand: "Alienware",
        price: 29999.99,
        originalPrice: 32999.99,
        storage: "1TB SSD",
        description: "Premium gaming laptop with advanced cooling and AlienFX lighting.",
        features: [
            "15.6-inch QHD 240Hz display",
            "NVIDIA GeForce RTX 3070 Ti",
            "Intel Core i7-12700H",
            "16GB DDR5 RAM",
            "AlienFX RGB lighting"
        ],
        specifications: {
            processor: "Intel Core i7-12700H",
            graphics: "NVIDIA GeForce RTX 3070 Ti",
            ram: "16GB DDR5",
            weight: "2.42kg",
            color: "Dark Side of the Moon"
        },
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m15-r7/media-gallery/notebook-alienware-m15-r7-amd-dark-side-of-moon-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4000&hei=2500&qlt=100,0&resMode=sharp2&size=4000,2500"
    },
    {
        id: "acer-nitro-5",
        name: "Acer Nitro 5",
        type: "laptop",
        brand: "Acer",
        price: 16999.99,
        originalPrice: 18999.99,
        storage: "512GB SSD",
        description: "Budget-friendly gaming laptop with solid performance and cooling.",
        features: [
            "15.6-inch FHD 144Hz display",
            "NVIDIA GeForce RTX 3050 Ti",
            "AMD Ryzen 5 5600H",
            "8GB DDR4 RAM",
            "Red backlit keyboard"
        ],
        specifications: {
            processor: "AMD Ryzen 5 5600H",
            graphics: "NVIDIA GeForce RTX 3050 Ti",
            ram: "8GB DDR4",
            weight: "2.3kg",
            color: "Black"
        },
        image: "https://static-ecapac.acer.com/media/catalog/product/n/i/nitro5_an515-45_rgb-kb_modelpreview_1.png"
    },
    {
        id: "hp-omen-16",
        name: "HP Omen 16",
        type: "laptop",
        brand: "HP",
        price: 19999.99,
        originalPrice: 21999.99,
        storage: "1TB SSD",
        description: "Balanced gaming laptop with excellent display and thermal management.",
        features: [
            "16.1-inch QHD 165Hz display",
            "NVIDIA GeForce RTX 3060",
            "Intel Core i7-11800H",
            "16GB DDR4 RAM",
            "RGB keyboard"
        ],
        specifications: {
            processor: "Intel Core i7-11800H",
            graphics: "NVIDIA GeForce RTX 3060",
            ram: "16GB DDR4",
            weight: "2.3kg",
            color: "Shadow Black"
        },
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08031067.png"
    }
];

// PC Gaming Products
const pcGamingProducts = [
    {
        id: "alienware-aurora-r13",
        name: "Alienware Aurora R13",
        type: "pc",
        brand: "Alienware",
        price: 34999.99,
        originalPrice: 37999.99,
        storage: "1TB SSD + 2TB HDD",
        description: "High-performance gaming desktop with liquid cooling and customizable lighting.",
        features: [
            "Intel Core i9-12900KF",
            "NVIDIA GeForce RTX 3080",
            "32GB DDR5 RAM",
            "Liquid cooling",
            "AlienFX RGB lighting"
        ],
        specifications: {
            processor: "Intel Core i9-12900KF",
            graphics: "NVIDIA GeForce RTX 3080",
            ram: "32GB DDR5",
            weight: "17.8kg",
            color: "Lunar Light"
        },
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r13/media-gallery/desktop-alienware-aurora-r13-white-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4000&hei=2500&qlt=100,0&resMode=sharp2&size=4000,2500"
    },
    {
        id: "asus-rog-strix-g15dx",
        name: "ASUS ROG Strix G15DX",
        type: "pc",
        brand: "ASUS",
        price: 27999.99,
        originalPrice: 29999.99,
        storage: "1TB SSD + 1TB HDD",
        description: "Powerful gaming desktop with AMD Ryzen processor and NVIDIA graphics.",
        features: [
            "AMD Ryzen 9 5900X",
            "NVIDIA GeForce RTX 3070",
            "16GB DDR4 RAM",
            "Air cooling",
            "Aura Sync RGB lighting"
        ],
        specifications: {
            processor: "AMD Ryzen 9 5900X",
            graphics: "NVIDIA GeForce RTX 3070",
            ram: "16GB DDR4",
            weight: "13.4kg",
            color: "Black"
        },
        image: "https://dlcdnwebimgs.asus.com/gain/E0BBAD85-F9F3-4797-8A26-C451D8162E11/w1000/h732"
    },
    {
        id: "hp-omen-45l",
        name: "HP Omen 45L",
        type: "pc",
        brand: "HP",
        price: 32999.99,
        originalPrice: 35999.99,
        storage: "2TB SSD + 2TB HDD",
        description: "Premium gaming desktop with innovative cooling and expandable design.",
        features: [
            "Intel Core i9-12900K",
            "NVIDIA GeForce RTX 3080 Ti",
            "32GB DDR4 RAM",
            "Cryo Chamber liquid cooling",
            "RGB lighting"
        ],
        specifications: {
            processor: "Intel Core i9-12900K",
            graphics: "NVIDIA GeForce RTX 3080 Ti",
            ram: "32GB DDR4",
            weight: "19kg",
            color: "Shadow Black"
        },
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08173948.png"
    },
    {
        id: "msi-meg-aegis-ti5",
        name: "MSI MEG Aegis Ti5",
        type: "pc",
        brand: "MSI",
        price: 39999.99,
        originalPrice: 42999.99,
        storage: "2TB SSD + 3TB HDD",
        description: "Ultra-premium gaming desktop with unique design and top-tier components.",
        features: [
            "Intel Core i9-11900K",
            "NVIDIA GeForce RTX 3090",
            "64GB DDR4 RAM",
            "Silent Storm Cooling 4",
            "Mystic Light RGB"
        ],
        specifications: {
            processor: "Intel Core i9-11900K",
            graphics: "NVIDIA GeForce RTX 3090",
            ram: "64GB DDR4",
            weight: "18.5kg",
            color: "Black"
        },
        image: "https://storage-asset.msi.com/global/picture/image/feature/desktop/Aegis/MEG-Aegis-Ti5/kv-pd.png"
    },
    {
        id: "lenovo-legion-t7",
        name: "Lenovo Legion T7",
        type: "pc",
        brand: "Lenovo",
        price: 29999.99,
        originalPrice: 32999.99,
        storage: "1TB SSD + 2TB HDD",
        description: "Powerful gaming desktop with clean design and excellent thermal management.",
        features: [
            "Intel Core i7-12700K",
            "NVIDIA GeForce RTX 3070 Ti",
            "32GB DDR4 RAM",
            "Liquid cooling",
            "Legion Coldfront 3.0"
        ],
        specifications: {
            processor: "Intel Core i7-12700K",
            graphics: "NVIDIA GeForce RTX 3070 Ti",
            ram: "32GB DDR4",
            weight: "14.5kg",
            color: "Storm Grey"
        },
        image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTk4NTU0fGltYWdlL3BuZ3xoMDgvaGJmLzExNDUxNDI0NzEwNjg2LnBuZ3w0ZmNiZWYzZjk4ZWQ0Y2JkNjVlYmFkM2EyMmJlZTdjZDU5ZmY1MmNjZWRmMzJiYzQ5ZjVlYzRmZDI4MmNjMTRj/lenovo-tower-legion-t7-34imz5-intel-hero.png"
    },
    {
        id: "acer-predator-orion-3000",
        name: "Acer Predator Orion 3000",
        type: "pc",
        brand: "Acer",
        price: 21999.99,
        originalPrice: 23999.99,
        storage: "512GB SSD + 1TB HDD",
        description: "Mid-range gaming desktop with compact design and good performance.",
        features: [
            "Intel Core i5-11600K",
            "NVIDIA GeForce RTX 3060",
            "16GB DDR4 RAM",
            "FrostBlade cooling",
            "Predator RGB lighting"
        ],
        specifications: {
            processor: "Intel Core i5-11600K",
            graphics: "NVIDIA GeForce RTX 3060",
            ram: "16GB DDR4",
            weight: "12kg",
            color: "Black"
        },
        image: "https://static-ecapac.acer.com/media/catalog/product/p/r/predator-orion-3000-po3-640-wp-bl-modelpreview.png"
    }
];

// Gaming Monitor Products
const monitorProducts = [
    {
        id: "asus-rog-swift-pg279qm",
        name: "ASUS ROG Swift PG279QM",
        type: "monitor",
        brand: "ASUS",
        price: 14999.99,
        originalPrice: 16999.99,
        storage: "N/A",
        screenSize: "27 inches",
        description: "27-inch WQHD gaming monitor with 240Hz refresh rate and G-SYNC technology.",
        features: [
            "27-inch WQHD (2560 x 1440) IPS panel",
            "240Hz refresh rate",
            "1ms response time",
            "NVIDIA G-SYNC",
            "HDR400"
        ],
        specifications: {
            size: "27 inches",
            resolution: "2560 x 1440",
            refreshRate: "240Hz",
            responseTime: "1ms",
            panelType: "IPS",
            color: "Black"
        },
        image: "https://dlcdnwebimgs.asus.com/gain/36E29DC8-B7AB-4D99-8961-B4BB78D5F4C5/w1000/h732"
    },
    {
        id: "samsung-odyssey-g7",
        name: "Samsung Odyssey G7",
        type: "monitor",
        brand: "Samsung",
        price: 12999.99,
        originalPrice: 13999.99,
        storage: "N/A",
        screenSize: "32 inches",
        description: "32-inch curved WQHD gaming monitor with 240Hz refresh rate and 1ms response time.",
        features: [
            "32-inch WQHD (2560 x 1440) VA panel",
            "1000R curved screen",
            "240Hz refresh rate",
            "1ms response time",
            "AMD FreeSync Premium Pro"
        ],
        specifications: {
            size: "32 inches",
            resolution: "2560 x 1440",
            refreshRate: "240Hz",
            responseTime: "1ms",
            panelType: "VA",
            color: "Black"
        },
        image: "https://images.samsung.com/is/image/samsung/p6pim/za/lc32g75tqsuxen/gallery/za-odyssey-g7-lc32g75tqsuxen-531180431?$720_576_PNG$"
    },
    {
        id: "lg-ultragear-27gp950",
        name: "LG UltraGear 27GP950",
        type: "monitor",
        brand: "LG",
        price: 15999.99,
        originalPrice: 17999.99,
        storage: "N/A",
        screenSize: "27 inches",
        description: "27-inch UHD gaming monitor with 144Hz refresh rate and NVIDIA G-SYNC compatibility.",
        features: [
            "27-inch UHD (3840 x 2160) Nano IPS panel",
            "144Hz refresh rate (160Hz OC)",
            "1ms response time",
            "NVIDIA G-SYNC Compatible",
            "AMD FreeSync Premium Pro"
        ],
        specifications: {
            size: "27 inches",
            resolution: "3840 x 2160",
            refreshRate: "144Hz (160Hz OC)",
            responseTime: "1ms",
            panelType: "Nano IPS",
            color: "Black/Red"
        },
        image: "https://www.lg.com/za/images/monitors/md07529912/gallery/medium01.jpg"
    },
    {
        id: "alienware-aw3423dw",
        name: "Alienware AW3423DW",
        type: "monitor",
        brand: "Alienware",
        price: 24999.99,
        originalPrice: 27999.99,
        storage: "N/A",
        screenSize: "34 inches",
        description: "34-inch curved QD-OLED gaming monitor with 175Hz refresh rate and G-SYNC Ultimate.",
        features: [
            "34-inch WQHD (3440 x 1440) QD-OLED panel",
            "1800R curved screen",
            "175Hz refresh rate",
            "0.1ms response time",
            "NVIDIA G-SYNC Ultimate"
        ],
        specifications: {
            size: "34 inches",
            resolution: "3440 x 1440",
            refreshRate: "175Hz",
            responseTime: "0.1ms",
            panelType: "QD-OLED",
            color: "Lunar Light"
        },
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/media-gallery/monitor-alienware-aw3423dw-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3635&hei=2548&qlt=100,0&resMode=sharp2&size=3635,2548"
    },
    {
        id: "msi-optix-mag274qrf-qd",
        name: "MSI Optix MAG274QRF-QD",
        type: "monitor",
        brand: "MSI",
        price: 9999.99,
        originalPrice: 10999.99,
        storage: "N/A",
        screenSize: "27 inches",
        description: "27-inch WQHD gaming monitor with Quantum Dot technology and 165Hz refresh rate.",
        features: [
            "27-inch WQHD (2560 x 1440) Rapid IPS panel",
            "Quantum Dot technology",
            "165Hz refresh rate",
            "1ms response time",
            "NVIDIA G-SYNC Compatible"
        ],
        specifications: {
            size: "27 inches",
            resolution: "2560 x 1440",
            refreshRate: "165Hz",
            responseTime: "1ms",
            panelType: "Rapid IPS",
            color: "Black"
        },
        image: "https://asset.msi.com/resize/image/global/product/product_16099037328c9e9f5f5e8a5b9c4d0a5c9c3e3f9c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
    },
    {
        id: "acer-predator-x28",
        name: "Acer Predator X28",
        type: "monitor",
        brand: "Acer",
        price: 13999.99,
        originalPrice: 15999.99,
        storage: "N/A",
        screenSize: "28 inches",
        description: "28-inch UHD gaming monitor with 152Hz refresh rate and NVIDIA G-SYNC.",
        features: [
            "28-inch UHD (3840 x 2160) IPS panel",
            "152Hz refresh rate",
            "1ms response time",
            "NVIDIA G-SYNC",
            "VESA DisplayHDR 400"
        ],
        specifications: {
            size: "28 inches",
            resolution: "3840 x 2160",
            refreshRate: "152Hz",
            responseTime: "1ms",
            panelType: "IPS",
            color: "Black"
        },
        image: "https://static-ecapac.acer.com/media/catalog/product/x/2/x28-p_01_1.png"
    },
    {
        id: "xiaomi-mi-curved-34",
        name: "Xiaomi Mi Curved Gaming Monitor 34",
        type: "monitor",
        brand: "Xiaomi",
        price: 8999.99,
        originalPrice: 9999.99,
        storage: "N/A",
        screenSize: "34 inches",
        description: "34-inch curved WQHD gaming monitor with 144Hz refresh rate and AMD FreeSync.",
        features: [
            "34-inch WQHD (3440 x 1440) VA panel",
            "1500R curved screen",
            "144Hz refresh rate",
            "4ms response time",
            "AMD FreeSync"
        ],
        specifications: {
            size: "34 inches",
            resolution: "3440 x 1440",
            refreshRate: "144Hz",
            responseTime: "4ms",
            panelType: "VA",
            color: "Black"
        },
        image: "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-curved-gaming-monitor-34/pc-specs-01.png"
    }
];

// Combine all products for unified filtering
const allGamingProducts = [...consoleProducts, ...laptopProducts, ...pcGamingProducts, ...monitorProducts];

// ==================== DISPLAY FUNCTIONS ====================

/**
 * Display gaming products based on filters
 * @param {string} productType - The product type to filter by (console, laptop, pc, or null for all)
 * @param {Array} brands - Array of brands to filter by
 * @param {Array} priceRanges - Array of price ranges to filter by
 * @param {Array} storageOptions - Array of storage options to filter by
 * @param {number} page - The current page number
 * @param {string} sortBy - The sorting criteria
 */
function displayGamingProducts(productType = null, brands = [], priceRanges = [], storageOptions = [], screenSizes = [], processors = [], page = 1, sortBy = "relevance") {
    // Get the products grid element
    const productsGrid = document.getElementById("products-grid");
    
    // Clear the grid
    productsGrid.innerHTML = "";
    
    // Filter products by type if specified
    let filteredProducts = allGamingProducts;
    if (productType) {
        filteredProducts = allGamingProducts.filter(product => product.type === productType);
    }
    
    // Apply brand filter if specified
    if (brands.length > 0) {
        filteredProducts = filteredProducts.filter(product => brands.includes(product.brand));
    }
    
    // Apply price range filter if specified
    if (priceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const price = product.price;
            return priceRanges.some(range => {
                const [min, max] = range.split('-').map(Number);
                return price >= min && (max ? price <= max : true);
            });
        });
    }
    
    // Apply storage filter if specified
    if (storageOptions.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return storageOptions.some(option => product.storage && product.storage.includes(option));
        });
    }
    
    // Apply screen size filter if specified
    if (screenSizes.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return screenSizes.some(size => product.screenSize && product.screenSize.includes(size));
        });
    }
    
    // Apply processor filter if specified (only for laptops and PCs)
    if (processors.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            // Only apply to laptops and PCs
            if (product.type !== 'laptop' && product.type !== 'pc') return true;
            
            // Check if the processor specification includes any of the selected processors
            return processors.some(processor =>
                product.specifications &&
                product.specifications.processor &&
                product.specifications.processor.includes(processor)
            );
        });
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
    if (paginatedProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 0;">
                <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                <p style="font-size: 18px; margin-bottom: 20px; font-weight: bold;">No products match your filters.</p>
                <button class="filter-button clear" onclick="resetFilters()" style="margin-top: 10px;">Reset Filters</button>
            </div>
        `;
    } else {
        paginatedProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
    
    // Update pagination
    updatePagination(page, totalPages, productType, brands, priceRanges, storageOptions, screenSizes, sortBy);
    
    // Update section title
    updateSectionTitle(productType);
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
        <div class="product-content">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-specs">
                    ${product.type === 'monitor'
                        ? `<span>${product.screenSize || ''}</span>`
                        : `<span>${product.storage || ''}</span>`}
                </div>
                <div class="product-price">
                    <span class="current-price">R${product.price.toLocaleString()}</span>
                </div>
                <div class="product-retailers">
                    <span>2 retailers</span>
                </div>
            </div>
        </div>
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
        window.location.href = `gaming-info.html?id=${product.id}`;
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
                    url: `gaming-info.html?id=${product.id}`
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
    if (priceAlertBell && typeof window.togglePriceAlert === 'function') {
        priceAlertBell.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productId = this.getAttribute('data-product-id');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));
            const productName = card.querySelector('.product-name').textContent;
            const productImageElement = card.querySelector('.product-image');
            const productImage = productImageElement ? productImageElement.src : '';
            
            window.togglePriceAlert(productId, productPrice, productName, productImage);
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
 * @param {string} productType - The product type filter
 * @param {Array} brands - The brand filters
 * @param {Array} brands - The brand filters
 * @param {Array} priceRanges - The price range filters
 * @param {Array} storageOptions - The storage option filters
 * @param {string} sortBy - The sorting criteria
 */
function updatePagination(currentPage, totalPages, productType, brands, priceRanges, storageOptions, screenSizes, processors, sortBy) {
    const paginationElement = document.getElementById("pagination");
    if (!paginationElement) return;
    
    const pagesContainer = paginationElement.querySelector(".pages");
    if (!pagesContainer) return;
    
    // Clear existing pages
    pagesContainer.innerHTML = "";
    
    // Previous button
    const prevButton = paginationElement.querySelector('[data-page="prev"]');
    if (prevButton) {
        prevButton.disabled = currentPage === 1;
        prevButton.onclick = () => {
            if (currentPage > 1) {
                displayGamingProducts(productType, brands, priceRanges, storageOptions, screenSizes, processors, currentPage - 1, sortBy);
            }
        };
    }
    
    // Next button
    const nextButton = paginationElement.querySelector('[data-page="next"]');
    if (nextButton) {
        nextButton.disabled = currentPage === totalPages;
        nextButton.onclick = () => {
            if (currentPage < totalPages) {
                displayGamingProducts(productType, brands, priceRanges, storageOptions, screenSizes, processors, currentPage + 1, sortBy);
            }
        };
    }
    
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
        firstPageBtn.onclick = () => displayGamingProducts(productType, brands, priceRanges, storageOptions, screenSizes, processors, 1, sortBy);
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
        pageBtn.onclick = () => displayGamingProducts(productType, brands, priceRanges, storageOptions, screenSizes, processors, i, sortBy);
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
        lastPageBtn.onclick = () => displayGamingProducts(productType, brands, priceRanges, storageOptions, screenSizes, processors, totalPages, sortBy);
        pagesContainer.appendChild(lastPageBtn);
    }
}

/**
 * Update section title based on product type
 * @param {string} productType - The product type
 */
function updateSectionTitle(productType) {
    const sectionTitle = document.querySelector(".section-title");
    if (!sectionTitle) return;
    
    switch (productType) {
        case "console":
            sectionTitle.textContent = "Gaming Consoles";
            break;
        case "laptop":
            sectionTitle.textContent = "Gaming Laptops";
            break;
        case "pc":
            sectionTitle.textContent = "Gaming PCs";
            break;
        case "monitor":
            sectionTitle.textContent = "Gaming Monitors";
            break;
        default:
            sectionTitle.textContent = "Gaming Products";
            break;
    }
}

/**
 * Toggle filter panel visibility
 * @param {string} panelId - The ID of the panel to toggle
 */
function toggleFilterPanel(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    
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
    // Get the product type
    const productTypeRadios = document.querySelectorAll('input[name="product-type"]');
    let selectedProductType = null;
    productTypeRadios.forEach(radio => {
        if (radio.checked && radio.value !== 'all') {
            selectedProductType = radio.value;
        }
    });
    
    // Get selected brands
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const selectedBrands = Array.from(brandCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected price ranges
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    const selectedPriceRanges = Array.from(priceCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Get selected storage options
    const storageCheckboxes = document.querySelectorAll('input[name="storage"]');
    const selectedStorageOptions = Array.from(storageCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected screen sizes
    const screenSizeCheckboxes = document.querySelectorAll('input[name="screen-size"]');
    const selectedScreenSizes = Array.from(screenSizeCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get selected processors
    const processorCheckboxes = document.querySelectorAll('input[name="processor"]');
    const selectedProcessors = Array.from(processorCheckboxes)
        .filter(cb => cb.checked && cb.value !== 'all')
        .map(cb => cb.value);
    
    // Get sort option
    const sortBySelect = document.getElementById('sort-by');
    const sortBy = sortBySelect ? sortBySelect.value : 'relevance';
    
    // Display filtered products
    displayGamingProducts(
        selectedProductType,
        selectedBrands,
        selectedPriceRanges,
        selectedStorageOptions,
        selectedScreenSizes,
        selectedProcessors,
        1, // Reset to page 1 when applying filters
        sortBy
    );
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Update the visibility of the "Clear All" button
    updateClearAllButtonVisibility();
}

/**
 * Reset all filters
 */
function resetFilters() {
    // Reset product type radios
    document.querySelectorAll('input[name="product-type"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset brand checkboxes
    document.querySelectorAll('input[name="brand"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset price checkboxes
    document.querySelectorAll('input[name="price"]').forEach(input => {
        input.checked = false;
    });
    
    // Reset storage checkboxes
    document.querySelectorAll('input[name="storage"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset screen size checkboxes
    document.querySelectorAll('input[name="screen-size"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Reset processor checkboxes
    document.querySelectorAll('input[name="processor"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Display all products
    displayGamingProducts(null, [], [], [], [], [], 1, "relevance");
    
    // Close all filter panels
    closeAllFilterPanels();
    
    // Hide clear all button
    const clearAllButton = document.getElementById('clear-filters');
    if (clearAllButton) {
        clearAllButton.style.display = 'none';
    }
}

/**
 * Update the visibility of the Clear All button
 */
function updateClearAllButtonVisibility() {
    const clearAllButton = document.getElementById('clear-filters');
    if (!clearAllButton) return;
    
    // Check if any filters are applied
    const anyProductTypeSelected = document.querySelectorAll('input[name="product-type"]:checked:not([value="all"])').length > 0;
    const anyBrandSelected = document.querySelectorAll('input[name="brand"]:checked:not([value="all"])').length > 0;
    const anyPriceSelected = document.querySelectorAll('input[name="price"]:checked').length > 0;
    const anyStorageSelected = document.querySelectorAll('input[name="storage"]:checked:not([value="all"])').length > 0;
    const anyScreenSizeSelected = document.querySelectorAll('input[name="screen-size"]:checked:not([value="all"])').length > 0;
    const anyProcessorSelected = document.querySelectorAll('input[name="processor"]:checked:not([value="all"])').length > 0;
    
    // Show/hide clear all button
    if (anyProductTypeSelected || anyBrandSelected || anyPriceSelected || anyStorageSelected || anyScreenSizeSelected || anyProcessorSelected) {
        clearAllButton.style.display = 'flex';
    } else {
        clearAllButton.style.display = 'none';
    }
}

/**
 * Initialize filter panels with appropriate options
 */
function initializeFilterPanels() {
    // Create brand filter panel
    const brandPanel = document.getElementById('brand-panel');
    if (brandPanel) {
        const brandOptions = brandPanel.querySelector('.filter-options');
        if (brandOptions) {
            // Get unique brands
            const consoleBrands = [...new Set(consoleProducts.map(product => product.brand))];
            const laptopBrands = [...new Set(laptopProducts.map(product => product.brand))];
            const pcBrands = [...new Set(pcGamingProducts.map(product => product.brand))];
            const monitorBrands = [...new Set(monitorProducts.map(product => product.brand))];
            const allBrands = [...new Set([...consoleBrands, ...laptopBrands, ...pcBrands, ...monitorBrands])];
            
            // Create brand options
            let brandOptionsHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="brand" value="all" checked> All Brands
                </label>
            `;
            
            allBrands.forEach(brand => {
                brandOptionsHTML += `
                    <label class="filter-option">
                        <input type="checkbox" name="brand" value="${brand}"> ${brand}
                    </label>
                `;
            });
            
            brandOptions.innerHTML = brandOptionsHTML;
        }
    }
    
    // Create storage filter panel
    const storagePanel = document.getElementById('storage-panel');
    if (storagePanel) {
        const storageOptions = storagePanel.querySelector('.filter-options');
        if (storageOptions) {
            storageOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="storage" value="all" checked> All Storage Options
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="storage" value="32GB"> 32GB
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="storage" value="64GB"> 64GB
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="storage" value="512GB"> 512GB SSD
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="storage" value="1TB"> 1TB SSD
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="storage" value="2TB"> 2TB SSD
                </label>
            `;
        }
    }
    
    // Create screen size filter panel
    const screenSizePanel = document.getElementById('screen-size-panel');
    if (screenSizePanel) {
        const screenSizeOptions = screenSizePanel.querySelector('.filter-options');
        if (screenSizeOptions) {
            screenSizeOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="screen-size" value="all" checked> All Screen Sizes
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="screen-size" value="27 inches"> 27 inches
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="screen-size" value="28 inches"> 28 inches
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="screen-size" value="32 inches"> 32 inches
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="screen-size" value="34 inches"> 34 inches
                </label>
            `;
        }
    }
    
    // Create processor filter panel
    const processorPanel = document.getElementById('processor-panel');
    if (processorPanel) {
        const processorOptions = processorPanel.querySelector('.filter-options');
        if (processorOptions) {
            processorOptions.innerHTML = `
                <label class="filter-option">
                    <input type="checkbox" name="processor" value="all" checked> All Processors
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="processor" value="Intel Core i5"> Intel Core i5
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="processor" value="Intel Core i7"> Intel Core i7
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="processor" value="Intel Core i9"> Intel Core i9
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="processor" value="AMD Ryzen 5"> AMD Ryzen 5
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="processor" value="AMD Ryzen 7"> AMD Ryzen 7
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="processor" value="AMD Ryzen 9"> AMD Ryzen 9
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="processor" value="Intel Core Ultra"> Intel Core Ultra
                </label>
            `;
        }
    }
    
    // Create price filter panel
    const pricePanel = document.getElementById('price-panel');
    if (pricePanel) {
        const priceOptions = pricePanel.querySelector('.filter-options');
        if (priceOptions) {
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
                    <input type="checkbox" name="price" value="20000-25000"> R20,000 - R25,000
                </label>
                <label class="filter-option">
                    <input type="checkbox" name="price" value="25000-100000"> Over R25,000
                </label>
            `;
        }
    }
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize filter panels
    initializeFilterPanels();
    
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get("type");
    
    // If type parameter exists, select the corresponding radio button
    if (typeParam) {
        const productTypeRadio = document.querySelector(`input[name="product-type"][value="${typeParam}"]`);
        if (productTypeRadio) {
            productTypeRadio.checked = true;
            
            // Update section title based on product type
            updateSectionTitle(typeParam);
            
            // Hide product type filter button for all product types
            const productTypeButton = document.querySelector('.filter-button[data-panel="product-type-panel"]');
            if (productTypeButton) {
                productTypeButton.style.display = "none";
            }
            
            // Show screen size filter button only for monitor products, hide for others
            const screenSizeButton = document.querySelector('.filter-button[data-panel="screen-size-panel"]');
            if (screenSizeButton) {
                // Always show screen size filter for monitor products
                if (typeParam === "monitor") {
                    screenSizeButton.style.display = "flex";
                    console.log("Screen size filter should be visible for monitors");
                } else {
                    screenSizeButton.style.display = "none";
                }
            }
            
            // Hide storage filter button for PC, laptop, and monitor products
            const storageButton = document.querySelector('.filter-button[data-panel="storage-panel"]');
            if (storageButton) {
                if (typeParam === "laptop" || typeParam === "pc" || typeParam === "monitor") {
                    storageButton.style.display = "none";
                } else {
                    storageButton.style.display = "flex";
                }
            }
            
            // Show processor filter button only for laptop and PC gaming products, hide for others
            const processorButton = document.querySelector('.filter-button[data-panel="processor-panel"]');
            if (processorButton) {
                // Always show processor filter for laptop and PC gaming
                if (typeParam === "laptop" || typeParam === "pc") {
                    processorButton.style.display = "flex";
                } else {
                    processorButton.style.display = "none";
                }
            }
        }
    }
    
    // Set up sort dropdown
    const sortBySelect = document.getElementById("sort-by");
    if (sortBySelect) {
        sortBySelect.addEventListener("change", function() {
            // Get current filters
            const productTypeRadios = document.querySelectorAll('input[name="product-type"]');
            let selectedProductType = null;
            productTypeRadios.forEach(radio => {
                if (radio.checked && radio.value !== 'all') {
                    selectedProductType = radio.value;
                }
            });
            
            const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
            const selectedBrands = Array.from(brandCheckboxes)
                .filter(cb => cb.checked && cb.value !== 'all')
                .map(cb => cb.value);
            
            const priceCheckboxes = document.querySelectorAll('input[name="price"]');
            const selectedPriceRanges = Array.from(priceCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            
            const storageCheckboxes = document.querySelectorAll('input[name="storage"]');
            const selectedStorageOptions = Array.from(storageCheckboxes)
                .filter(cb => cb.checked && cb.value !== 'all')
                .map(cb => cb.value);
            
            // Display products with current filters and new sort
            // Get selected screen sizes
            const screenSizeCheckboxes = document.querySelectorAll('input[name="screen-size"]');
            const selectedScreenSizes = Array.from(screenSizeCheckboxes)
                .filter(cb => cb.checked && cb.value !== 'all')
                .map(cb => cb.value);
            
            // Get selected processors
            const processorCheckboxes = document.querySelectorAll('input[name="processor"]');
            const selectedProcessors = Array.from(processorCheckboxes)
                .filter(cb => cb.checked && cb.value !== 'all')
                .map(cb => cb.value);
            
            displayGamingProducts(
                selectedProductType,
                selectedBrands,
                selectedPriceRanges,
                selectedStorageOptions,
                selectedScreenSizes,
                selectedProcessors,
                1, // Reset to page 1 when changing sort
                this.value
            );
        });
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
    
    // Set up product type radio buttons
    const productTypeRadios = document.querySelectorAll('input[name="product-type"]');
    productTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                const productType = this.value === 'all' ? null : this.value;
                
                // Get current filters
                const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
                const selectedBrands = Array.from(brandCheckboxes)
                    .filter(cb => cb.checked && cb.value !== 'all')
                    .map(cb => cb.value);
                
                const priceCheckboxes = document.querySelectorAll('input[name="price"]');
                const selectedPriceRanges = Array.from(priceCheckboxes)
                    .filter(cb => cb.checked)
                    .map(cb => cb.value);
                
                const storageCheckboxes = document.querySelectorAll('input[name="storage"]');
                const selectedStorageOptions = Array.from(storageCheckboxes)
                    .filter(cb => cb.checked && cb.value !== 'all')
                    .map(cb => cb.value);
                
                // Display products with new product type filter
                // Get selected screen sizes
                const screenSizeCheckboxes = document.querySelectorAll('input[name="screen-size"]');
                const selectedScreenSizes = Array.from(screenSizeCheckboxes)
                    .filter(cb => cb.checked && cb.value !== 'all')
                    .map(cb => cb.value);
                
                // Get selected processors
                const processorCheckboxes = document.querySelectorAll('input[name="processor"]');
                const selectedProcessors = Array.from(processorCheckboxes)
                    .filter(cb => cb.checked && cb.value !== 'all')
                    .map(cb => cb.value);
                
                displayGamingProducts(
                    productType,
                    selectedBrands,
                    selectedPriceRanges,
                    selectedStorageOptions,
                    selectedScreenSizes,
                    selectedProcessors,
                    1, // Reset to page 1 when changing product type
                    document.getElementById('sort-by').value
                );
                
                // Update clear all button visibility
                updateClearAllButtonVisibility();
            }
        });
    });
    
    // Close filter panels when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.filter-button') && !event.target.closest('.filter-panel')) {
            closeAllFilterPanels();
        }
    });
    
    // Hide product type filter button by default
    const productTypeButton = document.querySelector('.filter-button[data-panel="product-type-panel"]');
    if (productTypeButton) {
        productTypeButton.style.display = "none";
    }
    
    // Hide screen size filter button by default, but show it if monitor type is selected
    const screenSizeButton = document.querySelector('.filter-button[data-panel="screen-size-panel"]');
    if (screenSizeButton) {
        if (typeParam === "monitor") {
            screenSizeButton.style.display = "flex";
            console.log("Screen size filter initialized for monitors");
        } else {
            screenSizeButton.style.display = "none";
        }
    }
    
    // Only hide processor button by default if no product type is selected
    // It will be shown later if the product type is laptop or pc
    const processorButton = document.querySelector('.filter-button[data-panel="processor-panel"]');
    if (processorButton && !typeParam) {
        processorButton.style.display = "none";
    }
    
    // Show storage filter by default, it will be hidden later if needed
    const storageButton = document.querySelector('.filter-button[data-panel="storage-panel"]');
    if (storageButton && !typeParam) {
        storageButton.style.display = "flex";
    }
    
    // Display products based on URL parameters or all products
    if (typeParam) {
        displayGamingProducts(typeParam, [], [], [], [], [], 1, "relevance");
    } else {
        displayGamingProducts();
    }
});

// Make functions available globally
window.displayGamingProducts = displayGamingProducts;
window.toggleFilterPanel = toggleFilterPanel;
window.closeAllFilterPanels = closeAllFilterPanels;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;

// Helper function for price alerts
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