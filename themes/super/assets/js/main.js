const observerOptions = {
    root: null,
    rootMargin: '-50px 0px -50px 0px', // Trigger only when 50px inside viewport
    threshold: 0.2 // Need 20% visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Small delay to ensure smooth animation
            setTimeout(() => {
                entry.target.classList.add('is-visible');
            }, 50);
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const elementsToObserve = document.querySelectorAll('.animate-fly-in-from-left, .animate-fly-in-from-right, .fade-in, .fly-in-left, .fly-in-right');

elementsToObserve.forEach(el => {
    observer.observe(el);
});


// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         // console.log('Element:', entry.target, 'Intersecting:', entry.isIntersecting, 'Ratio:', entry.intersectionRatio);
        
//         if (entry.isIntersecting) {
//             // console.log('Making visible:', entry.target);
//             entry.target.classList.add('is-visible');
//             observer.unobserve(entry.target);
//         }
//     });
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);

// const elementsToObserve = document.querySelectorAll('.fly-in, .ani, .animate-fly-in-from-right, .animate-fly-in-from-left');

// console.log('Total elements to observe:', elementsToObserve.length);

// elementsToObserve.forEach(el => {
//     observer.observe(el);
// });


// const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 200) {
//     scrollToTopBtn.classList.remove('hidden');
//     scrollToTopBtn.classList.add('opacity-100');
//   } else {
//     scrollToTopBtn.classList.add('opacity-0');
//     setTimeout(() => {
//       if (scrollToTopBtn.classList.contains('opacity-0')) {
//         scrollToTopBtn.classList.add('hidden');
//       }
//     }, 300); // match the transition duration
//   }
// });

// scrollToTopBtn.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
