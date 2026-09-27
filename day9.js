let studentSession = {
    name: "Rohit",
    semester: 7,
    status: "Active Learner"
};

localStorage.setItem("studentData", JSON.stringify(studentSession));

let retrievedData = JSON.parse(localStorage.getItem("studentData"));

console.log("Data retrieved from LocalStorage:");
console.log("Name:", retrievedData.name);
console.log("Semester:", retrievedData.semester);
console.log("Status:", retrievedData.status);