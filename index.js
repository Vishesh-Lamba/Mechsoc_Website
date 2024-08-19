     // Get the navbar
     const navbar = document.getElementById('mainNavbar');
     
     // Add a scroll event listener
     window.addEventListener('scroll', () => {
        // Check if the user has scrolled past 50 pixels
        const scrollThreshold = 20;
        if (window.scrollY > scrollThreshold) {
          // Revert to the original styles if the user is above the threshold
          navbar.classList.remove('bg-transparent'); // Remove the dark background class
          navbar.style.backgroundColor='white';
         ; // Original background color
           navbar.classList.remove('navbar-dark'); // Remove the dark background class
           navbar.classList.add('navbar-light'); // Add the light background class
          
        } else {
          
             // Change the background color and text color
             ; // Opaque white background
             navbar.style.backgroundColor=null;
           navbar.classList.remove('navbar-light'); // Remove the light background class
           navbar.classList.add('navbar-dark'); // Add the dark background class
        }
     });
     var $num = $('.card-carousel .my-card').length;
 var $even = $num / 2;
 var $odd = ($num + 1) / 2;

 if ($num % 2 == 0) {
     $('.card-carousel .my-card:nth-child(' + $even + ')').addClass('active');
     $('.card-carousel .my-card:nth-child(' + $even + ')').prev().addClass('prev');
     $('.card-carousel .my-card:nth-child(' + $even + ')').next().addClass('next');
 } else {
     $('.card-carousel .my-card:nth-child(' + $odd + ')').addClass('active');
     $('.card-carousel .my-card:nth-child(' + $odd + ')').prev().addClass('prev');
     $('.card-carousel .my-card:nth-child(' + $odd + ')').next().addClass('next');
 }

 $('.card-carousel .my-card').on('click', function() {
     if ($('.card-carousel').is(':animated')) {
         return;
     }

     var $slide = $('.card-carousel .active').width();
     
     if ($(this).hasClass('next')) {
         $('.card-carousel').animate({left: '-=' + $slide});
     } else if ($(this).hasClass('prev')) {
         $('.card-carousel').animate({left: '+=' + $slide});
     }
     
     $(this).removeClass('prev next');
     $(this).siblings().removeClass('prev active next');
     
     $(this).addClass('active');
     $(this).prev().addClass('prev');
     $(this).next().addClass('next');
 });
 

// Add dynamic animations to each team card on hover
document.addEventListener("DOMContentLoaded", function() {
 const teamCards = document.querySelectorAll('.team-card');
 
 // Add the 'animate__animated' class on hover
 teamCards.forEach(card => {
   card.addEventListener('mouseenter', function() {
     card.classList.add('animate__animated');
   });

   // Remove the 'animate__animated' class on mouse leave
   card.addEventListener('mouseleave', function() {
     card.classList.remove('animate__animated');
   });
 });
});

 gsap.from(".mechsoc-logo",{
   opacity:0,
   delay:0.2,
   duration:1,
   x:-100,

 })
 gsap.from(".mechsoc-name",{
   opacity:0,
   delay:0.2,
   duration:1,
   y:-100,

 })
 gsap.from(".nav-item",{
   opacity:0,
   delay:0.4,
   duration:1,
   stagger:.1,
   y:-100,

 })
 gsap.from(".brain-gear",{
   opacity:0,
   delay:0.4,
   duration:1,
   
   x:200,

 })
 

 const slider= document.querySelector('.slider');
 const leftArrow= document.querySelector('.left');
 const rigthArrow= document.querySelector('.right');
 const indicatorParents=document.querySelector('.controls ul');
 var sectioniIndex=0;
 document.querySelectorAll('.controls li').forEach(function(indicator,ind){
     indicator.addEventListener("click",function(){
         sectioniIndex=ind;
         document.querySelector('.controls .selected').classList.remove('selected');
         indicator.classList.add('selected');
         slider.style.transform='translate(' +(sectioniIndex)* -(12.5) +'%)';
 
     })
 })
 rigthArrow.addEventListener('click',function(){
     sectioniIndex= (sectioniIndex<7) ? sectioniIndex + 1 : 0;
     document.querySelector('.controls .selected').classList.remove('selected');
     indicatorParents.children[sectioniIndex].classList.add('selected');
     slider.style.transform='translate(' +(sectioniIndex)* -(12.5) +'%)';
 })
 leftArrow.addEventListener('click',function(){
     sectioniIndex= (sectioniIndex>0) ? sectioniIndex - 1 : 7;
     document.querySelector('.controls .selected').classList.remove('selected');
     indicatorParents.children[sectioniIndex].classList.add('selected');
     slider.style.transform='translate(' +(sectioniIndex)* -(12.5) +'%)';
 })
  