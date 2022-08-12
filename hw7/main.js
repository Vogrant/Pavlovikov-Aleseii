const bulbContainer = document.querySelector('.header');
const cardContainer = document.querySelector('.cards-wrapper');
let cardsArr = [];

const nameArr = ['Wood', 'Black See', 'Near building', 'Alina like this', 'Spring', 'Self', 'Shtorm', 'Rain']
const descriptionArr = ['Deep whole', 'Ivazovskii', 'Repin', 'Shevchenko', 'Gugo', 'Mone', 'Mikilangelo', 'Dali']

function getCards() {
    return {
        img : `https://random.imagecdn.app/${getRandomNumber(490, 500)}/${getRandomNumber(490, 500)}`,
        name : nameArr[Math.floor(Math.random() * nameArr.length - 1) + 1],
        description : descriptionArr[Math.floor(Math.random() * nameArr.length - 1) + 1],
        id : getRandom(),
    };
}

headerRender();
cardsRender();

const deleteButton = document.querySelector('.delete-btn');
const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', () => {
    cardsArr.push(getCards());
    console.log(cardsArr)
    cardsRender()
});

function removeCard(id){
    cardsArr =   cardsArr.filter(el => el.id !== id);
    cardsRender()
}

function getRandom() {
  return   Math.floor(Math.random() * 10000);
}

function cardsRender() {
    let result = '';
    cardsArr.forEach((card) => {
        result += `<div class="card" >
                        <img src="${card.img}" alt="">
                        <p class="name">${card.name}</p>
                        <p class="description">${card.description}</p>
                        <button class="delete-btn" onclick="removeCard(${card.id})"><span class="btn-text">delete</span></button>
                    </div>`
    });

    cardContainer.innerHTML = result;
}

function getRandomNumber(from, to) {
    from = Math.floor(from);
    to = Math.ceil(to);

    return Math.floor(Math.random() * (to - from)) + from;
}

function headerRender() {
    let result = '';

    result += `<div class="snow1"></div>
                <div class="snow2"></div>
                <div class="bulb bu1"></div>
                <div class="bulb bu2"></div>
                <div class="bulb bu3"></div>
                <div class="bulb bu4"></div>
                <div class="bulb bu5"></div>
                <div class="bulb bu6"></div>
                <div class="bulb bu7"></div>
                <div class="bulb bu8"></div>
                <div class="bulb bu9"></div>
                <div class="bulb bu10"></div>
                <button class="add-btn" >generate new <span class="nft">nft</span></button>`

bulbContainer.innerHTML = result
}
