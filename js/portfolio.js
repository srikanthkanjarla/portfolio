     //scroll  back to top
     $(function() {
         $(window).on('scroll', function() {
             if ($(this).scrollTop() > 100) {
                 $('#scroll').fadeIn();
             } else {
                 $('#scroll').fadeOut();
             }
         });

         // jQuery for page scrolling feature - requires jQuery Easing plugin
         $(function() {
             $('body').on('click', 'a.scrollable', function(event) {
                 var $anchor = $(this);
                 $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1500, 'easeInOutExpo');
                 event.preventDefault();
             });
         });



     });