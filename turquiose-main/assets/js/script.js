"use strict";

window.onload = function() {
  // Reset the form fields when the page loads
  document.getElementById("myForm").reset();
};

/* ADD Event Listener on Multiple Elements */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/* NAVBAR TOGGLE FOR MOBILE */
document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".feature");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.remove("hidden");
          section.classList.add("animate__animated", "animate__fadeIn");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold if needed
  );

  observer.observe(section);

  fetch("navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load navbar.html");
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector("#navbar-placeholder").innerHTML = data;

      const navbar = document.querySelector("[data-navbar]");
      const navTogglers = document.querySelectorAll("[data-nav-toggler]");
      const overlay = document.querySelector("[data-overlay]");

      const toggleNavbar = function () {
        console.log("Navbar toggled!");
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("nav-active");
      };

      addEventOnElements(navTogglers, "click", toggleNavbar);
    })
    .catch((error) => console.error("Error including navbar:", error));

    // feather.replace();
});

/* HEADER ACTIVE ON SCROLL */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/* SLIDER */
const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    if (sliderContainer.children.length > 0) {
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    }
  };

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sliderContainer.children.length - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  };
  sliderNextBtn.addEventListener("click", slideNext);

  const slidePrev = function () {
    const slideStart = currentSlidePos <= 0;

    if (slideStart) {
      currentSlidePos = sliderContainer.children.length - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  };
  sliderPrevBtn.addEventListener("click", slidePrev);

  // Hide buttons if there are not enough slides
  const hideButtonsIfNeeded = function () {
    if (sliderContainer.children.length <= 1) {
      sliderNextBtn.style.display = "none";
      sliderPrevBtn.style.display = "none";
    }
  };

  // Initial setup
  moveSliderItem();
  hideButtonsIfNeeded();
};

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}

/* ACCORDION ABOUT SECTION */
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-accordion-btn]")) {
    const currentAccordion = e.target.closest("[data-accordion]");
    const allAccordions = document.querySelectorAll("[data-accordion]");

    allAccordions.forEach((accordion) => {
      if (accordion !== currentAccordion) {
        accordion.classList.remove("expanded");
      }
    });

    currentAccordion.classList.toggle("expanded");
  }
});

/* COUNTDOWN ANIMATION FOR STATS */
document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load footer.html");
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector("#footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error including footer:", error));

  const counters = document.querySelectorAll(".card-text .h1");

  const animateCounter = (element, target) => {
    let count = 0;
    const speed = 100; // Adjust speed to control the counting speed

    const updateCounter = () => {
      if (count < target) {
        count += Math.ceil(target / speed);
        if (count > target) count = target;
        element.textContent = count;
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  };

  const handleScroll = () => {
    counters.forEach((counter) => {
      const rect = counter.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible && !counter.classList.contains("counted")) {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        animateCounter(counter, target);
        counter.classList.add("counted");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger check on initial load
});


const form = document.getElementById('myForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});