# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

from scrapy import Field, item


class ScrapyItem(item):
    # define the fields for your item here like:
    
    name = Field()
    brand = Field()
    image_urls = Field()
    product_page_url = Field()
    product_category = Field()
    original_price = Field()
    sale_price = Field()