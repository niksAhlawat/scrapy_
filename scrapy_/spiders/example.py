import scrapy
from scrapy_.items import ScrapyItem


class ExampleSpider(scrapy.Spider):
    
    name = 'example'
    allowed_domains = ['net-a-porter.com']
   
    # Base URL
    base_url = "https://www.net-a-porter.com"
     

    def start_requests(self):

        # Defining our links to be crawled
        urls = ['https://www.net-a-porter.com/en-in/shop/clothing/tops',
            'https://www.net-a-porter.com/en-in/shop/shoes']

            
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)        
            


    
    def parse(self, response):
       
        brand = response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "ProductItem24__designer", " " ))]').xpath('text()').extract()
        name =  response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "ProductItem24__name", " " ))]').xpath('text()').extract()
        
        product_page_url =  [self.base_url + x for x in response.xpath('//a[starts-with(@href,"/en-in/shop/product/")]/@href').extract()]
        
        original_price =  [''.join(filter(str.isalnum, string)) for string in response.xpath('//span[contains(@class, "PriceWithSchema9__value")]//text()').extract()]
        sale_price =  [''.join(filter(str.isalnum, string)) for string in response.xpath('//span[contains(@class, "PriceWithSchema9__value")]//text()').extract()]
        
        
        # LOOP Starts here,
        for item in zip(brand, name, product_page_url,original_price, sale_price):
            # Creating Object of our Item holder.
            items = ScrapyItem()

            # At index 0, we have list of brands.
            items['brand'] =  str(item[0])                    # Storing as String

            # At index 1, we have list of names.
            items['name'] =  str(item[1])                     # Storing as String

            # At index 2, we have list of product_page_urls.
            items['product_page_url'] =  str(item[2])         # Storing as String

            # At index 3, we have list of original_prices.
            items['original_price'] =  float(item[3])         # Storing as Float

            # At index 4, we have list of sale_prices.
            items['sale_price'] =  float(item[4])             # Storing as Float

           
            items['image_urls'] =  [response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "DoubleImage18 primaryImage", " " ))]//img/@src').extract()[0],
                                   response.xpath('//div[@class="DoubleImage18 secondaryImage"]//img/@src').extract()[0]]
            

            #category = response.request.url            # This is giving us response as a String.
            if "clothing" in str(response.request.url):
                items['product_category'] = "Topwear"         # Storing as String
            else:
                items['product_category'] = "Footwear"        # Storing as String
            
            yield items  
           # LOOP ends here.
    

        #Logic for our next Page to Page number 25.

        # First we are extracting the URI link from <a> tag.
        next_page_uri = response.xpath('//a[contains(@class, "Pagination7__next")]/@href').extract_first().rstrip()

        # In each link, we have a Page Number specified so we are simply extracting the page number from the link 
        # using filter() and isDigit() functions of String and later casting it as an Integer.
        page_number = int( ''.join(filter(str.isdigit, next_page_uri))) 

        # Here, we are checking if our extraced URI is not empty and Page Number is less than 26. (we will get 1-25 pages)
        if next_page_uri and page_number < 26:
            print("Loop ",page_number)   #Cheking is our logic is working or not.
            self.logger.info(response.url)
            
            # Concating next_page_uri with Base URLs otherwise there will be a HTTPResponse Failure.
            next_page_url = self.base_url + next_page_uri

            # making a generator which will call our parse method again till we reach page number 25.
            yield scrapy.Request(next_page_url, callback=self.parse)




# Code ends here.