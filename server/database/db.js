// const product = require('../models/products')

const product = require("../models/products")
const productsData = require('../constant/next')

const saveProdcut = async()=>{
    try {
        await product.insertMany({productsData})
        console.log("products added");
        // console.log(productsData);
    } catch (error) {
        console.log('error while inserting products',error.message);
    }
}
// saveProdcut()

// export default saveProdcut
// export default saveProdcut

module.exports = saveProdcut