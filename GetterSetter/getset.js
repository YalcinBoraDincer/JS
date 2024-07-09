class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    
    set firstname(newfirstname){
        if (typeof newfirstname === "string" && newfirstname.length>0) {
            this._firstname=newfirstname;
        }else{
            console.error("First name must be non empty string");
        }
    }
    get firstname(){
        return this._firstname;
    }
    set lastname(newlastname){
        if (typeof newlastname === "string" && newlastname.length>0) {
            this._lastname=newlastname;
        }else{
            console.error("Last name must be non empty string");
        }
    }
    get lastname(){
        return this._lastname;
    }


    set age(newage){
        if (typeof newage === "number" && newage >= 0) {
            this._age=newage;
        }else{
            console.error("Age  must be greater than zero");
        }
    }
    get age(){
        return this._age;
    }

    
}


const person=new Person("Bora","Dincer",22);


console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);