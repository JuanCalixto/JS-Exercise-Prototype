/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 // Creating Person object constructor function with name and age objects
  function Person(name, age) {
    this.stomach = []; // Creating properties to Person constructor
    this.name = name;
    this.age = age;
  }
 
   // Creating eat method prototype with edible argument to object Person constructor
  Person.prototype.eat = function(edible) {
    // Conditional
    if (this.stomach.length < 10) {
      this.stomach.push(edible); //  If meets condition, it will invoke and push to stomach array
    }
  };

   // Creating poop method to object constructor
  Person.prototype.poop = function() {
    this.stomach = []; // Will empty array if invoked
  };

  // Creating new method inheriting properties. ptoString
  Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`; // Returns template literal with name and age.
  };
 
  // const juan = new Person('Juan', 28);

  // console.log(juan.eat(11));
  // console.log(juan.poop());
  // console.log(juan.toString());
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

  // Creating Car object constructor function with model and milesPerGallon objects
 function Car(model, milesPerGallon) {
   // creating properties
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

   // Creating fill prototype properties with gallons argument to object constructor
  Car.prototype.fill = function(gallons){
    return this.tank += gallons // Returns tank value
  }
  
  // const batCar = new Car('Batmobile', 25);

  // console.log(batCar.fill(30));


  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */

  // Creating Baby object constructor function with name, age, and favoriteToy objects
 function Baby(name, age, favoriteToy) {
   this.name = name; // Creating properties to Baby constructor
   this.age = age;
   this.favoriteToy = favoriteToy;
  }
 
  Baby.prototype = Object.create(Person.prototype); // Creating new object using existing object as the prototype parent of the newly created object to inherit properties

  // Creating play method prototype to Baby constructor
  Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`; // Returns template literal of favoriteToy
  }

  // const newBaby = new Baby('mike', '12 Months', 'rattle');

  // console.log(newBaby.play());
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Window Binding: global scope, no declared object. "this" refers to whatever scope it is placed in.
    2. Implicit Binding: declared object. Whenever a dot is used in calling a function, everything to the left of the dot is the scope that "this" will refer to.
    3. 'new' Binding: 'new' operator with constructor.  When placed inside of an instance created by a constructor, "this" will refer to the new instance.
    4. Explicit Binding: call(obj, arg1, arg2, ...)/apply(obj, array) . "this" is defined automatically when using the call and apply methods.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}