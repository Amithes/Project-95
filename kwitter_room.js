const firebaseConfig = {
    apiKey: "AIzaSyC8rbAmIvjtsBibsd6qDrQJ5FPHlwHDsgY",
    authDomain: "letschat-2f3cb.firebaseapp.com",
    databaseURL: "https://letschat-2f3cb-default-rtdb.firebaseio.com",
    projectId: "letschat-2f3cb",
    storageBucket: "letschat-2f3cb.appspot.com",
    messagingSenderId: "431307118677",
    appId: "1:431307118677:web:fe181750b6ce6724d01cdc"
  };
  firebase.initializeApp(config);
  const app = initializeApp(firebaseConfig);

  user_name = localStorage,getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+user_name+":"

  function addRoom()
  {
    move_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"Adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name - "+Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html"
}