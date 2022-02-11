"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];
const Animal = {
    name: "",
    type: "",
    desc: "",
    age: ""
};
function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        const animal = Object.create(Animal);
        
        console.log(animal);
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        // allAnimals.push(Animal);
        // TODO: MISSING CODE HERE !!!

        // WORKS
        const fullname = jsonObject.fullname.split(" "); 
        const age = jsonObject.age;
        console.log(fullname);
        // via fullname som vi har brudt op i et array, hvor vi efter benytter positionen
        animal.name = fullname[0];
        animal.desc = fullname[2]; 
        animal.type = fullname[3]; 

        animal.age = age;
        allAnimals.push(animal); 
        
        // TESTING 
        // const fullname = jsonObject.fullname; 
        // const age = jsonObject.age;
        // console.log(fullname);
        
        // animal.name = fullname.substring(0, fullname.indexOf(" "));
        // animal.type = fullname.substring(fullname.lastIndexOf(" "));
        // animal.desc = fullname.substring(fullname.lastindexOf(""));
        
        // animal.age = age;
        // allAnimals.push(animal); 
        
    });

    displayList();
}

function displayList() {
    console.log("helo", allAnimals);
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


