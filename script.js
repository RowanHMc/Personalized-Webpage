const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

function calculateMonths(age){
    return age * 12
}
userForm.addEventListener("submit,"function(event){
    event.preventDefault();
    
    const userName= nameInput.value;
    const userAge= Number(ageInput.value);

    console.log("name", userName);
    console.log("age", userAge)

})