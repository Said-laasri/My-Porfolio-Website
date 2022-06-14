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
    name: '<h3>Multi-Post Stories</h3>',
    close: `<span class="material-symbols-outlined">
    close
    </span>`,
    technologies: `<ul class="tags">
    <li class="css">css</li>
    <li class="html">html</li>
    <li class="boot">bootstrap</li>
    <li class="ruby">Ruby</li>
  </ul>`,
    img: '<img src="img/project0.svg" alt="project0" >',
    description: '<p> A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. </p>',
    Link: '<button type="button" class="click">See Live<img src="Desktopimg/populive.png" alt="live-demo"></button>',
    projectRepo: '<button type="button" class="click">See Source<img src="Desktopimg/popupsource.png" alt="live-demo"></button>',
  },
  {
    name: '<h2>Profesional Art Printing Data</h2>',
    close: `<span class="material-symbols-outlined">
    close
    </span>`,
    technologies: `<ul class="lang">
    <li class="ht">html</li>
    <li class="bo">bootstrap</li>
    <li class="ru">Ruby</li>
  </ul>`,
    img: '<img src="Desktopimg/project1.svg" alt="project">',
    description: '<p>A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard</p>',
    Link: '<button type="button" class="click">See Live<img src="Desktopimg/populive.png" alt="live-demo"></button>',
    projectRepo: '<button type="button" class="click">See Source<img src="Desktopimg/popupsource.png" alt="live-demo"></button>',
  },
  {
    name: '<h2>Profesional Art Printing Data</h2>',
    close: `<span class="material-symbols-outlined">
    close
    </span>`,
    technologies: `<ul class="lang">
    <li class="ht">html</li>
    <li class="bo">bootstrap</li>
    <li class="ru">Ruby</li>
  </ul>`,
    img: '<img src="Desktopimg/project2.svg" alt="project">',
    description: '<p>A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard</p>',
    Link: '<button type="button" class="click">See Live<img src="Desktopimg/populive.png" alt="live-demo"></button>',
    projectRepo: '<button type="button" class="click">See Source<img src="Desktopimg/popupsource.png" alt="live-demo"></button>',
  },
  {
    name: '<h2>Profesional Art Printing Data</h2>',
    close: `<span class="material-symbols-outlined">
    close
    </span>`,
    technologies: `<ul class="lang">
    <li class="ht">html</li>
    <li class="bo">bootstrap</li>
    <li class="ru">Ruby</li>
  </ul>`,
    img: '<img src="Desktopimg/project1.svg" alt="project">',
    description: '<p>A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard</p>',
    Link: '<button type="button" class="click">See Live<img src="Desktopimg/populive.png" alt="live-demo"></button>',
    projectRepo: '<button type="button" class="click">See Source<img src="Desktopimg/popupsource.png" alt="live-demo"></button>',
  },
  {
    name: '<h2>Profesional Art Printing Data</h2>',
    close: `<span class="material-symbols-outlined">
    close
    </span>`,
    technologies: `<ul class="lang">
    <li class="ht">html</li>
    <li class="bo">bootstrap</li>
    <li class="ru">Ruby</li>
  </ul>`,
    img: `'<img src="Desktopimg/project1.svg" alt="project">',
    description: '<p>A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard</p>`,
    Link: '<button type="button" class="click">See Live<img src="Desktopimg/populive.png" alt="live-demo"></button>',
    projectRepo: '<button type="button" class="click">See Source<img src="Desktopimg/popupsource.png" alt="live-demo"></button>',
  },
  {
    name: '<h2>Profesional Art Printing Data</h2>',
    close: `<span class="material-symbols-outlined">
    close
    </span>`,
    technologies: `<ul class="lang">
    <li class="ht">html</li>
    <li class="bo">bootstrap</li>
    <li class="ru">Ruby</li>
  </ul>`,
    img: '<img src="Desktopimg/project1.svg" alt="project">',
    description: '<p>A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard</p>',
    Link: '<button type="button" class="click">See Live<img src="Desktopimg/populive.png" alt="live-demo"></button>',
    projectRepo: '<button type="button" class="click">See Source<img src="Desktopimg/popupsource.png" alt="live-demo"></button>',
  },
  {
    name: '<h2>Profesional Art Printing Data</h2>',
    close: `<span class="material-symbols-outlined">
    close
    </span>`,
    technologies: `<ul class="lang">
    <li class="ht">html</li>
    <li class="bo">bootstrap</li>
    <li class="ru">Ruby</li>
  </ul>`,
    img: '<img src="Desktopimg/project1.svg" alt="project">',
    description: '<p>A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard</p>',
    Link: '<button type="button" class="click">See Live<img src="Desktopimg/populive.png" alt="live-demo"></button>',
    projectRepo: '<button type="button" class="click">See Source<img src="Desktopimg/popupsource.png" alt="live-demo"></button>',
  },
];

// (***********************************)
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
// ****************************************************************
const body = document.querySelector('body');
const popupContainer = document.createElement('div');
const pupupSecondContainer = document.createElement('div');
function popup(i) {
  if (i === 0) {
    for (let item in allProjects[0]) {
      pupupSecondContainer.innerHTML += allProjects[0][item];
    }
  } else if (i === 1) {
    for (let item in allProjects[1]) {
      pupupSecondContainer.innerHTML += allProjects[1][item];
    }
  } else if (i === 2) {
    for (let item in allProjects[2]) {
      pupupSecondContainer.innerHTML += allProjects[2][item];
    }
  } else if (i === 3) {
    for (let item in allProjects[3]) {
      pupupSecondContainer.innerHTML += allProjects[3][item];
    }
  } else if (i === 4) {
    for (let item in allProjects[4]) {
      pupupSecondContainer.innerHTML += allProjects[4][item];
    }
  } else if (i === 5) {
    for (let item in allProjects[5]) {
      pupupSecondContainer.innerHTML += allProjects[5][item];
    }
  } else if (i === 6) {
    for (let item in allProjects[6]) {
      pupupSecondContainer.innerHTML += allProjects[6][item];
    }
  }
  popupContainer.classList.add('popupcontainer');
  pupupSecondContainer.classList.add('popupSeconContainer');
  popupContainer.appendChild(pupupSecondContainer);
  body.appendChild(popupContainer);
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
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonOne.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonTwo.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonThree.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonFour.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonFive.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
buttonSix.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.material-symbols-outlined');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});