const admin = require("firebase-admin");
const path = require("path");

admin.initializeApp({
       credential: admin.credential.cert(
              path.resolve(
                     __dirname,
                     "../../config/database/credential_apirestfirebase.json"
              )
       ),
});

const database = admin.firestore();

module.exports = database;
