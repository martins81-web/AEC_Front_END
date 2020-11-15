/* Mock projets */
import alteredCarbon from '../media/alteredCarbon.JPG';
import bottin from '../media/bottin.JPG';
import clinique from '../media/clinique.JPG';
import destination from '../media/destination.JPG';
import etudiants from '../media/etudiants.JPG';
import formulaire from '../media/formulaire.JPG';
import hanSolo from '../media/hanSolo.JPG';
import netflix from '../media/netflix.JPG';
import norris from '../media/norris.JPG';
import pfNouvelles from '../media/PFNouvelles.JPG';
import photociti from '../media/photociti.JPG';
import portugal from '../media/portugal.JPG';
import rebrandly from '../media/rebrandly.JPG';
import spotify from '../media/spotify.JPG';
import witcher from '../media/witcher.jpg';
import wolf from '../media/wolf.JPG';
import zelda from '../media/zelda.JPG';

export const competences = [ 'HTML5','CSS3/SASS ', 'BootStrap', 'javaScript', 'jQuery' ,"typeScript",'React-js', 'Angular', 'Vue', '...' ]

export const categories = ['HTML', 'BootStrap', 'React',  "javaScript", "SQL", "PWA", "API"]

export const projects = [
    {
      src : hanSolo, 
      nom: "Han Solo",
      description: 'Projet realisé avec HTML et CSS',
      motcles: ['html', 'css'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Integration1/Han%20Solo',
      website: 'https://martins81-web.github.io/AEC_Front_End/Integration1/Han%20Solo/index.html'
    },
    {
      src : witcher, 
      nom: "The Witcher 3",
      description: 'Pour ce projet Bootstrap, HTML et CSS on été utilisés.',
      motcles: ['html', 'css', 'bootstrap'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Integration1/Examen2',
      website: 'https://martins81-web.github.io/AEC_Front_End/Integration1/Examen2/'
    },
    {
      src : alteredCarbon, 
      nom: "Altered Carbon",
      description: 'Projet utilisant Media Queries et Parallax',
      motcles: ['html', 'css',  'media queries', 'parallax', 'bootstrap'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Integration1/ExercicesMediaQueries',
      website: 'https://martins81-web.github.io/AEC_Front_End/Integration1/ExercicesMediaQueries/'
    },
    {
      src : netflix, 
      nom: "Séries Netflix",
      description: 'Projet utilisant NavBar et carousel',
      motcles: ['html', 'css', 'navbar', 'carousel'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Integration1/08_Bootstrap_NavBar_Carousel',
      website: 'https://martins81-web.github.io/AEC_Front_End/Integration1/08_Bootstrap_NavBar_Carousel/index.html'
    },
    {
      src : portugal, 
      nom: "Visitez le Portugal",
      description: "Projet de synthèse qu'utilise plusieurs compétences d'intégration Web",
      motcles: ['html', 'css', 'NavBar', 'carousel','modal', 'parallax', 'bootstrap', 'pwa'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Integration1/Projet%20final',
      website: 'https://martins81-web.github.io/AEC_Front_End/Integration1/Projet%20final/'
    },
    {
      src : formulaire, 
      nom: "L'avenir de la race humaine",
      description: "Ce projet englobe la création et vérifications d'un formulaire",
      motcles: ['html', 'css', 'forms','paypal', 'bootstrap'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Integration2/Examen1',
      website: 'https://martins81-web.github.io/AEC_Front_End/Integration2/Examen1/'
    },
    {
      src : zelda, 
      nom: "La légende de zelda",
      description: "Google charts, tri et recherche de tableaux",
      motcles: ['html', 'css', 'bootstrap', 'sorting', 'search'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Integration2/Examen2ZeldaEnonce',
      website: 'https://martins81-web.github.io/AEC_Front_End/Integration2/Examen2ZeldaEnonce/'
    },
    {
      src : wolf, 
      nom: "The Wolf of Wall Street",
      description: "Animations javaScript",
      motcles: ['html', 'css', 'javascript', 'animations'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Integration2/Animations',
      website: 'https://martins81-web.github.io/AEC_Front_End/Integration2/LibrairiesJavaScript/index.html'
    },
    {
      src : photociti, 
      nom: "Photociti",
      description: "Créez votre mot Photociti en 3 étapes rapides",
      motcles: ['css', 'javascript', 'jquery', 'programmation'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Programmation1/Projet%20final',
      website: 'https://martins81-web.github.io/AEC_Front_End/Programmation1/Projet%20final/'
    },
    {
      src : bottin, 
      nom: "Bottin des clients",
      description: "Application React pour un bottin des clients, en utilisant des donnés mock",
      motcles: ['bootstrap', 'javascript', 'react', 'programmation'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Programmation2React/bottin-clients',
      website: 'https://martins81-web.github.io/AEC_Front_End/Programmation2React/bottin-clients/build/'
    },
    {
      src : spotify, 
      nom: "Spotify Québécois",
      description: "Application React - clone spotify",
      motcles: ['bootstrap', 'javascript', 'react', 'programmation'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Programmation2React/spotify-quebecois',
      website: 'https://martins81-web.github.io/AEC_Front_End/Programmation2React/spotify-quebecois/build/'
    },
    {
      src : norris, 
      nom: "Chuck Norris Jokes",
      description: "Application React qui fait des raquêtes à un API en utilisant deux paramètres",
      motcles: ['javascript', 'react', 'programmation', 'api'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Programmation2React/chuck-norris',
      website: 'https://martins81-web.github.io/AEC_Front_End/Programmation2React/chuck-norris/build/'
    },
    {
      src : rebrandly, 
      nom: "Rebrandly URL shortener",
      description: "Application React qui fait des raccourcis d'URL",
      motcles: ['javascript', 'react', 'programmation', 'api'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Programmation2React/rebrandly',
      website: 'https://martins81-web.github.io/AEC_Front_End/Programmation2React/rebrandly/build/'
    },
    {
      src : destination, 
      nom: "Destination Vacances",
      description: "Application React sur la péninsulte Bruce en Ontario",
      motcles: ['javascript', 'react', 'programmation', 'router'],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Programmation2React/hello-routers-world',
      website: 'https://martins81-web.github.io/AEC_Front_End/Programmation2React/hello-routers-world/build/#/'
    },
    {
      src : etudiants, 
      nom: "Répertoire des Étudiants",
      description: "Application React d'un répertoire d'etudiants",
      motcles: ['bootstrap', 'javascript', 'react', 'programmation', 'router','crud', 'api', 'sass', 'pwa' ],
      githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/Programmation2React/projet-final-repertoire',
      website: 'https://martins81-web.github.io/AEC_Front_End/Programmation2React/projet-final-repertoire/build/#/Accueil'
    },
    {
        src : pfNouvelles, 
        nom: "Site Web de nouvelles",
        description: "Site de nouvelles à partir d'une base de données",
        motcles: ['php', 'sql'],
        githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/InfrastructureWeb/infrastructure_web_projet_finalv2',
        website: 'https://projetfinal-emartins.me/index.php'
    },
    {
        src : clinique, 
        nom: "Clinique Vétérinaire",
        description: "Site Web d'une Clinique Vétérinaire qu'utilise une base de données",
        motcles: ['php', 'sql'],
        githubLink: 'https://github.com/martins81-web/AEC_Front_End/tree/master/InfrastructureWeb/Clinique_veterinaire_crud_modal_structure_login2',
        website: 'https://cliniqueveterinairemartins.me/'
        },
]