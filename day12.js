let users = [
    { id: 1, name: "Rohit", role: "Developer" },
    { id: 2, name: "Aman", role: "Designer" },
    { id: 3, name: "Neha", role: "Developer" }
];

let targetUser = users.find(function(user) {
    return user.id === 2;
});

let hasDeveloper = users.some(function(user) {
    return user.role === "Developer";
});

console.log("Found User:", targetUser);
console.log("Has Developer Role:", hasDeveloper);