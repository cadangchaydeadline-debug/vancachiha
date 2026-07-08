const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(i){

    slides.forEach(s=>s.classList.remove("active"));
    dots.forEach(d=>d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");

    current=i;

}

dots.forEach((dot,index)=>{

    dot.onclick=function(){

        showSlide(index);

    }

});

setInterval(function(){

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

},5000);
