// 2. How many products have a discount on them?
// Output Sample is below the query.


// Select the database to use.
use('nikhil_ahlawat');

// Since our Original_price and Sale_price was same for all products, so will get no result.
// We are comparing sale_price and Original_price. if Sale_price is less than original_price, 
// than we have discounted products whom we will print.

const aggregation =  { $match:
    { $expr: { $lt: ["$sale_price", "$original_price"]}}
};


printjson (db.flipkart.aggregate(aggregation));


// OUTPUT - NO OUTPUT SINCE NO DISCOUNT ON PRODUCTS

/*

Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query2.js")
null

*/