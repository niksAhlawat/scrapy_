// 9. How many footwear products have a 50% discount?
// Output Sample is below the query.

// Select the database to use.
use('nikhil_ahlawat');

// Since Sale and Original price are same so there will no discount, hence null output

const aggregation = [ 
    // Filtering as we only want "footwear" products by product_category.
    { $match: 
        { product_category : "Footwear" } },

    // Calculating discount and storing into discount_percent.
    { $project: 
        { discount_percent: { $multiply: [{ $divide: [{ $subtract: ["$original_price", "$sale_price"] }, "$original_price"] }, 100] } } },
        
    // filtering again on basis if discount_percent is equal to 5o or not
    { $match: 
        { discount_percent: { $eq: 50 } } }, 

    // counting all the occurence when discount_percent is equal to 50%.
    { $group:
        { _id: null, count: { $sum: 1 } } }];


printjson (db.flipkart.aggregate(aggregation));



// OUTPUT 

/*
Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query9.js")
null

*/