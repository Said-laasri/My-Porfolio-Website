const menu = document.querySelector('#side-bar');
const menubar = document.querySelector('.portfolio');
const closemenu = document.querySelector('.menu-close');
const worksection = document.querySelector('#jumptopagework');
const aboutsection = document.querySelector('#jumptopageabout');
const contactsection = document.querySelector('#jumptopagecontact');

menu.addEventListener('click', () => {
  menubar.classList.toggle('nemubar');
  menu.style.visibility = 'hidden';
  closemenu.style.visibility = 'visible';
});

closemenu.addEventListener('click', () => {
  menubar.classList.remove('nemubar');
  menu.style.visibility = 'visible';
  closemenu.style.visibility = 'hidden';
});

worksection.addEventListener('click', () => {
  menubar.classList.remove('nemubar');
  menu.style.visibility = 'visible';
  closemenu.style.visibility = 'hidden';
});

aboutsection.addEventListener('click', () => {
  menubar.classList.remove('nemubar');
  menu.style.visibility = 'visible';
  closemenu.style.visibility = 'hidden';
});

contactsection.addEventListener('click', () => {
  menubar.classList.remove('nemubar');
  menu.style.visibility = 'visible';
  closemenu.style.visibility = 'hidden';
});

// *************************project(((((((((((((())))))))))))))

// const Allprojects = [
//   {
//     img: 'img/project0.svg',
//     name: 'Multi-Post Stories',
//     description:'A daily selection of privately personalized reads;
// no accounts or sign-ups required. has been the industrys standard dummy text
//  ever since the 1500s,
//  when an unknown printer took a standard dummy text.',
//     technologies: ['css','Html', 'boot', 'Ruby'],
//     Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
//   },
//   {
//     name: 'Profesional Art Printing Data',
//     technologies: ['Html', 'booststrap', 'Ruby'],
//     img: 'Desktopimg/project1.svg',
//     description:'A daily selection of privately personalized reads;
// no accounts or sign-ups required. has been the industrys standard ',
//     Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
//     projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
//   },
//   {
//     name: 'Data Dashboard Healthcare',
//     technologies: ['Html', 'booststrap', 'Ruby'],
//     img: 'Desktopimg/project2.svg',
//     description:'A daily selection of privately personalized reads;
// no accounts or sign-ups required. has been the industrys standard ',
//     Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
//     projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
//   },
//   {
//     name: 'Website Protfolio',
//     technologies: ['Html', 'booststrap', 'Ruby'],
//     img: 'Desktopimg/project3.svg',
//     description:'A daily selection of privately personalized reads;
// no accounts or sign-ups required. has been the industrys standard ',
//     Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
//     projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
//   },
//   {
//     name: 'Profesional Art Printing Data',
//     technologies: ['Html', 'booststrap', 'Ruby'],
//     img: 'Desktopimg/project456.svg',
//     description:'A daily selection of privately personalized reads;
// no accounts or sign-ups required. has been the industrys standard ',
//     Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
//     projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
//   },
//   {
//     name: 'Dashboard Healthcare',
//     technologies: ['Html', 'booststrap', 'Ruby'],
//     img: 'Desktopimg/project2.svg',
//     description:'A daily selection of privately personalized reads;
//  no accounts or sign-ups required. has been the industrys standard ',
//     Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
//     projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
//   },
//   {
//     name: 'Website Protfolio',
//     technologies: ['Html', 'booststrap', 'Ruby'],
//     img: 'Desktopimg/project3.svg       ',
//     description:'A daily selection of privately personalized reads:
// no accounts or sign-ups required. has been the industrys standard ',
//     Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
//     projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
//   }
// ]

const work = document.querySelector('.work');
const project0 = document.createElement('article');
project0.classList.add('work', 'project0');

project0.innerHTML = `<div class="info-project">
<h3>Multi-Post Stories</h3>
<p> A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. </p>
</div>
<ul class="tags">
<li class="css">css</li>
<li class="html">html</li>
<li class="boot">bootstrap</li>
<li class="ruby">Ruby</li>
</ul>
<button type="button" class="click">See Project</button>
</article>`;

work.appendChild(project0);

const projectCards = document.createElement('section');
projectCards.classList.add('project-grid');
work.appendChild(projectCards);

function addCards() {
  for (let i = 0; i < 6; i += 1) {
    const projectCard = document.createElement('article');
    projectCard.classList.add('work', 'project');
    if (i === 0) {
      projectCard.setAttribute('id', 'project1');
    } else if (i === 1) {
      projectCard.setAttribute('id', 'project2');
    } else if (i === 2) {
      projectCard.setAttribute('id', 'project3');
    } else if (i === 3) {
      projectCard.setAttribute('id', 'project4');
    } else if (i === 4) {
      projectCard.setAttribute('id', 'project5');
    } else if (i === 5) {
      projectCard.setAttribute('id', 'project6');
    }

    projectCard.innerHTML = ` <div id="linfo1" class="linfo">
    <h2>Profesional Art Printing Data</h2>
    <p> A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard </p>
    <ul class="lang">
      <li class="ht">html</li>
      <li class="bo">bootstrap</li>
      <li class="ru">Ruby</li>
    </ul>
  </div>
  <button type="button" class="but">See Project</button>`;

    projectCards.appendChild(projectCard);
  }
}
addCards();
// Allprojects.forEach((element,i) => {
//   const projectcontainer = document.querySelector('.')
// });