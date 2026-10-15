// Simulating robust Error Handling in JavaScript
function processUserData(userData) {
    try {
        if (!userData || !userData.email) {
            throw new Error("Invalid user data: Missing required email field.");
        }
        console.log("Processing user data for:", userData.email);
        console.log("User successfully verified!");
    } catch (error) {
        console.log("Caught an error during processing:", error.message);
    } finally {
        console.log("Execution completed: Cleanup actions performed.");
    }
}

processUserData({ name: "Rohit" });
processUserData({ name: "Rohit", email: "rohit@example.com" });