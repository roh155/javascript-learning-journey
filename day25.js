// Simulating Prototypal Inheritance in JavaScript
function Developer(name, stack) {
    this.name = name;
    this.stack = stack;
}

Developer.prototype.introduce = function() {
    console.log(`Hi, I am ${this.name}, a ${this.stack} developer.`);
};

function FullStackEngineer(name, stack, level) {
    Developer.call(this, name, stack);
    this.level = level;
}

FullStackEngineer.prototype = Object.create(Developer.prototype);
FullStackEngineer.prototype.constructor = FullStackEngineer;

FullStackEngineer.prototype.describeRole = function() {
    console.log(`I am a ${this.level} engineer building scalable web applications.`);
};

let rohit = new FullStackEngineer("Rohit", "MERN", "Senior");
rohit.introduce();
rohit.describeRole(); 