/* =========================================================
   CONTACT FORM
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.getElementById(
                "contactForm"
            );


        const success =
            document.getElementById(
                "formSuccess"
            );


        if (!form || !success) {

            return;

        }


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                success.classList.add(
                    "show"
                );


                form.reset();


                setTimeout(
                    () => {

                        success.classList.remove(
                            "show"
                        );

                    },
                    5000
                );

            }
        );

    }
);