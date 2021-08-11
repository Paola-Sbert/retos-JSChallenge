const plataformsStreaming = [
    {name: "Netflix", price:100},
    {name: "Disney+", price:100},
    {name: "Amazon Prime", price:100},
    {name: "HBO Max", price:100}
];

const cines = [
    {name: "Hoyts", ticketPrice:100},
    {name: "Complejo Cinerama", ticketPrice:100},
    {name: "Cines Dinosaurio Mall", ticketPrice:100},
    {name: "Gran Rex", ticketPrice:100},
];

function isChecked (element) {
    return element.checked;
}

function selectedPlatform(listPlatform) {
    
    for (let i = 0; i < listPlatform.length; i++) {
        if(isChecked(listPlatform[i])){
            selected = listPlatform[i].value;
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
    console.log(cantidadSeriesPelis);

    const platforms = document.getElementsByName("PlatformsStreaming");
    const chosenPlatform = selectedPlatform(platforms);
    console.log(chosenPlatform);

    const cinemas = document.getElementsByName("Cines");
    const chosenCinema = selectedCinema(cinemas);
    console.log(chosenCinema);

}