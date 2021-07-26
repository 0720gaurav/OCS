const LoginModel = require('../src/LoginModel');

module.exports = {
  create: (req, res) => {
    let loginuser = new LoginModel({
      username: req.body.username,
      password:req.body.password
     });

    loginuser.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  }
  
}