import { dataSeries } from './dataSerie.js';
var seriesTbody = document.getElementById('series');
var averageSeasons = document.getElementById("average-seasons");
renderSeriesInTable(dataSeries);
averageSeasons.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Deploying shows in the table');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a href=\"#\" class=\"clickable\" data-id=\"").concat(serie.name, "\">").concat(serie.name, "</a></td>\n                           <td>").concat(serie.producer, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var numberSeasons = 0;
    var average = 0;
    series.forEach(function (serie) { return numberSeasons = numberSeasons + serie.seasons; });
    average = numberSeasons / series.length;
    return average;
}
function searchSerieByName(nameKey, series) {
    var matchingSeries = nameKey === '' ? dataSeries : series.filter(function (s) { return s.name.match(nameKey); });
    return matchingSeries[0];
}
document.addEventListener('click', function (event) {
    var clickedElement = event.target;
    if (clickedElement.classList.contains('clickable')) {
        var serieName = clickedElement.dataset.id;
        var selectedSerie = searchSerieByName(serieName, dataSeries);
        var cardTitle = document.querySelector('#cardTitle');
        var cardText = document.querySelector('#cardText');
        cardTitle.textContent = selectedSerie.name;
        cardText.innerHTML = "\n      <p>Name: ".concat(selectedSerie.name, "</p>\n      <p>Review: ").concat(selectedSerie.review, "</p>\n      <p>URL: ").concat(selectedSerie.url, "</p>\n      <img class=\"serie-image\" src=\"").concat(selectedSerie.image, "\" alt=\"").concat(selectedSerie.name, " image\">\n\n    ");
    }
});
