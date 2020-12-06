jQuery(document).ready(function(){
   jQuery(".popmake-close").click(function(){
    jQuery('.popmake-content iframe').attr("src", jQuery(".popmake-content iframe").attr("src"));
   });
   jQuery(".popmake-video-popup").click(function(){
    jQuery('.popmake-content iframe').attr("src", 'https://www.youtube.com/embed/w3Wluvzoggg');
   });
   jQuery(".menu-link").click(function(){
 
          if (window.matchMedia('(max-width: 768px)').matches) 
          {
           jQuery('html, body').animate({
               scrollTop: jQuery("#footer").offset().top
           }, 2000);
       }
       else
       {
          jQuery('html, body').animate({
               scrollTop: jQuery("#contact_section").offset().top - 230
           }, 2000);
       }
       
   });
 });
 
 document.getElementById("watch-btn").addEventListener("click", function() {
 document.getElementsByTagName("iframe")[0].src+="&autoplay=1"
 });
 
 document.getElementById("watch-btn").style.cursor = "pointer";