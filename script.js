// Screen object
// console.log(screen.width, screen.height)

console.log("Hello world");

//object
let person = { //property
    name: "riknesh",  //key: value method
    place: "villupuram",  //method
    greetUser(){
        // return "My name is " + this.name + "imm from " + this.place;
        return `Hello my name is ${this.name}, and im coming from ${this.place}`; // ` $ { } ` inter poliation method
    },
};

// person.name = "dj_r"
// person.place = "0`s and 1`s"

// let msg =person.greetUser();

// console.log(msg);
// document.write(msg);
// document.body.innerHTML = `<h2>${msg}</h2>`;
// dynamic get name nd place
const u_name = prompt("name", "spacebtr")
console.log(u_name);
document.write(u_name)
document.body.innerHTML = `<h1>${u_name}</h1>`