import {getPets} from './data/petData.js';
import {buttStuff} from './events.js';

function init() {
    getPets();
    buttStuff();
}

init();