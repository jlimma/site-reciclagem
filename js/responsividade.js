document.addEventListener('DOMContentLoaded', function() {
    function ajustarResponsividade() {
        var largura = window.innerWidth;

        if (largura <= 768) {
            // titulos
            document.querySelectorAll('h1').forEach(function(elemento) {
                elemento.style.fontSize = '1.8rem';
            });
            document.querySelectorAll('h2').forEach(function(elemento) {
                elemento.style.fontSize = '1.5rem';
            });

            // paragrafos
            document.querySelectorAll('p').forEach(function(elemento) {
                elemento.style.fontSize = '0.95rem';
                elemento.style.lineHeight = '1.5';
            });

            // tabela
            var tabela = document.querySelector('#materiais .table');
            if (tabela) {
                tabela.style.fontSize = '0.85rem';
            }

            // carrossel
            document.querySelectorAll('.carousel-caption h5').forEach(function(elemento) {
                elemento.style.fontSize = '16px';
            });

            // imagens da secao EPIs
            document.querySelectorAll('#doacoes .imagem-container').forEach(function(elemento){
              if (largura <= 576) {
                  elemento.style.maxWidth = '40%';
              } else {
                  elemento.style.maxWidth = '50%';
              }
            });

            // botao voltar ao topo
            var backTop = document.querySelector('.back-to-top');
            if (backTop) {
                backTop.style.width = '40px';
                backTop.style.height = '40px';
                backTop.style.fontSize = '20px';
                backTop.style.bottom = '15px';
                backTop.style.right = '15px';
            }

            // formulario de contato
            document.querySelectorAll('#contato .card').forEach(function(elemento) {
                elemento.style.margin = '0 10px';
            });
            document.querySelectorAll('#contato input, #contato textarea, #contato select').forEach(function(elemento) {
                elemento.style.fontSize = '16px';
            });

            // cards de dicas
            document.querySelectorAll('#dica .card').forEach(function(elemento) {
                elemento.style.marginBottom = '20px';
            });

            // menu mobile
            document.querySelectorAll('.navbar-nav .nav-link').forEach(function(elemento) {
                elemento.style.fontSize = '0.9rem';
                elemento.style.padding = '10px 15px';
            });

        } else if (largura > 768 && largura <= 1024) {
            // tablet
            document.querySelectorAll('h1').forEach(function(elemento) {
                elemento.style.fontSize = '2.2rem';
            });
            document.querySelectorAll('h2').forEach(function(elemento) {
                elemento.style.fontSize = '1.8rem';
            });
            document.querySelectorAll('p').forEach(function(elemento) {
                elemento.style.fontSize = '1rem';
            });

            
            document.querySelectorAll('#contato .card').forEach(function(elemento) {
                elemento.style.margin = '0';
            });
            document.querySelectorAll('#dica .card').forEach(function(elemento) {
                elemento.style.marginBottom = '0';
            });

        } else {
            // desktop
            document.querySelectorAll('h1').forEach(function(elemento) {
                elemento.style.fontSize = '2.5rem';
            });
            document.querySelectorAll('h2').forEach(function(elemento) {
                elemento.style.fontSize = '2rem';
            });
            document.querySelectorAll('p').forEach(function(elemento) {
                elemento.style.fontSize = '1.1rem';
            });

           
            document.querySelectorAll('#contato .card').forEach(function(elemento) {
                elemento.style.margin = '0';
            });
            document.querySelectorAll('#dica .card').forEach(function(elemento) {
                elemento.style.marginBottom = '0';
            });
        }

       
        var tabelaContainer = document.querySelector('#materiais .col-lg-6');
        if (tabelaContainer) {
            tabelaContainer.style.margin = '0 auto';
            tabelaContainer.style.float = 'none';
        }

        
        var video = document.querySelector('.ratio-16x9');
        if (video) {
            video.style.maxWidth = largura <= 768 ? '100%' : '700px';
        }

        
        document.querySelectorAll('.imagem-clicavel').forEach(function(elemento) {
            elemento.style.cursor = 'pointer';
        });
    }

   
    ajustarResponsividade();

    
    window.addEventListener('resize', function() {
        ajustarResponsividade();
    });

    
    function menuMobile() {
        var menuToggle = document.querySelector('.navbar-toggler');
        var menuItems = document.querySelector('#navbarSupportedContent');

        if (menuToggle && menuItems) {
            menuToggle.addEventListener('click', function() {
                if (menuItems.classList.contains('show')) {
                    document.body.style.overflow = 'auto';
                } else {
                    if (window.innerWidth <= 768) {
                        document.body.style.overflow = 'hidden';
                    }
                }
            });

            
            var links = menuItems.querySelectorAll('.nav-link');
            links.forEach(function(link) {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        var bsCollapse = new bootstrap.Collapse(menuItems, {
                            toggle: false
                        });
                        bsCollapse.hide();
                        document.body.style.overflow = 'auto';
                    }
                });
            });
        }
    }

    menuMobile();

    console.log('Tamanho da tela: ' + window.innerWidth + 'px');
});