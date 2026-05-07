const form = document.getElementById("lotrForm");
const messageBox = document.getElementById("messageBox");

form.addEventListener("submit", function(event) {
   event.preventDefault();

   const name = document.getElementById("name").value;
   const role = document.getElementById("role").value;

   messageBox.textContent = "Welcome, " + name + "! As a " + role + ", your journey through Middle-earth begins now.";
});