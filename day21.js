function manageUserPreferences() {
    let userPref = {
        theme: "dark",
        notifications: true,
        language: "English"
    };

    let serializedData = JSON.stringify(userPref);
    
    // Simulating LocalStorage behavior in Node environment or browser
    let simulatedLocalStorage = {
        setItem: function(key, value) {
            this[key] = value;
        },
        getItem: function(key) {
            return this[key];
        }
    };

    simulatedLocalStorage.setItem("preferences", serializedData);
    
    let retrievedData = simulatedLocalStorage.getItem("preferences");
    let parsedData = JSON.parse(retrievedData);

    console.log("Stored and Retrieved Preferences:");
    console.log("Theme:", parsedData.theme);
    console.log("Notifications Enabled:", parsedData.notifications);
}

manageUserPreferences();