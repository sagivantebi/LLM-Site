// Smooth Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Back to Top Button Display Logic
window.onscroll = function() {
    let backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Expandable Article Preview in Index Page (using placeholders)
document.addEventListener("DOMContentLoaded", function() {
    const previews = document.querySelectorAll(".list-group-item");

    previews.forEach(preview => {
        preview.addEventListener("click", function() {
            const content = this.querySelector("p");
            if (content.style.display === "none" || !content.style.display) {
                content.style.display = "block";
                this.querySelector("h5").style.fontWeight = "bold";
            } else {
                content.style.display = "none";
                this.querySelector("h5").style.fontWeight = "normal";
            }
        });
    });
});
