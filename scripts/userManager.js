export class UserManager {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
  }
  // import my data from local storage
  loadUsers() {
    var userData = this.users || [];
    return userData;
  }
  // add user
  addUser(user) {
    this.users.push(user);
    this.saveUsers();
  }

  addPin(index) {
    if (!isNaN(this.users[index].pin)) {
      this.users[index].pin += 1;
      this.saveUsers();
    } else {
      this.users[index].pin = 1;
      this.saveUsers();
    }
  }

  removePin(index) {
    if (!isNaN(this.users[index].pin)) {
      if (this.users[index].pin !== 0) {
        this.users[index].pin -= 1;
        this.saveUsers();
      }
    } else {
      this.users[index].pin = 0;
      this.saveUsers();
    }
  }

  saveUsers() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  removeUser(index) {
    this.users.splice(index, 1);
    this.saveUsers();
  }
}

// export default function UserManager (){
//   var instence = {};
//   instence.users = JSON.parse(localStorage.getItem("users")) || [];
//   instence.loadUsers=loadUsers
//   instence.addUser=addUser
//   instence.addPin=addPin
//   instence.removePin=removePin
//   instence.saveUsers=saveUsers
//   instence.removeUser=removeUser
//   return instence;
//  }
//  var loadUsers=function() {
//    var userData = this.users || [];
//    return userData;
//  }
//  var addUser=function(user) {
//    this.users.push(user);
//    this.saveUsers();
//  }

//  var addPin=function(index) {
//    if (!isNaN(this.users[index].pin)) {
//      this.users[index].pin += 1;
//      this.saveUsers();
//    } else {
//      this.users[index].pin = 1;
//      this.saveUsers();
//    }
//  }

//  var removePin= function(index) {
//    if (!isNaN(this.users[index].pin)) {
//      if (this.users[index].pin !== 0) {
//        this.users[index].pin -= 1;
//        this.saveUsers();
//      }
//    } else {
//      this.users[index].pin = 0;
//      this.saveUsers();
//    }
//  }

// var saveUsers=function() {
//    localStorage.setItem("users", JSON.stringify(this.users));
//  }

//   var removeUser= function(index) {
//    this.users.splice(index, 1);
//    this.saveUsers();
//  }
