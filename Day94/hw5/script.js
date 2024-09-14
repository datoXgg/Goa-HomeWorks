class Animal {
    constructor(name, breed, color, sound) {
      this.name = name;
      this.breed = breed;
      this.color = color;
      this.sound = sound;
    }
  
    makeSound() {
      return `${this.name} the ${this.breed} says ${this.sound}!`;
    }
  
    describe() {
      return `${this.name} is a ${this.color} ${this.breed}.`;
    }
  }
  
  const pet = new Animal("Loli", "Jack Russell Terier", "White", "Woof");
  
  console.log(pet.describe());   
  console.log(pet.makeSound());  