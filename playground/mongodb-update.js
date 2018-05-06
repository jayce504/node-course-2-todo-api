//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //identical to the code immediately above it.

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  //   db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5aeef92ebe329427d7f754fa")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

    db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5ae902001c1e8a3ed08e0fc1")
  }, {
    $set: {
      name: "Erin"
  },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
    }).then((result) => {
    console.log(result);
  });
  //db.close();
});
