<!-- script.js -->
<!-- Techniques d'intégration des interfaces Web 2 -->
<!-- Examen 2 par Eric Martins -->
<!-- Crée le 13 juin 2020 -->
<!-- Dernier mise à jour le 13 juin 2020 -->



//11.La barre de recherche permet de faire un tri sur la liste des jeux affichés ! (15 points)
function Recherche() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('recherche');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// 12. Cette section contient un PieChart affichants les statistiques suivantes : (12 points)
// ['Jeux', 'Copies vendues (Millions)'],
//     ['Breath of the Wild', 19.08],
//     ['Ocarina of Time', 13.22],
//     ['Link\'s Awakening', 10.24],
//     ['Twilight Princess', 9.96],
//     ['Autres', 48.85]

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Jeux', 'Copies vendues (Millions)'],
        ['Breath of the Wild', 19.08],
        ['Ocarina of Time', 13.22],
        ['Link\'s Awakening', 10.24],
        ['Twilight Princess', 9.96],
        ['Autres', 48.85]
    ]);

    var options = {
        title: 'Copies vendues'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


// 13.Cette section contient un GeoChart (faites une petite recherche ) affichants les statistiques
// suivantes : (13 points)
// ['Country', 'Popularity'],
//     ['Japan', 1000],
//     ['United States', 1000],
//     ['Canada', 400],
//     ['Mexico', 200],
//     ['Australia', 200],
//     ['France', 800],
//     ['UK', 500],
//     ['Italy', 500],
//     ['Germany', 500],
//     ['RU', 200],
//     ['Brazil', 0]

google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Japan', 1000],
        ['United States', 1000],
        ['Canada', 400],
        ['Mexico', 200],
        ['Australia', 200],
        ['France', 800],
        ['UK', 500],
        ['Italy', 500],
        ['Germany', 500],
        ['RU', 200],
        ['Brazil', 0]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

// 15 .la section “Zelda en chiffres” contenant les graphiques utilise la librairie AOS (animate on
// scroll) pour exécuter l’effet nommé fade-up. (13 points)
AOS.init();
