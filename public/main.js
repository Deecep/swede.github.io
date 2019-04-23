var mainApp = {};

(function() {
  var firebase = app_fireBase;
  var uid = null;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
      var uid = user.uid;
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      console.log(user.displayName);
      console.log(user.email);
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
})();
