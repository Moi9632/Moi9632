
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.slide');
    console.log("sections : ", sections);
    const etapes = document.querySelectorAll('.etape');
    console.log("etapes : ", etapes);

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
        etape.classList.add('active');
        console.log(etape, etape.classList);
        } else {
        etape.classList.remove('active');
        console.log(etape, etape.classList);
        }
    });
    });
});