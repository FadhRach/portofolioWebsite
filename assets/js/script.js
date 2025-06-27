// Skills Data - Keep existing skills data
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
      languages: ['Flutter', 'Dart', 'Java', 'SQLite', 'Firebase'],
      tools: ['Visual Studio Code', 'Android Studio']
    }
  ]
};

// DUMMY PORTFOLIO DATA - LANGSUNG DI SCRIPT.JS
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
      image: "assets/image/bookstore.png",
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
      image: "assets/image/ecommerce.png",
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
      image: "assets/image/adminpanel.png",
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
      image: "assets/image/bookmanagement.png",
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
      techStack: ["Figma", "User Research", "User Testing"],
      type: "Competition",
      image: "assets/image/Buku.png",
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
      image: "assets/image/TekGoHo.png",
      demoUrl: null,
      repoUrl: null,
      hasDemo: false,
      hasRepo: false,
      figmaUrl: "https://figma.com/design/healthcare-dashboard"
    },
    {
      id: 7,
      name: "Chat App",
      role: "Full Stack Developer",
      category: "website",
      year: 2023,
      description: "Real-time chat application with user authentication, file sharing, and group messaging features.",
      techStack: ["React", "Socket.io", "Express", "MongoDB"],
      type: "Self Project",
      image: "assets/image/Buku1.png",
      demoUrl: "https://chat-app-demo.com",
      repoUrl: "https://github.com/username/chat-app",
      hasDemo: true,
      hasRepo: true
    },
  ]
};

// Generate Skills Categories Buttons
function generateSkillsCategories() {
  const categoriesContainer = document.getElementById('skills-categories');
  if (!categoriesContainer) return;

  const buttonsHTML = skillsData.categories.map((category, index) => 
    `<button class="px-6 py-3 rounded-lg font-medium text-gray-400 bg-neutral-800 border border-neutral-700 hover:text-white hover:border-violet-600 transition-all duration-300 cursor-pointer ${index === 0 ? 'text-white bg-gradient-to-r from-cyan-400 to-violet-600' : ''}" data-category="${category.id}">${category.name}</button>`
  ).join('');
  
  categoriesContainer.innerHTML = buttonsHTML;
}

// Generate Languages & Frameworks based on category
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

// Generate Tools & Technologies based on category
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

// Skills Category Filter
function initSkillsFilter() {
  const categoryButtons = document.querySelectorAll('[data-category]');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      // Update active button
      categoryButtons.forEach(btn => {
        btn.className = 'px-6 py-3 rounded-xl font-medium text-gray-400 bg-neutral-800 border border-neutral-700 hover:text-white hover:border-cyan-400/50 transition-all duration-300 cursor-pointer';
      });
      button.className = 'px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-400 to-violet-600 border-transparent shadow-lg transition-all duration-300 cursor-pointer';
      
      // Update Languages & Tools based on selected category
      generateLanguages(category);
      generateTools(category);
    });
  });
}

// Initialize Skills Section
function initSkillsSection() {
  generateSkillsCategories();
  generateLanguages('web');
  generateTools('web');
  initSkillsFilter();
}

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
    "assets/image/foto4.png"
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

