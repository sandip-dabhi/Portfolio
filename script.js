document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    const homeSection = document.getElementById('home');
    window.addEventListener('scroll', function() {
        if (window.scrollY > homeSection.offsetHeight / 2) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    scrollButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


(function () {
    "use strict";
  
    // Define variables
    var items = document.querySelectorAll(".timeline li");
  
    // Check if an element is in viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Callback function to check if elements are in view and add class
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // Listen for events
    window.addEventListener("load", callbackFunc); // Check on initial load
    window.addEventListener("resize", callbackFunc); // Check on window resize
    window.addEventListener("scroll", callbackFunc); // Check on scroll
  })();
  

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


particlesJS('particles-js', {
    "particles": {
     
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#000000" 
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000", 
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


    // Typing effect with typing and deleting
    const typingText = document.getElementById('typing');
    const textArray = ['Web Developer', 'Software Developer'];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let delay = 200;

    function type() {
        if (isDeleting) {
            currentText = textArray[textIndex].substring(0, charIndex--);
            delay = 100;
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                delay = 500;
            }
        } else {
            currentText = textArray[textIndex].substring(0, charIndex++);
            delay = 200;
            if (charIndex > textArray[textIndex].length) {
                isDeleting = true;
                delay = 1000;
            }
        }
        typingText.textContent = currentText;
        setTimeout(type, delay);
    }

    type();
});

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.style.transform = `rotateX(${(y - rect.height / 2) / 10}deg) rotateY(${(x - rect.width / 2) / 10}deg)`;
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0)';
    });
});
const profileImg = document.querySelector('.profile-pics img');

profileImg.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = profileImg;
    let { offsetX: x, offsetY: y } = e;

    if (e.target !== profileImg) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xRotate = ((y / height) - 0.5) * 20;
    const yRotate = ((x / width) - 0.5) * -20;

    profileImg.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
});

profileImg.addEventListener('mouseleave', () => {
    profileImg.style.transform = 'rotateX(0) rotateY(0)';
});


const profileImgs = document.querySelector('.profile-img img');

profileImgs.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = profileImg;
    let { offsetX: x, offsetY: y } = e;

    if (e.target !== profileImg) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xRotate = ((y / height) - 0.5) * 20;
    const yRotate = ((x / width) - 0.5) * -20;

    profileImgs.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
});

profileImgs.addEventListener('mouseleave', () => {
    profileImgs.style.transform = 'rotateX(0) rotateY(0)';
});




document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        const video = item.querySelector('video');
        const progressBar = item.querySelector('.progress-bar');

        item.addEventListener('mouseenter', () => {
            progressBar.style.width = '100%';
            
            const playVideo = () => {
                video.style.display = 'block';
                video.play();
            };

            progressBar.addEventListener('transitionend', playVideo, { once: true });

            item.addEventListener('mouseleave', () => {
                progressBar.style.width = '0';
                video.pause();
                video.style.display = 'none';
                video.currentTime = 0;
                progressBar.removeEventListener('transitionend', playVideo);
            }, { once: true });
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const homeSection = document.querySelector('#home');
    const homeContent = document.querySelector('.home-content');
    const profilePic = document.querySelector('.profile-pics');

    ScrollTrigger.create({
        trigger: homeSection,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => animateHome(),
        onEnterBack: () => animateHome(),
        onLeave: () => resetHome(),
        onLeaveBack: () => resetHome(),
    });

    function animateHome() {
        gsap.fromTo(homeContent,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5  }
        );

        gsap.fromTo(profilePic,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1 , delay: 0.5 }
        );
    }

    function resetHome() {
        gsap.set(homeContent, { opacity: 0, y: 50 });
        gsap.set(profilePic, { opacity: 0, x: -50 });
    }
});
// About section animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const aboutUsSection = document.querySelector('#about-us');
    const profileImg = document.querySelector('.profile-img');
    const profileText = document.querySelector('.profile-text');

    ScrollTrigger.create({
        trigger: aboutUsSection,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => animateAboutUs(),
        onEnterBack: () => animateAboutUs(),
        onLeave: () => resetAboutUs(),
        onLeaveBack: () => resetAboutUs(),
    });

    function animateAboutUs() {
        gsap.fromTo(profileImg,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 } // Adjust delay as needed
        );

        gsap.fromTo(profileText,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.8 } // Adjust delay as needed
        );
    }

    function resetAboutUs() {
        gsap.set(profileImg, { opacity: 0, x: -50 });
        gsap.set(profileText, { opacity: 0, y: 50 });
    }
});


