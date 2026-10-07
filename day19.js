function debounceSearch(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function handleSearchQuery(query) {
    console.log("Searching database for:", query);
}

let optimizedSearch = debounceSearch(handleSearchQuery, 500);

optimizedSearch("MERN");
optimizedSearch("MERN Stack");
optimizedSearch("MERN Stack Development");