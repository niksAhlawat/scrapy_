// 3. How many Topwear products don't have any discount on them?
// Output Sample is below the query.

// Select the database to use.
use('nikhil_ahlawat');


const aggregation =  [
    // First we will filter database to only include "Topwear" category
    { $match : { product_category : "Topwear" } },

    // Comparing if sale_price and original_price are equals, then we don't have discount on products.
    { $match : { $expr:{$eq:["$sale_price", "$original_price"]}}}, 
    
    // counting our products here (giving _id accumulator null because we only want SUm)
    { $group: { _id: null, count: { $sum: 1 } } }
];


printjson (db.flipkart.aggregate(aggregation));



// OUTPUT

/*

Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query3.js")
[ { _id: null, count: 1496 } ]

*/