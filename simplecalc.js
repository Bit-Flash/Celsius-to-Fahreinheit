// Crad zu Celsius Umrechnen
const eele = document.getElementById("btn");
            eele.addEventListener("click", ctof);


            function ctof() {

            document.getElementById('output').innerHTML = "Fahrenheit: " + (document.getElementById("celsi").value * (9 / 5) + 32);
            }




