let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let dropdownContent = document.getElementById('dropdownContent');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = (event) => {
    event.stopPropagation();
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    dropdownContent.style.display = 'none'; // Hide dropdown on scroll
};

// Dropdown toggle
document.addEventListener('DOMContentLoaded', function () {
    var dropdownContent = document.getElementById('dropdownContent');
    var icon = document.getElementById('dropdownIcon');

    function toggleDropdown() {
        dropdownContent.style.display = (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') ? 'block' : 'none';
    }

    // Event listener for dropdown icon
    if (icon) {
        icon.addEventListener('click', function (event) {
            event.stopPropagation();
            toggleDropdown();
        });
    }

    // Close dropdown if clicked outside the box
    document.addEventListener('click', function (event) {
        var box = document.getElementById('box');
        if (!box.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });

    // Function to handle adding to cart (replace this with your actual logic)
    function addToCart() {
        alert('Product added to cart!');
    }
    function goToSite() {
        alert('Go to the Website?');
    }
    // Event listener for "Add to Cart" link inside the dropdown
    var addToCartLink = document.getElementById('addToCartLink');
    if (addToCartLink) {
        addToCartLink.addEventListener('click', addToCart);
    }
    var goToSiteLink = document.getElementById('goToSiteLink');
    if (goToSiteLink) {
        goToSiteLink.addEventListener('click', goToSite);
    }
});
var swiperHome = new Swiper(".home", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiperMovies = new Swiper(".movie-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },
    },
});