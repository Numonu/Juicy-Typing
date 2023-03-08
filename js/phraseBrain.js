import {CharNodes} from "./charNodes.js";
import {loader} from "./main.js";

/**
 * 
 * @param {string} str Requiere la letra que contendra este recuadro
 * @returns Devuelve un nodo DOM que muestra la letra en un recuadro estilizado
 */
const createChar = function (str) {
    const liItem = document.createElement("li");

    liItem.classList.add("phrase__char");

    liItem.textContent = str.toLowerCase();

    CharNodes.addCharNode(liItem); //salvamos este elemento

    return liItem;
};

/**
 * Se usa para que las palabras no se separen por el salto de linea
 * @returns Devuelve un nodo DOM que se usa para encapsular recuadros de letra
 */
const createGlo = function () {
    const phraseGlue = document.createElement("div");

    phraseGlue.classList.add("phrase__glue");

    return phraseGlue;
};

/**
 * Se usa para generar una frase
 * @param {array} phrase Requiere una frase en cadenas o un arreglo de palabras
 * @param {object} parent Requiere un nodo DOM , alli es donde se genera la frase
 */
const createPhrase = function (phrase , parent) {
    
    let phraseLocal;
    if(typeof phrase == "string") phraseLocal = phrase.split(" ");
    else phraseLocal = [...phrase];

    phraseLocal.forEach((element) => {
        const phraseGlue = createGlo();

        for (let index = 0; index < element.length; index++) {
            let elementChar = element[index];

            if (/[.,'_-]/gi.test(elementChar)) break;

            const charElement = createChar(elementChar.toLowerCase());

            phraseGlue.appendChild(charElement);
        }
        parent.appendChild(phraseGlue);
    });

    loader.style.display = "none";//quitamos el loader
};

export const PhraseBrain = {
    createPhrase,
}
