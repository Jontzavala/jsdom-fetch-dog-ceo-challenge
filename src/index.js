console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedsUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed');
    fetchDogPics();
    fetchDogBreeds();
});

function fetchDogPics() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => createImgElementsFromArray(json)) 
};


function createImgElementsFromArray(json) {
    const main = document.getElementById("dog-image-container")
    json["message"].forEach(imgUrl => {
      const newImg = document.createElement("img")
      newImg.src = imgUrl
      main.appendChild(newImg)
});
};

function fetchDogBreeds(){
    fetch(breedsUrl)
    .then(resp => resp.json())
    .then(json => createBreedsArrayFrom(json))
};

function createBreedsArrayFrom(json) {
    const breedsArray = Object.keys(json.message)
    breedsArray.forEach(breed => addBreed(breed));
};

function addBreed(breed){
    const ul = document.getElementById("dog-breeds");
    const li = document.createElement("li");
    li.innerHTML = breed;
    ul.appendChild(li);
    li.addEventListener("click", updateColor);
};

function updateColor(event) {
    event.target.style.color = 'purple';
    console.log(event)
};

function addBreedsSelectListener() {
    let breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener('change', function(event) {
        letter = event.target.value
        console.log(letter)
        showBreedsByLetter(letter);
    });
};

function removeChildrenFromUl() {
    const ul = document.getElementById("dog-breeds");
    ul.innerHTML = "";
};


function showBreedsByLetter(letter){
    removeChildrenFromUl();
    console.log(breeds)
};