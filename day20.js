function throttle(func, limit) {
    let lastCall = 0;
    return function(...args) {
        let now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

function handleWindowScroll() {
    console.log("Scroll event processed at:", new Date().toLocaleTimeString());
}

let optimizedScroll = throttle(handleWindowScroll, 1000);

optimizedScroll();
optimizedScroll();
setTimeout(() => {
    optimizedScroll();
}, 1200);