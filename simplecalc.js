// Crad zu Celsius Umrechnen

let far = prompt("Bitte °C eingeben:");

let result = ctof(far);


function ctof(cel){

   return cel * (9 / 5) + 32;

}

document.getElementById('output').innerHTML = "Fahreinheit: " + result;

console.log(result)
