const Airtable = require('airtable-node');
const dotenv = require('dotenv').config();

const airtable = new Airtable({ apiKey:process.env.AIRTABLE_API_KEY})
  .base('apppQ3QqijVydRuf2')
  .table('products')


exports.handler = async (event, context, cb) => {
  try {
    const {records} = await airtable.list()
    const product = records.map((product)=>{
      const {id} = product
      const {name, image,price} = product.fields
      const url = image[0].url
      return {id, name, url, price}
    })
    return {
      statusCode: 200,
      body: JSON.st
    
    }
  } catch (error) {
    return {
      statusCode: 500,
      body:'Server error'
    }
    
  }
    
}
