/* =========================================================
   SM SUPPLY SERVICES — PRODUCT DETAILS PAGE
   =========================================================
   Handles:
   - Product data (5 products)
   - URL param parsing (?id=...)
   - Rendering hero, image, overview, features, applications
   - Safe HTML escaping
   ========================================================= */


/* =========================================================
   PRODUCT DATA
   ========================================================= */

const products = {

    /* =====================================================
       01 — FIRE EQUIPMENT
       ===================================================== */

    "fire-equipment": {
        number: "01",
        category: "FIRE SAFETY",
        title: "Fire Equipment",

        image: "/assets/images/products/fireequipment.jpg",

        shortDescription:
            "Reliable fire safety equipment designed to help businesses and institutions stay prepared for emergencies.",

        heading: "Reliable Fire Safety Equipment",

        description: [
            "We provide reliable fire safety equipment to help businesses and institutions stay prepared for emergencies.",
            "Our product range includes fire extinguishers, fire alarms, fire hoses and other essential fire prevention tools.",
            "These solutions are suitable for offices, commercial facilities, warehouses, factories and institutional environments."
        ],

        featuresIntro:
            "Our fire safety range includes essential equipment for emergency response and fire prevention.",

        features: [
            {
                icon: "🔥",
                title: "Fire Extinguishers",
                description: "Reliable fire extinguishing equipment for different workplace and commercial environments."
            },
            {
                icon: "🚨",
                title: "Fire Alarms",
                description: "Fire alarm solutions designed to support early detection and emergency awareness."
            },
            {
                icon: "💧",
                title: "Fire Hoses",
                description: "Fire hoses and related equipment for emergency fire response requirements."
            },
            {
                icon: "🛡️",
                title: "Fire Prevention Tools",
                description: "Essential products supporting safer business and institutional environments."
            }
        ],

        applications: [
            { icon: "🏢", title: "Offices" },
            { icon: "🏭", title: "Factories" },
            { icon: "📦", title: "Warehouses" },
            { icon: "🏬", title: "Commercial Facilities" },
            { icon: "🏫", title: "Institutions" }
        ]
    },


    /* =====================================================
       02 — AUTO PARTS
       ===================================================== */

    "auto-parts": {
        number: "02",
        category: "AUTOMOTIVE",
        title: "Auto Parts",

        image: "/assets/images/products/autoparts.jpg",

        shortDescription:
            "High-quality automotive parts for commercial and private vehicles, supporting reliable performance and durability.",

        heading: "Quality Automotive Parts",

        description: [
            "We supply high-quality automotive parts for both commercial and private vehicles.",
            "Our range is designed to support vehicle performance, reliability and long-term durability.",
            "Available products include engine components, braking components, filters and other essential automotive parts."
        ],

        featuresIntro:
            "Our automotive product range covers essential components for vehicle maintenance and operation.",

        features: [
            {
                icon: "⚙️",
                title: "Engine Components",
                description: "Essential components supporting reliable engine performance."
            },
            {
                icon: "🛞",
                title: "Brake Components",
                description: "Automotive braking components for maintenance and replacement requirements."
            },
            {
                icon: "🔧",
                title: "Filters",
                description: "Automotive filters supporting vehicle maintenance and performance."
            },
            {
                icon: "🚗",
                title: "Vehicle Parts",
                description: "A range of essential automotive parts for different vehicle requirements."
            }
        ],

        applications: [
            { icon: "🚗", title: "Private Vehicles" },
            { icon: "🚚", title: "Commercial Vehicles" },
            { icon: "🔧", title: "Workshops" },
            { icon: "🚛", title: "Transport Companies" },
            { icon: "🚐", title: "Fleet Operations" }
        ]
    },


    /* =====================================================
       03 — POLY MAILER
       ===================================================== */

    "poly-mailer": {
        number: "03",
        category: "PACKAGING",
        title: "Poly Mailer",

        image: "/assets/images/products/poly.jpg",

        shortDescription:
            "Durable poly mailer solutions designed for secure, lightweight and efficient packaging and shipping applications.",

        heading: "Reliable Poly Mailer Solutions",

        description: [
            "Our poly mailer solutions are designed to provide lightweight, practical and secure packaging for a wide range of products.",
            "They are suitable for e-commerce, retail, logistics and shipping applications where durable and efficient packaging is required.",
            "We supply packaging solutions designed to support businesses with their day-to-day shipping and distribution needs."
        ],

        featuresIntro:
            "Poly mailers provide a practical packaging solution for businesses involved in shipping and distribution.",

        features: [
            {
                icon: "📦",
                title: "Lightweight Packaging",
                description: "Lightweight packaging solutions that can support efficient shipping operations."
            },
            {
                icon: "🛡️",
                title: "Durable Material",
                description: "Designed to provide dependable protection during handling and transportation."
            },
            {
                icon: "🚚",
                title: "Shipping Ready",
                description: "Suitable for e-commerce, logistics and general shipping applications."
            },
            {
                icon: "🏭",
                title: "Business Solutions",
                description: "Practical packaging solutions for businesses with regular shipping requirements."
            }
        ],

        applications: [
            { icon: "🛒", title: "E-Commerce" },
            { icon: "🏪", title: "Retail" },
            { icon: "🚚", title: "Logistics" },
            { icon: "📦", title: "Shipping" },
            { icon: "🌐", title: "Distribution" }
        ]
    },


    /* =====================================================
       04 — SECURITY PLASTIC SEAL
       ===================================================== */

    "security-plastic-seal": {
        number: "04",
        category: "SECURITY",
        title: "Security Plastic Seal",

        image: "/assets/images/products/securityPlastic.jpg",

        shortDescription:
            "Durable security plastic seals suitable for cargo, containers, bags and equipment.",

        heading: "Security Plastic Seal Solutions",

        description: [
            "At SM Supply Services, we provide security plastic seals designed for a variety of cargo, container, bag and equipment applications.",
            "These seals provide a practical solution for identification and tamper-evident security requirements.",
            "Our security plastic seals are imported from China and supplied according to business requirements."
        ],

        featuresIntro:
            "Our security seal solutions are suitable for businesses that require simple and effective product identification and security.",

        features: [
            {
                icon: "🔒",
                title: "Security Seals",
                description: "Plastic seals designed to support security and identification requirements."
            },
            {
                icon: "📦",
                title: "Cargo Applications",
                description: "Suitable for securing cargo and transportation-related applications."
            },
            {
                icon: "🚢",
                title: "Container Applications",
                description: "Suitable for containers, bags and various equipment."
            },
            {
                icon: "🌏",
                title: "Imported from China",
                description: "We import security plastic seals from China to support our supply requirements."
            }
        ],

        applications: [
            { icon: "📦", title: "Cargo" },
            { icon: "🚢", title: "Containers" },
            { icon: "👜", title: "Bags" },
            { icon: "⚙️", title: "Equipment" },
            { icon: "🚚", title: "Logistics" }
        ]
    },


    /* =====================================================
       05 — HARDWARE ITEMS
       ===================================================== */

    "hardware-items": {
        number: "05",
        category: "HARDWARE",
        title: "Hardware Items",

        image: "/assets/images/products/hardwareitem.jpg",

        shortDescription:
            "Reliable and durable hardware items, tools and materials for construction, maintenance and industrial requirements.",

        heading: "Reliable Hardware Supplies",

        description: [
            "We supply a wide range of hardware items for different business, construction, maintenance and industrial requirements.",
            "Our hardware selection includes essential tools and materials chosen for reliability and durability.",
            "We work with clients to support their project requirements with practical hardware supply solutions."
        ],

        featuresIntro:
            "Our hardware range includes essential tools and materials for a variety of projects and maintenance needs.",

        features: [
            {
                icon: "🔧",
                title: "Hand Tools",
                description: "Essential tools for maintenance, repair and general project requirements."
            },
            {
                icon: "⚙️",
                title: "Hardware Materials",
                description: "Reliable hardware materials suitable for different applications."
            },
            {
                icon: "🏗️",
                title: "Construction Supplies",
                description: "Hardware products suitable for construction and project requirements."
            },
            {
                icon: "🛠️",
                title: "Maintenance Items",
                description: "Practical products supporting regular maintenance and repair work."
            }
        ],

        applications: [
            { icon: "🏗️", title: "Construction" },
            { icon: "🔧", title: "Maintenance" },
            { icon: "🏭", title: "Industrial Projects" },
            { icon: "🛠️", title: "Workshops" },
            { icon: "📋", title: "General Projects" }
        ]
    }

};


