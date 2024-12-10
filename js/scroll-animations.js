export const initializeScrollAnimations = () => {
    console.log("Initializing scroll animations");
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    
    const links = document.querySelectorAll(".scroll");
    function scrollLink(e) {
        e.preventDefault();
        const selectedLink = e.currentTarget.hash;
        gsap.to(window, { duration: 1, scrollTo: { y: selectedLink, offsetY: 100 } });
    }
    links.forEach((link) => {
        link.addEventListener("click", scrollLink);
    });
};
export const initializeMainPageAnimations = () => {
    console.log("Initializing main page animations");
    
    // Ensure DOM is loaded before initializing animations
    const initAnimations = () => {
        // PFP Animation
        if (document.querySelector('.pfp')) {
            gsap.fromTo('.pfp', {
                x: "50vw",  
            }, {
                x: "0",  
                delay: .5,
                duration: 1,
                scrollTrigger: {
                    trigger: '.content-gsap-right',
                    start: "top 80%",  
                    end: "top 30%",  
                    toggleActions: "play none none reverse",
                    markers: false
                }
            });
        }
        // Player Animation
        if (document.querySelector('.player')) {
            gsap.from('.player', {
                scrollTrigger: {
                    trigger: '.player',
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                },
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            });
        }
        // Projects Animation
        const projects = document.querySelectorAll('.projects');
        projects.forEach((project, index) => {
            gsap.from(project, {
                scrollTrigger: {
                    trigger: project,
                    start: 'top bottom',
                    end: 'top center',
                    toggleActions: 'play none none reverse',
                    scrub: 1
                },
                y: 180,
                opacity: 0,
                duration: 1.5,
                delay: index * 0.5,
                ease: 'power1.out'
            });
        });
        // About Me Animations
        if (document.querySelector('.about-me-section4')) {
            gsap.from('.about-me-image', {
                scrollTrigger: {
                    trigger: '.about-me-section4',
                    start: 'top 70%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                },
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            });
            gsap.from('.about-me-text', {
                scrollTrigger: {
                    trigger: '.about-me-section4',
                    start: 'top 70%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                },
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            });
        }
        // Skills Animation
        if (document.querySelector('.cloneable')) {
            gsap.from('.cloneable', {
                scrollTrigger: {
                    trigger: '.cloneable',
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            });
        }
        // Contact Form Animation
        if (document.querySelector('#contact-form')) {
            gsap.from('#contact-form', {
                scrollTrigger: {
                    trigger: '#contact-form',
                    start: 'top 75%',
                    end: 'top 25%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                duration: 2,
                ease: 'power2.out'
            });
        }
    };
    // Initialize animations when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }
};
export const initializeCaseStudyAnimations = () => {
    const caseStudySection = document.querySelector('.case-study');
    if (caseStudySection) {
        gsap.from('.banner-image', {
            scrollTrigger: {
                trigger: '.banner',
                start: 'top center',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });
        gsap.from('.case-study h2:first-of-type, .case-study p:first-of-type', {
            scrollTrigger: {
                trigger: '.case-study',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
        gsap.from('.case-study h2:nth-of-type(2), .case-study p:nth-of-type(2)', {
            scrollTrigger: {
                trigger: '.case-study h2:nth-of-type(2)',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
        gsap.from('.case-study h2:nth-of-type(3), .case-study p:nth-of-type(3)', {
            scrollTrigger: {
                trigger: '.case-study h2:nth-of-type(3)',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power2.out'
            });
        });
    }
};