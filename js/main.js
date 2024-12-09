(() => {


    //burger-con
    console.log("IIFE Fired");
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const hamburgerTablet = document.querySelector('#button-tablet');


    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
    });

    hamburgerTablet.addEventListener("click", () => {
        hamburgerTablet.classList.toggle("expanded");
        navMenu.classList.toggle("active-tablet");
        
    });

    // document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    //     hamburger.classList.remove("active");
    //     navMenu.classList.remove("active");
    // }));
    



//Video section

const player = new Plyr('video');






// scroll animation
//scrolling link
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




// Send Button
// Get the form element using the correct ID
document.getElementById("contact_form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    const button = document.getElementById("send-button");
    
    // Add transition properties for smooth animation
    button.style.transition = "all 0.3s ease";
    
    // Button animation on submit
    button.style.transform = "scale(1.1)";
    button.style.background = "linear-gradient(to top right, #34d399, #10b981)";
    button.value = "Sent!";
    // Reset button state after animation
    setTimeout(() => {
        button.style.transform = "scale(1)";
        button.style.background = "linear-gradient(to top right, #dbc1fe 10%, #baa4eb 55.52%, #181890 100%)";
        button.value = "Send";
    }, 1500);
    // Simulate form submission
    // setTimeout(() => {
    //     alert("Form submitted successfully!");
        
    // }, 200);
});
// Add click event listener to the submit button since it's outside the form
document.getElementById("send-button").addEventListener("click", function(e) {
    // Trigger the form submission when the button is clicked
    document.getElementById("contact_form").dispatchEvent(new Event("submit"));
});




})();
