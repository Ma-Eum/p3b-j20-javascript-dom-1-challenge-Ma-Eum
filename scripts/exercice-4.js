console.log('Vous pouvez commencer votre exercice 4 :).');

var p = document.getElementById("monParagraphe");
var allChildP = p.childNodes;
for (var counter = 0; counter < allChildP.length; counter++) {
    if (allChildP[counter].nodeType == 3) {
        console.log(allChildP[counter]);
    }
}