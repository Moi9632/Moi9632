document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.slide');
  console.log("sections : ", sections);
  const etapes = document.querySelectorAll('.etape');
  console.log("etapes : ", etapes);

  if (sections.length > 0 && etapes.length > 0) {
    window.addEventListener('scroll', () => {
      let currentId = "";

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentId = section.id;
        }
      });

      etapes.forEach(etape => {
        if (etape.dataset.slide === currentId) {
          etape.classList.add(`active-${currentId}`);
          console.log(etape, etape.classList);
        } else {
          etape.classList.forEach(cls => {
            if (cls.startsWith('active-')) {
              etape.classList.remove(cls);
            }
          });
          console.log(etape, etape.classList);
        }
      });
    });
  }
});

