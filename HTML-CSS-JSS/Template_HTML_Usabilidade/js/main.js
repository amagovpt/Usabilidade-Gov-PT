var $j = jQuery.noConflict(),
    $w = $j(window);

$j(document).ready(function($) {

    $(document).on("click", ".block-wrapper.contact-wrapper .span6 .button-wrapper button", function(e){
        e.preventDefault();
        e.stopPropagation();   
    })

    if ($(this).scrollTop() > 5) {
        $("header#banner").addClass("fixed");       
    } 
    else {
        $("header#banner").removeClass("fixed");
    }    
    if ($('.block-wrapper.grey').length > 0 && ($(this).scrollTop() +400) > $('.block-wrapper.grey').offset().top) {
        $('.top-banner .scrolldown').addClass('scrollhidden');
    }  
    $(document).on("click", ".privacy-info-message .layout .btnWrapper button",  function(e) {
        $('.privacy-info-message').stop().fadeOut();
    }); 

    

    $(document).on("click", ".top-banner .scrolldown:not(.scrollhidden)",  function(e) {
        $('html, body').animate({ scrollTop: $('.block-wrapper.grey').offset().top - 95 }, 'slow');
    }); 

    $(document).on("click", ".search-box i:not(.icon-remove)", function(){
        window.location = "search";
    });

    var enSelected = window.location.href.toUpperCase().indexOf("EN") > -1; 
    var ptSelected = window.location.href.toUpperCase().indexOf("PT") > -1; 
    
    if(!enSelected && !ptSelected) {
        enSelected = true;
    }
    if(enSelected) {
        $j("#selectLang").val("en");
    } else if(ptSelected) {
        $j("#selectLang").val("pt");
    }
    
    $j('#selectLang').select2({
        minimumResultsForSearch: -1,
        containerCssClass: "select2Lang",
        dropdownCssClass: "select2LangOptions"
    });

    $('#homepage-slider').bxSlider({
        adaptiveHeight: true,
        responsive: true,
        preventDefaultSwipeX: true,
        preventDetaultSwipeY: false,
        oneToOneTouch: false,
        nextText: '<i class="icon-angle-right"></i>',
        prevText: '<i class="icon-angle-left"></i>'
    });

    $(document).on("click", ".search-box i.icon-remove", function(){
        $(this).parents('.search-box').removeClass('visible');
    });
    
    $(document).on("click", ".toTop",  function(e) {
        $('html, body').animate({ scrollTop: 0 }, 700);
    });
    
    $(document).on("click", ".search-icon i.icone-search", function(){
        $('.search-box').addClass('visible');
    });
    $(document).on("click", ".horizontal-menu>div>ul>li a", function(e){
        if($('.horizontal-menu .icone-burguer:visible').length > 0 && $(this).next('ul.sub-menu').length > 0){
            e.preventDefault();
            e.stopPropagation();
            $(this).next('ul.sub-menu').slideToggle();
        }       
    });

    $(document).on("click", ".side-menu > ul > li", function(e){
        if($(this).find('.sub-menu').length>0){
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
            $(this).find('.sub-menu').stop().slideToggle();
        }
    });

    $(document).on("click", ".horizontal-menu i.icone-burguer", function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).parents('#banner').toggleClass('open');
        $(this).next('ul').stop().slideToggle();
    });
    $j("#formServicesWrapper #btnPrevious").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var stepNumber = document.querySelector("#formServicesWrapper").getAttribute("data-step");
        var previouStep = Number(stepNumber) - 1;
        if(previouStep == 1) {
            document.querySelector("#formServicesWrapper").setAttribute("data-step", "1"); 
            $j("#formServicesWrapper .navBulletsForm #step1").removeClass("active");
            $j("#formServicesWrapper .navBulletsForm #step2").removeClass("current");
            $j("#formServicesWrapper .navBulletsForm #line1").removeClass("active");
            $j("#formServicesWrapper .navBulletsForm #step1").addClass("current");
        } else if(previouStep == 2) {
            document.querySelector("#formServicesWrapper").setAttribute("data-step", "2");
            $j("#formServicesWrapper .navBulletsForm #step2").removeClass("active");
            $j("#formServicesWrapper .navBulletsForm #step3").removeClass("current");
            $j("#formServicesWrapper .navBulletsForm #line2").removeClass("active");
            $j("#formServicesWrapper .navBulletsForm #step2").addClass("current");
        }
    });
    
    $j("#formServicesWrapper #btnNext").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var stepNumber = document.querySelector("#formServicesWrapper").getAttribute("data-step");
        var nextStep = Number(stepNumber) + 1;
        if(nextStep == 2) {
            document.querySelector("#formServicesWrapper").setAttribute("data-step", "2");
            $j("#formServicesWrapper .navBulletsForm #step1").removeClass("current");
            $j("#formServicesWrapper .navBulletsForm #step1").addClass("active");
            $j("#formServicesWrapper .navBulletsForm #line1").addClass("active");
            $j("#formServicesWrapper .navBulletsForm #step2").addClass("current");
        } else if(nextStep == 3) {
            document.querySelector("#formServicesWrapper").setAttribute("data-step", "3");
            $j("#formServicesWrapper .navBulletsForm #step2").removeClass("current");
            $j("#formServicesWrapper .navBulletsForm #step2").addClass("active");
            $j("#formServicesWrapper .navBulletsForm #line2").addClass("active");
            $j("#formServicesWrapper .navBulletsForm #step3").addClass("current");
        }
    });

    
    /* LightBox Iframe */
    $j(document).on("click", "#detailsNoticianWrapper .btnVideo", function(e){
        if($j("#videoOpenScreen").length>0){
            e.preventDefault();
            e.stopPropagation();
            $j("#videoOpenScreen").addClass("activeShow");
        }
    });
    $j(document).on('click', '#videoOpenScreen .closeBtn', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $j("#videoOpenScreen").removeClass("activeShow");
        $j('iframe').attr('src', $j('iframe').attr('src'));
    });
    $j(document).on('click', function(e) {
        if ($j(e.target).has('.wrapperIframe').length) {
            $j("#videoOpenScreen").removeClass("activeShow");
            $j('iframe').attr('src', $j('iframe').attr('src'));
        }
    });

    $j(document).on('change', '.animateInput input', function() {
        var input = $j(this);
        if (input.val().length) {
            input.addClass('populated');
        } else {
            input.removeClass('populated');
        }
    });
    $j(document).on('change', '.animateInput textarea', function() {
        var textarea = $j(this);
        if (textarea.val().length) {
            textarea.addClass('populated');
        } else {
            textarea.removeClass('populated');
        }
    });
    
    $j('.select-wrapper select').select2({
        minimumResultsForSearch: Infinity,
        placeholder: $j(this).data("placeholder")
    });

    scrollMenuFixed();
});

