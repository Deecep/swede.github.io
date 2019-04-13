//APE 2019

// Get Elements 
const $userEmail = document.getElementById('$userEmail');
const $userPassword = document.getElementById('$userPassword');
const $buttonSignUp = document.getElementById('$buttonSignUp');
const $buttonLogin = document.getElementById('$buttonLogin');

buttonLogin.addEventListener('click', e => {

// Get Email and password field
const email = $userEmail.value;
const pass = $userPassword.value;


// TODO 8
//   - Probably shouldn't continue here if either email or pass are blank
const auth = firebase.auth();

const promise = auth.signInWithEmailAndPassword(email, pass);

// TODO 6
//   - When there is an error, we should display it to the user
promise.catch(e => console.log(e.message));

});

//SignUp Event 
btnSignUp.addEventListener('click', e => {

const email = $userEmail.value;
const pass = $userPassword.value;
const auth = firebase.auth();

const promise = auth.createUserWithEmailAndPassword(email, pass);

// TODO 7
//   - When there is an error, we should display it to the user
promise.catch(e => console.log(e.message));

});

//Add realtime listener 
firebase.auth().onAuthStateChanged(firebase => {
// TODO 5
//   - This runs on page load right? lets use this to try and hide/show the correct buttons, eg shouldn't have logout if the user is not logged in
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('We are not logged in!');
    }

})


