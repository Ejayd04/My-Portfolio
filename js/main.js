document.addEventListener("DOMContentLoaded", function () {
    function onMenuClick() {
        let navbar = document.getElementById("navbar");
        navbar.classList.toggle("show");
    }
});

function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

document.addEventListener("DOMContentLoaded", function () {
    let offerSection = document.getElementById("offer-section");


    function addFadeInClass() {
        if (isInViewport(offerSection) && !offerSection.classList.contains("fade-in")) {
            offerSection.classList.add("fade-in");
        } else if (!isInViewport(offerSection) && offerSection.classList.contains("fade-in")) {
            offerSection.classList.remove("fade-in");
        }
    }

    window.addEventListener("scroll", function () {
        addFadeInClass();
    });

    addFadeInClass();
});

const peculiarItems = document.querySelectorAll('.peculiar-item');
const firstImage = peculiarItems[0].querySelector('img');
const secondImage = peculiarItems[3].querySelector('img');

function handleScroll() {
    if (isInViewport(firstImage)) {
        firstImage.style.transform = 'translateX(0)'; // Slide in from the left
      }
    
      if (isInViewport(secondImage)) {
        secondImage.style.transform = 'translateX(0)'; // Slide in from the right
      }
}

window.addEventListener('scroll', handleScroll);

handleScroll();