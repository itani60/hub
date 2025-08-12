// PC Components - Mock Data
const componentsProducts = {
    // Motherboards
    motherboards: [
        {
            id: "mb-1",
            name: "ASUS ROG Strix Z690-E Gaming WiFi",
            brand: "ASUS",
            image: "https://m.media-amazon.com/images/I/81qJjt1EZ1L._AC_SL1500_.jpg",
            description: "High-end ATX motherboard for Intel 12th Gen processors with PCIe 5.0 and DDR5 support",
            specifications: {
                socket: "LGA 1700",
                chipset: "Intel Z690",
                form_factor: "ATX",
                memory_slots: "4 x DDR5",
                max_memory: "128GB",
                pcie_slots: "2 x PCIe 5.0 x16, 1 x PCIe 3.0 x16",
                sata_ports: "6 x SATA 6Gb/s",
                m2_slots: "4 x M.2",
                usb_ports: "2 x USB 3.2 Gen 2x2 Type-C, 9 x USB 3.2 Gen 2, 4 x USB 3.2 Gen 1",
                networking: "Intel 2.5Gb Ethernet, WiFi 6E, Bluetooth 5.2"
            },
            price: {
                current: 6999,
                original: 7999,
                discount: "13%"
            },
            ratings: {
                average: 4.8,
                count: 342
            },
            stores: [
                { name: "Evetech", price: 6999, inStock: true, url: "#" },
                { name: "Wootware", price: 7199, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 7299, inStock: true, url: "#" }
            ]
        },
        {
            id: "mb-2",
            name: "MSI MAG B550 TOMAHAWK",
            brand: "MSI",
            image: "https://m.media-amazon.com/images/I/91nx+MjufJL._AC_SL1500_.jpg",
            description: "Mid-range ATX motherboard for AMD Ryzen processors with PCIe 4.0 support",
            specifications: {
                socket: "AM4",
                chipset: "AMD B550",
                form_factor: "ATX",
                memory_slots: "4 x DDR4",
                max_memory: "128GB",
                pcie_slots: "1 x PCIe 4.0 x16, 1 x PCIe 3.0 x16",
                sata_ports: "6 x SATA 6Gb/s",
                m2_slots: "2 x M.2",
                usb_ports: "1 x USB 3.2 Gen 2 Type-C, 2 x USB 3.2 Gen 2 Type-A, 5 x USB 3.2 Gen 1, 6 x USB 2.0",
                networking: "2.5Gb Ethernet, 1Gb Ethernet"
            },
            price: {
                current: 3499,
                original: 3999,
                discount: "13%"
            },
            ratings: {
                average: 4.7,
                count: 567
            },
            stores: [
                { name: "Evetech", price: 3499, inStock: true, url: "#" },
                { name: "Wootware", price: 3599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 3699, inStock: false, url: "#" }
            ]
        },
        {
            id: "mb-3",
            name: "Gigabyte B660M DS3H AX",
            brand: "Gigabyte",
            image: "https://m.media-amazon.com/images/I/81QwckoFJPL._AC_SL1500_.jpg",
            description: "Budget micro-ATX motherboard for Intel 12th Gen processors with WiFi 6",
            specifications: {
                socket: "LGA 1700",
                chipset: "Intel B660",
                form_factor: "Micro-ATX",
                memory_slots: "4 x DDR4",
                max_memory: "128GB",
                pcie_slots: "1 x PCIe 4.0 x16, 1 x PCIe 3.0 x16",
                sata_ports: "4 x SATA 6Gb/s",
                m2_slots: "2 x M.2",
                usb_ports: "1 x USB 3.2 Gen 1 Type-C, 6 x USB 3.2 Gen 1, 4 x USB 2.0",
                networking: "1Gb Ethernet, WiFi 6, Bluetooth 5.2"
            },
            price: {
                current: 2499,
                original: 2899,
                discount: "14%"
            },
            ratings: {
                average: 4.5,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 2499, inStock: true, url: "#" },
                { name: "Wootware", price: 2599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2699, inStock: true, url: "#" }
            ]
        },
        {
            id: "mb-4",
            name: "ASRock X570 Phantom Gaming 4",
            brand: "ASRock",
            image: "https://m.media-amazon.com/images/I/91XC+0NVIFL._AC_SL1500_.jpg",
            description: "Mid-range ATX motherboard for AMD Ryzen processors with PCIe 4.0 support",
            specifications: {
                socket: "AM4",
                chipset: "AMD X570",
                form_factor: "ATX",
                memory_slots: "4 x DDR4",
                max_memory: "128GB",
                pcie_slots: "2 x PCIe 4.0 x16, 2 x PCIe 4.0 x1",
                sata_ports: "8 x SATA 6Gb/s",
                m2_slots: "2 x M.2",
                usb_ports: "8 x USB 3.2 Gen 1, 4 x USB 2.0",
                networking: "1Gb Ethernet"
            },
            price: {
                current: 3999,
                original: 4499,
                discount: "11%"
            },
            ratings: {
                average: 4.4,
                count: 289
            },
            stores: [
                { name: "Evetech", price: 3999, inStock: true, url: "#" },
                { name: "Wootware", price: 4099, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 4199, inStock: true, url: "#" }
            ]
        },
        {
            id: "mb-5",
            name: "ASUS Prime H610M-K D4",
            brand: "ASUS",
            image: "https://m.media-amazon.com/images/I/81QwxJZGRbL._AC_SL1500_.jpg",
            description: "Entry-level micro-ATX motherboard for Intel 12th Gen processors",
            specifications: {
                socket: "LGA 1700",
                chipset: "Intel H610",
                form_factor: "Micro-ATX",
                memory_slots: "2 x DDR4",
                max_memory: "64GB",
                pcie_slots: "1 x PCIe 4.0 x16, 1 x PCIe 3.0 x1",
                sata_ports: "4 x SATA 6Gb/s",
                m2_slots: "1 x M.2",
                usb_ports: "4 x USB 3.2 Gen 1, 6 x USB 2.0",
                networking: "1Gb Ethernet"
            },
            price: {
                current: 1799,
                original: 1999,
                discount: "10%"
            },
            ratings: {
                average: 4.3,
                count: 178
            },
            stores: [
                { name: "Evetech", price: 1799, inStock: true, url: "#" },
                { name: "Wootware", price: 1849, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1899, inStock: true, url: "#" }
            ]
        }
    ],
    
    // RAM (Memory)
    ram: [
        {
            id: "ram-1",
            name: "Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 3600MHz",
            brand: "Corsair",
            image: "https://m.media-amazon.com/images/I/61GpY38PAWL._AC_SL1500_.jpg",
            description: "High-performance RGB DDR4 memory kit with aluminum heat spreaders",
            specifications: {
                capacity: "32GB (2x16GB)",
                type: "DDR4",
                speed: "3600MHz",
                cas_latency: "18",
                voltage: "1.35V",
                rgb: "Yes",
                xmp_profile: "Yes",
                heat_spreader: "Aluminum"
            },
            price: {
                current: 2499,
                original: 2899,
                discount: "14%"
            },
            ratings: {
                average: 4.8,
                count: 876
            },
            stores: [
                { name: "Evetech", price: 2499, inStock: true, url: "#" },
                { name: "Wootware", price: 2599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2649, inStock: true, url: "#" }
            ]
        },
        {
            id: "ram-2",
            name: "G.Skill Trident Z Neo 16GB (2x8GB) DDR4 3600MHz",
            brand: "G.Skill",
            image: "https://m.media-amazon.com/images/I/61ETN6t-94L._AC_SL1500_.jpg",
            description: "RGB DDR4 memory optimized for AMD Ryzen platforms",
            specifications: {
                capacity: "16GB (2x8GB)",
                type: "DDR4",
                speed: "3600MHz",
                cas_latency: "16",
                voltage: "1.35V",
                rgb: "Yes",
                xmp_profile: "Yes",
                heat_spreader: "Aluminum"
            },
            price: {
                current: 1799,
                original: 1999,
                discount: "10%"
            },
            ratings: {
                average: 4.7,
                count: 654
            },
            stores: [
                { name: "Evetech", price: 1799, inStock: true, url: "#" },
                { name: "Wootware", price: 1849, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1899, inStock: false, url: "#" }
            ]
        },
        {
            id: "ram-3",
            name: "Kingston FURY Beast 32GB (2x16GB) DDR5 5200MHz",
            brand: "Kingston",
            image: "https://m.media-amazon.com/images/I/71+qp8PJBRL._AC_SL1500_.jpg",
            description: "High-performance DDR5 memory for next-gen platforms",
            specifications: {
                capacity: "32GB (2x16GB)",
                type: "DDR5",
                speed: "5200MHz",
                cas_latency: "40",
                voltage: "1.25V",
                rgb: "No",
                xmp_profile: "Yes",
                heat_spreader: "Aluminum"
            },
            price: {
                current: 3499,
                original: 3999,
                discount: "13%"
            },
            ratings: {
                average: 4.6,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 3499, inStock: true, url: "#" },
                { name: "Wootware", price: 3599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 3649, inStock: true, url: "#" }
            ]
        },
        {
            id: "ram-4",
            name: "Crucial Ballistix 16GB (2x8GB) DDR4 3200MHz",
            brand: "Crucial",
            image: "https://m.media-amazon.com/images/I/61Qzw8Ymz1L._AC_SL1500_.jpg",
            description: "Reliable DDR4 memory for gaming and everyday computing",
            specifications: {
                capacity: "16GB (2x8GB)",
                type: "DDR4",
                speed: "3200MHz",
                cas_latency: "16",
                voltage: "1.35V",
                rgb: "No",
                xmp_profile: "Yes",
                heat_spreader: "Aluminum"
            },
            price: {
                current: 1299,
                original: 1499,
                discount: "13%"
            },
            ratings: {
                average: 4.5,
                count: 543
            },
            stores: [
                { name: "Evetech", price: 1299, inStock: true, url: "#" },
                { name: "Wootware", price: 1349, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1399, inStock: true, url: "#" }
            ]
        },
        {
            id: "ram-5",
            name: "TeamGroup T-Force Delta RGB 32GB (2x16GB) DDR4 3200MHz",
            brand: "TeamGroup",
            image: "https://m.media-amazon.com/images/I/71Vt8RM5TQL._AC_SL1500_.jpg",
            description: "RGB DDR4 memory with full-length RGB light bar",
            specifications: {
                capacity: "32GB (2x16GB)",
                type: "DDR4",
                speed: "3200MHz",
                cas_latency: "16",
                voltage: "1.35V",
                rgb: "Yes",
                xmp_profile: "Yes",
                heat_spreader: "Aluminum"
            },
            price: {
                current: 1999,
                original: 2299,
                discount: "13%"
            },
            ratings: {
                average: 4.4,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 1999, inStock: true, url: "#" },
                { name: "Wootware", price: 2049, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 2099, inStock: true, url: "#" }
            ]
        }
    ],
    
    // Graphics Cards
    graphics_cards: [
        {
            id: "gpu-1",
            name: "NVIDIA GeForce RTX 4080 16GB",
            brand: "NVIDIA",
            image: "https://m.media-amazon.com/images/I/81oVSBKZJDL._AC_SL1500_.jpg",
            description: "High-end graphics card with ray tracing and DLSS 3.0 technology",
            specifications: {
                gpu: "NVIDIA GeForce RTX 4080",
                memory: "16GB GDDR6X",
                memory_bus: "256-bit",
                core_clock: "2205 MHz (Base), 2505 MHz (Boost)",
                cuda_cores: "9728",
                rt_cores: "76",
                tensor_cores: "304",
                interface: "PCIe 4.0 x16",
                power_connectors: "1 x 16-pin",
                recommended_psu: "750W",
                length: "304mm"
            },
            price: {
                current: 24999,
                original: 27999,
                discount: "11%"
            },
            ratings: {
                average: 4.8,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 24999, inStock: true, url: "#" },
                { name: "Wootware", price: 25499, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 25999, inStock: false, url: "#" }
            ]
        },
        {
            id: "gpu-2",
            name: "AMD Radeon RX 7900 XT 20GB",
            brand: "AMD",
            image: "https://m.media-amazon.com/images/I/81U5H5c0jUL._AC_SL1500_.jpg",
            description: "High-performance graphics card with RDNA 3 architecture",
            specifications: {
                gpu: "AMD Radeon RX 7900 XT",
                memory: "20GB GDDR6",
                memory_bus: "320-bit",
                core_clock: "2000 MHz (Base), 2400 MHz (Boost)",
                stream_processors: "10752",
                ray_accelerators: "84",
                ai_accelerators: "168",
                interface: "PCIe 4.0 x16",
                power_connectors: "2 x 8-pin",
                recommended_psu: "750W",
                length: "287mm"
            },
            price: {
                current: 19999,
                original: 22999,
                discount: "13%"
            },
            ratings: {
                average: 4.7,
                count: 276
            },
            stores: [
                { name: "Evetech", price: 19999, inStock: true, url: "#" },
                { name: "Wootware", price: 20499, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 20999, inStock: true, url: "#" }
            ]
        },
        {
            id: "gpu-3",
            name: "NVIDIA GeForce RTX 4060 Ti 8GB",
            brand: "NVIDIA",
            image: "https://m.media-amazon.com/images/I/81ydR1HRbNL._AC_SL1500_.jpg",
            description: "Mid-range graphics card with ray tracing and DLSS 3.0 technology",
            specifications: {
                gpu: "NVIDIA GeForce RTX 4060 Ti",
                memory: "8GB GDDR6",
                memory_bus: "128-bit",
                core_clock: "2310 MHz (Base), 2535 MHz (Boost)",
                cuda_cores: "4352",
                rt_cores: "34",
                tensor_cores: "136",
                interface: "PCIe 4.0 x16",
                power_connectors: "1 x 8-pin",
                recommended_psu: "550W",
                length: "240mm"
            },
            price: {
                current: 8999,
                original: 9999,
                discount: "10%"
            },
            ratings: {
                average: 4.6,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 8999, inStock: true, url: "#" },
                { name: "Wootware", price: 9199, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 9299, inStock: true, url: "#" }
            ]
        },
        {
            id: "gpu-4",
            name: "AMD Radeon RX 6700 XT 12GB",
            brand: "AMD",
            image: "https://m.media-amazon.com/images/I/81cSiuWLFFL._AC_SL1500_.jpg",
            description: "Mid-range graphics card with RDNA 2 architecture",
            specifications: {
                gpu: "AMD Radeon RX 6700 XT",
                memory: "12GB GDDR6",
                memory_bus: "192-bit",
                core_clock: "2321 MHz (Base), 2581 MHz (Boost)",
                stream_processors: "2560",
                ray_accelerators: "40",
                interface: "PCIe 4.0 x16",
                power_connectors: "1 x 8-pin, 1 x 6-pin",
                recommended_psu: "650W",
                length: "267mm"
            },
            price: {
                current: 7499,
                original: 8499,
                discount: "12%"
            },
            ratings: {
                average: 4.5,
                count: 387
            },
            stores: [
                { name: "Evetech", price: 7499, inStock: true, url: "#" },
                { name: "Wootware", price: 7699, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 7799, inStock: true, url: "#" }
            ]
        },
        {
            id: "gpu-5",
            name: "NVIDIA GeForce RTX 3050 8GB",
            brand: "NVIDIA",
            image: "https://m.media-amazon.com/images/I/81cSiuWLFFL._AC_SL1500_.jpg",
            description: "Entry-level graphics card with ray tracing and DLSS technology",
            specifications: {
                gpu: "NVIDIA GeForce RTX 3050",
                memory: "8GB GDDR6",
                memory_bus: "128-bit",
                core_clock: "1552 MHz (Base), 1777 MHz (Boost)",
                cuda_cores: "2560",
                rt_cores: "20",
                tensor_cores: "80",
                interface: "PCIe 4.0 x16",
                power_connectors: "1 x 8-pin",
                recommended_psu: "550W",
                length: "242mm"
            },
            price: {
                current: 4999,
                original: 5499,
                discount: "9%"
            },
            ratings: {
                average: 4.3,
                count: 298
            },
            stores: [
                { name: "Evetech", price: 4999, inStock: true, url: "#" },
                { name: "Wootware", price: 5099, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 5199, inStock: true, url: "#" }
            ]
        }
    ],
    
    // Storage
    storage: [
        {
            id: "storage-1",
            name: "Samsung 980 PRO 1TB NVMe SSD",
            brand: "Samsung",
            image: "https://m.media-amazon.com/images/I/71uT6oJECsL._AC_SL1500_.jpg",
            description: "High-performance PCIe 4.0 NVMe SSD for gaming and professional workloads",
            specifications: {
                capacity: "1TB",
                interface: "PCIe 4.0 x4 NVMe",
                form_factor: "M.2 2280",
                sequential_read: "7000 MB/s",
                sequential_write: "5000 MB/s",
                random_read: "1000K IOPS",
                random_write: "1000K IOPS",
                nand_type: "V-NAND 3-bit MLC",
                controller: "Samsung Elpis",
                dram: "1GB LPDDR4",
                tbw: "600 TBW",
                warranty: "5 years"
            },
            price: {
                current: 2499,
                original: 2899,
                discount: "14%"
            },
            ratings: {
                average: 4.9,
                count: 876
            },
            stores: [
                { name: "Evetech", price: 2499, inStock: true, url: "#" },
                { name: "Wootware", price: 2599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2649, inStock: true, url: "#" }
            ]
        },
        {
            id: "storage-2",
            name: "WD Black SN850X 2TB NVMe SSD",
            brand: "Western Digital",
            image: "https://m.media-amazon.com/images/I/71L+x+E+TbL._AC_SL1500_.jpg",
            description: "High-performance PCIe 4.0 NVMe SSD for gaming and content creation",
            specifications: {
                capacity: "2TB",
                interface: "PCIe 4.0 x4 NVMe",
                form_factor: "M.2 2280",
                sequential_read: "7300 MB/s",
                sequential_write: "6600 MB/s",
                random_read: "1200K IOPS",
                random_write: "1100K IOPS",
                nand_type: "3D TLC",
                controller: "WD Proprietary",
                dram: "Yes",
                tbw: "1200 TBW",
                warranty: "5 years"
            },
            price: {
                current: 3999,
                original: 4499,
                discount: "11%"
            },
            ratings: {
                average: 4.8,
                count: 654
            },
            stores: [
                { name: "Evetech", price: 3999, inStock: true, url: "#" },
                { name: "Wootware", price: 4099, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 4199, inStock: false, url: "#" }
            ]
        },
        {
            id: "storage-3",
            name: "Crucial MX500 1TB SATA SSD",
            brand: "Crucial",
            image: "https://m.media-amazon.com/images/I/81rg-38AdJL._AC_SL1500_.jpg",
            description: "Reliable SATA SSD for everyday computing",
            specifications: {
                capacity: "1TB",
                interface: "SATA III (6Gb/s)",
                form_factor: "2.5-inch",
                sequential_read: "560 MB/s",
                sequential_write: "510 MB/s",
                random_read: "95K IOPS",
                random_write: "90K IOPS",
                nand_type: "3D TLC",
                controller: "Silicon Motion SM2258",
                dram: "Yes",
                tbw: "360 TBW",
                warranty: "5 years"
            },
            price: {
                current: 1499,
                original: 1699,
                discount: "12%"
            },
            ratings: {
                average: 4.7,
                count: 1243
            },
            stores: [
                { name: "Evetech", price: 1499, inStock: true, url: "#" },
                { name: "Wootware", price: 1549, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1599, inStock: true, url: "#" }
            ]
        },
        {
            id: "storage-4",
            name: "Seagate BarraCuda 4TB HDD",
            brand: "Seagate",
            image: "https://m.media-amazon.com/images/I/71Czt3wGgfL._AC_SL1500_.jpg",
            description: "High-capacity hard drive for mass storage needs",
            specifications: {
                capacity: "4TB",
                interface: "SATA III (6Gb/s)",
                form_factor: "3.5-inch",
                rotational_speed: "5400 RPM",
                cache: "256MB",
                average_seek_time: "8.5ms",
                average_latency: "5.55ms",
                sustained_transfer_rate: "190 MB/s",
                warranty: "2 years"
            },
            price: {
                current: 1799,
                original: 1999,
                discount: "10%"
            },
            ratings: {
                average: 4.5,
                count: 876
            },
            stores: [
                { name: "Evetech", price: 1799, inStock: true, url: "#" },
                { name: "Wootware", price: 1849, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 1899, inStock: true, url: "#" }
            ]
        },
        {
            id: "storage-5",
            name: "Kingston KC3000 500GB NVMe SSD",
            brand: "Kingston",
            image: "https://m.media-amazon.com/images/I/71L+x+E+TbL._AC_SL1500_.jpg",
            description: "High-performance PCIe 4.0 NVMe SSD for gaming and content creation",
            specifications: {
                capacity: "500GB",
                interface: "PCIe 4.0 x4 NVMe",
                form_factor: "M.2 2280",
                sequential_read: "7000 MB/s",
                sequential_write: "3900 MB/s",
                random_read: "900K IOPS",
                random_write: "450K IOPS",
                nand_type: "3D TLC",
                controller: "Phison E18",
                dram: "Yes",
                tbw: "400 TBW",
                warranty: "5 years"
            },
            price: {
                current: 1299,
                original: 1499,
                discount: "13%"
            },
            ratings: {
                average: 4.6,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 1299, inStock: true, url: "#" },
                { name: "Wootware", price: 1349, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 1399, inStock: true, url: "#" }
            ]
        }
    ],
    
    // CPUs
    cpus: [
        {
            id: "cpu-1",
            name: "Intel Core i9-13900K",
            brand: "Intel",
            image: "https://m.media-amazon.com/images/I/61BWdlLKzrL._AC_SL1500_.jpg",
            description: "High-end desktop processor with 24 cores and 32 threads for extreme performance",
            specifications: {
                cores: "24 (8P + 16E)",
                threads: "32",
                base_clock: "3.0 GHz (P-cores), 2.2 GHz (E-cores)",
                boost_clock: "5.8 GHz (P-cores), 4.3 GHz (E-cores)",
                cache: "36MB L3, 32MB L2",
                tdp: "125W (PL1), 253W (PL2)",
                socket: "LGA 1700",
                memory_support: "DDR4-3200, DDR5-5600",
                pcie_lanes: "20 PCIe 5.0/4.0",
                integrated_graphics: "Intel UHD Graphics 770"
            },
            price: {
                current: 9999,
                original: 10999,
                discount: "9%"
            },
            ratings: {
                average: 4.9,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 9999, inStock: true, url: "#" },
                { name: "Wootware", price: 10299, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 10499, inStock: true, url: "#" }
            ]
        },
        {
            id: "cpu-2",
            name: "AMD Ryzen 9 7950X",
            brand: "AMD",
            image: "https://m.media-amazon.com/images/I/61kBCOJvPvL._AC_SL1500_.jpg",
            description: "High-end desktop processor with 16 cores and 32 threads for extreme performance",
            specifications: {
                cores: "16",
                threads: "32",
                base_clock: "4.5 GHz",
                boost_clock: "5.7 GHz",
                cache: "64MB L3, 16MB L2",
                tdp: "170W",
                socket: "AM5",
                memory_support: "DDR5-5200",
                pcie_lanes: "28 PCIe 5.0",
                integrated_graphics: "AMD Radeon Graphics"
            },
            price: {
                current: 9499,
                original: 10499,
                discount: "10%"
            },
            ratings: {
                average: 4.8,
                count: 387
            },
            stores: [
                { name: "Evetech", price: 9499, inStock: true, url: "#" },
                { name: "Wootware", price: 9699, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 9899, inStock: false, url: "#" }
            ]
        },
        {
            id: "cpu-3",
            name: "Intel Core i5-13600K",
            brand: "Intel",
            image: "https://m.media-amazon.com/images/I/61BWdlLKzrL._AC_SL1500_.jpg",
            description: "Mid-range desktop processor with 14 cores and 20 threads for gaming and productivity",
            specifications: {
                cores: "14 (6P + 8E)",
                threads: "20",
                base_clock: "3.5 GHz (P-cores), 2.6 GHz (E-cores)",
                boost_clock: "5.1 GHz (P-cores), 3.9 GHz (E-cores)",
                cache: "24MB L3, 20MB L2",
                tdp: "125W (PL1), 181W (PL2)",
                socket: "LGA 1700",
                memory_support: "DDR4-3200, DDR5-5600",
                pcie_lanes: "20 PCIe 5.0/4.0",
                integrated_graphics: "Intel UHD Graphics 770"
            },
            price: {
                current: 5999,
                original: 6499,
                discount: "8%"
            },
            ratings: {
                average: 4.7,
                count: 543
            },
            stores: [
                { name: "Evetech", price: 5999, inStock: true, url: "#" },
                { name: "Wootware", price: 6099, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 6199, inStock: true, url: "#" }
            ]
        },
        {
            id: "cpu-4",
            name: "AMD Ryzen 5 7600X",
            brand: "AMD",
            image: "https://m.media-amazon.com/images/I/61kBCOJvPvL._AC_SL1500_.jpg",
            description: "Mid-range desktop processor with 6 cores and 12 threads for gaming and productivity",
            specifications: {
                cores: "6",
                threads: "12",
                base_clock: "4.7 GHz",
                boost_clock: "5.3 GHz",
                cache: "32MB L3, 6MB L2",
                tdp: "105W",
                socket: "AM5",
                memory_support: "DDR5-5200",
                pcie_lanes: "28 PCIe 5.0",
                integrated_graphics: "AMD Radeon Graphics"
            },
            price: {
                current: 4499,
                original: 4999,
                discount: "10%"
            },
            ratings: {
                average: 4.6,
                count: 432
            },
            stores: [
                { name: "Evetech", price: 4499, inStock: true, url: "#" },
                { name: "Wootware", price: 4599, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 4699, inStock: true, url: "#" }
            ]
        },
        {
            id: "cpu-5",
            name: "Intel Core i3-13100",
            brand: "Intel",
            image: "https://m.media-amazon.com/images/I/61BWdlLKzrL._AC_SL1500_.jpg",
            description: "Entry-level desktop processor with 4 cores and 8 threads for everyday computing",
            specifications: {
                cores: "4",
                threads: "8",
                base_clock: "3.4 GHz",
                boost_clock: "4.5 GHz",
                cache: "12MB L3, 5MB L2",
                tdp: "60W (PL1), 89W (PL2)",
                socket: "LGA 1700",
                memory_support: "DDR4-3200, DDR5-4800",
                pcie_lanes: "20 PCIe 5.0/4.0",
                integrated_graphics: "Intel UHD Graphics 730"
            },
            price: {
                current: 2499,
                original: 2799,
                discount: "11%"
            },
            ratings: {
                average: 4.5,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 2499, inStock: true, url: "#" },
                { name: "Wootware", price: 2599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2649, inStock: true, url: "#" }
            ]
        }
    ],
    
    // Power Supplies
    power_supplies: [
        {
            id: "psu-1",
            name: "Corsair RM850x 850W 80+ Gold",
            brand: "Corsair",
            image: "https://m.media-amazon.com/images/I/71RpUtQYFOL._AC_SL1500_.jpg",
            description: "High-quality fully modular power supply with 80+ Gold certification",
            specifications: {
                wattage: "850W",
                efficiency: "80+ Gold",
                modularity: "Fully Modular",
                fan_size: "135mm",
                fan_type: "Magnetic Levitation",
                connectors: "1 x 24-pin ATX, 2 x EPS12V, 4 x PCIe, 10 x SATA, 4 x Molex",
                protection: "OVP, UVP, OCP, OPP, SCP, OTP",
                dimensions: "150mm x 86mm x 160mm",
                warranty: "10 years"
            },
            price: {
                current: 2999,
                original: 3499,
                discount: "14%"
            },
            ratings: {
                average: 4.9,
                count: 654
            },
            stores: [
                { name: "Evetech", price: 2999, inStock: true, url: "#" },
                { name: "Wootware", price: 3099, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 3199, inStock: true, url: "#" }
            ]
        },
        {
            id: "psu-2",
            name: "EVGA SuperNOVA 750 G5 750W 80+ Gold",
            brand: "EVGA",
            image: "https://m.media-amazon.com/images/I/71Lf9GrQylL._AC_SL1500_.jpg",
            description: "Fully modular power supply with 80+ Gold certification and ECO Mode",
            specifications: {
                wattage: "750W",
                efficiency: "80+ Gold",
                modularity: "Fully Modular",
                fan_size: "135mm",
                fan_type: "Fluid Dynamic Bearing",
                connectors: "1 x 24-pin ATX, 2 x EPS12V, 4 x PCIe, 8 x SATA, 3 x Molex",
                protection: "OVP, UVP, OCP, OPP, SCP, OTP",
                dimensions: "150mm x 85mm x 150mm",
                warranty: "10 years"
            },
            price: {
                current: 2499,
                original: 2899,
                discount: "14%"
            },
            ratings: {
                average: 4.8,
                count: 543
            },
            stores: [
                { name: "Evetech", price: 2499, inStock: true, url: "#" },
                { name: "Wootware", price: 2599, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 2649, inStock: false, url: "#" }
            ]
        },
        {
            id: "psu-3",
            name: "Seasonic FOCUS GX-650 650W 80+ Gold",
            brand: "Seasonic",
            image: "https://m.media-amazon.com/images/I/71Lf9GrQylL._AC_SL1500_.jpg",
            description: "Fully modular power supply with 80+ Gold certification and hybrid fan control",
            specifications: {
                wattage: "650W",
                efficiency: "80+ Gold",
                modularity: "Fully Modular",
                fan_size: "120mm",
                fan_type: "Fluid Dynamic Bearing",
                connectors: "1 x 24-pin ATX, 2 x EPS12V, 2 x PCIe, 7 x SATA, 3 x Molex",
                protection: "OVP, UVP, OCP, OPP, SCP, OTP",
                dimensions: "140mm x 85mm x 150mm",
                warranty: "10 years"
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
            id: "psu-4",
            name: "be quiet! Pure Power 11 500W 80+ Gold",
            brand: "be quiet!",
            image: "https://m.media-amazon.com/images/I/71RpUtQYFOL._AC_SL1500_.jpg",
            description: "Semi-modular power supply with 80+ Gold certification and silent operation",
            specifications: {
                wattage: "500W",
                efficiency: "80+ Gold",
                modularity: "Semi-Modular",
                fan_size: "120mm",
                fan_type: "Silent Wings",
                connectors: "1 x 24-pin ATX, 1 x EPS12V, 2 x PCIe, 6 x SATA, 3 x Molex",
                protection: "OVP, UVP, OCP, OPP, SCP",
                dimensions: "150mm x 86mm x 150mm",
                warranty: "5 years"
            },
            price: {
                current: 1499,
                original: 1699,
                discount: "12%"
            },
            ratings: {
                average: 4.6,
                count: 321
            },
            stores: [
                { name: "Evetech", price: 1499, inStock: true, url: "#" },
                { name: "Wootware", price: 1549, inStock: false, url: "#" },
                { name: "Dreamware Tech", price: 1599, inStock: true, url: "#" }
            ]
        },
        {
            id: "psu-5",
            name: "Cooler Master MWE 450W 80+ Bronze",
            brand: "Cooler Master",
            image: "https://m.media-amazon.com/images/I/71RpUtQYFOL._AC_SL1500_.jpg",
            description: "Entry-level non-modular power supply with 80+ Bronze certification",
            specifications: {
                wattage: "450W",
                efficiency: "80+ Bronze",
                modularity: "Non-Modular",
                fan_size: "120mm",
                fan_type: "Sleeve Bearing",
                connectors: "1 x 24-pin ATX, 1 x EPS12V, 2 x PCIe, 5 x SATA, 2 x Molex",
                protection: "OVP, UVP, OCP, OPP, SCP",
                dimensions: "140mm x 86mm x 150mm",
                warranty: "3 years"
            },
            price: {
                current: 899,
                original: 999,
                discount: "10%"
            },
            ratings: {
                average: 4.4,
                count: 276
            },
            stores: [
                { name: "Evetech", price: 899, inStock: true, url: "#" },
                { name: "Wootware", price: 949, inStock: true, url: "#" },
                { name: "Dreamware Tech", price: 979, inStock: true, url: "#" }
            ]
        }
    ]
};

