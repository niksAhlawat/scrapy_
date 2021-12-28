// 1. How many products did you scrape?
// Output Sample is below the query.

// Select the database to use.
use('nikhil_ahlawat');

/*
// Here we can print all documents of our collection.
cursor = db.flipkart.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}

// Varioud method to find the documents in Collection.
db.flipkart.find().count();
db.flipkart.count(); 
db.flipkart.estimatedDocumentCount();
db.flipkart.countDocuments();
*/

printjson(db.flipkart.aggregate( [
    { $count: "Product Scraped" }
 ]));



// OUTPUT

/*

Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query1.js")
[ { 'Product Scraped': 2996 } ]

*/