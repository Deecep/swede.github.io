//APE 2019
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvNXC31lNmym8bywLU-5cQpj1r9Ff-rvs",
    authDomain: "ruleslist-499ae.firebaseapp.com",
    databaseURL: "https://ruleslist-499ae.firebaseio.com",
    projectId: "ruleslist-499ae",
    storageBucket: "ruleslist-499ae.appspot.com",
    messagingSenderId: "709988376759"
  };
  firebase.initializeApp(config);


// get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogin = document.getElementById('btnLogin');
  

//login event
btnLogin.addEventListener('click', e => {

    //get email and pass field
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    const promise = auth.signInWithEmailAndPassword(email, pass);
    
    promise.catch(e => console.log(e.message));
    
    });

//SignUp Event 

btnSignUp.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    
    promise.catch(e => console.log(e.message));

});

//add realtime listener 

firebase.auth().onAuthStateChanged(firebase =>{
    if(firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('We are not logged in!');
    }

    })


