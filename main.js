// When the element with the class "menu-icon" is clicked
$(".menu-icon").click(() => {
  // Toggle the class "menu-active" on the element with the class "navbar--hamburger-menu"
  $(".navbar--hamburger-menu").toggleClass("menu-active");

  // Check if the element with the class "navbar--hamburger-menu" now has the class "menu-active"
  if ($(".navbar--hamburger-menu").hasClass("menu-active")) {
    // If it does, toggle the class "slide-in-right" on the element with the class "navbar--navlists"
    // and remove the class "slide-out-right" from the same element
    $(".navbar--navlists").toggleClass("slide-in-right");
    $(".navbar--navlists").removeClass("slide-out-right");
  } else {
    // If it doesn't, toggle the class "slide-out-right" on the element with the class "navbar--navlists"
    // and remove the class "slide-in-right" from the same element
    $(".navbar--navlists").toggleClass("slide-out-right");
    $(".navbar--navlists").removeClass("slide-in-right");
  }
});
