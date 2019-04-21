$(document).ready(function() {
	// Открытие списка категорий
	$('.header__category__all-title a').on("click", function() {
		$(this).closest('.header__category__inner').find('.header__category__all-list').toggleClass('category-list_open');
	});

	// Скрытие списка категорий, по клику вне его области
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__category__all-title, .header__category__all-list").length) {
            $('.header__category__all-list').removeClass('category-list_open');
        }
        e.stopPropagation();
    });

    // Инициализация библиотеки, для стилизации select
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
        new SelectFx(el);
    } );

    // Поведение бургер-меню
    $('.header__nav__burger').on("click", function () {
        $(this).toggleClass('burger_open');
        if ($(this).hasClass('burger_open')) {
            $(this).closest('.header__nav__inner').find('nav').fadeIn();
        } else {
            $(this).closest('.header__nav__inner').find('nav').fadeOut();
        }
    });

    // Поведение списка категорий
    // $('.categories-list ul li').on('click', 'a', function() {
    //     $('.categories-list ul li').removeClass('active');
    //     $(this).closest('li').addClass('active');
    // });

    // Поведение вида категорий
    $('.categories-reviews__sort').on('click', 'a', function() {
        $('.categories-reviews__sort a').removeClass('active');
        $(this).addClass('active');
    });

    // Поведение пагинации
    $('.paging').on('click', 'a', function() {
        $('.paging li').removeClass('current');
        $(this).closest('li').addClass('current');
    });

    // Раскрытие выбора категорий, при добавлении обьекта
    $('.add-obj-ct__categories__name').on("click", function () {
       $(this).toggleClass('active');
    });

    // Добавление файла в форму
    $('.block-add-js').on("click", function () {
        $('.input-add-js').trigger("click");
    });

    // Появление поиска в шапке сайта
    if($(document).width()>1024) {
        $('.header__info__search .form').on("click", function () {
           $(this).addClass('form_open');
        });
    }
    $(document).mouseup(function (event) {
        event.preventDefault();
        if ($(".header__info__search .form_open").is(":visible")) {
            var headerSearchForm = $(".header__info__search .form_open");
            if (!headerSearchForm.is(event.target)
                && headerSearchForm.has(event.target).length === 0) {
                setTimeout(function() {
                    $('.header__info__search .form').removeClass('form_open');
                }, 200);
            }
        }
    });
    $('.icon-search-js').on("click", function () {
        $('.header__nav__search').toggleClass('active');
    });

    // Авторизация и Регистрация
    $('.sign-in-js').on("click", function (e) {
        e.preventDefault(e);
        $('.sign-up-js, .form-sign-up').removeClass('active');
        $(this).addClass('active');
        $('.form-sign-in').addClass('active');
    });
    $('.sign-up-js').on("click", function (e) {
        e.preventDefault(e);
        $('.sign-in-js, .form-sign-in').removeClass('active');
        $(this).addClass('active');
        $('.form-sign-up').addClass('active');
    });

    // Отображение контента на странице Товара
    $('.obj-reviews-js').on("click", function (e) {
        e.preventDefault(e);
        $('.obj-info-js').removeClass('active');
        $('.object__info').removeClass('content_active');
        $(this).addClass('active');
        $('.object__reviews').addClass('content_active');
    });
    $('.obj-info-js').on("click", function (e) {
        e.preventDefault(e);
        $('.obj-reviews-js').removeClass('active');
        $('.object__reviews').removeClass('content_active');
        $(this).addClass('active');
        $('.object__info').addClass('content_active');
    });

    $('.path-list__title').on('click', function () {
       $(this).siblings('ul').slideToggle(300);
    });
});