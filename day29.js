// Simulating JavaScript Proxies and Reflect API
const developerProfile = {
    name: "Rohit",
    stack: "MERN",
    level: "Intermediate"
};

const profileHandler = {
    get: function(target, property) {
        console.log(`[Proxy Log]: Property '${property}' was accessed.`);
        return property in target ? target[property] : "Property does not exist";
    },
    set: function(target, property, value) {
        console.log(`[Proxy Log]: Setting property '${property}' to '${value}'.`);
        target[property] = value;
        return true;
    }
};

let secureProfile = new Proxy(developerProfile, profileHandler);

console.log("Accessing Name:", secureProfile.name);
secureProfile.level = "Advanced Full-Stack";
console.log("Updated Level:", secureProfile.level);