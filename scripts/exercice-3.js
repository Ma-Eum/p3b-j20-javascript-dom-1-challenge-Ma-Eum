// bon exo pour s'entrainer a naviguer entre les balises
console.log('Vous pouvez commencer votre exercice 3 :).');

// Point de départ.
var span = document.querySelector("span");
console.log(span);
var p = span.parentNode;
console.log(p);
var div = p.nextSibling.nextSibling;
console.log(div);
var divp = div.firstChild.nextSibling;
console.log(divp);
var text = divp.lastChild;
console.log(text);