// Skills section animations


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const skillsContainer = document.querySelector('.skills-container');
    const skills = document.querySelectorAll('.skill');

    ScrollTrigger.create({
        trigger: skillsContainer,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => animateSkills(),
        onEnterBack: () => animateSkills(),
        onLeave: () => resetSkills(),
        onLeaveBack: () => resetSkills(),
    });

    function animateSkills() {
        skills.forEach((skill, index) => {
            gsap.fromTo(skill, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 1, delay: index * 0.1 }
            );
        });
    }

    function resetSkills() {
        skills.forEach(skill => {
            gsap.set(skill, { opacity: 0, y: 50 });
        });
    }
});
//education 
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const educationItems = document.querySelectorAll('.education-item');

    // Iterate over each education item and apply ScrollTrigger animation
    educationItems.forEach(item => {
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%', // Adjust as needed
            end: 'bottom 20%', // Adjust as needed
            onEnter: () => animateEducationItem(item),
            onEnterBack: () => animateEducationItem(item),
            onLeave: () => resetEducationItem(item),
            onLeaveBack: () => resetEducationItem(item),
        });
    });
//education
    function animateEducationItem(item) {
        const logo = item.querySelector('.edu-logo');
        const info = item.querySelector('.education-info');

        gsap.fromTo(logo,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );

        gsap.fromTo(info,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.8 }
        );
    }

    function resetEducationItem(item) {
        const logo = item.querySelector('.edu-logo');
        const info = item.querySelector('.education-info');

        gsap.set(logo, { opacity: 0, x: -50 });
        gsap.set(info, { opacity: 0, y: 50 });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const projectItems = document.querySelectorAll('.project-item');

    // Iterate over each project item and apply ScrollTrigger animation
    projectItems.forEach(item => {
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%', // Adjust as needed
            end: 'bottom 20%', // Adjust as needed
            onEnter: () => animateProjectItem(item),
            onEnterBack: () => animateProjectItem(item),
            onLeave: () => resetProjectItem(item),
            onLeaveBack: () => resetProjectItem(item),
        });
    });

  
});

 document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            const aboutUsSection = document.querySelector('#about-us');
            const profileImg = document.querySelector('.profile-img');
            const profileText = document.querySelector('.profile-text');

            ScrollTrigger.create({
                trigger: aboutUsSection,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () => animateAboutUs(),
                onEnterBack: () => animateAboutUs(),
                onLeave: () => resetAboutUs(),
                onLeaveBack: () => resetAboutUs(),
            });

            function animateAboutUs() {
                gsap.fromTo(profileImg,
                    { opacity: 0, x: -50 },
                    { opacity: 1, x: 0, duration: 1, delay: 0.5 } // Adjust delay as needed
                );

                gsap.fromTo(profileText,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1, delay: 0.8 } // Adjust delay as needed
                );
            }

            function resetAboutUs() {
                gsap.set(profileImg, { opacity: 0, x: -50 });
                gsap.set(profileText, { opacity: 0, y: 50 });
            }
        });



        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    onEnter: () => animateCard(card),
                    onEnterBack: () => animateCard(card),
                    onLeave: () => resetCard(card),
                    onLeaveBack: () => resetCard(card),
                });
            });

            function animateCard(card) {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.2
                });
            }

            function resetCard(card) {
                gsap.set(card, { opacity: 0, y: 50 });
            }
        });
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const contactForm = document.querySelector('.contact-form');

    ScrollTrigger.create({
        trigger: '#contact',
        start: 'top 80%', // Adjust as needed
        end: 'bottom 20%', // Adjust as needed
        onEnter: animateContactForm,
        onEnterBack: animateContactForm,
        onLeave: resetContactForm,
        onLeaveBack: resetContactForm,
    });

    function animateContactForm() {
        const contactImage = document.querySelector('.contact-image');
        const formRight = document.querySelector('.form-right');
        const submitBtn = document.querySelector('.submit-btn');

        gsap.fromTo(contactImage,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );

        gsap.fromTo(formRight,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.8 }
        );

        gsap.fromTo(submitBtn,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 1 }
        );
    }

    function resetContactForm() {
        const contactImage = document.querySelector('.contact-image');
        const formRight = document.querySelector('.form-right');
        const submitBtn = document.querySelector('.submit-btn');

        gsap.set(contactImage, { opacity: 0, x: -50 });
        gsap.set(formRight, { opacity: 0, x: 50 });
        gsap.set(submitBtn, { opacity: 0, y: 50 });
    }
});
