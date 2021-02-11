$(function () {


    var navH = $('.navbar').innerHeight();

    $('.servics , .our-works, .contact').css({
        marginTop : navH
    });

    $(window).scroll(function () {

        // Change Navbar When Scroll Top == 200

        if($(window).scrollTop() >= 100) {
            $('.custom-navbar').addClass('notransparent');
        }else {
            $('.custom-navbar').removeClass('notransparent');
        }

        


        // Visible (div) scroll To top When Scroll Top == 400
        if($(window).scrollTop() >= 400) {
            if($('.scroll-to').is(':hidden')) {
                $('.scroll-to').fadeIn(500)
            }
        }else {
            $('.scroll-to').fadeOut(500)
        }


        $('.block').each(function () {
            if($(window).scrollTop() > $(this).offset().top - navH) {
                $(".navbar ul li a").removeClass('active');   
                var myID = $(this).attr('id');
                $(".navbar ul li a[data-scroll="  + myID +  "]").addClass('active');
            }
        });


        if($(window).scrollTop() <= 578) {
            $('.custom-navbar .nav-link[data-scroll="servics"]').removeClass('active');
        }

        console.log($(window).scrollTop())

    });

    // scroll to top (When Click)
    $('.scroll-to-top').click(function() {
        $('html  , body').animate({
            scrollTop : 0
        } , 500);
    })

    $('.scroll-to-bottom').click(function() {
        $('html  , body').animate({
            scrollTop : $(window).height()
        } , 500);
    })


    // navbar Item ( when click - preventDefault )
    $('.navbar-nav .nav-item a.nav-link').on('click', function(e) {
        e.preventDefault();
    });

// Pop Up
    $('.work-item-overlay .close , .work-item-overlay').on('click' , function() {
        $('.work-item-overlay').css('marginTop' , '-100vh');
        $('body').css('overflowY' , 'visible')
    });

    $('.work-item-overlay .container').click(function (e) {
        e.stopPropagation();
    });

    $('.word-item').on('click', function() {
        $('.work-item-overlay').css('marginTop' , '0');
        $('.work-item-overlay').css('opacity' , '1');
        $('.work-item-overlay').find('img').attr('src',  $(this).find('img').attr('src'));
        $('body').css('overflowY' , 'hidden')
    });

    $(document).keydown(function (e) {
        if(e.keyCode == 27) {
            $('.work-item-overlay').css('marginTop' , '-100vh');
        }
    });

    // Counter
    $('.timer').countTo();

    
    // animate Body When Clcik(navbar)
    

    $('.navbar-nav li a').on('click' , function() {
        // animate
        hashed = this.hash ; 

        
        $('html , body').animate({
            scrollTop : $(hashed).offset().top - (navH - 20),
        }, 800)
        // add active Class 
         $('.navbar-nav .nav-item a.nav-link').removeClass('active');
        $(this).addClass('active');

    });



    // wow
    var wow = new WOW({
        mobile : false
    });
    wow.init();

    // validation
    $('#contact-us-form').validate();


    // Hide placehoder
    var placeAttr = '';
        
        $('[placeholder]').on('focus', function() {
            placeAttr = $(this).attr('placeholder');
            $(this).attr('placeholder' , '')
        }).on('blur' , function() {
            $(this).attr('placeholder' , placeAttr)
        });

      
});