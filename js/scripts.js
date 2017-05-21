$(document).ready(function(){       
var scroll_start = 0;
var startchange = $('#startchange');
var offset = startchange.offset();

  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', 'rgba(255,255,255,0.8');
          //$(".navbar-brand").css('color', '#000');  
          //$(".navbar-nav > li > a").css('color', '#000');
      } else {
          $('.navbar').css('background-color', 'transparent');
          //$(".navbar-brand").css('color', '#AAA');
          //$(".navbar-nav > li > a").css('color', '#AAA');
         }
     });
  }

  $('.collapsed-nav').on('click', function(){
    $('.collapsed-nav, .toogle-navbar').toggleClass('is-open');
  });

  $('.btn-cta').on('click', function(){
    $('.btn-cta').css({'box-shadow':'none','color':'black'});
  });

  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 500);
       return false;
      }
    }
  });
});


// TEMPORARY MODAL CODE
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {modal.style.display = "none";}
//****TEMPORARY MODAL CODE END HERE