/* =========================================================
   INITIALIZE PAGE
   ========================================================= */

document.addEventListener("DOMContentLoaded", initializeProductPage);


/* =========================================================
   INITIALIZE PRODUCT PAGE
   ========================================================= */

function initializeProductPage() {

    /* -----------------------------------------
       GUARD: only run on product details page
    ----------------------------------------- */

    const isProductDetailPage =
        document.getElementById("productImage") !== null;

    if (!isProductDetailPage) {
        return;
    }


    /* -----------------------------------------
       GET PRODUCT ID FROM URL
    ----------------------------------------- */

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");


    /* -----------------------------------------
       NO ID → redirect
    ----------------------------------------- */

    if (!productId) {
        redirectToProducts();
        return;
    }


    /* -----------------------------------------
       GET PRODUCT DATA
    ----------------------------------------- */

    const product = products[productId];


    /* -----------------------------------------
       INVALID ID → redirect
    ----------------------------------------- */

    if (!product) {
        redirectToProducts();
        return;
    }


    /* -----------------------------------------
       PAGE TITLE
    ----------------------------------------- */

    document.title = `${product.title} | SM Supply Services`;


    /* -----------------------------------------
       RENDER ALL SECTIONS
    ----------------------------------------- */

    renderHero(product);
    renderImage(product);
    renderOverview(product);
    renderFeatures(product);
    renderApplications(product);
}