function scrollBannerTop() {
    if ($j("body.homepage").length == 0) {
        var b = 350;
        var e = 1.5;
        var a = -100;
        var d = $j(window).scrollTop() / 750 + 1;
        var c = $j(window).scrollTop() / 3.6;
        if ($j(window).scrollTop() > b) {
            d = e;
            c = a
        }
        $j(".top-banner .initialTopBanner .imgTopBanner").css({
            transform: "translate3d(0px, -" + c + "px, 0px) scale(" + d + "," + d + ")"
        })
    }
}

function scrollMenuFixed() {
    if ($j(this).scrollTop() > 5){
        $j('header#banner').addClass('fixed');
        $j('.toTop').addClass('visible');
    }else{
        $j('header#banner').removeClass('fixed');
        $j('.toTop').removeClass('visible');
    }
}


$w.resize(function() {

});

$w.scroll(function() {
    scrollBannerTop();
    scrollMenuFixed();
    if (jQuery('.block-wrapper.grey').length > 0 && (jQuery(this).scrollTop() +400) > jQuery('.block-wrapper.grey').offset().top) {
        jQuery('.top-banner .scrolldown').addClass('scrollhidden');
    } 
    else{
        jQuery('.top-banner .scrolldown').removeClass('scrollhidden');
    }
});