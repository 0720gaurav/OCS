const LoginModel = require('./ContactModel');

module.exports = {
  create: (req, res) => {
    let contactus = new LoginModel({
      _id: req.body._id,
      lastname:req.body.lastname,
      cno: req.body.cno,
      subject:req.body.subject
     });

    contactus.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  }
  
}