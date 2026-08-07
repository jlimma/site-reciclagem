

document.addEventListener('DOMContentLoaded', function(){
    const imagens = document.querySelectorAll('.imagem-clicavel');

   

    imagens.forEach(function(imagem){
        imagem.addEventListener('click', function(){
            const src = this.getAttribute('src');
            const alt = this.getAttribute('alt');


            document.getElementById('imagemAmpliada').setAttribute('src', src);
            document.getElementById('imagemAmpliada').setAttribute('alt', alt);

            document.getElementById('modalImagemLabel').textContent = alt;

            const modal = new bootstrap.Modal(document.getElementById('modalImagem'));
            modal.show();
        });
    });

});