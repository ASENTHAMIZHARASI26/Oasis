function Register() {
  const user = document.getElementById("user").value.trim();
  const pwd = document.getElementById("pwd").value.trim();

  if (user === "" || pwd === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pwd);

  alert("Registration successful!");
  Showlogin();
}

function Login() {
  const loginUser = document.getElementById("loginUser").value.trim();
  const loginPwd = document.getElementById("loginPwd").value.trim();

  const storedUser = localStorage.getItem("username");
  const storedPwd = localStorage.getItem("password");

  if (loginUser === storedUser && loginPwd === storedPwd) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password");
  }
}

function Showlogin() {
  document.getElementById("registerBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function Showregister() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}
