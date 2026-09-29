document.getElementById("adoptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("message").textContent =
        "Thank you, " + name + "! Your dog adoption application has been submitted.";
});