$(document).ready(function () {
    AOS.init();
    row('.sub a.col')
    row('.sub2 a.col')
    box('.sub3 a.col')
    row('.sub3b a.col')

    row('.sub4 a.col')
    row('.sub5 a.col')
    row('.sub6 a.col')
    row('.sub7 a.col')
    row('.sub8 a.col')
    row('.sub9 a.col')
    
    end('.finalApp',7)
    end('.finalWeb',7)
    end('.finalVideogame',6)

    $('.platform a.col').on('click', function (e) {
        if ($(this).hasClass('chosen')) {} else {
            $('.platform a.col').removeClass('chosen');
            $(this).addClass('chosen');
            $("#error").css("display", "none");
            $(".isAn").css("display", "none");
            $(".end").css("display", "none");
            $("." + $(this).text()).css("display", "flex");
        }

    })


    function end(type, questions) {
        $('a' + type).on('click', function (e) {
            if ($('.chosen').length > questions) {

                $(".end").css("display", "inherit");
                var stringPrice = $(".chosen span").text();
                var tempString = "";
                var price = 0;
                for (var i = 0; i < stringPrice.length; i++) {
                    if (stringPrice[i] == "+") {
                        price = price + parseInt(tempString)
                        tempString = ""
                    } else {
                        tempString = tempString + stringPrice[i];
                    }
                }

                var answersString = $('.chosen p').text()
                document.getElementById("price").innerHTML = price/20 + " USD"
                $("#answers").val(answersString)
                $("#price2").val(price/20)

            } else {
                console.log($('.chosen').length)
                alert("There are some fields missing")
            }

        });
    }


    function row(options) {
        $(options).on('click', function (e) {
            if ($(this).hasClass('chosen')) {} else {
                $(options).removeClass('chosen');
                $(this).addClass('chosen');
            }
        })
    }

    function box(options) {
        $(options).on('click', function (e) {
            $(this).toggleClass('chosen')
        })
    }




    $('.projects').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        speed: 1000,
        vertical: true,
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    })
});

if (window.innerWidth > 700) {

    function throttle(fn, delay) {
        let last;
        let timer;

        return () => {
            const now = +new Date;

            if (last && now < last + delay) {
                clearTimeout(timer);

                timer = setTimeout(() => {
                    last = now;
                    fn();
                }, delay);
            } else {
                last = now;
                fn();
            }

        };
    }

    function onScroll() {
        if (window.pageYOffset > 150) {
            $$header.classList.add('is-active');
        } else {
            $$header.classList.remove('is-active');
            console.log(pageYOffset)
        }
    }

    const $$header = document.querySelector('header');
    window.addEventListener('scroll', throttle(onScroll, 25));



    let mainNavLinks = document.querySelectorAll("header div a");
    let mainSections = document.querySelectorAll("container");

    let lastId;
    let cur = [];


    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop - 100 <= fromTop &&
                section.offsetTop + section.offsetHeight - 100 > fromTop
            ) {
                link.classList.add("current");
            } else {
                link.classList.remove("current");
            }
        });
    });
} else {

    $('.burger').on('click', function (e) {
        $('.menu').fadeToggle(200);
    })

    $('.menu').on('click', function (e) {
        $('.menu').fadeToggle(200);
    })
}