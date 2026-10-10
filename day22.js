async function fetchGithubUser(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user data: ${response.statusText}`);
        }
        let userData = await response.json();
        
        console.log("GitHub User Profile Fetched Successfully:");
        console.log("Username:", userData.login);
        console.log("Public Repos:", userData.public_repos);
        console.log("Location:", userData.location || "Not Specified");
    } catch (error) {
        console.log("Error fetching data:", error.message);
    }
}

fetchGithubUser("octocat");