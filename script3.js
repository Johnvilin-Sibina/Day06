//3. Write a “person” class to hold all the details.
//Solution:
class Person{
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
console.log(p1);