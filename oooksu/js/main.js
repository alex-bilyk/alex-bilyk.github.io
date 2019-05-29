$(document).ready(function() {

    // Settings for sliders

    $(window).on('resize load', function () {
        if ($(window).width() < 1280 && !$('.services__items').hasClass('slick-initialized')) {
            $('.services__items').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow: $('.services__items__arrow-prev'),
                nextArrow: $('.services__items__arrow-next'),
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
        } else if($(window).width() >= 1280 && $('.services__items').hasClass('slick-initialized')){
            $('.services__items').slick('unslick');
        }
        initAdvantagesItems();
    });

    initAdvantagesItems();

    function initAdvantagesItems() {
        if ($(window).width() < 1024 && !$('.advantages__items').hasClass('slick-initialized')) {
            $('.advantages__items').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow: $('.advantages__items__arrow-prev'),
                nextArrow: $('.advantages__items__arrow-next'),
                responsive: [
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
        } else if($(window).width() >= 1024 && $('.advantages__items').hasClass('slick-initialized')){
            $('.advantages__items').slick('unslick');
        }
    }

    // Library initialization for select styling

    $('.select-wrapper select').styler();

    // Ban on entering letters

    const inputsPhone = document.querySelectorAll('.inputPhone-js');

    for (let a = 0; a < inputsPhone.length; a++) {
        inputsPhone[a].onkeydown = function(e){
            if((e.which >= 48 && e.which <= 57)
                || (e.which >= 96 && e.which <= 105)
                || e.which == 8
                || e.which == 107
                || (e.which >= 37 && e.which <= 40)
                || e.which == 46)
            {
                return true;
            } else {
                return false;
            }
        }
    }

    const inputsNumber = document.querySelectorAll('.inputNumber-js');

    for (let a = 0; a < inputsNumber.length; a++) {
        inputsNumber[a].onkeydown = function(e){
            if((e.which >= 48 && e.which <= 57)
                || (e.which >= 96 && e.which <= 105)
                || e.which == 8
                || (e.which >= 37 && e.which <= 40)
                || e.which == 46)
            {
                return true;
            } else {
                return false;
            }
        }
    }

    // Mobile menu

    $('.header__burger_out').on('click', function () {
        $('.header__mob-menu').slideDown(300);
        $('body').addClass('overflow');
    });

    $('.header__burger_inner, .header__mob-menu__close, .header__mob-menu nav a').on('click', function () {
        $('.header__mob-menu').slideUp(300);
        $('body').removeClass('overflow');
    });

    // Smooth scroll

    $('a[href*="#"]').click(function() {
        let target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    // Add class Body for overflow

    function addToBodyOverflow () {
        $('body').addClass('overflow');
    }

    // Remove class Body for overflow

    function removeFromBodyOverflow () {
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

    function getCallRequestModal() {
        openPartsModal();
        $('#getCallRequestModal').addClass('modal_visible');
    }

    function getOrderModal() {
        openPartsModal();
        $('#getOrderModal').addClass('modal_visible');
    }

    function getThanksRequestModal() {
        openPartsModal();
        $('#getThanksRequestModal').addClass('modal_visible');
    }

    function getThanksPaymentModal() {
        openPartsModal();
        $('#getThanksPaymentModal').addClass('modal_visible');
    }

    function getPDPPModal() {
        openPartsModal();
        $('#getPDPPModal').addClass('modal_visible');
    }

    // Open of thanks and informational popup-s, for forms and elements on the site

    $('.getCallRequestModal-js').on("click", function (e) {
        e.preventDefault();
        getCallRequestModal();
    });

    $('.getOrderModal-js').on("click", function (e) {
        e.preventDefault();
        getOrderModal();
    });

    $('.getPDPPModal-js').on("click", function (e) {
        e.preventDefault();
        getPDPPModal();
    });
    
    $('.requestForm-js').on('submit', function (e) {
        e.preventDefault();
        getThanksRequestModal();
    });

    $('.paymentForm-js').on('submit', function (e) {
        e.preventDefault();
        getThanksPaymentModal();
    });

    $('#getCallRequestModal form, #getOrderModal form').on('submit', function (e) {
        e.preventDefault();
        closeModal();
        getThanksPaymentModal();
    });

    // Clear form

    $('form').on("submit", function () {
        $(this).trigger("reset");
    });

    // Calculator

    $('.typeCalc-js').on('change', function () {
        getPaymentCalculator();
    });

    $('.approxVol-js, .approxWeight-js').on('keyup', function () {
        getPaymentCalculator();
    });

    // getPaymentCalculator();

    function getPaymentCalculator() {
        let typeCalc =+ $('.paymentForm-js').find('.typeCalc-js option:selected').val();
        let approxVol =+ $('.paymentForm-js').find('.approxVol-js').val();
        let approxWeight =+ $('.paymentForm-js').find('.approxWeight-js').val();
        let approxVolPrice = 0, approxWeightPrice = 0, totalPrice = 0, approxVolStarted = 0, approxVolFull = 0;

        // Calculation of remuneration for the distribution of parameters
        // Starting from 14 a large container is used
        approxVolStarted = approxVol / 14;
        // Full container has capacity 27
        approxVolFull = approxVol / 27;
        // Each of containers has maximum weight is 10
        approxWeight = approxWeight / 10;

        // Everything counts from volume

        if (approxVolStarted >= 0 && approxVolStarted < 1) {

            if (approxVolStarted >= approxWeight) {
                approxVolPrice = 6500;
            } else  {
                approxWeightPrice = Math.ceil(approxWeight) * 6500;
            }

        } else if (approxVolStarted >= 1) {
            approxVolFull = Math.ceil(approxVolFull);
            approxWeight = Math.ceil(approxWeight);

            if (approxVolFull >= approxWeight) {
                approxVolPrice = approxVolFull * 9100;
            } else  {
                approxWeightPrice = Math.ceil(approxWeight) * 9100;
            }

        }

        // If fields are empty, the default total price is zero

        if (approxVol == 0 && approxWeight == 0) {
            approxVolPrice = 0;
            approxWeightPrice = 0;
        }

        // Total sum calculation

        totalPrice = typeCalc + approxVolPrice + approxWeightPrice;

        if (isNaN(totalPrice)) {
            totalPrice = 0;
        }

        // Set total sum

        $('.paymentForm-js').find('.form__field-price__total').text(totalPrice);
    }

    // Pagination

    $('.paging').on("click", 'a', function (e) {
        e.preventDefault();
        $(this).siblings('a').removeClass('active');
        $(this).addClass('active')
    });

    $('.path-list__title').on('click', function () {
        $(this).siblings('ul').slideToggle(300);
    });

    // Setting for maps

    let myMap;

    if ($(window).width() >= 768 && $('#map').length > 0) {
        ymaps.ready(init);
        function init(){
            myMap = new ymaps.Map ("map", {
                center: [61.759427, 34.451303],
                zoom: 17
            });

            myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

            myMap.behaviors.disable(['scrollZoom']);

            myPin = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/icon-map-mark.png',
                iconImageSize: [89, 114],
                iconImageOffset: [-65, -140]
            });

            myPlacemark1 = new ymaps.Placemark([61.758949, 34.451387], {
            });

            myPin.add(myPlacemark1);

            myMap.geoObjects.add(myPin);
            myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
        }
    }

    if ($(window).width() < 768 && $('#map').length > 0) {
        ymaps.ready(init);
        function init(){
            myMap = new ymaps.Map ("map", {
                center: [61.758340, 34.451048],
                zoom: 17
            });

            myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

            myMap.behaviors.disable(['scrollZoom']);

            myPin = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/icon-map-mark.png',
                iconImageSize: [89, 114],
                iconImageOffset: [-65, -140]
            });

            myPlacemark1 = new ymaps.Placemark([61.758949, 34.451387], {
            });

            myPin.add(myPlacemark1);

            myMap.geoObjects.add(myPin);
            myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
        }
    }

    if ($(window).width() >= 768 && $('#map-2').length > 0) {
        ymaps.ready(init);
        function init(){
            myMap = new ymaps.Map ("map-2", {
                center: [61.759427, 34.451303],
                zoom: 17
            });

            myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

            myMap.behaviors.disable(['scrollZoom']);

            myPin = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/icon-map-mark.png',
                iconImageSize: [89, 114],
                iconImageOffset: [-65, -140]
            });

            myPlacemark1 = new ymaps.Placemark([61.758949, 34.451387], {
            });

            myPin.add(myPlacemark1);

            myMap.geoObjects.add(myPin);
            myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
        }
    }

    if ($(window).width() < 768 && $('#map-2').length > 0) {
        ymaps.ready(init);
        function init(){
            myMap = new ymaps.Map ("map-2", {
                center: [61.758340, 34.451048],
                zoom: 17
            });

            myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

            myMap.behaviors.disable(['scrollZoom']);

            myPin = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/icon-map-mark.png',
                iconImageSize: [89, 114],
                iconImageOffset: [-65, -140]
            });

            myPlacemark1 = new ymaps.Placemark([61.758949, 34.451387], {
            });

            myPin.add(myPlacemark1);

            myMap.geoObjects.add(myPin);
            myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
        }
    }

});