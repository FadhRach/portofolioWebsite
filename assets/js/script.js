// SKILL DATA
const skillsData = {
  categories: [
    {
      id: 'web',
      name: 'Web Development',
      languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'NextJS', 'PHP', 'Laravel', 'Python', 'Django', 'TailwindCSS', 'Bootstrap', 'MySQL', 'Supabase'],
      tools: ['Visual Studio Code', 'Git', 'GitHub', 'Vite', 'Postman', 'Vercel']
    },
    {
      id: 'uiux',
      name: 'UI/UX Design',
      languages: ['Design Thinking', 'Prototyping', 'Wireframing', 'Story Board'],
      tools: ['Figma', 'Canva', 'Corel Draw', 'Adobe Photoshop']
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      languages: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Pandas', 'NumPy'],
      tools: ['Visual Studio Code', 'Anaconda', 'Jupyter Notebook', 'Google Colab']
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      languages: ['Flutter', 'Dart', 'Java', 'SQLite', 'Firebase', "MySQL"],
      tools: ['Visual Studio Code', 'Android Studio']
    }
  ]
};

// PORTFOLIO DATA
const portfolioData = {
  categories: [
    { id: 'all', name: 'All Projects' },
    { id: 'website', name: 'Website' },
    { id: 'uiux', name: 'UI/UX Design' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'mobile', name: 'Mobile Development' }
  ],
  
  projects: [
    {
      id: 1,
      name: "Book Store",
      role: "Full Stack Developer",
      category: "website",
      year: 2025,
      description: "BNCC Final Project LNT Back End Bookstore with Laravel and MySQL, covering basic features with CRUD, user authentication with admin and user, book management, and order processing.",
      techStack: ["PHP", "JS", "Laravel", "TailwindCSS", "MySQL"],
      type: "Task",
      image: "assets/image/portfolio/bookstore.png",
      demoUrl: null,
      repoUrl: "https://github.com/FadhRach/FinalProject-BNCC-LNTBackEnd",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 2,
      name: "Self E-Commmerce App",
      role: "Full Stack Developer",
      category: "website",
      year: 2025,
      description: "Currently in progress - A private e-commerce application with user authentication, product catalog, shopping cart, order management, and many other features.",
      techStack: ["PHP", "JS", "Laravel", "NextJS", "Supabase", "TailwindCSS", "Shadcn", "Rest API"],
      type: "Self Project",
      image: "assets/image/portfolio/ecommerce.png",
      demoUrl: null,
      repoUrl: "https://github.com/FadhRach/RND-SELFPROJECT-NEXTLARA",
      hasDemo: false,
      hasRepo: true,
    },
    {
      id: 3,
      name: "Admin Panel Minecraft Store",
      role: "Back End Developer",
      category: "website",
      year: 2025,
      description: "Currently in progress - A back-end admin panel for a Minecraft store with user management, product management, order processing, and analytics data.",
      techStack: ["PHP", "JS", "Laravel", "Node JS", "Next JS", "TailwindCSS", "Flowbite", "Supabase", "Rest API"],
      type: "Freelance",
      image: "assets/image/portfolio/adminpanel.png",
      demoUrl: null,
      repoUrl: null,
      hasDemo: false,
      hasRepo: false
    },
    {
      id: 4,
      name: "Book Management",
      role: "Full Stack Developer",
      category: "website",
      year: 2025,
      description: "BNCC Mid Project LNT Back End Book Management with PHP Native and MySQL, covering basic features with CRUD, user authentication login/register.",
      techStack: ["PHP", "JS", "MySQL", "TailwindCSS"],
      type: "Task",
      image: "assets/image/portfolio/bookmanagement.png",
      demoUrl: null,
      repoUrl: "https://github.com/FadhRach/MidProject-BNCC-LnTBackEnd",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 5,
      name: "Buku",
      role: "UX Designer",
      category: "uiux",
      year: 2025,
      description: "UI/UX design for a digital book reading app with customizable display features, modes, AI book recommendations, and gamification elements. Main focus: increasing interest in reading through an interactive and user-friendly interface.",
      techStack: ["Figma", "User Research", "User Testing", "Report"],
      type: "Competition",
      image: "assets/image/portfolio/Buku.png",
      demoUrl: null,
      repoUrl: null,
      hasDemo: false,
      hasRepo: false,
      figmaUrl: "https://www.figma.com/proto/s7N0IcFbJ95hUc26S5nhSw/Find-it-competition?node-id=365-5118&t=BAV3XiPUElLpXsNH-1&starting-point-node-id=391%3A9447"
    },
    {
      id: 6,
      name: "TekGoHo",
      role: "UI/UX Designer",
      category: "uiux",
      year: 2025,
      description: "A platform for finding on-call technicians that focuses on ease of navigation, a quick booking process, and a clean and responsive display. Key features: technician booking page, license approval, admin dashboard, and balance top-up system. The design prioritizes a user-friendly experience and service efficiency.",
      techStack: ["Figma", "Design System", "User Testing", "User Flow", "Prototyping", "Wireframing", "User Research"],
      type: "Task",
      image: "assets/image/portfolio/tekgoho.png",
      demoUrl: null,
      repoUrl: null,
      hasDemo: false,
      hasRepo: false,
      figmaUrl: "https://www.figma.com/proto/BmOnHNVkDHRdFvFPzgkr3t/TekGoHo-Mobile-Prototype?page-id=0%3A1&node-id=33-2&p=f&viewport=377%2C273%2C0.08&t=68K9hYCXNeB1O5zZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=23%3A169"
    },
    {
      id: 7,
      name: "NusaWarga Landing Page",
      role: "UI/UX Designer",
      category: "uiux",
      year: 2025,
      description: "Redesign of an integrated digital public service platform. Based on the concept of “One Application, One Nation,” the design focuses on ease of access to information, integration of agency data, and a professional appearance. Visual elements such as an interactive map of Indonesia, key features, and testimonials reinforce citizens' trust in the platform.",
      techStack: ["Figma", "Design System", "User Testing", "User Flow", "Prototyping", "Wireframing", "User Research"],
      type: "Task",
      image: "assets/image/portfolio/Nusawarga.png",
      demoUrl: null,
      repoUrl: null,
      hasDemo: false,
      hasRepo: false,
      figmaUrl: "https://www.figma.com/proto/RlVMhCzpBkfJWSUOzGCi5R/HCI-Prototype?page-id=0%3A1&node-id=143-2&viewport=-1284%2C316%2C0.29&t=Rc2EL4uulHwEHOTr-1&scaling=min-zoom&content-scaling=fixed"
    },
    {
      id: 8,
      name: "Fresh Bites",
      role: "UI/UX Designer",
      category: "uiux",
      year: 2025,
      description: "BNCC LNT UI/UX Landing page design for a plant-based healthy food brand. Focus on a clean, minimalist look and appetizing product visuals. Prioritize the user journey from product description and advantages to call-to-action buttons such as “Shop Now” and “Watch Video.” Responsive and easily accessible to all audiences.",
      techStack: ["Figma", "Design System", "User Testing", "User Flow", "Prototyping", "Wireframing", "User Research"],
      type: "Task",
      image: "assets/image/portfolio/freshbites.png",
      demoUrl: null,
      repoUrl: null,
      hasDemo: false,
      hasRepo: false,
      figmaUrl: "https://www.figma.com/proto/MjHAyE3nKzvhdCXM6VKhQk/LnT-UI-UX-BNCC-36-Mid-Project-Fadhlan-Nur-Rachman?page-id=0%3A1&node-id=19-359&viewport=-2476%2C1162%2C0.36&t=rPBYdhU44m7RB59w-1&scaling=min-zoom&content-scaling=fixed"
    },
    {
      id: 9,
      name: "Lembur WJA",
      role: "Full Stack Developer",
      category: "website",
      year: 2024,
      description: "An application designed to streamline a company's internal systems for managing overtime, reports, and overtime rewards, featuring support tools such as location tracking, automatic email notifications upon overtime requests from anywhere, and more.",
      techStack: ["PHP", "JS", "Laravel", "MySQL", "TailwindCSS", "Flowbite"],
      type: "Internship Project",
      image: "assets/image/portfolio/LemburWJA.png",
      demoUrl: null,
      repoUrl: null,
      hasDemo: false,
      hasRepo: false
    },
    {
      id: 10,
      name: "Fault Dashboard WJA",
      role: "Front End Developer",
      category: "website",
      year: 2024,
      description: "An internal website application dashboard to monitor network disruptions and complaint tickets from clients/customers in real time and in a simple manner to view urgent issues so that they can be resolved more quickly.",
      techStack: ["PHP", "JS", "MySQL", "CSS Native", "Bootstrap"],
      type: "Internship Project",
      image: "assets/image/portfolio/dashboardWJA.png",
      demoUrl: null,
      repoUrl: null,
      hasDemo: false,
      hasRepo: false
    },
    {
      id: 11,
      name: "Ecommerce Design",
      role: "Front End Developer",
      category: "website",
      year: 2024,
      description: "A simple e-commerce design template designed for modern online store needs. This template features a responsive layout, clean and user-friendly UI, and simple features and pages such as the homepage, product page, cart, and contact page. It is suitable for use as a basis for developing efficient and visually appealing e-commerce applications.",
      techStack: ["JS", "CSS", "HTML"],
      type: "Self Project",
      image: "assets/image/portfolio/ecommerce-design.png",
      demoUrl: null,
      repoUrl: "https://github.com/FadhRach/E-Commerce-Design",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 12,
      name: "Flexible Facilities",
      role: "Full Stack Developer",
      category: "website",
      year: 2023,
      description: "Flexible Facilities is a web application for borrowing school facilities and infrastructure designed to simplify the process of applying for, approving, and managing facilities. This application helps the Deputy Headmaster for Facilities and Infrastructure and the entire school community to manage the use of facilities efficiently and transparently.",
      techStack: ["PHP", "JS", "Laravel", "MySQL", "TailwindCSS", "Flowbite"],
      type: "Task",
      image: "assets/image/portfolio/flexf.png",
      demoUrl: null,
      repoUrl: "https://github.com/FadhRach/Flexible-Facilities",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 13,
      name: "Plalogisc",
      role: "Full Stack Developer",
      category: "website",
      year: 2023,
      description: "Final project for 11th grade Plalogisc is a web application for borrowing school facilities and infrastructure with basic logic and programming flow, as well as simple features such as CRUD, etc.",
      techStack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      type: "Task",
      image: "assets/image/portfolio/Plalogisc.png",
      demoUrl: null,
      repoUrl: "https://github.com/FadhRach/Tugas-Akhir-Kelas-11",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 14,
      name: "Galery App Flutter",
      role: "Full Stack Developer",
      category: "mobile",
      year: 2023,
      description: "Simple gallery app using Flutter with CRUD features and camera connectivity. This app allows users to take photos, view, and manage their gallery with a clean and responsive interface.",
      techStack: ["Dart", "Flutter", "SQLite"],
      type: "Task",
      image: "assets/image/portfolio/galleryappflutter.png",
      demoUrl: null,
      repoUrl: "https://github.com/FadhRach/GalleryAppFlutter",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 15,
      name: "Classification of Job Vulnerability to AI",
      role: "Data Scientist",
      category: "ai",
      year: 2025,
      description: "Gemastik Competition Pre-Eliminary creating a model where many variables are created and using a combined pretrained model from multilingual sentiment analysis for work comments and also bilstm sbert for classification of datasets that have been processed for training",
      techStack: ["Python", "NumPy", "Pandas", "Matplotlib, PyTorch, TensorFlow, Scikit-Learn"],
      type: "Competition",
      image: "assets/image/portfolio/jobvulnerability.png",
      demoUrl: null,
      repoUrl: "https://binusianorg-my.sharepoint.com/personal/fadhlan_rachman_binus_ac_id/_layouts/15/guestaccess.aspx?share=EShgRK5SEFJMkQImZy_abHwBxML4llxvDXwypjVVUS2Adw&e=481raQ",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 16,
      name: "Commodity Price Prediction",
      role: "Data Scientist",
      category: "ai",
      year: 2025,
      description: "This assignment involves creating a mathematical model that has been studied in the scientific computing course, where we can predict the production of bags from the EGIER company. Here, we also have to determine when the bag warehouse will be full using mathematical models that have been studied, such as linear regression.",
      techStack: ["Python", "NumPy", "Pandas", "Matplotlib"],
      type: "Competition",
      image: "assets/image/portfolio/datavidia.png",
      demoUrl: null,
      repoUrl: "https://binusianorg-my.sharepoint.com/personal/fadhlan_rachman_binus_ac_id/_layouts/15/guestaccess.aspx?share=EbRu6-C3XJVNta79JZU6gp4B3EOx5r0XY3fIW5U1ilFjyg",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 17,
      name: "Prediction Production Bag EGIER",
      role: "Data Scientist and Student",
      category: "ai",
      year: 2025,
      description: "This assignment involves creating a mathematical model that has been studied in the scientific computing course, where we can predict the production of bags from the EGIER company. Here, we also have to determine when the bag warehouse will be full using mathematical models that have been studied, such as linear regression.",
      techStack: ["Python", "NumPy", "Pandas", "Matplotlib"],
      type: "Task",
      image: "assets/image/portfolio/AOLSC.png",
      demoUrl: null,
      repoUrl: "https://github.com/FadhRach/SC-AOL-PrediksiGudangEgier",
      hasDemo: false,
      hasRepo: true
    },
    {
      id: 18,
      name: "AIDeathon MoodyVasi",
      role: "Researcher",
      category: "ai",
      year: 2025,
      description: "Moodyvasi is an AI-powered mood tracking app concept developed for the AIdeathon competition. It analyzes daily mood inputs and suggests personalized motivational content to support mental well-being and boost productivity.",
      techStack: ["Python", "NumPy", "Pandas", "Matplotlib"],
      type: "Competition",
      image: "assets/image/portfolio/moodyvasi.png",
      demoUrl: null,
      repoUrl: "https://binusianorg-my.sharepoint.com/personal/fadhlan_rachman_binus_ac_id/_layouts/15/guestaccess.aspx?share=ESsTlLdZq_5BuQNwBoSof4wBNqY-Wpmy3_Xft62dnXd6cg",
      hasDemo: false,
      hasRepo: true
    },
  ]
};

