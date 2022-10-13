import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBq8HZPc4q5qCCVLrBa_ehGidEcX-A0uiw",
  authDomain: "testnotif-d3dd1.firebaseapp.com",
  projectId: "testnotif-d3dd1",
  storageBucket: "testnotif-d3dd1.appspot.com",
  messagingSenderId: "748263538674",
  appId: "1:748263538674:web:c9a1086b4d98affa18b56b",
  measurementId: "G-BGS5TH60LQ"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BIZ8mBlwaVD5QYkDAVZg9h219tNojjptnzl18Q2yAwO5_Zs1cTdKjOUOYWJ8pRuKIX3dZpuJXYOnpJ9vw5wVueQ",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
