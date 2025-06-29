class PortfolioManager {
  constructor() {
    this.currentFilter = 'all';
    this.currentSearch = '';
    this.projects = [];
    this.init();
  }

  async init() {
    try {
      await this.waitForData();
      this.projects = portfolioData.projects;
      this.generateProjectsGallery();
      this.initProjectFilter();
      this.initSearch();
      this.initBackToTop();
      this.initScrollAnimations();
      this.initModalListeners();
    } catch (error) {
      console.error('Error initializing portfolio:', error);
    }
  }

  waitForData() {
    return new Promise((resolve, reject) => {
      if (typeof portfolioData !== 'undefined') {
        resolve();
      } else {
        const checkData = setInterval(() => {
          if (typeof portfolioData !== 'undefined') {
            clearInterval(checkData);
            resolve();
          }
        }, 100);
        setTimeout(() => {
          clearInterval(checkData);
          reject(new Error('Portfolio data not loaded'));
        }, 5000);
      }
    });
  }

  getCategoryColor(category) {
    const colors = {
      website: 'violet',
      uiux: 'pink', 
      ai: 'emerald',
      mobile: 'cyan'
    };
    return colors[category] || 'violet';
  }

  getCategoryGradient(category) {
    const gradients = {
      website: 'from-violet-500 to-purple-600',
      uiux: 'from-pink-500 to-rose-600', 
      ai: 'from-emerald-500 to-green-600',
      mobile: 'from-cyan-500 to-blue-600'
    };
    return gradients[category] || 'from-violet-500 to-purple-600';
  }

  getFilteredProjects() {
    let filteredProjects = this.projects;
    if (this.currentFilter !== 'all') {
      filteredProjects = filteredProjects.filter(project => 
        project.category === this.currentFilter
      );
    }
    if (this.currentSearch.trim() !== '') {
      const searchTerm = this.currentSearch.toLowerCase();
      filteredProjects = filteredProjects.filter(project => 
        project.name.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchTerm)) ||
        project.role.toLowerCase().includes(searchTerm)
      );
    }

    return filteredProjects;
  }

  generateProjectsGallery() {
    const galleryContainer = document.getElementById('projects-gallery');
    const noResultsContainer = document.getElementById('no-results');
    
    if (!galleryContainer) return;

    const projectsToShow = this.getFilteredProjects();
    if (projectsToShow.length === 0) {
      galleryContainer.innerHTML = '';
      if (noResultsContainer) {
        noResultsContainer.classList.remove('hidden');
      }
      return;
    } else {
      if (noResultsContainer) {
        noResultsContainer.classList.add('hidden');
      }
    }

    const projectsHTML = projectsToShow.map(project => {
      const color = this.getCategoryColor(project.category);
      
      return `
        <div class="group cursor-pointer project-item animate-on-scroll" data-project-id="${project.id}">
          <div class="relative overflow-hidden rounded-2xl bg-neutral-800 aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-${color}-500/50">
            
            <!-- Project Image -->
            <div class="w-full h-full relative bg-gradient-to-br ${this.getCategoryGradient(project.category)}">
              <img src="${project.image}" alt="${project.name}" 
                   class="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110" 
                   onerror="this.src='https://placehold.co/400x300/${color === 'violet' ? '6366f1' : color === 'pink' ? 'ec4899' : color === 'emerald' ? '10b981' : '06b6d4'}/fff?text=${encodeURIComponent(project.name)}'">
              
              <!-- Category Badge -->
              <div class="absolute top-2 right-2 bg-${color}-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm z-10">
                ${project.category.toUpperCase()}
              </div>
              
              <!-- Project Type Badge -->
              <div class="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm z-10">
                ${project.type}
              </div>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-center px-4">
                <h3 class="text-white font-bold text-lg mb-2 line-clamp-2">${project.name}</h3>
                <p class="text-gray-300 text-sm mb-2">${project.role}</p>
                <p class="text-${color}-300 text-xs">📱 Click to view details</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    galleryContainer.innerHTML = projectsHTML;
    document.querySelectorAll('.project-item').forEach(item => {
      item.addEventListener('click', () => {
        const projectId = parseInt(item.dataset.projectId);
        this.showProjectModal(projectId);
      });
    });
    if (typeof initScrollAnimations === 'function') {
      initScrollAnimations();
    }
  }
  showProjectModal(projectId) {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalType = document.getElementById('modal-type');
    const modalYear = document.getElementById('modal-year');
    const modalRole = document.getElementById('modal-role');
    const modalTechStack = document.getElementById('modal-tech-stack');
    const modalActions = document.getElementById('modal-actions');

    modalImage.src = project.image;
    modalImage.alt = project.name;
    modalTitle.textContent = project.name;
    modalDescription.textContent = project.description;
    modalType.textContent = project.type;
    modalYear.textContent = project.year;
    modalRole.textContent = project.role;

    const color = this.getCategoryColor(project.category);
    modalType.className = `px-3 py-1 bg-${color}-500/20 text-${color}-300 rounded-full text-sm font-medium`;

    modalTechStack.innerHTML = project.techStack.map(tech => `
      <span class="px-3 py-1 bg-neutral-700 text-gray-300 rounded-full text-sm border border-neutral-600 hover:bg-neutral-600 transition-colors">
        ${tech}
      </span>
    `).join('');

    let actionsHTML = '';
    
    if (project.hasDemo && project.demoUrl) {
      actionsHTML += `
        <a href="${project.demoUrl}" target="_blank" 
           class="bg-${color}-500/20 hover:bg-${color}-500/30 text-${color}-300 hover:text-${color}-200 py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-${color}-500/30 hover:border-${color}-500/50 hover:scale-105">
          <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Demo
        </a>
      `;
    }
    
    if (project.hasRepo && project.repoUrl) {
      actionsHTML += `
        <a href="${project.repoUrl}" target="_blank" 
           class="bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 hover:text-gray-200 py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-gray-500/30 hover:border-gray-500/50 hover:scale-105">
          <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          View Code
        </a>
      `;
    }
    
    if (project.figmaUrl) {
      actionsHTML += `
        <a href="${project.figmaUrl}" target="_blank" 
           class="bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 hover:text-pink-200 py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-pink-500/30 hover:border-pink-500/50 hover:scale-105">
          <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          View Design
        </a>
      `;
    }
    
    if (!project.hasDemo && !project.hasRepo && !project.figmaUrl) {
      actionsHTML = `
        <div class="bg-gray-500/10 text-gray-500 py-3 px-6 rounded-lg cursor-not-allowed flex items-center">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Private Project
        </div>
      `;
    }

    modalActions.innerHTML = actionsHTML;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        this.currentFilter = filter;
        
        filterButtons.forEach(btn => {
          btn.classList.remove('active', 'bg-gradient-to-r', 'from-cyan-400', 'to-violet-600', 'text-white');
          btn.classList.add('bg-neutral-800', 'text-gray-400');
        });
        
        button.classList.add('active', 'bg-gradient-to-r', 'from-cyan-400', 'to-violet-600', 'text-white');
        button.classList.remove('bg-neutral-800', 'text-gray-400');
        
        this.generateProjectsGallery();
      });
    });
  }

  initSearch() {
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      this.currentSearch = e.target.value;
      
      if (clearSearchBtn) {
        if (this.currentSearch.trim() !== '') {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
      }

      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.generateProjectsGallery();
      }, 300);
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        this.currentSearch = '';
        clearSearchBtn.classList.add('hidden');
        this.generateProjectsGallery();
        searchInput.focus();
      });
    }
  }

  initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  initScrollAnimations() {
    if (typeof initScrollAnimations === 'function') {
      initScrollAnimations();
    }
  }

  initModalListeners() {
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('project-modal');
    
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => this.closeProjectModal());
    }
    
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
          this.closeProjectModal();
        }
      });
    }
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeProjectModal();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.portfolioManager = new PortfolioManager();
});