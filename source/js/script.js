let burger = document.querySelector('.burger'),
    adaptivemenu = document.querySelector('.adaptive-menu'),
    lists = document.querySelectorAll('.list__item'),
    body = document.body;

burger.addEventListener('click', function(){
    burger.classList.toggle('_active');
    adaptivemenu.classList.toggle('_active');
    body.classList.toggle('_lock');
    for(list of lists) {
        list.classList.toggle('_active');
    }
})


// const animItems = document.querySelectorAll('._anim-items');

// if(animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll(params) {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItems = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;
            
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;

//             }
//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('_active');
//             } else {
//                 animItem.classList.remove('_active');
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//     setTimeout(() => {
//         animOnScroll();
//     }, 300)
    
// }

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });