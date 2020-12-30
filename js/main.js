$('.reviews-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

var selectedValue1 = document.getElementsByClassName('option-selected')[0];
    selectDog1 = document.getElementsByClassName('select-dog')[0],
    selectedValue2 = document.getElementsByClassName('option-selected')[1],
    selectDog2 = document.getElementsByClassName('select-dog')[1],
    selectedValue3 = document.getElementsByClassName('option-selected')[2],
    selectDog3 = document.getElementsByClassName('select-dog')[2];


selectDog1.addEventListener('click', function() {
    selectedValue1.innerHTML ='<p>Start typing</p>'; 
})

selectDog2.addEventListener('click', function() {
    selectedValue2.innerHTML ='<p>Select from the list</p>'; 
})

selectDog3.addEventListener('click', function() {
    selectedValue3.innerHTML ='<p>Select from the list</p>'; 
})


$("#menu-desktop").on("click","a", function (event) {
    event.preventDefault();
      let id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 900);
});

$("#menu-mob").on("click", "a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top + 1 + 'px';
    $('body,html').animate({scrollTop: top}, 900);
});
  
/*mobile menu*/
let menuBtn = document.querySelector('.menu-btn');
    menuLines = document.querySelector('.menu-btn-lines'),
    menuMobBox = document.querySelector('.menu-box'),
    menuItem = document.querySelectorAll('.menu-item');

if(menuBtn) {
    menuBtn.addEventListener('click', function() {
        menuLines.classList.toggle("menu-btn-active");
        menuMobBox.classList.toggle("menu-show");
    });
}

menuItem.forEach(function(btn) {
    btn.addEventListener('click', function() {
        menuLines.classList.remove("menu-btn-active");
        menuMobBox.classList.remove("menu-show");
    });
});

