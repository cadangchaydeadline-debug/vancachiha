const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
}

dots.forEach((dot, index) => {
    dot.onclick = function(){
        showSlide(index);
    };
});

setInterval(function(){
    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
}, 5000);
