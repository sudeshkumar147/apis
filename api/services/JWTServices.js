const jwt = require('jsonwebtoken');
const SECRET = '82093809283098';
module.exports = {

  issuer(payload,expiresIn) {
    return jwt.sign(payload,SECRET,{
      expiresIn
    });
  },

  verify(token) {
    return jwt.verify(token,SECRET);
  }
  
}
