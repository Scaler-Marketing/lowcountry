document.querySelectorAll('.home-amenities_collection-item').forEach(item => {
  if (getComputedStyle(item).display === 'none' || item.style.visibility === 'hidden') {
    item.remove(); // Remove the element from the DOM
  }
});
