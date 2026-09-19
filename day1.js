const studentName = "Rohit";
let currentSemester = 7;
let isEnrolled = true;
let skills = [ " JavaScript", "React", "Node.js"];

function calculateTotalScore( score1, score2){
    return score1 + score2;

}
let mathScore = 85;
let codingScore = 90;
let totalScore = calculateTotalScore( mathScore, codingScore);
let hasPassed = totalScore >= 150 && isEnrolled;
console.log("Student:", studentName);
console.log("Semeter:", currentSemester);
console.log("Total Score:", totalScore);
console.log("Status Passed:", hasPassed);
