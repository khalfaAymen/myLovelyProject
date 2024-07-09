import { UserManager } from "./userManager.js";

$(document).ready(function () {
  var manager = new UserManager();
  var users = manager.loadUsers();
  var urlParams = new URLSearchParams(window.location.search);
  var userIndex = urlParams.get("index");
  var user = users[userIndex];
  var studentDiv = $("<div class='student'></div>");
  var name = $("<p></p>").text(`Name: ${user.firstName} ${user.lastName}`);
  var pin = $("<p></p>").text(`Red Pins: ${user.pin || 0}`);
  var cohort = $("<p></p>").text(`Cohort: ${user.cohort}`);
  let studentPic = `<img src='${user.studentPic}'> `;
  for (var i = 1; i <= user.pin; i++) {
    studentPic += `<img class="redpins${i}" src='https://www.pngall.com/wp-content/uploads/4/Red-Pin-PNG-Free-Image.png'>`;
  }
  var eliminated = $("<p style='color: red'></p>").text(`Eliminated`);
  var addPinBtn = $("<button id='addpin'></button>").text("add red pin");
  var removePinBtn = $("<button id='removepin'></button>").text("remove pin");
  var removeUser = $("<button id='removeuser'></button>").text("remove user");
  studentDiv.append(cohort);
  studentDiv.append($(studentPic));
  studentDiv.append(name);
  studentDiv.append(cohort);
  studentDiv.append(pin)
  if (user.pin >= 5) {
    studentDiv.append(eliminated);
  } else {
    studentDiv.append(addPinBtn);
  }

  if (!user.pin <= 0) {
    studentDiv.append(removePinBtn);
  }

  studentDiv.append(removeUser);

  $("#student").append(studentDiv);

  $("#addpin").on("click", function () {
    manager.addPin(userIndex);
    window.location.reload();
  });

  $("#removepin").on("click", function () {
    manager.removePin(userIndex);
    window.location.reload();
  });

  $("#removeuser").on("click", function () {
    manager.removeUser(userIndex);
    window.location.href = "/html/display.html";
  });
});
