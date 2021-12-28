// 5. What is the count of discounted products for each brand?
// Output Sample is below the query.

// Select the database to use.
use('nikhil_ahlawat');

// Since our discount_price and original_price are same, so there will be no output of query.
const aggregation = [

    // We are subtracting original and sale price and using $or operator. 
    // If subtraction is 0 then we will have False value of discounted_product else True.
    { $project : { discounted_product : { $or: {$subtract:["$original_price","$sale_price"]} } }},

    // then we are filtering our discounted_price on bases of True value. 
    { $match: {discounted_product: { $eq: true }}}, 

    // Here we are grouping items by brand and counting them for discounted prices.
    { $sortByCount: "$brand" }
];

printjson (db.flipkart.aggregate(aggregation));

// OUTPUT

/*

Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query5.js")
null

*/