const serviceData = {
  engineering: {
    title: "Empowering Projects with Engineering Excellence",
    text: "Delivering innovative and reliable engineering and contracting solutions to meet the demands of modern infrastructure and development.",
    images: ["./assets/images/services/hero/Engineering-hero.svg"],
    features: {
      subtitle: "Engineering Excellence",
      title: "Why Choose Our Engineering Services",
      text: "Our engineering services combine innovation, reliability, and expertise to deliver high-quality solutions for modern infrastructure projects. With state-of-the-art equipment and an experienced team, we ensure your project's success.",
    },
    details: {
      "Construction and Maintenance Services":
        "Construction projects including design, detail engineering, installation, and maintenance. Construction, renovation, and maintenance for electromechanical systems, instrumentation, and control systems. Industrial and multistoried building services (Electrical, HVAC, and Plumbing).",
      "Power and Electrical Works":
        "Supply and installation of cables including LV and HV along with civil work. Supply, installation, and maintenance of all types of pumps along with related works. Supply and installation of motor control centers (MCC) for industrial projects and power stations.",
      "Lighting and Telecommunication Systems":
        "Supply and installation of all types of street lighting equipment, highway lighting, station, and sports lighting. Supply and installation of telecommunication systems (telephone exchanges, fiber optic cables).",
      "Specialized Drilling and Automation":
        "Thrust boring and directional boring under paved roads for laying services (cables, water, gas, etc.). Automation systems in collaboration with Siemens.",
      "Fire Safety and Security Solutions":
        "Supply, installation, and maintenance of fire alarm systems, firefighting systems, security systems, and cathodic protection.",
    },
  },
  equipment: {
    title: "Reliable Equipment Leasing Services",
    text: "Offering a wide range of modern equipment for lease, ensuring projects are completed efficiently and on time.",
    images: ["./assets/images/services/hero/Equipment-hero.svg"],
    features: {
      subtitle: "Equipment Leasing",
      title: "Maximize Efficiency with Our Equipment Services",
      text: "We provide access to state-of-the-art equipment, ensuring your projects are executed with precision and reliability. Our flexible leasing terms cater to your specific project needs.",
    },
    details: {
      "Equipment Rental Services":
        "We offer a wide range of new and used equipment for rent to serve different industries. All equipment is well-maintained and ready to work. We provide customized leasing programs to fit any project’s needs. All lease contracts are supported by mobile workshops in addition to our main garage.",
      "Heavy Machinery and Earthmoving Equipment":
        "Excavators, dozers, wheel loaders, backhoe loaders, skid steer loaders, and graders.",
      "Cranes and Lifting Equipment":
        "Mobile cranes, truck-mounted cranes, forklifts, spider lifts, and reach stackers.",
      "Transportation and Tanker Vehicles":
        "Water tankers, sewage tankers, fuel tankers, dump trucks, and half lorries.",
      "Compactors and Specialized Equipment":
        "Garbage compactors, road sweepers, aerial lifts, man lifts, scissor lifts, and low-beds.",
    },
  },
  logistics: {
    title: "Seamless Logistics, Endless Possibilities",
    text: "Optimized logistics solutions for seamless transportation and workforce mobility.",
    images: ["./assets/images/services/hero/Logistics-hero.svg"],
    features: {
      subtitle: "Logistics",
      title: "Streamline Operations with Our Logistics Solutions",
      text: "Our logistics services ensure timely and cost-effective transportation solutions, minimizing downtime and maximizing productivity for your projects.",
    },
    details: {
      "Professional Driver Services":
        "We provide professional and courteous driver services with years of experience. Our services are ideal for restaurants, hotels, private events, and special occasions. All attendants are highly polite to ensure a VIP experience for our clientele.",
      "Workforce Transportation Services":
        "We assist companies and projects by transporting their workforce between worksites and accommodations.",
    },
  },
  sponsorship: {
    title: "Trusted Sponsorship Services",
    text: "Providing sponsorship solutions that enable businesses to operate smoothly in Kuwait and the GCC.",
    images: ["./assets/images/services/hero/Sponsorship-hero.svg"],
    features: {
      subtitle: "Sponsorship",
      title: "Secure Growth with Our Sponsorship Services",
      text: "We offer comprehensive sponsorship solutions that enable businesses to navigate local regulations and thrive in competitive markets.",
    },
    details: {
      "Legal Sponsorship and Business Support":
        "Turquoise enables non-Kuwaiti companies to operate legally in Kuwait by providing consultancy and legal standing. We offer legal support, advice, and assistance with procurement.",
      "Workforce and Personnel Services":
        "Assistance with visas (commercial and residential) and manpower support. Support for transiting personnel and vehicles.",
      "Office and Infrastructure Support":
        "Provision of office space, equipment, and communication lines.",
      "Accommodation and Logistics":
        "Life support services, housing, and other essential facilities.",
    },
  },
  hr: {
    title: "Comprehensive Human Resource Solutions",
    text: "Specialized HR services, including recruitment, workforce management, and skill-building programs tailored to your needs.",
    images: ["./assets/images/services/hero/HR-hero.svg"],
    features: {
      subtitle: "HR Solutions",
      title: "Enhance Workforce Potential with Our HR Services",
      text: "Our HR services are tailored to optimize workforce performance, offering recruitment, training, and management solutions that meet your organizational goals.",
    },
    details: {
      "Workforce Solutions":
        "Permanent recruitment, temporary staffing, contract staffing (outstaffing), and outsourcing. HR, labor safety, and labor legislation consulting.",
      "Skilled and General Labor":
        "Engineers, technicians, laborers, rig operators, welders, carpenters, pipe fitters, construction workers, crane operators, and warehouse personnel.",
      "Technical and Maintenance Roles":
        "Diesel and petrol mechanics, MHE operators, generator mechanics, HVAC technicians, and electricians.",
      "Office and Administrative Support":
        "System administrators, IT specialists, administrative assistants, clerks, secretaries, office support, and retail staff.",
      "Professional Development and Specialized Services":
        "Professional skill testing, executive search & selection, outplacement services, and skill-building programs.",
    },
  },
  import_export: {
    title: "Global Trade Solutions for Your Business",
    text: "Providing seamless import and export services with high-quality materials and efficient logistics to support various industries.",
    images: ["./assets/images/services/hero/importExport-hero.svg"],
    features: {
      subtitle: "Reliable Import & Export Services",
      title: "Why Choose Our Import & Export Services",
      text: "We specialize in sourcing, supplying, and delivering premium materials with a strong global network and expertise in international trade. Our efficient logistics ensure timely and cost-effective solutions for businesses of all sizes.",
    },
    details: {
      "Steel and Aluminum Products":
        "Import and export of high-quality steel and aluminum products, catering to construction, manufacturing, and industrial sectors.",
      "Industrial Raw Materials":
        "Supply of essential industrial materials such as Ferro Silicon (FeSi), Baryte Powder, and Calcium Carbonate Powder for various manufacturing and processing industries.",
      "Construction Material Supply":
        "Sourcing and distribution of top-grade construction materials, ensuring durability and compliance with industry standards.",
    },
  },
};

