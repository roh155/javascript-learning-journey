let studentProfile = {
    name: "Rohit",
    semester: 7,
    techStack: ["JavaScript", "React", "Node.js"],
    isAvailableForWork: true
};

function displayStudentDetails(profile) {
    console.log("--- Student Profile ---");
    console.log("Name:", profile.name);
    console.log("Semester:", profile.semester);
    console.log("Primary Skills:", profile.techStack.join(", "));
    
    if (profile.isAvailableForWork) {
        console.log("Status: Ready for Opportunities & Practice");
    } else {
        console.log("Status: Currently Busy");
    }
}

displayStudentDetails(studentProfile);