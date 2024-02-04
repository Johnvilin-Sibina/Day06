/*1.d) Write a piece of code that creates an instance of the class Movie with the 
title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/
//Solution:
class Movie{
    constructor(title, studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    toString() {
        return `Title: ${this.title} 
Studio: ${this.studio}
Rating: ${this.rating}`;
    }
}
let mv=new Movie("Casino Royale","Eon Productions","PG13");
console.log(mv.toString());
