WebFontConfig = {
    google: {families: ['Roboto:400,300,400italic,700:latin,cyrillic']}
};
(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();


/* Search */
new UISearch(document.getElementById('sb-search'));



jQuery(document).ready(function () {

    var winWidth = jQuery(window).width();

    jQuery(".flexnav").flexNav();
    jQuery('.mobile-menu nav').perfectScrollbar();
    jQuery('.mobile-menu').perfectScrollbar();

    jQuery('.c-hamburger').click(function () {
        jQuery('.mobile-menu').addClass('show');
        jQuery('.flexnav').addClass('flexnav-show');
    });
    jQuery('.mobile-menu .close').click(function () {
        jQuery('.mobile-menu').removeClass('show');
        jQuery('.flexnav').removeClass('flexnav-show');
    });

    /* Lazy Load */
    jQuery(function () {
        var bLazy = new Blazy({
            offset: 200
        });
    });

    if (jQuery('.header_social').children().length == 0) {
        jQuery('.header_social').remove();
        jQuery('header').addClass('no_soc');
    }

    jQuery('.bws').first().addClass('bws_first');
    jQuery('.bws').last().addClass('bws_last');

    jQuery('.bws_content table, .main_text table').addClass('table table-striped table-bordered');
    jQuery('.bws_content table, .main_text table').wrap('<div class="table-responsive"></div>');


    /* Collapsing Menu in sidebar */

    jQuery('.collapse_menu ul>li.has-sub>a').on('click', function () {
        jQuery(this).removeAttr('href');
        var element = jQuery(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
    jQuery('.collapse_menu ul>li.has-sub>a').append('<span class="holder"></span>');

    jQuery('.collapse_menu .current-menu-ancestor ul').show();
    jQuery('.collapse_menu .current-menu-ancestor ul li ul').hide();
    jQuery('.collapse_menu .current-menu-ancestor .current-menu-parent ul').show();

    /*
     * 
     * First Screen full slider
     * @param part_fslider.php slider
     * 
     */
    jQuery(".slider .blocks_fslider").lightSlider({
        item: 1,
        slideMove: 1,
        slideMargin: 0,
        loop: true,
        speed: 600,
        controls: true,
        mode: "fade",
        pager: true,
        freeMove: false
    });
    /*
     * 
     * Logos slider
     * @param part_logos.php slider
     * 
     */
    jQuery(".item_slider .blocks__logos__rep").lightSlider({
        item: 5,
        slideMove: 1,
        slideMargin: 20,
        loop: true,
        speed: 600,
        controls: true,
        pager: true,
        enableTouch: true,
        enableDrag: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]

    });
    /*
     * 
     * Team slider
     * @param part_team.php slider
     * 
     */
    jQuery(".item_slider .blocks__team__rep").lightSlider({
        item: 3,
        slideMove: 1,
        slideMargin: 20,
        loop: true,
        speed: 600,
        controls: true,
        pager: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]

    });
    /*
     * 
     * Review slider
     * @param part_review.php slider
     * 
     */
    jQuery(".item_slider .review_2 .blocks__review__rep").lightSlider({
        item: 1,
        loop: true,
        speed: 600,
        controls: true,
        pager: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]

    });
    jQuery(".item_slider .review_1 .blocks__review__rep").lightSlider({
        item: 2,
        slideMove: 1,
        slideMargin: 30,
        loop: true,
        speed: 600,
        controls: true,
        pager: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]
    });
    /*
     * 
     * Gallery grid
     * @param part_gallery.php
     * 
     */
    jQuery('.gallery ul').lightGallery({
        thumbnail: true,
        animateThumb: false
    });
    jQuery('.gallery.item_slider').each(function () {
        var gallerySlider = jQuery(this).find('ul').data('num');
        gallerySlider = gallerySlider.match(/\d/g);
        jQuery(this).find('ul').lightSlider({
            item: 3,
            slideMove: 1,
            slideMargin: 30,
            loop: true,
            speed: 600,
            controls: true,
            pager: true,

        });
    });

    jQuery('.pp_gallery').lightGallery({
        thumbnail: true,
        animateThumb: true
    });

    jQuery(".serv_style_4 .col_1").lightSlider({
        item: 1,
        slideMove: 1,
        slideMargin: 30,
        loop: true,
        speed: 600,
        controls: false,
        adaptiveHeight: true,
        mode: "fade",
        pager: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]
    });

    jQuery(".serv_style_4 .col_2").lightSlider({
        item: 2,
        slideMove: 1,
        slideMargin: 0,
        loop: true,
        speed: 600,
        controls: false,
        pager: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]
    });

    jQuery(".serv_style_4 .col_3").lightSlider({
        item: 3,
        slideMove: 1,
        slideMargin: 0,
        loop: true,
        speed: 600,
        controls: false,
        pager: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]
    });

    jQuery(".serv_style_4 .col_4").lightSlider({
        item: 4,
        slideMove: 1,
        slideMargin: 0,
        loop: true,
        speed: 600,
        controls: false,
        pager: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]
    });

    /*
     * 
     * First Screen full slider
     * @param part_fslider.php slider
     * 
     */
    jQuery(".posts_slider").lightSlider({
        item: 1,
        slideMove: 1,
        slideMargin: 0,
        loop: true,
        speed: 600,
        controls: true,
        mode: "fade",
        pager: true,
        freeMove: false
    });


    /*
     * 
     * CENTER MODAL
     * 
     */
    function centerModals($element) {
        var $modals;
        if ($element.length) {
            $modals = $element;
        } else {
            $modals = jQuery('.modal:visible');
        }
        $modals.each(function (i) {
            var $clone = jQuery(this).clone().css('display', 'block').appendTo('body');
            var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
            top = top > 0 ? top : 0;
            $clone.remove();
            jQuery(this).find('.modal-content').css("margin-top", top);
        });
    }
    jQuery('.modal').on('show.bs.modal', function (e) {
        setTimeout(centerModals(jQuery(this)), 2000);
    });
    jQuery(window).on('resize', centerModals);



    // iOS check...ugly but necessary
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        jQuery('.modal').on('show.bs.modal', function () {
            // Position modal absolute and bump it down to the scrollPosition
            jQuery(this)
                    .css({
                        position: 'absolute',
                        marginTop: jQuery(window).scrollTop() + 'px',
                        bottom: 'auto'
                    });
            // Position backdrop absolute and make it span the entire page
            //
            // Also dirty, but we need to tap into the backdrop after Boostrap 
            // positions it but before transitions finish.
            //
            setTimeout(function () {
                jQuery('.modal-backdrop').css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: Math.max(
                            document.body.scrollHeight, document.documentElement.scrollHeight,
                            document.body.offsetHeight, document.documentElement.offsetHeight,
                            document.body.clientHeight, document.documentElement.clientHeight
                            ) + 'px'
                });
            }, 0);
        });
    }

    if (winWidth > 767) {
        jQuery('.fs.form_right').each(function () {
            var fsFormHeight = jQuery(this).find('.fs_form').outerHeight();
            var fsMetaHeight = jQuery(this).find('.fs_meta').outerHeight();

            jQuery(this).find('.fs_meta').css({'padding-top': (fsFormHeight - fsMetaHeight) / 2});
        });
    }


    // добавление shortcode в текст при его реактировании
    jQuery(".wp-mfc-questions-button-add-shortcode").change(function () {
        if (jQuery(this).val()) {
            wp.media.editor.insert('[mnv_quest_cat q_cat="' + jQuery(this).val() + '" q_count=5]');
            jQuery(this).val(0);
        }
    });

    jQuery('.dropdown-submenu').click(function () {
        jQuery(this).find('.dropdown-menu').show();
    });


});
