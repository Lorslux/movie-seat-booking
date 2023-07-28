const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie select event
movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value;
    updateSelectedCount();
})

//Seat click event
container.addEventListener('click', (event) => {
    console.log(event.target); //you see what element you're clicking ex: seat, screen, seat occupied
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){
        event.target.classList.toggle('selected');

        updateSelectedCount();
    }
})