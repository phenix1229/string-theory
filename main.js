function crazyCase(str) {
let newStr = '';

for (let i = 0; i < str.length; i++){
  if (i % 2 === 0) {
    newStr = newStr + str[i].toLowerCase();
  } else {
    newStr = newStr + str[i].toUpperCase();
  }
}
return newStr;
}

function ciEmailify(nameStr) {
  nameStr = nameStr.toLowerCase();
  let newStr = '';

  for (let i = 0; i < nameStr.length; i++){
    if (nameStr[i] === ' '){
      newStr = newStr + '.';
    } else {
      newStr = newStr + nameStr[i];
    }
  }
  newStr = `${newStr}@codeimmersives.com`
  return newStr
}

function exclaim(str) {
  let newStr = ''
  
  for (let i = 0; i < str.length; i++){
    if (str[i] === '?' || str[i] === '.') {
      newStr = newStr + '!';
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

function reverse(str) {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--){
    newStr = newStr + str[i];
  }
  return newStr
}

function crazyCase2ReturnOfCrazyCase(str) {
  str = str.toLowerCase();
  let newStr = '';
  let count = 0

  for (let i = 0; i < str.length; i++){
    if (count % 2 === 0) {
      newStr = newStr + str[i];
    } else {
      newStr = newStr + str[i].toUpperCase();
    }
    if (str[i] !== ' '){
      count++;
    }
  }
  return newStr;
}

function titleCase(str) {
  str = str.toLowerCase();
  let newStr = '';

  for (let i = 0; i < str.length; i++){
    if (i === 0 || i > 0 && str[i - 1] === ' '){
      newStr = newStr + str[i].toUpperCase();
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

function onlyVowels(str) {
  let newStr = '';
  
  for (let i = 0; i < str.length; i++){
    if ('aeiouAEIOU'.includes(str[i])){
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

function crazyCase3SonOfCrazyCase(str) {
  str = str.toLowerCase();
  let newStr = '';
  let count = 0

  for (let i = 0; i < str.length; i++){
    if (count % 2 === 0) {
      newStr = newStr + str[i];
    } else {
      newStr = newStr + str[i].toUpperCase();
    }
    if ('abcdefghijklmnopqrstuvwxyz'.includes(str[i])){
      count++;
    }
  }
  return newStr;
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}