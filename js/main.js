function getrandomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  console.log(getrandomInteger(1, 3));

  
  
  function checkLength(str, maxLength){
    if(str.length > maxLength){
        return false;
    }
    else{
        return true;
    }
  }
  console.log('Привет как дела', 6);
