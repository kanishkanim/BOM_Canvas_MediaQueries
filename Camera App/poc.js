function Teacher(fname,lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.printName = function() {
        console.log(this.name());
    }
}

let teacher = new Teacher("Kanishka","Nim");

teacher.name = function() {
    return (this.firstName + " " + this.lastName);
}

teacher.printName();