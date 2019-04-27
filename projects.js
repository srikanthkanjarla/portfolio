const projects = [
  {
    projectImagePath: 'images/pomodoro.png',
    imageAltText: 'pomodoro timer preview',
    projectTitle: 'Pomodoro Timer',
    projectInfo: 'This simple easy-to-use Pomodoro Timer App helps the user breakdown work into intervals',
    liveURL: 'https://srikanthkanjarla.github.io/pomodoro-timer/',
    sourceURL: 'https://github.com/srikanthkanjarla/pomodoro-timer',
    techLabels: ['React', 'Redux', 'IndexedDB'],
  },
  {
    projectImagePath: 'images/quote.png',
    imageAltText: 'quote machine preview',
    projectTitle: 'Random Quote Machine',
    projectInfo: 'This simple web app generates a random quote and allows the user to tweet the quote via twitter',
    liveURL: 'https://srikanthkanjarla.github.io/Random-Quote-Machine/',
    sourceURL: 'https://github.com/srikanthkanjarla/Random-Quote-Machine',

    techLabels: ['React', 'Quotes API', 'JSONP'],
  },
  {
    projectImagePath: 'images/weather.png',
    imageAltText: 'Local Weather App preview',
    projectTitle: 'Local Weather App',
    projectInfo: 'This simple weather application allows users to know the current forecast',
    liveURL: 'https://srikanthkanjarla.github.io/Local-Weather-App/',
    sourceURL: 'https://github.com/srikanthkanjarla/Local-Weather-App',

    techLabels: ['JavaScript', 'weather API', 'Geoloaction API'],
  },
  {
    projectImagePath: 'images/stopwatch.png',
    imageAltText: 'stop watch preview',
    projectTitle: 'Stop watch',
    projectInfo: 'This is a simple stopwatch with a stop and start feature',
    liveURL: 'https://srikanthkanjarla.github.io/stop-watch/',
    sourceURL: 'https://github.com/srikanthkanjarla/stop-watch',

    techLabels: ['JavaScript', 'HTML', 'CSS'],
  },
  //   {
  //     projectImagePath: "images/landing_page.png",
  //     imageAltText: "landing page preview",
  //     projectTitle: "Landing Page",
  //     projectInfo: "Travel Agency Landing Page",
  //     liveURL: "https://srikanthkanjarla.github.io/Product-Landing-Page/",
  //     sourceURL: "https://github.com/srikanthkanjarla/Product-Landing-Page/",
  //     techLabels: ["JavaScript", "HTML", "CSS"]
  //   },
  {
    projectImagePath: 'images/memory_game.png',
    imageAltText: 'memory game preview',
    projectTitle: 'Fun Memory Game',
    projectInfo: 'This is a memory game where the user needs to flip tiles then match pairs of tiles with the same number',
    liveURL: 'https://srikanthkanjarla.github.io/memory-match-game/',
    sourceURL: 'https://github.com/srikanthkanjarla/memory-match-game/',
    techLabels: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    projectImagePath: 'images/documentation.png',
    imageAltText: 'documentation page preview',
    projectTitle: 'Documentation Page',
    projectInfo: 'This documentation page was submitted for the freeCodeCamp Responsive Web Design certification',
    liveURL: 'https://srikanthkanjarla.github.io/technical-documentation-page/',
    sourceURL: 'https://github.com/srikanthkanjarla/technical-documentation-page/',
    techLabels: ['JavaScript', 'HTML', 'CSS'],
  },
  //   {
  //     projectImagePath: "images/",
  //     imageAltText: "survey form preview",
  //     projectTitle: "Sample Survey Form",
  //     projectInfo: "survey form",
  //     liveURL: "https://srikanthkanjarla.github.io/survey-form/",
  //     sourceURL: "https://github.com/srikanthkanjarla/survey-form/",
  //     techLabels: ["JavaScript", "HTML", "CSS"]
  //   },
  {
    projectImagePath: 'images/kalam.png',
    imageAltText: 'Tribute to Dr. APJ Abdul Kalam',
    projectTitle: 'Tribute Page',
    projectInfo: 'This page is a Tribute to the Missile Man of India Dr. APJ Abdul Kalam',
    liveURL: 'https://srikanthkanjarla.github.io/Tribute_Page/',
    sourceURL: 'https://github.com/srikanthkanjarla/Tribute_Page/',
    techLabels: ['HTML', 'CSS', 'JavaScript'],
  },
];
const projectsContainer = document.getElementById('projects');
projects.map(project => {
  const { projectImagePath, imageAltText, projectTitle, projectInfo, liveURL, sourceURL, techLabels } = project;
  const html = `<div class="card-wrapper">
  <div class="ribbon-wrapper">
    <div class="ribbon">
      <a href=${sourceURL} target="_blank" title="View source on Github"><i class="fab fa-github"></i>&nbsp;Github</a>
    </div>
  </div>
  <div class="thumbnail-img">
    <img src=${projectImagePath} alt=${imageAltText}/>
  </div>
  <div class="project-content">
    <h2 class="project-title">${projectTitle}</h2>
    <p class="project-info">${projectInfo}</p>
    <a href=${liveURL} class="btn btn-dark" target="_blank"><i class="fas fa-external-link-square-alt"></i>&nbsp;&nbsp;View Live</a>
    <p class="project-labels">${techLabels.map(label => `<span>${label}</span>`)}</p>
  </div>
  </div>`;
  projectsContainer.innerHTML += html;
  return projectsContainer;
});
