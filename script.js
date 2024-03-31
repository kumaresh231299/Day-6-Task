//! 1(a)
/*  Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
        and a String representing the rating as its arguments, 
            and sets the respective class properties to these values.     */
class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies){
        return movies.filter(movies=>movies.rating==="PG")
    }
}
const obj1 = new Movie("Leo","7Screen_Studio",7.5)
console.log("Task - 1.(a) ",obj1)


//? 1(b)
// The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
const obj2 = new Movie("Leo","7Screen_Studio",)
console.log("Task - 1.(b) ",obj2)


//? 1(c)
/* Write a method getPG, which takes an array of base type Movie as its argument, 
        and returns a new array of only those movies in the input array with a rating of "PG".
            You may assume the input array is full of Movie instances. The returned array need not be full.*/
const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "sk"),
    new Movie("Movie3", "Studio3", "PG"),
    new Movie("Movie4", "Studio4", "G")
];
const obj3 = Movie.getPG(movies);
console.log("Task - 1.(c) ",obj3)


//* 1(d)
/* Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
        the studio “Eon Productions”, and the rating “PG­13”*/
const obj4 = new Movie("Casino Royole","Ean Productions","PG13")
console.log("Task - 1.(d) ",obj4)



//! 2. Convert the UML diagram to Typescript class. - use number for double

//* Circle_Task
console.log("Task - 2");
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let circle = new Circle(1.0,"red") 
console.log(circle.Color);
console.log(circle.Radius);
console.log(circle.toString);
console.log(circle.area);
console.log(circle.circumference);



//! 3. Write a "person" class to hold all the details
console.log("Task - 3");
class Person{
    constructor(_name,email,age,gender,martial_status,contact){
        this._name = _name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.martial_status = martial_status;
        this.contact = contact;

    }
}

const obj5 = new Person("Kumaresan_S","kumaresansubramani8015@gmail.com",24,"Male","Single",9876543210);
console.log(obj5);



//! 4. Write a class to calculate the ubar price
console.log("Task - 4");
class Ubar{
    constructor(kilometer, pricePerKilometer){
        this.kilometer = kilometer;
        this.pricePerKilometer =  pricePerKilometer;
    }
    set pricePerKilometer(price){
        this._pricePerKilometer=price;
    }
    get price(){
        return this._pricePerKilometer;
    }

    get calculatePrice(){
        return this.kilometer*this._pricePerKilometer;
    }
}
const obj6 = new Ubar(15,10);
console.log(obj6.calculatePrice);