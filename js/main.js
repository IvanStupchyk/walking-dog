//slider
$('.reviews-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});


//selects
var selectedValue1 = document.getElementsByClassName('option-selected')[0];
    selectDog1 = document.getElementsByClassName('select-dog')[0],
    selectedValue2 = document.getElementsByClassName('option-selected')[1],
    selectDog2 = document.getElementsByClassName('select-dog')[1],
    selectedValue3 = document.getElementsByClassName('option-selected')[2],
    selectDog3 = document.getElementsByClassName('select-dog')[2];


selectDog1.addEventListener('click', function() {
    selectedValue1.innerHTML ='<p>Start typing</p>'; 
})

selectDog1.addEventListener('blur', function() {
    selectedValue1.innerHTML ='<p>Select a dog breed</p>'; 
})

var breedOfDog;
selectDog1.onchange = function() {
    var option = selectDog1[selectDog1.selectedIndex],
        selectedValue = option.getAttribute('value');

    breedOfDog = selectedValue;
};

selectDog2.addEventListener('click', function() {
    selectedValue2.innerHTML ='<p>Select from the list</p>'; 
})

selectDog2.addEventListener('blur', function() {
    selectedValue2.innerHTML ='<p>Select dog size</p>'; 
})

var weightDog;
selectDog2.onchange = function() {
    var option = selectDog2[selectDog2.selectedIndex],
        selectedValue = option.getAttribute('value');

    weightDog = selectedValue;
};

selectDog3.addEventListener('click', function() {
    selectedValue3.innerHTML ='<p>Select from the list</p>'; 
})

selectDog3.addEventListener('blur', function() {
    selectedValue3.innerHTML ='<p>Select regularity</p>'; 
})

var timesDay;
selectDog3.onchange = function() {
    var option = selectDog3[selectDog3.selectedIndex],
        selectedValue = option.getAttribute('value');
    
    timesDay = selectedValue;
};

var btnCount = document.getElementById('btn-count'),
    perDay = document.getElementById('per-day');

btnCount.addEventListener('click', function (event) {
    event.preventDefault();
    if (breedOfDog == undefined || weightDog == undefined || timesDay == undefined) {
        perDay.classList.add('bg-count');
        perDay.innerHTML ='<p>select all options</p>';
    }
    else {
        perDay.classList.remove('bg-count');
        perDay.innerHTML ='<p>= $ ' + ((breedOfDog + weightDog) * timesDay).toFixed(2) + ' per day <p>';
    }
})

/*mobile desktop and mob*/
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





