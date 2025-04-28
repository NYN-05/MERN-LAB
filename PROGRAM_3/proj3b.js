const http = require('http'); // Required for creating an HTTP server (if needed)
const express = require('express'); // Required for Express

const car = {
    make: "Toyota",  // Fixed typo
    model: "Corolla", // Fixed typo
    year: 2018,
    color: "Blue"
};

console.log("Car properties:", car);

delete car.model;

console.log("Car properties after delete:", car); 

const objectLength = Object.keys(car).length;

console.log("Object length:", objectLength);
