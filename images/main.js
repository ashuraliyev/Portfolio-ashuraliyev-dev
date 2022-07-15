$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.sitenav').addClass("sticky");
        }else{
            $('.sitenav').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["Developer", "Gamer", "Freelancer"],
        typeSpeed: 100,
        backSpeed:60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Gamer", "Freelancer"],
        typeSpeed: 100,
        backSpeed:60,
        loop: true
    });

    // toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});