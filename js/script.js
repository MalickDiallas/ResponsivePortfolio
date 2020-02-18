/*===================================
            preloader
=====================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/*===================================
            Team
=====================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>']
    });
});
/*===================================
            Progress Bar
=====================================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
    /**/
});
/*============================================
                Responsive Tabs    
==============================================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/*============================================
                portfolio   
==============================================*/
$(window).on('load', function () {
    //Initialize Isotope
    $("#isotope-container").isotope({

    });
    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        //Get filtervalue
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });
        //active button
        $("#isotope-filters").find('.active').removeClass('.active');
        $(this).addClass('active');
    });
});
/*============================================
                Magnific Popup 
==============================================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*===================================
           testimonial
=====================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>']
    });
});
/*===================================
           Stats Counter 
=====================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*===================================
           Clients
=====================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>']
    });
});
/*===================================
           Google Maps
=====================================*/
//map variables
$(window).on('load', function () {
    var addressString = 'Tally Baye Laye, Guédiawaye, Dakar';
    var myLatlng = {
        lat: 14.759640,
        lng: -17.458230
    };
    //1 Render map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });
    //2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click to see addresse"
    });
    //3.Info window
    var infoWindow = new google.maps.InfoWindow({
        content: addressString
    });
    //show info window when users click marker
    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    })

});

/*===================================
           Navigation
=====================================*/
$(function () {
    //Show hide nav on page load
    showHideNav();
    $(window).scroll(function () {
        //Show hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show white nav
            $("nav").addClass("white-nav-top");
            // Show red logo
            $(".navbar-brand img").attr("src", "img/logo/milk.png");
            //show back to button
            $("#back-to-top").fadeIn();
        } else {
            //Hide white nav
            $("nav").removeClass("white-nav-top");
            // Show Blue logo
            $(".navbar-brand img").attr("src", "img/logo/milkRed.png");
            //hide back to button
            $("#back-to-top").fadeOut();
        }
    }
});
//smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get section id like #about #services #work #team etc
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});