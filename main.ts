
import { Serie } from './serie.js';

import { series } from './dataSerie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasons: HTMLElement = document.getElementById("average-seasons")!;



renderCoursesInTable(series);

averageSeasons.innerHTML = `${getAverageSeasons(series)}`


function renderCoursesInTable(series: Serie[]): void {
  console.log('Deploying shows in the table');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.producer}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
 


function getAverageSeasons(series: Serie[]): number {
  let numberSeasons: number = 0;
  let average: number = 0;
  series.forEach((course) => numberSeasons = numberSeasons + course.seasons);
  average = numberSeasons / series.length;
  return average;
}


