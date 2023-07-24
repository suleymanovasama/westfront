var swiperText = new Swiper(".home-benefits-image-slider", {
    slidesPerView: 1,
    initialSlide: 0,
    centeredSlides: true,
    direction: "vertical",
    freeMode: true,
    freeModeSticky: true,
   
    keyboard: {
        enabled: true,
    },
    speed: 0,
    allowTouchMove: false,
    mousewheel: {
        enabled: false,
    },
    // breakpoints: {
    // 900: {
    //     allowSlideNext: true,
    //     allowSlidePrev: true,
    //     // allowTouchMove: true,
    // }},
    mousewheelInertia: 800,
    on: {
        slideChangeTransitionStart: function () {
            this.params.speed = 0;
        },
        slideChangeTransitionEnd: function () {
            this.params.speed = 0;
            if (this.isEnd) {
                const otherSection = document.getElementById('calculator-container');
                otherSection.scrollIntoView({ behavior: 'smooth' });
              }
        },
    }
});
var swiperImage = new Swiper('.home-benefits-text-slider', {
    slidesPerView: 2,
    direction: 'vertical',
    initialSlide: 0,
    freeMode: true,
    freeModeSticky: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
    },
    speed: 500,
    allowTouchMove: false,

    mousewheel: {
        enabled: false,
    },
    // breakpoints: {
    //     900: {
    //         allowSlideNext: true,
    //         allowSlidePrev: true,
    //         // allowTouchMove: true,
    //     }
    // },
    mousewheelInertia: 800,
    on: {
        // slideChangeTransitionEnd: function() {
        //   // Slider'ın son slayda ulaşılması durumunda başka bir bölüme geçin
        //   if (this.isEnd) {
        //     const otherSection = document.getElementById('otherSection');
        //     otherSection.scrollIntoView({ behavior: 'smooth' });
        //   }
        // }
    }
});

// swiperImage.on('slideChangeTransitionStart', function () {
//     if (swiperImage.activeIndex > swiperText.activeIndex) {
//         swiperText.slideNext();
//     } else if (swiperImage.activeIndex < swiperText.activeIndex) {
//         swiperText.slidePrev();
//     }
// });

function handleMouseWheel(){
window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
        console.log(event.deltaY);
        swiperText.slideNext();
    } else if (event.deltaY < 0) {
        console.log(event.deltaY);
        swiperText.slidePrev();
    }
});
}
// var istrueslider = false
// swiperText.on('slideChangeTransitionStart', function () {
//     if (istrueslider) {
//         if (swiperText.activeIndex > swiperImage.activeIndex) {
//             swiperImage.slideNext();
//         } else if (swiperText.activeIndex < swiperImage.activeIndex) {
//             swiperImage.slidePrev();
//         }
//     }
// });

function handleKeyboard(){
document.addEventListener("keydown", function (event) {
    var sectionRect = section.getBoundingClientRect();

    // if (sectionRect.height < window.innerHeight-300 && sectionRect.bottom >= 200) {
        if (event.key === "ArrowUp") {
            // swiperImage.slidePrev();
            swiperImage.slideNext();
        }
        else if (event.key === "ArrowDown") {
            // swiperImage.slideNext();
            swiperImage.slidePrev();
        }
    // }

});
}




window.addEventListener('scroll', function() {
    // Sayfanın kaydırma pozisyonunu alın
    const scrollPosition = window.scrollY;
  
    // Slider'ın sınırları (offset değerleri)
    const sliderTop = document.querySelector('.home-benef-cont').offsetTop;
    const sliderBottom = sliderTop + document.querySelector('.home-benef-cont').offsetHeight;
  
    // Sayfanın slider'ın sınırları içinde olup olmadığını kontrol edin
    if (scrollPosition >= sliderTop && scrollPosition <= sliderBottom) {
      // Eğer sayfa slider'ın sınırları içindeyse, klavye ve fare olaylarını dinleyin
      document.addEventListener('keydown', handleKeyboard);
      document.addEventListener('wheel', handleMouseWheel);
    // swiperImage.controller.control = swiperText;
    // swiperText.controller.control = swiperImage;
 
    } else {
      // Sayfa slider'ın sınırları dışındaysa, klavye ve fare olaylarını kaldırın
      document.removeEventListener('keydown', handleKeyboard);
      document.removeEventListener('wheel', handleMouseWheel);
   
    }
})







swiperImage.on('slideChange', function (e) {
    var activeSlide = swiperImage.slides[swiperImage.activeIndex];
    // activeSlide.style.height='150px'
    var span = activeSlide.querySelector('.home-benefit-head-context-title');
    span.style.fontSize = '40px';
    span.style.opacity = 1;
    var all_div = activeSlide.querySelector('.home-benefit-head');
    all_div.style.opacity = 1;
    var all_div_text = activeSlide.querySelector('.home-benefit-head-context-title-text');
    all_div_text.style.visibility = 'visible';


    var previousSlide = swiperImage.slides[swiperImage.previousIndex];
    // previousSlide.style.height='230px'
    var previousSpan = previousSlide.querySelector('.home-benefit-head-context-title');
    previousSpan.style.fontSize = '20px';
    previousSpan.style.opacity = 0.3;
    var all_div_some = previousSlide.querySelector('.home-benefit-head');
    all_div_some.style.opacity = 0.3;
    var all_div_text1 = previousSlide.querySelector('.home-benefit-head-context-title-text');
    all_div_text1.style.visibility = 'hidden';


});




