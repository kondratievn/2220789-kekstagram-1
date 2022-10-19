const NAMES = [
  'Никита',
  'Влад',
  'Костя',
  'Антон',
  'Сергей',
  'Миша',
  'Ярослав',
  'Тимур',
];

const DESCRIPTIONS = [
  'Я с семьёй',
  'Я на отдыхе',
  'Мы с друзьями',
  'На дне рождении папы',
  'У бабушки в саду',
  'Моё 20-ти летие',
  'Окончание школы',
  'Летние каникулы',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
];

const PICTURES_NUMBER = 25;


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


function checkLength (string, maxLength) {
  return string.length <= maxLength;
}


function getRandomNumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(getRandomNumber(1, 3));


const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};



let commentId = 0;
let avatarMaxNumber = 0;
const createComment = () => {
  return {
    id: commentId++,
    message: getRandomArrayElement(DESCRIPTIONS),
    avatar: `img/avatar${getRandomNumber(1, avatarMaxNumber)}.svg`,
    name: getRandomArrayElement(NAMES)
  }
};

let commentQuantity = 0;
let minLikes = 0;
let maxLikes = 0;
let pictureId = 0;
const createPicture = () => {
  return {
    id: pictureId++,
    url: `photos/${pictureId++}.jpg`,
    likes: getRandomNumber(minLikes, maxLikes),
    comment: createComment(commentQuantity),
    description: DESCRIPTIONS(getRandomElement(DESCRIPTIONS))
  }
};
  

checkLength(); 
createPicture(PICTURES_NUMBER);
  
 

