/* ═══════════════════════════════════════════════════════════
   YALLA KAISHI — MODULAR JAVSCRIPT INFRASTRUCTURE
   Perfect · Outstanding · Modular · Scalable
   ═══════════════════════════════════════════════════════════ */

/* ── Initialization ── */
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initMobileNav();
  initSmoothScroll();
  initRevealAnimations();
  initCounterAnimations();
  initFormValidation();
  initLanguageSwitch();
  initScrollProgress();
  initMobileDetect();
});

/* ── i18n System ── */
function initI18n(){
  const i18nPath = location.pathname.includes('china-support') ? 'js/i18n/zh.json' : 
                   location.pathname.includes('?lang=ar') || 
                   (() => { const toggle = document.querySelector('.lang-toggle'); return toggle ? toggle.getAttribute('data-lang') || 'en' : 'en'; })() === 'ar' ? 'js/i18n/ar.json' : 'js/i18n/en.json';
  
  fetch(i18nPath)
    .then(r => r.json())
    .then(i18n => window.i18n = i18n)
    .then(() => applyI18n(document.body))
    .catch(err => console.error('i18n load failed:', err));
}

function applyI18n(root){
  if(!window.i18n) return;
  const t = (key) => {
    const parts = key.split('.');
    let val = window.i18n;
    for(const p of parts){
      if(val && typeof val === 'object') val = val[p];
    }
    return val || key;
  };
  
  // Translate all elements with data-i18n attribute
  $$('[data-i18n]', root).forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  
  // Translate placeholder values
  $$('[data-i18n-placeholder]', root).forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  
  // Update aria-labels
  $$('[data-i18n-aria]', root).forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
}

/* ── Mobile Navigation ── */
function initMobileNav(){
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const navActions = document.querySelector('.nav-actions');
  
  if(!burger || !navLinks) return;
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });
  
  // Close menu on link click
  $$('.nav-links a', document).forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
}

/* ── Smooth Scroll ── */
function initSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
}

/* ── Reveal Animations ── */
function initRevealAnimations(){
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.1, rootMargin: '0px 0px -50px 0px'});
  
  reveals.forEach(reveal => observer.observe(reveal));
}

/* ── Counter Animations ── */
function initCounterAnimations(){
  const counters = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !entry.target.classList.contains('animated')){
        entry.target.classList.add('animated');
        const target = parseFloat(entry.target.getAttribute('data-target'));
        const duration = parseFloat(entry.target.getAttribute('data-duration')) || 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          current += step;
          if(current < target){
            entry.target.innerText = current.toFixed(0);
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.innerText = target.toFixed(0) === target ? target : Math.ceil(target);
          }
        };
        updateCounter();
      }
    });
  }, {threshold: 0.5});
  
  counters.forEach(c => observer.observe(c));
}

/* ── Form Validation ── */
function initFormValidation(){
  const forms = document.querySelectorAll('.needs-validation');
  
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      let valid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
      
      inputs.forEach(input => {
        if(!input.value.trim()){
          valid = false;
          input.classList.add('invalid');
        } else {
          input.classList.remove('invalid');
        }
      });
      
      // Validate email
      const emailInput = form.querySelector('input[type="email"]');
      if(emailInput && !isValidEmail(emailInput.value)){
        valid = false;
        emailInput.classList.add('invalid');
      }
      
      if(valid){
        // Show success state
        const submitBtn = form.querySelector('button[type="submit"]');
        if(submitBtn){
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner"></span> Sent...';
        }
        
        // Store form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Submit via API
        submitRequest(data).then(result => {
          if(result.success){
            // Show success overlay
            showSuccessOverlay(data.requestId || data.requestid || 'YH-CS-2024-00001');
            form.reset();
            setTimeout(() => window.location.href = 'success.html?requestId=YH-CS-2024-00001', 3000);
          } else {
            alert('Error submitting request. Please try again.');
            if(submitBtn) submitBtn.disabled = false;
          }
        }).catch(err => {
          console.error('Submit error:', err);
          alert('Error submitting request. Please try again.');
          if(submitBtn) submitBtn.disabled = false;
        });
      }
    });
    
    // Remove invalid class on input
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('invalid');
      });
    });
  });
}

