//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
//Solution:

class Circle{
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
console.log(c1.getCircumference());