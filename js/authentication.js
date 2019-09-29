$('#loginBtn').on('click', function(){
    var username=$('#login').val();
    var password=$('#exampleInputPassword1').val();
  
    firebase.auth().signInWithEmailAndPassword(username, password).then(function(user) {
        user = firebase.auth().currentUser;
        redirect("./pages/game.html");
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        // auth/email-already-in-use
        $('#loginError').html(errorMessage);
    })
})


$('#registrationBtn').on('click', function(){
    var username=$('#recipient-name').val();
    var password=$('#recipient-pass').val();
  
    firebase.auth().createUserWithEmailAndPassword(username, password).then(function(user) {
        user = firebase.auth().currentUser;
        redirect("./pages/game.html");
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        // auth/email-already-in-use
        $('#registrationError').html(errorMessage);
    })
})

//utils
function redirect(url){
    window.location.replace(url);
}