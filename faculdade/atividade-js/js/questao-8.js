const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");

    if (nome.value.trim() === "") {
        nome.classList.add("error");
        event.preventDefault();
    } 
    else {
        nome.classList.remove("error");
    }

    if (email.value.trim() === "") {
        email.classList.add("error");
        event.preventDefault();
    } 
    else {
        email.classList.remove("error");
    }
});