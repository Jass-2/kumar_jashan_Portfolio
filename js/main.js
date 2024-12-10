import { initializeNavigation } from './navigation.js';
import { initializePlayer } from './player.js';
import { 
    initializeScrollAnimations, 
    initializeMainPageAnimations, 
    initializeCaseStudyAnimations 
} from './scroll-animations.js';
import { initializeContactForm } from './contact-form.js';
import { initializeInfiniteScroll } from './infinite-scroll.js';

(() => {
    console.log("IIFE Fired");

    // Initialize common features
    initializeNavigation();
    initializePlayer();
    initializeScrollAnimations();
    initializeContactForm();
    initializeInfiniteScroll();
    // Initialize page-specific animations
    const isCaseStudyPage = document.querySelector('.case-study') !== null;
    
    if (isCaseStudyPage) {
        console.log("Initializing case study animations");
        initializeCaseStudyAnimations();
    } else {
        console.log("Initializing main page animations");
        initializeMainPageAnimations();
    }
})();