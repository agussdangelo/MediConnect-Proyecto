$(function(){
    var cursosDropdown = $(".cursos-dropdown");
    var cursosTitle = $(".cursos-dropdown-toggle");

    var modalidadesDropdown = $(".modalidades-dropdown");
    var modalidadesTitle = $(".modalidades-dropdown-toggle");

    cursosDropdown.hide();
    modalidadesDropdown.hide();

    // CURSOS Dropdown
    cursosTitle.mouseenter(function(){
        cursosDropdown.show();
        modalidadesDropdown.hide();
    });

    $(".navbar").mouseleave(function(){
        cursosDropdown.hide();
    });

    cursosDropdown.mouseenter(function(){
        cursosDropdown.show();
        modalidadesDropdown.hide();
    }).mouseleave(function(){
        cursosDropdown.hide();
    });

    // MODALIDADES Dropdown
    modalidadesTitle.mouseenter(function(){
        modalidadesDropdown.show();
        cursosDropdown.hide();
    });

    $(".navbar").mouseleave(function(){
        modalidadesDropdown.hide();
    });

    modalidadesDropdown.mouseenter(function(){
        modalidadesDropdown.show();
        cursosDropdown.hide();
    }).mouseleave(function(){
        modalidadesDropdown.hide();
    });
});
