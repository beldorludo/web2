import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import grootImage from './img/Capture d’écran (62).png';
import stormtrooperImage from './img/Capture d’écran (72).png';

const  homePage = `
<div class="container text-center">
        <div class="row">
          <div class="col">
            <h3>Welcome to myMovies !</h3>

            <p>Here you can find a selection of our favorite movies ; )</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-6">
            <img class="img-thumbnail" src="${grootImage}" alt="Groot" />
          </div>

          <div class="col-12 col-lg-6">
            <img class="img-thumbnail" src="${stormtrooperImage}" alt="Stormtrooper" />
          </div>
        </div>
</div>`;
 const auteur = 'page developé par emeric';
const main = document.querySelector('header');

const buttonAteurs = document.querySelector('#auteurs'); // Utilisez #auteurs pour cibler l'élément avec l'ID "auteurs"
buttonAteurs.addEventListener('click', (e) => {
  // Faites ce que vous voulez
  e.target.textContent = 'Clicked!';
  main.innerHTML = auteur;
});


const buttonBack = document.querySelector('#back'); // Utilisez #auteurs pour cibler l'élément avec l'ID "auteurs"
buttonBack.addEventListener('click', () => {
  // Faites ce que vous voulez
  main.innerHTML = homePage;
});

main.innerHTML = homePage;