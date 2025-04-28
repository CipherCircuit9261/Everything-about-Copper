// Scroll to next section when "Learn More" button is clicked
const scrollDownBtn = document.getElementById('scrollDownBtn');
const propertiesSection = document.getElementById('properties');

scrollDownBtn.addEventListener('click', () => {
  propertiesSection.scrollIntoView({ behavior: 'smooth' });
});

// Highlight navbar links while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-content a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


//code written by Aprameyan Krishnan Anantha otherwise known as CipherCircuit9261.
