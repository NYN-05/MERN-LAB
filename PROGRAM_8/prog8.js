const express = require('express');
const app = express();
const port = 3000;

function findPrimes(limit) {
  const primes = [];
  for (let i = 2; i < limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

function findCubes(limit) {
  const cubes = [];
  for (let i = 1; i < limit; i++) {
    const cube = i * i * i;
    if (cube < limit) {
      cubes.push(cube);
    } else {
      break;
    }
  }
  return cubes;
}

app.get('/find_prime_100', (req, res) => {
  res.send(findPrimes(100));
});

app.get('/find_cube_100', (req, res) => {
  res.send(findCubes(100));
});

app.listen(port, () => {
  const urlPrime = `http://localhost:${port}/find_prime_100`;
  const urlCube = `http://localhost:${port}/find_cube_100`;

  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Prime numbers less than 100: ${urlPrime}`);
  console.log(`Cubes of numbers less than 100: ${urlCube}`);
});
