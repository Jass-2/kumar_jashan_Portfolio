export const initializeInfiniteScroll = () => {
  // Infinite Scroll animation part1
  const navItems = document.querySelectorAll('.nav-item2');
  
  const toggleSiblingClass = (items, index, offset, className, add) => {
      const sibling = items[index + offset];
      if (sibling) {
          sibling.classList.toggle(className, add);
      }
  };
  navItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
          item.classList.add('hover');
          toggleSiblingClass(navItems, index, -1, 'sibling-close', true);
          toggleSiblingClass(navItems, index, 1, 'sibling-close', true);
          toggleSiblingClass(navItems, index, -2, 'sibling-far', true);
          toggleSiblingClass(navItems, index, 2, 'sibling-far', true);
      });
      
      item.addEventListener('mouseleave', () => {
          item.classList.remove('hover');
          toggleSiblingClass(navItems, index, -1, 'sibling-close', false);
          toggleSiblingClass(navItems, index, 1, 'sibling-close', false);
          toggleSiblingClass(navItems, index, -2, 'sibling-far', false);
          toggleSiblingClass(navItems, index, 2, 'sibling-far', false);
      });
  });
  // Animation infinite scroll part2
  const scrollers = document.querySelectorAll(".scroller");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
  }
  function addAnimation() {
      scrollers.forEach((scroller) => {
          scroller.setAttribute("data-animated", true);
          const scrollerInner = scroller.querySelector(".scroller__inner");
          if (scrollerInner) {
              const scrollerContent = Array.from(scrollerInner.children);
              scrollerContent.forEach((item) => {
                  const duplicatedItem = item.cloneNode(true);
                  duplicatedItem.setAttribute("aria-hidden", true);
                  scrollerInner.appendChild(duplicatedItem);
              });
          }
      });
  }
};
