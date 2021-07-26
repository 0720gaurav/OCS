const GetModel = require('./GetModel');

module.exports = {
  create: (req, res) => {
    let get = new GetModel({
     _id: req.body._id,
     clg: req.body.clg
     
    
    });

    get.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    GetModel.update({_id: req.body._id}, req.body)
      .then(get => {
        if (!get) res.json({ success: false, result: "get does not exist" });

        res.json(get);
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  retrieve: (req, res) => {
    GetModel.find()
      .then(result => {
        if (!result) res.json({ success: false, result: "No results found" });

        res.json({ success: true, result: result });
      })
      .catch(err => res.json({success: false, result: err}));
  },
  delete: (req, res) => {
    GetModel.remove({_id: req.body._id})
      .then(result => {
        if (!result) res.json({ success: false, result: "No counselling was found with the ID" });
        res.json({ success: true, result: result });
      })
      .catch(err => res.json({ success: false, result: err }));
  }
}