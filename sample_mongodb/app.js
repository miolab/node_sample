const MongoClient = require("mongodb").MongoClient;
const setting = require("./setting");

const url = "mongodb://localhost/" + setting.db;

MongoClient.connect(url, setting.connectOption, (err, client) => {
  if (err) {
    return console.dir(err);
  }
  console.log("Connected to DB.");

  const db = client.db(setting.db);

  db.collection("users", async (err, collection) => {
    let docs = [
      { name: "im1", score: 90 },
      { name: "im2", score: 95 },
      { name: "im3", score: 88 },
    ];

    /* INSERT
    collection.insertMany(docs, (err, result) => {
      console.dir(result);
    });
    */

    /* UPDATE
    collection.updateMany(
      { name: "im1" },
      { $set: { score: 120 } },
      (err, result) => {
        if (err) {
          console.log("update err");
        }
        console.log("UPDATE;\n", result);
      }
    );
    */

    // DELETE
    collection.deleteMany({ name: "im3" }, (err, result) => {
      if (err) {
        console.log("delete err");
      }
      console.log("DELETE;\n", result);
    });

    // SELECT
    await collection.find().toArray((err, items) => {
      console.log("SELECT;\n", items);
      client.close();
    });

    /* SELECT with stream
    const stream = collection.find({ name: "im1" }).stream();
    stream.on("data", (items) => {
      console.log("SELECT with stream;\n", items);
    });
    stream.on("end", () => {
      console.log("finished.");
      client.close();
    });
    */
  });
});

/* INSERT (results)
> mongo
.
.
> use nodejsdb
switched to db nodejsdb
> show collections
users
> db.users.find()
{ "_id" : ObjectId("5eaa575bb06aea870098ca6c"), "name" : "im1", "score" : 90 }
{ "_id" : ObjectId("5eaa575bb06aea870098ca6d"), "name" : "im2", "score" : 95 }
{ "_id" : ObjectId("5eaa575bb06aea870098ca6e"), "name" : "im3", "score" : 88 }
>
*/
