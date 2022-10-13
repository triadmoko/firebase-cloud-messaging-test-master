// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBq8HZPc4q5qCCVLrBa_ehGidEcX-A0uiw",
    authDomain: "testnotif-d3dd1.firebaseapp.com",
    projectId: "testnotif-d3dd1",
    storageBucket: "testnotif-d3dd1.appspot.com",
    messagingSenderId: "748263538674",
    appId: "1:748263538674:web:c9a1086b4d98affa18b56b",
    measurementId: "G-BGS5TH60LQ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});