(function () {
    const controls = document.querySelectorAll(".control");
    const portfolioButton = document.querySelector('[data-id="portfolio"]');
    const themeButton = document.querySelector(".theme-btn");
    
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

            // If the clicked button is the portfolio button, change zoom to 50%
            if (button.dataset.id === "portfolio") {
                document.body.style.zoom = "60%";
            } else {
                // Otherwise, change zoom back to 100%
                document.body.style.zoom = "100%";
            }
        });
    });
    
    // Toggle light mode on theme button click
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
