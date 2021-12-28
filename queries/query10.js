// 10. Which brand in  Topwear section is selling the most number of products?
// Output Sample is below the query.

// Select the database to use.
use('nikhil_ahlawat');



const aggregation = [
    // As we only want Topwear product, hence $match
    { $match : { product_category : "Topwear" } },

    // Grouping and Sorting by $brand in descending order
    { $sortByCount: "$brand" }
  ];


printjson (db.flipkart.aggregate(aggregation));



// OUTPUT Sample

/*
Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query10.js")
[
  { _id: 'SAINT LAURENT', count: 67 },
  { _id: 'BALENCIAGA', count: 55 },
  { _id: 'DRIES VAN NOTEN', count: 47 },
  { _id: 'THE ROW', count: 41 },
  { _id: 'AZ FACTORY', count: 39 },
  { _id: 'JAMES PERSE', count: 34 },
  { _id: 'NINETY PERCENT', count: 34 },
  { _id: 'ALEXANDER MCQUEEN', count: 33 },
  { _id: 'GUCCI', count: 33 },
  { _id: 'ZIMMERMANN', count: 32 },
  { _id: 'BALMAIN', count: 27 },
  { _id: 'BOTTEGA VENETA', count: 27 },
  { _id: 'ALAÏA', count: 26 },
  { _id: 'TOTÊME', count: 22 },
  { _id: 'GIVENCHY', count: 20 },
  { _id: 'KHAITE', count: 20 },
  { _id: 'NILI LOTAN', count: 19 },
  { _id: 'ATM ANTHONY THOMAS MELILLO', count: 18 },
  { _id: 'ULLA JOHNSON', count: 17 },
  { _id: 'CHLOÉ', count: 16 }
]
Type "it" for more

*/