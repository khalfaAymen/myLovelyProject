// var firstName =$("#firstName").val()
// var lastName =$("#lastName").val()
// var cohort =$("#cohort").val()

// var inputs = {};

// var submit = function () {
//   inputs = {
//     firstName: $("#firstName").val(),
//     lastName: $("#lastName").val(),
//     cohort: $("#cohort").val(),
//     studentPic: $("#studentpic")[0],
//   };

//   // data.push(inputs)
//   data = [...data, inputs];
//   // $("#firstName").val()=""
//   // $("#lastName").val()=""
//   // $("#cohort").val()=""

//   inputs = {};
//   localStorage.setItem("users", JSON.stringify([]));
// };

// this is a function to store my data and return it when i click submit

import { UserManager } from "./userManager.js";

$(document).ready(function () {
  $("#submit").on("submit", function (event) {
    event.preventDefault();
    var userManager = new UserManager(); // importing class that takes care of the user data

    // get inpuit values from dom
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var cohort = $("#cohort").val();
    var studentPic = $("#studentpic")[0];
    // console.log(firstName,lastName,cohort);

    var reader = new FileReader(); // initiate new filereader to read image data
    reader.onload = function (event) {
      var picture64 = event.target.result; // get iamge data
      var user = {
        firstName: firstName, // creating my user object containing the inpout values and image data 
        lastName: lastName,
        cohort: cohort,
        studentPic: picture64,
        pin: 0,
      };

      userManager.addUser(user);
      alert(`Added user ${firstName}`);
    };
    reader.readAsDataURL(studentPic.files[0]); // Reading the File as a Data URL
  });
});

// localStorage.setItem("users", JSON.stringify([]));
// var data = JSON.parse(localStorage.getItem("users"));
