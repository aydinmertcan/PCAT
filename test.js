const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//connect DB
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

// read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// update a photo
// const id = "6198ed1d1f021369513a4a36";
// Photo.findById(
//     id, {
//         title: "Photo Title 1 updated",
//         description: "Photo description 1 upgraded."
//     },
//     (err, data) => {
//         console.log(data);
//     }
// );

// delete a photo
const id = "6198ed1d1f021369513a4a36"
Photo.findByIdAndDelete(id, (err, data) => {
    console.log('Photo is removed...');
}) 
