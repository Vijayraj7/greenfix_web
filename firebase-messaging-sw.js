importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCmUIxnIVDTK_GM5nUVLS4TS18yeSCy7Jc",
    authDomain: "green-fix.firebaseapp.com",
    projectId: "green-fix",
    storageBucket: "green-fix.firebasestorage.app",
    messagingSenderId: "304271939104",
    appId: "1:304271939104:android:db0e2b544074e0d7e24e45",
    measurementId: "G-JKVT00YV73"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification(payload.data.title, {
        body: payload.data.body ? payload.data.body : '',
        icon: payload.data.icon ? payload.data.icon : ''
    });
});