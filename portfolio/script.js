/*
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            //alert("Hello, world!");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $(".menu-btn").click(function() {
       $('.navbar .menu').toggleClass("active");
    });
});
*/

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop >30) {
        var element = document.getElementById("navbar");
         element.classList.add('sticky');
    } 
    else {
       var element = document.getElementById("navbar");
       element.classList.remove('sticky');
    }
  }
  /*
  function myFunction() {
    var element = document.getElementById(".menu-btn");
    element.classList.toggle('active');
 }
  $(".menu-btn").click(function() {
       $('.navbar .menu').toggleClass("active");
    });
 */
const menuIcon = document.getElementById(".menu-btn");
const navbar = document.getElementById('.navbar .menu');

menuIcon.addEventListener('click',()=>{
    navbar.classList.toggleClass('.active');

});