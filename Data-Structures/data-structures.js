// DATA
// STRUCTURES

// WHAT DO THEY DO?

// Data structures are collections of
// values, the relationships among them,
// and the functions or operations that
// can be applied to the data

// WHY SO MANY?

// Different data structures excel at
// different things. Some are highly
// specialized, while others (like
// arrays) are more generally used.

// WHY CARE?

// The more time you spend as a
// developer, the more likely you'll need to
// use one of these data structures
// You've already worked with many
// of them unknowingly!
// And of course ... INTERVIEWS

// THERE IS NO ONE
// "BEST"
// DATA STRUCTURE

// They all excel in different
// situations ...

// Otherwise why bother
// learning them all?

// Working with
// map/location data?

// Use a graph!

// Need an ordered list with fast
// inserts/removals at the
// beginning and end?

// Use a linked list!

// Web scraping nested HTML?

// Use a tree!

// Need to write a scheduler?

// Use a binary heap!

// ES2015
// CLASS SYNTAX

// OBJECTIVES

// • Explain what a class is
// • Understand how JavaScript implements the
//   ideas of classes
// • Define terms like abstraction, encapsulation
//   and polymorphism
// • Use ES2015 classes to implement data
//   structures

// What is a class?

// A blueprint for creating objects
// with pre-defined properties and
// methods

// Does JavaScript really have them?
// Ehh ... not really

// Why do we need to learn this?

// We're going to implement data
// structures as classes!

// THE SYNTAX

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'You are expelled!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} time(s)`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  static enrollStudents() {
    return 'Enrolling students!';
  }
}

// The method to create new objects must be
// called constructor

// The class keyword creates a constant, so you
// can not redefine it. Watch out for the syntax
// as well!

// Creating objects from classes

// We use the new keyword

let firstStudent = new Student('Rosalinda', 'Ramirez', 3);
let secondStudent = new Student('Bradley', 'Jester', 5);

firstStudent.fullName();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
