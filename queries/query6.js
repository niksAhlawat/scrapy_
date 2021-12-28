// 6. How many products have `shirt` in their name?
// Output Sample is below the query.

// Select the database to use.
use('nikhil_ahlawat');

//manually setting text index for all string literals using wildcard $**
db.flipkart.createIndex( { "$**": "text" } );

// Searching for "shirt" in whole collection
var shirts = db.flipkart.find( { $text: { $search: "shirt" } } );

//printing for output
printjson (shirts);



// OUTPUT

/*

Atlas atlas-ulggsn-shard-0 [primary] nikhil_ahlawat> load("./Desktop/nikhil_ahlawat/queries/query6.js")
[
  {
    _id: ObjectId("61c624edebdb9d8dad092210"),
    brand: 'PURDEY',
    name: 'Linen shirt',
    product_page_url: 'https://www.net-a-porter.com/en-in/shop/product/purdey/clothing/shirts/linen-shirt/11452292646583212',
    original_price: 411,
    sale_price: 411,
    image_urls: [
      '//www.net-a-porter.com/variants/images/25185454455893212/in/w358_q60.jpg',
      '//www.net-a-porter.com/variants/images/25185454455893212/ou/w358_q60.jpg'
    ],
    product_category: 'Topwear'
  },
  {
    _id: ObjectId("61c6240febdb9d8dad09215a"),
    brand: 'PURDEY',
    name: 'Linen shirt',
    product_page_url: 'https://www.net-a-porter.com/en-in/shop/product/purdey/clothing/shirts/linen-shirt/11452292646583203',
    original_price: 373,
    sale_price: 373,
    image_urls: [
      '//www.net-a-porter.com/variants/images/11452292645955703/in/w358_q60.jpg',
      '//www.net-a-porter.com/variants/images/11452292645955703/ou/w358_q60.jpg'
    ],
    product_category: 'Topwear'
  },
  {
    _id: ObjectId("61c62414ebdb9d8dad092185"),
    brand: 'BOTTEGA VENETA',
    name: 'Jersey shirt',
    product_page_url: 'https://www.net-a-porter.com/en-in/shop/product/bottega-veneta/clothing/shirts/jersey-shirt/31432202865202906',
    original_price: 1472,
    sale_price: 1472,
    image_urls: [
      '//www.net-a-porter.com/variants/images/11452292645955703/in/w358_q60.jpg',
      '//www.net-a-porter.com/variants/images/11452292645955703/ou/w358_q60.jpg'
    ],
    product_category: 'Topwear'
  },
  {
    _id: ObjectId("61c623c0ebdb9d8dad091eeb"),
    brand: 'BOTTEGA VENETA',
    name: 'Wool shirt',
    product_page_url: 'https://www.net-a-porter.com/en-in/shop/product/bottega-veneta/clothing/shirts/wool-shirt/10163292707690874',
    original_price: 1196,
    sale_price: 1196,
    image_urls: [
      '//www.net-a-porter.com/variants/images/8008779905612764/in/w358_q60.jpg',
      '//www.net-a-porter.com/variants/images/8008779905612764/ou/w358_q60.jpg'
    ],
    product_category: 'Topwear'
  },
  {
    _id: ObjectId("61c62392ebdb9d8dad091d8e"),
    brand: 'BOTTEGA VENETA',
    name: 'Denim shirt',
    product_page_url: 'https://www.net-a-porter.com/en-in/shop/product/bottega-veneta/clothing/shirts/denim-shirt/26191867424542623',
    original_price: 1522,
    sale_price: 1522,
    image_urls: [
      '//www.net-a-porter.com/variants/images/24665545640569674/in/w358_q60.jpg',
      '//www.net-a-porter.com/variants/images/24665545640569674/ou/w358_q60.jpg'
    ],
    product_category: 'Topwear'
  },
  {
    _id: ObjectId("61c62351ebdb9d8dad091bba"),
    brand: 'VICTORIA BECKHAM',
    name: 'Denim shirt',
    product_page_url: 'https://www.net-a-porter.com/en-in/shop/product/victoria-beckham/clothing/shirts/denim-shirt/13452677153086405',
    original_price: 481,
    sale_price: 481,
    image_urls: [
      '//www.net-a-porter.com/variants/images/9649229528663314/in/w358_q60.jpg',
      '//www.net-a-porter.com/variants/images/9649229528663314/ou/w358_q60.jpg'
    ],
    product_category: 'Topwear'
  }
  ]
Type "it" for more
  
  */

