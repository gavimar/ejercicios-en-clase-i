/* eslint-disable no-console */
'use strict';

class Car {
  constructor(name, city) {
    // El constructor solo se ejecuta al arrancar, cada vez que hacemos un new
    // El constructor no es obligatorio
    this.name = name.toUpperCase();
    this.city = city;
    this.distance = 0;
    this.wheels = 4;
  }

  printPosition() {
    console.log(`El auto ${this.name} ha avanzado ${this.distance} metros`);
  }

  move(incDistance = 0) {
    this.distance = this.distance + incDistance;
  }
}

const myCar = new Car('Opel', 'Madrid');
myCar.move(10);
myCar.printPosition();
myCar.move(10);
myCar.printPosition();

const yourCar = new Car('Nissan', 'Barcelona');
yourCar.move(20);
