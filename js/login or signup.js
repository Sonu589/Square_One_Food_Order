
/*-----------animation on scroll----------------------------*/ 
window.addEventListener("load",function(){
  /*-------page_loader-----------------------*/ 
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(function(){
      document.querySelector(".page-loader").style.display="none";
  },600)
  /*-----------------------------*/ 
  AOS.init();
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});
