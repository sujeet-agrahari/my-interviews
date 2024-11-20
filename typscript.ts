// difference between tuple and enum
const tuple: [string, number] = ['hello', 10];
enum Color {
  Red,
  Green,
  Blue,
}

// q: what is the difference between tuple and enum?
// a: Tuple is a fixed-length array that can hold elements of different types, while enum is a set of named constants.

enum Animal {
  Dog = 1,
  Cat = 2,
  Lion = 3,
}

// q: what is the difference between interface and types
// a: Interfaces are used to define the structure of an object, while types are used to define custom data types.
// example of an interface
interface Person {
  name: string;
  age: number;
}
// example of a type
type PersonType = {
  name: string;
  age: number;
};

// q: what operators types support
// a: Types support operators such as union, intersection, and negation.
// example of union type
type Status = 'active' | 'inactive';
type Role = 'admin' | 'user';

// give an example of negation type
type NotActive = Exclude<Status, 'active'>;
// give an example of intersection type
type ActiveUser = Status & Role; // 'active' & 'user'
const active = 'active' as Status;
const user = 'user' as Role;

// q: what is partial type
// a: Partial types allow you to make all properties of a type optional.
// example of partial type
type PartialPerson = Partial<Person>;
const partialPerson: PartialPerson = { name: 'John' };

// q: what is required type
// a: Required types make all properties of a type required.
// example of required type
type RequiredPerson = Required<Person>;
// q: what is readonly type
// a: Readonly types make all properties of a type read-only.
// example of readonly type
type ReadonlyPerson = Readonly<Person>;
const readonlyPerson: ReadonlyPerson = { name: 'John', age: 30 };
// readonlyPerson.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.

// q: what is pick type
// a: Pick types allow you to select a subset of properties from a type.
// example of pick type
type PickPerson = Pick<Person, 'name'>;
const pickPerson: PickPerson = { name: 'John' };

// q: what is omit type
// a: Omit types allow you to exclude a subset of properties from a type.
// example of omit type
type OmitPerson = Omit<Person, 'age'>;
const omitPerson: OmitPerson = { name: 'John' };

// q: what is keyof type
// a: keyof types allow you to get the keys of a type as a union of string literal types.
// example of keyof type
type PersonKeys = keyof Person; // 'name' | 'age'

//Intersection types allow you to combine multiple types into one.
//This means that an object of an intersection type will have all the properties of the intersected types.

// example of intersection type
type User = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  role: string;
};

type UserEmployee = User & Employee;
const userEmployee: UserEmployee = {
  name: 'John',
  age: 30,
  id: 1,
  role: 'admin',
};

type userOrEmployee = Employee | User;
const userOrEmployee: userOrEmployee = {
  name: 'John',
  age: 30,
  role: 'admin',
};

const userOrEmployee3: userOrEmployee = {
  name: 'John',
  role: 'admin',
  id: 2,
};

type Point = {
  x: number;
  y: number;
};

type PointX = Pick<Point, 'x'>;

interface A {
  a: number;
  c: number;
}

interface B {
  b: boolean;
  c: number;
}

//  A | B is assignable to either A or B. It must have properties from A or B (or both)
const oA: A | B = {
  a: 6,
  c: 6,
};

const oB: A | B = {
  b: true,
  c: 6,
};

const oC: A | B = {
  a: 6,
  b: true,
  c: 6,
};

// A & B, if it is assignable to both A and B (and therefore must have properties of both A and B).
const oD: A & B = {
  a: 6,
  b: true,
  c: 6,
};

// q: what is a generic type
// a: Generic types allow you to define a type that can work with a variety of data types.
// example of generic type
type Box<T> = {
  value: T;
};

const box: Box<number> = { value: 10 };
const box2: Box<string> = { value: 'hello' };

// q: what is a generic function
// a: Generic functions allow you to define a function that can work with a variety of data types.
// example of generic function
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<number>(10);

// q: what is abstract class in typescript?
// a: An abstract class is a class that cannot be instantiated and is typically used as a base class. It can contain abstract methods, which must be implemented by derived classes.
// example of abstract class
abstract class Animal2 {
  abstract makeSound(): void;
  move(): void {
    console.log('Moving...');
  }
}

class Dog1 extends Animal2 {
  makeSound(): void {
    console.log('Bark');
  }
}

const dog1 = new Dog1();
dog1.makeSound(); // Bark
dog1.move(); // Moving...

// q: why do we use interfaces in OOP?
// a: Interfaces are used in OOP to define the structure of an object, ensuring that any class implementing the interface adheres to a specific contract. This promotes consistency and reusability in code.
// example of interface in OOP
interface Shape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area()); // 200
console.log(rectangle.perimeter()); // 60

// q: what is polymorphism in OOP?
// a: Polymorphism is the ability of different objects to be accessed through the same interface, allowing for different implementations of the same method. It promotes flexibility and reusability in code.
// example of polymorphism
interface Animal3 {
  makeSound(): void;
}

class Dog implements Animal3 {
  makeSound(): void {
    console.log('Bark');
  }
}

class Cat implements Animal3 {
  makeSound(): void {
    console.log('Meow');
  }
}

function makeAnimalSound(animal3: Animal): void {
  animal3.makeSound();
}

const dog3 = new Dog();
const cat3 = new Cat();

makeAnimalSound(dog3); // Bark
makeAnimalSound(cat3); // Meow

/**
Interface: Cannot provide implementation for methods.
Abstract Class: Can provide implementation for some methods and declare others as abstract.
Inheritance:

Interface: A class can implement multiple interfaces.
Abstract Class: A class can extend only one abstract class.
Instantiation:

Interface: Cannot be instantiated.
Abstract Class: Cannot be instantiated directly.
Use Case:

Interface: Used for defining the shape of an object and ensuring type safety.
Abstract Class: Used for creating a base class with shared implementation and enforcing a contract for derived classes.
 */
