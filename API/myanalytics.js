/*
Elijah Bantugan
2023
MyAnalytics
*/

function l(l) {
    console.log("%c[MyAnalytics]", "color: purple", l)
}

const authentication = "a";

(async function () {
    await fetch("/api/add-view", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            authentication: "myauth",
            host: window.location.host,
            location: window.location
        })
    })
})();

window.addEventListener("beforeunload", async (e) => {
    await fetch("/api/leave-site", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            authentication: "myauth",
            host: window.location.host,
            location: window.location
        })
    })
})


l("Attempting to execute callback...")
try {
    onloadCallback();
    a();
} catch (err) {
    l("Callback failed...")
}

function a() {
    l("Executed callback...")
}