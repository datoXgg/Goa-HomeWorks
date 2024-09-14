class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      console.log(`${this.make} ${this.model}'s engine started.`);
    }
  
    stopEngine() {
      console.log(`${this.make} ${this.model}'s engine stopped.`);
    }
  }
  
  const car1 = new Car("BMW", "M3", 2020);
  const car2 = new Car("Mercedes", "AMG GT", 2021);
  
  car1.startEngine();  
  car1.stopEngine();   
  
  car2.startEngine();  
  car2.stopEngine();  
  