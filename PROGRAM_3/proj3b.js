const car = {
    make: "Toyota",  
    model: "Corolla",
    year: 2018,
    color: "Blue"
};
console.log("Car properties:", car);
delete car.model;
console.log("Car properties after delete:", car); 
const objectLength = Object.keys(car).length;
console.log("Object length:", objectLength);