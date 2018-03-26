
$app = {

    init: function() {
        this.menu.init();
        this.bodyOverflow.init();
        this.accordion.init();
        this.ieCheck.init();
        this.imgMobile.init();
        this.workInnerPadding.init();
    },
    workInnerPadding: {
      init: function(){
        var navHeight = $('.works-nav ').height() + 30;
        $('.work-details .padding-80').css('padding-bottom', navHeight);
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
    }
}

document.onreadystatechange = function(e)
{
  if(document.readyState === 'complete') {
      $app.overlay.pageoverlay();
      $app.animateLoad.init();
      $app.lazy.init();
  }

$(document).ready(function(){
    $app.init();
});


$(window).resize(function(){
      $app.imgMobile.init();
      $app.workInnerPadding.init();
});

$(window).scroll(function() {

});

}

// $( window ).unload(function() {
//       $app.animateOut.init();
// });
