(function () {
    const nav = document.querySelector('.navbar');
    if (!nav) return;

    const linkSel = '.nav-left a, .nav-right a';
    const links = nav.querySelectorAll(linkSel);
    let savedActive = nav.querySelector('a.active');

    // Pindahkan "active" saat mouse di atas link
    nav.addEventListener('mouseover', (e) => {
      const a = e.target.closest(linkSel);
      if (!a) return;
      // Hapus semua "active" dulu untuk memastikan hanya satu yang aktif
      nav.querySelectorAll('a.active').forEach(activeA => activeA.classList.remove('active'));
      a.classList.add('active');
    });

    // Kembalikan "active" awal saat mouse keluar navbar
    nav.addEventListener('mouseleave', () => {
      // Hapus semua "active"
      nav.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
      // Tambah kembali ke savedActive jika ada
      savedActive?.classList.add('active');
    });

    // Jika diklik, jadikan itu status aktif yang baru
    nav.addEventListener('click', (e) => {
      const a = e.target.closest(linkSel);
      if (!a) return;
      // Hapus semua "active"
      nav.querySelectorAll('a.active').forEach(activeA => activeA.classList.remove('active'));
      savedActive = a;
      a.classList.add('active');
    });
})();

(function () {
    const header = document.querySelector('header');
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);
})();

// Update active nav link based on scroll position
(function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-right a');
  
  function updateActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      // Check if section is in viewport
      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute('id');
      }
    });
    
    // Update active link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  window.addEventListener('load', updateActiveLink);
})();

window.onload = function() {
  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.add('active');
};

// Menambahkan fungsi untuk hamburger menu
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-right");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Global cursor-follow spotlight overlay (applies to entire page)
(function() {
  // create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'cursor-spotlight';
  document.body.appendChild(overlay);

  let raf = null;
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  function update() {
    overlay.style.setProperty('--mouse-x', mouse.x + 'px');
    overlay.style.setProperty('--mouse-y', mouse.y + 'px');
    raf = null;
  }

  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (!raf) raf = requestAnimationFrame(update);
  });

  document.addEventListener('mouseleave', function() {
    overlay.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function() {
    overlay.style.opacity = '1';
  });

  if (!raf) raf = requestAnimationFrame(update);
})();
