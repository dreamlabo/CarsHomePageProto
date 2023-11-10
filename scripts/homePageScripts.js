// Resize observer 
const heroSection = document.getElementById("hero-section");
const backgroundImage = document.getElementById("bkgd-image")
const bckdImageOverlay = document.getElementById("bkgd-image-overlay")
backgroundImage.style.height = `${heroSection.getBoundingClientRect().height}px`
bckdImageOverlay.style.height = `${heroSection.getBoundingClientRect().height}px`

const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        console.log(heroSection.getBoundingClientRect().height);
        if(window.innerWidth < 1150){
            backgroundImage.style.height = `${heroSection.getBoundingClientRect().height}px`
            bckdImageOverlay.style.height = `${heroSection.getBoundingClientRect().height}px`
        }
    }
});

resizeObserver.observe(heroSection)