/* =========================================================
   REDIRECT TO PRODUCTS PAGE
   ========================================================= */

function redirectToProducts() {
    // Relative path — works from /pages/product-details.html
    window.location.href = "products.html";
}


/* =========================================================
   RENDER — HERO
   ========================================================= */

function renderHero(product) {

    const category = document.getElementById("productCategory");
    const title = document.getElementById("productTitle");
    const shortDescription = document.getElementById("productShortDescription");
    const breadcrumb = document.getElementById("breadcrumbProduct");


    /* Category */
    if (category) {
        category.textContent = product.category;
    }


    /* Title — split off LAST word into gold <span> */
    if (title) {
        const words = product.title.trim().split(" ");

        if (words.length > 1) {
            const lastWord = words.pop();
            const firstPart = words.join(" ");

            title.innerHTML = `
                ${escapeHTML(firstPart)}
                <span>${escapeHTML(lastWord)}</span>
            `;
        } else {
            title.textContent = product.title;
        }
    }


    /* Short description */
    if (shortDescription) {
        shortDescription.textContent = product.shortDescription;
    }


    /* Breadcrumb */
    if (breadcrumb) {
        breadcrumb.textContent = product.title;
    }
}


/* =========================================================
   RENDER — IMAGE
   ========================================================= */

function renderImage(product) {

    const productImage = document.getElementById("productImage");

    if (productImage) {
        productImage.src = product.image;
        productImage.alt = product.title;

        productImage.onerror = function () {
            console.error("Product image not found:", product.image);

            // Prevent infinite loop if fallback also fails
            this.onerror = null;

            // Fallback placeholder (create this file, or point to any existing image)
            this.src = "/assets/images/products/placeholder.jpg";
        };
    }


    /* Product number badge */
    const productNumber = document.getElementById("productNumber");
    if (productNumber) {
        productNumber.textContent = product.number;
    }


    /* Category badge */
    const badgeCategory = document.getElementById("badgeCategory");
    if (badgeCategory) {
        badgeCategory.textContent = product.category;
    }
}


/* =========================================================
   RENDER — OVERVIEW
   ========================================================= */

function renderOverview(product) {

    const productHeading = document.getElementById("productHeading");
    const productDescription = document.getElementById("productDescription");


    /* Heading */
    if (productHeading) {
        productHeading.textContent = product.heading;
    }


    /* Description paragraphs */
    if (productDescription) {
        productDescription.innerHTML = product.description
            .map(paragraph => `<p>${escapeHTML(paragraph)}</p>`)
            .join("");
    }
}


/* =========================================================
   RENDER — FEATURES
   ========================================================= */

function renderFeatures(product) {

    const featuresIntro = document.getElementById("featuresIntro");
    const productFeatures = document.getElementById("productFeatures");


    /* Intro text */
    if (featuresIntro) {
        featuresIntro.textContent = product.featuresIntro;
    }


    /* Feature cards */
    if (!productFeatures) {
        return;
    }

    productFeatures.innerHTML = product.features
        .map(feature => `
            <div class="fire-product-item">
                <div class="fire-product-icon">${feature.icon}</div>
                <h3>${escapeHTML(feature.title)}</h3>
                <p>${escapeHTML(feature.description)}</p>
            </div>
        `)
        .join("");
}


/* =========================================================
   RENDER — APPLICATIONS
   ========================================================= */

function renderApplications(product) {

    const productApplications =
        document.getElementById("productApplications");

    if (!productApplications) {
        return;
    }

    productApplications.innerHTML = product.applications
        .map((application, index) => `
            <div class="application-item">
                <div class="application-icon">${application.icon}</div>
                <div class="application-number">${String(index + 1).padStart(2, "0")}</div>
                <h3>${escapeHTML(application.title)}</h3>
            </div>
        `)
        .join("");
}


/* =========================================================
   HTML ESCAPE HELPER
   ========================================================= */

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}