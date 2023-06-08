function register(event) {
  event.preventDefault();

  let name = document.getElementById("userName").value;
  let mobile = document.getElementById("userMobile").value;
  let email = document.getElementById("userEmail").value;
  let password = document.getElementById("userPassword").value;

  console.log(
    `name : ${name}, MobileNumber  : ${mobile}, Email : ${email}, password : ${password} `
  );

  document.getElementById("userName").value = "";
  document.getElementById("userMobile").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";

  alert("successfully registered");
}
