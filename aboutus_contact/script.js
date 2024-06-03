document.addEventListener("DOMContentLoaded", function() {
    var mainContent = document.getElementById("main-content");
    const sections = document.querySelectorAll("section");

    // Start the fade-in effect by gradually changing the opacity to 1
    setTimeout(function() {
        mainContent.style.opacity = "1";
    }, 2000); // Set to the duration of the animation in milliseconds

    function checkVisibility() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            // Check if the section is fully visible in the viewport
            if (sectionTop >= 0 && sectionBottom <= window.innerHeight) {
                if (!section.classList.contains("fade-in")) {
                    section.classList.add("fade-in");
                }
                if (section.classList.contains("fade-out")) {
                    section.classList.remove("fade-out");
                }
            } else {
                if (section.classList.contains("fade-in")) {
                    section.classList.remove("fade-in");
                }
                if (!section.classList.contains("fade-out")) {
                    section.classList.add("fade-out");
                }
            }
        });
    }

    // Check visibility on page load and scroll
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});

function toggleMenu() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}