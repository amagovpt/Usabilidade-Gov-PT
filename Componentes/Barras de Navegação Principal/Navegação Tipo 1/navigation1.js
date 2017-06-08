$(document).on("click", ".horizontal-menu>ul>li a", function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).next('ul.sub-menu').slideToggle();
});

$(document).on("click", ".horizontal-menu i.icone-burguer", function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).next('ul').slideToggle();
});