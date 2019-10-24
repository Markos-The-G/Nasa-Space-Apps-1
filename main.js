document.getElementById("register").style.display = "None";
//document.getElementById("logout").style.display = "None";
document.getElementById("login").style.display = "None";


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
      console.log("logged in");
      exit()
      window.useruid = user.uid;
      window.useremail = user.email;
      window.path = 'Users/' + useruid;

      if(user != null){
        window.useremail = user.email;
      }
    } else {
      // No user is signed in.
    }
  
  
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    success = true;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert("Error : " + errorMessage);
  
      // ...
    });
    
  }
  
  function logout(){
    firebase.auth().signOut();
    console.log("logged out");
  }
  
 
  
  function register(){
  
    if (document.getElementById("register_password_field").value == document.getElementById("register_confirm_field").value){
      var userEmail = document.getElementById("register_email_field").value;
      var userPass = document.getElementById("register_password_field").value;
      mistakes = false;
      firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
  
        window.alert("Error : " + errorMessage);
        if (errorMessage){
          mistakes = true;
        };
        // ...
      //firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
      });
    }else if (document.getElementById("register_password_field").value !== document.getElementById("register_confirm_field").value){
      window.alert("Error : passwords do not match");
      mistakes = true;
    }
    window.useremail = document.getElementById("register_email_field").value
    document.getElementById("register_email_field").value = '';
    document.getElementById("register_password_field").value = '';
    document.getElementById("register_confirm_field").value = '';
    console.log("account createdn ")
    console.log(window.useruid)

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        document.getElementById("register_email_field").value = '';
        window.useruid = user.uid
        firebase.database().ref('Users/').child(window.useruid).once('value', function(snapshot){
          x = String(snapshot.val())
          console.log(x)
          if(x == 'null'){
            //console.log("hi")
            //listvars.push(useruid)
            adduser(window.useremail);
            //console.log(user);
          }
        });
      } else {
        // User not logged in or has just logged out.
      }
    });
  }
  
  function tologin(){
    document.getElementById("register").style.display = "None";
    document.getElementById("login").style.display = "block";
    console.log("login")
  }
  function toregister(){
    document.getElementById("login").style.display = "None";
    document.getElementById("register").style.display = "block";
    console.log("reg")
  }
  function exit() {
    document.getElementById("login").style.display = "None";
    document.getElementById("register").style.display = "None";
    console.log("exit")
  }


  

  function adduser(useremail){

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("fuck me")
        document.getElementById("register_email_field").value = '';
        window.useruid = user.uid
        path = 'Users/' + window.useruid + "/";
        window.num_trips = 1;
        firebase.database().ref('Users/').child(window.useruid).once('value', function(snapshot){
          x = String(snapshot.val())
          console.log(x)
          if(x == 'null'){
            //console.log("hi")
            //listvars.push(useruid)
            firebase.database().ref(path).set({
              'num trips': num_trips,
              'useremail': useremail
          });   
            //console.log(user);
          }
        });

      } else {
        // User not logged in or has just logged out.
      }
    });

 
  }