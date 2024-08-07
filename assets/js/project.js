document.addEventListener('DOMContentLoaded', function () {
   const menuBtn = document.querySelector('.menu__btn');
   const menuClose = document.querySelector('.moving-mobile-menu__close');
   const menuList = document.querySelector('.menu__list-mobile');
   const movingMobileMenu = document.querySelector('.menu__list-mobile');

   window.addEventListener("beforeunload", beforeUnLoad);
   document.addEventListener("keydown", movingMenuEsc)


   menuBtn.addEventListener('click', () => {
      menuList.classList.toggle('menu__list-mobile_open');
      if (menuList.classList.contains('menu__list-mobile_open')) {
         movingMobileMenu.style.boxShadow = '0px 0px 10000px rgba(0, 0, 0, 0.5)';
      } else {
         movingMobileMenu.style.boxShadow = 'none';
      }
   });

   menuClose.addEventListener('click', () => {
      menuList.classList.remove('menu__list-mobile_open');
      movingMobileMenu.style.boxShadow = 'none';
   });

   function movingMenuEsc(event) {
      if (event.code === 'Escape') {
         menuList.classList.remove("menu__list-mobile_open");
         movingMobileMenu.style.boxShadow = 'none';
      }
   }

   function beforeUnLoad(event) {
      event.preventDefault();
      event.returnValue = '';
   }
   window.onblur = function () {
      document.title = 'Возвращайтесь😊';
   };
   window.onfocus = function () {
      document.title = 'MyProjectS';
   };


   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("anim-active")
         } else {
            entry.target.classList.remove("anim-active")
         }
      });
   }, {
      root: null,
      rootMargin: '0px',
      threshold: 0
   });
   const targetElements = document.querySelectorAll('.anim');

   targetElements.forEach(element => {
      observer.observe(element);
   });
});