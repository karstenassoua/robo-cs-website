const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) {
        return {
            error: "Request not authorized. User must be an administrator to fufill request."
        };
    }
    // Get user by email address and add custom claim to them.
    return admin.auth().getUserByEmail(data.email).then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })
    }).then((user) => {
        return {
            message: `Success ${data.email} has been made an admin.`
        }
    }).catch(error => {
        return error;
    });
})
