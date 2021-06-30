console.log('Vous pouvez commencer votre exercice 2 :).');

/* Meilleure version (on cible directement les paragraphes). */
/*
var paragraphs = document.querySelectorAll("p.uneClasse");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].removeAttribute("id");
}
*/

/* Version moins optimisée : on vérifie si chaque noeud est un paragraphe. */
var paragraphs = document.getElementsByClassName("uneClasse");
for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].tagName.toLowerCase() == "p") {
        paragraphs[i].removeAttribute("id");
    }
}