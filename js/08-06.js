// Native Javascript

function register(event) {
  event.preventDefault();

  let name = document.getElementById("userName").value;
  let mobile = document.getElementById("userMobile").value;
  let email = document.getElementById("userEmail").value;
  let password = document.getElementById("userPassword").value;

  // console.log(
  //   `name : ${name}, MobileNumber  : ${mobile}, Email : ${email}, password : ${password} `
  // );

  // localStorage //

  var myData = {
    userName: name,
    userMobile: mobile,
    userEmail: email,
    userPassword: password,
  };

  localStorage.setItem("users", JSON.stringify(myData));

  document.getElementById("userName").value = "";
  document.getElementById("userMobile").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";

  alert("successfully registered");
}

function getValue() {
  var getItem = JSON.parse(localStorage.getItem("users"));
  console.log(getItem);
}

// localStorage.getItem("key");
// localStorage.setItem("key", "value");
// localStorage.removeItem("key");

// JSON.parse(localStorage.getItem("key"));
// localStorage.setItem("key",JSON.stringify(Object));