// Function to display PC components by type
function displayComponentsProducts(type = null) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    let products = [];
    
    if (type && componentsProducts[type]) {
        products = componentsProducts[type];
    } else {
        // If no type specified or invalid type, show all products
        Object.values(componentsProducts).forEach(categoryProducts => {
            products = products.concat(categoryProducts);
        });
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
    let productType = 'motherboard';
    if (product.id.startsWith('ram-')) {
        productType = 'ram';
    } else if (product.id.startsWith('gpu-')) {
        productType = 'gpu';
    } else if (product.id.startsWith('storage-')) {
        productType = 'storage';
    } else if (product.id.startsWith('cpu-')) {
        productType = 'cpu';
    } else if (product.id.startsWith('psu-')) {
        productType = 'psu';
    }
    
    // Generate specs HTML based on product type
    let specsHTML = '';
    
    if (productType === 'motherboard') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.socket || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.chipset || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.form_factor || '') : ''}</span>
        `;
    } else if (productType === 'ram') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.capacity || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.type || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.speed || '') : ''}</span>
        `;
    } else if (productType === 'gpu') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.gpu || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.memory || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.memory_bus || '') : ''}</span>
        `;
    } else if (productType === 'storage') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.capacity || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.interface || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.form_factor || '') : ''}</span>
        `;
    } else if (productType === 'cpu') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.cores + ' cores / ' + product.specifications.threads + ' threads' || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.base_clock || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.socket || '') : ''}</span>
        `;
    } else if (productType === 'psu') {
        specsHTML = `
            <span>${product.specifications ? (product.specifications.wattage || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.efficiency || '') : ''}</span>
            <span>${product.specifications ? (product.specifications.modularity || '') : ''}</span>
        `;
    }
    
    card.innerHTML = `
        <a href="components-product.html?id=${product.id}" class="product-link">
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
            // Default sorting (relevance) - based on price
            products.sort((a, b) => a.price.current - b.price.current);
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

// Function to navigate to PC components by type
function navigateToComponentsByType(type) {
    // Update URL with the selected type
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    window.history.pushState({}, '', url);
    
    // Display products of the selected type
    displayComponentsProducts(type);
    
    // Update page title based on type
    updatePageTitle(type);
}

// Function to update page title based on product type
function updatePageTitle(type) {
    const titleElement = document.querySelector('.section-title');
    if (!titleElement) return;
    
    let title = 'PC Components';
    
    switch (type) {
        case 'motherboards':
            title = 'Motherboards';
            break;
        case 'ram':
            title = 'Memory (RAM)';
            break;
        case 'graphics_cards':
            title = 'Graphics Cards';
            break;
        case 'storage':
            title = 'Storage Devices';
            break;
        case 'cpus':
            title = 'Processors (CPUs)';
            break;
        case 'power_supplies':
            title = 'Power Supplies';
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
    displayComponentsProducts(productType);
    
    // Update page title
    updatePageTitle(productType);
    
    // Add event listener for sort select
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            displayComponentsProducts(productType);
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

// Make functions available globally
window.displayComponentsProducts = displayComponentsProducts;
window.navigateToComponentsByType = navigateToComponentsByType;
window.closeNotification = closeNotification;