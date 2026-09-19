document.addEventListener("DOMContentLoaded", function () {

    const viewers = document.querySelectorAll(".pdf-viewer");

    viewers.forEach(function (viewer) {

        const pdfUrl = viewer.dataset.pdf;

        const canvas = viewer.querySelector(".pdf-canvas");
        const context = canvas.getContext("2d");

        const card = viewer.closest(".certificate-card");

        const prevButton = card.querySelector(".pdf-prev");
        const nextButton = card.querySelector(".pdf-next");

        const currentPageElement =
            card.querySelector(".pdf-current");

        const totalPageElement =
            card.querySelector(".pdf-total");

        const loadingElement =
            viewer.querySelector(".pdf-loading");


        let pdfDocument = null;
        let currentPage = 1;
        let totalPages = 0;


        // ============================================
        // LOAD PDF
        // ============================================

        pdfjsLib.getDocument(pdfUrl).promise
            .then(function (pdf) {

                pdfDocument = pdf;
                totalPages = pdf.numPages;

                totalPageElement.textContent = totalPages;

                loadingElement.style.display = "none";

                renderPage(currentPage);

                updateButtons();

            })
            .catch(function (error) {

                console.error(
                    "PDF loading error:",
                    error
                );

                loadingElement.textContent =
                    "Unable to load certificate.";

            });


        // ============================================
        // RENDER PAGE
        // ============================================

        function renderPage(pageNumber) {

            pdfDocument.getPage(pageNumber)
                .then(function (page) {

                    const containerWidth =
                        viewer.clientWidth;

                    const viewport =
                        page.getViewport({
                            scale: 1
                        });


                    const scale =
                        containerWidth / viewport.width;


                    const scaledViewport =
                        page.getViewport({
                            scale: scale
                        });


                    canvas.width =
                        scaledViewport.width;

                    canvas.height =
                        scaledViewport.height;


                    const renderContext = {
                        canvasContext: context,
                        viewport: scaledViewport
                    };


                    page.render(renderContext);

                    currentPageElement.textContent =
                        pageNumber;

                });
        }


        // ============================================
        // NEXT PAGE
        // ============================================

        nextButton.addEventListener("click", function () {

            if (
                currentPage < totalPages
            ) {

                currentPage++;

                renderPage(currentPage);

                updateButtons();

            }

        });


        // ============================================
        // PREVIOUS PAGE
        // ============================================

        prevButton.addEventListener("click", function () {

            if (currentPage > 1) {

                currentPage--;

                renderPage(currentPage);

                updateButtons();

            }

        });


        // ============================================
        // BUTTON STATE
        // ============================================

        function updateButtons() {

            prevButton.disabled =
                currentPage <= 1;

            nextButton.disabled =
                currentPage >= totalPages;

        }

    });

});