let students = [
    { name: "Rohit", department: "CSE", score: 88 },
    { name: "Aman", department: "IT", score: 76 },
    { name: "Neha", department: "CSE", score: 92 },
    { name: "Priya", department: "ECE", score: 81 }
];

let groupedByDepartment = students.reduce(function(accumulator, student) {
    let dept = student.department;
    if (!accumulator[dept]) {
        accumulator[dept] = [];
    }
    accumulator[dept].push(student);
    return accumulator;
}, {});

console.log("Students Grouped by Department:");
console.log(JSON.stringify(groupedByDepartment, null, 2));