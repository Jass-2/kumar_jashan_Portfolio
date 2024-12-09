(() => {

    
    // Select all .nav-item elements
    const navItems = document.querySelectorAll('.nav-item2');
    // Helper function to add/remove a class to a sibling at a given offset
    const toggleSiblingClass = (items, index, offset, className, add) => {
      const sibling = items[index + offset];
      if (sibling) {
        sibling.classList.toggle(className, add);
      }
    };
    // Event listeners to toggle classes on hover
    navItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('hover'); // Add .hover to current item
        // Toggle classes for siblings
        toggleSiblingClass(navItems, index, -1, 'sibling-close', true); // Previous sibling
        toggleSiblingClass(navItems, index, 1, 'sibling-close', true);  // Next sibling
        toggleSiblingClass(navItems, index, -2, 'sibling-far', true);   // Previous-previous sibling
        toggleSiblingClass(navItems, index, 2, 'sibling-far', true);    // Next-next sibling
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hover'); // Remove .hover from current item
        // Toggle classes for siblings
        toggleSiblingClass(navItems, index, -1, 'sibling-close', false); // Previous sibling
        toggleSiblingClass(navItems, index, 1, 'sibling-close', false);  // Next sibling
        toggleSiblingClass(navItems, index, -2, 'sibling-far', false);   // Previous-previous sibling
        toggleSiblingClass(navItems, index, 2, 'sibling-far', false);    // Next-next sibling
      });
    });


//    Animation infinite scroll

    const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

})();
