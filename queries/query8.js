// 8. How many products have discount % greater than 30%?
// Output Sample is below the query.

// Select the database to use.
use('nikhil_ahlawat');

// Since Sale and Original price are same so there will no discount, hence null output

const aggregation = [
    // calculating discount and storing them into discount_percent.
    { $project : 
        { discount_percent : {$multiply:[{$divide:[{$subtract:["$original_price","$sale_price"]},"$original_price"]},100] }}},
        
    // Next comparing discount_percent if greater than 30 or not.    
    { $match: 
        {discount_percent: { $gt: 30 }}}, 

    // Grouping and counting all the occurences if discount_percent is greater than 30%    
    { $group: 
        { _id: null, count: { $sum: 1 } } }
];


printjson (db.flipkart.aggregate(aggregation));


// OUTPUT

/*

Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query8.js")
null

*/