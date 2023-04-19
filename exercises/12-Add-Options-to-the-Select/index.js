let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let select = document.querySelector("#mySelect");

// Agregar los países al select
for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.value = countries[i];
    option.text = countries[i];
    select.appendChild(option);
}

// Agregar event listener al evento 'change'
select.addEventListener("change", function() {
    // Obtener el país seleccionado
    let selectedCountry = select.value;
    // Mostrar una alerta con el país seleccionado
    alert("País seleccionado: " + selectedCountry);
});