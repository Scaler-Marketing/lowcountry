document.querySelectorAll('.faq_cms_item').forEach(item => {
  if (getComputedStyle(item).display === 'none') {
    item.remove(); // Remove the hidden item from the DOM
  }
});