// FUNGSI PORTFOLIO KATEGORI
function generateSkillsCategories() {
  const categoriesContainer = document.getElementById('skills-categories');
  if (!categoriesContainer) return;

  const buttonsHTML = skillsData.categories.map((category, index) => 
    `<button class="px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium text-gray-400 bg-neutral-800 border border-neutral-700 hover:text-white hover:border-violet-600 transition-all duration-300 cursor-pointer text-sm md:text-base ${index === 0 ? 'text-white bg-gradient-to-r from-cyan-400 to-violet-600' : ''}" data-category="${category.id}">${category.name}</button>`
  ).join('');
  
  categoriesContainer.innerHTML = buttonsHTML;
}

// FUNGSI PORTFOLIO LANGUAGE
function generateLanguages(categoryId = 'web') {
  const languagesContainer = document.getElementById('languages-grid');
  if (!languagesContainer) return;

  const category = skillsData.categories.find(cat => cat.id === categoryId);
  if (!category) return;

  const languagesHTML = category.languages.map(lang => 
    `<span class="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm font-medium border border-neutral-700 hover:border-violet-600 hover:text-white transition-all duration-300 cursor-pointer">${lang}</span>`
  ).join('');
  
  languagesContainer.innerHTML = languagesHTML;
}

// FUNGSI PORTFOLIO TOOLS
function generateTools(categoryId = 'web') {
  const toolsContainer = document.getElementById('tools-grid');
  if (!toolsContainer) return;

  const category = skillsData.categories.find(cat => cat.id === categoryId);
  if (!category) return;

  const toolsHTML = category.tools.map(tool => 
    `<span class="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm font-medium border border-neutral-700 hover:border-violet-600 hover:text-white transition-all duration-300 cursor-pointer">${tool}</span>`
  ).join('');
  
  toolsContainer.innerHTML = toolsHTML;
}

