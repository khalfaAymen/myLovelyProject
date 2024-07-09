import { UserManager } from "./userManager.js";

$(document).ready(function () {
  var userManager = new UserManager();
  var users = userManager.loadUsers();

  if (users.length > 0) {
    for (var i = 0; i < users.length; i++) {
      
      var user = users[i];
      var studentDiv = $("<div class='student'></div>");
      var name = $("<p></p>").text(`Name: ${user.firstName} ${user.lastName}`);
      var cohort = $("<p></p>").text(`Cohort: ${user.cohort}`);
      var studentPic = $(
        `<a href='/html/student.html?index=${i}'><img src='${user.studentPic}'></a>`
      );
      

      studentDiv.append(cohort);
      studentDiv.append(studentPic);
      studentDiv.append(name);
      studentDiv.append(cohort);
      $("#student-list").append(studentDiv);
    }
  } else {
    $("#student-list").append("<p>No students found.</p>");
  }
});
