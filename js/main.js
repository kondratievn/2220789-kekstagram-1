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



const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}


function getRandomNumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(getRandomNumber(1, 3));


function getRandomElement (elements){
  return elements[getRandomNumber(0, elements.length - 1)];
}


let avatarMaxNumber = 6
let commentsId = 0;
function createComments (count){
  const comments = [];
  for (let i = 0; i < count; i++){
    const anyComment = {
      id: commentsId++,
      avatar: `img/avatar${getRandomNumber(1, avatarMaxNumber)}.svg`,
      message: COMMENTS(getRandomElement(COMMENTS)),
      name: NAMES(getRandomElement(NAMES))
    };
    comments.push(anyComment);
  }
  return comments
} 

let commentsQuantity = 50
let minLikes = 15
let maxLikes = 200
function createPicture (count){
  const picture = [];
  for (let i = 0; i < count; i++){
    const anyPicture = {
      id: i++,
      url: `photos/${i++}.jpg`,
      likes: getRandomNumber(minLikes, maxLikes),
      comments: createComments(commentsQuantity),
      description: DESCRIPTIONS(getRandomElement(DESCRIPTIONS))

    };
  }
}
 
console.log('Привет как дела', 6);
