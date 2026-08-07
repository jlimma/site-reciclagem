
document.addEventListener('DOMContentLoaded', function() {
    var meuCarrossel = document.getElementById('carouselExampleCaptions');
    
    if (meuCarrossel) {
       
        meuCarrossel.classList.remove('slide');
        
       
        var indice = 0;
        var slides = document.querySelectorAll('#carouselExampleCaptions .carousel-item');
        
      
        slides[0].classList.add('active');
        
       
        setInterval(function() {
           
            slides.forEach(slide => slide.classList.remove('active'));
            
           
            indice = (indice + 1) % slides.length;
            
          
            slides[indice].classList.add('active');
            
        }, 4000); 
    }
});