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
      savedActive?.classList.remove('active');
      a.classList.add('active');
    });

    // Kembalikan "active" awal saat mouse keluar navbar
    nav.addEventListener('mouseleave', () => {
      nav.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
      savedActive?.classList.add('active');
    });

    // Jika diklik, jadikan itu status aktif yang baru
    nav.addEventListener('click', (e) => {
      const a = e.target.closest(linkSel);
      if (!a) return;
      savedActive?.classList.remove('active');
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

  window.onload = function() {
  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.add('active');
};

// Menambahkan fungsi untuk hamburger menu
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-left");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
