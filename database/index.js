const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cowlist');

var CowSchema = new mongoose.Schema({
  name: String,
  description: String
});

var Cow = mongoose.model('Cow', CowSchema);

const save = data => {
  console.log('data inside the db save function looks like', data);
  return Cow.findOneAndUpdate(
    { name: data.name },
    { name: data.name, description: data.description },
    { upsert: true }
  )
    .exec()
    .then(err => {
      if (err) console.log(err);
    });
};

const get = () => {
  return Cow.find({})
    .limit(100)
    .exec();
};

module.exports.save = save;
module.exports.get = get;