// Portfolio Functions
function initPortfolioSection() {
  console.log('Initializing Portfolio Section...');
  console.log('Portfolio Data:', portfolioData);

  let currentPortfolioSlide = 0;
  let filteredProjects = portfolioData.projects;
  const CARDS_PER_SLIDE = 2; // Balik ke 2 cards per slide

  function getTotalSlides() {
    return Math.ceil(filteredProjects.length / CARDS_PER_SLIDE);
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
      `<button class="px-6 py-3 rounded-xl font-medium text-gray-400 bg-neutral-800 border border-neutral-700 hover:text-white hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${index === 0 ? 'text-white bg-gradient-to-r from-cyan-400 to-violet-600 border-transparent shadow-lg' : ''}" data-portfolio-category="${category.id}">${category.name}</button>`
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

    const totalSlides = getTotalSlides();
    let slidesHTML = '';

    for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
      const startIndex = slideIndex * CARDS_PER_SLIDE;
      const endIndex = Math.min(startIndex + CARDS_PER_SLIDE, filteredProjects.length);
      const projectsInSlide = filteredProjects.slice(startIndex, endIndex);

      slidesHTML += `
        <div class="w-full flex-shrink-0 px-4 py-4" data-slide="${slideIndex}">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${projectsInSlide.map(project => `
              <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-6 border border-neutral-700 hover:border-${getCategoryColor(project.category)}-500/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                
                <div class="w-full h-48 bg-gradient-to-br ${getCategoryGradient(project.category)} rounded-xl mb-4 overflow-hidden group">
                  <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://placehold.co/600x300/${getCategoryColor(project.category) === 'violet' ? '6366f1' : getCategoryColor(project.category) === 'pink' ? 'ec4899' : getCategoryColor(project.category) === 'emerald' ? '10b981' : '06b6d4'}/fff?text=${encodeURIComponent(project.name)}'">
                </div>

                <div class="mb-4">
                  <h3 class="text-lg font-bold text-white mb-2">${project.name}</h3>
                  <div class="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
                    <span class="px-3 py-1 bg-${getCategoryColor(project.category)}-500/20 text-${getCategoryColor(project.category)}-300 rounded-full text-xs">${project.type}</span>
                    <span class="hidden sm:inline">•</span>
                    <span class="hidden sm:inline">${project.role}</span>
                    <span>•</span>
                    <span>${project.year}</span>
                  </div>
                </div>

                <p class="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  ${project.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                  ${project.techStack.slice(0, 4).map(tech => `
                    <span class="px-3 py-1 bg-neutral-700/50 text-gray-300 rounded-full text-xs border border-neutral-600">
                      ${tech}
                    </span>
                  `).join('')}
                  ${project.techStack.length > 4 ? `<span class="px-3 py-1 bg-neutral-700/50 text-gray-400 rounded-full text-xs">+${project.techStack.length - 4}</span>` : ''}
                </div>

                <div class="flex gap-3">
                  ${project.hasDemo ? `
                    <a href="${project.demoUrl}" target="_blank" class="flex-1 bg-${getCategoryColor(project.category)}-500/20 hover:bg-${getCategoryColor(project.category)}-500/30 text-${getCategoryColor(project.category)}-300 py-2.5 px-4 rounded-lg text-center text-sm font-medium transition-colors duration-300 border border-${getCategoryColor(project.category)}-500/30">
                      Demo
                    </a>
                  ` : ''}
                  
                  ${project.hasRepo ? `
                    <a href="${project.repoUrl}" target="_blank" class="flex-1 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 py-2.5 px-4 rounded-lg text-center text-sm font-medium transition-colors duration-300 border border-gray-500/30">
                      Code
                    </a>
                  ` : ''}
                  
                  ${project.figmaUrl ? `
                    <a href="${project.figmaUrl}" target="_blank" class="flex-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 py-2.5 px-4 rounded-lg text-center text-sm font-medium transition-colors duration-300 border border-pink-500/30">
                      Design
                    </a>
                  ` : ''}
                  
                  ${!project.hasDemo && !project.hasRepo && !project.figmaUrl ? `
                    <div class="flex-1 bg-gray-500/10 text-gray-500 py-2.5 px-4 rounded-lg text-center text-sm cursor-not-allowed">
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

  function generatePortfolioDots() {
    const dotsContainer = document.getElementById('portfolio-dots');
    if (!dotsContainer) return;
    
    const totalSlides = getTotalSlides();
    const dotsHTML = Array.from({length: totalSlides}, (_, index) => 
      `<button class="portfolio-dot w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400 transition-colors duration-300 ${index === 0 ? 'bg-gradient-to-r from-cyan-400 to-violet-600' : ''}" data-slide="${index}"></button>`
    ).join('');
    
    dotsContainer.innerHTML = dotsHTML;

    document.querySelectorAll('.portfolio-dot').forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentPortfolioSlide = index;
        updatePortfolioCarousel();
        updatePortfolioDots();
      });
    });
  }

  function updatePortfolioDots() {
    const dots = document.querySelectorAll('.portfolio-dot');
    dots.forEach((dot, index) => {
      if (index === currentPortfolioSlide) {
        dot.className = 'portfolio-dot w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 transition-colors duration-300';
      } else {
        dot.className = 'portfolio-dot w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-400 transition-colors duration-300';
      }
    });
  }

  function filterPortfolioProjects(categoryId) {
    if (categoryId === 'all') {
      filteredProjects = portfolioData.projects;
    } else {
      filteredProjects = portfolioData.projects.filter(project => project.category === categoryId);
    }
    currentPortfolioSlide = 0;
    updatePortfolioCarousel();
    updatePortfolioDots();
  }

  function initPortfolioNavigation() {
    const prevBtn = document.getElementById('portfolio-prev');
    const nextBtn = document.getElementById('portfolio-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const totalSlides = getTotalSlides();
        currentPortfolioSlide = currentPortfolioSlide === 0 ? totalSlides - 1 : currentPortfolioSlide - 1;
        updatePortfolioCarousel();
        updatePortfolioDots();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const totalSlides = getTotalSlides();
        currentPortfolioSlide = currentPortfolioSlide === totalSlides - 1 ? 0 : currentPortfolioSlide + 1;
        updatePortfolioCarousel();
        updatePortfolioDots();
      });
    }
  }

  function initPortfolioFilter() {
    const categoryButtons = document.querySelectorAll('[data-portfolio-category]');

    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-portfolio-category');
        
        categoryButtons.forEach(btn => {
          btn.className = 'px-6 py-3 rounded-xl font-medium text-gray-400 bg-neutral-800 border border-neutral-700 hover:text-white hover:border-cyan-400/50 transition-all duration-300 cursor-pointer';
        });
        button.className = 'px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-400 to-violet-600 border-transparent shadow-lg transition-all duration-300 cursor-pointer';
        
        filterPortfolioProjects(category);
      });
    });
  }

  // Initialize everything
  generatePortfolioCategories();
  updatePortfolioCarousel();
  generatePortfolioDots();
  initPortfolioNavigation();
  initPortfolioFilter();
}

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM Content Loaded');
  initAboutCarousel();
  initScrollAnimations();
  initSkillsSection();
  initPortfolioSection();
});