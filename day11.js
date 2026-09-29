async function fetchUserData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
        if (!response.ok) {
            throw new Error("Failed to fetch user data.");
        }
        
        let userData = await response.json();
        
        console.log("API Fetch Successful:");
        console.log("Name:", userData.name);
        console.log("Email:", userData.email);
        console.log("City:", userData.address.city);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchUserData();