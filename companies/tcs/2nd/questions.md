1. OOP principals: Abstraction vs Encapsulation, Polymorphism
   Abstraction and encapsulation are two fundamental Object-Oriented Programming (OOP) concepts. They both help in managing complexity, but they serve different purposes:
1. Abstraction:
   • Focuses on what a system does (the behavior).
   • Hides the complexity and shows only the necessary details to the user.
   • Allows you to define an interface (the “what”) without exposing the implementation details (the “how”).
   • Helps in defining the high-level functionality of a system.
1. Encapsulation:
   • Focuses on how a system works internally (the implementation).
   • Bundles the data (attributes) and methods (functions) that operate on the data into a single unit (class).
   • Protects the internal state of the object by restricting access to it and exposing only the necessary methods.
   • Allows you to control how data is accessed or modified (e.g., via getter and setter methods).

Abstraction in Code:

Consider an example of a Shape class with an abstract method draw(). We don’t need to know how each shape is drawn internally—just that it can be drawn.

```ts
abstract class Shape {
  // Abstract method (doesn't have implementation here)
  abstract draw(): void;
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a Circle');
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing a Square');
  }
}

const shapes: Shape[] = [new Circle(), new Square()];
shapes.forEach((shape) => shape.draw()); // Output: "Drawing a Circle" and "Drawing a Square"
```

Encapsulation in Code:

Consider a class BankAccount where the balance is private, and it can only be accessed or modified through specific methods like deposit and withdraw.

```ts
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Insufficient funds or invalid amount');
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50); // Deposited $50. New balance: $150
account.withdraw(30); // Withdrew $30. New balance: $120
console.log(account.getBalance()); // 120
```

1. Type Narrowing

```ts
class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    // Narrowed to Dog
    animal.bark();
  } else {
    // Narrowed to Cat
    animal.meow();
  }
}

function handleInput(input: string | number) {
  if (typeof input === 'string') {
    // Here, TypeScript knows that input is a string
    console.log(input.toUpperCase()); // String method
  } else {
    // Here, TypeScript knows that input is a number
    console.log(input.toFixed(2)); // Number method
  }
}
```

## Polymorphism

polymorphism allows you to call the same method on objects of different classes, and each object responds in its own way
There are two main types of polymorphism:

1. Compile-time Polymorphism (Method Overloading or Operator Overloading)
   allows you to define multiple methods with the same name but with different parameters.
   TypeScript doesn’t support true method overloading like some other languages, but you can simulate it by using optional parameters or parameter types.

```ts
class Printer {
  // Overloaded method
  print(message: string): void;
  print(message: number): void;

  // Method implementation
  print(message: any): void {
    console.log(message);
  }
}

const printer = new Printer();
printer.print('Hello, world!'); // Prints: Hello, world!
printer.print(12345); // Prints: 12345
```

2. Runtime Polymorphism (Method Overriding)3. Generic use case
   when a subclass provides its own implementation of a method that is already defined in its superclass.

```ts
// Base class (Parent Class)
class Animal {
  makeSound(): void {
    console.log('Some generic animal sound');
  }
}

// Derived class (Child Class) - overriding the method
class Dog extends Animal {
  makeSound(): void {
    console.log('Woof! Woof!');
  }
}

// Another derived class (Child Class) - overriding the method
class Cat extends Animal {
  makeSound(): void {
    console.log('Meow! Meow!');
  }
}

// Polymorphism in action
const animal1: Animal = new Dog();
const animal2: Animal = new Cat();

animal1.makeSound(); // Output: Woof! Woof!
animal2.makeSound(); // Output: Meow! Meow!
```
