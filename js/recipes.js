var slide_index = 1;  

displaySlides(slide_index,'showSlide_new');  
displaySlides(slide_index,'showSlide_new1');  
displaySlides(slide_index,'showSlide_new2');  
displaySlides(slide_index,'showSlide_new3');  
displaySlides(slide_index,'showSlide_new4');  
displaySlides(slide_index,'showSlide_new5');  

function nextSlide(n,class_name) {  
    displaySlides(slide_index += n,class_name);  
}  

function currentSlide(n,class_name) {  
    displaySlides(slide_index = n,class_name);  
}  

function displaySlides(n,class_name) {  
    var i;  

    var slides = document.getElementsByClassName(class_name);  
    
    if (n > slides.length) {
        slide_index = 1 
    }  

    if (n < 1) { 
        slide_index = slides.length 
    }  

    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}  
