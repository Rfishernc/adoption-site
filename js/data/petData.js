import {setPets, writeToDom, writePets, getPet} from '../comp/petComp.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setPets(data.pets);
    writePets(getPet());
}

function postFail() {
    console.log('shits fucked');    
}

function getPets() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', './db/pets.json');
    request.send();
}

export {getPets};