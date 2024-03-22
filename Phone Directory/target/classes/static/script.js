function searchContact() {
    const contact = document.getElementById("contactInput").value;

    fetch(`http://localhost:8080/search?contact=${contact}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(result => {
            displayResult(result);
        })
        .catch(error => console.error('Error:', error));
}
function insertContact() {
    const contact = document.getElementById("contactInput").value;

    fetch(`http://localhost:8080/insert?contact=${contact}`, {
        method: 'POST',
    })
        .then(response => response.ok ? "Contact inserted successfully" : "Error inserting contact")
        .then(result => {
            displayResult(result);
        })
        .catch(error => console.error('Error:', error));
}

function displayResult(result) {
    document.getElementById("result").innerText = result;
}
