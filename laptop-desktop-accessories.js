const API_URL = 'https://xf9zlapr5e.execute-api.af-south-1.amazonaws.com/laptop-desktop-accessories';

let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
const productsPerPage = 14;
let currentAccessoryType = null; // Track current accessory type (adapters, usb-hubs, keyboards, etc.)

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
    chargers: [
        {
            product_id: "charger1",
            brand: "Huawei",
            model: "SuperCharge 66W USB-C Charger",
            imageUrl: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/supercharge-power-adapter-66w/img/pc/huawei-supercharge-power-adapter-66w-white-pc.png",
            offers: [
                { price: 699, originalPrice: 799 },
                { price: 749, originalPrice: 799 }
            ],
            specs: {
                Performance: {
                    "Output": "66W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes",
                    "Type": "Wireless"
                },
                Features: {
                    "Compatible Devices": "Huawei Smartphones, Tablets, Laptops"
                }
            }
        },
        {
            product_id: "charger2",
            brand: "Apple",
            model: "20W USB-C Power Adapter",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1542406417329",
            offers: [
                { price: 399, originalPrice: 499 },
                { price: 449, originalPrice: 499 }
            ],
            specs: {
                Performance: {
                    "Output": "20W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes",
                    "Type": "Wired"
                },
                Features: {
                    "Compatible Devices": "iPhone, iPad, AirPods"
                }
            }
        },
        {
            product_id: "charger3",
            brand: "HP",
            model: "45W USB-C Power Adapter",
            imageUrl: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06169502.png",
            offers: [
                { price: 499, originalPrice: 599 },
                { price: 549, originalPrice: 599 }
            ],
            specs: {
                Performance: {
                    "Output": "45W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes",
                    "Type": "Wired"
                },
                Features: {
                    "Compatible Devices": "HP Laptops, Ultrabooks"
                }
            }
        },
        {
            product_id: "charger4",
            brand: "Acer",
            model: "65W USB-C Charger",
            imageUrl: "https://static.acer.com/up/Resource/Acer/Accessories/Power_Adapter/images/1000x1000/Power-Adapter-65W-USB-Type-C-main.png",
            offers: [
                { price: 549, originalPrice: 649 },
                { price: 599, originalPrice: 649 }
            ],
            specs: {
                Performance: {
                    "Output": "65W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes",
                    "Type": "Wired"
                },
                Features: {
                    "Compatible Devices": "Acer Laptops, Chromebooks"
                }
            }
        },
        {
            product_id: "charger5",
            brand: "Apple",
            model: "MagSafe Charger",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1602179308000",
            offers: [
                { price: 599, originalPrice: 699 },
                { price: 649, originalPrice: 699 }
            ],
            specs: {
                Performance: {
                    "Output": "15W",
                    "Connector": "MagSafe",
                    "Fast Charging": "Yes",
                    "Type": "Wireless"
                },
                Features: {
                    "Compatible Devices": "iPhone 12 and newer"
                }
            }
        },
        {
            product_id: "charger6",
            brand: "Dell",
            model: "90W Laptop Charger",
            imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/power-adapters/da90pm130/global-spi/ng/peripherals-power-adapters-da90pm130-xngh1-campaign-hero-504x350-ng.psd?fmt=jpg",
            offers: [
                { price: 799, originalPrice: 899 },
                { price: 849, originalPrice: 899 }
            ],
            specs: {
                Performance: {
                    "Output": "90W",
                    "Connector": "Dell Proprietary",
                    "Fast Charging": "Yes",
                    "Type": "Wired"
                },
                Features: {
                    "Compatible Devices": "Dell Laptops, Precision, Alienware"
                }
            }
        },
        {
            product_id: "charger7",
            brand: "Lenovo",
            model: "65W Laptop Charger",
            imageUrl: "https://www.lenovo.com/medias/GX20L29355-01-500x400.png?context=bWFzdGVyfHJvb3R8MzM1Njl8aW1hZ2UvcG5nfGg0Ni9oZWEvMTA2MzQzNzc0NzQwNzgucG5nfDk0ZTJiMjYzZDk3ZDJkNzM0YTI2ZjlkMDgxZjIzYzZhMzM5MjYyNjJhZWQ5NTVkZWZmMDQwZmY5NzU5NzQ5Yjg",
            offers: [
                { price: 649, originalPrice: 749 },
                { price: 699, originalPrice: 749 }
            ],
            specs: {
                Performance: {
                    "Output": "65W",
                    "Connector": "Lenovo Slim Tip",
                    "Fast Charging": "Yes",
                    "Type": "Wired"
                },
                Features: {
                    "Compatible Devices": "Lenovo ThinkPad, IdeaPad"
                }
            }
        },
        {
            product_id: "charger8",
            brand: "HP",
            model: "65W Smart AC Laptop Adapter",
            imageUrl: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06169502.png",
            offers: [
                { price: 699, originalPrice: 799 },
                { price: 749, originalPrice: 799 }
            ],
            specs: {
                Performance: {
                    "Output": "65W",
                    "Connector": "HP Smart Pin",
                    "Fast Charging": "Yes",
                    "Type": "Wired"
                },
                Features: {
                    "Compatible Devices": "HP Laptops, EliteBook, ProBook"
                }
            }
        }
    ],
    adapters: [
        {
            product_id: "adapter1",
            brand: "Dell",
            model: "65W USB-C Power Adapter",
            imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/power-adapters/da65usb-c/global-spi/ng/peripherals-power-adapters-da65usb-c-xngh1-campaign-hero-504x350-ng.psd?fmt=jpg",
            offers: [
                { price: 599, originalPrice: 699 },
                { price: 649, originalPrice: 699 }
            ],
            specs: {
                Performance: {
                    "Output": "65W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "Dell Laptops, Ultrabooks, Tablets"
                }
            }
        },
        {
            product_id: "adapter2",
            brand: "Apple",
            model: "96W USB-C Power Adapter",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX0J2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1618611837000",
            offers: [
                { price: 899, originalPrice: 999 },
                { price: 949, originalPrice: 999 }
            ],
            specs: {
                Performance: {
                    "Output": "96W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "MacBook Pro, MacBook Air"
                }
            }
        },
        {
            product_id: "adapter3",
            brand: "Lenovo",
            model: "65W USB-C AC Adapter",
            imageUrl: "https://www.lenovo.com/medias/GX20M73653-01-500x400.png?context=bWFzdGVyfHJvb3R8MzM1Njl8aW1hZ2UvcG5nfGg0Ni9oZWEvMTA2MzQzNzc0NzQwNzgucG5nfDk0ZTJiMjYzZDk3ZDJkNzM0YTI2ZjlkMDgxZjIzYzZhMzM5MjYyNjJhZWQ5NTVkZWZmMDQwZmY5NzU5NzQ5Yjg",
            offers: [
                { price: 549, originalPrice: 649 },
                { price: 599, originalPrice: 649 }
            ],
            specs: {
                Performance: {
                    "Output": "65W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "Lenovo ThinkPad, IdeaPad, Yoga"
                }
            }
        },
        {
            product_id: "adapter4",
            brand: "HP",
            model: "65W USB-C Power Adapter",
            imageUrl: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06169502.png",
            offers: [
                { price: 579, originalPrice: 679 },
                { price: 629, originalPrice: 679 }
            ],
            specs: {
                Performance: {
                    "Output": "65W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "HP Spectre, Envy, EliteBook"
                }
            }
        },
        {
            product_id: "adapter5",
            brand: "Anker",
            model: "100W GaN II USB-C Charger",
            imageUrl: "https://m.media-amazon.com/images/I/61OBsYn0JFL._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 799, originalPrice: 899 },
                { price: 849, originalPrice: 899 }
            ],
            specs: {
                Performance: {
                    "Output": "100W",
                    "Connector": "USB-C",
                    "Fast Charging": "Yes"
                },
                Features: {
                    "Compatible Devices": "MacBook Pro, Dell XPS, HP Spectre, Lenovo ThinkPad"
                }
            }
        }
    ],
    usb_hubs: [
        {
            product_id: "usbhub1",
            brand: "Anker",
            model: "PowerExpand+ 7-in-1 USB-C Hub",
            imageUrl: "https://m.media-amazon.com/images/I/61bwTIJQWXL._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 699, originalPrice: 799 },
                { price: 749, originalPrice: 799 }
            ],
            specs: {
                Performance: {
                    "Ports": "7",
                    "Data Transfer": "5Gbps",
                    "Power Delivery": "85W"
                },
                Features: {
                    "HDMI Output": "4K@60Hz",
                    "SD Card Reader": "Yes"
                }
            }
        },
        {
            product_id: "usbhub2",
            brand: "CalDigit",
            model: "TS3 Plus Thunderbolt 3 Dock",
            imageUrl: "https://m.media-amazon.com/images/I/71avk+B5rJL._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 2499, originalPrice: 2799 },
                { price: 2599, originalPrice: 2799 }
            ],
            specs: {
                Performance: {
                    "Ports": "15",
                    "Data Transfer": "40Gbps",
                    "Power Delivery": "87W"
                },
                Features: {
                    "DisplayPort": "Yes",
                    "Ethernet": "Gigabit"
                }
            }
        },
        {
            product_id: "usbhub3",
            brand: "Satechi",
            model: "Multi-Port Adapter V2",
            imageUrl: "https://m.media-amazon.com/images/I/71Tl2Yzk5+L._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 899, originalPrice: 999 },
                { price: 949, originalPrice: 999 }
            ],
            specs: {
                Performance: {
                    "Ports": "9",
                    "Data Transfer": "5Gbps",
                    "Power Delivery": "60W"
                },
                Features: {
                    "HDMI Output": "4K@30Hz",
                    "Ethernet": "Gigabit"
                }
            }
        },
        {
            product_id: "usbhub4",
            brand: "Dell",
            model: "USB-C Mobile Adapter",
            imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/adapters/da300/global-spi/ng/peripherals-adapter-da300-campaign-hero-504x350-ng.psd?fmt=jpg",
            offers: [
                { price: 799, originalPrice: 899 },
                { price: 849, originalPrice: 899 }
            ],
            specs: {
                Performance: {
                    "Ports": "6",
                    "Data Transfer": "10Gbps",
                    "Power Delivery": "No"
                },
                Features: {
                    "HDMI Output": "4K@30Hz",
                    "VGA Output": "Yes"
                }
            }
        },
        {
            product_id: "usbhub5",
            brand: "Belkin",
            model: "USB-C 11-in-1 Multiport Dock",
            imageUrl: "https://www.belkin.com/on/demandware.static/-/Sites-belkin-master-catalog/default/dw5a1a9c1e/images/hi-res/F4U092/F4U092-Belkin-USB-C-11-in-1-Multiport-Dock-1.png",
            offers: [
                { price: 1499, originalPrice: 1699 },
                { price: 1599, originalPrice: 1699 }
            ],
            specs: {
                Performance: {
                    "Ports": "11",
                    "Data Transfer": "10Gbps",
                    "Power Delivery": "85W"
                },
                Features: {
                    "Dual HDMI": "Yes",
                    "Audio Jack": "Yes"
                }
            }
        }
    ],
    keyboards: [
        {
            product_id: "keyboard1",
            brand: "Logitech",
            model: "MX Keys Wireless Keyboard",
            imageUrl: "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/mx-keys/gallery/mx-keys-gallery-graphite-front.png",
            offers: [
                { price: 1299, originalPrice: 1499 },
                { price: 1399, originalPrice: 1499 }
            ],
            specs: {
                Performance: {
                    "Type": "Membrane",
                    "Connectivity": "Wireless",
                    "Battery Life": "10 days",
                    "Keyboard Type": "Wireless"
                },
                Features: {
                    "Backlit": "Yes",
                    "Multi-Device": "Up to 3 devices"
                }
            }
        },
        {
            product_id: "keyboard2",
            brand: "Apple",
            model: "Magic Keyboard with Numeric Keypad",
            imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQ052?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1495129815011",
            offers: [
                { price: 1799, originalPrice: 1999 },
                { price: 1899, originalPrice: 1999 }
            ],
            specs: {
                Performance: {
                    "Type": "Scissor",
                    "Connectivity": "Bluetooth",
                    "Battery Life": "1 month",
                    "Keyboard Type": "Wireless"
                },
                Features: {
                    "Numeric Keypad": "Yes",
                    "Rechargeable": "Yes"
                }
            }
        },
        {
            product_id: "keyboard3",
            brand: "Keychron",
            model: "K2 Wireless Mechanical Keyboard",
            imageUrl: "https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-red-with-type-C-RGB-white-backlight_1800x1800.jpg",
            offers: [
                { price: 1099, originalPrice: 1299 },
                { price: 1199, originalPrice: 1299 }
            ],
            specs: {
                Performance: {
                    "Type": "Mechanical",
                    "Connectivity": "Bluetooth/Wired",
                    "Battery Life": "72 hours",
                    "Keyboard Type": "Wireless"
                },
                Features: {
                    "Backlit": "RGB",
                    "Switch Type": "Gateron"
                }
            }
        },
        {
            product_id: "keyboard4",
            brand: "Microsoft",
            model: "Surface Keyboard",
            imageUrl: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4JVVV?ver=5c8b&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
            offers: [
                { price: 999, originalPrice: 1199 },
                { price: 1099, originalPrice: 1199 }
            ],
            specs: {
                Performance: {
                    "Type": "Chiclet",
                    "Connectivity": "Bluetooth",
                    "Battery Life": "12 months",
                    "Keyboard Type": "Wireless"
                },
                Features: {
                    "Numeric Keypad": "Yes",
                    "Ergonomic Design": "Yes"
                }
            }
        },
        {
            product_id: "keyboard5",
            brand: "Razer",
            model: "BlackWidow Elite Mechanical Gaming Keyboard",
            imageUrl: "https://assets3.razerzone.com/3JRWZFf2J_LPZeQxJmb9WmVbzBo=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh78%2Fh24%2F9081444982814%2Fblackwidow-elite-gallery-01.jpg",
            offers: [
                { price: 1899, originalPrice: 2199 },
                { price: 1999, originalPrice: 2199 }
            ],
            specs: {
                Performance: {
                    "Type": "Mechanical",
                    "Connectivity": "Wired",
                    "Switch Type": "Razer Green",
                    "Keyboard Type": "Wired"
                },
                Features: {
                    "Backlit": "RGB Chroma",
                    "Wrist Rest": "Detachable"
                }
            }
        }
    ],
    monitors: [
        {
            product_id: "monitor1",
            brand: "Dell",
            model: "UltraSharp U2720Q 27-inch 4K Monitor",
            imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/ultrasharp/u2720q/global-spi/monitor-u2720q-campaign-hero-504x350-ng.psd?fmt=jpg",
            offers: [
                { price: 6999, originalPrice: 7999 },
                { price: 7499, originalPrice: 7999 }
            ],
            specs: {
                Performance: {
                    "Resolution": "4K UHD (3840 x 2160)",
                    "Panel Type": "IPS",
                    "Refresh Rate": "60Hz"
                },
                Features: {
                    "USB-C": "Yes, with 90W PD",
                    "VESA Mount": "Yes"
                }
            }
        },
        {
            product_id: "monitor2",
            brand: "LG",
            model: "27GL850 27-inch UltraGear Gaming Monitor",
            imageUrl: "https://www.lg.com/us/images/monitors/md07000002/gallery/desktop-01.jpg",
            offers: [
                { price: 5999, originalPrice: 6999 },
                { price: 6499, originalPrice: 6999 }
            ],
            specs: {
                Performance: {
                    "Resolution": "QHD (2560 x 1440)",
                    "Panel Type": "Nano IPS",
                    "Refresh Rate": "144Hz"
                },
                Features: {
                    "G-Sync Compatible": "Yes",
                    "Response Time": "1ms"
                }
            }
        },
        {
            product_id: "monitor3",
            brand: "Samsung",
            model: "Odyssey G7 32-inch Curved Gaming Monitor",
            imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/za/lc32g75tqsuxen/gallery/za-odyssey-g7-lc32g75tqsuxen-531606532?$650_519_PNG$",
            offers: [
                { price: 8999, originalPrice: 9999 },
                { price: 9499, originalPrice: 9999 }
            ],
            specs: {
                Performance: {
                    "Resolution": "QHD (2560 x 1440)",
                    "Panel Type": "VA",
                    "Refresh Rate": "240Hz"
                },
                Features: {
                    "Curve": "1000R",
                    "HDR": "HDR600"
                }
            }
        },
        {
            product_id: "monitor4",
            brand: "ASUS",
            model: "ProArt PA278QV 27-inch Professional Monitor",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/36E29DC8-FA86-4BFB-9C16-F7E6F82B7D7C/w717/h525",
            offers: [
                { price: 4999, originalPrice: 5999 },
                { price: 5499, originalPrice: 5999 }
            ],
            specs: {
                Performance: {
                    "Resolution": "WQHD (2560 x 1440)",
                    "Panel Type": "IPS",
                    "Refresh Rate": "75Hz"
                },
                Features: {
                    "Color Accuracy": "100% sRGB, Rec. 709",
                    "Calman Verified": "Yes"
                }
            }
        },
        {
            product_id: "monitor5",
            brand: "Acer",
            model: "Predator X34 34-inch Curved UltraWide Gaming Monitor",
            imageUrl: "https://static.acer.com/up/Resource/Acer/Monitors/Predator/X34/Images/20150824/Predator_X34_sku_main.png",
            offers: [
                { price: 11999, originalPrice: 13999 },
                { price: 12999, originalPrice: 13999 }
            ],
            specs: {
                Performance: {
                    "Resolution": "UWQHD (3440 x 1440)",
                    "Panel Type": "IPS",
                    "Refresh Rate": "120Hz"
                },
                Features: {
                    "G-Sync": "Yes",
                    "Curve": "1900R"
                }
            }
        }
    ],
    printers: [
        {
            product_id: "printer1",
            brand: "HP",
            model: "LaserJet Pro M404dn",
            imageUrl: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06266924.png",
            offers: [
                { price: 3999, originalPrice: 4499 },
                { price: 4199, originalPrice: 4499 }
            ],
            specs: {
                Performance: {
                    "Type": "Laser",
                    "Print Speed": "38 ppm",
                    "Resolution": "1200 x 1200 dpi"
                },
                Features: {
                    "Duplex Printing": "Automatic",
                    "Connectivity": "Ethernet, USB"
                }
            }
        },
        {
            product_id: "printer2",
            brand: "Epson",
            model: "EcoTank L3250",
            imageUrl: "https://www.epson.co.za/files/assets/converted/510m-310m/e/p/s/o/epson_ecotank_l3250_1_1.png.png",
            offers: [
                { price: 3499, originalPrice: 3999 },
                { price: 3699, originalPrice: 3999 }
            ],
            specs: {
                Performance: {
                    "Type": "Inkjet",
                    "Print Speed": "33 ppm",
                    "Resolution": "5760 x 1440 dpi"
                },
                Features: {
                    "Ink System": "Refillable Tanks",
                    "Connectivity": "Wi-Fi, USB"
                }
            }
        },
        {
            product_id: "printer3",
            brand: "Canon",
            model: "PIXMA G3420",
            imageUrl: "https://media.canon-europe.com/image/upload/v1613042769/Canon_PIXMA_G3420_FSL_BLACK_01_1500x1500.jpg",
            offers: [
                { price: 2999, originalPrice: 3499 },
                { price: 3199, originalPrice: 3499 }
            ],
            specs: {
                Performance: {
                    "Type": "Inkjet",
                    "Print Speed": "10.8 ipm",
                    "Resolution": "4800 x 1200 dpi"
                },
                Features: {
                    "Ink System": "Refillable Tanks",
                    "Connectivity": "Wi-Fi, USB"
                }
            }
        },
        {
            product_id: "printer4",
            brand: "Brother",
            model: "MFC-L2750DW",
            imageUrl: "https://www.brother.co.za/-/media/ap/en/products/mfcl/mfcl2750dw/mfcl2750dw_main.png",
            offers: [
                { price: 4999, originalPrice: 5499 },
                { price: 5199, originalPrice: 5499 }
            ],
            specs: {
                Performance: {
                    "Type": "Laser",
                    "Print Speed": "34 ppm",
                    "Resolution": "2400 x 600 dpi"
                },
                Features: {
                    "Duplex Printing": "Automatic",
                    "Connectivity": "Wi-Fi, Ethernet, USB"
                }
            }
        },
        {
            product_id: "printer5",
            brand: "Xerox",
            model: "VersaLink C400DN",
            imageUrl: "https://www.xerox.com/assets/images/product-images/c400_left_quarter_675x675.png",
            offers: [
                { price: 7999, originalPrice: 8999 },
                { price: 8499, originalPrice: 8999 }
            ],
            specs: {
                Performance: {
                    "Type": "Laser Color",
                    "Print Speed": "36 ppm",
                    "Resolution": "1200 x 2400 dpi"
                },
                Features: {
                    "Duplex Printing": "Automatic",
                    "Connectivity": "Ethernet, USB, Wi-Fi"
                }
            }
        }
    ],
    webcams: [
        {
            product_id: "webcam1",
            brand: "Logitech",
            model: "C920 HD Pro",
            imageUrl: "https://resource.logitech.com/content/dam/logitech/en/products/webcams/c920/gallery/c920-gallery-1.png",
            offers: [
                { price: 1299, originalPrice: 1499 },
                { price: 1399, originalPrice: 1499 }
            ],
            specs: {
                Performance: {
                    "Resolution": "1080p/30fps",
                    "Field of View": "78°",
                    "Focus": "Autofocus"
                },
                Features: {
                    "Microphone": "Dual Stereo",
                    "Mounting": "Clip or Tripod"
                }
            }
        },
        {
            product_id: "webcam2",
            brand: "Razer",
            model: "Kiyo Pro",
            imageUrl: "https://assets3.razerzone.com/3JRWZFf2J_LPZeQxJmb9WmVbzBo=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh78%2Fh24%2F9081444982814%2Fkiyo-pro-500x500.png",
            offers: [
                { price: 2499, originalPrice: 2999 },
                { price: 2699, originalPrice: 2999 }
            ],
            specs: {
                Performance: {
                    "Resolution": "1080p/60fps",
                    "Field of View": "103°",
                    "Focus": "Adaptive Light Sensor"
                },
                Features: {
                    "HDR": "Yes",
                    "Mounting": "Clip or Tripod"
                }
            }
        },
        {
            product_id: "webcam3",
            brand: "Microsoft",
            model: "LifeCam HD-3000",
            imageUrl: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4JVVV?ver=5c8b&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
            offers: [
                { price: 699, originalPrice: 899 },
                { price: 799, originalPrice: 899 }
            ],
            specs: {
                Performance: {
                    "Resolution": "720p/30fps",
                    "Field of View": "68.5°",
                    "Focus": "Fixed"
                },
                Features: {
                    "Microphone": "Mono",
                    "Mounting": "Clip"
                }
            }
        },
        {
            product_id: "webcam4",
            brand: "Dell",
            model: "UltraSharp Webcam",
            imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/webcams/wc5323/global-spi/ng/peripherals-webcam-wc5323-campaign-hero-504x350-ng.psd?fmt=jpg",
            offers: [
                { price: 2799, originalPrice: 3299 },
                { price: 2999, originalPrice: 3299 }
            ],
            specs: {
                Performance: {
                    "Resolution": "4K/30fps",
                    "Field of View": "90°",
                    "Focus": "Autofocus"
                },
                Features: {
                    "AI Framing": "Yes",
                    "Mounting": "Magnetic or Tripod"
                }
            }
        },
        {
            product_id: "webcam5",
            brand: "ASUS",
            model: "ROG Eye S",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/36E29DC8-FA86-4BFB-9C16-F7E6F82B7D7C/w717/h525",
            offers: [
                { price: 1899, originalPrice: 2199 },
                { price: 1999, originalPrice: 2199 }
            ],
            specs: {
                Performance: {
                    "Resolution": "1080p/60fps",
                    "Field of View": "95°",
                    "Focus": "Autofocus"
                },
                Features: {
                    "Microphone": "Beamforming",
                    "Mounting": "Clip or Tripod"
                }
            }
        }
    ],
    bags: [
        {
            product_id: "bag1",
            brand: "Targus",
            model: "CitySmart Backpack",
            imageUrl: "https://www.targus.com/content/images/thumbs/0017474_156-citysmart-essential-backpack.jpeg",
            offers: [
                { price: 899, originalPrice: 1099 },
                { price: 999, originalPrice: 1099 }
            ],
            specs: {
                Performance: {
                    "Size": "15.6-inch",
                    "Material": "Polyester",
                    "Weight": "0.9kg"
                },
                Features: {
                    "Compartments": "Multiple",
                    "Water Resistant": "Yes"
                }
            }
        },
        {
            product_id: "bag2",
            brand: "Samsonite",
            model: "Pro-DLX 5 Laptop Briefcase",
            imageUrl: "https://www.samsonite.co.za/dw/image/v2/AAWQ_PRD/on/demandware.static/-/Sites-Samsonite/default/dw3c1e0d0f/images/pro-dlx-5-laptop-briefcase-15-6-exp-black-106353-1041-20.jpg",
            offers: [
                { price: 1999, originalPrice: 2499 },
                { price: 2199, originalPrice: 2499 }
            ],
            specs: {
                Performance: {
                    "Size": "15.6-inch",
                    "Material": "Ballistic Nylon",
                    "Weight": "1.2kg"
                },
                Features: {
                    "Smart Sleeve": "Yes",
                    "RFID Protection": "Yes"
                }
            }
        },
        {
            product_id: "bag3",
            brand: "SwissGear",
            model: "ScanSmart Backpack",
            imageUrl: "https://m.media-amazon.com/images/I/71HU6N8uVEL._AC_UF894,1000_QL80_.jpg",
            offers: [
                { price: 1299, originalPrice: 1599 },
                { price: 1399, originalPrice: 1599 }
            ],
            specs: {
                Performance: {
                    "Size": "17-inch",
                    "Material": "1200D Polyester",
                    "Weight": "1.4kg"
                },
                Features: {
                    "TSA Friendly": "Yes",
                    "Airflow Back": "Yes"
                }
            }
        },
        {
            product_id: "bag4",
            brand: "Thule",
            model: "Subterra Backpack",
            imageUrl: "https://www.thule.com/en-za/backpacks/laptop-backpacks/thule-subterra-backpack-23l-_-3204052",
            offers: [
                { price: 1799, originalPrice: 2199 },
                { price: 1999, originalPrice: 2199 }
            ],
            specs: {
                Performance: {
                    "Size": "15.6-inch",
                    "Material": "Nylon",
                    "Weight": "1.1kg"
                },
                Features: {
                    "SafeEdge Protection": "Yes",
                    "PowerPocket": "Yes"
                }
            }
        },
        {
            product_id: "bag5",
            brand: "Incase",
            model: "Icon Slim Backpack",
            imageUrl: "https://cdn.shopify.com/s/files/1/0104/9395/1992/products/INCO100279-BLK_1_1800x1800.jpg",
            offers: [
                { price: 1599, originalPrice: 1899 },
                { price: 1699, originalPrice: 1899 }
            ],
            specs: {
                Performance: {
                    "Size": "15-inch",
                    "Material": "840D Nylon",
                    "Weight": "0.8kg"
                },
                Features: {
                    "Faux-fur Lined": "Yes",
                    "Sternum Strap": "Yes"
                }
            }
        }
    ],
    speakers: [
        {
            product_id: "speaker1",
            brand: "Sony",
            model: "SRS-XB43 Portable Bluetooth Speaker",
            imageUrl: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660",
            offers: [
                { price: 2499, originalPrice: 2999 },
                { price: 2699, originalPrice: 2999 }
            ],
            specs: {
                Performance: {
                    "Power": "30W",
                    "Configuration": "2.0",
                    "Frequency Response": "20Hz - 20kHz",
                    "Color": "Black"
                },
                Features: {
                    "Bluetooth": "Yes",
                    "Battery Life": "24 hours",
                    "Water Resistant": "IP67"
                }
            }
        },
        {
            product_id: "speaker2",
            brand: "Sony",
            model: "SRS-XB23 Portable Speaker",
            imageUrl: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=660&hei=660",
            offers: [
                { price: 1499, originalPrice: 1799 },
                { price: 1599, originalPrice: 1799 }
            ],
            specs: {
                Performance: {
                    "Power": "20W",
                    "Configuration": "2.0",
                    "Frequency Response": "20Hz - 20kHz",
                    "Color": "Black"
                },
                Features: {
                    "Bluetooth": "Yes",
                    "Battery Life": "12 hours",
                    "Water Resistant": "IP67"
                }
            }
        },
        {
            product_id: "speaker3",
            brand: "Jabra",
            model: "Speak 710 Conference Speaker",
            imageUrl: "https://www.jabra.com/-/media/Images/Products/Jabra-Speak-710/Product/speak-710-front.png",
            offers: [
                { price: 3299, originalPrice: 3799 },
                { price: 3499, originalPrice: 3799 }
            ],
            specs: {
                Performance: {
                    "Power": "10W",
                    "Configuration": "1.0",
                    "Frequency Response": "150Hz - 20kHz",
                    "Color": "Grey"
                },
                Features: {
                    "Bluetooth": "Yes",
                    "Battery Life": "15 hours",
                    "Microphone": "Omnidirectional"
                }
            }
        },
        {
            product_id: "speaker4",
            brand: "Jabra",
            model: "Speak 510 Portable Speaker",
            imageUrl: "https://www.jabra.com/-/media/Images/Products/Jabra-Speak-510/Product/speak-510-front.png",
            offers: [
                { price: 1999, originalPrice: 2299 },
                { price: 2099, originalPrice: 2299 }
            ],
            specs: {
                Performance: {
                    "Power": "8W",
                    "Configuration": "1.0",
                    "Frequency Response": "150Hz - 20kHz",
                    "Color": "Black"
                },
                Features: {
                    "Bluetooth": "Yes",
                    "Battery Life": "10 hours",
                    "Microphone": "Omnidirectional"
                }
            }
        },
        {
            product_id: "speaker5",
            brand: "Logitech",
            model: "Z623 2.1 Speaker System",
            imageUrl: "https://resource.logitech.com/content/dam/logitech/en/products/speakers/z623/gallery/z623-gallery-1.png",
            offers: [
                { price: 1999, originalPrice: 2499 },
                { price: 2199, originalPrice: 2499 }
            ],
            specs: {
                Performance: {
                    "Power": "400W",
                    "Configuration": "2.1",
                    "Frequency Response": "35Hz - 20kHz",
                    "Color": "Black"
                },
                Features: {
                    "THX Certified": "Yes",
                    "Inputs": "3.5mm, RCA"
                }
            }
        },
        {
            product_id: "speaker6",
            brand: "Logitech",
            model: "MX Sound 2.0 Desktop Speakers",
            imageUrl: "https://resource.logitech.com/content/dam/logitech/en/products/speakers/mx-sound/gallery/mx-sound-gallery-1.png",
            offers: [
                { price: 1299, originalPrice: 1499 },
                { price: 1399, originalPrice: 1499 }
            ],
            specs: {
                Performance: {
                    "Power": "24W",
                    "Configuration": "2.0",
                    "Frequency Response": "70Hz - 20kHz",
                    "Color": "Black"
                },
                Features: {
                    "Bluetooth": "Yes",
                    "Inputs": "3.5mm, Bluetooth",
                    "Motion Sensor": "Yes"
                }
            }
        },
        {
            product_id: "speaker7",
            brand: "Trust",
            model: "Tytan 2.1 Speaker Set",
            imageUrl: "https://www.trust.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/9/19019-01.jpg",
            offers: [
                { price: 899, originalPrice: 1099 },
                { price: 999, originalPrice: 1099 }
            ],
            specs: {
                Performance: {
                    "Power": "60W",
                    "Configuration": "2.1",
                    "Frequency Response": "20Hz - 20kHz",
                    "Color": "Black"
                },
                Features: {
                    "Wired": "Yes",
                    "Inputs": "3.5mm",
                    "Remote Control": "Yes"
                }
            }
        },
        {
            product_id: "speaker8",
            brand: "Trust",
            model: "Ziva Compact 2.0 Speakers",
            imageUrl: "https://www.trust.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/1/21747-01.jpg",
            offers: [
                { price: 499, originalPrice: 599 },
                { price: 549, originalPrice: 599 }
            ],
            specs: {
                Performance: {
                    "Power": "12W",
                    "Configuration": "2.0",
                    "Frequency Response": "50Hz - 20kHz",
                    "Color": "Black"
                },
                Features: {
                    "Wired": "Yes",
                    "Inputs": "3.5mm",
                    "Volume Control": "Yes"
                }
            }
        },
        {
            product_id: "speaker9",
            brand: "UltraLink",
            model: "Bluetooth Portable Speaker",
            imageUrl: "https://www.ultralink.co.za/wp-content/uploads/2022/03/UL-BTS-1000-1.jpg",
            offers: [
                { price: 599, originalPrice: 799 },
                { price: 699, originalPrice: 799 }
            ],
            specs: {
                Performance: {
                    "Power": "10W",
                    "Configuration": "1.0",
                    "Frequency Response": "100Hz - 18kHz",
                    "Color": "White"
                },
                Features: {
                    "Bluetooth": "Yes",
                    "Battery Life": "8 hours",
                    "Water Resistant": "IPX4"
                }
            }
        },
        {
            product_id: "speaker10",
            brand: "UltraLink",
            model: "Desktop 2.0 Speakers",
            imageUrl: "https://www.ultralink.co.za/wp-content/uploads/2022/03/UL-SP200-1.jpg",
            offers: [
                { price: 399, originalPrice: 499 },
                { price: 449, originalPrice: 499 }
            ],
            specs: {
                Performance: {
                    "Power": "6W",
                    "Configuration": "2.0",
                    "Frequency Response": "120Hz - 18kHz",
                    "Color": "Black"
                },
                Features: {
                    "Wired": "Yes",
                    "Inputs": "3.5mm",
                    "USB Powered": "Yes"
                }
            }
        },
        {
            product_id: "speaker11",
            brand: "Volkano",
            model: "Bazooka Series Bluetooth Speaker",
            imageUrl: "https://volkano.com/wp-content/uploads/2020/07/VK-3001-BK-pkg1.jpg",
            offers: [
                { price: 499, originalPrice: 699 },
                { price: 599, originalPrice: 699 }
            ],
            specs: {
                Performance: {
                    "Power": "5W",
                    "Configuration": "1.0",
                    "Frequency Response": "120Hz - 18kHz",
                    "Color": "Grey"
                },
                Features: {
                    "Bluetooth": "Yes",
                    "Battery Life": "6 hours",
                    "FM Radio": "Yes"
                }
            }
        },
        {
            product_id: "speaker12",
            brand: "Volkano",
            model: "Mamba Series Desktop Speakers",
            imageUrl: "https://volkano.com/wp-content/uploads/2020/07/VK-3002-BK-pkg1.jpg",
            offers: [
                { price: 349, originalPrice: 449 },
                { price: 399, originalPrice: 449 }
            ],
            specs: {
                Performance: {
                    "Power": "3W",
                    "Configuration": "2.0",
                    "Frequency Response": "150Hz - 18kHz",
                    "Color": "Black"
                },
                Features: {
                    "Wired": "Yes",
                    "Inputs": "3.5mm",
                    "USB Powered": "Yes"
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
        if (type === 'chargers') {
            typeTitle = 'Laptop Chargers';
        } else if (type === 'adapters') {
            typeTitle = 'Laptop Adapters';
        } else if (type === 'usb_hubs') {
            typeTitle = 'USB Hubs';
        } else if (type === 'keyboards') {
            typeTitle = 'Keyboards & Mice';
        } else if (type === 'monitors') {
            typeTitle = 'Monitors';
        } else if (type === 'printers') {
            typeTitle = 'Printers';
        } else if (type === 'webcams') {
            typeTitle = 'Webcams';
        } else if (type === 'bags') {
            typeTitle = 'Laptop Bags';
        } else if (type === 'speakers') {
            typeTitle = 'Speakers';
        } else {
            typeTitle = 'Laptop & Desktop Accessories';
        }
        
        document.querySelector('.section-title').textContent = typeTitle;
        
        // Hide or show filter buttons based on accessory type
        const keyboardTypeFilterButton = document.querySelector('.filter-button[data-panel="keyboard-type-panel"]');
        const accessoryTypeFilterButton = document.querySelector('.filter-button[data-panel="accessory-type-panel"]');
        
        if (keyboardTypeFilterButton) {
            if (type === 'chargers' || type === 'adapters' || type === 'speakers' || type === 'webcams' || type === 'usb_hubs') {
                keyboardTypeFilterButton.style.display = 'none';
            } else {
                keyboardTypeFilterButton.style.display = 'flex';
            }
        }
        
        if (accessoryTypeFilterButton) {
            if (type === 'speakers' || type === 'webcams' || type === 'usb_hubs') {
                accessoryTypeFilterButton.style.display = 'none';
            } else {
                accessoryTypeFilterButton.style.display = 'flex';
            }
        }
        
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
    
    // Update filter options based on accessory type
    updateFilterOptionsForAccessoryType(type);
    
    hideLoading();
}

// Function to update filter options based on accessory type
function updateFilterOptionsForAccessoryType(type) {
    // Update brand filter options
    const brandPanel = document.getElementById('brand-panel');
    if (brandPanel) {
        const filterOptions = brandPanel.querySelector('.filter-options');
        
        // Update panel title based on accessory type
        const panelTitle = brandPanel.querySelector('h3');
        if (panelTitle) {
            if (type === 'speakers') {
                panelTitle.textContent = 'Speaker Brands';
            } else if (type === 'webcams') {
                panelTitle.textContent = 'Webcam Brands';
            } else if (type === 'usb_hubs') {
                panelTitle.textContent = 'USB Hub Brands';
            } else {
                panelTitle.textContent = 'Laptop & Desktop Brands';
            }
        }
        
        // Keep the "All Brands" option
        const allBrandsOption = filterOptions.querySelector('input[value="all"]').parentElement;
        
        // Clear existing brand options except "All Brands"
        while (filterOptions.children.length > 1) {
            if (filterOptions.lastChild !== allBrandsOption) {
                filterOptions.removeChild(filterOptions.lastChild);
            }
        }
        
        // Add brand options based on accessory type
        if (type === 'speakers') {
            // Speaker brands
            const speakerBrands = ['sony', 'jabra', 'logitech', 'trust', 'ultralink', 'volkano'];
            
            speakerBrands.forEach(brand => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'brand';
                input.value = brand;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + brand.charAt(0).toUpperCase() + brand.slice(1)));
                
                filterOptions.appendChild(label);
            });
        } else if (type === 'webcams') {
            // Webcam brands
            const webcamBrands = ['acer', 'asus', 'bitdefender', 'gopro', 'hp', 'incredible', 'kaspersky', 'lenovo', 'logitech', 'parrot', 'port', 'proline', 'rapoo'];
            
            webcamBrands.forEach(brand => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'brand';
                input.value = brand;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + brand.charAt(0).toUpperCase() + brand.slice(1)));
                
                filterOptions.appendChild(label);
            });
        } else if (type === 'usb_hubs') {
            // USB Hub brands
            const usbHubBrands = ['orico', 'targus', 'tp-link', 'volkano', 'volkanox', 'winx'];
            
            usbHubBrands.forEach(brand => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'brand';
                input.value = brand;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + brand.charAt(0).toUpperCase() + brand.slice(1)));
                
                filterOptions.appendChild(label);
            });
        } else {
            // Default brands for other accessory types
            const defaultBrands = [
                'apple', 'fellowes', 'hp', 'logitech', 'microsoft', 'orion',
                'rapoo', 'razer', 'redragon', 'samsung', 'ultralink', 'volkano',
                'xiaomi', 'winx'
            ];
            
            defaultBrands.forEach(brand => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'brand';
                input.value = brand;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + brand.charAt(0).toUpperCase() + brand.slice(1)));
                
                filterOptions.appendChild(label);
            });
        }
    }
    
    // Update price range filter options
    const pricePanel = document.getElementById('price-panel');
    if (pricePanel) {
        const filterOptions = pricePanel.querySelector('.filter-options');
        
        // Clear existing price range options
        filterOptions.innerHTML = '';
        
        if (type === 'speakers') {
            // Speaker price ranges
            const speakerPriceRanges = [
                { value: '0-700', label: 'Under R700' },
                { value: '700-1500', label: 'R700 - R1,500' },
                { value: '1500-2500', label: 'R1,500 - R2,500' },
                { value: '2500-3500', label: 'R2,500 - R3,500' },
                { value: '3500+', label: 'Over R3,500' }
            ];
            
            speakerPriceRanges.forEach(range => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'price';
                input.value = range.value;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + range.label));
                
                filterOptions.appendChild(label);
            });
        } else if (type === 'webcams') {
            // Webcam price ranges
            const webcamPriceRanges = [
                { value: '0-800', label: 'Under R800' },
                { value: '800-1500', label: 'R800 - R1,500' },
                { value: '1500-2500', label: 'R1,500 - R2,500' },
                { value: '2500-3500', label: 'R2,500 - R3,500' },
                { value: '3500+', label: 'Over R3,500' }
            ];
            
            webcamPriceRanges.forEach(range => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'price';
                input.value = range.value;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + range.label));
                
                filterOptions.appendChild(label);
            });
        } else if (type === 'usb_hubs') {
            // USB Hub price ranges
            const usbHubPriceRanges = [
                { value: '0-500', label: 'Under R500' },
                { value: '500-1000', label: 'R500 - R1,000' },
                { value: '1000-1500', label: 'R1,000 - R1,500' },
                { value: '1500-2500', label: 'R1,500 - R2,500' },
                { value: '2500+', label: 'Over R2,500' }
            ];
            
            usbHubPriceRanges.forEach(range => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'price';
                input.value = range.value;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + range.label));
                
                filterOptions.appendChild(label);
            });
        } else {
            // Default price ranges for other accessory types
            const defaultPriceRanges = [
                { value: '0-500', label: 'Under R500' },
                { value: '500-1000', label: 'R500 - R1,000' },
                { value: '1000-2000', label: 'R1,000 - R2,000' },
                { value: '2000-5000', label: 'R2,000 - R5,000' },
                { value: '5000+', label: 'Over R5,000' }
            ];
            
            defaultPriceRanges.forEach(range => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'price';
                input.value = range.value;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + range.label));
                
                filterOptions.appendChild(label);
            });
        }
    }
    
    // Update color filter options
    const colorPanel = document.getElementById('color-panel');
    if (colorPanel) {
        const filterOptions = colorPanel.querySelector('.filter-options');
        
        // Keep the "All Colors" option
        const allColorsOption = filterOptions.querySelector('input[value="all"]').parentElement;
        
        // Clear existing color options except "All Colors"
        while (filterOptions.children.length > 1) {
            if (filterOptions.lastChild !== allColorsOption) {
                filterOptions.removeChild(filterOptions.lastChild);
            }
        }
        
        // Add color options based on accessory type
        if (type === 'speakers') {
            // Speaker colors
            const speakerColors = ['black', 'grey', 'white'];
            
            speakerColors.forEach(color => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'color';
                input.value = color;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + color.charAt(0).toUpperCase() + color.slice(1)));
                
                filterOptions.appendChild(label);
            });
        } else if (type === 'webcams') {
            // Webcam colors
            const webcamColors = ['black', 'white', 'graphite', 'rose'];
            
            webcamColors.forEach(color => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'color';
                input.value = color;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + color.charAt(0).toUpperCase() + color.slice(1)));
                
                filterOptions.appendChild(label);
            });
        } else if (type === 'usb_hubs') {
            // USB Hub colors
            const usbHubColors = ['black', 'white', 'grey', 'silver'];
            
            usbHubColors.forEach(color => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'color';
                input.value = color;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + color.charAt(0).toUpperCase() + color.slice(1)));
                
                filterOptions.appendChild(label);
            });
        } else {
            // Default colors for other accessory types
            const defaultColors = ['black', 'white', 'grey', 'silver', 'blue'];
            
            defaultColors.forEach(color => {
                const label = document.createElement('label');
                label.className = 'filter-option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'color';
                input.value = color;
                
                label.appendChild(input);
                label.appendChild(document.createTextNode(' ' + color.charAt(0).toUpperCase() + color.slice(1)));
                
                filterOptions.appendChild(label);
            });
        }
    }
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
                ...mockAccessories.chargers,
                ...mockAccessories.adapters,
                ...mockAccessories.usb_hubs,
                ...mockAccessories.keyboards,
                ...mockAccessories.monitors,
                ...mockAccessories.printers,
                ...mockAccessories.webcams,
                ...mockAccessories.bags,
                ...mockAccessories.speakers
            ];
            
            filteredProducts = [...allProducts];
            
            // Show the keyboard type filter button when viewing all accessories
            const keyboardTypeFilterButton = document.querySelector('.filter-button[data-panel="keyboard-type-panel"]');
            if (keyboardTypeFilterButton) {
                keyboardTypeFilterButton.style.display = 'flex';
            }
            
            // Update filter options for all accessories
            updateFilterOptionsForAccessoryType(null);
            
            sortProducts(sortBySelect.value);
            displayProducts();
            setupPagination();
        }
        
        hideLoading();
    } catch (error) {
        console.error('Error in fetchProducts:', error);
        
        // Fallback to showing all accessories
        allProducts = [
            ...mockAccessories.chargers,
            ...mockAccessories.adapters,
            ...mockAccessories.usb_hubs,
            ...mockAccessories.keyboards,
            ...mockAccessories.monitors,
            ...mockAccessories.printers,
            ...mockAccessories.webcams,
            ...mockAccessories.bags,
            ...mockAccessories.speakers
        ];
        filteredProducts = [...allProducts];
        
        // Show the keyboard type filter button when viewing all accessories
        const keyboardTypeFilterButton = document.querySelector('.filter-button[data-panel="keyboard-type-panel"]');
        if (keyboardTypeFilterButton) {
            keyboardTypeFilterButton.style.display = 'flex';
        }
        
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
    let resolutionText = '';
    let panelTypeText = '';
    let refreshRateText = '';
    let portsText = '';
    let typeText = '';
    let featuresText = '';

    if (product.specs) {
        if (product.specs.Performance) {
            if (product.specs.Performance.Output) {
                outputText = product.specs.Performance.Output;
            }
            if (product.specs.Performance.Connector) {
                connectorText = product.specs.Performance.Connector;
            }
            if (product.specs.Performance.Resolution) {
                resolutionText = product.specs.Performance.Resolution;
            }
            if (product.specs.Performance["Panel Type"]) {
                panelTypeText = product.specs.Performance["Panel Type"];
            }
            if (product.specs.Performance["Refresh Rate"]) {
                refreshRateText = product.specs.Performance["Refresh Rate"];
            }
            if (product.specs.Performance.Ports) {
                portsText = product.specs.Performance.Ports;
            }
            if (product.specs.Performance.Type) {
                typeText = product.specs.Performance.Type;
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
    if (product.product_id.includes('charger')) {
        accessoryType = 'chargers';
    } else if (product.product_id.includes('adapter')) {
        accessoryType = 'adapters';
    } else if (product.product_id.includes('usbhub')) {
        accessoryType = 'usb_hubs';
    } else if (product.product_id.includes('keyboard')) {
        accessoryType = 'keyboards';
    } else if (product.product_id.includes('monitor')) {
        accessoryType = 'monitors';
    } else if (product.product_id.includes('printer')) {
        accessoryType = 'printers';
    } else if (product.product_id.includes('webcam')) {
        accessoryType = 'webcams';
    } else if (product.product_id.includes('bag')) {
        accessoryType = 'bags';
    } else if (product.product_id.includes('speaker')) {
        accessoryType = 'speakers';
    }

    card.innerHTML = `
            <a href="laptop-desktop-${accessoryType}.html?id=${product.product_id}" class="product-link">
                <div class="product-image-container">
                    <img src="${product.imageUrl}" alt="${product.model}" class="product-image" loading="lazy">
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.model || product.product_id}</h3>
                    <div class="product-brand">${product.brand || ''}</div>
                    <div class="product-specs">
                    ${resolutionText ? `<span>Resolution: ${resolutionText}</span>` : ''}
                    ${panelTypeText ? `<span>Panel: ${panelTypeText}</span>` : ''}
                    ${refreshRateText ? `<span>Refresh Rate: ${refreshRateText}</span>` : ''}
                    ${outputText ? `<span>Output: ${outputText}</span>` : ''}
                    ${connectorText ? `<span>Connector: ${connectorText}</span>` : ''}
                    ${portsText ? `<span>Ports: ${portsText}</span>` : ''}
                    ${typeText ? `<span>Type: ${typeText}</span>` : ''}
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
        window.location.href = `laptop-desktop-${accessoryType}-info.html?id=${product.product_id}`;
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
    
    // Get current brand checkboxes and selected brands
    const currentBrandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const selectedBrands = Array.from(currentBrandCheckboxes).filter(cb => cb.checked && cb.value !== 'all').map(cb => cb.value);
    
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            const productBrand = product.brand?.toLowerCase() || '';
            return selectedBrands.some(brand => productBrand === brand);
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
                // Speaker price ranges
                if (range === '0-700') return lowestPrice < 700;
                if (range === '700-1500') return lowestPrice >= 700 && lowestPrice < 1500;
                if (range === '1500-2500') return lowestPrice >= 1500 && lowestPrice < 2500;
                if (range === '2500-3500') return lowestPrice >= 2500 && lowestPrice < 3500;
                if (range === '3500+') return lowestPrice >= 3500;
                
                // USB Hub price ranges
                if (range === '0-500') return lowestPrice < 500;
                if (range === '500-1000') return lowestPrice >= 500 && lowestPrice < 1000;
                if (range === '1000-1500') return lowestPrice >= 1000 && lowestPrice < 1500;
                if (range === '1500-2500') return lowestPrice >= 1500 && lowestPrice < 2500;
                if (range === '2500+') return lowestPrice >= 2500;
                
                // Default price ranges
                if (range === '0-500') return lowestPrice < 500;
                if (range === '500-1000') return lowestPrice >= 500 && lowestPrice < 1000;
                if (range === '1000-2000') return lowestPrice >= 1000 && lowestPrice < 2000;
                if (range === '2000-5000') return lowestPrice >= 2000 && lowestPrice < 5000;
                if (range === '5000+') return lowestPrice >= 5000;
                
                return false;
            });
        });
    }
    
    // Get selected keyboard types
    const keyboardTypeCheckboxes = document.querySelectorAll('input[name="keyboard-type"]');
    const selectedKeyboardTypes = Array.from(keyboardTypeCheckboxes).filter(cb => cb.checked && cb.value !== 'all').map(cb => cb.value);
    
    if (selectedKeyboardTypes.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            // Only apply this filter to keyboards
            if (!product.product_id.includes('keyboard')) {
                return true;
            }
            
            // Check if the product has the keyboard type specification
            if (product.specs && product.specs.Performance && product.specs.Performance["Keyboard Type"]) {
                const keyboardType = product.specs.Performance["Keyboard Type"].toLowerCase();
                return selectedKeyboardTypes.some(type => keyboardType.includes(type));
            }
            
            // If no keyboard type is specified, include it by default
            return true;
        });
    }
    
    // Get selected accessory types
    const accessoryTypeCheckboxes = document.querySelectorAll('input[name="accessory-type"]');
    const selectedAccessoryTypes = Array.from(accessoryTypeCheckboxes).filter(cb => cb.checked && cb.value !== 'all').map(cb => cb.value);
    
    if (selectedAccessoryTypes.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            // Check if the product is a charger or adapter
            if (selectedAccessoryTypes.includes('chargers') && product.product_id.includes('charger')) {
                return true;
            }
            if (selectedAccessoryTypes.includes('adapters') && product.product_id.includes('adapter')) {
                return true;
            }
            // If neither charger nor adapter is selected, exclude the product
            return false;
        });
    }
    
    // Get selected colors
    const colorCheckboxes = document.querySelectorAll('input[name="color"]');
    const selectedColors = Array.from(colorCheckboxes).filter(cb => cb.checked && cb.value !== 'all').map(cb => cb.value);
    
    if (selectedColors.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            // Check if the product has color information in specs
            if (product.specs && product.specs.Performance && product.specs.Performance.Color) {
                const productColor = product.specs.Performance.Color.toLowerCase();
                return selectedColors.some(color => productColor.includes(color));
            }
            // If no color is specified, include it by default
            return true;
        });
    }
    
    // Show or hide the "Clear All" button based on whether any filters are applied
    updateClearAllButtonVisibility();
    
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
    const currentBrandCheckboxes = document.querySelectorAll('input[name="brand"]');
    currentBrandCheckboxes.forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    // Reset price checkboxes
    priceCheckboxes.forEach(cb => {
        cb.checked = false;
    });
    
    // Reset keyboard type checkboxes
    const keyboardTypeCheckboxes = document.querySelectorAll('input[name="keyboard-type"]');
    keyboardTypeCheckboxes.forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    // Reset accessory type checkboxes
    const accessoryTypeCheckboxes = document.querySelectorAll('input[name="accessory-type"]');
    accessoryTypeCheckboxes.forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    // Reset color checkboxes
    const colorCheckboxes = document.querySelectorAll('input[name="color"]');
    colorCheckboxes.forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    // Reset filtered products
    filteredProducts = [...allProducts];
    currentPage = 1;
    sortProducts(sortBySelect.value);
    displayProducts();
    setupPagination();
    
    // Hide the "Clear All" button
    updateClearAllButtonVisibility();
}

// Function to check if any filters are applied and show/hide the "Clear All" button accordingly
function updateClearAllButtonVisibility() {
    const clearAllButton = document.getElementById('clear-filters');
    if (!clearAllButton) return;
    
    // Check if any brand filters are applied (except "All Brands")
    const currentBrandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const anyBrandFilters = Array.from(currentBrandCheckboxes).some(cb => cb.checked && cb.value !== 'all');
    
    // Check if any price filters are applied
    const anyPriceFilters = Array.from(priceCheckboxes).some(cb => cb.checked);
    
    // Check if any keyboard type filters are applied (except "All Types")
    const keyboardTypeCheckboxes = document.querySelectorAll('input[name="keyboard-type"]');
    const anyKeyboardTypeFilters = Array.from(keyboardTypeCheckboxes).some(cb => cb.checked && cb.value !== 'all');
    
    // Check if any accessory type filters are applied (except "All Types")
    const accessoryTypeCheckboxes = document.querySelectorAll('input[name="accessory-type"]');
    const anyAccessoryTypeFilters = Array.from(accessoryTypeCheckboxes).some(cb => cb.checked && cb.value !== 'all');
    
    // Check if any color filters are applied (except "All Colors")
    const colorCheckboxes = document.querySelectorAll('input[name="color"]');
    const anyColorFilters = Array.from(colorCheckboxes).some(cb => cb.checked && cb.value !== 'all');
    
    // Show or hide the button based on whether any filters are applied
    if (anyBrandFilters || anyPriceFilters || anyKeyboardTypeFilters || anyAccessoryTypeFilters || anyColorFilters) {
        clearAllButton.style.display = 'flex';
    } else {
        clearAllButton.style.display = 'none';
    }
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
    
    // Initially hide the "Clear All" button
    const clearAllButton = document.getElementById('clear-filters');
    if (clearAllButton) {
        clearAllButton.style.display = 'none';
    }
    
    // Sort by select
    if (sortBySelect) {
        sortBySelect.addEventListener('change', () => {
            sortProducts(sortBySelect.value);
        });
    }
    
    // Filter button click handlers
    const filterButtons = document.querySelectorAll('.filter-button[data-panel]');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const panelId = button.getAttribute('data-panel');
            const panel = document.getElementById(panelId);
            
            // Close all other panels
            document.querySelectorAll('.filter-panel').forEach(p => {
                if (p.id !== panelId) {
                    p.classList.remove('active');
                }
            });
            
            // Toggle the clicked panel
            panel.classList.toggle('active');
        });
    });
    
    // Apply filters buttons
    applyFiltersButtons.forEach(button => {
        button.addEventListener('click', () => {
            applyFilters();
            // Close the panel after applying filters
            const panel = button.closest('.filter-panel');
            if (panel) {
                panel.classList.remove('active');
            }
        });
    });
    
    // Cancel filters buttons
    cancelFiltersButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Close the panel without applying filters
            const panel = button.closest('.filter-panel');
            if (panel) {
                panel.classList.remove('active');
            }
        });
    });
    
    // Clear filters button
    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', () => {
            resetFilters();
            // Close all filter panels
            document.querySelectorAll('.filter-panel').forEach(panel => {
                panel.classList.remove('active');
            });
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