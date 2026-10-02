class StudentProfile {
    constructor(name, semester, course) {
        this.name = name;
        this.semester = semester;
        this.course = course;
    }

    getDetails() {
        return `Student: ${this.name} | Semester: ${this.semester} | Course: ${this.course}`;
    }
}

let student1 = new StudentProfile("Rohit", 7, "Computer Science");

console.log("Object-Oriented JavaScript Example:");
console.log(student1.getDetails());
