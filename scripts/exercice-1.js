console.log('Vous pouvez commencer votre exercice 1 :).');

/*
var reponse = confirm("Souhaitez-vous afficher cette page avec un thème sombre ?");
if (reponse) {
    // Si l'utilisateur a répondu oui, on active le mode sombre.
    var body = document.querySelector("body");
    body.setAttribute("class", "darkTheme");
}

ou

*/


var maVariable = prompt("Souhaitez-vous afficher cette page avec un thème sombre ?");
if ((maVariable != "") && (maVariable == "oui" || maVariable == "Oui"))
{
    document.querySelector("body").setAttribute("class","darkTheme");
}