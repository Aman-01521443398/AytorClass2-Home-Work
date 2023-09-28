$(function () {

    $('#Banner').slick({
        arrows: false,
        dots: true,
        dotsClass: "container BannerDots",
    });


    // Tooltip start //

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // tooltip end //
    
// New Product Slider //

$(".productSlider").slick({
    arrows: false,
    slidesToShow: 4,

    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            
          },
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              
            },
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              
            },
          },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
});

//Conwdonw Start//

$(".timer").countdown("2024/01/01", function(event) {
    $(this).text(event.strftime('%D days %H:%M:%S'));
  });


// Latest News //

$('#Latest').slick({
  arrows: false,
  dots: true,
  dotsClass: "container LatestDots",
});






});