// Function to dynamically update the hero section
function updateHeroSection(service) {
  const heroTitle = document.getElementById("hero-title");
  const heroText = document.getElementById("hero-text");
  const heroSlider = document.getElementById("hero-slider");

  // Get the selected service data
  const data = serviceData[service];
  console.log(data);

  // Update hero title and text
  heroTitle.textContent = data.title;
  heroText.textContent = data.text;

  // Clear existing slider items
  heroSlider.innerHTML = "";

  // Add new slider items
  data.images.forEach((image) => {
    const li = document.createElement("li");
    li.classList.add("slider-item");

    const figure = document.createElement("figure");
    figure.classList.add("img-holder");
    figure.style.setProperty("--width", "500");
    figure.style.setProperty("--height", "475");

    const img = document.createElement("img");
    img.src = image;
    img.alt = "Hero Banner";
    img.width = 500;
    img.height = 475;
    img.classList.add("img-cover");

    figure.appendChild(img);
    li.appendChild(figure);
    heroSlider.appendChild(li);
  });
}

function updateFeaturesSection(service) {
  const featureSubtitle = document.getElementById("feature-subtitle");
  const featureTitle = document.getElementById("feature-title");
  const featureText = document.getElementById("feature-text");

  // Get the selected service data
  const data = serviceData[service];

  // Update feature subtitle, title, and text
  featureSubtitle.textContent = data.features.subtitle;
  featureTitle.textContent = data.features.title;
  featureText.textContent = data.features.text;
}

function updateProjectSection(service) {
  const data = serviceData[service];

  // Get the existing elements in the HTML
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");
  const accordionContainer = document.getElementById("accordion-container");

  // Update the section title and description
  titleElement.textContent = "WHAT WE DO";
  descriptionElement.textContent = data.text;

  // Clear previous accordions
  if (accordionContainer.innerHTML) {
    accordionContainer.innerHTML = "";
  }

  // Populate accordions dynamically
  let index = 1;
  Object.entries(data.details).forEach(([title, content]) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    accordionItem.innerHTML = `
      <button id="accordion-button-${index}" aria-expanded="false">
        <span class="accordion-title">${title}</span>
        <span class="icon" aria-hidden="true"></span>
      </button>
      <div class="accordion-content">
        <p>${content}</p>
      </div>
    `;

    accordionContainer.appendChild(accordionItem);
    index++;
  });

  // Reattach event listeners for toggling accordion
  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    items.forEach((item) => item.setAttribute("aria-expanded", "false"));

    if (itemToggle === "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("navbarServices.html")
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
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get("service") || "engineering"; // Default to 'engineering'
  updateHeroSection(service);
  updateFeaturesSection(service);
  updateProjectSection(service);

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
});

/*ADD Event listener on multiple elements*/
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/*NAVBAR TOGGLE FOR MOBILE */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**HEADER
 * active header when window scroll down to 100px
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
