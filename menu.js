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

const allProjects = [
  {
    name: 'Multi-Post Stories',
    technologies: ['Css', 'Html', 'booststrap', 'Ruby'],
    img: {
      imageUrl: 'img/project0.svg',
      alt: 'project0',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
  },
  {
    name: 'Website Protfolio',
    technologies: ['Html', 'booststrap', 'Ruby'],
    img: {
      imageUrl: 'img/Popupmobile.svg',
      alt: 'project',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
  },
  {
    name: 'Website Protfolio',
    technologies: ['Html', 'booststrap', 'Ruby'],
    img: {
      imageUrl: 'img/Popupmobile.svg',
      alt: 'project',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
  },
  {
    name: 'Website Protfolio',
    technologies: ['Html', 'booststrap', 'Ruby'],
    img: {
      imageUrl: 'img/Popupmobile.svg',
      alt: 'project',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
  },
  {
    name: 'Website Protfolio',
    technologies: ['Html', 'booststrap', 'Ruby'],
    img: {
      imageUrl: 'img/Popupmobile.svg',
      alt: 'project',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
  },
  {
    name: 'Website Protfolio',
    technologies: ['Html', 'booststrap', 'Ruby'],
    img: {
      imageUrl: 'img/Popupmobile.svg',
      alt: 'project',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
  },
  {
    name: 'Website Protfolio',
    technologies: ['Html', 'booststrap', 'Ruby'],
    img: {
      imageUrl: 'img/Popupmobile.svg',
      alt: 'project',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Said-laasri/My-Porfolio-Website',
  },
];
// ***************************************
const work = document.querySelector('.work');
const project0 = document.createElement('article');
project0.classList.add('work', 'project0');

project0.innerHTML = `<div class="info-project">
<h3>${allProjects[0].name}</h3>
<p>${allProjects[0].description}</p>
</div>
<ul class="tags">
<li class="css">${allProjects[0].technologies[0]}</li>
<li class="html">${allProjects[0].technologies[1]}</li>
<li class="boot">${allProjects[0].technologies[2]}</li>
<li class="ruby">${allProjects[0].technologies[3]}</li>
</ul>
<button type="button" class="click">See Project</button>
</article>`;

work.appendChild(project0);

const projectCards = document.createElement('section');
projectCards.classList.add('project-grid');
work.appendChild(projectCards);

function addCards() {
  for (let i = 1; i < 7; i += 1) {
    const projectCard = document.createElement('article');
    projectCard.classList.add('work', 'project');
    projectCard.setAttribute('id', `project${i}`);
    // if (i === 1) {
    //   projectCard.setAttribute('id', 'project1');
    // } else if (i === 2) {
    //   projectCard.setAttribute('id', 'project2');
    // } else if (i === 3) {
    //   projectCard.setAttribute('id', 'project3');
    // } else if (i === 4) {
    //   projectCard.setAttribute('id', 'project4');
    // } else if (i === 5) {
    //   projectCard.setAttribute('id', 'project5');
    // } else if (i === 6) {
    //   projectCard.setAttribute('id', 'project6');
    // }

    projectCard.innerHTML = ` <div id="linfo1" class="linfo">
    <h2>${allProjects[i].name}</h2>
    <p>${allProjects[i].description}</p>
    <ul class="lang">
      <li class="ht">${allProjects[i].technologies[0]}</li>
      <li class="bo">${allProjects[i].technologies[1]}</li>
      <li class="ru">${allProjects[i].technologies[2]}</li>
    </ul>
  </div>
  <button type="button" class="but">See Project</button>`;

    projectCards.appendChild(projectCard);
  }
}
addCards();

// ****************************************************************
const body = document.querySelector('body');
const popupContainer = document.createElement('div');
const pupupSecondContainer = document.createElement('div');

function popup(i) {
  pupupSecondContainer.innerHTML = '';
  popupContainer.classList.add('popupcontainer');
  pupupSecondContainer.classList.add('popupSeconContainer');
  popupContainer.appendChild(pupupSecondContainer);
  body.appendChild(popupContainer);

  const h3 = document.createElement('h3');
  h3.classList.add('popup-title');
  pupupSecondContainer.appendChild(h3);

  const span = document.createElement('span');
  span.classList.add('material-symbols-outlined');
  span.textContent = 'close';
  pupupSecondContainer.appendChild(span);

  const ul = document.createElement('ul');
  ul.classList.add('tech');
  pupupSecondContainer.appendChild(ul);

  const imge = document.createElement('img');
  imge.classList.add('popup-img');
  pupupSecondContainer.appendChild(imge);

  const par = document.createElement('p');
  par.classList.add('popup-par');
  pupupSecondContainer.appendChild(par);

  const butLive = document.createElement('button');
  butLive.classList.add('clickOne');
  butLive.setAttribute('type', 'button');
  pupupSecondContainer.appendChild(butLive);

  const butSource = document.createElement('button');
  butSource.classList.add('clickTwo');
  butSource.setAttribute('type', 'button');
  pupupSecondContainer.appendChild(butSource);

  const live = document.createElement('a');
  live.classList.add('popup-link');
  live.textContent = 'See Live';
  butLive.appendChild(live);

  const source = document.createElement('a');
  source.classList.add('popup-link');
  source.textContent = 'See Source';
  butSource.appendChild(source);

  const iconLive = document.createElement('img');
  iconLive.setAttribute('src', 'Desktopimg/populive.png');
  iconLive.setAttribute('alt', 'button icon Live Demo');
  butLive.appendChild(iconLive);

  const iconSource = document.createElement('img');
  iconSource.setAttribute('src', 'Desktopimg/popupsource.png');
  butSource.setAttribute('alt', 'button Icon source');
  butSource.appendChild(iconSource);

  h3.textContent = allProjects[i].name;

  Object.values(allProjects[i].technologies).forEach(
    (x) => {
      const li = document.createElement('li');
      li.textContent = x;
      ul.appendChild(li);
    },
  );

  imge.setAttribute('src', `${allProjects[i].img.imageUrl}`);
  imge.setAttribute('alt', `${allProjects[i].img.alt}`);

  par.textContent = allProjects[i].description;

  live.setAttribute('href', `${allProjects[i].Link}`);

  source.setAttribute('href', `${allProjects[i].projectRepo}`);
}

const articleBtn = document.querySelector('.project0 .click');
const buttonOne = document.querySelector('#project1 .but');
const buttonTwo = document.querySelector('#project2 .but');
const buttonThree = document.querySelector('#project3 .but');
const buttonFour = document.querySelector('#project4 .but');
const buttonFive = document.querySelector('#project5 .but');
const buttonSix = document.querySelector('#project6 .but');

articleBtn.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonOne.addEventListener('click', () => {
  popup(1);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonTwo.addEventListener('click', () => {
  popup(2);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonThree.addEventListener('click', () => {
  popup(3);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonFour.addEventListener('click', () => {
  popup(4);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonFive.addEventListener('click', () => {
  popup(5);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonSix.addEventListener('click', () => {
  popup(6);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
