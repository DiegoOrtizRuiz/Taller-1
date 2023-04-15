import { series } from './dataSerie.js';
var seriesTbody = document.getElementById('series');
var averageSeasons = document.getElementById("average-seasons");
renderCoursesInTable(series);
averageSeasons.innerHTML = "".concat(getAverageSeasons(series));
function renderCoursesInTable(series) {
    console.log('Deploying shows in the table');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.producer, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var numberSeasons = 0;
    var average = 0;
    series.forEach(function (course) { return numberSeasons = numberSeasons + course.seasons; });
    average = numberSeasons / series.length;
    return average;
}
