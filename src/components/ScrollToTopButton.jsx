import { useState, useEffect } from 'react';

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-white rounded-full 
                  shadow-lg flex items-center justify-center transition-all 
                  ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;