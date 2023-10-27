import admin from 'firebase-admin';

const serviceAccount = require('AIzaSyDBe87KGe855GhzCNBSnbVYY3dhH9RIsWU');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://thesis-8d239.firebaseapp.com', 
});

const db = admin.firestore();

export { admin, db };
