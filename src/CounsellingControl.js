const CounsellingModel = require('./CounsellingModel');

module.exports = {
  create: (req, res) => {
    let counselling = new CounsellingModel({
     _id: req.body._id,
     a: req.body.a,
     b: req.body.b,
     c: req.body.c,
    d: req.body.d
    
    });

    counselling.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    CounsellingModel.update({_id: req.body._id}, req.body)
      .then(counselling => {
        if (!counselling) res.json({ success: false, result: "counselling does not exist" });

        res.json(counselling);
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  retrieve: (req, res) => {
    CounsellingModel.find()
      .then(result => {
        if (!result) res.json({ success: false, result: "No results found" });

        res.json({ success: true, result: result });
      })
      .catch(err => res.json({success: false, result: err}));
  },
  delete: (req, res) => {
    CounsellingModel.remove({_id: req.body._id})
      .then(result => {
        if (!result) res.json({ success: false, result: "No counselling was found with the ID" });
        res.json({ success: true, result: result });
      })
      .catch(err => res.json({ success: false, result: err }));
  }
}