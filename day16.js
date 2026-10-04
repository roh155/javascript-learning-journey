function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Rohit", role: "Developer" });
        }, 1000);
    });
}

function fetchUserPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["MERN E-Commerce App", "CricLive Pro", "Code Vault"]);
        }, 1000);
    });
}

async function loadDashboardData() {
    try {
        console.log("Fetching dashboard data concurrently...");
        
        let [user, posts] = await Promise.all([fetchUser(), fetchUserPosts()]);
        
        console.log("Dashboard Data Loaded Successfully:");
        console.log("User Info:", user);
        console.log("User Projects:", posts);
    } catch (error) {
        console.log("Error loading dashboard:", error);
    }
}

loadDashboardData();