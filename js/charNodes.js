let observer;

let charNodeList = [];
let charLetterList = [];
let localIndedx = 0;

//Administrador

/**
 * 
 * @param {object} value Requiere un nodo DOM
 */
const addCharNode = function(node){

    if(charNodeList.length < 1)node.classList.add("phrase__char--focus");

    charNodeList.push(node);
    charLetterList.push(node.textContent);
}

const clearCharNodes = function(){
    charNodeList = [];
    charLetterList = [];
    localIndedx = 0;
}

 //Funcionales

 /**
  * Se usa para verificar si el usuario pulso la letra correcta en la frase actual , 
  * en consecuencia modifca las clases para aplicar animaciones ,ademas controla
  * el estado del juego
  * @param {string} str Requiere el input actual de teclado
  */
const compareInput = function(str){

    if(str == charLetterList[localIndedx]){

        charNodeList[localIndedx].classList.add("phrase__char--correct");
        charNodeList[localIndedx].classList.remove("phrase__char--incorrect");

        charNodeList[localIndedx].classList.replace("phrase__char--focus" , "phrase__char--blur");

        //comprueba el estado del juego
        if(!charLetterList[localIndedx + 1]) {
            clearCharNodes();
            observer();
            return;
        }; 
        localIndedx++; //ojo

        charNodeList[localIndedx].classList.add("phrase__char--focus");
    }
    else{

        charNodeList[localIndedx].classList.add("phrase__char--incorrect");
        charNodeList[localIndedx].classList.remove("phrase__char--correct");
    }
}

/**
 * Se configura el observador , una funcion que se ejecuta cuando una frase termina
 * @param {object} callback Requiere una funcion
 */
const setObserver = function(callback){
    observer = callback;
}


export const CharNodes = {
    addCharNode,
    compareInput,
    setObserver
}