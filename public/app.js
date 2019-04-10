//APE 2019.
// Initialize Firebase

// TODO 2 - Fix up this indentation. Note how this indentation is 2 spaces, and not aligned to the right, and the rest of the code is 4 spaces. Keep it consistent.



// get elements
// TODO 3 
//   - These names would probably be better as `emailElement`, `loginBtnElement` etc. Since they are getting DOM Elements, not text or anything. 
//   - Its also common to prefix `$` to element variables, so you don't have to write `element` all the time, so they could be `$email`, `$loginButton`
//   - Don't be affraid to use fukl words like `button` instead of `btn`, you're not saving much space, they aren't very long and `button` is much easier to read
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogin = document.getElementById('btnLogin');


//login event
// TODO 4 
//   - Always leave a space between `//` and your comment starting. 
//   - This comment `login event` doesn't really have to be here. The variable name `btnLogin` and method call `addEventListener('click'` say what is happening already pretty well.
btnLogin.addEventListener('click', e => {

    //get email and pass field
    const email = txtEmail.value;
    const pass = txtPassword.value;
    // TODO 8
    //   - Probably shouldn't continue here if either email or pass are bllank


    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);

    // TODO 6
    //   - When there is an error, we should display it to the user
    promise.catch(e => console.log(e.message));

});

//SignUp Event 

btnSignUp.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);

    // TODO 7
    //   - When there is an error, we should display it to the user
    promise.catch(e => console.log(e.message));

});

//add realtime listener 

firebase.auth().onAuthStateChanged(firebase => {
    // TODO 5
    //   - getting error in console when page loads here, what's wrong?
    //   - This runs on page load right? lets use this to try and hide/show the correct buttons, eg shouldn't have logout if the user is not logged in
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('We are not logged in!');
    }

})


