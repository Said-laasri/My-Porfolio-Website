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
    name: 'Awsome-books',
    technologies: ['Css', 'Html', 'Javascript'],
    img: {
      imageUrl: 'Desktopimg/awsome.png',
      alt: 'project0',
    },
    description:
      'Awsome books website is a page that contains information about list of books with the title and author names',
    Link: 'https://said-laasri.github.io/Awsome-Book/',
    projectRepo: 'https://github.com/Said-laasri/Awsome-Book',
  },
  {
    name: 'Tv-shows',
    technologies: ['Html', 'JavaScript', 'Css'],
    img: {
      imageUrl: 'Desktopimg/tv-show.png',
      alt: 'project',
    },
    description:
      'Tv-shows website is a page that containes a list of cards of shows with detail about the shows',
    Link: 'https://bespoke-kelpie-bb37b1.netlify.app/',
    projectRepo: 'https://github.com/Said-laasri/Tv-show',
  },
  {
    name: 'Logistic-conference',
    technologies: ['Html', 'JavaScript', 'Css'],
    img: {
      imageUrl: 'Desktopimg/confrence.png',
      alt: 'project',
    },
    description:
      'This project is example of Website for offering services to our clients',
    Link: 'https://said-laasri.github.io/Capstone-Logistic-conference/',
    projectRepo: 'https://github.com/Said-laasri/Capstone-Logistic-conference',
  },
  {
    name: 'Leaderboard',
    technologies: ['Html', 'JavaScript', 'Css'],
    img: {
      imageUrl: 'Desktopimg/leaderboeard.png',
      alt: 'project',
    },
    description:
      'Leaderboard website is a page that contains information that you already inputed names and scores of players.',
    Link: 'https://incandescent-souffle-974b06.netlify.app/',
    projectRepo: 'https://github.com/Said-laasri/Leaderboard',
  },
  {
    name: 'Animal-Zoo',
    technologies: ['React', 'Redux', 'Scss'],
    img: {
      imageUrl: 'Desktopimg/animalzoo.png',
      alt: 'project',
    },
    description:
      'Animal Zoo is project where ifetch data from Animal API and siplay them with name and latin name and you can get more detail on animal',
    Link: 'https://bright-torte-dc130d.netlify.app/',
    projectRepo: 'https://github.com/Said-laasri/Animal-Zoo',
  },
  {
    name: 'Space Hub',
    technologies: ['React', 'Redux', 'Css'],
    img: {
      imageUrl: 'Desktopimg/space.png',
      alt: 'project',
    },
    description:
      'space hub website is a page that contains information about all space missions and rocket used to travel in space . and also you can joing any mission and reserve any rocket availabale for the mission',
    Link: 'https://said-laasri.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Said-laasri/space-hub',
  },
  {
    name: 'math magisians',
    technologies: ['React', 'JavaScript', 'Css'],
    img: {
      imageUrl: 'Desktopimg/math.png',
      alt: 'project',
    },
    description: 'Calculator is apps that does calculon web browser',
    Link: 'https://62f4ddf1408c40091ecbd8ef--gleeful-selkie-06c959.netlify.app/',
    projectRepo: 'https://github.com/Said-laasri/math-magicians',
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
    projectCard.innerHTML = ` <div id="linfo1" class="linfo">
    <h2></h2>
    <p></p>
    <ul class="lang">
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

  Object.values(allProjects[i].technologies).forEach((x) => {
    const li = document.createElement('li');
    li.textContent = x;
    ul.appendChild(li);
  });

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
