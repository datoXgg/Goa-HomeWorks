const carInfo = {
    brand: "Porsche",
    model: "911",
    year: 2020,
    color: "black",
    engine: 6.5,
    fullInfo: function() {
         const flInfo = "Car brand is " + this.brand + ", model is " + this.model + ", year is " + this.year + ", car color is " + this.color + ", engine is " + this.engine;
         return flInfo;
    }
};

console.log(carInfo);
console.log(carInfo.fullInfo());
