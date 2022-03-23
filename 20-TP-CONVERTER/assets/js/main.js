// Par Fabien Goncalves Fonseca //
// Realisation d'un exercice dans le cadre de ma formation //
//---------------------------------------------------------------------------------------------------------------------//


let formulaire = document.getElementById('converterForm'); //cible le formulaire dans une variable//
let saisie = document.getElementById('colFormLabel'); //cible la saisie dans le formulaire qu'on insere dans une variable//
let erreur = document.getElementById('erreur'); //Cible le message d'erreur//
let informations = document.getElementById('informations') //Cible la balise <p> de ma page html pour annoncer le resultat de la conversion//
const button = document.getElementById('Btn-Submit') //Cible le bouton submit//
let instruction = document.createElement('p'); //Creation d'un paragraphe qui sera le resultat grâce à la varible instruction//
// Creation du système de calcule//

let celsus = saisie; //Celsus sera la variable qui prend la saisie de l'utilisateur//

//Formule qui permet de convertir le degre en fahreinheit//

function convertToF(celsus) {

    let fahrenheit = parseInt(celsus) * 9 / 5 + 32;

    return fahrenheit;
};

//Le bouton est désactiver tant que l'utilisateur ne rentre pas un chiffre dans l'input//
button.disabled = true;

// Event qui permet de réagir en fonction de ce que rentre l'utilisateur sans forcement submit//

saisie.addEventListener('keyup', () => {

    if (isNaN(saisie.value)) {

        erreur.style.display = 'inline'; //le message d'erreur apparait si la saisie n'est pas un nombre//
        erreur.className = "alert alert-danger" //Class de bootstrap qui rend le message d'erreur rouge et d'un esthetisme précis//
        button.disabled = true;  //Button désactivé vu que saisie = isNaN//
        saisie.style.borderColor = 'red'; // la case de l'input est rouge pour indiquer l'erreur//

    } else {

        erreur.style.display = 'none'; // message d'erreur n'apparait pas//
        button.disabled = false; //Bouton activé, peut submit//
        saisie.style.borderColor = '#0097A7'; // couleur de l'input pour dire c'est valide//
    }
});


// Event qui permet de réagir en fonction de ce que rentre l'utilisateur en cliquant sur le bouton submit//

formulaire.addEventListener('submit', function (e) {
    //Desactivation du comportement par defaut de Firefox/chrome etc...
    e.preventDefault();

    celsus = saisie.value; //celsus prend la valeur saisie//
    convertToF(celsus) // utilisation de la formule prédefinit plus haut pour convertir. On utilise la valeur de Celsus//
    saisie.value = ''; // On réinitialise la valeur de la saisie//

    if (isNaN(convertToF(celsus))) {

        instruction.className = "alert alert-danger"; //type de reponse negatif si celsus isNaN//
        instruction.textContent = `Veuillez rentrer un nombre s'il vous plait !`; //Message dans l'instruction//
        
    }
    else {

        instruction.className = "alert alert-info"; //type de reponse positif bootstrap//
        instruction.textContent = `${convertToF(celsus)} °F`; //Reponse de la conversion//
    
    }
    
});
    document.getElementById('informations').prepend(instruction);


        