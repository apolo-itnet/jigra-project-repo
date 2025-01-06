const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-Popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
  wrapper.classList.remove('active-popup');
});



/* const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden-r');
const hiddenElements = document.querySelectorAll('.hidden-l');
hiddenElements.forEach((el) => observer.observe(el)); */


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('hidden-r')) {
        entry.target.classList.add('show-r');
      } else if (entry.target.classList.contains('hidden-l')) {
        entry.target.classList.add('show-l');
      } else if (entry.target.classList.contains('hidden-u')){
        entry.target.classList.add('show-u');
      } else if (entry.target.classList.contains('hidden-d')){
        entry.target.classList.add('show-d');
      }
    } else {
      entry.target.classList.remove('show-r', 'show-l', 'show-u', 'show-d');
    }
  });
});

const hiddenElementsRight = document.querySelectorAll('.hidden-r');
const hiddenElementsLeft = document.querySelectorAll('.hidden-l');
const hiddenElementsUp = document.querySelectorAll('.hidden-u');
const hiddenElementsDown = document.querySelectorAll('.hidden-d');


hiddenElementsRight.forEach((el) => observer.observe(el));
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsUp.forEach((el) => observer.observe(el));
hiddenElementsDown.forEach((el) => observer.observe(el));



  // Detect scroll event
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll value as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


   window.addEventListener('scroll', function () {
    const shopSection = document.querySelector('.shop-section');
    const sectionTop = shopSection.offsetTop; // Get the top position of the section
    const scrollPosition = window.scrollY;

    // Trigger the zoom effect when the shop section comes into view
    if (scrollPosition > sectionTop - window.innerHeight && scrollPosition < sectionTop + shopSection.offsetHeight) {
      shopSection.classList.add('scrolled');
    } else {
      shopSection.classList.remove('scrolled');
    }
  });
  

/*  window.addEventListener('scroll', function() {
    const shopSection = document.querySelector('.shop-section');
    const sectionTop = shopSection.offsetTop;
    const sectionHeight = shopSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight + window.innerHeight ) {
      const progress = (scrollPosition - sectionTop) / (sectionHeight + window.innerHeight);
      const zoomLevel = 1 + progress * 0.2;
      shopSection.style.backgroundSize = '${100 * zoomLevel}%';
    } else {
      shopSection.style.backgroundSize = '100%';
    }
 });
 */
