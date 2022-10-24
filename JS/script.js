/* 
creare struttura base con numeri da 1 a 100
creare un elemento corrispondente ai multipli di 3 e chiamarlo "Fizz"
creare un elemento corrispondente ai multipli di 5 e chiamarlo "Buzz"
creare un elemento corrispondente ai multipli di 3 e di 5 e chiamarlo "FizzBuzz"

SE un numero della tabella è divisibile per 3
  -mettere nel riquadro l'elemento Fizz
ALTRIMENTI SE un numero della tabella è divisibile per 5
  -mettere nel riquadro l'elemento Buzz
ALTRIMENTI SE un numero della tabella è divisibile per 3 e per 5
  -mettere nel riquadro l'elemento FizzBuzz
FINE SE 
*/

const eleSquare = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  const three = i % 3;
  const five = i % 5;

  if (three === 0 && five === 0) {
    eleSquare.innerHTML += `<div class="square fb">FizzBuzz</div>`;
  } else if (three === 0) {
    eleSquare.innerHTML += `<div class="square fizz">Fizz</div>`;
  } else if (five === 0) {
    eleSquare.innerHTML += `<div class="square buzz">Buzz</div>`;
  } else {
    eleSquare.innerHTML += `<div class="square">${i}</div>`;
  }
}
