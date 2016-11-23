const router = require('express').Router();
const session = require('express-session');
const google = require('googleapis');
const gmail = google.plus('v1');
const OAuth2 = google.auth.OAuth2;

function getOAuthClient (clientId, clientSecret) {
    return new OAuth2(clientId, clientSecret, 'http://localhost:3001/logged/');
}

// http://voidcanvas.com/googles-oauth-api-node-js/

const saveSeshGetDetails = (req, res) => {
    var oauth2Client = getOAuthClient('491020538989-p7rt3a2bpl8qloj56qedsd327q5sg10p.apps.googleusercontent.com', 'UakPsyWEGXBp__cjsqcMB1hA');
    var session = req.session;
    var code = req.query.code; // the query param code

    oauth2Client.getToken(code, function(err, tokens) {
      // Now tokens contains an access_token and an optional refresh_token. Save them.

      if(!err) {
        oauth2Client.setCredentials(tokens);
        //saving the token to current session
        session["tokens"]=tokens;
        console.log(session);
        res.send('success!!')
      }else{
        console.log(err);
      }
    });
}



router.route('')
  .get(saveSeshGetDetails)
module.exports = router;
