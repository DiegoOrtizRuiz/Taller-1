import { Serie } from './serie.js';
import { dataSeries } from './dataSerie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasons: HTMLElement = document.getElementById("average-seasons")!;


renderSeriesInTable(dataSeries);



averageSeasons.innerHTML = `${getAverageSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Deploying shows in the table');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a href="#" class="clickable" data-id="${serie.name}">${serie.name}</a></td>
                           <td>${serie.producer}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let numberSeasons: number = 0;
  let average: number = 0;
  series.forEach((serie) => numberSeasons = numberSeasons + serie.seasons);
  average = numberSeasons / series.length;
  return average;
}
function searchSerieByName(nameKey: string, series: Serie[]) {
  const matchingSeries = nameKey === '' ? dataSeries : series.filter(s => s.name.match(nameKey));
  return matchingSeries[0];
}



document.addEventListener('click', (event: MouseEvent): void => {
  const clickedElement = event.target as HTMLElement;
  if (clickedElement.classList.contains('clickable')) {
    const serieName = clickedElement.dataset.id as string;
    let selectedSerie: Serie = searchSerieByName(serieName, dataSeries);
    const cardTitle = document.querySelector('#cardTitle') as HTMLElement;
    const cardText = document.querySelector('#cardText') as HTMLElement;
    cardTitle.textContent = selectedSerie.name;
    cardText.innerHTML = `
      <p>Name: ${selectedSerie.name}</p>
      <p>Review: ${selectedSerie.review}</p>
      <p>URL: ${selectedSerie.url}</p>
      <img class="serie-image" src="${selectedSerie.image}" alt="${selectedSerie.name} image">

    `;
  }
});







