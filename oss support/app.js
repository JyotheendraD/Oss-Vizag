// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCY1RuCy85mz7NtjYxkvzr4YP26z7Vuc8w",
    authDomain: "onestopsolutioncontact-abf8f.firebaseapp.com",
    projectId: "onestopsolutioncontact-abf8f",
    storageBucket: "onestopsolutioncontact-abf8f.appspot.com",
    messagingSenderId: "741179330716",
    appId: "1:741179330716:web:89d56b98edc42331c3dd59",
    measurementId: "G-F0HH39F4G2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//reference messages collection

var messagesref = firebase.database().ref('message');
document.getElementById('contact').addEventListener('submit', submitform);

//submit form
function submitform(e) {
    e.preventDefault();

    var name = getinpitval('name');
    var email = getinpitval('email');
    var mobile = getinpitval('mobile');
    var message = getinpitval('message');

    //save message
    savemessage(name, email, mobile, message);


    //show alert

    document.querySelector('.alert').style.display = 'block';


    //hide alert

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);



}

//function to get form values
function getinpitval(id) {
    return document.getElementById(id).value;
}


function savemessage(name, email, mobile, message) {
    var newmessageref = messagesref.push();
    newmessageref.set({
        name: name,
        email: email,
        mobile: mobile,
        message: message
    });
}