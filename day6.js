function fetchStudentData() {
    return new Promise((resolve, reject) => {
        let success = true;
        
        setTimeout(() => {
            if (success) {
                resolve({ id: 101, name: "Rohit", course: "Computer Science" });
            } else {
                reject("Failed to fetch student data.");
            }
        }, 2000);
    });
}

async function renderProfile() {
    try {
        console.log("Fetching student data...");
        let data = await fetchStudentData();
        console.log("Data Received Successfully:");
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

renderProfile();