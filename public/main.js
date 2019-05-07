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
})();


function getRule() 
{

  var subButton = document.getElementById('subButton');
  if(subButton){
   subButton.addEventListener('click', swapper, false);
  };

  var ruleField = document.getElementById('ruleField').value;
  var result = document.getElementById('result');
  
  if (ruleField.length < 3)
  {
      result.textContent = 'Rule must contain at least 3 characters';
      //alert('Rule must contain at least 3 characters');
  } else 
    {
      result.textContent = 'Your rule is: ' + ruleField;
      //alert(ruleField);
    }
}
