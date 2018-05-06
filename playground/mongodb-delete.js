//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //identical to the code immediately above it.

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
  //   console.log(result);
  // });

  //exercise (Delete duplicates)
  // db.collection('Users').deleteMany({name: 'Nichole'}).then((result) => {
  //   console.log(result);
  // });

  //exercise (deleteOne by id)
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5ae905e04663f404e8625544')
  }).then((results) =>{
    console.log(JSON.stringify(results, undefined, 2));
  });

  //db.close();
});
