/* capturer les img du carrousel sous forme de tableau */
const listeImgCarrousel = document.querySelectorAll('#carrousel>img');
/* capturer les boutons */
const prev = document.querySelector('#carrousel>p:first-of-type');
const suiv = document.querySelector('#carrousel>p:nth-of-type(2)');
const spans = document.querySelectorAll('#carrousel>div>span');
/* initiaisation :
index soit n°img donc entre nb 0 et 5
listeImg, titres, p, spans = tabeaux avec img, titres et § correspondants */
let index = 2; /* première img */
listeImgCarrousel[2].classList.add('dessus'); /* première img : z-index 1 */
spans[2].setAttribute('class', 'rempli'); /* colorer première span */
/* Bouton prev :
au click, reculer d'1 img,
mais si index < 0, alors ajouter 3,
on checke pr chaque span (i corespond à 1 span / 1 n° de cellule du tabelau spans soit 0, 1 ou 2),
si cellule i=0 vaut nouvel index, alors attribution classe et textes aux cellules 0 tous les table,
sinon on enlève d'abord les classes de i=0 puis on checke cellule i=1, ... */
prev.addEventListener('click', () => {
  index -= 1;
  if (index < 0) index += 5; /* si img 0 on passe à img[2] donc index vaut -1+3 = 2 */
  console.log(index);
  spans.forEach((span, i) => { /* spans=tableau & i correspond à chaque cellule soit chaque span */
    if (i === index) {
      span.setAttribute('class', 'rempli');
      listeImgCarrousel[i].classList.add('dessus');
    } else {
      listeImgCarrousel[i].removeAttribute('class');
      span.removeAttribute('class');
    }
  });
});
/* Bouton suiv :
au click, avancer d'1 img,
mais si index=3 alors le mettre à 0,
on checke pour chaque span notée i :
si pour span[0] si index vaut également 0 alors on ajoute class et textes aux cellules 0
sinon on enlève les classes de span[0],
on checke span[1], ... */
suiv.addEventListener('click', () => {
  index += 1;
  if (index === 5) index = 0; /* passage de img[2] à la 1ère */
  console.log(index);
  spans.forEach((span, i) => {
    if (i === index) {
      span.setAttribute('class', 'rempli');
      listeImgCarrousel[i].classList.add('dessus');
    } else {
      listeImgCarrousel[i].removeAttribute('class');
      span.removeAttribute('class');
    }
  });
});
/* Boutons spans :
pour chaque span notée i, lorsqu'on clique, n°img (index) vaut n°cellule table spans,
au click sur une span, on checke chaque span notée j :
si sp[0] vaut span cliquée donc img en cours, attribution txt & class 0 à tous,
sinon on vire class & txt de sp[0],
puis checke si sp[1] vaut index cliquée, ... */
spans.forEach((span, i) => {
  span.addEventListener('click', () => {
    index = i;
    spans.forEach((sp, j) => {
      if (j === index) {
        sp.setAttribute('class', 'rempli');
        listeImgCarrousel[i].classList.add('dessus');
      } else {
        listeImgCarrousel[j].removeAttribute('class');
        sp.removeAttribute('class');
      }
    });
  });
});
