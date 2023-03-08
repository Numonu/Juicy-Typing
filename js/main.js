import {PhraseBrain} from "./phraseBrain.js";
import {CharNodes} from "./charNodes.js";

const phraseDom =  document.querySelector(".phrase");
export const loader = document.getElementById("loader");


addEventListener("keypress" , e => {
    CharNodes.compareInput(e.key);
})

async function GenerateFact(){
    phraseDom.innerHTML = "";

    loader.style.display = "initial";

    const randomNumber = Math.floor(Math.random() * 100);

    try{
        const factJson = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`);
        const factObj = await factJson.json();
        
        const arr = Array.from(factObj.title);
        arr.length = 30;
        const title = arr.join("");

        PhraseBrain.createPhrase(title , phraseDom);
    }
    catch(error){
        GenerateFact();
    }
}
GenerateFact();


CharNodes.setObserver(GenerateFact);