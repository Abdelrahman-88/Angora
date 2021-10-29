
let counter = 0;
let secOffcet = $("#home").offset().top;
let secOffcet3 = $("#about").offset().top;
let link = Array.from(document.querySelectorAll(".nav-link[href^='#']"))
let currentOffcet



// navpar
$(window).scroll(function () {
    currentOffcet = $(window).scrollTop();

    if (currentOffcet > secOffcet + 50 && window.innerWidth > 992) {
        $(".navbar").css({ "background-color": "white" }).removeClass("py-3").addClass("py-2");
        $(".navbar-nav .nav-link , .nav-icon").css({ "color": "black" });
        $(".navbar-brand img").attr("src", "images/logo-red.png");
    }
    else if(currentOffcet <= secOffcet + 50 && window.innerWidth > 992) {
        $(".navbar").css({ "background-color": "transparent", "color": "white" }).removeClass("py-2").addClass("py-3");
        $(".navbar-nav .nav-link , .nav-icon").css({ "color": "white" });
        $(".navbar-brand img").attr("src", "images/logo-white.png");
    }

    for (let i = 0; i < link.length; i++) {
        if (currentOffcet >= $($(link[i]).attr("href")).offset().top && currentOffcet <= $($(link[i < 5 ? i + 1 : i = 5]).attr("href")).offset().top) {
            $(".nav-link").eq(i).addClass("active");
        }
        else if (currentOffcet > $($(link[5]).attr("href")).offset().top) {
            $(".nav-link").eq(i - 1).removeClass("active");
            $(".nav-link").eq(i).addClass("active");
        }
        else {
            $(".nav-link").eq(i).removeClass("active");
        }
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth <= 992) {
        $(".navbar").css({ "background-color": "white" }).removeClass("py-3").addClass("py-2");
        $(".navbar-nav .nav-link , .nav-icon").css({ "color": "black" });
        $(".navbar-brand img").attr("src", "images/logo-red.png");
    }
    else if(window.innerWidth > 992 && currentOffcet <= secOffcet + 50){
        $(".navbar").css({ "background-color": "transparent", "color": "white" }).removeClass("py-2").addClass("py-3");
        $(".navbar-nav .nav-link , .nav-icon").css({ "color": "white" });
        $(".navbar-brand img").attr("src", "images/logo-white.png");
    }
});


$(".nav-link[href^='#']").click(function (e) {
    let currentSecOffcet = $($(e.target).attr("href")).offset().top;
    $("html,body").animate({ scrollTop: currentSecOffcet + 1 }, 1500)
});

$(".footer-up").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1500)
});

$(".mouse").click(function () {
    $("html,body").animate({ scrollTop: secOffcet3 + 50 }, 1500)
});

// sidepar & loading
let sideBoxWidth = $(".side-bar-box").outerWidth(true);
$(document).ready(function () {
    var myCarousel = document.querySelector('#carouselExampleDark')
    var carousel = new bootstrap.Carousel(myCarousel, {
        pause: false
    })
    $(".side-bar").animate({ left: `-${sideBoxWidth + 3}` })
    setWidth();
    $(".loading .spinner").fadeOut(1000, function () {
        $(".loading").fadeOut(1000, function () {
            $("body").css("overflow-y", "auto");
            $(".loading").remove();
        });
    });
});

$(".side-bar-icon").click(function () {
    if ($(".side-bar").css("left") == "0px") {
        $(".side-bar").animate({ left: `-${sideBoxWidth + 3}` }, 500);
        $(".cogs").html(`<i class="fas fa-paint-brush fs-5"></i>`);
    }
    else {
        $(".side-bar").animate({ left: `0px` }, 500);
        $(".cogs").html(`<i class="fas fa-times fs-5"></i>`);
    }
})

$(".color").click(function (e) {
    let color = $(e.target).css("backgroundColor");
    $(".carousel-caption").css("color", color);
    $("h2").css("--myVar", color);
    $(".default").click(function () {
        $(".carousel-caption").css("color", "white");
        $("h2").css("--myVar", "#282828");
    })
})


// about

let progressBar = Array.from(document.querySelectorAll(".progress-bar"));
let progressNumber = Array.from(document.querySelectorAll(".about-skills-p"));
function setWidth() {
    for (let i = 0; i < progressBar.length; i++) {
        counter++;
        if (counter < $(progressBar[i]).attr("aria-valuenow")) {
            $(progressBar[i]).css("width", counter);
            $(progressNumber[i]).html(`${counter}%`);
            setTimeout(setWidth, 700);
        }
        else {
            $(progressBar[i]).css("width", `${$(progressBar[i]).attr("aria-valuenow")}%`);
            $(progressNumber[i]).html(`${$(progressBar[i]).attr("aria-valuenow")}%`);
        }
    }
}

































$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    responsiveClass: true,
    center: true,
    freeDrag: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5
        }
    }
})

let index = 0;
$(".comment").eq(index).fadeIn(0);
let owl = $('.owl-carousel');
owl.on('changed.owl.carousel', function (e) {
    $(".comment").eq(index).fadeOut(0);
    index = (e.property.value - Math.ceil(e.item.count / 2)) % e.item.count || 0;
    $(".comment").eq(index).fadeIn(500);
})