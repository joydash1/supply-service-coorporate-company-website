document.addEventListener("DOMContentLoaded", () => {
    loadLayout();
});


/* =========================================================
   MAIN LAYOUT
========================================================= */

async function loadLayout() {

    /*
     * 01. HEADER
     */
    await loadComponent(
        "header",
        "../layouts/header.html"
    );


    /*
     * 02. HOME HERO
     */
    await loadComponent(
        "homeHero",
        "../layouts/home-hero.html"
    );


    /*
     * 03. PRODUCTS
     */
    await loadPageContent(
        "homeProducts",
        "products.html",
        ".products-hero"
    );


    /*
     * 04. ABOUT US
     */
    await loadPageContent(
        "homeAbout",
        "aboutus.html",
        ".about-page-hero"
    );


    /*
     * 05. CONTACT
     */
    await loadPageContent(
        "homeContact",
        "contact.html",
        ".contact-hero"
    );


    /*
     * 06. FOOTER
     */
    await loadComponent(
        "footer",
        "../layouts/footer.html"
    );


    /*
     * INITIALIZE FEATURES
     */
    initializeMobileMenu();

    setActiveNavigation();

    initializeHomeContactForm();

}



/* =========================================================
   LOAD PAGE CONTENT
========================================================= */

async function loadPageContent(
    elementId,
    filePath,
    excludedSelector
) {

    const element =
        document.getElementById(elementId);


    if (!element) {
        return;
    }


    try {

        const response =
            await fetch(filePath);


        if (!response.ok) {

            throw new Error(
                `Unable to load ${filePath}`
            );

        }


        const html =
            await response.text();


        /*
         * Convert loaded HTML into DOM
         */
        const documentFragment =
            new DOMParser().parseFromString(
                html,
                "text/html"
            );


        /*
         * Get MAIN content
         */
        const pageMain =
            documentFragment.querySelector("main") ||
            documentFragment.body;


        if (!pageMain) {
            return;
        }


        /*
         * Remove page hero
         *
         * Example:
         *
         * products.html
         *      → remove .products-hero
         *
         * aboutus.html
         *      → remove .about-page-hero
         *
         * contact.html
         *      → remove .contact-hero
         */
        if (excludedSelector) {

            const excludedSection =
                pageMain.querySelector(
                    excludedSelector
                );


            excludedSection?.remove();

        }


        /*
         * Remove layout elements
         *
         * We already have:
         *
         * Header
         * Footer
         *
         * on the homepage.
         */
        pageMain.querySelectorAll(
            ".topbar, .site-header, header, footer, #footer"
        ).forEach(layoutElement => {

            layoutElement.remove();

        });


        /*
         * Remove scripts from loaded pages.
         *
         * Otherwise products.js / pdf-viewer.js /
         * other scripts could execute multiple times.
         */
        pageMain
            .querySelectorAll("script")
            .forEach(script => {

                script.remove();

            });


        /*
         * Fix relative image paths.
         *
         * Example:
         *
         * images/about.jpg
         *
         * becomes:
         *
         * ../assets/images/about.jpg
         */
        pageMain
            .querySelectorAll("img[src]")
            .forEach(image => {

                const source =
                    image.getAttribute("src");


                if (!source) {
                    return;
                }


                /*
                 * Only modify relative paths
                 */
                if (
                    source.startsWith("images/")
                ) {

                    image.setAttribute(
                        "src",
                        `../assets/${source}`
                    );

                }

            });


        /*
         * Fix relative CSS/background links if needed
         */
        pageMain
            .querySelectorAll("[href]")
            .forEach(link => {

                const href =
                    link.getAttribute("href");


                if (!href) {
                    return;
                }


                /*
                 * Don't modify:
                 * - # links
                 * - http links
                 * - mailto
                 * - tel
                 * - javascript
                 */
                if (
                    href.startsWith("#") ||
                    href.startsWith("http") ||
                    href.startsWith("mailto:") ||
                    href.startsWith("tel:") ||
                    href.startsWith("javascript:")
                ) {
                    return;
                }

            });


        /*
         * Insert content into homepage
         */
        element.innerHTML =
            pageMain.innerHTML;


    }
    catch (error) {

        console.error(
            `Page loading error (${filePath}):`,
            error
        );

    }

}



/* =========================================================
   LOAD COMPONENT
========================================================= */

async function loadComponent(
    elementId,
    filePath
) {

    const element =
        document.getElementById(elementId);


    if (!element) {
        return;
    }


    try {

        const response =
            await fetch(filePath);


        if (!response.ok) {

            throw new Error(
                `Unable to load ${filePath}`
            );

        }


        const html =
            await response.text();


        element.innerHTML =
            html;

    }
    catch (error) {

        console.error(
            `Layout loading error (${filePath}):`,
            error
        );

    }

}



/* =========================================================
   HOME CONTACT FORM
========================================================= */

function initializeHomeContactForm() {

    const homeContact =
        document.getElementById(
            "homeContact"
        );


    if (!homeContact) {
        return;
    }


    const form =
        homeContact.querySelector(
            "#contactForm"
        );


    const success =
        homeContact.querySelector(
            "#formSuccess"
        );


    if (!form || !success) {
        return;
    }


    /*
     * Prevent duplicate event listeners
     */
    if (
        form.dataset.initialized === "true"
    ) {
        return;
    }


    form.dataset.initialized =
        "true";


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            success.classList.add(
                "show"
            );


            form.reset();


            setTimeout(() => {

                success.classList.remove(
                    "show"
                );

            }, 5000);

        }
    );

}



/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

    const menuBtn =
        document.getElementById(
            "mobileMenuBtn"
        );


    const mobileMenu =
        document.getElementById(
            "mobileMenu"
        );


    if (!menuBtn || !mobileMenu) {
        return;
    }


    /*
     * Prevent duplicate event listeners
     */
    if (
        menuBtn.dataset.initialized === "true"
    ) {
        return;
    }


    menuBtn.dataset.initialized =
        "true";


    menuBtn.addEventListener(
        "click",
        () => {

            menuBtn.classList.toggle(
                "open"
            );


            mobileMenu.classList.toggle(
                "show"
            );

        }
    );


    /*
     * Close menu after clicking a link
     */
    const links =
        mobileMenu.querySelectorAll("a");


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menuBtn.classList.remove(
                    "open"
                );


                mobileMenu.classList.remove(
                    "show"
                );

            }
        );

    });

}



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function setActiveNavigation() {

    const navLinks =
        document.querySelectorAll(
            ".desktop-nav .nav-link"
        );


    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );


        const page =
            link.dataset.page
                ?.toLowerCase();


        if (
            page === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });


    /*
     * HOME
     */
    if (
        currentPage === "" ||
        currentPage === "index.html"
    ) {

        const home =
            document.querySelector(
                '[data-page="index.html"]'
            );


        if (home) {

            home.classList.add(
                "active"
            );

        }

    }


    /*
     * PRODUCT DETAILS
     * belongs to Products navigation
     */
    if (
        currentPage ===
        "product-details.html"
    ) {

        const products =
            document.querySelector(
                '[data-page="products.html"]'
            );


        if (products) {

            products.classList.add(
                "active"
            );

        }

    }

}