function isValidEmail(email){
  return typeof email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) &&
    email.length <= 254;
}

async function submitRequest(data){
  try{
    const response = await fetch('/api/submit-request', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return await response.json();
  }catch(err){
    console.error('API error:', err);
    return {success: false, error: 'Network error'};
  }
}

function showSuccessOverlay(requestId){
  // Create and show success overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.8);
    display:flex;align-items:center;justify-content:center;color:var(--txt);
  `;
  overlay.innerHTML = `
    <div style="background:var(--bg2);padding:40px;border-radius:var(--radius);text-align:center;max-width:400px;border:1px solid var(--line)">
      <div style="width:64px;height:64px;border-radius:50%;background:rgba(217,119,6,.1);border:2px solid var(--teal);color:var(--teal);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:2rem">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17L4 12"/></svg>
      </div>
      <h2>Request Submitted Successfully</h2>
      <p>Your request ID is: <strong style="color:var(--gold)">YH-CS-2024-00001</strong></p>
      <p>We will contact you within 24 hours.</p>
      <button class="btn btn-primary" style="margin-top:24px;width:100%;">Continue</button>
    </div>
  `;
  document.body.appendChild(overlay);
  
  // Remove after 5 seconds
  setTimeout(() => overlay.remove(), 5000);
}

/* ── Scroll Progress Bar ── */
function initScrollProgress(){
  const progress = document.createElement('div');
  progress.style.cssText = `
    position:fixed;top:0;left:0;height:3px;z-index:9999;
    background:linear-gradient(90deg,var(--gold),var(--teal));
    width:0%;transition:width .3s var(--ease);
  `;
  document.body.appendChild(progress);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    progress.style.width = Math.max(0, Math.min(100, scrollPercent * 100)) + '%';
  });
}

/* ── Language Switch ── */
function initLanguageSwitch(){
  const toggle = document.querySelector('.lang-toggle');
  if(!toggle) return;
  
  let currentLang = 'en';
  const langCodes = ['en', 'ar', 'zh'];
  
  // Set initial language
  document.documentElement.lang = currentLang;
  toggle.textContent = currentLang.toUpperCase();
  
  toggle.addEventListener('click', () => {
    // Cycle languages
    const currentIndex = langCodes.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % langCodes.length;
    const nextLang = langCodes[nextIndex];
    
    currentLang = nextLang;
    document.documentElement.lang = nextLang;
    toggle.textContent = nextLang.toUpperCase();
    
    // Update i18n
    if(window.i18n){
      $$('[data-i18n]').forEach(el => {
        el.textContent = t(nextLang, el.getAttribute('data-i18n'));
      });
    }
    
    // Save preference
    localStorage.setItem('yalla-lang', nextLang);
  });
  
  // Restore saved preference
  const savedLang = localStorage.getItem('yalla-lang');
  if(savedLang && langCodes.includes(savedLang)){
    document.documentElement.lang = savedLang;
    toggle.textContent = savedLang.toUpperCase();
    currentLang = savedLang;
  }
}

/* ── Mobile Device Detection ── */
function initMobileDetect(){
  const isMobile = /Mobi|Android|iPhone|iPad/.test(navigator.userAgent);
  if(isMobile){
    document.body.classList.add('ismobile');
    // Reduce motion on mobile
    document.body.classList.add('reduced-motion');
  }
}

/* ── Focus Management ── */
function trapFocus(element){
  const focusableEls = element.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])');
  const firstFocusable = focusableEls[0];
  const lastFocusable = focusableEls[focusableEls.length - 1];
  
  function keepInFocus(e){
    if(e.key !== 'Tab') return;
    if(e.shiftKey){
      if(document.activeElement === firstFocusable){
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if(document.activeElement === lastFocusable){
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  }
  
  element.addEventListener('keydown', keepInFocus);
  return () => element.removeEventListener('keydown', keepInFocus);
}

/* ── Image Lazy Loading ── */
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if('IntersectionObserver' in window){
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          lazyImageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => lazyImageObserver.observe(img));
  }
});