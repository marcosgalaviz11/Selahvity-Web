document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    }
    // Close mobile menu on clicking any link inside it
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others (optional, keeps it clean like Framer)
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        if (!isActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });

  // Portfolio Works Tab / Preview Switcher
  const workTabs = document.querySelectorAll('.work-tab');
  const workPreviewImg = document.getElementById('work-preview-img');
  const workPreviewTitle = document.getElementById('work-preview-title');
  const workPreviewLink = document.getElementById('work-preview-link');

  workTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      workTabs.forEach(t => {
        t.classList.remove('bg-lime', 'text-black', 'border-lime');
        t.classList.add('bg-[#1f1f1d]', 'text-zinc-300', 'border-zinc-800');
      });
      tab.classList.remove('bg-[#1f1f1d]', 'text-zinc-300', 'border-zinc-800');
      tab.classList.add('bg-lime', 'text-black', 'border-lime');

      const imgSrc = tab.getAttribute('data-img');
      const title = tab.getAttribute('data-title');
      const url = tab.getAttribute('data-url');

      if (workPreviewImg && imgSrc) {
        workPreviewImg.style.opacity = '0.3';
        setTimeout(() => {
          workPreviewImg.src = imgSrc;
          workPreviewImg.alt = title;
          workPreviewImg.style.opacity = '1';
        }, 150);
      }
      if (workPreviewTitle && title) {
        workPreviewTitle.textContent = title;
      }
      if (workPreviewLink && url) {
        workPreviewLink.href = url;
      }
    });
  });

  // Process Step Interactive Switcher
  const processSteps = document.querySelectorAll('.process-step-btn');
  const processCards = document.querySelectorAll('.process-card');

  processSteps.forEach((stepBtn) => {
    stepBtn.addEventListener('click', () => {
      const stepIndex = stepBtn.getAttribute('data-step');

      processSteps.forEach(btn => {
        btn.classList.remove('border-lime', 'text-lime', 'bg-[#232320]');
        btn.classList.add('border-zinc-800', 'text-zinc-400');
      });
      stepBtn.classList.remove('border-zinc-800', 'text-zinc-400');
      stepBtn.classList.add('border-lime', 'text-lime', 'bg-[#232320]');

      processCards.forEach(card => {
        if (card.getAttribute('data-step') === stepIndex) {
          card.classList.remove('hidden');
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    });
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      `;

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (formSuccess) {
          formSuccess.classList.remove('hidden');
          setTimeout(() => {
            formSuccess.classList.add('hidden');
          }, 6000);
        }
      }, 1000);
    });
  }
});
