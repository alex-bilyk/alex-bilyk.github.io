$(document).ready(function () {

    // Settings for sliders

    $(window).on('resize load', function () {
        if ($(window).width() < 768 && !$('.slider_main').hasClass('slick-initialized')) {
            let mainSliderWrapper = $('.slider_main-wrapper');

            $.each(mainSliderWrapper, function () {
                let mainSlider = $(this).find('.slider_main');
                let prevArrowMainSlider = $(this).find('.slider_main__arrow-prev');
                let nextArrowMainSlider = $(this).find('.slider_main__arrow-next');

                if (!$(mainSlider).hasClass('slick-initialized')) {
                    $(mainSlider).slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: true,
                        prevArrow: $(prevArrowMainSlider),
                        nextArrow: $(nextArrowMainSlider),
                        adaptiveHeight: true
                    });
                }
            });
        } else if ($(window).width() >= 768 && $('.slider_main').hasClass('slick-initialized')) {
            $('.slider_main').slick('unslick');
        }
    });

    $('.price__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        prevArrow: $('.price__slider__arrow-prev'),
        nextArrow: $('.price__slider__arrow-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        lazyLoad: "ondemand",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.reviews__slider__arrow-prev'),
        nextArrow: $('.reviews__slider__arrow-next'),
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }
        ]
    });

    // Accordion in the questions section

    $('.questions__item__question').on('click', function () {
        let check = $(this).closest('.questions__item').hasClass('is-active');

        $('.questions__item').removeClass('is-active');
        if (!check) {
            $(this).closest('.questions__item').addClass('is-active');
        }
        $('.questions__item').find('.questions__item__answer').slideUp(300);
        $('.questions__item.is-active').find('.questions__item__answer').slideDown(300);
    });

    // Countdown

    initCountdown();

    function initCountdown() {
        let today, hs, dd, mm, yyyy = 0;

        today = new Date();
        hs = String(today.getHours()).padStart(2, '0');
        dd = String(today.getDate()).padStart(2, '0');
        mm = String(today.getMonth() + 1).padStart(2, '0');
        yyyy = today.getFullYear();

        if (dd >= 4) {
            if (dd == 4) {
                if (hs >= 12) {
                    mm++;
                }
            } else {
                mm++;
            }
        }

        if (mm > 11) {
            mm = 0;
            yyyy++;
        }

        let neededDate = yyyy + '/' + mm + '/' + 4 + '/' + ' ' + 12 + ':' + '00' + ':' + '00';
        let currentNeededDate = moment(neededDate, 'YYYY-MM-DD HH:mm:ss').toDate();

        $('#countdown').countdown(currentNeededDate, function (event) {
            $(this).html(event.strftime(''
                + '<span class="countdown__item"><span class="countdown__number">%D</span><span class="countdown__title">Дней</span></span>'
                + '<span class="countdown__item"><span class="countdown__number">%H</span><span class="countdown__title">Часов</span></span>'
                + '<span class="countdown__item"><span class="countdown__number">%M</span><span class="countdown__title">Минут</span></span>'
                + '<span class="countdown__item"><span class="countdown__number">%S</span><span class="countdown__title">Секунд</span></span>'
            ))
        }).on('finish.countdown', function (event) {
                initCountdown();
            });
    }
    
    // Link telegram
    
    $('.linkTelegram-js').on('click', function (e) {
        e.preventDefault();
        document.location.href='https://t.me/julia_maxx';
    });

    // Add class Body for overflow

    function addToBodyOverflow() {
        $('body').addClass('overflow');
    }

    // Remove class Body for overflow

    function removeFromBodyOverflow() {
        $('body').removeClass('overflow');
    }

    // Settings for modals

    // Hidden modal
    let btnCloseModal = $('.modal-close-js');

    function closeModal() {
        $('.overlay').removeClass('overlay_visible');
        $('.modal-wrapper').removeClass('modal-wrapper_visible');
        $('.modal').removeClass('modal_visible');
        removeFromBodyOverflow();
    }

    if (typeof btnCloseModal !== 'undefined') {
        btnCloseModal.on("touchend click", function () {
            closeModal();
        });
    }

    $(document).mouseup(function (event) {
        event.preventDefault();
        if ($(".modal").is(":visible")) {
            let modal = $(".modal");
            if (!modal.is(event.target)
                && modal.has(event.target).length === 0) {
                closeModal();
            }
        }
    });

    // Open modals

    function openPartsModal() {
        addToBodyOverflow();
        $('.overlay').addClass('overlay_visible');
        $('.modal-wrapper').addClass('modal-wrapper_visible');
    }

    function getGift() {
        openPartsModal();
        $('#getGiftModal').addClass('modal_visible');
    }

    // Open of thanks and informational popup-s, for forms and elements on the site

    $('.getGiftModal-js').on("click", function (e) {
        e.preventDefault();
        getGift();
    });

});

