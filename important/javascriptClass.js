// class example
class Vehicle {
  #wheel = 4;
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  start() {
    console.log('Starting...');
  }
  static info() {
    console.log(`Car is a vehicle which has ${new Vehicle().#wheel} wheels`);
  }
}

// inheritance
class Car extends Vehicle {
  constructor(name, maker, engine, speed) {
    super(name, maker, engine);
    this.speed = speed;
  }
  stop() {
    console.log('Stopping...');
  }

  // overriding
  start() {
    console.log('Overriding...');
  }
}

// what is static method?
// A static method is a method that belongs to the class itself, not the class's instance.

console.log(Vehicle.info());

const car = new Car('Toyota', 'Toyota', 'V8', 200);