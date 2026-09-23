let students = [
    { name: "Rohit", score: 85, semeter: 7},
    { name: "Aman", score: 62, semeter: 7},
    { name: "Neha", score: 90, semeter: 7},
    { name: "Pooja", score: 45, semeter: 7}
];

let studentNames = students.map(function(student){
    return student.name;

});
let passedStudents = students.filter(function(student){
    return student.score >= 60;
});

console.log("All Students:", studentNames);
console.log("Passed Students:", passedStudents);
