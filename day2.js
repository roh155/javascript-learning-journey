let studentName = "Rohit";
let Semeter = 7;
let totalAttendancePercentage = 82;
let hasSubmittedAssignment = true;

function checkEligibility(attendance, assignmentStatus){
    if (attendance >= 75 && assignmentStatus === true){
        return "Eligibility for Final Exam";
    } else{
        return "Not Eligible - Needs Improvement";
    }
}
let examStatus = checkEligibility(totalAttendancePercentage, hasSubmittedAssignment);

console.log("Student:", studentName);
console.log("Current Semester:", Semeter);
console.log("Exam Status:", examStatus);
if(Semeter >= 7){
    console.log("Category: Final Year Engineering Student");
}else{
    console.log("Category: Junior Year Student");
}