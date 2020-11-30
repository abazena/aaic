
$(function (){

    "use strict";

    var wind = $(window);

    var main_height = $(".main-height").outerHeight();

    $(".sub-height").outerHeight(main_height);


    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'linear',         // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -60            // offste (in px) for fixed top navigation
    });


    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });

    // button scroll to top
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            button_top = $(".button-top");

        if(bodyScroll > 700){

            button_top.addClass("button-show");

        }else{

            button_top.removeClass("button-show");
        }
    });


    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    // magnificPopup
    $('.portfolio .link').magnificPopup({
      delegate: 'a',
      type: 'image'
    });


    // owlCarousel
    $('.demo4 .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        dots:false,
        nav:true,
        navText:['<span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>',
        '<span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'],
        smartSpeed:500
    });


    // owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });

     // owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        margin: 30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        '<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // owlCarousel
    $('.demo3 .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        dots:false,
        nav:true,
        navText:['<span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>',
        '<span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'],
        smartSpeed:500
    });

    // stellar
    wind.stellar();


    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });


   // Tabs
    $(".contact").on("click", "li", function(){

        var myID = $(this).attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $(".contact .content .item").hide();

        $("#" + myID + "-content").fadeIn();

    });

    var granimInstance = new Granim({
        element: '#canvas-basic',
        name: 'basic-gradient',
        direction: 'left-right',
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#AA076B', '#61045F'],
                    ['#02AAB0', '#00CDAC'],
                    ['#DA22FF', '#9733EE']
                ]
            }
        }
    });

});



$(window).on("load",function (){

    // Preloader
    $(".loading").fadeOut(500);


    // contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});