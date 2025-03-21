document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    let currentIndex = 0;
    let isScrolling = false; // Prevent multiple rapid scrolls

    document.addEventListener("wheel", (event) => {
        if (isScrolling) return; // Ignore if already scrolling

        isScrolling = true; // Set flag to true

        if (event.deltaY > 0) {
            // Scroll Down
            if (currentIndex < sections.length - 1) {
                currentIndex++;
            }
        } else {
            // Scroll Up
            if (currentIndex > 0) {
                currentIndex--;
            }
        }

        sections[currentIndex].scrollIntoView({
            behavior: "smooth"
        });

        // Delay next scroll event to prevent skipping sections
        setTimeout(() => {
            isScrolling = false;
        }, 800); // Adjust time for smoother effect
    });
});