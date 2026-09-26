let student = {
    name: "Rohit",
    semester: 7,
    branch: "CSE"
};

let { name, semester, branch } = student;

let baseSkills = ["HTML", "CSS", "JavaScript"];
let advancedSkills = [...baseSkills, "React", "Node.js"];

function calculateTotalScore(...scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total;
}

console.log("Student:", name, "from", branch, "Semester:", semester);
console.log("Full Tech Stack:", advancedSkills);
console.log("Total Exam Score:", calculateTotalScore(85, 90, 88));