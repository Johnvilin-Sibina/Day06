//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
/*a) Write a constructor for the class Movie, 
    which takes a String representing the title of the movie, 
    a String representing the studio, and a String representing the rating as its arguments, 
    nd sets the respective class properties to these values.*/
    /*b) The constructor for the class Movie will set the 
    class property rating to "PG" as default when no rating is provided.*/
    /*c) Write a method getPG, which takes an array of base type Movie as its argument, 
    and returns a new array of only those movies in the input array with a rating of "PG". 
    You may assume the input array is full of Movie instances. The returned array need not be full.*/
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






