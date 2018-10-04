import {getPet, writePets, writeToDom} from './comp/petComp.js';

function buttStuff() {
    document.getElementById('buttDiv').addEventListener('click', function() {
        if(event.target.id === 'allButt') {
            writePets(getPet());
        }
        else {let newPets = getPet();
            console.log(newPets);
            let filteredPets = newPets.filter(x => x.type === event.target.id);
            console.log(filteredPets);
            writePets(filteredPets);
        }
    })
}

export {buttStuff};