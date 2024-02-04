//4.Write a class to calculate the Uber price.
//Solution:
class Uber{
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
console.log(p1.getPrice());