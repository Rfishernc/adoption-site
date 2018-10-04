let pets;

function setPets(data) {
    pets = data;
}

function getPet() {
    return pets;
}

function writeToDom(string) {
    document.getElementById('petDiv').innerHTML = string;
}

function writePets(animal) {
    let string = '';
    for(let i = 0; i < animal.length; i++) {
    string +=   `<div class="card col-4">`
    string +=       `<div class="card-header">${animal[i].name}</div>`
    string +=       `<div class="card-body">` 
    string +=           `<img class="card-img-top" src=${animal[i].imageUrl} alt=${animal[i].name}>`
    string +=           `<p class="card-text">${animal[i].color}</p>`
    string +=           `<p class="card-text">${animal[i].specialSkill}</p>`
    string +=           `<div class="card-footer ${animal[i].color}">${animal[i].type}</div>`
    string +=      `</div>`
    string +=           `</div>`;
    }
    writeToDom(string);
}

export {setPets, writePets, writeToDom, getPet};