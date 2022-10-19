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
 export {getRandomElement, getRandomNumber, checkStringLength, getRandomPositiveInteger};  