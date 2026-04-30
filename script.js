let selectedSeats = [];
let selectedMovie = "";

createSeats();

function createSeats(){
let seatContainer = document.getElementById("seatContainer");

for(let i=1;i<=40;i++){

let seat = document.createElement("div");
seat.classList.add("seat");
seat.innerText = i;

seat.onclick = function(){

seat.classList.toggle("selected");

if(selectedSeats.includes(i)){
selectedSeats = selectedSeats.filter(s => s != i);
}else{
selectedSeats.push(i);
}

};

seatContainer.appendChild(seat);
}
}

function nextPage(pageNo){

let pages = document.querySelectorAll(".page");

pages.forEach(page=>{
page.classList.remove("active");
});

document.getElementById("page"+pageNo).classList.add("active");

document.getElementById("amount").innerText = selectedSeats.length * 180;
document.getElementById("ticketAmount").innerText = selectedSeats.length * 180;
document.getElementById("ticketSeats").innerText = selectedSeats.join(", ");
document.getElementById("ticketMovie").innerText = selectedMovie;
document.getElementById("ticketEmail").innerText =
document.getElementById("payEmail").value;

}

function selectMovie(name){

selectedMovie = name;

document.getElementById("movieName").innerText = name;

let allMovies = document.querySelectorAll(".movie");

allMovies.forEach(movie=>{
movie.classList.remove("selected");

if(movie.innerText == name){
movie.classList.add("selected");
}
});

}

function login(){

selectedSeats = [];
selectedMovie = "";

document.querySelectorAll(".seat").forEach(seat=>{
seat.classList.remove("selected");
});

document.getElementById("movieName").innerText = "None";

nextPage(2);
}