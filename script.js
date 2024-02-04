//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
/*a) Write a constructor for the class Movie, 
    which takes a String representing the title of the movie, 
    a String representing the studio, and a String representing the rating as its arguments, 
    nd sets the respective class properties to these values.*/
    /*b) The constructor for the class Movie will set the 
    class property rating to "PG" as default when no rating is provided.*/
//Solution:
class Movie{
    
    constructor(title, studio, rating="PG") 
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(arr){
        return arr.filter(movies => movies.rating === "PG");

    }
}
var m1= new Movie("Singam","Sun Pictures","U/A");
var m2=new Movie("Varuthapadatha Vaalibar Sangam","S.K.F. Artist Motion Picture","U");
var m3=new Movie("Aruvi","Dream Warrior Pictures");
var m4=new Movie("Dasavathaaram","Aascar Film Pvt. Ltd","U");
var m5=new Movie("Jai Bhim","2D Entertainment, Amazon Studios");
var m6=new Movie("Kaithi","Dream Warrior Pictures, Vivekananda Pictures");
var arr = [m1,m2,m3,m4,m5,m6];
var pgMovies = Movie.getPG(arr);
console.log(pgMovies);

/*1.d) Write a piece of code that creates an instance of the class Movie with the 
title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/
//Solution:
/*class Movie{
    constructor(title, studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    toString() {
        return `Title: "${this.title}" Studio: "${this.studio}" Rating: "${this.rating}"`;
    }
}
let mv=new Movie("Casino Royale","Eon Productions","PG13");
console.log(mv.toString());*/

//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
//Solution:

/*class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return `Radius: ${this.radius}`
    }
    getColor(){
        return `Color: ${this.color}`        
    }
    getArea(){
        return `Area: ${(Math.PI*(this.radius*this.radius)).toFixed(2)}`
    }
    getCircumference(){
        return `Circumference: ${(2*Math.PI*this.radius).toFixed(2)}`
    }
}
let c1=new Circle(4,"Red")
console.log(c1.getRadius());
console.log(c1.getColor());
console.log(c1.getArea());
console.log(c1.getCircumference());*/

//3. Write a “person” class to hold all the details.
//Solution:
/*class Person{
    constructor(name,age,gender,nationality,qualification,job,address){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.nationality=nationality;
        this.qualification=qualification;
        this.job=job;
        this.address=address;
    }
}
let p1=new Person("Sibina",25,"Female","Indian","M.A. English Literature","Unemployed","Mylacode, Alencode Post, K.K Dist., 629802")
console.log(p1);*/

//4.Write a class to calculate the Uber price.
//Solution:
/*class Uber{
    constructor (name,distance){
        this.name=name;
        this.distance=distance;
    }
    getPrice(){
        return `Distance traveled: ${this.distance}km.
Your total fare is ${this.distance*18}`
    }
}
let p1 = new Uber("Anand",4.5);
console.log(p1.getPrice());*/