
$app = {

    init: function() {
        this.menu.init();
        this.contentScroll.init();
        this.marketingDownloadPop.init();
        this.marketingDownloadClose.init();
        this.ieCheck.init();
        this.scrollTo.init();
    },
    scrollTo: {
      init: function () {
        $('.blog-header-title img').click(function(){
          var scrollHeight = $('.section-inner-c').height();
          $('html, body').stop().animate({scrollTop: scrollHeight}, 1300);
        })

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
    }
}

document.onreadystatechange = function(e)
{
  if(document.readyState === 'complete') {
      $app.overlay.pageoverlay();
      $app.animateLoad.init();
  }
}
$(document).ready(function(){
    $app.init();
});


$(window).resize(function(){
});

$(window).scroll(function() {
    $app.contentScroll.init();
});

// $( window ).unload(function() {
//       $app.animateOut.init();
// });
