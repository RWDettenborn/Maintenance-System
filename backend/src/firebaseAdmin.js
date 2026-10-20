const {inicializeApp, applicationDefault, getApps} = require('firebase-admin/app');

const {getAuth} = require('firebase-admin/auth');

const firebaseApps = getApps().length
? getApps()[0]
: inicializeApp({
    credential: applicationDefault(),
});

const firebaseAdminAuth = getAuth(firebaseApps);

module.exports = { firebaseAdminAuth };