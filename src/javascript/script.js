$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();
        console.log(scrollPosition);
        //const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.5)');
        }

        sections.each(function(i) {
            const section = $(this);
            const headerHeight = $('header').outerHeight();
            const sectionTop = (section.offset().top - headerHeight) + 200;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

});

// Quando clicar em um item da navegação
$('nav a, #cta_buttons a').on('click', function(event) {

    // Pegar o valor do atributo href (ID da seção para onde vai rolar)
    const targetSection = $(this).attr('href');

    // Verificar se o elemento alvo existe
    if ($(targetSection).length) {
        // Rolar suavemente até a seção alvo
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top - $('header').outerHeight() + 24// Ajusta para a altura do cabeçalho
        }, 800); // O número 800 é o tempo da animação em milissegundos (0,8 segundos)
    }
});
