var students = JSON.parse(localStorage.getItem("data")) || [];

function signup(event) {
  event.preventDefault(); 

  var firstName = document.getElementById("fName").value.trim();
  var lastName = document.getElementById("lName").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;

  if (!firstName || !lastName || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  for (let i = 0; i < students.length; i++) {
    if (students[i].email === email) {
      alert("Email is already registered.");
      return;
    }
  }

  const stdData = { firstName, lastName, email, password };
  students.push(stdData);
  localStorage.setItem("data", JSON.stringify(students));

  alert("Signup successfully!");

  setTimeout(() => {
    window.location.href = "signin.html";
  }, 500);
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let storedUsers = JSON.parse(localStorage.getItem("data")) || [];
    let foundUser = storedUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "blog.html"; // yahan aapka blog page ka naam
    } else {
        alert("Invalid email or password!");
    }
}




