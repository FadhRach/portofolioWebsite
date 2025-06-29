const certificatesData = {
  certificates: [
    {
      id: 'cert-1',
      name: 'Belajar Dasar HTML',
      organization: 'CodePolitan',
      image: 'assets/image/certificates/HTML_certificate.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-2',
      name: 'Belajar Dasar CSS',
      organization: 'CodePolitan',
      image: 'assets/image/certificates/CSS_certificate.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-3',
      name: 'Belajar Bootstrap CSS Framework',
      organization: 'CodePolitan',
      image: 'assets/image/certificates/Bootstrap_certificate.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-4',
      name: 'Alibaba Cloud Certification',
      organization: 'Alibaba Cloud',
      image: 'assets/image/certificates/Sertifikat Alibaba Cloud ECS Fadhlan.jpg',
      type: 'image'
    },
    {
      id: 'cert-5',
      name: 'Penghargaan Lomba LKS Metaverse',
      organization: 'SEAMEO QITEP',
      image: 'assets/image/certificates/19_Sertifikat Penghargaan LKS Meta.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-6',
      name: 'AIDeathon Mahasiswa DINACOM 2025',
      organization: 'Universitas Dian Nuswantoro',
      image: 'assets/image/certificates/AIDeathon.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-7',
      name: 'User Experience FIND IT',
      organization: 'KMTETI Fakultas Teknik UGM',
      image: 'assets/image/certificates/E-Sertifikat Peserta User Experience FIND IT! 2025 Fadhlan Nur Rachman.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-8',
      name: 'Arkavidia - Datavidia',
      organization: 'HIMAFOR ITB',
      image: 'assets/image/certificates/Participants_Certificate_Fadhlan Nur Rachman.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-9',
      name: 'Fundamental of Deep Learning',
      organization: 'NVIDIA',
      image: 'assets/image/certificates/My Learning _ NVIDIA.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-10',
      name: 'AIESEC Future Leaders Winter Peak 2024',
      organization: 'AIESEC',
      image: 'assets/image/certificates/AFL Winter Peak Certfificate _ Fadhlan Nur Rachman.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-11',
      name: 'Belajar Dasar AI',
      organization: 'Dicoding',
      image: 'assets/image/certificates/Sertifikat Belajar Dasar AI.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-12',
      name: 'Belajar Dasar Data Science',
      organization: 'Dicoding',
      image: 'assets/image/certificates/Sertifikat Belajar Dasar Data Science.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-13',
      name: 'Belajar Dasar Manajemen Proyek',
      organization: 'Dicoding',
      image: 'assets/image/certificates/Sertifikat Belajar Dasar Manajemen Proyek.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-14',
      name: 'Belajar Dasar SQL',
      organization: 'Dicoding',
      image: 'assets/image/certificates/Sertifikat Belajar Dasar SQL.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-15',
      name: 'Belajar Dasar Visualisasi Data',
      organization: 'Dicoding',
      image: 'assets/image/certificates/Sertifikat Belajar Dasar Visualisasi Data.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-16',
      name: 'Belajar Dasar AWS Cloud',
      organization: 'Dicoding',
      image: 'assets/image/certificates/Sertifikat Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).pdf',
      type: 'pdf'
    },
    {
      id: 'cert-17',
      name: 'Memulai Pemrograman dengan Python',
      organization: 'Dicoding',
      image: 'assets/image/certificates/Sertifikat Memulai Pemrograman dengan Python.pdf',
      type: 'pdf'
    },
    {
      id: 'cert-18',
      name: 'Java Programming',
      organization: 'ORACLE',
      image: 'assets/image/certificates/Setifikat Oracle Fadhlan.pdf',
      type: 'pdf'
    },
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  if (typeof certificatesData === 'undefined') {
    console.error('Certificates data not found!');
    return;
  }

  generateCertificatesGallery();
  initModal();
  initBackToTop();
});

function generateCertificatesGallery() {
  const galleryContainer = document.getElementById('certificates-gallery');
  if (!galleryContainer) return;

  const certificatesHTML = certificatesData.certificates.map(certificate => {
    const isPDF = certificate.type === 'pdf';
    return `
      <div class="group cursor-pointer certificate-item" data-certificate-id="${certificate.id}">
        <div class="relative overflow-hidden rounded-2xl bg-neutral-800 aspect-[4/3] shadow-lg hover:shadow-violet-500/25 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 border-transparent hover:border-violet-500/60">
          
          ${isPDF ? `
            <!-- PDF Preview with responsive -->
            <div class="w-full h-full relative bg-white">
              <!-- Desktop PDF Preview -->
              <iframe 
                src="${certificate.image}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=FitH&view=FitH" 
                class="hidden md:block w-full h-full border-0 pointer-events-none transition-all duration-500 group-hover:blur-sm"
                frameborder="0"
                loading="lazy">
              </iframe>
              
              <!-- Mobile/Tablet Fallback -->
              <div class="md:hidden w-full h-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-col transition-all duration-500 group-hover:blur-sm">
                <svg class="w-12 sm:w-16 h-12 sm:h-16 text-white/80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p class="text-white text-xs sm:text-sm text-center px-2 font-medium">${certificate.name}</p>
              </div>
              
              <!-- PDF Badge -->
              <div class="absolute top-2 right-2 bg-red-500/90 text-white px-2 py-1 rounded-full text-xs font-bold backdrop-blur-sm z-10">
                PDF
              </div>
            </div>
          ` : `
            <!-- Image Certificate -->
            <img src="${certificate.image}" alt="${certificate.name}" 
                 class="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110" 
                 onerror="this.src='https://placehold.co/400x300/6366f1/fff?text=${encodeURIComponent(certificate.name)}'">
          `}
          
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-center px-4">
              <h3 class="text-white font-bold text-base sm:text-lg mb-2 line-clamp-2">${certificate.name}</h3>
              <p class="text-gray-300 text-sm">${certificate.organization}</p>
              ${isPDF ? `<p class="text-red-300 text-xs mt-1">Click to view PDF</p>` : `<p class="text-violet-300 text-xs mt-1">Click to view</p>`}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  galleryContainer.innerHTML = certificatesHTML;
}

function initModal() {
  const modal = document.getElementById('certificate-modal');
  const closeBtn = document.getElementById('close-modal');
  const modalContent = document.getElementById('modal-content');
  
  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  
  document.addEventListener('click', (e) => {
    const certificateItem = e.target.closest('.certificate-item');
    if (certificateItem) {
      const certificateId = certificateItem.getAttribute('data-certificate-id');
      openModal(certificateId);
    }
  });

  function openModal(certificateId) {
    const certificate = certificatesData.certificates.find(cert => cert.id === certificateId);
    if (!certificate) return;

    const isPDF = certificate.type === 'pdf';
    const modalImage = document.getElementById('modal-image');
    const modalPDF = document.getElementById('modal-pdf');
    const modalTitle = document.getElementById('modal-title');
    const modalOrg = document.getElementById('modal-org');
    
    if (isPDF) {
      modalPDF.src = certificate.image;
      modalPDF.classList.remove('hidden');
      modalImage.classList.add('hidden');
    } else {
      modalImage.src = certificate.image;
      modalImage.alt = certificate.name;
      modalImage.classList.remove('hidden');
      modalPDF.classList.add('hidden');
    }
    
    modalTitle.textContent = certificate.name;
    modalOrg.textContent = certificate.organization;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('certificate-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  
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