const mobileMenuBtn = document.getElementById("mobile-menu-btn")
let isMobileMenuOpen = false;
const mobileMenu = document.getElementById("mobile-menu");

const mobileNavLinks = document.getElementsByClassName("mobile-nav-link");

mobileMenuBtn.addEventListener('click', handleMobileMenuBtn)

function handleMobileMenuBtn(event) {
    console.log('clicked')

    isMobileMenuOpen ? closeMobileMenu() : openMobileMenu();
}


function closeMobileMenu() {
    isMobileMenuOpen = false;
    mobileMenu.classList.remove("menu-open")
    mobileMenuBtn.classList.remove("active")
    console.log('clicked close')

}

function openMobileMenu() {
    mobileNavLinks[0].focus();
    isMobileMenuOpen = true
    mobileMenu.classList.add("menu-open")
    console.log('clicked open')
    mobileMenuBtn.classList.add("active")
}