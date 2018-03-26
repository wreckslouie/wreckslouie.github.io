
$app = {

    init: function() {
        this.map.init();
        this.fullpager.init();
        this.menu.init();
        this.marketingDownloadPop.init();
        this.marketingDownloadClose.init();
        this.bodyOverflow.init();
        this.accordion.init();
        this.contentScroll.init();
        this.scrollAnimate.init();
        this.ieCheck.init();
        this.imgMobile.init();
        this.scrollTo.init();
        this.fullpageScrollTo.init();
        this.workInnerPadding.init();
    },
    workInnerPadding: {
      init: function(){
        var navHeight = $('.works-nav ').height() + 30;
        $('.work-details .padding-80').css('padding-bottom', navHeight);
      }
    },
    fullpageScrollTo: {
      init: function() {

        $('.scroll-fullpage-inner img').click(function(){
            var scrollable = $('.fp-section').find('.fp-scrollable').data('iscrollInstance'),
                value = $('.subscribe-footer');
            // scrollable.scrollTo(0,0);

            // setTimeout(function(){
                scrollable.scrollToElement('.subscribe-footer', 1500);
                // return false;
            // }, 500)
        })
        $('.scroll-fullpage img').click(function(){
          $.fn.fullpage.moveSectionDown();
        })
      }
    },
    scrollTo: {
      init: function () {
        $('.case-study-header-title img').click(function(){
          var scrollHeight = $('.section-inner-c').height();
          $('html, body').stop().animate({scrollTop: scrollHeight}, 1300);
        })

      }
    },
    imgMobile: {
      init: function() {
        $('.work-wrap .work-preview:not(.item)').each(function(){
          var bg = $(this).attr('data-bg');
          if ( $(window).outerWidth() <= 993 && $(window).outerWidth() >= 769) {
            bg = bg.replace('img', 'img/md');
            $(this).css('background', 'url('+bg+')');
          }
          else if ( $(window).outerWidth() <= 768 ) {
            bg = bg.replace('img', 'img/sm');
            $(this).css('background', 'url('+bg+')');
          }
          // else if ( $(window).outerWidth() <= 993)
          //   bg = bg.replace('img', 'img/xs');
          //   $(this).css('background', 'url('+bg+')');
          // }
        });
      }
    },
    lazy: {
      init: function() {
          // loop over each image
          $('[role-block=lazy-img]').each(function() {
            var target = $(this);
            var image_url = target.attr('data-img');
            var content_image = target.find('img');
            // change the src of the content image to load the new high res photo
            content_image.attr('src', image_url);
            if (target.hasClass('reveal')){
              target.css('background', 'url('+image_url+')');
              content_image.on('load', function() {
                target.delay(1000).parent().addClass('loaded-img');
              });
            }
            else {
              content_image.on('load', function() {
                target.css('background', 'url('+image_url+')');
                target.removeClass('fade-bg');
              });

            }
          });
      }
    },
    ieCheck: {
      init: function() {
        if(window.navigator.userAgent.indexOf("Edge") > -1) {
          $('body').addClass('edge');
        }
        if(navigator.userAgent.match(/Trident\/7\./)) {
          $('body').addClass('ie11');
        }

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            $('body').addClass('ie ie'+parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        }

      }

    },
    map: {
        init: function() {
          if ($('[role-block=map]').length ) {
            // Do something
            var singapore = new google.maps.LatLng(1.290009, 103.849433),
                malaysia = new google.maps.LatLng(3.165244, 101.652671);

            var mapOptions = {
                center: singapore,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                styles: [{
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#181818"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1b1b1b"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#2c2c2c"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#8a8a8a"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#373737"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#3c3c3c"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#4e4e4e"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#000000"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#3d3d3d"
                      }
                    ]
                  }
                ]
            }

            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var marker = new google.maps.Marker({
                position: singapore,
            });

            // To add the marker to the map, call setMap();
            marker.setMap(map);

            $('.map-switch .col').click(function(){
              $('.map-switch .col').removeClass('active');
              $(this).addClass('active');
              if($(this).hasClass('singapore')){
                map.setCenter(singapore);
                marker.setPosition(singapore);
              }
              else{
                map.setCenter(malaysia);
                marker.setPosition(malaysia);
              }
            })
          }
        }
    },
    marketing: {
        init: function() {
            if ($('[role-block=marketing-main]').length ) {
                $('[role-block=marketing-items] .item').mouseenter(function() {
                    var dataSub = $(this).data('sub'),
                        dataTitle = $(this).data('title'),
                        dataBG = $(this).data('bg');
                        datadl = $(this).data('dl');

                      $('.image-cover-animate').addClass('reload');
                      $('[role-block=marketing-preview] .content-wrap h3').text(dataSub);
                      $('[role-block=marketing-preview] .content-wrap h1').text(dataTitle);
                      $('.floating').attr('src', dataBG).on('load', function() {
                         // $(this).remove();
                         $('.image-cover-animate').removeClass('reload');
                         // $('[role-block=marketing-preview]').css('background-image', 'url(' + dataBG + ')');
                      });
                      $('[role-block=marketing-preview] .download-url').attr('href', datadl);


                }).mouseleave(function() {

                    var defaultSub = $('[role-block=marketing-items] .item:first-child').data('sub'),
                        defaultTitle = $('[role-block=marketing-items] .item:first-child').data('title'),
                        defaultBG = $('[role-block=marketing-items] .item:first-child').data('bg');
                        defaultdl = $('[role-block=marketing-items] .item:first-child').data('dl');

                      $('[role-block=marketing-preview] .content-wrap h3').text(defaultSub);
                      $('[role-block=marketing-preview] .content-wrap h1').text(defaultTitle);
                      $('.floating').attr('src', dataBG).on('load', function() {
                         // $(this).remove();
                         $('.image-cover-animate').removeClass('reload');
                         // $('[role-block=marketing-preview]').css('background-image', 'url(' + dataBG + ')');
                      });
                      $('[role-block=marketing-preview] .download-url').attr('href', defaultdl);
                });
            }
        }
    },
    fullpager: {
        init: function() {
            if ($('[role-block=fullpage]').length ) {
              if ( $(window).outerWidth() <= 1024 || $(window).outerHeight() < 768 ) {
                $('.fixed-element').addClass('remove-fix');
                $('[role-block=fullpage]').addClass('remove-first');
                // $.fn.fullpage.destroy('all');
              }
              else {
                $('[role-block=fullpage]').fullpage({
                  responsiveWidth: 1024,
                  responsiveHeight: 768,
                  responsiveSlides: true,
                  scrollOverflow: true,
                  setAllowScrolling: true,
                  navigation: true,
                  parallax: true,
                  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
                  scrollOverflowOptions: {
                    probeType: 3
                  },
                  onLeave: function(index, nextIndex, direction){
                    var leavingSection = $(this);
                    //after leaving section 2
                    if(index == 1 && direction =='down'){
                    }

                    if(index == 2 && direction =='up'){
                      if($('[role-block=landing-section]').length){
                        var scrollable = $('.fp-section').find('.fp-scrollable').data('iscrollInstance');
                        scrollable.scrollTo(0,0);
                      }
                    }
                  },
                  afterLoad: function(anchorLink, index){
                      if(index == 1){
                        if($('[role-block=landing-section]').length){
                          var scrollable = $('.fp-section').find('.fp-scrollable');
                          var scroller = scrollable.data('iscrollInstance');
                          $('body').bind('mousewheel wheel', function(e){
                              var scrollValue = scroller.y;

                              $('.img-fixed-1').css({
                                transform: 'scale(' + ( -(scrollValue  * 0.4)  + $(window).height()) / ($(window).height())  +')',
                              });


                              $('.img-fixed-2').css({
                                transform: 'scale(' + ( -(scrollValue  * 0.25)  + $(window).height()) / ($(window).height())  +')',
                              });

                              $('.img-fixed-3').css({
                                transform: 'scale(' + ( -(scrollValue * 0.15)  + $(window).height()) / ($(window).height()) +')',
                              });

                              $('.img-fixed-4').css({
                                transform: 'scale(' + ( -(scrollValue * 0.05)  + $(window).height()) / ($(window).height()) +')',
                              });
                          });
                        }
                      }
                  }
                });
              }
            }
        },
        out: function() {
          if ($('[role-block=fullpage]').length ) {
            if ( $(window).outerWidth() <= 993 || $(window).outerHeight() < 680 ) {
                  // $.fn.fullpage.destroy('all');
            }
          }
        }
    },
    menu: {
      init: function(){
        $('[role-block=menu-link]').click(function(){

            if($(this).hasClass('show-menu')) {
              $(this).removeClass('show-menu');
              $('[role-block=nav]').fadeOut();
              $('[role-block=menu-wrap]').removeClass('active');
               $('.menu-list li').removeClass('showUp');
            }
            else {
              $(this).addClass('show-menu');
              $('[role-block=nav]').fadeIn();
              $('[role-block=menu-wrap]').addClass('active');

                $('.menu-list li').each(function(i){
                  var menuList = $(this);
                  setTimeout(function() {
                      menuList.addClass('showUp');
                  }, 40*i);
                });
            }
            e.preventDefault();
        });
      }
    },
    marketingDownloadPop: {
      init: function(event){
        $('[role-button=showdownload]').click(function(event){
          $('[role-show=downloadPop]').addClass('show');
          $('body').addClass('pop-up');
          event.preventDefault();
        });

      }
    },
    marketingDownloadClose: {
      init: function(event){
        $('[role-action=download-close]').click(function(event){
          $('[role-show=downloadPop]').removeClass('show');
          $('body').removeClass('pop-up');
          event.preventDefault();
        });

      }
    },
    overlay: {
      pageoverlay: function(){
        // setTimeout(function(){
          $('[role-block=overlay]').addClass('out');
        // }, 800);
      }
    },
    animateLoad: {
      init: function(){
        // setTimeout(function(){
          $('body').addClass('loaded');
        // }, 800);
      }
    },
    animateOut: {
      init: function(){
        // setTimeout(function(){
          // $('[role-block=overlay]').fadeIn('slow');
        // }, 800);
          $(body).removeClass('loaded');
      }
    },
    bodyOverflow: {
      init: function(e){
          if ($('[role-block=overflow-target]').length ) {
              $('body').addClass('no-overflow');
              var owl = $('[role-block=work-main]');
              var fixOwlCarousel = function(){
                stage = $('.owl-stage');
                stage.width(stage.width() * 2);
              }

              owl.owlCarousel({
                onInitialized: fixOwlCarousel,
                onRefreshed: fixOwlCarousel,
                loop: true,
                nav: true,
                navText: [
                  '<div class="control-back-owl"><img src="prod/img/control-owl-prev.png"></div>',
                  '<div class="control-back-owl"><img src="prod/img/control-owl-next.png"></div>'],
                merge:true,
                slideby: 3,
                scrollPerPage: true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    769:{
                        items:3,
                        nav:true
                    },
                    1500:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
              });

              var deltas = [null, null, null, null, null, null, null, null, null],
                  timer  = null,
                  lock   = 0,
                  seen   = 0;

              function hasPeak() {
                  if (lock > 0) {
                      lock--;
                      return false;
                  }
                  if (deltas[0] == null) return false;
                  if (
                      deltas[0] <  deltas[4] &&
                      deltas[1] <= deltas[4] &&
                      deltas[2] <= deltas[4] &&
                      deltas[3] <= deltas[4] &&
                      deltas[5] <= deltas[4] &&
                      deltas[6] <= deltas[4] &&
                      deltas[7] <= deltas[4] &&
                      deltas[8] <  deltas[4]
                  ) return true;
                  return false;
              }
              if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
                owl.on('mousewheel DOMMouseScroll', '.owl-stage', function(e) {
                      if (e.deltaY < 0) {
                        owl.trigger('next.owl');
                      } else {
                        owl.trigger('prev.owl');
                      }
                      e.preventDefault();
                });
              }
              else {
                owl.on('mousewheel', '.owl-stage', function(e) {
                    var delta  = e.type == 'mousewheel' ? e.originalEvent.wheelDelta * -1 : 40 * e.originalEvent.detail;
                    if (hasPeak()) {
                        lock = 10;
                        seen++;
                        // console.log(seen);
                      if (e.deltaY < 0) {
                        owl.trigger('prev.owl');
                      } else {
                        owl.trigger('next.owl');
                      }
                    }

                    else if ((deltas[8] == null || deltas[8] == 120) && Math.abs(delta) == 120){
                      if (e.deltaY < 0) {
                        owl.trigger('next.owl');
                      } else {
                        owl.trigger('prev.owl');
                      }
                    }
                    deltas.shift();
                    deltas.push(Math.abs(delta));
                });

              }

            // }
          }
      }
    },
    accordion: {
      init: function(){
          $('[role-block=accordion]').each(function(){
            $(this).click( function(){
              if(!$(this).parent().hasClass('active')){
                $('.accordion-content').slideUp('slow');
              }
              $('.accordion').removeClass('active');
              $(this).parent().toggleClass('active');
              $(this).next().slideDown('slow');
            });
          })
      }
    },
    contentScroll: {
      init: function(){
        if ( $(window).outerWidth() > 768 ) {
           var contentHeader = $('[role-block=scroll-target]').height() - 200;
           if ($(window).scrollTop() < contentHeader ){
               $('[role-block=fixed-header]').removeClass('fixed-header opacify');
          }
          else if ($(window).scrollTop() >= contentHeader) {
               $('[role-block=fixed-header]').removeClass('opacify');
               $('[role-block=fixed-header]').addClass('fixed-header');
           }
        }
      }
    },
    scrollAnimate: {
      init: function(){
        if ($('.wow').length ) {
          new WOW().init({
            offset: 100,
            mobile: false
          });
        }
      }
    }
}

document.onreadystatechange = function(e)
{
  if(document.readyState === 'complete') {
      $app.overlay.pageoverlay();
      $app.animateLoad.init();
      $app.fullpager.out();
      $app.lazy.init();
  }

}

$(document).ready(function(){
    $app.init();
});


$(window).resize(function(){
      $app.fullpager.init();
      $app.imgMobile.init();
      $app.workInnerPadding.init();
});

$(window).scroll(function() {
    $app.contentScroll.init();
});

// $( window ).unload(function() {
//       $app.animateOut.init();
// });
