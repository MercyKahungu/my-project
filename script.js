
// document.querySelector("body").appendChild(h2);
//  const pass_field = document.querySelector(".pass-key");
//  const showBtn = document.querySelector(".show");
//  showBtn.addEventListener("click", function() {
//     if(pass_field.type === "password"){
//         pass_field.type = "text";
//         showBtn.textContent = "HIDE";
//         showBtn.style.color = "#3498db";
//     }
//     else{
//         pass_field.type ="password";
//         showBtn.textContent ="SHOW";
//         showBtn.style.color = "black";
//     }
//  });
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});