// FUNGSI SKILL FILTER
function initSkillsFilter() {
  const categoryButtons = document.querySelectorAll('[data-category]');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      // Update active button
      categoryButtons.forEach(btn => {
        btn.className = 'px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium text-gray-400 bg-neutral-800 border border-neutral-700 hover:text-white hover:border-cyan-400/50 transition-all duration-300 cursor-pointer text-sm md:text-base';
      });
      button.className = 'px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-400 to-violet-600 border-transparent shadow-lg transition-all duration-300 cursor-pointer text-sm md:text-base';
      
      // Update Languages & Tools based on selected category
      generateLanguages(category);
      generateTools(category);
    });
  });
}

// FUNGSI SKILL SECTION
function initSkillsSection() {
  generateSkillsCategories();
  generateLanguages('web');
  generateTools('web');
  initSkillsFilter();
}

//CAROUSEL PORTFOLIO =======
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link, .nav-btn");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        if (link.classList.contains('nav-link')) {
            link.classList.remove("text-white", "font-bold");
            link.classList.add("text-gray-300");
        } else if (link.classList.contains('nav-btn')) {
            link.classList.remove("text-white");
            link.classList.add("text-gray-400");
        }
        
        if (link.getAttribute("href") === `#${current}`) {
            if (link.classList.contains('nav-link')) {
                link.classList.remove("text-gray-300");
                link.classList.add("text-white", "font-bold");
            } else if (link.classList.contains('nav-btn')) {
                link.classList.remove("text-gray-400");
                link.classList.add("text-white");
            }
        }
    });
});

