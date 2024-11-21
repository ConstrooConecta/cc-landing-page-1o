let slideIndex = 0;
mostrarSlide(slideIndex);

function mudarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.display = "none";  
    });

    slides[slideIndex].style.display = "block";  
<<<<<<< HEAD
}
=======
}
>>>>>>> 2b5188b09823e9a97a5bff01ae5055f524467bcb
