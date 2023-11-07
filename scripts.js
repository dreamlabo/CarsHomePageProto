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




// Resize observer 
const heroSection = document.getElementById("hero-section");
const backgroundImage = document.getElementById("bkgd-image")
const bckdImageOverlay = document.getElementById("bkgd-image-overlay")

const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        console.log(heroSection.getBoundingClientRect().height);
        if(window.innerWidth < 1150){
            backgroundImage.style.height = `${heroSection.getBoundingClientRect().height}px`
            bckdImageOverlay.style.height = `${heroSection.getBoundingClientRect().height}px`
            
            console.log("Height: ", window.innerWidth)
        }


        





    }
});







resizeObserver.observe(heroSection)