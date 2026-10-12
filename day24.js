// Simulating Event Delegation pattern in JavaScript
function setupEventDelegation() {
    let simulatedParentList = {
        tagName: "UL",
        addEventListener: function(eventType, callback) {
            console.log(`Listening for '${eventType}' events on parent element: <${this.tagName}>`);
            
            let simulatedEvent = {
                target: { tagName: "LI", textContent: "List Item 3" },
                currentTarget: { tagName: "UL" }
            };
            
            callback(simulatedEvent);
        }
    };

    simulatedParentList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            console.log(`Clicked on item with content: "${event.target.textContent}"`);
        }
    });
}

setupEventDelegation();