// Simulating JavaScript Generators and Iterators
function* idGenerator() {
    let id = 1001;
    while (true) {
        yield id++;
    }
}

let trackingIdGen = idGenerator();

console.log("Generated Tracking IDs:");
console.log("ID 1:", trackingIdGen.next().value);
console.log("ID 2:", trackingIdGen.next().value);
console.log("ID 3:", trackingIdGen.next().value);