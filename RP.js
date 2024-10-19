function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const texts = [
    "Aspiring Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Tech Enthusiast"
  ];
  
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const textElement = document.getElementById("section_text_p2");
  const typingSpeed = 100; // Speed of typing each character
  const backspaceSpeed = 50; // Speed of deleting each character
  const pauseBetweenWords = 2000; // Pause before typing next word
  
  function typeText() {
    const currentText = texts[currentIndex];
    
    // Add or remove characters depending on whether we're typing or deleting
    if (isDeleting) {
      charIndex--;
      textElement.textContent = currentText.substring(0, charIndex);
    } else {
      charIndex++;
      textElement.textContent = currentText.substring(0, charIndex);
    }
  
    // Switch to deleting mode once typing is complete
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeText, pauseBetweenWords); // Wait before starting to delete
    }
    // Switch to typing the next word once deleting is complete
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length; // Move to the next word
      setTimeout(typeText, typingSpeed);
    }
    else {
      // Adjust typing or backspacing speed
      const delay = isDeleting ? backspaceSpeed : typingSpeed;
      setTimeout(typeText, delay);
    }
  }
  
  // Start typing when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, typingSpeed);
  });
  