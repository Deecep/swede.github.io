var mainApp = {};

(function() {
  var firebase = app_fireBase;
  var uid = null;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
      var email = user.email;
      var displayName = user.displayName;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;

      console.log(user.displayName);
      console.log(user.email);

      document.getElementById("userEmail").innerHTML = "Email: " + email;
      document.getElementById("userName").innerHTML = "Name: " + displayName;
    } else {
      // redirect to login
      uid = null;
      window.location.replace("index.html");
    }
  });

  function logOut() {
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;

  window.onload = function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  };

  const form = document.getElementById("form");
  const log = document.getElementById("log");
  form.addEventListener("submit", logSubmit);
})();
