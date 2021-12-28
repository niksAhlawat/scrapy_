// 7. How many products have offer price greater than 300?
// Output Sample is below the query.

// Select the database to use.
use('nikhil_ahlawat');

// Using $gt and then counting all the occurences of sale_price when greater than 300
var greater_than_300 = db.flipkart.find( { sale_price: { $gt: 300 } } ).count();

printjson ("Products with Offer Price Greater than 300: ", greater_than_300);


// OUTPUT


/*

Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query7.js")
Products with Offer Price Greater than 300:  2566

*/