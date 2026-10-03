function validateStudentAge(age) {
    try {
        if (typeof age !== "number") {
            throw new Error("Age must be a valid number.");
        }
        if (age < 18) {
            throw new Error("Student must be at least 18 years old for registration.");
        }
        return "Student verification successful!";
    } catch (error) {
        return `Validation Error: ${error.message}`;
    }
}

console.log(validateStudentAge(21));
console.log(validateStudentAge(16));