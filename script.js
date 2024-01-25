
const partialLink = "";
const KEY = "";

let url = `${partialLink}${KEY}`;

// Get request from the URL
function get(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
}

// Post request to the URL. jsonData is an object
function post(url, jsonData) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
    })
        .then(res => res.json())
        .then(data => {
            console.log("Posted!");
        })
        .catch(err => console.log(err));
}


// Put request to the URL (must be pointing to the data that we want to update). jsonData is an object
function put(url, jsonData) {
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
    })
        .then(res => res.json())
        .then(data => {
            console.log("Posted!");
        })
        .catch(err => console.log(err));
}


// Delete request to the URL (must be pointing to the data that we want to delete)
function deleteRequest(url, jsonData) {
    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
    })
        .then(res => res.json())
        .then(data => {
            console.log("Posted!");
        })
        .catch(err => console.log(err));
}