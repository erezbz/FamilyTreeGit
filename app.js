(function () {
    const controls = document.querySelectorAll(".control");
    const portfolioButton = document.querySelector('[data-id="portfolio"]');
    const themeButton = document.querySelector(".theme-btn");

    // Function to detect if the user is on a mobile device
    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    // Initial zoom adjustment if viewing on mobile and portfolio section is active
    function adjustZoom(isPortfolio) {
        if (isMobileDevice()) {
            document.body.style.zoom = isPortfolio ? "2%" : "100%";
        } else {
            document.body.style.zoom = isPortfolio ? "80%" : "100%";
        }
    }

    controls.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from previously active button
            document.querySelector(".active-btn").classList.remove("active-btn");
            // Add active class to the clicked button
            this.classList.add("active-btn");
            // Remove active class from previously active section
            document.querySelector(".active").classList.remove("active");
            // Add active class to the section corresponding to the clicked button
            document.getElementById(button.dataset.id).classList.add("active");

            // Adjust zoom based on the section
            adjustZoom(button.dataset.id === "portfolio");
        });
    });
    
    // Toggle light mode on theme button click
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
