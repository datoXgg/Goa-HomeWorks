function* generateNumbers() {
    let num = 0;
    while (true) {
      yield num++;
    }
  }
  
  function* generateEvenNumbers() {
    let num = 0;
    while (true) {
      if (num % 2 === 0) yield num;
      num++;
    }
  }
  
  function* generateRandomNumbers() {
    while (true) {
      yield Math.random();
    }
  }
  
  function* generateLetters(word) {
    for (let i = 0; i < word.length; i++) {
      yield word[i];
    }
  }
  
  function* generatePassword() {
    let numbers = '0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += numbers[Math.floor(Math.random() * 10)];
    }
    yield password;
  }
  
  function* generateAdvancedPassword() {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
    yield password;
  }
  