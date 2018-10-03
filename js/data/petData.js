import {setPets} from '../comp/petComp.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setPets(data.pets);
}

function postFail() {
    console.log('shits fucked');    
}

function getPets() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', './db/char.json');
    request.send();
}

export {getPets};