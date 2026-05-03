function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (!user || !pass) {
    alert("Preencha todos os campos!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = users.find(u => u.user === user);
  if (exists) {
    alert("Usuário já existe!");
    return;
  }

  users.push({ user, pass });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Cadastro feito com sucesso!");
  showLogin();
}

function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = users.find(u => u.user === user && u.pass === pass);

  if (!validUser) {
    alert("Usuário ou senha inválidos!");
    return;
  }

  localStorage.setItem("loggedUser", user);
  showWelcome(user);
}

function showWelcome(user) {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("welcomeBox").classList.remove("hidden");

  document.getElementById("welcomeUser").innerText = user;
}

function logout() {
  localStorage.removeItem("loggedUser");
  location.reload();
}

// manter login
window.onload = function () {
  let user = localStorage.getItem("loggedUser");
  if (user) {
    showWelcome(user);
  }
}