function initAboutCarousel() {
  const aboutImages = [
    "assets/image/foto1.png",
    "assets/image/foto2.JPG",
    "assets/image/foto3.png",
    "assets/image/fadh1.jpg",
    "assets/image/fadh2.jpg",
  ];
  let aboutIndex = 0;
  const aboutImg = document.getElementById("about-carousel-img");
  if (!aboutImg) return;

  function showAboutImage(idx) {
    aboutImg.src = aboutImages[idx];
  }

  showAboutImage(aboutIndex);

  setInterval(() => {
    aboutIndex = (aboutIndex + 1) % aboutImages.length;
    showAboutImage(aboutIndex);
  }, 3000);
}

// FUNGSI SCROLL ANIMASI
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('show');
        }, delay);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll, .skill-card, .animate-fade-left, .animate-fade-right');
  animatedElements.forEach((el, index) => {
    if (el.classList.contains('skill-card')) {
      el.dataset.delay = index * 100;
    }
    observer.observe(el);
  });
}

// FUNGSI PORTFOLIO SECTION
function initPortfolioSection() {
  console.log('Initializing Portfolio Section...');
  console.log('Portfolio Data:', portfolioData);

  let currentPortfolioSlide = 0;
  let filteredProjects = portfolioData.projects;
  
  function getCardsPerSlide() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;   
    return 3;                                  
  }

  function getTotalSlides() {
    return Math.ceil(filteredProjects.length / getCardsPerSlide());
  }

  function getCategoryColor(category) {
    const colors = { website: 'violet', uiux: 'pink', ai: 'emerald', mobile: 'cyan' };
    return colors[category] || 'violet';
  }

  function getCategoryGradient(category) {
    const gradients = {
      website: 'from-violet-500 to-purple-600',
      uiux: 'from-pink-500 to-rose-600',
      ai: 'from-emerald-500 to-green-600',
      mobile: 'from-cyan-500 to-blue-600'
    };
    return gradients[category] || 'from-violet-500 to-purple-600';
  }

  function generatePortfolioCategories() {
    const categoriesContainer = document.getElementById('portfolio-categories');
    if (!categoriesContainer) {
      console.log('Portfolio categories container not found!');
      return;
    }

    const buttonsHTML = portfolioData.categories.map((category, index) => 
      `<button class="px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium text-gray-400 bg-neutral-800 border border-neutral-700 hover:text-white hover:border-cyan-400/50 transition-all duration-300 cursor-pointer text-sm md:text-base ${index === 0 ? 'text-white bg-gradient-to-r from-cyan-400 to-violet-600 border-transparent shadow-lg' : ''}" data-portfolio-category="${category.id}">${category.name}</button>`
    ).join('');
    
    categoriesContainer.innerHTML = buttonsHTML;
    console.log('Portfolio categories generated');
  }

  function generatePortfolioSlides() {
    const portfolioContainer = document.getElementById('portfolio-container');
    if (!portfolioContainer) {
      console.log('Portfolio container not found!');
      return;
    }

    const cardsPerSlide = getCardsPerSlide();
    const totalSlides = getTotalSlides();
    let slidesHTML = '';

    for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
      const startIndex = slideIndex * cardsPerSlide;
      const endIndex = Math.min(startIndex + cardsPerSlide, filteredProjects.length);
      const projectsInSlide = filteredProjects.slice(startIndex, endIndex);

      let gridClass = 'grid-cols-1';
      if (cardsPerSlide === 2) gridClass = 'grid-cols-1 md:grid-cols-2';
      if (cardsPerSlide === 3) gridClass = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

      slidesHTML += `
        <div class="w-full flex-shrink-0 px-4 py-4" data-slide="${slideIndex}">
          <div class="grid ${gridClass} gap-6 md:gap-8">
            ${projectsInSlide.map(project => `
              <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-4 md:p-6 border border-neutral-700 hover:border-${getCategoryColor(project.category)}-500/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                
                <div class="w-full h-40 md:h-48 bg-gradient-to-br ${getCategoryGradient(project.category)} rounded-xl mb-4 overflow-hidden group">
                  <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://placehold.co/600x300/${getCategoryColor(project.category) === 'violet' ? '6366f1' : getCategoryColor(project.category) === 'pink' ? 'ec4899' : getCategoryColor(project.category) === 'emerald' ? '10b981' : '06b6d4'}/fff?text=${encodeURIComponent(project.name)}'">
                </div>

                <div class="mb-3 md:mb-4">
                  <h3 class="text-lg md:text-xl font-bold text-white mb-2">${project.name}</h3>
                  <div class="flex items-center gap-2 text-xs md:text-sm text-gray-400 flex-wrap">
                    <span class="px-2 md:px-3 py-1 bg-${getCategoryColor(project.category)}-500/20 text-${getCategoryColor(project.category)}-300 rounded-full text-xs">${project.type}</span>
                    <span class="hidden sm:inline">•</span>
                    <span class="hidden sm:inline text-xs md:text-sm">${project.role}</span>
                    <span>•</span>
                    <span class="text-xs md:text-sm">${project.year}</span>
                  </div>
                </div>

                <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                  ${project.description}
                </p>

                <div class="flex flex-wrap gap-1 md:gap-2 mb-4">
                  ${project.techStack.slice(0, window.innerWidth < 768 ? 3 : 4).map(tech => `
                    <span class="px-2 md:px-3 py-1 bg-neutral-700/50 text-gray-300 rounded-full text-xs border border-neutral-600">
                      ${tech}
                    </span>
                  `).join('')}
                  ${project.techStack.length > (window.innerWidth < 768 ? 3 : 4) ? `<span class="px-2 md:px-3 py-1 bg-neutral-700/50 text-gray-400 rounded-full text-xs">+${project.techStack.length - (window.innerWidth < 768 ? 3 : 4)}</span>` : ''}
                </div>

                <div class="flex gap-2 md:gap-3">
                  ${project.hasDemo ? `
                    <a href="${project.demoUrl}" target="_blank" class="flex-1 bg-${getCategoryColor(project.category)}-500/20 hover:bg-${getCategoryColor(project.category)}-500/30 text-${getCategoryColor(project.category)}-300 py-2 md:py-2.5 px-3 md:px-4 rounded-lg text-center text-xs md:text-sm font-medium transition-colors duration-300 border border-${getCategoryColor(project.category)}-500/30">
                      Demo
                    </a>
                  ` : ''}
                  
                  ${project.hasRepo ? `
                    <a href="${project.repoUrl}" target="_blank" class="flex-1 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 py-2 md:py-2.5 px-3 md:px-4 rounded-lg text-center text-xs md:text-sm font-medium transition-colors duration-300 border border-gray-500/30">
                      Code
                    </a>
                  ` : ''}
                  
                  ${project.figmaUrl ? `
                    <a href="${project.figmaUrl}" target="_blank" class="flex-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 py-2 md:py-2.5 px-3 md:px-4 rounded-lg text-center text-xs md:text-sm font-medium transition-colors duration-300 border border-pink-500/30">
                      Design
                    </a>
                  ` : ''}
                  
                  ${!project.hasDemo && !project.hasRepo && !project.figmaUrl ? `
                    <div class="flex-1 bg-gray-500/10 text-gray-500 py-2 md:py-2.5 px-3 md:px-4 rounded-lg text-center text-xs md:text-sm cursor-not-allowed">
                      Private
                    </div>
                  ` : ''}
                </div>

                <!-- Category-specific hover effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-${getCategoryColor(project.category)}-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    portfolioContainer.innerHTML = slidesHTML;
    console.log(`Generated ${totalSlides} slides with ${filteredProjects.length} projects`);
  }

  function updatePortfolioCarousel() {
    const portfolioContainer = document.getElementById('portfolio-container');
    if (!portfolioContainer) return;

    generatePortfolioSlides();
    portfolioContainer.style.transform = `translateX(-${currentPortfolioSlide * 100}%)`;
  }

  function filterPortfolioProjects(categoryId) {
    if (categoryId === 'all') {
      filteredProjects = portfolioData.projects;
    } else {
      filteredProjects = portfolioData.projects.filter(project => project.category === categoryId);
    }
    currentPortfolioSlide = 0;
    updatePortfolioCarousel();
  }

  function initPortfolioNavigation() {
    const prevBtn = document.getElementById('portfolio-prev');
    const nextBtn = document.getElementById('portfolio-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const totalSlides = getTotalSlides();
        currentPortfolioSlide = currentPortfolioSlide === 0 ? totalSlides - 1 : currentPortfolioSlide - 1;
        updatePortfolioCarousel();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const totalSlides = getTotalSlides();
        currentPortfolioSlide = currentPortfolioSlide === totalSlides - 1 ? 0 : currentPortfolioSlide + 1;
        updatePortfolioCarousel();
      });
    }
  }

  function initPortfolioFilter() {
    const categoryButtons = document.querySelectorAll('[data-portfolio-category]');

    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-portfolio-category');
        
        categoryButtons.forEach(btn => {
          btn.className = 'px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium text-gray-400 bg-neutral-800 border border-neutral-700 hover:text-white hover:border-cyan-400/50 transition-all duration-300 cursor-pointer text-sm md:text-base';
        });
        button.className = 'px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-400 to-violet-600 border-transparent shadow-lg transition-all duration-300 cursor-pointer text-sm md:text-base';
        
        filterPortfolioProjects(category);
      });
    });
  }

  function handleResize() {
    updatePortfolioCarousel();
  }

  generatePortfolioCategories();
  updatePortfolioCarousel();
  initPortfolioNavigation();
  initPortfolioFilter();
  
  window.addEventListener('resize', handleResize);
}

// LOAD SEMUA
document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM Content Loaded');
  initAboutCarousel();
  initScrollAnimations();
  initSkillsSection();
  initPortfolioSection();
});