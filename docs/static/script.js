// -----------------------------------------
// Animate on Scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("Reveal", entry, entry.isIntersecting);
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        } else {
            entry.target.classList.remove('revealed');
        }
    });
});

const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
hiddenElements.forEach((element) => observer.observe(element));

// -----------------------------------------