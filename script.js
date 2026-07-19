const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

const greeting = document.getElementById("greeting");
const adultMessage = document.getElementById("adultMessage");
const ageMonths = document.getElementById("ageMonths");
const quotes = document.getElementById("quotes");

function calculateMonths(age){
    return age * 12
}
userForm.addEventListener("submit", function(event){
event.preventDefault();
    
    const userName= nameInput.value;
    const userAge= Number(ageInput.value);

    console.log("name", userName);
    console.log("age", userAge)

    
    localStorage.setItem("name", userName);
    localStorage.setItem("age", userAge);

    const savedName = localStorage.getItem("name");
    const savedAge = Number(localStorage.getItem("age"));

    greeting.textContent = `Hello, ${savedName}! 👋`;
if(savedAge >= 18){
    adultMessage.textContent = "✅ You can access adult content.";
}
else{
    adultMessage.textContent = "❌ You are too young for adult content.";
}

const months= calculateMonths(savedAge);
ageMonths.textContent= `You are ${months} months old.`;

quotes.innerHTML = "";
for (let i = 1; i <= 5; i++) {
    quotes.innerHTML += `
        <p class="text-blue-600 font-medium">
            As long as you are alive, the chances are infinite.
        </p>
    `;
}
});