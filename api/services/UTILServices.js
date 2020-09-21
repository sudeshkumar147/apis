const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {

  async hashPassword(password) {
    try {
      return await bcrypt.hash(password,saltRounds);
    } catch(err) {
      // return res.serverError(err);
    }
  },

  async comparePassword(password,hashPassword) {
    try {
      return await bcrypt.compare(password,hashPassword);
    } catch(err) {
      // return res.serverError(err);
    }
  }
  
}
