$(document).ready(function() {
        // Fade-in effect for sections
        $(".section").css("opacity", "0").animate({opacity: 1}, 1300);

        // Smooth scrolling for navigation links
        $("nav ul li a").on("click", function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                let hash = this.hash;
                $("html, body").animate(
                    {
                        scrollTop: $(hash).offset().top - 70 // Adjust for header height
                    },
                    1000 // Scroll duration in milliseconds
                );
            }
        });

        // Scroll-triggered animation
        let sections = document.querySelectorAll(".section");
        let aboutCards = document.querySelector(".about-cards");
        let courseGrid = document.querySelector(".course-grid");

        function checkScroll() {
            sections.forEach((section) => {
                let sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight - 100) {
                    section.classList.add("visible");
                }
            });

            if (aboutCards.getBoundingClientRect().top < window.innerHeight - 100) {
                aboutCards.classList.add("visible");
            }

            if (courseGrid.getBoundingClientRect().top < window.innerHeight - 100) {
                courseGrid.classList.add("visible");
            }
        }

        window.addEventListener("scroll", checkScroll);
        checkScroll();
    });
