let statistics = { 
    redCars: 21, 
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

const object = { a: 1, b: 2, c: 3 };

for (const property in statistics) {
  console.log(`${property}: ${statistics[property]}`);
}