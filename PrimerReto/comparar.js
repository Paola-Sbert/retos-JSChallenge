const platformsStreaming = [
    {name: "Netflix", price:669},
    {name: "Disney+", price:385},
    {name: "Amazon Prime", price:400},
    {name: "HBO Max", price:529}
];

const cines = [
    {name: "Hoyts", ticketPrice:700},
    {name: "Complejo Cinerama", ticketPrice:280},
    {name: "Cines Dinosaurio Mall", ticketPrice:400},
    {name: "Gran Rex", ticketPrice:300},
];

function priceTicket(cinema){
    const cine = cines.find(function(cine){return cine.name === cinema});
    if(cine){
        return cine.ticketPrice;
    }
}

function priceTotalPlatforms(platforms){
    let sumPrime = 0;
    for (let i = 0; i < platforms.length; i++) {
        for (let j = 0; j < platformsStreaming.length; j++) {
            if(platformsStreaming[j].name === platforms[i]){
                sumPrime += platformsStreaming[j].price;
            }
        }
    }
    return sumPrime;
}

function isChecked (element) {
    return element.checked;
}


function selectedPlatform(listPlatform) {
    
    let selected = [];

    for (let i = 0; i < listPlatform.length; i++) {
        if(isChecked(listPlatform[i])){
            selected.push(listPlatform[i].value);
        }   
    }

    return selected;
}

function selectedCinema(listCinema) {
    
    for (let i = 0; i < listCinema.length; i++) {
        if(isChecked(listCinema[i])){
            selected = listCinema[i].value;
        }   
    }

    return selected;
}

function compararPrecios(){
    
    const cantidad = document.getElementById("movieSeriesCount");
    const cantidadSeriesPelis = parseInt(cantidad.value);

    const platforms = document.getElementsByName("PlatformsStreaming");
    const chosenPlatforms = selectedPlatform(platforms);

    const pricePlatforms = priceTotalPlatforms(chosenPlatforms);

    const cinemas = document.getElementsByName("Cines");
    const chosenCinema = selectedCinema(cinemas);
    
    const priceTicketCinema = priceTicket(chosenCinema);
    const priceTotalTickets = cantidadSeriesPelis * priceTicketCinema;

    if(pricePlatforms <= priceTotalTickets){
        document.getElementById("ComparisonResults").innerHTML = "Te conviene más pagar una suscripción ;)";
    }else{
        document.getElementById("ComparisonResults").innerHTML = "Te conviene más pagar las entradas al cine ;)";
    }
}