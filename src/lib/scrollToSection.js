export function scrollToSection(e, sectionId) {
  e.preventDefault();
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
    // Update URL without causing a page jump
    window.history.pushState(null, '', sectionId);
  }
}