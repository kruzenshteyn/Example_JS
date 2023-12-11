
import initialCards from "../utils/initialCards.js";

console.log(initialCards);

let index = Math.floor(Math.random() * initialCards.length);

let cardsArray = initialCards.map((item) => item); 



//////////////////
const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');

function createCard(data)
{
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardLink = cardElement.querySelector('.card__image');
  cardLink.src = data.link;
  cardLink.alt = data.name;
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = data.name;
  cards.append(cardElement); 
}

cardsArray.forEach(card => {
  createCard(card);
});


/////////


function AddNewCard(data)
{
  cardsArray.push(data);
  createCard(data);
}

const nn = 'Камчатка';
const ll = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';


AddNewCard({name:nn, link:ll});


console.log(cardsArray);

const cardElementTest = document.querySelectorAll('.card:first-child')[0]
    .querySelector('.card__like').classList.add('card__like_checked');


////


let buttonAddImage = document.querySelector('.popup__button');
buttonAddImage.addEventListener('click', ()=>{
  const name = document.querySelector('#popup__input_title').value;
  const link = document.querySelector('#popup__input_link').value;
  AddNewCard({name:name, link:link});
});


//////////////////

const dialogElem = document.getElementById("dialog-id");
let buttonChangeProfile = document.getElementById('menu__button_changeProfile');
buttonChangeProfile.addEventListener('click', (event)=>{
  console.log(event);
  dialogElem.showModal();
});

document.addEventListener('click', (event)=>{
  let tg = event.target;
  if(tg.classList.contains('card__image'))
    console.log(event.target);
})

////

let profileName = document.querySelector('#profile__input_name');
console.log(`Значение pl = ${profileName.placeholder}`);

let profileAbout = document.querySelector('#profile__input_about');
console.log(`Значение pl = ${profileAbout.placeholder}`);

let buttonProfile = document.querySelector('.profile__button');

console.log(`Значение button = ${buttonProfile}`);

function showClick() {
  console.log(`Имя = ${profileName.value}\nО себе = ${profileAbout.value}`);
}

buttonProfile.addEventListener('click', showClick);

let profileImage = document.querySelector('.profile__image');

function ShowImage(){
  if(profileImage.classList.contains('profile__image_unvisiable')){
    profileImage.classList.remove('profile__image_unvisiable');
  }
  else {
    profileImage.classList.add('profile__image_unvisiable');
  }
}

profileImage.addEventListener('click', ShowImage);