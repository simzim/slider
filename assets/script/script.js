let slideIndex = 0; 
let sliderInterval; 

const slides = document.querySelectorAll('.card');
const totalSlides = slides.length;

const prev = document.getElementById('prev');  
const next = document.getElementById('next');

const dots = document.querySelectorAll('.dot');

showSlides(slideIndex);  
startSlider();  

function showSlides(index) {   
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].style.opacity = '0.3';
    });
    slides[index].classList.add('active');
    dots[index].style.opacity = '1';
}  

function autoSlide() {
    slideIndex++;  
    if(slideIndex >= totalSlides){
        slideIndex = 0;
    }
    showSlides(slideIndex);  
}  

function startSlider() {  
    sliderInterval = setInterval(autoSlide, 3000);
}  

function stopSlider() {  
    clearInterval(sliderInterval);  
}  

prev.addEventListener('click', () => {  
    stopSlider(); 
    
    slideIndex--;
    if(slideIndex < 0){
        slideIndex = totalSlides - 1;
    }

    showSlides(slideIndex);  
    startSlider(); 
});  

next.addEventListener('click', () => {  
    stopSlider(); 
    
    slideIndex++;
    if(slideIndex >= totalSlides){
        slideIndex = 0;
    }

    showSlides(slideIndex);  
    startSlider();
});  

dots.forEach((dot, i) => {
    dot.addEventListener('click', () =>{
        stopSlider(); 
        slideIndex = i;
        showSlides(slideIndex);
        startSlider();
    })
});

// pridėtas kodas dėl funkcionalo įgyvendinimos 
// skirto sustabdyti slider'io veikimą
// su kursorium
const slider = document.getElementById('slider');  
slider.addEventListener('mouseover', stopSlider);  
slider.addEventListener('mouseleave', startSlider);  
